const express = require('express')
const app = express()
const morgan = require('morgan')

const PORT = 4000

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/students', (req, res) => {
	const students = [
		{ id: 1, firstName: 'Captain', lastName: 'fancy' },
		{ id: 2, firstName: 'John', lastName: 'buttercup' },
		{ id: 3, firstName: 'Dusty', lastName: 'Trail' },
	]
	res.json(students)
})

app.listen(PORT, () => console.log('Listening on port', PORT))
