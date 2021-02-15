# Disaster prevention warning broadcast message crawler 災防告警廣播訊息爬蟲

Node.js crawler CWB information"[災防告警廣播訊息服務](https://www.cwb.gov.tw/V7/prevent/PWS_History.htm)"

cron every second
Crawl once per second. If there is updated information on the page, the latest information will sent your uid that you set 
[facebook-chat-api](https://github.com/Schmavery/facebook-chat-api) 


# build

## make a key file

make a key.js, this file is your facebook account/password env

content:

    module.exports = '********';

## packages
 - request
 - cheerio
 - facebook-chat-api
 
 
## Usage

    node yo.js
    
## Demo
<img src="https://i.imgur.com/4ERSdqP.jpg" width="480">
