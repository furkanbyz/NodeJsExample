let data = require("../../datas/writers.js")

const writersDelete =(req,res) => {
    const deleteid = req.params.id
    const deletewriter = data.find(writer => writer.id === Number(deleteid))

    if(deletewriter){
        data=data.filter((writer) => writer.id !== Number(deleteid))
        res
            .status(200)
            .send("data was deleted successfully!")
            .end()

        console.log("deleted data:",deletewriter);
    }
    else{
        res
            .status(404)
            .send("not found data that you want to delete")
    }
}

module.exports={writersDelete}