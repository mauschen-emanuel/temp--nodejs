'use strict';

const fs = require('fs');

const getHosts = function (callback) {
  fs.readFile('/etc/hosts', 'utf8', (err, hosts) => {
    if (err) {
      callback(err);

      return;
    }

    callback(null, hosts);
  });
};

const main = function (callback) {
  getHosts((err, hosts) => {
    if (err) {
      console.error(err.message);
      callback(null);

      return;
    }

    console.log(hosts);
    callback(null);
  });
};

main(err => {
  console.log('Fertig!');
});
