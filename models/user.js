const USER_SCHEMA_FIELDS = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    accountType: {
        type: String,
        enum: ['public', 'private'],
        default: 'public',
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phone: {
        type: 'string',
        required: true,
        trim: true
    },
    birthday: {
        type: Date,
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    lastLogin: {
        type: Date,
    },
    password: {
        type: String,
        select: false
    },
    facebookId: {
        type: String
    }
}



