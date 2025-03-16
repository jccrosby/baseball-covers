import ids from '../static/index.json'

export default defineEventHandler((event) => {
  const index = Math.floor(Math.random() * ids.length)
  const id = ids[index]
  sendRedirect(event, `https://cdn.jsdelivr.net/gh/jccrosby/baseball-covers@main/static/${id}.webp`, 302)
})
