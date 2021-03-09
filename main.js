var fs = require("fs")

var readlinesync = require("readline-sync")
var candidate = readlinesync.question("enter the choise Login/SignUp--")
function checkPassword(password){
    if(password.includes("@") || password.includes("#")){
        var i = 0 ;
        while(i <10 ){
            if(password.includes(i)){
                return ("Password is strong");
            };
            i++;
        }
        return false;
    }else{
        return ("in password spacial charector should be there");
    };
}

function write_data(){
    console.log("congrats " + username +" you are Signed Up Successfully");
    var Descrition = readlinesync.question("Enter the Description--");
    var DOB = readlinesync.question("Enter the DOB--");
    var Hobbies = readlinesync.question("Enter the Hobbies--");
    var Gender = readlinesync.question("Enter the Gender--");
    var Profile ={"Descrition":Descrition, "DOB":DOB,  "Hobbies": Hobbies, "Gender": Gender };
    var dic = {}
    dic["username"] = username;
    dic["password"] = password1;
    dic["Profile"] = Profile;
    convert_data.push(dic);
    // convert_data.push(dic);
    fs.writeFile("./sign_up.json",JSON.stringify(convert_data) ,err =>{
        if(err){
            console.log("error");
        }else{

        }
    }); 
}

var convert_data;
if(candidate === "sign up"){
    var username = readlinesync.question("enter the username--")
    var password1 = readlinesync.question("enter the password--")
    var password2 = readlinesync.question("enter the same password--")
    if(password1 === password2){
        console.log(checkPassword(password1));
        function readFile_data(){
            fs.readFile("./sign_up.json",'utf8', (err, jsonString) => {
                convert_data = JSON.parse(jsonString);
                function check_userIs(){
                    var read_value = convert_data;
                    var i = 0;
                    while(i < read_value.length){
                        if(read_value[i]["username"] === username && read_value[i]["password"] === password1){
                            console.log(username, " are already Exists....."); 
                            return ("Done this...");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       6                                                                                                                                              
                        }else{
        
                        };
                        i++;
                    };
                    write_data()
                    return ("Done this...");
                }
                console.log(check_userIs());
                    
            });
        };
        readFile_data();
        
    }else{
        console.log("password is not same--")
    }


}else if(candidate === "login"){
    var username = readlinesync.question('Please enter your name--');
    var password1 = readlinesync.question('Please enter your password--');
    
    fs.readFile("./sign_up.json",'utf8', (err, jsonString) => {
        var convert_data = JSON.parse(jsonString);
        function Check_Login_User(){
            var read_value = convert_data;
            var i = 0;
            while(i < read_value.length){
                if(read_value[i]["username"] === username && read_value[i]["password"] === password1){
                    console.log(username,"You are Logged In Successfully");
                    return true;
                }
                else{
                    
                };
                i++;
            };
            console.log("username or password is wrong");
            return false;
        }
        Check_Login_User()
        
    });
}