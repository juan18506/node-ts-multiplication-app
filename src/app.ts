import fs from 'node:fs';

let outputMessage: string = '';
const base: number = 5;
const headerMessage: string = `
==========================
    Tabla del ${base}         
==========================\n
`;

outputMessage += headerMessage;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

console.log(outputMessage);

const outputPath: string = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');
