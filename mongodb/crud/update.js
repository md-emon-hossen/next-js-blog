import BlogModel from "../model";

async function update(req, res) {
    const { id } = req.query;

    await BlogModel.updateOne({ _id: id }, {
        $set: {
            title: req.body.title,
            body: req.body.body
        }
    });
    res.status(200).json({ "messege": "update blog successfully" });
}


export default update;