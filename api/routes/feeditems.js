const {
  getFeedItems,
  getFeedItem,
  addFeedItem,
  deleteFeedItem
} = require('../dal')
const pkGen = require('../lib/pkGen')

module.exports = app => {
  app.get('/feeditems', (req, res) => {
    getFeedItems({
      include_docs: true,
      startkey: 'feedItem_',
      endkey: 'feedItem_\ufff0'
    })
      .then(feedItems => res.send(feedItems))
      .catch(err => console.log(err))
  })
  app.get('/feeditems/:id', (req, res) => {
    getFeedItem(req.params.id).then(feedItem => res.send(feedItem))
  })

  app.post('/feeditems', (req, res) => {
    addFeedItem(req.body)
      .then(addedFeedItem => res.status(201).send(addedFeedItem))
      .catch(err => console.log('Post Resource ERROR', err))
  })

  app.delete('/feeditems/:id', (req, res) => {
    deleteFeedItem(req.params.id)
      .then(deletedResult => res.status(200).send(deletedResult))
      .catch(err => console.log('Could not delete item.'))
  })
}
