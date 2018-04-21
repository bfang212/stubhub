var express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const {selectAll} = require('../database-postgresql');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 103499951

app.get('/tickets', function (req, res) {
  // const options = {
  //   method: 'GET',
  //   headers: {'Authorization': 'Bearer 0261b6a2-61f8-3fda-a6e1-8c9c88220277',
  //   'Accept': 'application/json',
  //   'Accept-Encoding': 'application/json'},
  //   params: { eventid: 103499951,
  //     rows: 10},
  //   url: 'https://api.stubhub.com/search/inventory/v2'
  // }
  // axios(options)
  // .then((data) => res.json(data.data))
  // .catch((err) => console.error(err));

  const file = {
    "eventId": 103499951,
    "totalListings": 67,
    "totalTickets": 232,
    "minQuantity": 1,
    "maxQuantity": 14,
    "listing": [
        {
            "listingId": 1320051804,
            "currentPrice": {
                "amount": 122.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 100,
                "currency": "USD"
            },
            "row": "N/A",
            "quantity": 2,
            "sellerSectionName": "N/A",
            "sectionName": "N/A",
            "seatNumbers": "General Admission",
            "deliveryTypeList": [
                1
            ],
            "deliveryMethodList": [
                1
            ],
            "isGA": 0,
            "splitOption": "0",
            "ticketSplit": "2",
            "splitVector": [
                2
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1320432266,
            "currentPrice": {
                "amount": 122.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 100,
                "currency": "USD"
            },
            "row": "Tier 4",
            "quantity": 2,
            "sellerSectionName": "General Admission",
            "sectionName": "General Admission",
            "seatNumbers": "GA Tier 4,General Admission",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 1,
            "splitOption": "0",
            "ticketSplit": "2",
            "splitVector": [
                2
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1319279397,
            "currentPrice": {
                "amount": 122.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 100,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 2,
            "sellerSectionName": "GA",
            "sectionName": "GA",
            "seatNumbers": "GA 3,GA 4",
            "listingAttributeList": [
                15208
            ],
            "deliveryTypeList": [
                1
            ],
            "deliveryMethodList": [
                1
            ],
            "isGA": 0,
            "splitOption": "2",
            "ticketSplit": "1",
            "splitVector": [
                2
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1320180755,
            "currentPrice": {
                "amount": 128.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 105,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 7,
            "sellerSectionName": "General Admission",
            "sectionName": "General Admission",
            "seatNumbers": "GA,GA2,GA3,GA4,GA5,GA6,GA7",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 1,
            "splitOption": "2",
            "ticketSplit": "1",
            "splitVector": [
                1,
                2,
                3,
                4,
                5,
                7
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1320014441,
            "currentPrice": {
                "amount": 128.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 105,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 2,
            "sellerSectionName": "GA",
            "sectionName": "GA",
            "seatNumbers": "General Admission",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 0,
            "splitOption": "0",
            "ticketSplit": "2",
            "splitVector": [
                2
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1318788496,
            "currentPrice": {
                "amount": 133.24,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 108.95,
                "currency": "USD"
            },
            "row": "FLOOR",
            "quantity": 8,
            "sellerSectionName": "General Admission",
            "sectionName": "General Admission",
            "seatNumbers": "GA 7,GA 6,GA 5,GA 4,GA 3,GA 2,GA 1,GA 0",
            "deliveryTypeList": [
                1
            ],
            "deliveryMethodList": [
                1
            ],
            "isGA": 1,
            "splitOption": "2",
            "ticketSplit": "1",
            "splitVector": [
                1,
                2,
                3,
                4,
                5,
                6,
                8
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1312403688,
            "currentPrice": {
                "amount": 133.3,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 109,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 4,
            "sellerSectionName": "General Admission",
            "sectionName": "General Admission",
            "seatNumbers": "GA 1,GA 2,GA 3,GA 4",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 1,
            "splitOption": "2",
            "ticketSplit": "1",
            "splitVector": [
                1,
                2,
                4
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1312509292,
            "currentPrice": {
                "amount": 134.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 110,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 1,
            "sellerSectionName": "GA1",
            "sectionName": "GA1",
            "seatNumbers": "GA",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 0,
            "splitOption": "0",
            "ticketSplit": "1",
            "splitVector": [
                1
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1317867713,
            "currentPrice": {
                "amount": 134.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 110,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 1,
            "sellerSectionName": "General Admission",
            "sectionName": "General Admission",
            "seatNumbers": "GA 1",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 1,
            "splitOption": "0",
            "ticketSplit": "1",
            "splitVector": [
                1
            ],
            "sellerOwnInd": 0
        },
        {
            "listingId": 1316219631,
            "currentPrice": {
                "amount": 134.5,
                "currency": "USD"
            },
            "listingPrice": {
                "amount": 110,
                "currency": "USD"
            },
            "row": "GA",
            "quantity": 2,
            "sellerSectionName": "General Admission",
            "sectionName": "General Admission",
            "seatNumbers": "00982742036245,00982742036344",
            "deliveryTypeList": [
                2
            ],
            "deliveryMethodList": [
                2
            ],
            "isGA": 1,
            "splitOption": "1",
            "ticketSplit": "1",
            "splitVector": [
                1,
                2
            ],
            "sellerOwnInd": 0
        }
    ],
    "listingAttributeCategorySummary": [],
    "deliveryTypeSummary": [],
    "start": 0,
    "rows": 10
}

res.json(file);



})


app.get('/events', function (req, res) {
  selectAll()
  .then((data) => res.json(data));
})



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

