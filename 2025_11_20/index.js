const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
