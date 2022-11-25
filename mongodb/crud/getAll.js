import BlogModel from "../model";
async function getAll(req, res) {
    await BlogModel.find((err, data) => {
        if (!err) {
            res.status(200).json(data)
        } else {
            console.log(err);
        }
    });
}


export default getAll;