let data = require("../../datas/drawers.js")

const drawersDelete =(req, res) => {
    const deleteid = req.params.id
    const deletedrawer = data.find(drawer => drawer.id === Number(deleteid))

    if (deletedrawer) {
        
        
        data = data.filter((drawer) => drawer.id !== Number(deleteid))
        res
            .status(200)
            .send(data)
            .end()

        console.log("deleted data:",data);
    }
    else {
        res
            .status(404)
            .send("not found data that you want to delete")
    }
}

module.exports={drawersDelete}