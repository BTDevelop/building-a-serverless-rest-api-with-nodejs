const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect("mongodb+srv://parklab-user:EzxE2u66yyDNPPE5@parklab-shared-cluster.mjnyy.mongodb.net/parklab-dev",{
    // useNewUrlParser: true
    // useUnifiedTopology: true
    useFindAndModify: false
    // useCreateIndex: true
    })
    .then(db => { 
      isConnected = db.connections[0].readyState;
      console.log(isConnected);
    }).catch(err => console.log(err));
};