let http = require('http');
let fs = require('fs/promises');
const { readFile } = require('fs/promises');
const { parse } = require('path');
const url = require('url');
http.createServer(async (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;  

    switch(path)
  {
    case "/html":
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        const file = await readFile('html.html', 'utf-8');
        res.end(file.toString());
        break;
    case "/main":
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.write('Strona główna');
        res.end;
        break;
    case "/json":
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
        const json = {Weekday: "Monday", Mood: "Awful"};
        const dane = JSON.stringify(json);
        res.write(dane);
        res.end;
        break;
    case "/htmli":
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<h1>HTML napisany bezpośrednio w node</h1>');
        break;
    case "/get_params":
        console.log(parsedUrl.query);
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let timestamp = Date.now();
        const fileJson = 'params_'+timestamp+'.json'
        fs.writeFile(fileJson, JSON.stringify(parsedUrl.query));

        res.end(JSON.stringify({ ok: 'ok' }));
        break;
  }
}).listen(8080);
