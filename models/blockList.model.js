const { Schema, model } = require('mongoose')


const BlOCK_LIST_FIELD = {
    userId: {
        type: Schema.type.ObjectId,
    },
    blockedId: {
        type: Schema.type.ObjectId,
    },
    blockedDate: {
        type: Date,
        default: Date.now()
    }
}

const BLOCK_LIST_SCHEMA = new Schema(BLOCK_LIST_FIELD);
const BLOCKED_COLLECTION = 'blockedCollection'

const BLOCKED_MODEL = model(BLOCKED_COLLECTION, BLOCK_LIST_SCHEMA);

module.exports = {
    BLOCKED_MODEL
}