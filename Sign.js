// console.log("Welcome to you")
// var fs = require('fs')
// const userFile = require("./sign_up.json")

// var readlinesync = require("readline-sync")
// var login_or_sign_up = readlinesync.question("what you -->Sign_Up/Login-->")
// if ("sign up" == login_or_sign_up){
//     Sign_Up();

// }else if("login" == login_or_sign_up){
//     Login();
// }

// function Sign_Up(){
//     var username = readlinesync.question('Please enter your name--');
//     var password1 = readlinesync.question('Please enter your password--');
//     var conform_password = readlinesync.question ('Please enter your conform_password--');
    
//     if (password1.includes("@") || conform_password.includes("#")){
//         if(password1 == conform_password){
//             // console.log("password is valid");
//             readFile_data();
//         }else{
//             console.log("Both password is not same....")
//         }
//     }else{
//         console.log("in password should be a special charector");
//     };
// // checking reading file 
//     function readFile_data(){
//         fs.readFile("./sign_up.json",'utf8', (err, jsonString) => {
//             var convert_data = JSON.parse(jsonString);
//             var read_value = convert_data;
//             var i = 0;
//             while(i < read_value.length){
//                 if(read_value[i]["username"] === username && read_value[i]["password"] === password1){
//                     console.log(username, " are already Exists.....");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        6                                                                                                                                              
//                     break;
//                 }else{

//                 };
//                 i++;
//             };
//             console.log("congrats " + username +" you are Signed Up Successfully");
//             var Descrition = readlinesync.question("Enter the Description--");
//             var DOB = readlinesync.question("Enter the DOB--");
//             var Hobbies = readlinesync.question("Enter the Hobbies--");
//             var Gender = readlinesync.question("Enter the Gender--");
//             var Profile ={"Descrition":Descrition, "DOB":DOB,  "Hobbies": Hobbies, "Gender": Gender };
//             var dic = {}
//             dic["username"] = username;
//             dic["password"] = password1;
//             dic["Profile"] = Profile;
//             convert_data.push(dic);
//             // convert_data.push(dic);
//             fs.writeFile("./sign_up.json",JSON.stringify(convert_data) ,err =>{
//                 if(err){
//                     console.log("error");
//                 }else{

//                 }
//             });    
//         });
//     };
// };

// function Login(){
//     var username = readlinesync.question('Please enter your name--');
//     var password1 = readlinesync.question('Please enter your password--');
    
//     fs.readFile("./sign_up.json",'utf8', (err, jsonString) => {
//         var convert_data = JSON.parse(jsonString);
//         var read_value = convert_data;
//         var i = 0;
//         while(i < read_value.length){
//             if(read_value[i]["username"] === username && read_value[i]["password"] === password1){
//                 console.log(username,"You are Logged In Successfully");
//                 break;
//             }
//             else{
                
//             };
//             i++;
//         };
        
//     });
// }
