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

var key="あにきー！"
T.post('statuses/update', { status: key }, function(err, data, response) {
  console.log(data)
})
