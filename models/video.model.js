const { Schema, model } = require('mongoose');
const { MEDIA_SCHEMA_FIELDS } = require('./video-rills-images.model')

const VIDEO_SCHEMA = new Schema(MEDIA_SCHEMA_FIELDS);
const VIDEO_COLLECTION = 'videoCollection';
const VIDEO_MODEL = model(VIDEO_COLLECTION, VIDEO_SCHEMA);


module.exports = {
    VIDEO_MODEL
}