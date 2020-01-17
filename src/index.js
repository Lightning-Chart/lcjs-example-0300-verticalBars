/*
 * LightningChartJS example for rendering a 'vertical bar chart' using user-side logic as there is no dedicated Chart type for Bars, yet.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisScrollStrategies,
    SolidFill,
    ColorRGBA,
    emptyLine,
    emptyFill,
    AutoCursorModes,
    UIOrigins,
    emptyTick
} = lcjs

const lc = lightningChart()

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]
// Define an interface for creating vertical bars.
let barChart
{
    barChart = (options) => {
        // flat red fill style for positive bars
        const flatRedStyle = new SolidFill().setColor(ColorRGBA(242, 67, 79))
        // flat blue fill style for negative bars
        const flatBlueStyle = new SolidFill().setColor(ColorRGBA(42, 171, 240))

        let x = 0
        const figureThickness = 10
        const figureGap = figureThickness * .5
        const bars = []

        // Create a XY-Chart and add a RectSeries to it for rendering rectangles.
        const chart = lc.ChartXY(options)
            .setTitle('Changes in electricity usage between 2017 and 2018')
            .setAutoCursorMode(AutoCursorModes.onHover)
            // Disable mouse interactions (e.g. zooming and panning) of plotting area
            .setMouseInteractions(false)

        // Bar series represented with rectangles.
        const rectangles = chart.addRectangleSeries()

        // cursor
        //#region
        // Show band using Rectangle series.
        const band = chart.addRectangleSeries()
            .setMouseInteractions(false)
            .setCursorEnabled(false).add({ x: 0, y: 0, width: 0, height: 0 })
            .setFillStyle(new SolidFill().setColor(ColorRGBA(255, 255, 255, 50)))
            .setStrokeStyle(emptyLine)
            .dispose()
        // Modify AutoCursor.
        chart.setAutoCursor(cursor => cursor
            .disposePointMarker()
            .disposeTickMarkerX()
            .disposeTickMarkerY()
            .setGridStrokeXStyle(emptyLine)
            .setGridStrokeYStyle(emptyLine)
            .setResultTable((table) => {
                table
                    .setOrigin(UIOrigins.CenterBottom)
            })
        )
        // Change how series parses its data-points using series method.
        rectangles.setResultTableFormatter((builder, series, figure) => {
            let counter = 0
            // Find cached entry for the figure.
            const entry = bars.find((bar, index) => {
                counter = index;
                return bar.rect == figure
            }).entry
            // Parse result table content from values of 'entry'.
            return builder
                .addRow(`Month: ${months[counter]}`)
                .addRow(`Value: ${entry.value}%`)
        })
        // Apply cursor logic using series.onHover method
        rectangles.onHover((_, point) => {
            if (point) {
                const figure = point.figure
                const dimensions = figure.getDimensionsPositionAndSize()
                // Show band.
                band
                    .setDimensions({
                        x: dimensions.x - figureGap * .5,
                        y: figure.scale.y.getInnerStart(),
                        width: dimensions.width + figureGap,
                        height: figure.scale.y.getInnerInterval()
                    })
                    .restore()
            } else
                band.dispose()
        })
        //#endregion

        // X-axis of the series
        const axisX = chart.getDefaultAxisX()
            .setTitle('Quarter')
            .setMouseInteractions(false)
            .setScrollStrategy(undefined)
            // Disable default ticks.
            .setTickStyle(emptyTick)

        // Y-axis of the series
        const axisY = chart.getDefaultAxisY()
            .setTitle('(%)')
            .setMouseInteractions(false)
            .setScrollStrategy(AxisScrollStrategies.fitting)

        /**
         * Add multiple bars.
         * @param entries Add multiple bars data.
         */
        const addValues = (entries) => {
            for (const entry of entries) {
                bars.push(add(entry))
            }
        }
        /**
         * Add single bar.
         * @param entry Add a single bar data.
         */
        const addValue = (entry) => {
            bars.push(add(entry))
        }
        /**
         * Construct bar to draw.
         * @param entry Single bar data.
         */
        const add = (entry) => {
            // Create rect dimensions.
            const rectDimensions = {
                x: x - figureThickness,
                y: 0,
                width: figureThickness,
                height: entry.value
            }
            // Add rect to the series.
            const rect = rectangles.add(rectDimensions)
            // Set individual color for the bar.
            rect.setFillStyle(entry.value > 0 ? flatRedStyle : flatBlueStyle)

            // Set view manually.
            axisX.setInterval(
                -(figureThickness + figureGap),
                x + figureGap
            )

            // Add custom tick, more like categorical axis.
            axisX.addCustomTick()
                .setValue(x - figureGap)
                .setGridStrokeLength(0)
                .setTextFormatter(_ => entry.category)
                .setMarker(marker => marker
                    .setPadding(4)
                    .setBackground((background) => background
                        .setFillStyle(emptyFill)
                        .setStrokeStyle(emptyLine)
                    )
                )
            x += figureThickness + figureGap
            // Return data-structure with both original 'entry' and the rectangle figure that represents it.
            return {
                entry,
                rect
            }
        }

        // Return public methods of a bar chart interface.
        return {
            addValue,
            addValues
        }
    }
}

// Use bar chart interface to construct series.
const chart = barChart()
// Add multiple bars at once.
chart.addValues([
    { category: '', value: 20 },
    { category: 'Q1', value: 20 },
    { category: '', value: -25 },
    { category: '', value: 40 },
    { category: 'Q2', value: 28 },
    { category: '', value: -23 },
    { category: '', value: -40 },
    { category: 'Q3', value: 35 },
    { category: '', value: 17 },
    { category: '', value: 24 },
    { category: 'Q4', value: -29 },
    { category: '', value: 15 }
])
