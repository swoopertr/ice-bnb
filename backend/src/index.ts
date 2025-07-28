import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import HomeData from './homesData.js'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/homes', async (c) => {
  //sleep(1000) // Simulate a delay
  //await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
  return c.json(HomeData);
  //return c.text(JSON.stringify(HomeData));
})

app.get('/search/:city', async (c) => {
  const city = c.req.param('city');
  const result = HomeData.filter(item => item.address.city.startsWith(city));
  return c.json(result);
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
