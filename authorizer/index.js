const { google } = require("googleapis");
const drive = google.drive("v3");
const key = require("./key.json");

// authorization scopes
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  SCOPES,
  null
);

jwtClient.authorize(authErr => {
  if (authErr) {
    console.log(authErr);
    return;
  }
  // Make an authorized requests
  // List Drive files.
  drive.files.list({ auth: jwtClient }, (listErr, resp) => {
    if (listErr) {
      console.log(listErr);
      return;
    }
    console.log(resp);
    resp.data.files.forEach(file => {
      console.log(`${file.name} (${file.mimeType})`);
    });
  });
});
