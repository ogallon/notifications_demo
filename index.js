const FCM = require('fcm-node');
const args = require('yargs').argv
const serverKey = 'Put server key here';
const fcm = new FCM(serverKey);

var message = {
    to: args.token,

    notification: {
        title: 'Hello',
        body: 'Body'
    },

    data: {
        title: 'Test',
        body: 'Hello my friend',
        heartcardId: 831
    }
};


fcm.send(message, (err, response) => {
    if (err) {
        console.log('Error sending notification, ', err);
    } else {
        console.log('Notification sent:', response);
    }
});
