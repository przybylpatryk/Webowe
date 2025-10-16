let http = require('http');
let fs = require('fs/promises');
const { readFile } = require('fs/promises');
http.createServer(async (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

  const file = await readFile('html.html', 'utf-8');
  res.end(file.toString())
}).listen(8084);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    res.write('Strona główna');
    res.end;
}).listen(8081);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    const json = {Weekday: "Monday", Mood: "Awful"};
    const dane = JSON.stringify(json);
    res.write(dane);
    res.end;
}).listen(8082);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end('<h1>HTML napisany bezpośrednio w node</h1>');
}).listen(8083);