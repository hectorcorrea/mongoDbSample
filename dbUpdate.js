var dbCore = require('./dbCore');
var args, key, title, data;

args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Syntax: ");
  console.log("dbUpdate key title");
  return;
}

key = parseInt(args[0]);
if (isNaN(key))
{
  console.log("Key must be an integer");
  return;
}
title = args[1];
data = {key: key, title: title};

dbCore.updateByKey(data, function(err, savedCount) {
  if (err) {
    console.log(err);
  }
  else if(savedCount === 1) {
    console.log('record updated OK');
  }
  else {
    console.log('record not updated OK ' + savedCount)
  }
});

