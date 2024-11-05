# JavaScript Vertical Bar Chart

![JavaScript Vertical Bar Chart](verticalBars-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

_Also known as Bar Graph, Column Chart or Column Graph_

This example shows the most basic usage of LightningChart JS `BarChart`.
Bar Charts show discrete numerical comparisons across categories, where the value represents the height of a bar.
LightningChart JS includes a very simple high level feature for creating interactive Bar Charts and supplying them with categorical data:

```ts
const barChart = lightningChart().BarChart()
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
```

[More Bar Chart examples](https://lightningchart.com/lightningchart-js-interactive-examples/search.html?t=bar).


## API Links

* [Bar chart]
* [Bar chart Value Axis]
* [Bar chart Category Axis]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[Bar chart]: https://lightningchart.com/js-charts/api-documentation/v6.1.0/classes/BarChart.html
[Bar chart Value Axis]: https://lightningchart.com/js-charts/api-documentation/v6.1.0/classes/BarChartValueAxis.html
[Bar chart Category Axis]: https://lightningchart.com/js-charts/api-documentation/v6.1.0/classes/BarChartCategoryAxis.html

