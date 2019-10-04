module.exports = {
    mongoURI : `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@dev-af6ys.mongodb.net/${process.env.MONGODBNAME}?retryWrites=true&w=majority`,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET
}