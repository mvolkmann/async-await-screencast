const fetch = require('node-fetch');

function demo() {
  const urlPrefix = 'http://localhost:3000';
  const username = 'mvolkmann';
  const storeName = 'Taco Bell';

  let url = `${urlPrefix}/people/${username}/zip`;
  let zip;
  fetch(url)
    .then(res => res.text())
    .then(zipCode => {
      zip = zipCode;
      console.log('zip =', zip);

      url = `${urlPrefix}/stores/locations?zip=${zip}&name=${storeName}`;
      return fetch(url);
    })
    .then(res => {
      if (res.status === 404) {
        console.log(`There are no ${storeName} stores in ${zip}.`);
      } else {
        res.json()
          .then(locations => {
            console.log(`${storeName} locations are:`);
            for (const location of locations) {
              console.log(location);
            }
          });
      }
    })
    .catch(e => console.error(e.message));
}

demo();
