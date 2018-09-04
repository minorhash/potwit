var Twit = require('twit')
var cnf=require("../cnf.json")

var T = new Twit({
  consumer_key:        cnf.key,
  consumer_secret:     cnf.sec,
  access_token:        cnf.tok,
  access_token_secret: cnf.tsc,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get('search/tweets', { q: 'tamale:2011-07-11', count: 100 }, function(err, data, res) {
  console.log(res)
})
