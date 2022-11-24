let data = require("../../datas/actors.js")

let nextid = 6
const actorsPost =((req,res,next) => {
    //res.send("employeeRouter post...")
    let newactor = req.body

    if (!newactor.isim) {
        console.log("if");
        next({
            statusCode: 404,
            errorMessage: "You should add a 'isim'"
        })
        //res.send("post/if")
    }
    else if (newactor.isim && !newactor.filmler) {
        console.log("elseif");
        next({
            statusCode: 400,
            errorMessage: "You should add a 'filmler'"
        })
        //res.send("post/elseif")
    }
    else {
        console.log("else");

        newactor.id = nextid
        nextid++
        data.push(newactor)

        res.status(201)
            .json(newactor)
            
        console.log(newactor);
        next()
    }   
    //next()
})

module.exports={
    actorsPost
}