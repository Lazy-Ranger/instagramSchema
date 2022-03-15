const { Schema, model } = require('mongoose')
const { MEDIA_SCHEMA_FIELDS } = require('./video-rills-images.model')


const IMAGE_SCHEMA = new Schema(MEDIA_SCHEMA_FIELDS);
const IMAGE_COLLECTION = 'imageCollection';
const IMAGE_MODEL = model(IMAGE_COLLECTION, IMAGE_SCHEMA);


module.exports = {
    IMAGE_MODEL
}