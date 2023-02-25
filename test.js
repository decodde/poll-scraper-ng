const { PollScrap } = require("./pollscrap");
require("dotenv").config();
let test = async () => {
    let pollScrap = new PollScrap(process.env.EMAIL_ADDRESS, process.env.PASSWORD);
    console.log(pollScrap.password);
    
    await pollScrap.initiate();
    console.log(pollScrap.token)

    //Get Election Types
    let _g = await pollScrap.getElectionTypes();
    console.log(_g)

    

}

test();