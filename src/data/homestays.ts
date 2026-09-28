import { destinations } from './destinations'

function imageForDestination(name: string): string {
  const destination = destinations.find((place) => place.name === name)
  if (!destination) throw new Error(`Homestay destination image not found: ${name}`)
  return destination.image
}

export interface Homestay {
  slug: string
  title: string
  location: string
  region?: string
  type: string
  description: string
  image: string
  imageAlt: string
  features: string[]
}

export interface HomestayType {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface HomestayFaq {
  question: string
  answer: string
}

export interface HomestayGalleryImage {
  image: string
  alt: string
  caption: string
  shape: 'wide' | 'portrait' | 'square'
}

export const homestayTopics = [
  'Stay with local hosts',
  'Experience village life',
  'Enjoy locally prepared food',
  'Discover local surroundings',
  'Learn about regional traditions',
  'Support locally operated hospitality',
]

export const homestayTypes: HomestayType[] = [
  { slug: 'village', title: 'Village Homestay', description: 'A closer connection with everyday mountain life.', image: 'photo-1470770841072-f978cf4d019e', imageAlt: 'A village and homes set among Himalayan hills' },
  { slug: 'family', title: 'Family Homestay', description: 'Stay with a local family and experience warm hospitality.', image: 'photo-1511895426328-dc8714191300', imageAlt: 'A family spending time together at home' },
  { slug: 'farm', title: 'Farm Stay', description: 'Where available, experience rural life and local agriculture.', image: 'photo-1500382017468-9049fed747ef', imageAlt: 'A rural landscape with cultivated fields' },
  { slug: 'mountain', title: 'Mountain Retreat', description: 'A peaceful stay surrounded by Himalayan landscapes.', image: 'photo-1464278533981-50106e6176b1', imageAlt: 'Mountain scenery and forested slopes' },
  { slug: 'cultural', title: 'Cultural Homestay', description: 'Combine accommodation with local food and cultural experiences.', image: 'photo-1513836279014-a89f7a76ae86', imageAlt: 'A community gathering in a cultural setting' },
  { slug: 'nature', title: 'Nature Stay', description: 'A base for exploring forests, trails and natural surroundings.', image: 'photo-1448375240586-882707db888b', imageAlt: 'A path leading through a quiet forest' },
]

export const homestaySampleListing: Homestay = {
  slug: 'mountain-village-stay-example',
  title: 'Mountain Village Stay',
  location: 'Kumaon, Uttarakhand',
  region: 'Kumaon',
  type: 'Village',
  description: 'Wake up surrounded by Himalayan landscapes and experience a slower way of travelling.',
  image: 'photo-1470770841072-f978cf4d019e',
  imageAlt: 'A mountain village beneath the Himalayan foothills',
  features: ['Local Food', 'Village Experience', 'Nature', 'Community'],
}

export const homestayFilters = ['All', 'Village', 'Family', 'Farm', 'Nature', 'Cultural'] as const
export type HomestayFilter = (typeof homestayFilters)[number]

export const homestayExperienceOptions = ['Any experience', 'Village life', 'Local food', 'Culture & heritage', 'Nature & trails'] as const

export const homestayDailyFlow = [
  { time: '07:30', title: 'Mountain Morning' },
  { time: '09:00', title: 'Traditional Breakfast' },
  { time: '11:00', title: 'Village Walk' },
  { time: '13:00', title: 'Local Lunch' },
  { time: '16:00', title: 'Explore the Surroundings' },
  { time: '19:00', title: 'Stories & Dinner' },
]

export const homestayExperiencePillars = [
  { title: 'LOCAL FOOD', description: 'Experience locally prepared meals where offered.', icon: 'food' },
  { title: 'LOCAL STORIES', description: 'Learn about the place from people who live there.', icon: 'stories' },
  { title: 'VILLAGE LIFE', description: 'See a different side of Uttarakhand beyond tourist viewpoints.', icon: 'village' },
  { title: 'COMMUNITY CONNECTION', description: 'Support locally operated hospitality.', icon: 'community' },
  { title: 'SLOW TRAVEL', description: 'Spend more time in one place instead of rushing through destinations.', icon: 'slow' },
] as const

export const homestayDestinationGroups = [
  { title: 'Kumaon Villages', region: 'Kumaon', image: 'photo-1470770841072-f978cf4d019e', imageAlt: 'Hillside village in a Himalayan landscape' },
  { title: 'Garhwal Villages', region: 'Garhwal', image: 'photo-1464822759023-fed622ff2c3b', imageAlt: 'A mountain landscape in Garhwal' },
  { title: 'Almora Region', place: 'Almora', image: imageForDestination('Almora'), imageAlt: 'Mountain scenery around Almora' },
  { title: 'Ranikhet Region', place: 'Ranikhet', image: imageForDestination('Ranikhet'), imageAlt: 'Forested mountain landscape around Ranikhet' },
  { title: 'Bageshwar Region', place: 'Bageshwar', image: imageForDestination('Bageshwar'), imageAlt: 'Mountain valley scenery around Bageshwar' },
  { title: 'Pithoragarh Region', place: 'Pithoragarh', image: imageForDestination('Pithoragarh'), imageAlt: 'High Himalayan landscape around Pithoragarh' },
]

export const homestayFoodTopics = ['Local ingredients', 'Traditional recipes', 'Shared meals', 'Mountain hospitality']

export const homestayCultureStories = [
  { id: 'traditions', title: 'TRADITIONS', description: 'Discover regional customs and stories.', image: 'photo-1513836279014-a89f7a76ae86', imageAlt: 'A community gathering that reflects local traditions' },
  { id: 'crafts', title: 'CRAFTS', description: 'Learn about local handmade traditions where available.', image: 'photo-1452860606245-08befc0ff44b', imageAlt: 'A handmade craft being worked on at a table' },
  { id: 'everyday-life', title: 'EVERYDAY LIFE', description: 'Experience the ordinary moments that make a place special.', image: 'photo-1470770841072-f978cf4d019e', imageAlt: 'Homes and landscape in a Himalayan village' },
]

export const responsibleHomestayPrinciples = [
  { id: 'privacy', title: 'Respect Privacy', description: 'Ask before photographing people or private spaces.', icon: 'privacy' },
  { id: 'house-rules', title: 'Follow House Rules', description: "Respect the host's guidance.", icon: 'rules' },
  { id: 'customs', title: 'Respect Local Customs', description: 'Be thoughtful around cultural and religious practices.', icon: 'customs' },
  { id: 'waste', title: 'Reduce Waste', description: 'Avoid unnecessary plastic and waste.', icon: 'waste' },
  { id: 'resources', title: 'Use Resources Mindfully', description: 'Be conscious of water and electricity.', icon: 'resources' },
  { id: 'local-economy', title: 'Support the Local Economy', description: 'Where possible, choose local products, food and services.', icon: 'local' },
] as const

export const internationalVisitorStories = [
  { title: 'MEET PEOPLE', description: 'Connect with local hosts.', icon: 'people' },
  { title: 'LEARN CULTURE', description: 'Understand the place through everyday life.', icon: 'culture' },
  { title: 'CREATE MEMORIES', description: 'Take home stories, not just photographs.', icon: 'memories' },
] as const

export const homestayJourneyStops = [
  { day: 'DAY 02', title: 'Village Experience', image: 'photo-1472396961693-142e6e269027', imageAlt: 'A village landscape along the sample journey' },
  { day: 'DAY 04', title: 'Pahadi Food', image: 'photo-1547592180-85f173990554', imageAlt: 'A regional meal along the sample journey' },
  { day: 'DAY 06', title: 'Culture', image: 'photo-1513836279014-a89f7a76ae86', imageAlt: 'A cultural gathering along the sample journey' },
  { day: 'DAY 09', title: 'Local Market', image: 'photo-1488459716781-31db52582fe9', imageAlt: 'Market produce along the sample journey' },
]

export const homestayGallery: HomestayGalleryImage[] = [
  { image: 'photo-1470770841072-f978cf4d019e', alt: 'Village homes in a mountain landscape', caption: 'Village homes · A sense of place', shape: 'wide' },
  { image: 'photo-1464278533981-50106e6176b1', alt: 'Mountain views across forested slopes', caption: 'Mountain views · First light', shape: 'portrait' },
  { image: 'photo-1616486338812-3dadae4b4ace', alt: 'A calm, welcoming bedroom interior', caption: 'Interiors · A place to rest', shape: 'square' },
  { image: 'photo-1556911220-bff31c812dba', alt: 'A home kitchen where a meal is being prepared', caption: 'Local kitchen · Preparation', shape: 'square' },
  { image: 'photo-1528605248644-14dd04022da1', alt: 'A meal set out to share around a table', caption: 'Food · Around the table', shape: 'wide' },
  { image: 'photo-1517457373958-b7bdd4587205', alt: 'People sharing a moment at a community gathering', caption: 'Community · Shared moments', shape: 'square' },
  { image: 'photo-1448375240586-882707db888b', alt: 'A quiet path through a wooded village landscape', caption: 'Village paths · Step outside', shape: 'portrait' },
  { image: 'photo-1470770841072-f978cf4d019e', alt: 'Evening light settling over a Himalayan valley', caption: 'Evening · Mountain quiet', shape: 'wide' },
]

export const homestayFaqs: HomestayFaq[] = [
  { question: 'What is a Himalayan homestay?', answer: 'A homestay is accommodation hosted by local people. Facilities, meals, room arrangements and activities vary by individual property and host.' },
  { question: 'Are homestays suitable for international travellers?', answer: 'A homestay can be a meaningful way to experience a place. Facilities and arrangements differ, so discuss your needs and expectations while planning.' },
  { question: 'Will I have a private room?', answer: 'Room arrangements vary by property and host. Confirm the specific sleeping arrangements before making plans.' },
  { question: 'Are meals included?', answer: 'Meal arrangements depend on the individual property and host. Confirm which meals, if any, are included for your stay.' },
  { question: 'Can I request dietary preferences?', answer: 'Share dietary preferences in advance. Whether they can be accommodated depends on the host, ingredients and facilities.' },
  { question: 'Can I stay with a local family?', answer: 'Some homestays are hosted by local families; arrangements differ between properties. Details should be confirmed for the specific stay.' },
  { question: 'Can homestays be included in the 10-day journey?', answer: 'The sample journey includes village experiences. Specific accommodation and activities depend on the selected package, host and availability.' },
]
