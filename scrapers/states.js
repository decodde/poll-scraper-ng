const { Login } = require("./login");
require("dotenv").config();


let start = async () => {
    try{
        let test = await Login.login(process.env.EMAIL_ADDRESS,process.env.PASSWORD, true);
        console.log(test);
        let {token,full_name} = test;
        console.log(`Logged in as ${full_name} \n Token is : ${token}`);
    }
    catch(e){
        console.log(e);
    }
    
}

start();