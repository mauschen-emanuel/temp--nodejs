'use strict';

const fs = require('fs');

const getHosts = async function () {
  const hosts = await fs.promises.readFile('/etc/hosts', 'utf8');

  return hosts;
};

const main = async function () {
  try {
    const hosts = await getHosts();

    console.log(hosts);
  } catch (ex) {
    console.error(ex.message);
  }
};

(async () => {
  await main();
  console.log('Fertig!');
})();
