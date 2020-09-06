const badRequest = (message) => ({"errorLibrary": true, "status": 400, message});

const unpro = (message) => ({"errorLibrary": true, "status": 422, message});

module.exports = {
  badRequest,
  unpro,
}

