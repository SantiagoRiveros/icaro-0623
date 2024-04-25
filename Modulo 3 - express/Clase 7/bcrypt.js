const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");

const PORT = 3000;

app.listen(PORT, () => console.log("App listening to port: " + PORT));

let hashPassword =
  "$2b$10$1VPUid.UtAe3vPlZiXLAqO4/hOTygDU35XtIxR0DeLKNvWUFS76xa";
const password = "password123";
bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(hash);
});

let passwordIsValid = bcrypt.compareSync("fdafdaf", hashPassword);
console.log(passwordIsValid);
