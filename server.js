const express = require('express');
const app = express();

app.get('/people/:username/zip', (req, res) => {
  res.send('63304');
});

app.get('/stores/locations', (req, res) => {
  const {name, zip} = req.query;
  console.log('server.js: name =', name);
  console.log('server.js: zip =', zip);
  if (name === 'Taco Bell' && zip === '63304') {
    const locations = [
      '6082 Mid Rivers Mall Dr., Saint Peters, MO 63304',
      '1630 Jungermann Rd., Saint Peters, MO 63304'
    ];
    res.send(locations);
  } else {
    res.status(404).send();
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log('listening on port', PORT));
