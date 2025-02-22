/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "node:fs"
import qr from "qr-image"


inquirer.prompt([{
    message : "Please write the website name?",
    name : "userURL"
}])
  .then((answers) => {
    const userAns = answers.userURL
    console.log(`So the answer is ${userAns}? Got it!!`)
    fs.writeFile("URL.txt", userAns,"utf8", (err) =>{
        if (err) throw err;
        console.log("Written to the file successfully")
    })

    const qr_img = qr.image(userAns, {type: "png"})
    qr_img.pipe(fs.createWriteStream("my_qr_img.png"))


    
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

