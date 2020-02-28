let express = require('express');
let app = express();

app.get('/', (req, res)=>{
    res.send('Hello, World!')
})

app.get('/cats', (req, res)=>{
    res.send('Meow')
})
app.get('/dogs', (req, res)=>{
    res.send('Woof')
})
app.get('/cats_and_dogs', (req, res)=>{
    res.send('Living together')
})

app.get('/greet/:name', (req, res)=>{
    let name = req.param('name');
    res.send(`Hello, ${name}!`);
})

app.get('/year', (req, res)=>{
    let age = req.param('age');
    let today = new Date();
    console.log(age);
    console.log(today.getFullYear());
    let yearBorn = today.getFullYear() - Number(age);
    res.send(`You were born in ${yearBorn}`)
})


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})