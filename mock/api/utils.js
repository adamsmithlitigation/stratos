exports.getCnsiList = getCnsiList;
exports.getResultsPerPage = getResultsPerPage;
exports.clone = clone;
exports.getCnsiName = getCnsiName;


function getCnsiList(request) {
  return request.headers['x-cnap-cnsi-list'].split(',');
}

function getResultsPerPage(request) {
  return parseInt(request.query['results-per-page']);
}

function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

function getCnsiName(cnsiGuid) {
  var id = cnsiGuid.split('hcf')[1];
  return "mock_hcf_" + id;
}
