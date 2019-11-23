import express from 'express'
import service from './src/service'
import messageGen from './src/messageGenerator'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())

app.post('/twit', async function(req, res) {
	try {
    const message = messageGen(req.body)
		await service.twit(message)
		res.send('Boa negão')
	} catch(err) {
		console.log(err)
		res.status(400).send(err)
	}
})

app.listen(3000, () => {
	console.log('SAAAAAAAAAAAAAS')
})
