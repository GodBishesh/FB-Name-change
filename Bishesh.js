const express = require('express');
const app = express();
const port = 3000;

var fullName = "Betrayal Bishesh👑🔥";
var firstName = "Betrayal";
var middleName = "";
var lastName = "Bishesh👑🔥";

var dependencies = [
  /* ... an array of values ... */
];

// Alert the first dependency
console.log(dependencies[0]);

// Extract specific dependencies
var spinr = requireDependency(2, 1);
var jazoest = requireDependency(4, 3);
var fb_dtsg = requireDependency(6, 5);
var uid = requireDependency(8, 7);
var lsd = requireDependency(9, 5);
var s = requireDependency(2, 10);
var hsi = requireDependency(2, 11);
var dyn = requireDependency(2, 12);
var csr = requireDependency(2, 13);

// Generate a client mutation ID
var clientMutationId = generateClientMutationId();

// URL for the request
var url = dependencies[17];

// Prepare request data
var requestData = {
  av: uid,
  __user: uid,
  __a: 1,
  __req: dependencies[18],
  __hs: dependencies[19],
  dpr: 1.5,
  __ccg: dependencies[20],
  __rev: 1008717767,
  __s: s,
  __hsi: hsi,
  __dyn: dyn,
  __csr: csr,
  __comet_req: 5,
  fb_dtsg: fb_dtsg,
  jazoest: jazoest,
  lsd: lsd,
  __spin_r: spinr,
  __spin_b: dependencies[21],
  __spin_t: clientMutationId,
  fb_api_caller_class: dependencies[22],
  fb_api_req_friendly_name: dependencies[23],
  variables: JSON.stringify({
    client_mutation_id: clientMutationId,
    family_device_id: dependencies[24],
    identity_ids: [uid],
    full_name: fullName,
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    interface: dependencies[25]
  }),
  server_timestamps: true,
  doc_id: dependencies[27]
};

// Encode request data
var data = encodeRequestData(requestData);

// Route to handle the fetch request
app.get('/fetch', (req, res) => {
  fetchData(url, dependencies[38], data, dependencies[39])
    .then(function (response) {
      return response.text();
    })
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});

// Helper function to require a specific dependency
function requireDependency(index, innerIndex) {
  return require(dependencies[index])[dependencies[innerIndex]];
}

// Helper function to generate a client mutation ID
function generateClientMutationId() {
  return dependencies[14] + Math.random().toString(36).substr(2, 9);
}

// Helper function to encode request data
function encodeRequestData(requestData) {
  return Object.keys(requestData)
    .map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(requestData[key]);
    })
    .join('&');
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
