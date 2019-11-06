const _ = require('lodash');
setInterval(() => console.log (_.random(1,1000)),2000)

// instalamos o modulo mon no terminal

const http = require('http')
http.createServer ((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)