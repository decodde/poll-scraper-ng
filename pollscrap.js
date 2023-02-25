let { Constants } = require("./controllers/constants/constants");
const axios = require("axios");
const { Login } = require("./scrapers/login");


class PollScrap {
    user = "";
    token = "";
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    async initiate() {
        await this.login();
    }
    async login(email, password) {
        email ? "" :  email = this.email;
        password ? "" : password = this.password;
        
        let _login = await Login.login(email, password);
        let { token, user } = _login;
        console.log(token)
        this.token = token;
        this.user = user;
        return _login;
    }
    async request(url, post, body, auth) {
        let requestType = {
            method: post ? "post" : "get",
            url: url,
            data: body,
            headers: auth ? {
                "Authorization": `Bearer ${this.token}`
            } : ""
        }
        try {
            let _req = await axios(requestType);
            return _req;
        }
        catch (e) {
            throw e
        }
    }
    async getStatesId() {

    }
    async getElectionTypes() {
        let _r = await this.request(Constants.URLS.ELECTION_TYPES,false,null,true);
        return _r.data;
    }
}

exports.PollScrap = PollScrap; 