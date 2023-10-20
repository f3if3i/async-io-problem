import fs from 'node:fs';
const content = await fs.promises.readFile('Dockerfile', 'utf8');
console.log(content);