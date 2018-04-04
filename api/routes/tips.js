const {
  getTips,
  getTip
} = require('../dal')
const pkGen = require('../lib/pkGen')

module.exports = app => {
  app.get('/tips', (req, res) => {
    getTips({
      include_docs: true,
      startkey: 'tip_',
      endkey: 'tip_\ufff0'
    })
      .then(tips => res.send(tips))
      .catch(err => console.log(err))
  })
  app.get('tips/:id', (req, res) => {
    getTip(req.params.id).then(tip => res.send(tip))
  })
}
