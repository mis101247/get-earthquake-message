var request = require('request');
var cheerio = require('cheerio');


function getEarthquake(callback){
    var url = 'https://www.cwb.gov.tw/V7/modules/MOD_PWS_History.htm?_=' + Date.now();
    request(url, function (err, res, body) {
        var $ = cheerio.load(body);
        
        var Earthquake = [];

        var pare = $('table.TablePWS > tbody > tr.TableBody').first().text().split('\n');
        Earthquake.push(pare);

        
        var result = Earthquake.map(function (elem) {
            return {
                name: elem[1].trim().split(' ')[0],
                time: elem[2].trim(),
                content: elem[3].trim(),
                local: elem[4].trim()
            }
        });

        callback(err, result);
        
    });   
    
}

module.exports = getEarthquake;






