const express = require('express')

const app = express()

app.set('secret','dwsffvsd26323d2vs')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugin/db')(app)
require('./router/admin')(app)
require('./router/web')(app)

app.listen(3000, () => {
    console.log('接口通了');
  });