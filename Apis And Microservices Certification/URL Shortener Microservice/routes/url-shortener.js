'use strict';

const dns = require('dns');
const express = require('express');
const router = express.Router();

const URL = require('../models/url');
const hostnameRegex = /^https?:\/\/(.*)/i;

router.post('/new', function(req, res, next) {
  let hostname = req.body.url.match(hostnameRegex);
  if (!hostname) {
    res.json({
      error: 'invalid URL'
    });
  } else {
    dns.lookup(hostname[1], function(errDNS) {
      if (errDNS) {
        next(errDNS);
      } else {
        URL.create(req.body, function(errDB, url) {
          if (errDB) {
            next(errDB);
          } else {
            res.json({
              original_url: url.url,
              short_url: url.short_url
            });
          }
        });
      }
    });
  }
});

router.get('/:short_url', function(req, res, next) {
  URL.findOne({ short_url: parseInt(req.params.short_url) }, function(
    err,
    url
  ) {
    if (err) {
      next(err);
    } else {
      res.redirect(301, url.url);
    }
  });
});

module.exports = router;
