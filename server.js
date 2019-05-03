const express = require('express')
const path = require('path')
const port = 8080
const app = express()

app.use(express.static(__dirname + '/dist'))
console.log('using /dist')
app.get('*', (req, res) => {
    if(res.statusCode === 200) {
        console.log('request successful!')
        res.sendFile(process.cwd()+"/dist/index.html")
    } else {
        console.log(res.json())
    }
})

app.listen(port, () => {
    console.log(port)
})
