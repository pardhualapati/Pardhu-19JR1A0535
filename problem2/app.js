

const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const keywords = urlObj.query.keywords;
    const keywordsArray = keywords.split(',');
    const result = [];
    const words = ['bonfire', 'cardio', 'case', 'character', 'bonsai'];
    keywordsArray.forEach((keyword) => {
        const prefix = getPrefix(keyword, words);
        const status = prefix ? 'found' : 'not_found';
        result.push({
        keyword,
        status,
        prefix: prefix || 'not_applicable',
        });
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
    });
    server.listen(4000, () => {
    console.log(`Server listening on port 4000`);
    });
    function getPrefix(keyword, words) {
    const word = words.find((word) => word.startsWith(keyword));
    return word ? word.slice(0, keyword.length) : null;

}
