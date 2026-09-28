export type AdventureDifficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Seasonal'

export interface Adventure {
  slug: string
  title: string
  category: string
  difficulty: AdventureDifficulty
  duration: string
  description: string
  image: string
  imageAlt: string
  location?: string
  seasonal?: boolean
}

export interface AdventureCategory {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon: 'trek' | 'water' | 'camp' | 'nature' | 'snow' | 'photo'
}

export interface AdventureFaq {
  question: string
  answer: string
}

export interface AdventureGalleryImage {
  image: string
  alt: string
  caption: string
  shape: 'wide' | 'portrait' | 'square'
}

export const adventureActivities = [
  'Trekking',
  'River rafting',
  'Camping',
  'Nature walks',
  'Mountain photography',
  'Scenic outdoor exploration',
  'Seasonal snow experiences where available',
]

export const adventureCategories: AdventureCategory[] = [
  { slug: 'trekking', title: 'Trekking', description: 'Mountain trails, forests and highland landscapes.', image: 'photo-1464822759023-fed622ff2c3b', imageAlt: 'High Himalayan peaks above a mountain trail', icon: 'trek' },
  { slug: 'river-rafting', title: 'River Rafting', description: 'Guided river experiences where conditions and operators permit.', image: 'photo-1500534623283-312aade485b7', imageAlt: 'River flowing through a Himalayan landscape', icon: 'water' },
  { slug: 'camping', title: 'Camping', description: 'Spend time outdoors under Himalayan skies.', image: 'photo-1478131143081-80f7f84ca84d', imageAlt: 'A tent set up at an outdoor campsite', icon: 'camp' },
  { slug: 'nature-walks', title: 'Nature Walks', description: 'Slower exploration through forests and natural landscapes.', image: 'photo-1448375240586-882707db888b', imageAlt: 'A quiet path winding through a mountain forest', icon: 'nature' },
  { slug: 'snow-experiences', title: 'Snow Experiences', description: 'Seasonal snow activities where weather and local conditions allow.', image: 'photo-1517299321609-52687d1bc55a', imageAlt: 'Snow-covered Himalayan mountain slopes', icon: 'snow' },
  { slug: 'photography', title: 'Photography', description: 'Mountain landscapes, villages and outdoor viewpoints.', image: 'photo-1519681393784-d120267933ba', imageAlt: 'A photographer looking toward a mountain landscape', icon: 'photo' },
]

export const featuredAdventures: Adventure[] = [
  { slug: 'himalayan-trekking', title: 'Himalayan Trekking', category: 'Trekking', difficulty: 'Moderate', duration: '1–3 Days', description: 'Explore mountain trails, forests and highland landscapes at a pace suited to the selected route.', image: 'photo-1464822759023-fed622ff2c3b', imageAlt: 'A Himalayan trekking route beneath high mountain peaks', location: 'Uttarakhand' },
  { slug: 'river-rafting', title: 'River Rafting', category: 'Water Adventure', difficulty: 'Moderate', duration: 'Half Day / Full Day', description: 'A guided river experience, dependent on local operators, river conditions and the selected route.', image: 'photo-1500534623283-312aade485b7', imageAlt: 'A river cutting through a green mountain valley', location: 'Rishikesh' },
  { slug: 'mountain-camping', title: 'Mountain Camping', category: 'Camping', difficulty: 'Easy', duration: '1–2 Nights', description: 'Spend time outdoors in a suitable campsite, with arrangements shaped by the location and season.', image: 'photo-1478131143081-80f7f84ca84d', imageAlt: 'A tent at a campsite surrounded by mountain scenery' },
  { slug: 'forest-exploration', title: 'Forest Exploration', category: 'Nature', difficulty: 'Easy', duration: 'Half Day', description: 'Take a slower walk through forest and natural landscapes with local conditions in mind.', image: 'photo-1448375240586-882707db888b', imageAlt: 'A forest trail shaded by tall trees', location: 'Kumaon / Garhwal' },
  { slug: 'snow-adventure', title: 'Snow Adventure', category: 'Seasonal', difficulty: 'Seasonal', duration: 'Seasonal', description: 'Explore winter landscapes through suitable activities where weather and local conditions permit.', image: 'photo-1517299321609-52687d1bc55a', imageAlt: 'Snow resting on a Himalayan mountainside', seasonal: true },
  { slug: 'mountain-photography', title: 'Mountain Photography', category: 'Photography', difficulty: 'Easy', duration: 'Half Day / Full Day', description: 'Find time for mountain landscapes, villages and outdoor viewpoints along the way.', image: 'photo-1519681393784-d120267933ba', imageAlt: 'Mountain landscape framed for outdoor photography', location: 'Uttarakhand' },
]

export const adventureLevels = ['All', 'Easy', 'Moderate', 'Challenging'] as const
export type AdventureLevelFilter = (typeof adventureLevels)[number]

export const safetyPrinciples = [
  { id: 'local-guides', title: 'Local Guides', description: 'Use qualified local guides where appropriate.', icon: 'guide' },
  { id: 'weather-awareness', title: 'Weather Awareness', description: 'Mountain conditions can change quickly.', icon: 'weather' },
  { id: 'proper-equipment', title: 'Proper Equipment', description: 'Use suitable equipment for the selected activity.', icon: 'equipment' },
  { id: 'know-your-limits', title: 'Know Your Limits', description: 'Choose experiences appropriate for your ability.', icon: 'limits' },
  { id: 'local-guidance', title: 'Follow Local Guidance', description: 'Respect route closures and safety instructions.', icon: 'guidance' },
  { id: 'travel-insurance', title: 'Travel Insurance', description: 'Travellers should consider appropriate travel insurance.', icon: 'insurance' },
] as const

export const seasonalAdventures = [
  { id: 'spring', title: 'SPRING', description: 'Trekking, nature and mountain landscapes.', image: 'photo-1464822759023-fed622ff2c3b', imageAlt: 'Spring light falling across mountain peaks' },
  { id: 'summer', title: 'SUMMER', description: 'Outdoor exploration, trekking and river activities where available.', image: 'photo-1464278533981-50106e6176b1', imageAlt: 'A green Himalayan landscape in summer' },
  { id: 'monsoon', title: 'MONSOON', description: 'Weather-sensitive travel and activities may be affected.', image: 'photo-1448375240586-882707db888b', imageAlt: 'A forest landscape in misty weather' },
  { id: 'winter', title: 'WINTER', description: 'Snow experiences and winter landscapes where conditions permit.', image: 'photo-1517299321609-52687d1bc55a', imageAlt: 'A winter mountain landscape with fresh snow' },
]

export const communityConnections = [
  { id: 'guides', title: 'LOCAL GUIDES', description: 'Learn from people who know the landscape.', icon: 'guide' },
  { id: 'stays', title: 'LOCAL STAYS', description: 'Combine adventure with village hospitality.', icon: 'stay' },
  { id: 'food', title: 'LOCAL FOOD', description: 'Recover and reconnect with regional flavours.', icon: 'food' },
] as const

export const adventureMapPlaces = [
  { name: 'Rishikesh', category: 'WATER' },
  { name: 'Auli', category: 'SNOW' },
  { name: 'Chopta', category: 'TREK' },
  { name: 'Munsiyari', category: 'CAMP' },
  { name: 'Kumaon', category: 'NATURE' },
  { name: 'Garhwal', category: 'TREK' },
] as const

export const adventurePackingList = [
  'Comfortable footwear',
  'Layered clothing',
  'Water bottle',
  'Sun protection',
  'Personal medication',
  'Weather-appropriate outer layer',
  'Small daypack',
  'Valid identification / documents',
]

export const adventureJourneyStops = [
  { day: 'DAY 03', title: 'Himalayan Trek', image: 'photo-1464822759023-fed622ff2c3b', imageAlt: 'Mountain peaks along the sample journey' },
  { day: 'DAY 07', title: 'Adventure Experience', image: 'photo-1500534623283-312aade485b7', imageAlt: 'River and mountain scenery on the sample journey' },
  { day: 'DAY 08', title: 'Forest & Nature', image: 'photo-1464278533981-50106e6176b1', imageAlt: 'Forest landscape on the sample journey' },
]

export const adventureGallery: AdventureGalleryImage[] = [
  { image: 'photo-1464822759023-fed622ff2c3b', alt: 'Trekking trail winding through Himalayan peaks', caption: 'Trekking · Mountain trails', shape: 'wide' },
  { image: 'photo-1470770841072-f978cf4d019e', alt: 'A mountain valley opening toward distant Himalayan ranges', caption: 'Mountain landscapes · Open horizons', shape: 'portrait' },
  { image: 'photo-1500534623283-312aade485b7', alt: 'River moving through a Himalayan valley', caption: 'River adventures · Flowing landscapes', shape: 'square' },
  { image: 'photo-1478131143081-80f7f84ca84d', alt: 'A tent pitched outdoors beneath a mountain sky', caption: 'Camping · A night outdoors', shape: 'square' },
  { image: 'photo-1448375240586-882707db888b', alt: 'A trail passing through a quiet forest', caption: 'Forest trails · Take it slow', shape: 'wide' },
  { image: 'photo-1517299321609-52687d1bc55a', alt: 'Snow-covered slopes in a high mountain landscape', caption: 'Snow landscapes · Season dependent', shape: 'square' },
  { image: 'photo-1519681393784-d120267933ba', alt: 'Mountain peaks viewed from an outdoor viewpoint', caption: 'Adventure photography · Find a viewpoint', shape: 'portrait' },
]

export const adventureFaqs: AdventureFaq[] = [
  { question: 'Is Uttarakhand suitable for first-time adventure travellers?', answer: 'There are different kinds of outdoor experiences, but suitability depends on the particular activity, route, season, operator and traveller. Share your preferences and experience while planning.' },
  { question: 'Can I choose an easier activity?', answer: 'Often there may be a range of options. What is appropriate depends on the destination, activity, local conditions and what is available at the time.' },
  { question: 'What happens if weather changes the activity?', answer: 'Weather can affect routes and outdoor plans. Follow local guidance; changes or alternatives depend on the activity, operator and conditions.' },
  { question: 'Do I need previous trekking experience?', answer: 'Requirements differ by route and activity. Check the specific route details and discuss your experience with the relevant local operator before making plans.' },
  { question: 'Are adventure activities guided?', answer: 'Guiding arrangements depend on the activity, location and operator. Confirm what is included for the specific experience you are considering.' },
  { question: 'Can adventure activities be added to the 10-day journey?', answer: 'The sample journey includes outdoor experiences, but final arrangements depend on the selected package, season, availability and local conditions.' },
]
