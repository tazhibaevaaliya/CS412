const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const request = require("request");
// const fetch = require("node-fetch");
require("dotenv").config();
const insertLocationInURL = (city, country) => {
  return `https://aerisweather1.p.rapidapi.com/forecasts/${city},${country}`;
};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
    useQueryString: true,
  },
};
//router.post("/oneB", function (req, res, next) {
/* GET home page. */
// router.get("/", (req, res) => {
//   console.log(req);
//   // console.log(req);
//   res.render("oneB", {});
// });

router.get("/", (req, res) => {
  res.render("form", {});
});

// router.post("/oneB", function (req, res, next) {
//   return new Promise((resolve, reject) => {
//     request("http://kidpub.com", (err, response, body) => {
//       if (response.statusCode == 200) {
//         resolve(body);
//       } else {
//         reject("bad call");
//       }
//     });
//   }).then(
//     (body) => {
//       res.render("index", { title: body });
//     },
//     (err) => {
//       res.render("index", { title: err });
//     }
//   );
// });

router.post("/oneB", function (req, res, next) {
  const city = req.body.city;
  const country = req.body.country;
  console.log(city);
  // const city = "Boston";
  // const country = "US";
  options.url = insertLocationInURL(city, country);

  rp(options)
    .then(function (response) {
      console.log(response["response"]);
      // res.render("results", { response });
      res.send(response);
    })
    .catch(function (err) {
      console.error(err);
    });

  // res.render("oneB", {});
});

router.post("/oneC", async function (req, res) {
  const city = req.body.city;
  const country = req.body.country;
  const url = insertLocationInURL(city, country);
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (e) {
    res.end(e.message || e.toString());
  }
});

router.post("/oneD", async function (req, res) {
  const city = req.body.city;
  const country = req.body.country;
  options.url = insertLocationInURL(city, country);
  request(options, function (err, res, data) {
    console.log("err", err); // <---- never prints any thing from here!
    console.log("res", res);
    console.log("data", data);
    if (!err && res.statusCode == 200) {
      console.log(data);
    }
  });
});

//  POST method using 'request' package with the promise

module.exports = router;
