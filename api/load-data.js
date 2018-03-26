require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

db
  .bulkDocs([
    {
      _id: 'siam-square',
      name: 'Siam Square',
      shortName: 'Siam Square',
      desc:
        'Siam Square (Thai: สยามสแควร์) is a shopping and entertainment area in the Siam area of Bangkok, Thailand. The area connects to other shopping centres and links to the other shopping districts by sky bridge, such as Siam Center/Siam Discovery Center, MBK Center, Siam Square One, Siam Paragon, Ratchaprasong shopping district and Sukhumvit Road.  Within Siam Square itself, there is a range of shops and services, including tutor schools, restaurants, cafe, designer clothing boutiques, record stores, bookshops, Hard Rock Cafe and banks. The customers vary from young-aged school and college students to office workers and foreign tourists. It is sometimes referred to as the "SoHo" or "Shinjuku of Thailand".',
      shortDesc: 'High end shopping mall complex.',
      icon: 'attach_money',
      options: ['shopping', 'food', 'explore', 'drink']
  },
  {
    _id: 'mega-bangna',
    name: 'Mega Bangna',
    shortName: 'Mega Bangna',
    desc:
      'Bangkok sure does like its shopping malls to be gigantic! Located half way between Suvarnabhumi International Airport and the centre of Bangkok, Mega Bangna is the latest mammoth to hit town. This 35,000 square metres low rise shopping mall is mainly known as the home of IKEA, attracting a huge crowd of 'Do It Yourself' home decorators. It's a bit far out of town but the access has been well planned and for those who don't have a car, a shuttle connecting Udomsak BTS station and the mall is available. This is not a high end shopping mall for tourists but a very convenient escape for loacls and residents during the weekend. Read more at: http://www.bangkok.com/magazine/mega-bangna.htm?cid=ch:OTH:001',
    shortDesc: 'A very large and easily navigated shopping behemoth.',
    icon: 'attach_money',
    options: ['shopping', 'food', 'explore', 'drink']
},
{
  _id: 'soi-cowboy',
  name: 'Soi Cowboy',
  shortName: 'Soi Cowboy',
  desc:
    'Soi Cowboy is a short (150 meter long) street in Bangkok, Thailand, with some 40, mostly go-go bars. It caters mainly to tourists and expatriates.',
  shortDesc: 'Short street with many places to dance and drink.',
  icon: 'attach_money',
  options: ['food', 'drink', 'explore']
},
{
  _id: 'nana-plaza',
  name: 'Nana Plaza',
  shortName: 'Nana Plaza',
  desc:
    'Located in Sukhumvit Soi 4, Nana Plaza is Bangkok's naughty central, notorious for its racy themed go-go bars. It's three storeys of eye-popping activity all focused around a square-shaped central atrium. Unlike at the better-known Soi Cowboy or Patpong, Nana Plaza is a 'more adult' scene. That means no families, no markets and few curious tourists strolling in for a look. It is a popular venue for those in the mood for an exotic visual experience, and something extreme to talk about when back home. Read more at: http://www.bangkok.com/nightlife-go-go-bar/nana-plaza.htm?cid=ch:OTH:001',
  shortDesc: 'An adult themed plaza with exotic establishments and refreshments.',
  icon: 'attach_money',
  options: ['food', 'drink', 'explore']
},
{
  _id: 'wat-arun',
  name: 'Wat Arun Ratchawararam Ratchawaramahawihan',
  shortName: 'Wat Arun',
  desc:
    'It is a Buddhist temple (wat) in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. The temple derives its name from the Hindu god Aruna, often personified as the radiations of the rising sun. Wat Arun is among the best known of Thailands landmarks and the first light of the morning reflects off the surface of the temple with pearly iridescence. Although the temple had existed since at least the seventeenth century, its distinctive prang (spires) were built in the early nineteenth century during the reign of King Rama II.',
  shortDesc: 'A beautiful and well-known temple along the banks of a river.',
  icon: '',
  options: []
},
{
  _id: '',
  name: '',
  shortName: '',
  desc:
    '',
  shortDesc: '',
  icon: '',
  options: []
},
{
  _id: '',
  name: '',
  shortName: '',
  desc:
    '',
  shortDesc: '',
  icon: '',
  options: []
},
{
  _id: '',
  name: '',
  shortName: '',
  desc:
    '',
  shortDesc: '',
  icon: '',
  options: []
},
{
  _id: '',
  name: '',
  shortName: '',
  desc:
    '',
  shortDesc: '',
  icon: '',
  options: []
},
{
  _id: '',
  name: '',
  shortName: '',
  desc:
    '',
  shortDesc: '',
  icon: '',
  options: []
}

  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))
