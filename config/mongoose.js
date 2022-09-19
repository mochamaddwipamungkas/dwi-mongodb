const mongoose = require('mongoose')

const database = process.env.MONGO_URI || "mongodb://mochamaddwipamungkas:12131213@localhost:27017/eduwork-mongoose?authSource=admin"
// mongoose.connect('mongodb://user_latihan:123456@localhost:27017/eduwork-mongoose?authSource=admin')
mongoose.connect(database)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('Server database terhubung'))

