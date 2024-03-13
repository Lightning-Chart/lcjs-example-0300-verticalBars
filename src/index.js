/**
 * Basic example of LightningChart JS Bar Charts.
 */
const lcjs = require('@arction/lcjs')
const { lightningChart, BarChartTypes, BarChartSorting, SolidFill, Themes } = lcjs

const lc = lightningChart()
const barChart = lc
    .BarChart({
        type: BarChartTypes.Vertical,
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setSorting(BarChartSorting.Disabled)

const theme = barChart.getTheme()

barChart.valueAxis.setTitle('Electricity consumption change (%)')

const data = [
    { category: 'Jan', value: 20 },
    { category: 'Feb', value: 20 },
    { category: 'Mar', value: -25 },
    { category: 'Apr', value: 40 },
    { category: 'May', value: 28 },
    { category: 'Jun', value: -23 },
    { category: 'Jul', value: -40 },
    { category: 'Aug', value: 35 },
    { category: 'Sep', value: 17 },
    { category: 'Oct', value: 24 },
    { category: 'Nov', value: -29 },
    { category: 'Dec', value: 15 },
]
barChart.setData(data)

barChart.getBars().forEach((bar) =>
    bar.setFillStyle(
        new SolidFill({
            color:
                bar.value > 0
                    ? theme.examples.badGoodColorPalette[0]
                    : theme.examples.badGoodColorPalette[theme.examples.badGoodColorPalette.length - 1],
        }),
    ),
)
