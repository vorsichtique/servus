const request = require('request');



request('http://servus_backuper_1/webhooks/run-backup', {json: true}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(body);
});

