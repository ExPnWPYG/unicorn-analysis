window.RevealPlotly = function () {
    return {
        id: "RevealPlotly",
        init: function (deck) {
            Reveal.addEventListener('slidechanged', function (event) {
                let plotlyPlots = document.getElementsByClassName("js-plotly-plot");
                for (let i = 0; i < plotlyPlots.length; i++) {
                    Plotly.Plots.resize(plotlyPlots[i]);
                }
            });
        },
    };
};
