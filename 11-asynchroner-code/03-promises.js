'use strict';

const fs = require('fs');

const getHosts = function () {
  return new Promise((resolve, reject) => {
    fs.readFile('/etc/hosts', 'utf8', (err, hosts) => {
      if (err) {
        reject(err);

        return;
      }

      resolve(hosts);
    });
  });
};

const main = function () {
  return new Promise((resolve, reject) => {
    const hostsPromise = getHosts();

    hostsPromise.then(hosts => {
      console.log(hosts);
      resolve();
    }).catch(err => {
      console.error(err.message);
      resolve();
    });
  });
};

main().then(() => {
  console.log('Fertig!');
});
