export type Place = {
  name: string
  region: string
  image: string
  description: string
  experienceCount: number
  categories: string[]
}

export type ExperienceCategory = 'Adventure' | 'Nature' | 'Culture' | 'Food' | 'Village Life' | 'Wellness' | 'Photography'

export type Experience = {
  id: string
  title: string
  category: ExperienceCategory
  location: string
  duration: string
  image: string
  description: string
}

export type TravelStyle = {
  id: string
  title: string
  description: string
  categories: ExperienceCategory[]
}

export type JourneyDay = {
  day: number
  title: string
  description: string
  category: string
  location?: string
  approximateTiming?: string
  image: string
  experienceSlug?: string
}

export type JourneyStat = {
  value: string
  label: string
}

export type JourneyRouteStop = {
  label: string
  category: 'Stay' | 'Adventure' | 'Food' | 'Culture' | 'Photo'
}

export type JourneyFaq = {
  question: string
  answer: string
}

export type TravelPackage = {
  slug: string
  title: string
  duration: string
  description: string
  highlights: string[]
  days: JourneyDay[]
  included: string[]
  excluded: string[]
  stats: JourneyStat[]
  routeStops: JourneyRouteStop[]
  faqs: JourneyFaq[]
}

export type CultureCard = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  category?: string
  href?: string
}

export type CulturePrinciple = {
  id: string
  title: string
  description: string
  icon: 'camera' | 'landmark' | 'shirt' | 'ear' | 'heart' | 'leaf'
}

export type CultureGalleryImage = {
  id: string
  alt: string
  caption: string
  shape: 'wide' | 'portrait' | 'square'
}

export type FoodItem = {
  slug: string
  name: string
  category: string
  description: string
  image: string
  imageAlt: string
  region?: string
}

export type FoodExperience = {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
  duration?: string
  category: string
  icon: 'meal' | 'cooking' | 'market' | 'breakfast' | 'farm'
  href: string
}

export type FoodSeason = {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export type FoodGalleryImage = {
  id: string
  alt: string
  caption: string
  shape: 'wide' | 'portrait' | 'square'
}

export type FoodPrinciple = {
  id: string
  title: string
  description: string
  icon: 'host' | 'respect' | 'waste' | 'ingredient' | 'custom'
}

export type FoodStoryPoint = {
  id: string
  title: string
  description: string
}

export type FoodFaq = {
  question: string
  answer: string
}

export type DestinationCategory = {
  id: string
  name: string
  count: string
  image: string
  href: string
}

export type CollectionContent = {
  eyebrow: string
  title: string
  description: string
  image: string
  items: Place[]
}