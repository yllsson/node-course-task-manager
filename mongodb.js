// CRUD Create Read Update Delete

const { MongoClient } = require('mongodb');

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Ylva',
    //     age: 31
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.insertedId);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        {
          description: 'Walk the dog',
          completed: true
        },
        {
          description: 'Buy milk',
          completed: false
        },
        {
          description: 'Do my daily coding',
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents');
        }

        console.log(result.insertedIds);
      }
    );
  }
);
