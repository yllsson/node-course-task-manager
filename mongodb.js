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
    //   .find({
    //     age: 27
    //   })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users').findOne(
    //   { _id: new ObjectId('6123655e3d2c4ad726330ec1') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    db.collection('tasks').findOne(
      { _id: new ObjectId('6123612bdf65baceb5ffb547') },
      (error, task) => {
        if (!task) {
          return console.log('No task found');
        }

        console.log(task);
      }
    );

    db.collection('tasks')
      .find({
        completed: true
      })
      .toArray((error, tasks) => {
        if (error) {
          return console.log('Unable to find the documents');
        }

        console.log(tasks);
      });
  }
);
