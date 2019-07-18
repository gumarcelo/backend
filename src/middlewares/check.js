import df from '../define'
import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  if(!req.headers.authorization) {
    res.status(400).send('Missing token')
    return
  }
  jwt.verify(req.headers.authorization, df.KEY, (err, data) => {
    if (err) {
      res.status(401).send('Token Inválido')
      return
    }
    next(data)
  })
}
export default verifyToken