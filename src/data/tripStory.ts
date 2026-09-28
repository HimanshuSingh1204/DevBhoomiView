import { featuredAdventures } from './adventures'
import { cultureExperiences } from './culture'
import { destinations } from './destinations'
import { experiences } from './experiences'
import { pahadiDishes } from './food'
import { tenDayHimalayanJourney } from './packages'
import { journeyStops } from './journeyMap'
import { tripMediaItems } from './tripMedia'

export type StoryChapter = {
  id: string
  day: number
  title: string
  destination: string
  experience: string
  description: string
  image: string
  highlights: string[]
  memoryCount: number
  status: 'Demo story chapter'
}

export type StoryDestination = {
  name: string
  day: string
  image: string
  description: string
  memoryCount: number
}

export type StoryExperience = {
  title: string
  category: string
  description: string
  image: string
}

export type StoryMemory = {
  id: string
  type: 'photo' | 'video'
  title: string
  image: string
  alt: string
}

export type StoryStats = {
  days: number
  destinations: number
  experiences: number
  adventures: number
  culturalMoments: number
  memories: number
  completion: number
  completedDays: number
  completedDestinations: number
}

const chapterTitles = [
  'Arrival in the Himalayas',
  'Village Experience',
  'Into the Mountains',
  'A Taste of Pahadi Life',
  'Hidden Valleys',
  'Culture & Folk Evening',
  'Adventure Awaits',
  'Forest & Nature',
  'Photography & Local Market',
  'Until Next Time',
]

const chapterDestinations = ['Nainital', 'Nainital', 'Chopta', 'Chopta', 'Rishikesh', 'Almora', 'Rishikesh', 'Auli', 'Almora', 'Uttarakhand']

const chapterStories = [
  'The journey begins as the landscape slowly changes from city roads to mountain roads.',
  'A slower chapter inspired by village life, everyday rhythms and a warm welcome.',
  'Mountain air, quiet trails and a chance to look at the landscape from a different perspective.',
  'A table becomes a meeting place for regional flavours and the stories behind them.',
  'An illustrative pause among broad valleys, open skies and a gentler pace.',
  'Music and shared stories invite a respectful glimpse into local cultural life.',
  'A day shaped by outdoor possibility, always guided by local conditions and advice.',
  'A quiet walk through natural landscapes, with time to notice the details along the way.',
  'Local colours, everyday details and photographs bring the journey into focus.',
  'The sample journey closes with a final look back and a promise to keep exploring.',
]

const chapterHighlights = [
  ['Mountain arrival', 'Changing landscapes', 'A new beginning'],
  ['Village life', 'Local conversations', 'A slower pace'],
  ['Mountain landscape', 'Trail experience', 'Photography'],
  ['Regional flavours', 'Local ingredients', 'Shared moments'],
  ['Open valleys', 'Nature', 'Unhurried time'],
  ['Local music', 'Folk experiences', 'Community context'],
  ['Outdoor exploration', 'Local guidance', 'Weather awareness'],
  ['Forest landscapes', 'Nature walk', 'Photography'],
  ['Local market', 'Craft details', 'Mountain light'],
  ['Journey reflections', 'Final moments', 'Until next time'],
]

export const storyStats: StoryStats = {
  days: 10,
  destinations: 5,
  experiences: 8,
  adventures: 3,
  culturalMoments: 2,
  memories: 245,
  completion: 30,
  completedDays: 3,
  completedDestinations: 3,
}

export const storyChapters: StoryChapter[] = tenDayHimalayanJourney.days.map((day, index) => ({
  id: `day-${day.day}`,
  day: day.day,
  title: chapterTitles[index],
  destination: chapterDestinations[index],
  experience: day.title,
  description: chapterStories[index],
  image: day.image,
  highlights: chapterHighlights[index],
  memoryCount: [18, 24, 31, 16, 20, 22, 28, 26, 34, 26][index],
  status: 'Demo story chapter',
}))

const destinationDays: Record<string, string> = {
  Nainital: 'Days 1–3',
  Almora: 'Days 8–9',
  Chopta: 'Day 4',
  Auli: 'Day 6',
  Rishikesh: 'Day 5',
}

const destinationMemoryCounts: Record<string, number> = {
  Nainital: 42,
  Almora: 56,
  Chopta: 31,
  Auli: 26,
  Rishikesh: 48,
}

export const storyDestinations: StoryDestination[] = ['Nainital', 'Almora', 'Chopta', 'Auli', 'Rishikesh'].map((name) => {
  const destination = destinations.find((item) => item.name === name)
  const stop = journeyStops.find((item) => item.name === name)
  return {
    name,
    day: destinationDays[name],
    image: stop?.image ?? destination?.image ?? 'photo-1464822759023-fed622ff2c3b',
    description: stop?.description ?? destination?.description ?? 'An illustrative stop in the Himalayan journey.',
    memoryCount: destinationMemoryCounts[name],
  }
})

export const storyExperiences: StoryExperience[] = [
  ...experiences.filter(({ id }) => ['himalayan-trekking', 'village-homestay', 'pahadi-food', 'traditional-folk-evening', 'himalayan-photography'].includes(id)).map((experience) => ({
    title: experience.title,
    category: experience.category,
    description: experience.description,
    image: experience.image,
  })),
  {
    title: 'Forest & Nature Walk',
    category: 'Nature',
    description: experiences.find(({ id }) => id === 'forest-nature-walk')?.description ?? 'A sample walk through forest landscapes.',
    image: experiences.find(({ id }) => id === 'forest-nature-walk')?.image ?? 'photo-1464278533981-50106e6176b1',
  },
]

export const storyCultureTopics = cultureExperiences
  .filter(({ id }) => ['village-life', 'folk-music-dance', 'traditional-clothing', 'local-crafts', 'local-markets'].includes(id))
  .map(({ title, description, image, imageAlt }) => ({ title, description, image, imageAlt }))

export const storyFoodTopics = pahadiDishes
  .filter(({ slug }) => ['kafuli', 'aloo-ke-gutke', 'bhatt-based-dishes', 'chainsoo', 'mandua-based-foods', 'jhangora-based-dishes'].includes(slug))
  .map(({ name, description, image, imageAlt }) => ({ title: name, description, image, imageAlt }))

export const storyAdventureTopics = featuredAdventures
  .filter(({ slug }) => ['himalayan-trekking', 'river-rafting', 'mountain-camping', 'forest-exploration', 'mountain-photography'].includes(slug))
  .map(({ title, description, image, imageAlt }) => ({ title, description, image, imageAlt }))

export const storyMemories: StoryMemory[] = tripMediaItems.map((item) => ({
  id: item.id,
  type: item.type,
  title: item.experience,
  image: item.image,
  alt: `Illustrative ${item.type} memory for ${item.experience} in ${item.destination}`,
}))

export const storyMediaSummary = {
  days: storyStats.days,
  destinations: storyStats.destinations,
  experiences: storyStats.experiences,
  memories: storyStats.memories,
}
