var dbCore = require('./dbCore');

args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Syntax: ");
  console.log("dbAdd key title");
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

var data = {key: key, title: title};
dbCore.addNew(data, function(err, savedDoc) {
  console.log("Save completed");
  if(err) {
    console.log(err);
  }
  else {
    console.dir(savedDoc);
  }
});

