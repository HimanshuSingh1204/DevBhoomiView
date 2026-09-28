import type { DestinationCategory, Place } from '../types'

export const destinations: Place[] = [
  { name: 'Nainital', region: 'Kumaon', image: 'photo-1500530855697-b586d89ba3ee', description: 'Lakeside mornings, forest paths and old hill-town charm.', experienceCount: 8, categories: ['Nature', 'Culture'] },
  { name: 'Almora', region: 'Kumaon', image: 'photo-1472396961693-142e6e269027', description: 'A slower mountain town shaped by craft, orchards and wide horizons.', experienceCount: 6, categories: ['Culture', 'Food', 'Village Life'] },
  { name: 'Ranikhet', region: 'Kumaon', image: 'photo-1464278533981-50106e6176b1', description: 'Forest walks and open views across the Kumaon hills.', experienceCount: 5, categories: ['Nature', 'Adventure'] },
  { name: 'Rishikesh', region: 'Garhwal', image: 'photo-1500534623283-312aade485b7', description: 'Riverside calm and a lively gateway to the Himalayan foothills.', experienceCount: 9, categories: ['Adventure', 'Culture', 'Nature'] },
  { name: 'Chopta', region: 'Garhwal', image: 'photo-1464822759023-fed622ff2c3b', description: 'Alpine meadows and a trail that climbs toward the clouds.', experienceCount: 7, categories: ['Nature', 'Adventure'] },
  { name: 'Auli', region: 'Garhwal', image: 'photo-1519681393784-d120267933ba', description: 'High mountain air, open slopes and far-reaching Himalayan views.', experienceCount: 5, categories: ['Adventure', 'Nature'] },
  { name: 'Munsiyari', region: 'Kumaon', image: 'photo-1464278533981-50106e6176b1', description: 'A remote base for long walks beneath the Panchachuli peaks.', experienceCount: 4, categories: ['Village Life', 'Nature', 'Adventure'] },
  { name: 'Mussoorie', region: 'Garhwal', image: 'photo-1470770841072-f978cf4d019e', description: 'A hill town of old lanes, wooded walks and valley views.', experienceCount: 6, categories: ['Nature', 'Culture'] },
  { name: 'Pithoragarh', region: 'Kumaon', image: 'photo-1519681393784-d120267933ba', description: 'A quiet valley town framed by the high Himalayas.', experienceCount: 4, categories: ['Nature', 'Village Life'] },
  { name: 'Bageshwar', region: 'Kumaon', image: 'photo-1500530855697-b586d89ba3ee', description: 'A Kumaon valley town at the meeting of mountain rivers.', experienceCount: 3, categories: ['Culture', 'Village Life', 'Food'] },
]

export const destinationCategories: DestinationCategory[] = [
  { id: 'kumaon', name: 'Kumaon', count: '6 destinations', image: 'photo-1470770841072-f978cf4d019e', href: '/explore?region=kumaon' },
  { id: 'garhwal', name: 'Garhwal', count: '4 destinations', image: 'photo-1464822759023-fed622ff2c3b', href: '/explore?region=garhwal' },
  { id: 'hidden-gems', name: 'Hidden Gems', count: 'Quiet corners', image: 'photo-1464278533981-50106e6176b1', href: '/destinations' },
  { id: 'top-experiences', name: 'Top Experiences', count: 'Ways to wander', image: 'photo-1500534623283-312aade485b7', href: '/experiences' },
]