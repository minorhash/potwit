var Twit = require('twit')
var cnf=require("../son/cnf.json")

var T = new Twit({
  consumer_key:        cnf.key,
  consumer_secret:     cnf.sec,
  access_token:        cnf.tok,
  access_token_secret: cnf.tsc,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

var que="gustavo arellano since:2018-01-01"

T.get('search/tweets', { q: que, count: 3}, function(err, dat, res) {

  //console.log(dat)
    var arr=dat.statuses
console.log(arr.length)

for(var i=0;i<arr.length;i++){
//console.log(i)
//console.log(arr[i].lang)
if(arr[i].lang=="en"){
console.log(arr[i].text)
console.log(arr[i].entities)
console.log("========")
}
}

})
