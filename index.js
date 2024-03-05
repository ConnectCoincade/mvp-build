const express = require('express');
const app = express();
const PORT = 3060;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Racecade Users To The MVP!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));