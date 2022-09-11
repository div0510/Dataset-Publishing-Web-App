const mongoose = require('mongoose');
const db='datasetPublishingWebApp';
const dbUrl = `mongodb+srv://div0510:1234div89@cluster0.vmtfv.mongodb.net/${db}?retryWrites=true&w=majority`;

// making Connection
mongoose.connect(dbUrl)
.then((result) => {
    console.log('DataBase Connected');      
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;