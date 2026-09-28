const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '..', 'lesson2','data','test.txt');
 
console.log("step 1 read file");
 /*
async function readFile() {
    try
    {
     
        const data = await fs.readFile(filePath, 'utf-8'); // read
        console.log(data);
 
 
    }  
        catch (err) {
        console.error('Error reading file:', err);
    }
}
readFile();
console.log("end of read file");
*/
async function writeFile() {
    try {
        const dataToWrite = 'This is some new data to write to the file.';
        await fs.writeFile(filePath, dataToWrite, 'utf-8'); // write
        console.log('File written successfully.');
    }      
    catch (err) {
        console.error('Error writing file:', err);
    }              
 
}
writeFile();
console.log("end of write file");