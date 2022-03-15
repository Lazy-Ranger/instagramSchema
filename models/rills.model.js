const { Schema, model } = require('mongoose')
const { MEDIA_SCHEMA_FIELDS } = require('./video-rills-images.model')


const RILLS_SCHEMA = new Schema(MEDIA_SCHEMA_FIELDS);
const RILLS_COLLECTION = 'rillsCollection';
const RILLS_MODEL = model(RILLS_COLLECTION, RILLS_SCHEMA);


module.exports = {
    RILLS_MODEL
}