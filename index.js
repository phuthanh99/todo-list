const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const port = process.env.PORT;

const app = express();

const todoRoutes = require('./routes/Todo');


mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://thanhjuio99:mylovetara7012@cluster0.zqd1i.mongodb.net/todo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});


app.use(cors());
app.use(bodyParser.json());

app.use('/api', todoRoutes);

app.listen(port, () => {
    console.log(`listening on port htstp://localhost:${port}`);
});
