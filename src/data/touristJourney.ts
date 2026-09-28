export const touristProfile = {
  name: 'Himanshu Singh',
  greeting: 'Hello, Himanshu',
  initials: 'HS',
  accountLabel: 'Traveler | Explorer',
  demoLabel: 'Mock traveller profile',
}

export const demoTrip = {
  title: '10-Day Himalayan Journey',
  status: 'Demo journey',
  startDate: '25 Sep 2026',
  endDate: '04 Oct 2026',
  travellers: 1,
  totalDays: 10,
  currentDay: 4,
  currentRegion: 'Chopta, Uttarakhand',
  completedDays: 3,
  remainingDays: 7,
}

export const tripOverview = {
  title: '10-Day Himalayan Experience',
  subtitle: 'Your complete journey through Uttarakhand.',
  region: 'Kumaon & Garhwal',
  durationDays: 10,
  experienceCount: 8,
  destinationCount: 5,
  travellers: 2,
  photoCount: 245,
  currentDay: 3,
  completedDays: 3,
  remainingDays: 7,
  currentExperience: 'Trek to Tiffin Top',
  nextExperience: 'Chopta – Tungnath Trek',
  status: 'Journey in progress',
  startDate: '25 Sep 2026',
  endDate: '04 Oct 2026',
}

export const journeyDays = [
  { day: 1, title: 'Arrival & Transfer to Nainital', destination: 'Nainital', category: 'Stay', status: 'Completed', image: 'photo-1470770841072-f978cf4d019e' },
  { day: 2, title: 'Nainital Sightseeing & Local Food', destination: 'Nainital', category: 'Food', status: 'Completed', image: 'photo-1547592180-85f173990554' },
  { day: 3, title: 'Trek to Tiffin Top', destination: 'Nainital', category: 'Adventure', status: 'Completed', image: 'photo-1464822759023-fed622ff2c3b' },
  { day: 4, title: 'Chopta – Tungnath Trek', destination: 'Chopta', category: 'Adventure', status: 'Today', image: 'photo-1464278533981-50106e6176b1' },
  { day: 5, title: 'Rishikesh Adventure', destination: 'Rishikesh', category: 'Adventure', status: 'Upcoming', image: 'photo-1500534623283-312aade485b7' },
  { day: 6, title: 'Auli – Cable Car & Views', destination: 'Auli', category: 'Nature', status: 'Upcoming', image: 'photo-1519681393784-d120267933ba' },
  { day: 7, title: 'Village Stay – Gwaldam', destination: 'Gwaldam', category: 'Stay', status: 'Upcoming', image: 'photo-1472396961693-142e6e269027' },
  { day: 8, title: 'Almora – Culture & Crafts', destination: 'Almora', category: 'Culture', status: 'Upcoming', image: 'photo-1513836279014-a89f7a76ae86' },
  { day: 9, title: 'Kasar Devi – Sunset', destination: 'Kasar Devi', category: 'Nature', status: 'Upcoming', image: 'photo-1470770841072-f978cf4d019e' },
  { day: 10, title: 'Departure', destination: 'Uttarakhand', category: 'Stay', status: 'Upcoming', image: 'photo-1500530855697-b586d89ba3ee' },
] as const

export const tripTimelineDays = journeyDays.map((day) => ({
  ...day,
  category: ({
    1: 'Arrival',
    2: 'Culture + Food',
    3: 'Adventure',
    4: 'Adventure',
    5: 'Adventure',
    6: 'Nature',
    7: 'Village Life',
    8: 'Culture',
    9: 'Photography',
    10: 'Departure',
  } as const)[day.day],
  status: day.day < tripOverview.currentDay ? 'Completed' : day.day === tripOverview.currentDay ? 'Today' : 'Upcoming',
}))

export const tripDayDetails = [
  { day: 1, description: 'Arrive in Uttarakhand and settle in before beginning the sample journey in Nainital.', duration: 'Arrival Day', schedule: [{ time: 'Morning', title: 'Arrival', detail: 'Begin the journey with a sample arrival plan.' }, { time: 'Afternoon', title: 'Transfer to Nainital', detail: 'A local transfer is shown as a demo itinerary item.' }, { time: 'Evening', title: 'Settle in', detail: 'Take time to settle in at a generic demo stay.' }] },
  { day: 2, description: 'Discover Nainital through sample sightseeing and regional food experiences.', duration: 'Full Day', schedule: [{ time: 'Morning', title: 'Local breakfast', detail: 'Start with a sample local breakfast.' }, { time: 'Afternoon', title: 'Nainital sightseeing', detail: 'Explore at a relaxed, illustrative pace.' }, { time: 'Evening', title: 'Local food', detail: 'Enjoy a sample regional food experience.' }] },
  { day: 3, description: 'A Himalayan trekking experience surrounded by mountain landscapes and high-altitude scenery.', duration: 'Half Day', schedule: [{ time: 'Morning', title: 'Breakfast & departure', detail: 'Start the day with breakfast before heading out.' }, { time: 'Afternoon', title: 'Trek experience', detail: 'Enjoy a sample outing among mountain scenery.' }, { time: 'Evening', title: 'Return & unwind', detail: 'Return to the stay and enjoy a relaxed evening.' }] },
  { day: 4, description: 'A sample mountain trail experience around Chopta and Tungnath, subject to local conditions.', duration: 'Full Day', schedule: [{ time: 'Morning', title: 'Breakfast & departure', detail: 'A sample morning start for the day plan.' }, { time: 'Afternoon', title: 'Mountain trail experience', detail: 'Illustrative outdoor time; follow local guidance.' }, { time: 'Evening', title: 'Return to the stay', detail: 'A relaxed evening after the sample itinerary.' }] },
  { day: 5, description: 'A sample Rishikesh adventure day with time to enjoy the local setting.', duration: 'Full Day', schedule: [{ time: 'Morning', title: 'Journey onward', detail: 'Continue along the illustrative trip route.' }, { time: 'Afternoon', title: 'Outdoor experience', detail: 'Sample activity time; specific activities are not booked.' }, { time: 'Evening', title: 'Relaxed evening', detail: 'Enjoy the evening at your own pace.' }] },
  { day: 6, description: 'Take in Auli’s mountain views as part of this illustrative nature-focused day.', duration: 'Full Day', schedule: [{ time: 'Morning', title: 'Mountain morning', detail: 'Start the day amid the mountain landscape.' }, { time: 'Afternoon', title: 'Auli views', detail: 'A sample scenic experience along the route.' }, { time: 'Evening', title: 'Time to unwind', detail: 'Enjoy a calm evening after exploring.' }] },
  { day: 7, description: 'A sample village stay in Gwaldam, with a slower pace and a focus on local surroundings.', duration: 'Full Day', schedule: [{ time: 'Morning', title: 'Village arrival', detail: 'Continue to the sample village stay area.' }, { time: 'Afternoon', title: 'Local surroundings', detail: 'Enjoy time in the village at a respectful pace.' }, { time: 'Evening', title: 'Village evening', detail: 'Wind down and enjoy the local setting.' }] },
  { day: 8, description: 'Explore sample cultural and craft highlights around Almora.', duration: 'Full Day', schedule: [{ time: 'Morning', title: 'Local start', detail: 'Begin with a relaxed sample morning.' }, { time: 'Afternoon', title: 'Culture & crafts', detail: 'Discover local culture and craft traditions.' }, { time: 'Evening', title: 'Free time', detail: 'Enjoy a quiet evening in the region.' }] },
  { day: 9, description: 'A sample photography-focused day around Kasar Devi and Almora.', duration: 'Half Day', schedule: [{ time: 'Morning', title: 'Leisurely morning', detail: 'Enjoy an unhurried start to the day.' }, { time: 'Afternoon', title: 'Scenic moments', detail: 'Take in the surroundings and capture memories.' }, { time: 'Evening', title: 'Sunset pause', detail: 'A sample sunset moment, weather permitting.' }] },
  { day: 10, description: 'Conclude the sample journey and prepare for departure.', duration: 'Departure Day', schedule: [{ time: 'Morning', title: 'Check-out', detail: 'Prepare to leave the generic demo stay.' }, { time: 'Afternoon', title: 'Departure', detail: 'Conclude the illustrative Uttarakhand journey.' }, { time: 'Evening', title: 'Journey complete', detail: 'End of the sample itinerary.' }] },
] as const

export const tripAccommodation = {
  name: 'Mountain Stay / Village Homestay',
  checkIn: '25 Sep 2026 · Demo date',
  checkOut: '04 Oct 2026 · Demo date',
  guests: tripOverview.travellers,
}

export const tripMeals = [
  { name: 'Breakfast', description: 'A sample local breakfast to begin the day.', icon: 'sunrise' },
  { name: 'Lunch', description: 'A relaxed mountain lunch during the journey.', icon: 'utensils' },
  { name: 'Dinner', description: 'A Pahadi-inspired dinner at the end of the day.', icon: 'moon' },
] as const

export const tripTransport = [
  { title: 'Arrival', detail: 'Journey begins', icon: 'plane' },
  { title: 'Local Transfer', detail: 'Between trip stops', icon: 'car' },
  { title: 'Mountain Transfer', detail: 'Along the itinerary', icon: 'route' },
  { title: 'Departure', detail: 'Journey concludes', icon: 'flag' },
] as const

export const tripIncludedItems = [
  'Accommodation',
  'Selected experiences',
  'Trip itinerary',
  'Journey coordination',
  'Applicable trip activities',
] as const

export const tripExcludedItems = [
  'Personal expenses',
  'Optional activities',
  'Personal shopping',
  'Travel to/from starting point unless specified',
] as const

export const tripImportantInformation = [
  'Check your travel dates and meeting information before departure.',
  'Mountain weather may vary; plan for changing conditions.',
  'Pack comfortable clothing suitable for your planned activities.',
  'Respect local communities and follow local guidance.',
  'Keep important personal documents secure.',
] as const

export const responsibleTravelGuidelines = [
  'Respect local customs.',
  'Ask before photographing people.',
  'Avoid littering and protect natural spaces.',
  'Support local communities.',
  'Be mindful in villages and cultural spaces.',
] as const

export const tripMetrics = [
  { value: '10', label: 'Days', detail: 'Total trip duration', icon: 'calendar' },
  { value: '8', label: 'Destinations', detail: 'Planned along the route', icon: 'pin' },
  { value: '245', label: 'Photos', detail: 'Mock count · no files', icon: 'camera' },
  { value: '12', label: 'Videos', detail: 'Mock count · no files', icon: 'video' },
  { value: '3', label: 'Adventures', detail: 'Example experiences', icon: 'mountain' },
]

export const tripMediaStats = { photos: 245, videos: 12, demoNote: 'Sample counts only · no real media files are available.' }

export const demoCertificate = {
  recipient: 'Himanshu Singh',
  title: 'Certificate of Completion',
  experience: '10-Day Himalayan Experience',
}

export const todayPlan = {
  dayLabel: 'DAY 04 · DEMO PLAN',
  title: 'Chopta – Tungnath Trek',
  destination: 'Chopta',
  experience: 'Himalayan trail experience',
  accommodation: 'Mountain stay',
  highlights: ['Forest trail viewpoints', 'A relaxed local lunch', 'Time for mountain photography'],
  timeline: [
    { time: 'MORNING', title: 'Trek to Tungnath', detail: 'A sample day on a Himalayan trail.', category: 'Adventure' },
    { time: 'AFTERNOON', title: 'Mountain lunch', detail: 'A pause to enjoy regional flavours along the way.', category: 'Food' },
    { time: 'EVENING', title: 'Return to Chopta', detail: 'Wind down after a day outdoors.', category: 'Stay' },
  ],
}

export const nextExperience = {
  title: 'Rishikesh Adventure',
  day: 'Day 5 · 26 Sep 2026',
  time: '6:00 PM',
  category: 'Adventure',
  image: 'photo-1500534623283-312aade485b7',
}

export const journeyHighlights = [
  { title: 'Mountain Trek', category: 'Adventure', status: 'Completed', image: 'photo-1464822759023-fed622ff2c3b', day: 'DAY 03' },
  { title: 'Village Stay', category: 'Village Life', status: 'Completed', image: 'photo-1470770841072-f978cf4d019e', day: 'DAY 02' },
  { title: 'Pahadi Food', category: 'Local Flavours', status: 'Completed', image: 'photo-1547592180-85f173990554', day: 'DAY 03' },
  { title: 'Cultural Evening', category: 'Culture', status: 'Upcoming', image: 'photo-1513836279014-a89f7a76ae86', day: 'DAY 06' },
  { title: 'River Adventure', category: 'Outdoors', status: 'Upcoming', image: 'photo-1500534623283-312aade485b7', day: 'DAY 07' },
]

export const routeDestinations = [
  { name: 'Nainital', state: 'completed', x: 14, y: 25 },
  { name: 'Almora', state: 'destination', x: 37, y: 67 },
  { name: 'Chopta', state: 'current', x: 59, y: 33 },
  { name: 'Auli', state: 'next', x: 83, y: 20 },
  { name: 'Rishikesh', state: 'destination', x: 76, y: 75 },
] as const

type JourneyCategory = (typeof journeyDays)[number]['category']
type JourneyStatus = (typeof journeyDays)[number]['status']

export const routeDays: { day: number; category: JourneyCategory; status: JourneyStatus }[] = journeyDays.map(({ day, category, status }) => ({ day, category, status }))

export const passportStamps = [
  { title: 'Mountain Trek', category: 'ADVENTURE', icon: 'mountain', earned: true },
  { title: 'Village Stay', category: 'VILLAGE LIFE', icon: 'home', earned: true },
  { title: 'Pahadi Food', category: 'LOCAL FLAVOURS', icon: 'food', earned: true },
  { title: 'Forest Walk', category: 'NATURE', icon: 'leaf', earned: false },
  { title: 'Local Stories', category: 'CULTURE', icon: 'culture', earned: false },
  { title: 'River Day', category: 'ADVENTURE', icon: 'water', earned: false },
  { title: 'Photo Stop', category: 'PHOTOGRAPHY', icon: 'camera', earned: false },
  { title: 'Mountain Market', category: 'LOCAL LIFE', icon: 'market', earned: false },
  { title: 'Valley Morning', category: 'NATURE', icon: 'sunrise', earned: false },
  { title: 'Journey’s End', category: 'MEMORY', icon: 'heart', earned: false },
]

export const memories = [
  { title: 'Mountain Morning', day: 'DAY 01', image: 'photo-1464822759023-fed622ff2c3b', kind: 'MOUNTAIN LANDSCAPE' },
  { title: 'Village Kitchen', day: 'DAY 02', image: 'photo-1547592180-85f173990554', kind: 'LOCAL FLAVOURS' },
  { title: 'Forest Trail', day: 'DAY 03', image: 'photo-1472396961693-142e6e269027', kind: 'NATURE' },
  { title: 'Cultural Evening', day: 'DAY 06', image: 'photo-1513836279014-a89f7a76ae86', kind: 'CULTURE' },
]

export const quickActions = [
  { title: 'Book More Experiences', detail: 'Discover new adventure', icon: 'compass', section: 'experiences' },
  { title: 'Update Profile', detail: 'Keep your info safe', icon: 'profile', section: 'settings' },
  { title: 'Need Help?', detail: 'Contact our support', icon: 'help', section: 'contact' },
]

export const sidebarJourneyLinks = [
  { title: 'Dashboard', section: '', icon: 'dashboard' },
  { title: 'My Trip', section: 'trip', icon: 'calendar' },
  { title: 'Interactive Map', section: 'map', icon: 'map' },
  { title: 'My Passport', section: 'passport', icon: 'passport' },
  { title: 'Photos & Videos', section: 'media', icon: 'camera' },
  { title: 'Trip Story', section: 'story', icon: 'story' },
  { title: 'Certificate', section: 'certificate', icon: 'certificate' },
  { title: 'Settings', section: 'settings', icon: 'settings' },
]
