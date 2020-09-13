const http = require('http');
const fs = require('fs')
const tpl = fs.readFileSync('./index.html', {encoding: 'utf8'});
const handler = require('serve-handler');
const server = http.createServer(function(req, res) {
  console.log(req.url)
  if(~req.url.indexOf('/api/fetchstream')) {
    return handler(request, response);
  } else  {
    res.end(tpl);
  }
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});