const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    "hello": "world!"
  })
})

app.listen(process.env.PORT || 3000, () => console.log(`listening on port ${process.env.PORT || 3000}`))
