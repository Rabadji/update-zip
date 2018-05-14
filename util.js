const jsonfile = require('jsonfile');

const FILENAME = './data/pins.json';

module.exports.writePins = (data) => jsonfile.writeFileSync(FILENAME, data, { spaces: 2 });

module.exports.getPins = () => jsonfile.readFileSync(FILENAME);

module.exports.handleError = (res, req, err) => {
  res.send({ error: true });
};

module.exports.FILENAME = FILENAME;
