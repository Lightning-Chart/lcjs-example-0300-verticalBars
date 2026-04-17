/**
 * Basic example of LightningChart JS Bar Charts.
 */
const lcjs = require('@lightningchart/lcjs')
const { lightningChart, BarChartTypes, BarChartSorting, SolidFill, Themes } = lcjs

const lc = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
const barChart = lc
    .BarChart({
        legend: { visible: false },
        type: BarChartTypes.Vertical,
        theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    const smallView = window.devicePixelRatio >= 2
    if (!window.__lcjsDebugOverlay) {
        window.__lcjsDebugOverlay = document.createElement('div')
        window.__lcjsDebugOverlay.style.cssText = 'position:fixed;top:10px;left:10px;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;z-index:99999;font:12px monospace;pointer-events:none'
        if (document.body) document.body.appendChild(window.__lcjsDebugOverlay)
        setInterval(() => {
            if (!window.__lcjsDebugOverlay.parentNode && document.body) document.body.appendChild(window.__lcjsDebugOverlay)
            window.__lcjsDebugOverlay.textContent = window.innerWidth + 'x' + window.innerHeight + ' dpr=' + window.devicePixelRatio + ' small=' + (window.devicePixelRatio >= 2)
        }, 500)
    }
    return t && smallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
textRenderer: window.devicePixelRatio >= 2 ? lcjs.htmlTextRenderer : undefined,
    })
    .setSorting(BarChartSorting.Disabled)

const theme = barChart.getTheme()

barChart.valueAxis.setTitle('Electricity consumption change').setUnits('%')

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
