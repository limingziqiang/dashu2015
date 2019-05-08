// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include       *
// @grant    GM_xmlhttpRequest
// @grant    GM_log
// @run-at document-end
// ==/UserScript==

(function () {
    'use strict';

    var iHours = ''
    var iMinute = ''
    var fnClick = function () {
        checkNow()
    }


    var fnStep = function(){
        fnClick = function () {
            checkIn()
        }
        fnClick();
        fnClick = function () {
            console.log(11)
        }
        fnRun()
    }

    var fnRun = function () {

        GM_xmlhttpRequest({
            url: "https://www.baidu.com/",
            method: "HEAD",
            onload: function (response) {

                setTimeout(() => {

                    let sHeader = response.responseHeaders.match(/\d{2}:\d{2}:\d{2}/)[0].split(':')
                    iHours = Number(sHeader[0]) + 8
                    iMinute = Number(sHeader[1])

                    console.log(iHours,iMinute);


                    if (/house\.baidu\.com/.test(location.host)) {


                        if (iHours && iHours == 13) {
                           fnStep()
                        }

                        if (iHours && iHours == 18) {
                           fnStep()
                        }
                        fnRun()
                    }

                }, 4e3)
            }
        });

    }

    fnRun()

})();
