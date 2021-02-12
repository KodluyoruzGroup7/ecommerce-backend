const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server up'));
