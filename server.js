// server.js
import express from 'express'
import cors from 'cors'
import feedbackRouter from './routes/feedback.js'

const app = express()
const PORT = 3001 // your backend port

app.use(cors())
app.use(express.json()) // for parsing application/json

app.use('/api', feedbackRouter) // route for feedback

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
