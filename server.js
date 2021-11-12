const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>YES! NODEJS</title></head>");
    res.write("<body><h1>HELLO NODE SERVER2! </h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

  res.write("<html>");
  res.write("<head><title>NODEJS</title></head>");
  res.write("<body><h1>HELLO NODE SERVER! </h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
console.log(`Server running on PORT ${server.address().port}`);
