 // container
 var chart = Highcharts.chart('container', {
	chart: {
		type: 'spline',
        backgroundColor: '#30a5ff'
	},
	title: {
		text: '两地月平均温度'
	},
	subtitle: {
		text: '数据来源: WorldClimate.com'
	},
	xAxis: {
		categories: ['一月', '二月', '三月', '四月', '五月', '六月',
					 '七月', '八月', '九月', '十月', '十一月', '十二月']
	},
	yAxis: {
		title: {
			text: '温度'
		},
		labels: {
			formatter: function () {
				return this.value + '°';
			}
		}
	},
	tooltip: {
		crosshairs: true,
		shared: true
	},
	plotOptions: {
		spline: {
			marker: {
				radius: 4,
				lineColor: '#666666',
				lineWidth: 1
			}
		}
	},
	series: [{
		name: '东京',
		marker: {
			symbol: 'square'
		},
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
			y: 26.5,
			marker: {
				symbol: 'url(https://www.highcharts.com/demo/gfx/sun.png)'
			}
		}, 23.3, 18.3, 13.9, 9.6]
	}, {
		name: '伦敦',
		marker: {
			symbol: 'diamond'
		},
		data: [{
			y: 3.9,
			marker: {
				symbol: 'url(https://www.highcharts.com/demo/gfx/snow.png)'
			}
		}, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	}]
});

//chart1
var chart1 = Highcharts.chart('chart1',{
	chart: {
		type: 'area',
        backgroundColor: '#30a5ff'
	},
	title: {
		text: '美苏核武器库存量'
	},
	subtitle: {
		text: '数据来源: <a href="https://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
		'thebulletin.metapress.com</a>'
	},
	xAxis: {
		allowDecimals: false
	},
	yAxis: {
		title: {
			text: '核武库国家'
		},
		labels: {
			formatter: function () {
				return this.value / 1000 + 'k';
			}
		}
	},
	tooltip: {
		pointFormat: '{series.name} 制造 <b>{point.y:,.0f}</b>枚弹头'
	},
	plotOptions: {
		area: {
			pointStart: 1940,
			marker: {
				enabled: false,
				symbol: 'circle',
				radius: 2,
				states: {
					hover: {
						enabled: true
					}
				}
			}
		}
	},
	series: [{
		name: '美国',
		data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
			   1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
			   27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
			   26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
			   24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
			   22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
			   10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
	}, {
		name: '苏联/俄罗斯',
		data: [null, null, null, null, null, null, null, null, null, null,
			   5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
			   4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
			   15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
			   33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
			   35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
			   21000, 20000, 19000, 18000, 18000, 17000, 16000]
	}]
});
//chart2
var chart2 = Highcharts.chart('chart2',{
	chart: {
		type: 'column',
        backgroundColor: '#30a5ff'
	},
	title: {
		text: '月平均降雨量'
	},
	subtitle: {
		text: '数据来源: WorldClimate.com'
	},
	xAxis: {
		categories: [
			'一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
		title: {
			text: '降雨量 (mm)'
		}
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
		name: '东京',
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: '纽约',
		data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
	}, {
		name: '伦敦',
		data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
	}, {
		name: '柏林',
		data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
	}]
});

   //chart3
var chart3 = Highcharts.chart('chart3', {
	chart: {
		type: 'pie',
        backgroundColor: '#30a5ff',
		options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		}
	},
	title: {
		text: '2014年某网站不同浏览器访问量占比'
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			depth: 35,
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
		}
	},
	series: [{
		type: 'pie',
		name: '浏览器占比',
		data: [
			['Firefox',   45.0],
			['IE',       26.8],
			{
				name: 'Chrome',
				y: 12.8,
				sliced: true,
				selected: true
			},
			['Safari',    8.5],
			['Opera',     6.2],
			['Others',   0.7]
		]
	}]
});

//chart4
var chart4 = Highcharts.chart('chart4', {
	chart: {
		zoomType: 'xy',
        backgroundColor: '#30a5ff',
	},
	title: {
		text: '东京月平均温度和降雨量'
	},
	subtitle: {
		text: '数据来源: WorldClimate.com'
	},
	xAxis: [{
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		crosshair: true
	}],
	yAxis: [{ // Primary yAxis
		labels: {
			format: '{value}',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		},
		title: {
			text: '温度',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		}
	}, { // Secondary yAxis
		title: {
			text: '降雨量',
			style: {
				color: Highcharts.getOptions().colors[0]
			}
		},
		labels: {
			format: '{value} mm',
			style: {
				color: Highcharts.getOptions().colors[0]
			}
		},
		opposite: true
	}],
	tooltip: {
		shared: true
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		x: 120,
		verticalAlign: 'top',
		y: 100,
		floating: true,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	},
	series: [{
		name: '降雨量',
		type: 'column',
		yAxis: 1,
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		tooltip: {
			valueSuffix: ' mm'
		}
	}, {
		name: '温度',
		type: 'spline',
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
		tooltip: {
			valueSuffix: '°C'
		}
	}]
});
//chart5
var chart5 = Highcharts.chart('chart5', {
	chart: {
		type: 'bar',
        backgroundColor: '#30a5ff'
	},
	title: {
		text: '堆叠条形图'
	},
	xAxis: {
		categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
		min: 0,
		title: {
			text: '水果消费总量'
		}
	},
	legend: {
		/* 图例显示顺序反转
         * 这是因为堆叠的顺序默认是反转的，可以设置 
         * yAxis.reversedStacks = false 来达到类似的效果 
         */
		reversed: true 
	},
	plotOptions: {
		series: {
			stacking: 'normal'
		}
	},
	series: [{
		name: '小张',
		data: [5, 3, 4, 7, 2]
	}, {
		name: '小彭',
		data: [2, 2, 3, 2, 1]
	}, {
		name: '小潘',
		data: [3, 4, 4, 2, 5]
	}]
});

//chart6
    var chart6 = Highcharts.chart('chart6', {
	chart: {
		type: 'spline',
        backgroundColor: '#30a5ff'
	},
	title: {
		text: '某地积雪厚度监测'
	},
	subtitle: {
		text: '非规律性时间内的变化'
	},
	xAxis: {
		type: 'datetime',
		title: {
			text: null
		}
	},
	colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
	yAxis: {
		title: {
			text: '积雪 厚度 (m)'
		},
		min: 0
	},
	tooltip: {
		headerFormat: '<b>{series.name}</b><br>',
		pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
	},
	plotOptions: {
		spline: {
			marker: {
				enabled: true
			}
		}
	},
	series: [{
		name: '2007-2008 冬',
		// Define the data points. All series have a dummy year
		// of 1970/71 in order to be compared on the same x axis. Note
		// that in JavaScript, months start at 0 for January, 1 for February etc.
		data: [
			[Date.UTC(1970,  9, 27), 0   ],
			[Date.UTC(1970, 10, 10), 0.6 ],
			[Date.UTC(1970, 10, 18), 0.7 ],
			[Date.UTC(1970, 11,  2), 0.8 ],
			[Date.UTC(1970, 11,  9), 0.6 ],
			[Date.UTC(1970, 11, 16), 0.6 ],
			[Date.UTC(1970, 11, 28), 0.67],
			[Date.UTC(1971,  0,  1), 0.81],
			[Date.UTC(1971,  0,  8), 0.78],
			[Date.UTC(1971,  0, 12), 0.98],
			[Date.UTC(1971,  0, 27), 1.84],
			[Date.UTC(1971,  1, 10), 1.80],
			[Date.UTC(1971,  1, 18), 1.80],
			[Date.UTC(1971,  1, 24), 1.92],
			[Date.UTC(1971,  2,  4), 2.49],
			[Date.UTC(1971,  2, 11), 2.79],
			[Date.UTC(1971,  2, 15), 2.73],
			[Date.UTC(1971,  2, 25), 2.61],
			[Date.UTC(1971,  3,  2), 2.76],
			[Date.UTC(1971,  3,  6), 2.82],
			[Date.UTC(1971,  3, 13), 2.8 ],
			[Date.UTC(1971,  4,  3), 2.1 ],
			[Date.UTC(1971,  4, 26), 1.1 ],
			[Date.UTC(1971,  5,  9), 0.25],
			[Date.UTC(1971,  5, 12), 0   ]
		]
	}, {
		name: '2008-2009 冬',
		data: [
			[Date.UTC(1970,  9, 18), 0   ],
			[Date.UTC(1970,  9, 26), 0.2 ],
			[Date.UTC(1970, 11,  1), 0.47],
			[Date.UTC(1970, 11, 11), 0.55],
			[Date.UTC(1970, 11, 25), 1.38],
			[Date.UTC(1971,  0,  8), 1.38],
			[Date.UTC(1971,  0, 15), 1.38],
			[Date.UTC(1971,  1,  1), 1.38],
			[Date.UTC(1971,  1,  8), 1.48],
			[Date.UTC(1971,  1, 21), 1.5 ],
			[Date.UTC(1971,  2, 12), 1.89],
			[Date.UTC(1971,  2, 25), 2.0 ],
			[Date.UTC(1971,  3,  4), 1.94],
			[Date.UTC(1971,  3,  9), 1.91],
			[Date.UTC(1971,  3, 13), 1.75],
			[Date.UTC(1971,  3, 19), 1.6 ],
			[Date.UTC(1971,  4, 25), 0.6 ],
			[Date.UTC(1971,  4, 31), 0.35],
			[Date.UTC(1971,  5,  7), 0   ]
		]
	}, {
		name: '2009-2010 冬',
		data: [
			[Date.UTC(1970,  9,  9), 0   ],
			[Date.UTC(1970,  9, 14), 0.15],
			[Date.UTC(1970, 10, 28), 0.35],
			[Date.UTC(1970, 11, 12), 0.46],
			[Date.UTC(1971,  0,  1), 0.59],
			[Date.UTC(1971,  0, 24), 0.58],
			[Date.UTC(1971,  1,  1), 0.62],
			[Date.UTC(1971,  1,  7), 0.65],
			[Date.UTC(1971,  1, 23), 0.77],
			[Date.UTC(1971,  2,  8), 0.77],
			[Date.UTC(1971,  2, 14), 0.79],
			[Date.UTC(1971,  2, 24), 0.86],
			[Date.UTC(1971,  3,  4), 0.8 ],
			[Date.UTC(1971,  3, 18), 0.94],
			[Date.UTC(1971,  3, 24), 0.9 ],
			[Date.UTC(1971,  4, 16), 0.39],
			[Date.UTC(1971,  4, 21), 0   ]
		]
	}]
});



// mapCharts
