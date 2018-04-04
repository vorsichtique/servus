const schedule = require('node-schedule');
const request = require('request');

let gogo = schedule.scheduleJob('0 * * * *', function() {
        request('http://gogo_web_1/webhooks/send-due-item-reminder', {json: true}, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            console.log(body);
        });
    }
);