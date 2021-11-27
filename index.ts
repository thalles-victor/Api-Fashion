import { PrismaClient } from '@prisma/client'
import express from 'express';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// ... your REST API routes will go here
app.get('/products', async (req, res) => {
  const allProducts = await prisma.products.findMany();
  res.json(allProducts)
})

app.post('/postProducts', async( req, res ) => {
  const result = await prisma.products.create({
    data: { ...req.body }
  })
  res.json(result)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)