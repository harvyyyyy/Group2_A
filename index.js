// Package imports
const express = require('express')

const app = express()

app.use('/', require('./routes/users.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/me', require('./routes/users.routes'))

app.get('/', (req, res) => {
    const users =[
	{
	id: 1,
	name: "Candia",
	email: "candia@gmail.com"}]:

    res.json({
        {
  "success": true,
  "data": [ ... ],
  "meta": {
    "timestamp": "2026-09-17T18:45:00.000Z",
    "count": 1
  }
}
    })
})
 
app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
})
