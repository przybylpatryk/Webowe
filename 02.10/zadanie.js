let http = require('http');
let fs = require('fs/promises');
const { readFile } = require('fs/promises');
http.createServer(async (req, res) => {

  switch(req.url)
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
        const tab = new Array();    
        console.log(http.get('http://api.open-notify.org/astros.json'));

        http.get('http://api.open-notify.org/astros.json', resp => {      
        resp.on('data', chunk => {
            tab.push(chunk);
        })        
        resp.on('end', () => {
            let tabJson = JSON.stringify(tab);
            console.log(tabJson);
        })
    })
        break;
  }
}).listen(8080);
