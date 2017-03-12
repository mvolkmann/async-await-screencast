const fetch = require('node-fetch');

async function demo() {
  const urlPrefix = 'http://localhost:3000';
  const username = 'mvolkmann';
  const storeName = 'Taco Bell';

  try {
    let url = `${urlPrefix}/people/${username}/zip`;
    let res = await fetch(url);
    const zip = await res.text();
    console.log('zip =', zip);

    url = `${urlPrefix}/stores/locations?zip=${zip}&name=${storeName}`;
    res = await fetch(url);
    if (res.status === 404) {
      throw new Error(`There are no ${storeName} stores in ${zip}.`);
    }

    const locations = await res.json();
    console.log(`${storeName} locations are:`);
    for (const location of locations) {
      console.log(location);
    }
  } catch (e) {
    console.error(e.message);
  }
}

demo();
