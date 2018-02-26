var getEarthquake = require('./getEarthquake');
var login = require('facebook-chat-api');
var key = require('./key.js');
var id = '100000397616290';//要發送給誰的uid

var account = {
    email: 'keyoqq@gmail.com',
    password: key
};

 login(account, function(err, api){

    var interval =  1 * 1000; //每1秒去爬一次
    var init='';

     getEarthquake(function (err, result) {
         init = result[0]['time'];
     });

     setInterval(function(){
             getEarthquake(function (err, result) {
                if (init != result[0]['time']){
                    init = result[0]['time'];
                    var url = 'https://www.cwb.gov.tw/V7/prevent/PWS_History.htm';
                    api.sendMessage('[告警範圍]' + result[0].local + '\n\n' + result[0]['content'] + '\n\n' + url , id);  
                }
             });
     } , interval);
 });


