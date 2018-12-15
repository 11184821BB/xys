// container
var chart = Highcharts.chart('container',{
	chart: {
		type: 'column',
        backgroundColor: '#fff'
	},
	title: {
		text: 'Site Traffic Overview'
	},
	xAxis: {
		categories: [
			'一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
	},
	tooltip: {
		// head + 每个 point + footer 拼接成完整的 table
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			borderWidth: 0
		}
	},
	series: [{
        name: 'New Orders',
        color: '#7ac5fe',
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
        name: 'Comments',
        color: '#ffb53e',
		data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
	}, {
        name: 'New Users',
        color: '#1ebfae',
		data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
	}, {
        name: 'Visitors',
        color: '#f9243f',
		data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
	}]
});

//chart1
$('#chart1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    },
    title: {
        floating:true,
        text: '92%',
        style: {
            fontSize: "35px",
			lineHeight: "45px",
			color: '#7ac5fe'
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            colors:['#7ac5fe','#f9f9f9'],
            verticalAlign: 'middle',
            overflow: true,
            crop: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'pie',
        innerSize: '92%',
        name: '%',
        data: [
            {name:'total',   y: 92},
            {
                name: 'left',
                y: 8,
                sliced: false,
                selected: false
            }
        ]
    }]
}, function(c) {
    // 环形图圆心
    var centerX = c.series[0].center[0];
    var centerY = c.series[0].center[1];
    var text = 92+"<font color='red'>%<font>";
    // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
    var titleHeight = parseInt(c.title.styles.fontSize);   

    c.setTitle({
        text: text,
		y:centerY + titleHeight/2,
    });

    chart = c;
});

//chart2
$('#chart2').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    },
    title: {
        floating:true,
        text: '92%',
        style: {
            fontSize: "35px",
			lineHeight: "45px",
			color: '#ffb53e'
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            colors:['#ffb53e','#f9f9f9'],
            verticalAlign: 'middle',
            overflow: true,
            crop: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'pie',
        innerSize: '92%',
        name: '%',
        data: [
            {name:'total',   y: 65},
            {
                name: 'left',
                y: 100-65,
                sliced: false,
                selected: false
            }
        ]
    }]
}, function(c) {
    // 环形图圆心
    var centerX = c.series[0].center[0];
    var centerY = c.series[0].center[1];
    var text = 65+"<font color='red'>%<font>";
    // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
    var titleHeight = parseInt(c.title.styles.fontSize);   

    c.setTitle({
        text: text,
		y:centerY + titleHeight/2,
    });

    chart = c;
});
//chart3
$('#chart3').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    },
    title: {
        floating:true,
        text: '92%',
        style: {
            fontSize: "35px",
			lineHeight: "45px",
			color: '#1ebfae'
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            colors:['#1ebfae','#f9f9f9'],
            verticalAlign: 'middle',
            overflow: true,
            crop: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'pie',
        innerSize: '92%',
        name: '%',
        data: [
            {name:'total',   y: 56},
            {
                name: 'left',
                y: 100-56,
                sliced: false,
                selected: false
            }
        ]
    }]
}, function(c) {
    // 环形图圆心
    var centerX = c.series[0].center[0];
    var centerY = c.series[0].center[1];
    var text = 56+"<font color='red'>%<font>";
    // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
    var titleHeight = parseInt(c.title.styles.fontSize);   

    c.setTitle({
        text: text,
		y:centerY + titleHeight/2,
    });

    chart = c;
});

//chart4
$('#chart4').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    },
    title: {
        floating:true,
        text: '92%',
        style: {
            fontSize: "35px",
			lineHeight: "45px",
			color: '#f9243f'
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            colors:['#f9243f','#f9f9f9'],
            verticalAlign: 'middle',
            overflow: true,
            crop: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'pie',
        innerSize: '92%',
        name: '%',
        data: [
            {name:'total',   y: 27},
            {
                name: 'left',
                y: 100-27,
                sliced: false,
                selected: false
            }
        ]
    }]
}, function(c) {
    // 环形图圆心
    var centerX = c.series[0].center[0];
    var centerY = c.series[0].center[1];
    var text = 27+"<font color='red'>%<font>";
    // 标题字体大小，返回类似 16px ，所以需要 parseInt 处理
    var titleHeight = parseInt(c.title.styles.fontSize);   

    c.setTitle({
        text: text,
		y:centerY + titleHeight/2,
    });

    chart = c;
});