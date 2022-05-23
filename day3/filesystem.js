import * as fs from 'fs/promises';


await fs.writeFile("hello.txt", "This is 1st example, of file system");
await fs.writeFile("as.txt", "This is 1st example, of file system");


let contents = await fs.readFile("hello.txt", "utf-8");
console.log(contents)

//unlink: delete/file or folder
await fs.unlink("as.txt");
await fs.rmdir("as");