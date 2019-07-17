module.exports = app => {
  app.all('/', (req, res) => {
    res.send('Gustavo API')
  })
}