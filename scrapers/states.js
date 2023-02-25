const { Login } = require("./login");
require("dotenv").config();


let start = async () => {
    try{
        let test = await Login.login(process.env.EMAIL_ADDRESS,process.env.PASSWORD, true);
        //console.log(test);
        if(test){
            let {token,user} = test;
            console.log(`Logged in as ${user.full_name} \n Token is : ${token}`);
        }
        else{
            console.log("TEst" ,test)
        }
    }
    catch(e){
        console.log(e);
    }
    
}

start();