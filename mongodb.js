// CRUD Create Read Update Delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectId('612364b018b1834e97dd48c9')
    //     },
    //     {
    //       $inc: {
    //         age: 3
    //       }
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
