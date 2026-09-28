export type CertificateStatus = 'Demo Preview'

export type CertificateData = {
  id: string
  travellerName: string
  journeyName: string
  region: string
  duration: number
  destinations: number
  experiences: number
  status: CertificateStatus
  certificateId: string
  completionPercentage: number
  completedDays: number
  completedDestinations: number
  completedExperiences: number
}

export type CertificateStats = {
  days: number
  destinations: number
  experiences: number
  adventures: number
  culturalMoments: number
  memories: number
}

export type CertificateAchievement = {
  title: string
  description: string
  icon: 'explored' | 'experienced' | 'connected' | 'remembered'
}

export const certificateData: CertificateData = {
  id: 'journey-demo-2026',
  travellerName: 'Himanshu Traveler',
  journeyName: '10-Day Himalayan Experience',
  region: 'Uttarakhand, India',
  duration: 10,
  destinations: 5,
  experiences: 8,
  status: 'Demo Preview',
  certificateId: 'DBT-DEMO-CERT-001',
  completionPercentage: 30,
  completedDays: 3,
  completedDestinations: 3,
  completedExperiences: 4,
}

export const certificateStats: CertificateStats = {
  days: 10,
  destinations: 5,
  experiences: 8,
  adventures: 3,
  culturalMoments: 2,
  memories: 245,
}

export const certificateAchievements: CertificateAchievement[] = [
  { title: 'EXPLORED', description: 'Destinations and Himalayan landscapes.', icon: 'explored' },
  { title: 'EXPERIENCED', description: 'Adventure, culture, food and local experiences.', icon: 'experienced' },
  { title: 'CONNECTED', description: 'Moments with places, people and communities.', icon: 'connected' },
  { title: 'REMEMBERED', description: 'A digital collection of memories to take home.', icon: 'remembered' },
]

export const certificatePurposePoints = [
  'Respect communities',
  'Protect natural spaces',
  'Support local experiences',
  'Travel responsibly',
]
