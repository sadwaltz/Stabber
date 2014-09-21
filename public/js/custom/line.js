/**
 * Created with JetBrains WebStorm.
 * User: pc
 * Date: 14-9-21
 * Time: 上午10:23
 * To change this template use File | Settings | File Templates.
 */
/**
 * hightcharts global
 */
Highcharts.setOptions({
    global: {useUTC: false}
});

/**
 * my credits
 */
var defaultCredits = {
    href: 'http://blog.fens.me',
    position: {x: -30, y: -30},
    style: {color: '#191a37', fontWeight: 'bold'},
    text: 'http://blog.fens.me'
}

/**
 * transfer Datetime: 20130101101010 to time
 */
function transferDate(json) {
    for (var i = 0; i < json.length; i++) {
        var obj = json[i].data;
        for (var j = 0; j < obj.length; j++) {
            obj[j][0] = moment(obj[j][0], 'YYYYMMDD').toDate();
        }
    }
    return json;
}

function getLabel(json) {

     var obj = json[0].data;
     var xlabel=[];
     for (var j = 0; j < obj.length; j++) {
         xlabel[j] = obj[j][0];
     }

    return xlabel;
}

function getCategories(json) {
    var categories = json;
    var xlabels = [];
    for (var i = 0; i < json.length; i++) {
        var obj = categories[i].data;
        for (var j = 0; j < obj.length; j++) {
            xlabels[j] = obj[j][0];
            categories[i].data[j]= obj[j][1];

        }
    }
    return {"categories":categories,"xLabels":xlabels};
}
/**
 * Spline Chart Template
 */
function getSplineChart(json) {
    return {
        chart: {
            type: 'spline',
            animation: Highcharts.svg,
            marginRight: 10
        },
        title: {
            text: '中国经济资金面票据利率水平'
        },
        //credits: defaultCredits,
        xAxis: {
            maxPadding: 0.05, minPadding: 0.05, type: 'datetime', tickWidth: 5,
           categories:json.xLabels
        },
        yAxis: {
            title: {text: '利率（%）'},
            plotLines: [
                {value: 0, width: 1, color: '#808080'}
            ]
        },
        tooltip: {

        },
        legend: {enabled: true},
        exporting: {enabled: false},

        series: json.categories
    };
}

/**
 * Create a spline
 */
function createSpline(id,url,transDate){
    $.get(url, function (json) {
        if(transDate||false) json=transferDate(json);
        var highchartsConf =  getSplineChart(getCategories(json));
        $(id).highcharts(highchartsConf);
    });
}