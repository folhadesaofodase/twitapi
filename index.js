import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import service from './src/service'

const app = express()
app.use(express.json())

app.post('/twit', async function(req, res) {
	try {
		await service.twit(req.body)
		res.send('Boa negão')
	} catch(err) {
		console.log(err)
		res.status(400).send(err)
	}
})

app.listen(3000, () => {
	console.log('SAAAAAAAAAAAAAS')
})
