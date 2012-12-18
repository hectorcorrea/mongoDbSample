var dbCore = require('./dbCore');
var isGetAll = true;
var args, key;

args = process.argv.slice(2);
if (args.length > 0) {
  key = parseInt(args[0]);
  isGetAll = false;
}

if(isGetAll) {
  console.log("Retrieving all documents...");
  dbCore.fetchAll(function(err, items) {
    console.log("Get all completed");
    if(err) {
      console.log(err);
    }
    else {
      console.log(items);
    }
  });
}
else {
  console.log("Retrieving document [" + key + "]...");
  dbCore.fetchByKey(key, function(err, item) {
    console.log("Get by key completed");
    if(err) {
      console.log(err);
    }
    else if(item === null) {
      console.log("Item with key [" + key + "] was not found");
    }
    else {
      console.log(item);
    }
  });
}
