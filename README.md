# 災防告警廣播訊息爬蟲

利用Node.js爬中央氣象局"[災防告警廣播訊息服務](https://www.cwb.gov.tw/V7/prevent/PWS_History.htm)"
假如執行後每秒去爬一次假如該網頁有更新資訊則會將最新資訊透過 [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api) 發送至你設定的uid上


# 使用說明

## 建立檔案

key.js未加入git 此檔案為你發送訊息的facebook帳戶密碼

內容為

    module.exports = '********';

## 使用的套件
 - request
 - cheerio
 - facebook-chat-api
 
 
## 執行

    node yo.js
    
## Demo
<img src="https://i.imgur.com/4ERSdqP.jpg" width="480">
