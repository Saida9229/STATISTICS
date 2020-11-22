let chart1 = Highcharts.chart('container1', {
  chart: {
    type: 'area',
    backgroundColor: 'transparent'
  },
  title: {
    text: 'Walk in volume',
    align: 'left',
    verticalAlign: 'top'
  },
  subtitle: {
    text: 'Max visitors 50K          Time  14:00-15:00',
    align: 'left',
    verticalAlign: 'bottom'
  },
  xAxis: {
    categories: [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 1
    }
  },
  series: [{
    lineColor:"aqua",
    data: [10,12,15,15,13,22,29,15,13,20,15,45,32,35,20,22,5,20,18,32,18,22,15]
  }]
});


let chart2 = Highcharts.chart('container2', {
  chart: {
      type: 'line',
      backgroundColor: 'transparent'
    },

  subtitle: {
    text: 'Day To Day Case Trend',
    align: 'left',
    verticalAlign: 'top'
    
  },

  yAxis: {
    
  },

  xAxis: {
    categories: [
      27,28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ],
  },

  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      
    }
  },

  series: [{
    name: 'Non Critical',
    data: [110,100,220,320,200,300,180,400,320,320,320,200,290,250,150,140,220,270,300,270,210,240]
  }, {
    name: 'Critical',
    data: [ 50,0,20,95,50,20,300,100,200,290,200,110,90,100,70,90,50,100,150,400,130,130]
  },],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      
    }]
  }
});
let chart3 =Highcharts.chart('container3', {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  
  subtitle: {
    text: 'Earning',
    align: 'left',
    verticalAlign: 'top'
  },
  
  xAxis: {
    categories: ['W1', 'W2', 'W3', 'W4'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 30,
    floating: true,
    
    
  },
  credits: {
    enabled: false
  },
  series: [  {
    name: 'This Week',
    data: [35,52,28,28]
  }, {
    name: 'Previous Month',
    data: [27,42,39,39]
  }]
});