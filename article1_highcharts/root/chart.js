const chart = Highcharts.chart('container', {
    chart: {
        type: 'spline',
        inverted: false,
        backgroundColor: '#fff',
        borderColor: '#3e5729',
        borderWidth: 3
    },

    title: {
        text: 'Global Living Planet Index',
        align: 'left',
        style: {
            color: '#3b3b3b',
            fontWeight: 'bold'
        }
    },

    subtitle: {
        text: 'Indicator of Biodiversity Over Time',
        align: 'left',
        style: {
            color: '#5c5c5c',
            fontWeight: 'bold',
            fontSize: 15
        }
    },

    caption: {
        text: '<b>Data Source: </b>' +
        '<a href="https://www.livingplanetindex.org/" target="_blank">Living Planet Index database (WWF)</a>'
    },

    xAxis: {
        reversed: false,
        title: {
            enabled: true,
            text: 'Year'
        },
        accessibility: {
            rangeDescription: 'Year 1970 to 2018'
        },
        maxPadding: 0.05,
        showLastLabel: true,
        endOnTick: true,
        max: 2018
    },

    yAxis: {
        title: {
            text: 'LP Index (1970 = 1)'
        },
        labels: {
            format: '{value:.2f}'
        },
        accessibility: {
            rangeDescription: 'Baseline 1970'
        },
        plotLines: [{
            color: '#717171',
            dashStyle: 'longdashdot',
            width: 2,
            value: 1
        }],
        lineWidth: 2,
        min: .2,
        max: 2
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: false
            },
            color: '#628a42'
        },
        series: {
            label: {
                connectorAllowed: false
            },
            lineWidth: 4,
            pointStart: 1970
        }
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.y:,.2f}</b><br/>'
    },

    sonification: {
        duration: 7000,
        defaultInstrumentOptions: {
            instrument: 'sine'
        }
    },
    
    series: [
        {
        name: 'ci low',
        type: 'line',
        dashStyle: 'Dot',
        lineWidth: 2,
        color: 'rgba(178, 212, 144, 0.7)',
        sonification: { enabled: false },
        data: [
            1,0.973148947,0.947653954,0.926636049,0.902682746,0.876303107,0.849337799,0.818530892,0.789862613,0.765085063,0.74388272,0.725191062,0.699519295,0.672454963,0.645434031,0.624385823,0.60787447,0.590472787,0.573601051,0.564036784,0.554894903,0.543542372,0.528812806,0.509784962,0.492023326,0.472029372,0.462224307,0.449995846,0.438092504,0.422015856,0.408896736,0.39431147,0.383065339,0.373618957,0.367731788,0.36074307,0.35203315,0.341396352,0.328353591,0.311678583,0.295962132,0.280500189,0.270858778,0.26500441,0.263834578,0.262812118,0.257702126,0.254654517,0.25400315
        ],
        marker: { enabled: false },
        enableMouseTracking: false
    },{
        name: 'ci high',
        type: 'line',
        dashStyle: 'Dot',
        lineWidth: 2,
        color: 'rgba(178, 212, 144, 0.7)',
        sonification: { enabled: false },
        data: [
            1,1.009532123,1.011930825,1.01005601,1.006185497,0.997971052,0.984079385,0.956108932,0.927871614,0.906706792,0.892105091,0.878251131,0.853322953,0.825459349,0.798806095,0.779047038,0.763793401,0.745704139,0.727827188,0.718383787,0.710306149,0.699998084,0.684920136,0.663660057,0.643275453,0.620324969,0.610120352,0.596143703,0.581777225,0.561624015,0.545681729,0.529140444,0.516829678,0.506665223,0.501212936,0.4944708,0.485931377,0.473578765,0.457816396,0.437304842,0.418612842,0.400057175,0.388422426,0.381353535,0.38071988,0.380687196,0.375621374,0.373430403,0.374378072
        ],
        marker: { enabled: false },
        enableMouseTracking: false
    },
    {
        name: 'LPI',
        data: [
            1,0.991002759,0.979298836,0.967828407,0.953454341,0.935558012,0.914892185,0.885352412,0.856840467,0.8334748,0.815080934,0.798368748,0.772813851,0.745181848,0.718320243,0.697531144,0.681256656,0.66322487,0.645467006,0.635743437,0.626811227,0.616091396,0.601198509,0.581092963,0.562008977,0.540360964,0.530421358,0.517500764,0.504664511,0.486643792,0.472215375,0.456713694,0.444983943,0.435156567,0.429278308,0.422031513,0.412951521,0.401428042,0.387193914,0.36877125,0.351531515,0.334410414,0.323710899,0.317382643,0.316690208,0.316275314,0.311454081,0.308852702,0.308975673
        ]
    }
    ]
});

document.getElementById('sonify').onclick = function () {
    chart.toggleSonify();
};
