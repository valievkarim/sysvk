// ==UserScript==
// @name        sysvk
// @namespace   https://github.com/valievkarim/sysvk/
// @description vk links in sys
// @include     https://sys.mail.ru/users/*
// @version     1
// @grant       none
// ==/UserScript==

var vklink = function() {
    var months = {"января" : 1,	"февраля" : 2, "марта" : 3, "апреля" : 4, "мая" : 5, "июня" : 6, "июля" : 7, "августа" : 8, "сентября" : 9, "октября" : 10, "ноября" : 11, "декабря" : 12};
    var name = $(".user_detail_header").clone().children().remove().end().text().replace(/\(.*\)/g, " ").replace(/\s+/g, " ").trim();
    var birthday_match = $(".user_birthday > span").text().match(/([0-9]+)\s(\S+)/);
    if (birthday_match) {
        var day = birthday_match[1];
        var month = months[birthday_match[2]];
        return "http://vk.com/search?c%5Bbday%5D=" + day + "&c%5Bbmonth%5D=" + month + "&c%5Bname%5D=1&c%5Bq%5D=" + encodeURIComponent(name) + "&c%5Bsection%5D=people";
    } else {
        return "http://vk.com/search?c%5Bage_from%5D=18&c%5Bname%5D=1&c%5Bq%5D=" + encodeURIComponent(name) + "&c%5Bsection%5D=people";
    }
};

$("div.user_detail:nth-child(1) > p.small_heading").append(' <a href="' + vklink() + '" target="_blank"><img src="http://vk.com/favicon.ico" style="vertical-align: bottom"></a>')
