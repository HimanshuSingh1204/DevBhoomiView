export type TravellerProfile = {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
}

export type TravelInterest = 'Adventure' | 'Culture' | 'Food' | 'Nature' | 'Village Life' | 'Photography' | 'Wellness'
export type TravelPace = 'Relaxed' | 'Balanced' | 'Active'
export type AccommodationPreference = 'Village Homestay' | 'Family Stay' | 'Mountain Retreat' | 'Nature Stay'

export type JourneyPreferences = {
  interests: TravelInterest[]
  pace: TravelPace
  accommodation: AccommodationPreference
}

export type NotificationPreferences = {
  tripUpdates: boolean
  journeyReminders: boolean
  checkInReminders: boolean
  memoryUpdates: boolean
  storyUpdates: boolean
  marketingOffers: boolean
}

export type PrivacyPreferences = {
  profilePrivate: boolean
  tripStorySharing: boolean
  publicPassport: boolean
  certificateSharing: boolean
  memorySharing: boolean
}

export type AccessibilityPreferences = {
  reducedMotion: boolean
  largeText: boolean
  highContrast: boolean
  autoplayVideos: boolean
}

export type RegionPreferences = {
  language: 'English'
  country: string
  dateFormat: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD'
  distance: 'Kilometres' | 'Miles'
  currency: 'INR' | 'USD' | 'EUR'
}

export type SettingsData = {
  profile: TravellerProfile
  journey: JourneyPreferences
  notifications: NotificationPreferences
  privacy: PrivacyPreferences
  accessibility: AccessibilityPreferences
  region: RegionPreferences
}

export const demoSettings: SettingsData = {
  profile: {
    firstName: 'Himanshu',
    lastName: 'Traveler',
    email: 'traveller@example.com',
    phone: '+91 XXXXX XXXXX',
    country: 'India',
  },
  journey: {
    interests: ['Adventure', 'Culture', 'Photography'],
    pace: 'Balanced',
    accommodation: 'Village Homestay',
  },
  notifications: {
    tripUpdates: true,
    journeyReminders: true,
    checkInReminders: true,
    memoryUpdates: true,
    storyUpdates: true,
    marketingOffers: false,
  },
  privacy: {
    profilePrivate: true,
    tripStorySharing: false,
    publicPassport: false,
    certificateSharing: false,
    memorySharing: false,
  },
  accessibility: {
    reducedMotion: false,
    largeText: false,
    highContrast: false,
    autoplayVideos: false,
  },
  region: {
    language: 'English',
    country: 'India',
    dateFormat: 'DD/MM/YYYY',
    distance: 'Kilometres',
    currency: 'INR',
  },
}

export const travelInterests: TravelInterest[] = ['Adventure', 'Culture', 'Food', 'Nature', 'Village Life', 'Photography', 'Wellness']
export const travelPaces: TravelPace[] = ['Relaxed', 'Balanced', 'Active']
export const accommodationPreferences: AccommodationPreference[] = ['Village Homestay', 'Family Stay', 'Mountain Retreat', 'Nature Stay']
export const notificationSettings: { key: keyof NotificationPreferences; label: string; description: string }[] = [
  { key: 'tripUpdates', label: 'Trip Updates', description: 'Receive updates related to your itinerary.' },
  { key: 'journeyReminders', label: 'Journey Reminders', description: 'Receive reminders before upcoming experiences.' },
  { key: 'checkInReminders', label: 'Check-in Reminders', description: 'Get reminders for destination check-ins.' },
  { key: 'memoryUpdates', label: 'Memory Updates', description: 'Receive notifications when new trip media becomes available.' },
  { key: 'storyUpdates', label: 'Story Updates', description: 'Receive updates when your trip story is ready.' },
  { key: 'marketingOffers', label: 'Marketing & Offers', description: 'Receive occasional travel offers and updates.' },
]
export const privacySettings: { key: keyof PrivacyPreferences; label: string; detail: string }[] = [
  { key: 'profilePrivate', label: 'Profile Visibility', detail: 'Private' },
  { key: 'tripStorySharing', label: 'Trip Story Sharing', detail: 'Allow your story to be shared' },
  { key: 'publicPassport', label: 'Public Passport', detail: 'Allow your passport to be visible' },
  { key: 'certificateSharing', label: 'Certificate Sharing', detail: 'Allow your certificate to be shared' },
  { key: 'memorySharing', label: 'Memory Sharing', detail: 'Allow your memories to be shared' },
]
export const accessibilitySettings: { key: keyof AccessibilityPreferences; label: string; description: string }[] = [
  { key: 'reducedMotion', label: 'Reduced Motion', description: 'Use less animation throughout the portal.' },
  { key: 'largeText', label: 'Large Text', description: 'Increase text size for easier reading.' },
  { key: 'highContrast', label: 'High Contrast', description: 'Increase visual contrast.' },
  { key: 'autoplayVideos', label: 'Autoplay Videos', description: 'Allow video previews to play automatically.' },
]
