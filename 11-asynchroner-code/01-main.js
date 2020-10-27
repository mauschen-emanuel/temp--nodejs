'use strict';

const fs = require('fs');

const getHosts = function () {
  const hosts = fs.readFileSync('/etc/hosts', 'utf8');

  return hosts;
};

const main = function () {
  try {
    const hosts = getHosts();

    console.log(hosts);
  } catch (ex) {
    console.error(ex.message);
  }
};

main();
console.log('Fertig!');
