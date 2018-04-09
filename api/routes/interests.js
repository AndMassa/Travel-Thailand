const {
  getInterests
} = require('../dal')
const pkGen = require('../lib/pkGen')

module.exports = app => {
  app.get('/interests', req, res) => {
    getInterests({
      include_docs: true
    })
    .then(interests => res.send(interests))
    .catch(err => console.log(err))
  }
}
