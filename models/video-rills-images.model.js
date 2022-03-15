const MEDIA_SCHEMA_FIELDS = {
    userId: {
        type: Schema.type.ObjectId,
        ref: 'user'
    },
    path: [String],
    uploadDate: {
        type: Date,
        default: Date.now()
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    tags: [
        { _id: Schema.type.ObjectId }
    ],
    likes: {
        type: Number,
    },
    comments: { type: Schema.type.ObjectId, ref: 'comment' }
}


module.exports = MEDIA_SCHEMA_FIELDS;