const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'))

console.log(app);
app.get('/', (req, res) =>{

    res.render('index')

})

app.get('/about', (req, res) =>{

    res.render('about')
})

const PORT = process.env.PORT  || 3000;

app.listen(3000, () => {
    console.log(`Сервер запущен на порте: ${PORT}`)
});