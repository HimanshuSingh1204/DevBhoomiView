export type PassportStatus = 'Completed' | 'Current' | 'Upcoming'
export type PassportStampKind = 'Destination' | 'Experience'

export type PassportStamp = {
  id: string
  title: string
  category: string
  status: PassportStatus
  kind: PassportStampKind
  image: string
  description: string
  day: string
  highlights: string[]
}

export type PassportCategory = {
  title: string
  description: string
  icon: 'nature' | 'adventure' | 'culture' | 'food' | 'village' | 'photography'
}

export const passportSummary = {
  traveler: 'Himanshu Singh',
  journey: '10-Day Himalayan Experience',
  passportId: 'DBT-DEMO-2026-001',
  status: 'Journey in Progress',
  region: 'Uttarakhand · India',
  durationDays: 10,
  completedDays: 3,
  totalDays: 10,
  completedDestinations: 3,
  totalDestinations: 5,
  completedExperiences: 4,
  totalExperiences: 8,
  completionPercent: 30,
}

export const passportStamps: PassportStamp[] = [
  { id: 'nainital', title: 'Nainital', category: 'Nature', status: 'Completed', kind: 'Destination', image: 'photo-1470770841072-f978cf4d019e', description: 'A sample lakeside chapter with local sightseeing and mountain scenery.', day: 'Days 1–3', highlights: ['Himalayan landscape', 'Lakeside moments', 'Tiffin Top Trek'] },
  { id: 'almora', title: 'Almora', category: 'Culture', status: 'Completed', kind: 'Destination', image: 'photo-1513836279014-a89f7a76ae86', description: 'An illustrative destination for local culture, crafts and village experiences.', day: 'Days 7–9', highlights: ['Local crafts', 'Village moments', 'Sunset views'] },
  { id: 'chopta', title: 'Chopta', category: 'Adventure', status: 'Current', kind: 'Destination', image: 'photo-1464278533981-50106e6176b1', description: 'Your next Himalayan chapter, surrounded by mountain landscapes and high-altitude scenery.', day: 'Day 4 · Demo selection', highlights: ['Himalayan landscape', 'Mountain trail', 'Photography'] },
  { id: 'auli', title: 'Auli', category: 'Adventure', status: 'Upcoming', kind: 'Destination', image: 'photo-1519681393784-d120267933ba', description: 'A sample mountain stop for cable-car views and a nature-focused experience.', day: 'Upcoming', highlights: ['Mountain views', 'Nature', 'Photography'] },
  { id: 'rishikesh', title: 'Rishikesh', category: 'Adventure', status: 'Upcoming', kind: 'Destination', image: 'photo-1500534623283-312aade485b7', description: 'An illustrative outdoor stop on the journey through Uttarakhand.', day: 'Upcoming', highlights: ['River landscape', 'Outdoor experiences', 'Local culture'] },
  { id: 'pahadi-food', title: 'Pahadi Food Experience', category: 'Food', status: 'Completed', kind: 'Experience', image: 'photo-1547592180-85f173990554', description: 'A sample food memory inspired by regional flavours and local kitchens.', day: 'Day 2', highlights: ['Regional flavours', 'Local kitchen', 'Shared moments'] },
  { id: 'village-homestay', title: 'Village Homestay', category: 'Village Life', status: 'Completed', kind: 'Experience', image: 'photo-1470770841072-f978cf4d019e', description: 'A generic sample stay experience focused on the warmth of village life.', day: 'Day 1 · Demo', highlights: ['Village life', 'Local community', 'Slow travel'] },
  { id: 'himalayan-trek', title: 'Himalayan Trek', category: 'Adventure', status: 'Current', kind: 'Experience', image: 'photo-1464822759023-fed622ff2c3b', description: 'An illustrative outdoor experience among Himalayan landscapes.', day: 'Day 4 · Demo selection', highlights: ['Mountain trail', 'Scenic viewpoints', 'Photography'] },
  { id: 'cultural-evening', title: 'Cultural Evening', category: 'Culture', status: 'Upcoming', kind: 'Experience', image: 'photo-1513836279014-a89f7a76ae86', description: 'A sample opportunity to enjoy local music, traditions and community culture.', day: 'Upcoming', highlights: ['Local traditions', 'Music', 'Community'] },
  { id: 'himalayan-photography', title: 'Himalayan Photography', category: 'Photography', status: 'Upcoming', kind: 'Experience', image: 'photo-1519681393784-d120267933ba', description: 'A collection of moments inspired by Himalayan light, landscapes and village life.', day: 'Upcoming', highlights: ['Sunrise', 'Village moments', 'Mountain viewpoints'] },
]

export const passportStats = [
  { value: '10', label: 'Days', icon: 'calendar' },
  { value: '5', label: 'Destinations', icon: 'pin' },
  { value: '8', label: 'Experiences', icon: 'experience' },
  { value: '3', label: 'Adventures', icon: 'mountain' },
  { value: '2', label: 'Cultural Moments', icon: 'culture' },
  { value: '245', label: 'Memories', icon: 'memory' },
] as const

export const passportCategories: PassportCategory[] = [
  { title: 'NATURE', description: 'Mountains, forests and Himalayan landscapes.', icon: 'nature' },
  { title: 'ADVENTURE', description: 'Trekking and outdoor experiences.', icon: 'adventure' },
  { title: 'CULTURE', description: 'Local traditions, music and community experiences.', icon: 'culture' },
  { title: 'FOOD', description: 'Pahadi flavours and local kitchens.', icon: 'food' },
  { title: 'VILLAGE LIFE', description: 'Homestays and everyday Himalayan experiences.', icon: 'village' },
  { title: 'PHOTOGRAPHY', description: 'Moments worth remembering.', icon: 'photography' },
]

export const passportResponsibleTravel = [
  'Respect local communities',
  'Support local experiences',
  'Protect natural spaces',
  'Travel responsibly',
]

export const passportIdentity = {
  organization: 'DEV BHOOMI TRIP',
  tagline: 'LIVE THE HIMALAYAN EXPERIENCE',
  disclaimer: 'Fictional travel keepsake · Demo only · Not a government document',
}
