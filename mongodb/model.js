import { model, models, Schema } from "mongoose";


const blogSchema = new Schema({
    title: {
        type: 'string',
        require: true
    },
    body: {
        type: "string",
        require: true

    }
})

const BlogModel = models.BlogModel || model("BlogModel", blogSchema);


export default BlogModel;