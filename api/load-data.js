require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

db
  .bulkDocs([
    {
      _id: 'feedItem_thailand_bangkok-siam-square',
      type: 'feedItem',
      country: 'Thailand',
      city: 'Bangkok',
      name: 'Siam Square',
      shortName: 'Siam Square',
      desc:
        'Siam Square (Thai: สยามสแควร์) is a shopping and entertainment area in the Siam area of Bangkok, Thailand. The area connects to other shopping centres and links to the other shopping districts by sky bridge, such as Siam Center/Siam Discovery Center, MBK Center, Siam Square One, Siam Paragon, Ratchaprasong shopping district and Sukhumvit Road.  Within Siam Square itself, there is a range of shops and services, including tutor schools, restaurants, cafe, designer clothing boutiques, record stores, bookshops, Hard Rock Cafe and banks. The customers vary from young-aged school and college students to office workers and foreign tourists. It is sometimes referred to as the "SoHo" or "Shinjuku of Thailand".',
      shortDesc: 'High end shopping mall complex.',
      icon: 'attach_money',
      tags: ['shopping', 'food', 'explore', 'drink']
  },
  {
    _id: 'feedItem_thailand_bangkok-mega-bangna',
    type: 'feedItem',
    country: 'Thailand',
    city: 'Bangkok',
    name: 'Mega Bangna',
    shortName: 'Mega Bangna',
    desc: 'Bangkok sure does like its shopping malls to be gigantic! Located half way between Suvarnabhumi International Airport and the centre of Bangkok, Mega Bangna is the latest mammoth to hit town. This 35,000 square metres low rise shopping mall is mainly known as the home of IKEA, attracting a huge crowd of Do It Yourself home decorators. Its a bit far out of town but the access has been well planned and for those who dont have a car, a shuttle connecting Udomsak BTS station and the mall is available. This is not a high end shopping mall for tourists but a very convenient escape for loacls and residents during the weekend.',
    shortDesc: 'A very large and easily navigated shopping behemoth.',
    icon: 'attach_money',
    tags: ['shopping', 'food', 'explore', 'drink']
},
{
  _id: 'feedItem_thailand_bangkok-soi-cowboy',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Soi Cowboy',
  shortName: 'Soi Cowboy',
  desc:
    'Soi Cowboy is a short (150 meter long) street in Bangkok, Thailand, with some 40, mostly go-go bars. It caters mainly to tourists and expatriates.',
  shortDesc: 'Short street with many places to dance and drink.',
  icon: 'attach_money',
  tags: ['food', 'drink', 'explore']
},
{
  _id: 'feedItem_thailand_bangkok-nana-plaza',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Nana Plaza',
  shortName: 'Nana Plaza',
  desc:'Located in Sukhumvit Soi 4, Nana Plaza is Bangkoks naughty central, notorious for its racy themed go-go bars. It is three storeys of eye-popping activity all focused around a square-shaped central atrium. Unlike at the better-known Soi Cowboy or Patpong, Nana Plaza is a more adult scene. That means no families, no markets and few curious tourists strolling in for a look. It is a popular venue for those in the mood for an exotic visual experience, and something extreme to talk about when back home.',
  shortDesc: 'An adult themed plaza with exotic establishments and refreshments.',
  icon: 'attach_money',
  tags: ['food', 'drink', 'explore']
},
{
  _id: 'feedItem_thailand_bangkok-wat-arun',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Wat Arun Ratchawararam Ratchawaramahawihan',
  shortName: 'Wat Arun',
  desc:
    'It is a Buddhist temple (wat) in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. The temple derives its name from the Hindu god Aruna, often personified as the radiations of the rising sun. Wat Arun is among the best known of Thailands landmarks and the first light of the morning reflects off the surface of the temple with pearly iridescence. Although the temple had existed since at least the seventeenth century, its distinctive prang (spires) were built in the early nineteenth century during the reign of King Rama II.',
  shortDesc: 'A beautiful and well-known temple along the banks of a river.',
  icon: '',
  tags: ['temple', 'explore', 'history']
},
{
  _id: 'feedItem_thailand_bangkok-wat-pho',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Wat Phra Chetuphon Vimolmangklararm Rajwaramahaviharn',
  shortName: 'Wat Pho',
  desc:
    'The temple is first on the list of six temples in Thailand classed as the highest grade of the first-class royal temples. It is associated with King Rama I who rebuilt the temple complex on an earlier temple site, and became his main temple where some of his ashes are enshrined. The temple was later expanded and extensively renovated by Rama III. The temple complex houses the largest collection of Buddha images in Thailand, including a 46 m long reclining Buddha. The temple is considered the earliest centre for public education in Thailand, and the marble illustrations and inscriptions placed in the temple for public instructions has been recognised by UNESCO in its Memory of the World Programme. It houses a school of Thai medicine, and is also known as the birthplace of traditional Thai massage which is still taught and practiced at the temple.',
  shortDesc: 'Beautiful temple alongside a river with a large statue of the Buddha.',
  icon: '',
  tags: ['temple', 'explore', 'history']
},
{
  _id: 'feedItem_thailand_bangkok-jj-market',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Chatuchak Weekend Market',
  shortName: 'JJ Market',
  desc:
    'The Chatuchak Weekend Market (Thai: ตลาดนัดจตุจักร), on Kamphaeng Phet 2 Road, Chatuchak, Bangkok, is the largest market in Thailand. Also known as JJ Market, it has more than 15,000 stalls, divided into 27 sections. Chatuchak Market sells many different kinds of goods, including plants, antiques, consumer electronics, cosmetics, pets, food and drinks, fresh and dry food, ceramics, furniture and home accessories, clothing, and books.',
  shortDesc: 'Very large open air market with all types of goods.',
  icon: 'attach_money',
  tags: ['food', 'drink', 'explore', 'shopping']
},
{
  _id: 'feedItem_thailand_bangkok-patpong',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Patpong Night Market',
  shortName: 'Patpong',
  desc:
    'In the evening, this lively market is a great place to shop for souvenirs, fake brand name items and cheap goods and to visit Bangkok’s infamous “adult entertainment area.”',
  shortDesc: 'A night market with great prices, food and drinks.',
  icon: 'attach_money',
  tags: ['food', 'drink', 'explore', 'shopping']
},
{
  _id: 'feedItem_thailand_bangkok-khao-san',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Khao San Road',
  shortName: 'Khao San',
  desc:
    'The backpacking district of Khao San Road is the traveler hub of South East Asia. Jam-packed with raucous bars and restaurants as well as budget hostels, it’s a favorite for late-night revelers.',
  shortDesc: 'A great area filled with locals, backpackers and fun bars.',
  icon: 'attach_money',
  tags: ['food', 'drink', 'explore', 'shopping']
},
{
  _id: 'feedItem_thailand_bangkok-jim-thompson',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'Jim Thompson House',
  shortName: 'Jim Thompson House',
  desc:
    'The Jim Thompson House is a museum in central Bangkok, Thailand, housing the art collection of American businessman and architect Jim Thompson, the museum designer and former owner. Built in 1959, the museum spans one rectangular "rai" of land (approximately half an acre or 2023.43 meters). It is one of the most popular tourist destinations in Thailand; sporting vibrant jungle foliage in the heart of the city.',
  shortDesc: 'A house previously owned by a very influential silk trader, shrouded in mystery.',
  icon: 'house',
  tags: ['history', 'explore']
},
{
  _id: 'feedItem_thailand_bangkok-w-district',
  type: 'feedItem',
  country: 'Thailand',
  city: 'Bangkok',
  name: 'W District',
  shortName: 'W District',
  desc: 'W District is a community mall with a focus on shopping, dining and entertainment, all brought together with an emphasis on urban modern art, from surrealist sculpture to stylish graffiti. Located next to Phrakanong BTS Skytrain Station, this is the first mall of its kind in lower Sukhumvit and is likely to become a central hub of activity in the area.',
  shortDesc: 'A great plaza to eat all different types of high quality, international and Thai-fusion food.',
  icon: 'food',
  tags: ['food', 'drink', 'explore']
},
{
  _id: 'tip_thailand_bangkok-women-in-temples',
  type: 'feedTip',
  name: 'Women in Temples',
  desc:
    'When entering a temple, it is not appropriate for women to show their shouldes.',
  shortDesc: 'Women must cover their shoulders when entering a temple or holy site.',
  icon: 'placeholder',
  tags: ['temple']
},
{
  _id: 'tip_thailand_bangkok-respect-the-king',
  type: 'feedTip',
  name: 'Respect the King',
  desc:
    'In Thailand, lèse majesté is criminalized by Section 112 of the Thai Criminal Code. It is illegal to defame, insult, or threaten the king, queen, heir-apparent, or regent. The lèse-majesté law has been on the statute books since 1908. The punishment is three to fifteen years of imprisonment per count and has been described as the worlds harshest lèse majesté law and possibly the strictest criminal-defamation law anywhere.',
  shortDesc: 'Do not insult, defame or speak against the King for any reason, it is punishable by up to 15 years in prison.',
  icon: 'placeholder',
  tags: ['temple', 'history', 'drink', 'food', 'explore', 'shopping']
},
{
  _id: 'tip_thailand_bangkok-drinks-served',
  type: 'feedTip',
  name: 'Drinks Served',
  desc:
    'In most restaurants across Thailand, ice is put into beer and your glass is expected to be refilled by your waitress - it can be seen as rude to pour your own!',
  shortDesc: 'Waitresses will refill your beer and possibly add ice.',
  icon: 'placeholder',
  tags: ['drink', 'food']
},
{
  _id: 'tip_thailand_bangkok-tuk-tuks',
  type: 'feedTip',
  name: 'Tuk-Tuks',
  desc:
    'A common form of transportation is the Tuk-Tuk, otherwise known as a 3-wheeled taxi.  They do not have travel rates and you must negotiate a price. A general rule of thumb is to counter-offer half of the asking price, as the drivers like to take advantage of foreigners.',
  shortDesc: 'Tuk-Tuks are a 3-wheeled transport service, the drivers will try and take advantage of foreigners, so be wary about prices.',
  icon: 'placeholder',
  tags: ['explore']
},
{
  _id: 'tip_thailand_bangkok-offered-hospitality',
  type: 'feedTip',
  name: 'Offered Hospitality',
  desc:
    'When a Thai person offers you a drink or a bite to eat, it is seen as immensely rude to decline - you do not have to stay for a whole meal, but it is considered fair to accept.',
  shortDesc: 'Take a drink or a bite to drink when offered, as to not insult.',
  icon: 'placeholder',
  tags: ['food', 'drink']
},
{
  _id: 'tip_thailand_bangkok-paying-for-meals',
  type: 'feedTip',
  name: 'Paying For Meals',
  desc:
    'Thai people will offer to pay for your meal and it is considered very rude to decline or counter-offer.',
  shortDesc: 'Accept paid for meals to prevent insult.',
  icon: 'placeholder',
  tags: ['food', 'drink']
},
{
  _id: 'tip_thailand_bangkok-monk-no-touch',
  type: 'feedTip',
  name: 'Monk No Touch',
  desc:
    'Monks are not allowed to touch women for any reason and thus they will generally keep their distance.  Please do not attempt to touch them as it is considered very sacrilige.',
  shortDesc: 'Monks cannot touch women for any reason.',
  icon: 'placeholder',
  tags: ['temple', 'explore']
},
  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))
