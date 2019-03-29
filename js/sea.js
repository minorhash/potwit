var Twit = require('twit')
var cnf=require("../son/pok.json")

var T = new Twit({
  consumer_key:        cnf.key,
  consumer_secret:     cnf.sec,
  access_token:        cnf.tok,
  access_token_secret: cnf.tsc,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

var que="白石冬美 訃報"

T.get('search/tweets', { q: que, count: 3}, function(err, dat, res) {

  //console.log(dat)
    var arr=dat.statuses
console.log(arr.length)

for(var i=0;i<arr.length;i++){
//console.log(i)
//console.log(arr[i].lang)
if(arr[i].lang=="ja"){
console.log(arr[i].id)

}
}

})
