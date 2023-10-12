const { MongoClient } = require("mongodb");

const state = {
  db: null,
};


const url = "mongodb://127.0.0.1:27017";

const dbName = "shopping_products";

const client = new MongoClient(url, { useUnifiedTopology: true });


const connect = async (cb) => {
  try {
   
    await client.connect();
 
    const db =client.db(dbName);
    
    state.db = db;
    
    return cb();
  } catch (err) {
  
    return cb(err);
  }
};
const get = () => state.db;

module.exports = {
  connect,
  get
}