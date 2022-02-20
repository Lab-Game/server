const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(80, () => {
  console.log("Server is online.");
});

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: ' + add);
})
