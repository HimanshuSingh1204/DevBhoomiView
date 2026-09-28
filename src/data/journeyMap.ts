export type JourneyMapCategory = 'Adventure' | 'Culture' | 'Food' | 'Nature' | 'Stay' | 'Photography'
export type JourneyMapStatus = 'Completed' | 'Current Stop' | 'Upcoming'

export type JourneyStop = {
  id: string
  name: string
  region: string
  dayLabel: string
  days: number[]
  category: JourneyMapCategory
  status: JourneyMapStatus
  image: string
  experience: string
  description: string
  illustrationPosition: { x: number; y: number }
}

export const journeyStops: JourneyStop[] = [
  {
    id: 'nainital',
    name: 'Nainital',
    region: 'Kumaon',
    dayLabel: 'Days 1–3',
    days: [1, 2, 3],
    category: 'Nature',
    status: 'Current Stop',
    image: 'photo-1470770841072-f978cf4d019e',
    experience: 'Tiffin Top Trek',
    description: 'A sample lakeside stay with local sightseeing, regional food and a mountain viewpoint experience.',
    illustrationPosition: { x: 17, y: 30 },
  },
  {
    id: 'almora',
    name: 'Almora',
    region: 'Kumaon',
    dayLabel: 'Days 7–9',
    days: [7, 8, 9],
    category: 'Culture',
    status: 'Upcoming',
    image: 'photo-1513836279014-a89f7a76ae86',
    experience: 'Culture, crafts & sunset',
    description: 'An illustrative stop for local culture, crafts and a relaxed sunset moment.',
    illustrationPosition: { x: 38, y: 58 },
  },
  {
    id: 'chopta',
    name: 'Chopta',
    region: 'Garhwal',
    dayLabel: 'Day 4',
    days: [4],
    category: 'Adventure',
    status: 'Upcoming',
    image: 'photo-1464278533981-50106e6176b1',
    experience: 'Chopta – Tungnath Trek',
    description: 'A Himalayan trekking experience surrounded by mountain landscapes and high-altitude scenery.',
    illustrationPosition: { x: 57, y: 34 },
  },
  {
    id: 'auli',
    name: 'Auli',
    region: 'Garhwal',
    dayLabel: 'Day 6',
    days: [6],
    category: 'Nature',
    status: 'Upcoming',
    image: 'photo-1519681393784-d120267933ba',
    experience: 'Cable car & mountain views',
    description: 'A sample nature stop to take in the mountain views around Auli.',
    illustrationPosition: { x: 78, y: 32 },
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    region: 'Garhwal',
    dayLabel: 'Day 5',
    days: [5],
    category: 'Adventure',
    status: 'Upcoming',
    image: 'photo-1500534623283-312aade485b7',
    experience: 'River & outdoor experiences',
    description: 'A sample outdoor adventure stop along the journey; specific activities are not booked.',
    illustrationPosition: { x: 81, y: 72 },
  },
]

export const journeyMapCategories: Array<'All' | JourneyMapCategory> = [
  'All',
  'Adventure',
  'Culture',
  'Food',
  'Nature',
  'Stay',
  'Photography',
]

export const journeyMapExperiences: Array<{ title: string; category: JourneyMapCategory; stopId: string }> = [
  { title: 'Trekking', category: 'Adventure', stopId: 'chopta' },
  { title: 'Rafting & river activities', category: 'Adventure', stopId: 'rishikesh' },
  { title: 'Mountain experiences', category: 'Adventure', stopId: 'auli' },
  { title: 'Cultural evening', category: 'Culture', stopId: 'almora' },
  { title: 'Village experience', category: 'Culture', stopId: 'almora' },
  { title: 'Local crafts', category: 'Culture', stopId: 'almora' },
  { title: 'Pahadi food', category: 'Food', stopId: 'nainital' },
  { title: 'Village kitchen', category: 'Food', stopId: 'almora' },
  { title: 'Forest trails', category: 'Nature', stopId: 'chopta' },
  { title: 'Lakeside moments', category: 'Nature', stopId: 'nainital' },
  { title: 'Mountain views', category: 'Nature', stopId: 'auli' },
  { title: 'Village homestay', category: 'Stay', stopId: 'almora' },
  { title: 'Mountain stay', category: 'Stay', stopId: 'chopta' },
  { title: 'Sunrise viewpoints', category: 'Photography', stopId: 'auli' },
  { title: 'Village moments', category: 'Photography', stopId: 'almora' },
  { title: 'Mountain viewpoints', category: 'Photography', stopId: 'nainital' },
]

export const journeyMapTimeline = [
  { day: 1, title: 'Arrival & transfer', destination: 'Nainital', stopId: 'nainital', status: 'Completed' },
  { day: 2, title: 'Sightseeing & local food', destination: 'Nainital', stopId: 'nainital', status: 'Completed' },
  { day: 3, title: 'Trek to Tiffin Top', destination: 'Nainital', stopId: 'nainital', status: 'Today' },
  { day: 4, title: 'Tungnath trek', destination: 'Chopta', stopId: 'chopta', status: 'Upcoming' },
  { day: 5, title: 'Outdoor adventure', destination: 'Rishikesh', stopId: 'rishikesh', status: 'Upcoming' },
  { day: 6, title: 'Cable car & views', destination: 'Auli', stopId: 'auli', status: 'Upcoming' },
  { day: 7, title: 'Village stay', destination: 'Gwaldam', stopId: 'almora', status: 'Upcoming' },
  { day: 8, title: 'Culture & crafts', destination: 'Almora', stopId: 'almora', status: 'Upcoming' },
  { day: 9, title: 'Kasar Devi sunset', destination: 'Almora', stopId: 'almora', status: 'Upcoming' },
  { day: 10, title: 'Departure', destination: 'Uttarakhand', stopId: 'rishikesh', status: 'Upcoming' },
] as const

export const journeyMapSummary = {
  durationDays: 10,
  destinations: journeyStops.length,
  experiences: 8,
  currentDay: 3,
  completedDays: 3,
  upcomingExperiences: 5,
  currentStopId: 'nainital',
  nextStopId: 'chopta',
}
