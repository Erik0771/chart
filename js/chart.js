window.onload = function() {
    CanvasJS.addColorSet("taskColors", [
        "rgb(251, 207, 113)",
        "rgb(0, 172, 172)",
        "rgb(31, 123, 182)",
    ]);
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        animationDuration: 2500,
        theme: "dark2",
        backgroundColor: "rgb(42, 42, 42)",
        colorSet: "taskColors",
        toolTip: {
            cornerRadius: 50,
            borderThickness: 0,
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
        },
        axisY: {
            gridThickness: 1,
            gridColor: "rgba(0, 0, 0, 0.3)",
            tickLength: 0,
            minimum: -60,
            maximum: 60,
        },
        axisX: {
            valueFormatString: " ",
            tickLength: 0,
            labelFontSize: 0,
            labelMaxWidth: 0,
            labelAutoFit: false,
            lineThickness: 0,
        },
        data: [
            {
                legendMarkerType: "square",
                legendMarkerColor: "rgb(251, 207, 113)",
                legendMarkerBorderThickness: 5,
                type: "spline",
                lineThickness: 3,
                name: "Clicks",
                showInLegend: true,
                markerType: "circle",
                markerSize: 10,
                markerBorderColor: "rgb(48, 54, 62)",
                markerBorderThickness: 2,
                dataPoints: [
                    { y: 17 },
                    { y: 58 },
                    { y: 15 },
                    { y: -38 },
                    { y: -25 },
                    { y: 28 },
                    { y: 50 },
                ],
            },
            {
                legendMarkerType: "square",
                legendMarkerColor: "rgb(31, 123, 182)",
                legendMarkerBorderThickness: 5,
                type: "spline",
                lineThickness: 3,
                name: "Page View",
                showInLegend: true,
                markerType: "circle",
                markerSize: 10,
                markerBorderColor: "rgb(48, 54, 62)",
                markerBorderThickness: 2,
                dataPoints: [
                    { y: 40 },
                    { y: 55 },
                    { y: 0 },
                    { y: -43 },
                    { y: -20 },
                    { y: 40 },
                    { y: 55 },
                ],
            },
            {
                legendMarkerType: "square",
                legendMarkerColor: "rgb(26, 188, 156)",
                legendMarkerBorderThickness: 5,
                type: "spline",
                lineThickness: 3,
                name: "Sign ups",
                showInLegend: true,
                markerType: "circle",
                markerSize: 10,
                markerBorderColor: "rgb(48, 54, 62)",
                markerBorderThickness: 2,
                dataPoints: [
                    { y: -30 },
                    { y: 27 },
                    { y: 58 },
                    { y: 18 },
                    { y: -40 },
                    { y: -35 },
                    { y: 19 },
                ],
            },
        ],
    });

    chart.render();

    function toggleDataSeries(e) {
        if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
};
