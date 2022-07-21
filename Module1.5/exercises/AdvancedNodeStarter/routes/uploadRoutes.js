const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});

console.log(s3);

module.exports = app => {
  app.get('/api/upload', requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuid()}.jpeg`;

    console.log("entra")

    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'my-bloc-bucket-123',
        ContentType: 'image/jpeg',
        Key: key
      },
      (err, url) => {if(err) console.log(err);
        res.send({ key, url })}
    );
  });
};
