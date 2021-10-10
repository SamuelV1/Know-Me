require('dotenv').config();

const http = require('http')

const fs = require('fs')

var url = require('url')

const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {
    let page = url.parse(req.url).pathname;
    switch (page) {
        case ('/'):
            fs.readFile('index.html', (error, data) => {
                if (error) {
                    throw error;
                }
                res.writeHeader(200, { 'Content-Type': 'text-html' });
                res.write(data);
                res.end();
            })
            break;
        case ('/contact'):
            fs.readFile('contact.html', (error, data) => {
                if (error) {
                    throw error;
                }
                res.writeHeader(200, { 'Content-Type': 'text-html' });
                res.write(data);
                res.end();
            })
            break;
        case ('/about'):
            fs.readFile('about.html', (error, data) => {
                if (error) {
                    throw error;
                }
                res.writeHeader(200, { 'Content-Type': 'text-html' });
                res.write(data);
                res.end();
            })
            break;
        default:
            fs.readFile('404.html', (error, data) => {
                if (error) {
                    throw error;
                }
                res.writeHeader(404, { 'Content-Type': 'text-html' });
                res.write(data);
                res.end();
            })
    }
    res.statusCode = 200

})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})