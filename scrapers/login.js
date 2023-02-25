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
            console.log(_login.data);
            if(proceed){
                let {queue_id} = _login.data;
                if(queue_id){
                    return await Login.secondLogin(email,password,queue_id);
                }
            }
            else return _login.data;
        }
        catch(e){
            console.log(e);
            return null;
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
            console.log(_login.data);
            return _login.data;
        }
        catch(e){
            console.log(e);
            return null;
        }
    }
}

exports.Login = Login;