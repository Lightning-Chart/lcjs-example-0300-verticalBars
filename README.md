# Vertical Bars

![Vertical Bars](verticalBars.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.


## Description

*Also known as Bar Graph, Column Chart or Column Graph*

This example shows the creation of a column chart made on user side by utilizing RectangleSeries which displays data as vertical bars. Bar Charts show discrete numerical comparisons across categories, where the value represents the height of a bar.

The following code below shows the creation of a Vertical Bar Chart using a pre-defined interface. Moreover, the current interface allows visualizing columns with negative values.

The bar series accepts points in format `{ category: string, value: number }`. Any number of points can be added with a single call.

```javascript
// Create Chart.
const chart = barChart()

// Add bars.
chart.addValues([
    { category: 'A', value: 20 },
    { category: 'B', value: -30 }
])
```

The actual Bar Chart logic just serves to provide a starting point for users to create their own API based on their needs and preferences.


## API Links

* [XY cartesian chart]
* [Rectangle series]
* [Solid FillStyle]
* [Empty FillStyle]
* [Solid LineStyle]
* [Empty LineStyle]
* [RGBA color factory]
* [cursor modes]
* [Axis]
* [Scroll strategies]
* [UI position origins]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

© Arction Ltd 2009-2020. All rights reserved.


[XY cartesian chart]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/classes/chartxy.html
[Rectangle series]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/classes/rectangleseries.html
[Solid FillStyle]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/classes/solidfill.html
[Empty FillStyle]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/globals.html#emptyfill
[Solid LineStyle]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/classes/solidline.html
[Empty LineStyle]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/globals.html#emptyline
[RGBA color factory]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/globals.html#colorrgba
[cursor modes]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/enums/autocursormodes.html
[Axis]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/classes/axis.html
[Scroll strategies]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/globals.html#axisscrollstrategies
[UI position origins]: https://www.arction.com/lightningchart-js-api-documentation/v2.0.0/globals.html#uiorigins

