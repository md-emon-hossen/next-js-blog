import BlogModel from "../model";

async function create(req, res) {

    const newBlog = {
        title: req.body.title,
        body: req.body.body
    }

    await BlogModel.create(newBlog, (err) => {
        if (!err) {
            res.status(201).json({ "messege": "bog create successfully" });
        } else {
            res.status(504).json({ "messege": "there was a probling in server side" });
        }

    });



}


export default create;