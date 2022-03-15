// Message field
const MESSAGE_FIELD = {
    roomId: {
        type: Schema.type.ObjectId,
        ref: 'messageRoom'
    },
    mediaPath: {
        type: String,
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
    }
}



// Message Room
const MESSAGE_ROOM_FIELD = {
    userId: {
        type: Schema.type.ObjectId,
    },
    channelTo: {
        type: Schema.type.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now(),
    }
}

