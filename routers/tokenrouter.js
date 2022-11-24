const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../datas/user")


router.post("/getToken", (request, response, next) => {
    console.log("logged in...");
    const { userName, password } = request.body;
    
    const payLoad = {
        userName,
        password,
        email: "nodejsapi@gmail.com"
    };
    console.log("payload:",payLoad);
    
    const token = jwt.sign(payLoad, request.app.get("api_secret_key"), { expiresIn: 1200 });
    response.json({
        status: true,
        token
    });
    console.log("token:",token);
});



/*
router.post("/getToken", (req,res) => {
    console.log("logged in...");
    //console.log("Whole data; userModel:",userModel);
    
   
    const {userName, password} = req.body
    finduserbyusername(userName)

    function finduserbyusername (userName){
        
        Object.values(userModel).find(o => {

            if (o.userName == "kenanbirkan") {

                if (o.password == 456) {

                    var payload = { userName, password }
                    var token = jwt.sign(payload, req.app.get("api_secret_key"), { expiresIn: 120 })

                    res.json({
                        status: true,
                        userName,
                        password,
                        token
                    })

                    console.log("Data that you meant : ", o);
                    console.log("Token is created...")
                    console.log("Token :",token);

                }
                else{
                    console.log("password is not correct!");
                }    
            }
        })        
    }
})
*/

module.exports= router