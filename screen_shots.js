var page = require('webpage').create();

page.zoomFactor = 1;

urls = [['http://coreyflynn.github.io/SoapBox/DataAPI/#/','DataAPI'],
        // ['http://coreyflynn.github.io/SoapBox/PDBootcampCMap/#/step-1','PDBootcampCMap'],
        // ['http://coreyflynn.github.io/SoapBox/BroadEProcessing/#/splash','BroadEProcessing']
        ];

var async = require('async');

function capture(urls, callback) {
    var page = require('webpage').create();
    page.viewportSize = { width: 600, height: 600 }
    page.clipRect = {top:0, left:0, width:600, height:600};
    page.zoomFactor = 1;
    page.open(urls[0], function (status) {
        var filename = urls[1] + '.png';
        page.render('./screenshots/' + filename);
        page.close();
        callback.apply();
    });
}

async.eachSeries(urls, capture, function (e) {
    if (e) console.log(e);
    console.log('done!');
    phantom.exit();
});
