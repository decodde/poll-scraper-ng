let axios = require("axios");

const { Constants } = require("../controllers/constants/constants");

let Login = {
    login : async (email,password,proceed = false) => {
        let body = {
            email : email,
            password :password
        }
        try{
            let _login = await axios.post(Constants.URLS.LOGIN, body);
            console.log("First Login:: ",_login.data);
            if(_login.data.success){
                return _login.data;
            }
            if(proceed){
                let {queue_id} = await _login.data;
                console.log(queue_id)
                if(queue_id){
                    let _secondLogin = await Login.secondLogin(email,password,queue_id)
                    return _secondLogin;
                }
            }
            else return _login.data;
        }
        catch(e){
            console.log(e);
            return e;
        }
    },
    secondLogin : async (email, password, queueId) => {
        let body = {
            email : email,
            password :password,
            queue_id :queueId
        }
        try{
            let _login = await axios.post(Constants.URLS.LOGIN, body);
            console.log("Login data:: ",_login.data);
            return _login.data;
        }
        catch(e){
            console.log(e);
            return e;
        }
    }
}

exports.Login = Login;