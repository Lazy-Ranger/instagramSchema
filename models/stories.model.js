const { Schema, model } = require('mongoose')


// Time stamp true
const STATUS_FIELDS = {
    userId: {
        type: Schema.type.ObjectId,
    },
    mediaPath: {
        type: String,
    },
    createdAt: {
        type: Date,
        expires: 1000 * 60 * 60 * 24,
        default: Date.now
    },
    seen: {
        type: Number,
    }
}

const STATUS_SCHEMA = new Schema(STATUS_FIELDS);
const STATUS_COLLECTION = 'statusCollection';
const STATUS_MODEL = model(STATUS_COLLECTION, STATUS_SCHEMA);

module.exports = { STATUS_MODEL }