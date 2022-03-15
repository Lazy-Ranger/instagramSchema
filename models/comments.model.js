const { Schema, model } = required('mongose')

const COMMENT_POST_FIELD = {
    _id: {
        type: Schema.type.objectId,
    },
    postId: {
        type: Schema.type.ObjectId,
    },
    parrentId: null,
    messageType: {
        type: String
    },
    message: {
        type: String
    },
    commentyBy: {
        type: Schema.type.objectId,
    }
}


const COMMENT_SCHEMA = new Schema(COMMENT_POST_FIELD);
const COMMENT_COLLECTION = 'comments';
const COMMENT_MODEL = model(COMMENT_COLLECTION, COMMENT_SCHEMA);

module.exports = { COMMENT_MODEL }



// const COMMENT_POST_SCHEMA_FIELD = {
//     _id: {
//         type: Schema.type.ObjectId,
//         ref: 'nestedComment'
//     },
//     postId: {
//         type: Schema.type.ObjectId,
//         required: true
//     },
//     idOfCommentedUser: {
//         type: Schema.type.ObjectId,
//         required: true
//     },
//     commentMessage: {
//         type: String,
//         required: true
//     }
// }

// const NESTED_SCHEMA_FIELD = {
//     parentCommentId: {
//         type: Schema.type.ObjectId,
//     },
//     idOfCommentedUser: {
//         type: Schema.type.ObjectId,
//         required: true
//     },
//     commentMessage: {
//         type: String,
//         required: true
//     }
// }






// comment
// {
//     _id: 123,
//         postId: 1,
//             parentId: null,
// }

// {
//     _id: 124,
//         postId: 1,
//             parentId: null,
// }

// {
//     _id: 125,
//         postId: 1,
//             parentId: 123,
// }

// {
//     _id: 126,
//         postId: 1,
//             parentId: 125
// }