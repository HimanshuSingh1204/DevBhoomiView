import type { Experience, ExperienceCategory, TravelStyle } from '../types'

export const experiences: Experience[] = [
  { id: 'himalayan-trekking', title: 'Himalayan Trekking', category: 'Adventure', location: 'Garhwal', duration: '2 days', image: 'photo-1464822759023-fed622ff2c3b', description: 'Walk through alpine forests, mountain trails and quiet Himalayan landscapes.' },
  { id: 'pahadi-food', title: 'Pahadi Food Experience', category: 'Food', location: 'Kumaon', duration: 'Half day', image: 'photo-1547592180-85f173990554', description: 'Share a traditional mountain meal and discover the flavours of Uttarakhand.' },
  { id: 'village-homestay', title: 'Village Homestay', category: 'Village Life', location: 'Kumaon', duration: '2 nights', image: 'photo-1470770841072-f978cf4d019e', description: 'Stay with a local family and experience everyday life in a Himalayan village.' },
  { id: 'traditional-folk-evening', title: 'Traditional Folk Evening', category: 'Culture', location: 'Uttarakhand', duration: 'An evening', image: 'photo-1513836279014-a89f7a76ae86', description: 'Experience local music, dance, stories and traditions in an intimate community setting.' },
  { id: 'river-rafting', title: 'River Rafting', category: 'Adventure', location: 'Rishikesh', duration: 'Half day', image: 'photo-1500534623283-312aade485b7', description: 'Experience the Ganga through a guided rafting adventure.' },
  { id: 'himalayan-photography', title: 'Himalayan Photography', category: 'Photography', location: 'Uttarakhand', duration: '1-2 days', image: 'photo-1519681393784-d120267933ba', description: 'Capture mountain landscapes, villages, forests and local life with curated photography stops.' },
  { id: 'forest-nature-walk', title: 'Forest & Nature Walk', category: 'Nature', location: 'Kumaon / Garhwal', duration: 'Half day', image: 'photo-1464278533981-50106e6176b1', description: 'Slow down and explore Himalayan forests, trails and natural landscapes.' },
  { id: 'market-craft-walk', title: 'Local Market & Craft Walk', category: 'Culture', location: 'Uttarakhand', duration: '2-3 hours', image: 'photo-1472396961693-142e6e269027', description: 'Explore local markets, traditional crafts, textiles and everyday mountain culture.' },
]

export const experienceCategories: Array<'All Experiences' | ExperienceCategory> = [
  'All Experiences', 'Adventure', 'Nature', 'Culture', 'Food', 'Village Life', 'Wellness', 'Photography',
]

export const travelStyles: TravelStyle[] = [
  { id: 'adventure-seeker', title: 'Adventure Seeker', description: 'Trekking, rafting, camping and mountain trails.', categories: ['Adventure'] },
  { id: 'culture-explorer', title: 'Culture Explorer', description: 'Folk traditions, local stories, music and village life.', categories: ['Culture', 'Village Life'] },
  { id: 'food-lover', title: 'Food Lover', description: 'Pahadi cuisine, local ingredients and traditional cooking.', categories: ['Food'] },
  { id: 'nature-traveller', title: 'Nature Traveller', description: 'Forests, valleys, rivers, waterfalls and Himalayan landscapes.', categories: ['Nature'] },
  { id: 'slow-traveller', title: 'Slow Traveller', description: 'Homestays, village walks, local markets and peaceful stays.', categories: ['Village Life', 'Culture'] },
  { id: 'photographer', title: 'Photographer', description: 'Mountain landscapes, villages, people and hidden viewpoints.', categories: ['Photography'] },
]