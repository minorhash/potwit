var Twit = require('twit')
var cnf=require("../son/eat.json")

var T = new Twit({
  consumer_key:        cnf.key,
  consumer_secret:     cnf.sec,
  access_token:        cnf.tok,
  access_token_secret: cnf.tsc,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get('search/tweets', { q: 'gustavo arellano since:2011-07-11', count: 30}, function(err, dat, res) {

  //console.log(dat)
    var arr=dat.statuses

for(var i=0;i<arr.length;i++){
//console.log(i)
//console.log(arr[i].lang)
if(arr[i].entities.hashtags[0]="tacos"){
console.log(arr[i].text)
console.log("========")
}else{console.log("no hash")}

}//for


})
