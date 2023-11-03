const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const indexRoute = require('./routes/index');
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
