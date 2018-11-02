const webpush = require('web-push');

var vapidKeys = require('./vapidKeys.json');

webpush.setVapidDetails(
  'mailto:some@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

if (process.argv.length < 3) {
  console.error('Please specify a subscription');
  process.exit();
}

console.log('Push it!');

const subscription = JSON.parse(process.argv[2]);

const text = process.argv[3] || 'Some important information for you!';

console.log('Pushing:', text);

webpush.sendNotification(subscription, text);

console.log('Done');
