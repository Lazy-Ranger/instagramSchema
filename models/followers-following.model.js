const { Schema, model } = required('mongoose')

const FOLLOWERS__AND__FOLLOWING_SCHEMA_FIELD = {
    userId: {
        type: Schema.type.ObjectId,
        required: true
    },
    followersOrFollowersId: {
        type: Schema.type.ObjectId,
        required: true
    }
}



const FOLLOWERS_AND_FOLLOWING_SCHEMA = new Schema(FOLLOWERS__AND__FOLLOWING_SCHEMA_FIELD);
const NEWS_COLLECTION = 'newsCollections'

const NEWS_MODEL = model(NEWS_COLLECTION, NEWS_SCHEMA);

