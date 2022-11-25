import BlogModel from "../model";
async function getById(req, res) {
    const { id } = req.query;
    await BlogModel.findById(id, (err, data) => {
        if (!err) {
            res.status(200).json(data);
        } else {
            console.log(err)
        }
    })
}


export default getById;