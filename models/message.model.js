const MESSAGE_FIELD = {
    messageRoom: {
        type: Schema.type.ObjectId,
        ref: 'messageRoom'
    },
    userId: {
        type: Schema.type.ObjectId,
        required: true
    },
    media: {
        path: String,
    },
    conversationAt: {
        type: Date,
        default: Date.now()
    },
    messageType: {
        type: String,
        enum: ['text', 'mp3', 'image', 'gif', 'audio/basic', 'image/jpeg']
    },
    message: {
        type: String,
        trim: true,
    }
}