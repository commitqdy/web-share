import axios from 'axios'
const pingback_url = 'https://msg.qy.net/v5/tvguor/tvguo_h5'
const pingbackJoin = function(query) {
  query += "&os=" + ua + "&fc=" + fc + "&v=0003";
  axios.get(pingback_url + query)
    .then(function(response) {})
    .catch(function(error) {})
}
var ua = (function() {
  var u = navigator.userAgent.toLowerCase();
  var result = "";
  if (/android/.test(u)) {
    result = "Android";
  } else if (/iphone|ipad|ipod/.test(u)) {
    result = "iOS";
  } else {
    result = "PC";
  }
  return result;
})()
const GetQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
var fc = GetQueryString("fc");

//地域获取
var iplocation = {
  province: "",
  city: ""
};
export {
  pingbackJoin,
  GetQueryString
};
