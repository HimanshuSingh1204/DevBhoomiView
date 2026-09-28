export type MediaType = 'photo' | 'video'
export type MediaCategory = 'All' | 'Photos' | 'Videos' | 'Favourites'

export type MediaItem = {
  id: string
  type: MediaType
  title: string
  image: string
  thumbnail: string
  day: number
  destination: string
  experience: string
  caption: string
  duration?: string
  isFavourite: boolean
  album: string
  status: 'Demo'
}

export type MediaAlbum = {
  id: string
  title: string
  coverImage: string
  photoCount: number
  videoCount: number
  destination: string
  day: string
}

export type JourneyDayMedia = {
  day: number
  title: string
  destination: string
  image: string
  mediaCount: number
  status: 'Completed' | 'Today' | 'Upcoming'
}

export const tripMediaSummary = [
  { value: '245', label: 'Photos', icon: 'photos' },
  { value: '12', label: 'Videos', icon: 'videos' },
  { value: '8', label: 'Albums', icon: 'albums' },
  { value: '10', label: 'Days', icon: 'days' },
  { value: '5', label: 'Destinations', icon: 'destinations' },
  { value: '3', label: 'Adventures', icon: 'adventures' },
] as const

export const mediaDestinations = ['Nainital', 'Almora', 'Chopta', 'Auli', 'Rishikesh']

export const mediaAlbums: MediaAlbum[] = [
  { id: 'journey', title: '10-Day Himalayan Journey', coverImage: 'photo-1464822759023-fed622ff2c3b', photoCount: 128, videoCount: 8, destination: 'Uttarakhand', day: 'Days 1–10' },
  { id: 'village-culture', title: 'Village & Culture', coverImage: 'photo-1513836279014-a89f7a76ae86', photoCount: 32, videoCount: 2, destination: 'Almora', day: 'Days 6–9' },
  { id: 'adventures', title: 'Himalayan Adventures', coverImage: 'photo-1464278533981-50106e6176b1', photoCount: 41, videoCount: 4, destination: 'Chopta', day: 'Days 3–7' },
  { id: 'food', title: 'Pahadi Food', coverImage: 'photo-1547592180-85f173990554', photoCount: 18, videoCount: 1, destination: 'Nainital', day: 'Days 2, 4' },
  { id: 'landscapes', title: 'Mountain Landscapes', coverImage: 'photo-1519681393784-d120267933ba', photoCount: 54, videoCount: 3, destination: 'Uttarakhand', day: 'Days 1–10' },
  { id: 'people', title: 'People & Moments', coverImage: 'photo-1470770841072-f978cf4d019e', photoCount: 27, videoCount: 2, destination: 'Uttarakhand', day: 'Days 1–10' },
]

export const journeyDayMedia: JourneyDayMedia[] = [
  { day: 1, title: 'Arrival', destination: 'Nainital', image: 'photo-1470770841072-f978cf4d019e', mediaCount: 18, status: 'Completed' },
  { day: 2, title: 'Village Experience', destination: 'Nainital', image: 'photo-1547592180-85f173990554', mediaCount: 24, status: 'Completed' },
  { day: 3, title: 'Himalayan Trek', destination: 'Chopta', image: 'photo-1464822759023-fed622ff2c3b', mediaCount: 31, status: 'Completed' },
  { day: 4, title: 'Pahadi Food', destination: 'Chopta', image: 'photo-1547592180-85f173990554', mediaCount: 16, status: 'Today' },
  { day: 5, title: 'Hidden Valley', destination: 'Rishikesh', image: 'photo-1500534623283-312aade485b7', mediaCount: 20, status: 'Upcoming' },
  { day: 6, title: 'Culture & Folk Evening', destination: 'Almora', image: 'photo-1513836279014-a89f7a76ae86', mediaCount: 22, status: 'Upcoming' },
  { day: 7, title: 'Adventure', destination: 'Rishikesh', image: 'photo-1472396961693-142e6e269027', mediaCount: 28, status: 'Upcoming' },
  { day: 8, title: 'Forest & Nature', destination: 'Auli', image: 'photo-1472396961693-142e6e269027', mediaCount: 26, status: 'Upcoming' },
  { day: 9, title: 'Photography & Local Market', destination: 'Almora', image: 'photo-1513836279014-a89f7a76ae86', mediaCount: 34, status: 'Upcoming' },
  { day: 10, title: 'Departure', destination: 'Uttarakhand', image: 'photo-1500530855697-b586d89ba3ee', mediaCount: 26, status: 'Upcoming' },
]

const photos: MediaItem[] = [
  { id: 'memory-arrival', type: 'photo', title: 'Arrival in the Mountains', image: 'photo-1470770841072-f978cf4d019e', thumbnail: 'photo-1470770841072-f978cf4d019e', day: 1, destination: 'Nainital', experience: 'Mountain arrival', caption: 'A quiet beginning in the mountain air.', isFavourite: false, album: 'journey', status: 'Demo' },
  { id: 'memory-lake', type: 'photo', title: 'Morning by the Lake', image: 'photo-1500530855697-b586d89ba3ee', thumbnail: 'photo-1500530855697-b586d89ba3ee', day: 1, destination: 'Nainital', experience: 'Lakeside morning', caption: 'Still water and a soft Himalayan morning.', isFavourite: false, album: 'landscapes', status: 'Demo' },
  { id: 'memory-food', type: 'photo', title: 'A Pahadi Table', image: 'photo-1547592180-85f173990554', thumbnail: 'photo-1547592180-85f173990554', day: 2, destination: 'Nainital', experience: 'Pahadi Food', caption: 'A sample taste of local flavours and shared hospitality.', isFavourite: false, album: 'food', status: 'Demo' },
  { id: 'memory-village', type: 'photo', title: 'Village Paths', image: 'photo-1513836279014-a89f7a76ae86', thumbnail: 'photo-1513836279014-a89f7a76ae86', day: 2, destination: 'Nainital', experience: 'Village Experience', caption: 'A slower pace among the villages and hills.', isFavourite: false, album: 'village-culture', status: 'Demo' },
  { id: 'memory-trek', type: 'photo', title: 'Mountain Trek', image: 'photo-1464822759023-fed622ff2c3b', thumbnail: 'photo-1464822759023-fed622ff2c3b', day: 3, destination: 'Chopta', experience: 'Himalayan Trek', caption: 'Mountain air, quiet trails and a new perspective.', isFavourite: false, album: 'adventures', status: 'Demo' },
  { id: 'memory-forest', type: 'photo', title: 'Into the Forest', image: 'photo-1472396961693-142e6e269027', thumbnail: 'photo-1472396961693-142e6e269027', day: 3, destination: 'Chopta', experience: 'Forest trail', caption: 'A demo memory from a forest-fringed trail.', isFavourite: false, album: 'landscapes', status: 'Demo' },
  { id: 'memory-chopta-evening', type: 'photo', title: 'Evening in Chopta', image: 'photo-1464278533981-50106e6176b1', thumbnail: 'photo-1464278533981-50106e6176b1', day: 4, destination: 'Chopta', experience: 'Mountain evening', caption: 'Golden light falls across the mountain slopes.', isFavourite: false, album: 'adventures', status: 'Demo' },
  { id: 'memory-river', type: 'photo', title: 'River Light', image: 'photo-1500534623283-312aade485b7', thumbnail: 'photo-1500534623283-312aade485b7', day: 5, destination: 'Rishikesh', experience: 'Riverside pause', caption: 'A restorative pause beside the river.', isFavourite: false, album: 'journey', status: 'Demo' },
  { id: 'memory-culture', type: 'photo', title: 'An Evening of Stories', image: 'photo-1513836279014-a89f7a76ae86', thumbnail: 'photo-1513836279014-a89f7a76ae86', day: 6, destination: 'Almora', experience: 'Culture & Folk Evening', caption: 'Local stories make a journey feel like a welcome.', isFavourite: false, album: 'village-culture', status: 'Demo' },
  { id: 'memory-auli', type: 'photo', title: 'Auli from Above', image: 'photo-1519681393784-d120267933ba', thumbnail: 'photo-1519681393784-d120267933ba', day: 8, destination: 'Auli', experience: 'Mountain landscapes', caption: 'Wide-open views from a sample mountain day.', isFavourite: false, album: 'landscapes', status: 'Demo' },
  { id: 'memory-market', type: 'photo', title: 'Market Colours', image: 'photo-1470770841072-f978cf4d019e', thumbnail: 'photo-1470770841072-f978cf4d019e', day: 9, destination: 'Almora', experience: 'Local market', caption: 'A collection of colours and everyday details.', isFavourite: false, album: 'people', status: 'Demo' },
  { id: 'memory-farewell', type: 'photo', title: 'One Last Look', image: 'photo-1500530855697-b586d89ba3ee', thumbnail: 'photo-1500530855697-b586d89ba3ee', day: 10, destination: 'Uttarakhand', experience: 'Departure', caption: 'A final look back at an illustrative journey.', isFavourite: false, album: 'journey', status: 'Demo' },
]

const videos: MediaItem[] = [
  { id: 'video-arrival', type: 'video', title: 'Arrival in the Himalayas', image: 'photo-1470770841072-f978cf4d019e', thumbnail: 'photo-1470770841072-f978cf4d019e', day: 1, destination: 'Nainital', experience: 'Mountain arrival', caption: 'Demo video preview — no playback asset is connected.', duration: '0:42', isFavourite: false, album: 'journey', status: 'Demo' },
  { id: 'video-pahadi-evening', type: 'video', title: 'Pahadi Evening', image: 'photo-1513836279014-a89f7a76ae86', thumbnail: 'photo-1513836279014-a89f7a76ae86', day: 2, destination: 'Nainital', experience: 'Village evening', caption: 'Demo video preview — no playback asset is connected.', duration: '1:18', isFavourite: false, album: 'village-culture', status: 'Demo' },
  { id: 'video-trek', type: 'video', title: 'Mountain Trek', image: 'photo-1464822759023-fed622ff2c3b', thumbnail: 'photo-1464822759023-fed622ff2c3b', day: 3, destination: 'Chopta', experience: 'Himalayan Trek', caption: 'Demo video preview — no playback asset is connected.', duration: '2:06', isFavourite: false, album: 'adventures', status: 'Demo' },
  { id: 'video-village', type: 'video', title: 'Village Life', image: 'photo-1472396961693-142e6e269027', thumbnail: 'photo-1472396961693-142e6e269027', day: 6, destination: 'Almora', experience: 'Village & Culture', caption: 'Demo video preview — no playback asset is connected.', duration: '1:34', isFavourite: false, album: 'village-culture', status: 'Demo' },
  { id: 'video-highlights', type: 'video', title: 'Journey Highlights', image: 'photo-1519681393784-d120267933ba', thumbnail: 'photo-1519681393784-d120267933ba', day: 10, destination: 'Uttarakhand', experience: '10-Day Himalayan Journey', caption: 'Demo video preview — no playback asset is connected.', duration: '3:12', isFavourite: false, album: 'journey', status: 'Demo' },
]

export const tripMediaItems: MediaItem[] = [...photos, ...videos]
