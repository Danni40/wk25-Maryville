var fs = require('fs');

fs.readFile('/foo.txt', function(err, data) {
    // TODO: Error Handling
    if(err) {
        console.log('Unknown Error');
        return;
      }
    console.log(data);
  });