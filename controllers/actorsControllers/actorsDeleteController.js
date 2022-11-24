let data = require("../../datas/actors.js")

const actorsDelete = ((req, res) => {
    const deleteid = req.params.id
    const deleteactor = data.find(actor => actor.id === Number(deleteid))

    if (deleteactor) {
        data = data.filter((actor) => actor.id !== Number(deleteid))
        res
            .status(200)
            .send(data)
            .end()

        console.log("deleted data:",deleteactor);
        console.log("data was deleted successfully.");
    }
    else {
        res
            .status(404)
            .send("not found data that you want to delete")
    }
})

module.exports={actorsDelete}