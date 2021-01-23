const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('Your Server is running on port 3000');
})

app.get('/greeting', (req,res)=>{
    res.send('hello Stranger')
})
app.get('/greeting/:name', (req,res)=>{
    res.send(`Sup ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req,res)=>{

    res.send(+req.params.total * +req.params.tipPercentage/100 +'')
})


app.get('/magic/:question', (req,res)=>{
    arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    rand = Math.ceil(Math.random()*19)

    res.send(req.params.question+' The stars say: '+arr[rand]+'!')
})

app.get('/fibonacci/:num', (req,res)=>{
    let fib = [0,1]
    let i=1
    const num = +req.params.num
    while(num>i){
        fib.push(fib[i] + fib[i-1])
        i++
    }
    res.send(fib[i-1]+'')

})


