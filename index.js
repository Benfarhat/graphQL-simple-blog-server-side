import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

/*
$ mongo
> use starter
switched to db starter
> db.createUser({user:"test",pwd:"pwd", roles:[{role:"readWrite",db:"starter"}]})
*/
const dbURI = 'mongodb://test:pwd@127.0.0.1:27017/starter';
mongoose.connect(dbURI, { autoIndex: false })

const db = mongoose.connection;

db.on('error', (err) => {console.log('error on database connection:' + err)})
.once('open', () => {console.log('Connected to DB')});

process.on('SIGINT', () => {
  db.close(()=> {
    console.log('Mongoose disconnected through application termination')
    process.exit(0)
  })
})

app.get('/', (req, res) => {
    res.send();
})

app.use('/api', bodyParser.json(), graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})))

app.listen(3000, () => {console.log('Graphql running at port 3000')})
