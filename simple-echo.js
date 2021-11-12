const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  response.end();
});
server.listen(3000);
console.log(`Server runnong in PORT ${server.address().port}`);
