import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://test:pwd@127.0.0.1:27017/starter')

const db = mongoose.connection;

db.on('error', (err) => {console.log('error on database connection:', err)})
.once('open', () => {console.log('Connected to DB')});


app.get('/', (req, res) => {
    res.send();
})

app.use('/api', graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})))

app.listen(3000, () => {console.log('Graphql running at port 3000')})
