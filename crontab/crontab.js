const schedule = require('node-schedule');
const request = require('request');

console.log('Env mode:' + process.env.APP_ENV);

let gogo = schedule.scheduleJob(process.env.CRONTAB_GOGO_SEND_DUE_REMINDER, function() {
        callWebHook('http://gogo_web_1/webhooks/send-due-item-reminder');
    }
);

let evett = schedule.scheduleJob(process.env.CRONTAB_EVETT_IMPORT_EVENTS, function() {
        callWebHook('http://evett_web_1/webhooks/import-events');
    }
);

let backuper = schedule.scheduleJob('0 * * * *', function() {
    callWebHook('http://servus_backuper_1/webhooks/run-backup');
});

function callWebHook(uri) {
    if ('dev' === process.env.APP_ENV){
        console.log('No webhooking in dev mode');
        return;
    }
    request(uri, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
    });
}