const { allDocs, getDoc, addDoc, deleteDoc } = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

const getFeedItems = options => allDocs(options || { include_docs: true })

const getTips = options => allDocs(option || {include_docs: true})

const getFeedItem = feedItemID => getDoc(feedItemID)

const getTip = tipID => getDoc(tipID)

const addFeedItem = doc => {
  doc.type = 'feedItem'
  doc._id = pkGen(doc)
  return addDoc(doc)
}

const deleteFeedItem = doc => {
  return deleteDoc(doc)
}

const dal = {
  getFeedItem,
  getFeedItems,
  addFeedItem,
  deleteFeedItem,
  getTips,
  getTip
}

module.exports = dal
