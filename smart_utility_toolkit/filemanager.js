// --------------------------------------------------------------TASK 4--------------------------------------------------

const fs = require('fs');
const filePath = './sample.txt';

fs.writeFile(filePath, 'Initial content for Smart Utility Toolkit.\n', (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("1. File created successfully!");

  
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("2. Read file content:\n---");
    console.log(data.trim());
    console.log("---");

    
    fs.appendFile(filePath, 'Appended line: Node.js fs module is awesome!\n', (err) => {
      if (err) {
        console.error("Error updating file:", err);
        return;
      }
      console.log("3. File updated (appended) successfully!");

      
    //   fs.unlink(filePath, (err) => {
    //     if (err) {
    //       console.error("Error deleting file:", err);
    //       return;
    //     }
    //     console.log("4. File deleted successfully!");
    //   });
    });
  });
});