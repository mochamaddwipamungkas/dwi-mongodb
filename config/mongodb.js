const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://mochamaddwipamungkas:12131213@dwi-mongodbatlas.gywboqh.mongodb.net/eduwork-mongoose-routerv3?retryWrites=true&w=majority';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('koneksi ke mongodb berhasil (bukan mongoose)');
    } catch (e) {
        console.log(e);
    }
})();

const db = client.db('eduwork-native')

module.exports = db;