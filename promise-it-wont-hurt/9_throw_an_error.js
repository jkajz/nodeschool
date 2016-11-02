var invalidJSON = process.argv[2];

function parsePromised(object) {
  return new Promise(function(fulfill, reject) {
    try {
      fulfill(JSON.parse(object));
    }
    catch (e) {
      reject(e);
    }
  });
}

parsePromised(invalidJSON).then(null, console.log);
