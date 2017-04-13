const express = require('express');
const router = express.Router();
var keys = require('./../../secret.json')
'use strict';

const yelp = require('yelp-fusion');


/* GET api listing. */
router.get('/:zip', (req, res) => {
  // res.send(req.params.zip)
  yelp.accessToken(keys.clientId, keys.clientSecret).then(response => {
    console.log("getting access token");
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
      location: req.params.zip,
      categories: "foodtrucks"
    }).then(response => {
    res.send(response.jsonBody.businesses);
    });
  }).catch(e => {
    console.log(e);
  });
  // res.send('api works');
});

module.exports = router;
