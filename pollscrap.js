const { Login } = require("./scrapers/login");


class PollScrap {
    user = "";
    token = "";
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    async initiate() {
        await this.login();
    }
    async login (email,password) {
        email ? "" : this.email;
        password ? "" : this.password;
        let _login =  await Login.login(email, password);
        let {token, user} = login;
        this.token = token;
        this.user = user;
        return _login;
    }
    async getStatesId () {
        
    }
    async getElectionTypes () {
        let _electionType = await axios.post()
    }
}

export default PollScrap;