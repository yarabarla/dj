'use strict';
const fetch = require('node-fetch');

let endpoint = 'http://api-m2x.att.com/v2/devices/'
let apiKey = '5e0da1347dd6422876e24ade2baa6958';
let header = {'X-M2X-KEY': apiKey};

let testDevice = {'id': '17e0ba0566abd082509c33a272100109'};
let streamName = 'testing';

let testData = {"00:00": 0,
                "00:01": 1,
                "00:02": 2,
                "00:03": 3};

fetch(`${endpoint}${testDevice.id}/streams/${streamName}`, { method: 'DELETE'})
// fetch(`${endpoint}${testDevice.id}/streams/${streamName}`, { method: 'PUT', body: testData, headers: header})
//   .then(res => {
//     console.log(res.status);
//     return res.json()
//   })
//   .then(json => console.log(json))
