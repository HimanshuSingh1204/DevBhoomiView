export interface AboutCard {
  title: string
  description: string
  icon: 'discover' | 'connect' | 'experience' | 'remember' | 'guide' | 'stay' | 'food' | 'local' | 'culture' | 'nature' | 'slow' | 'privacy' | 'community' | 'memory' | 'authenticity' | 'respect' | 'curiosity' | 'responsibility' | 'connection' | 'journey'
}

export interface AboutStep extends AboutCard {
  number: string
}

export interface DigitalStory extends AboutCard {
  id: string
  image: string
  imageAlt: string
}

export const visionPillars: AboutCard[] = [
  { title: 'DISCOVER', description: 'Go beyond the obvious places.', icon: 'discover' },
  { title: 'CONNECT', description: 'Meet local people and experience local life respectfully.', icon: 'connect' },
  { title: 'EXPERIENCE', description: 'Turn sightseeing into meaningful experiences.', icon: 'experience' },
  { title: 'REMEMBER', description: 'Leave with stories, photographs and memories that last.', icon: 'remember' },
]

export const missionSteps: AboutStep[] = [
  { number: '01', title: 'DISCOVER', description: 'Help travellers find destinations and experiences across Uttarakhand.', icon: 'discover' },
  { number: '02', title: 'PLAN', description: 'Connect destinations, stays, food, culture and adventure into a journey.', icon: 'journey' },
  { number: '03', title: 'EXPERIENCE', description: 'Make the trip interactive through guides, local experiences and thoughtful itineraries.', icon: 'experience' },
  { number: '04', title: 'CAPTURE', description: 'Bring photographs, videos and important moments together.', icon: 'memory' },
  { number: '05', title: 'REMEMBER', description: 'Create a digital journey travellers can revisit and share.', icon: 'remember' },
]

export const communityWays: AboutCard[] = [
  { title: 'LOCAL GUIDES', description: 'Experience places through people who know them.', icon: 'guide' },
  { title: 'HOMESTAYS', description: 'Stay closer to local life where suitable.', icon: 'stay' },
  { title: 'LOCAL FOOD', description: 'Discover regional flavours and traditional preparation.', icon: 'food' },
  { title: 'LOCAL EXPERIENCES', description: 'Explore experiences shaped by local culture and landscapes.', icon: 'local' },
]

export const responsibleValues: AboutCard[] = [
  { title: 'RESPECT CULTURE', description: 'Learn before assuming.', icon: 'culture' },
  { title: 'PROTECT NATURE', description: 'Leave landscapes as you found them.', icon: 'nature' },
  { title: 'SUPPORT LOCAL', description: 'Where possible, choose local businesses and experiences.', icon: 'local' },
  { title: 'TRAVEL MINDFULLY', description: 'Spend more time experiencing and less time rushing.', icon: 'slow' },
  { title: 'RESPECT PRIVACY', description: 'Ask before photographing people or private spaces.', icon: 'privacy' },
  { title: 'LEARN FROM THE COMMUNITY', description: 'Listen to local knowledge and follow local guidance.', icon: 'community' },
]

export const journeySteps: AboutStep[] = [
  { number: '01', title: 'DISCOVER', description: 'Find places, stories and experiences that spark your curiosity.', icon: 'discover' },
  { number: '02', title: 'PLAN', description: 'Bring destinations and interests together into a considered journey.', icon: 'journey' },
  { number: '03', title: 'BOOK', description: 'Shape the details with the people helping plan your trip.', icon: 'connect' },
  { number: '04', title: 'TRAVEL', description: 'Set out across the landscapes of Uttarakhand.', icon: 'nature' },
  { number: '05', title: 'EXPERIENCE', description: 'Make room for food, culture, outdoors and local encounters.', icon: 'experience' },
  { number: '06', title: 'CAPTURE', description: 'Keep photographs and moments from along the way.', icon: 'memory' },
  { number: '07', title: 'REMEMBER', description: 'Revisit the memories and stories you gathered.', icon: 'remember' },
  { number: '08', title: 'SHARE', description: 'Pass your journey on in your own words.', icon: 'community' },
]

export const digitalStoryFeatures: DigitalStory[] = [
  { id: 'passport', title: 'DIGITAL HIMALAYAN PASSPORT', description: 'A personal record of experiences and journey milestones.', icon: 'journey', image: 'photo-1519681393784-d120267933ba', imageAlt: 'Mountain peaks representing a future digital journey passport' },
  { id: 'map', title: 'TRIP MAP', description: 'A visual map of the places visited.', icon: 'nature', image: 'photo-1464822759023-fed622ff2c3b', imageAlt: 'A wide mountain landscape representing a future trip map' },
  { id: 'collection', title: 'PHOTO & VIDEO COLLECTION', description: 'Trip memories organised around the journey.', icon: 'memory', image: 'photo-1516280440614-37939bbacd81', imageAlt: 'A camera-ready travel moment representing a future memory collection' },
  { id: 'story', title: 'TRIP STORY', description: 'A personal digital page containing the journey.', icon: 'connection', image: 'photo-1470770841072-f978cf4d019e', imageAlt: 'A Himalayan valley representing a future trip story' },
  { id: 'certificate', title: 'CERTIFICATE', description: 'A digital Certificate of Himalayan Experience.', icon: 'remember', image: 'photo-1464278533981-50106e6176b1', imageAlt: 'Mountain landscape representing a future journey certificate' },
]

export const internationalTravelValues: AboutCard[] = [
  { title: 'LOCAL CONNECTION', description: 'Meet people and hear local stories.', icon: 'connect' },
  { title: 'CULTURAL UNDERSTANDING', description: 'Experience traditions respectfully.', icon: 'culture' },
  { title: 'SLOWER TRAVEL', description: 'Spend meaningful time in fewer places.', icon: 'slow' },
  { title: 'PERSONAL MEMORIES', description: 'Create a journey that feels uniquely yours.', icon: 'memory' },
]

export const brandValues: AboutCard[] = [
  { title: 'AUTHENTICITY', description: 'We aim to present experiences honestly.', icon: 'authenticity' },
  { title: 'RESPECT', description: 'People, culture, traditions and nature come first.', icon: 'respect' },
  { title: 'CURIOSITY', description: 'Travel should encourage learning.', icon: 'curiosity' },
  { title: 'RESPONSIBILITY', description: 'Tourism should be approached thoughtfully.', icon: 'responsibility' },
  { title: 'CONNECTION', description: 'The strongest memories often come from people.', icon: 'connection' },
  { title: 'DISCOVERY', description: 'There is always another story beyond the obvious path.', icon: 'discover' },
]
