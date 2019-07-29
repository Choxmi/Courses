const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

//Automatically set home page to index.html in the directory
const publicPath = path.join(__dirname, '../public');
//setup static directory to serve
app.use(express.static(publicPath))

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Pass to static page

// app.get('', (req, res) => {
//     res.send('<h1>Home Page</h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send([{
//         name: 'Choxmi',
//         age: 25
//     },{
//         name: 'Blah',
//         age: 50
//     }])
// })

//Creating routes with hbs
//// HBS -> Handle bar files should be inside view directory
//Setting View Engine
app.set('view engine','hbs')

//Customize views location
app.set('views',viewsPath)
//Register partials
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index',{
        title: 'Demo title',
        author: 'Choxmi'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Project',
        img: '/img/me.jpg'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404',{
        error: 'Data not found on this directory'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        error: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Application listening on port 3000')
})