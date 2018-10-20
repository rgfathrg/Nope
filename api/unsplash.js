// var Flickr = require("flickrapi"),
//     flickrOptions = {
//         api_key: "1748d065e98eb8052cc29c44d00fbec",
//         secret: "efaefac1c0792b40"
//     };
// Flickr.authenticate(flickrOptions, function(err, flickr) { 
//     flickr.photos.search({
//         text: "red+panda"
//       }, function(err, result) {
//         if(err) { throw new Error(err); }
//         // do something with result
//       }
// });
// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "4772a941e9725925f6aa568234bc3738e8fc1edd78f297d9c2a7b433a05719ed",
  secret: "07705540f46dd1ba46d7e92a923840baac9cef9d56fbf2b06f6cea9fc1717a21",
  callbackUrl: "{CALLBACK_URL}"
});

//
const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos"
]);

location.assign(authenticationUrl);

unsplash.auth.userAuthentication(query.code)
  .then(toJson)
  .then(json => {
    unsplash.auth.setBearerToken(json.access_token);
});

unsplash.search.photos(desResults, 1)
  .then(toJson)
  .then(json => {
    console.log(json);
  })
unsplash.photos.getPhoto("mtNweauBsMQ", 1920, 1080, [0, 0, 1920, 1080])
  .then(toJson)
  .then(json => {
      console.log(json);
  });