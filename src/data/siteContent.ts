import { destinations } from './destinations'
import type { CollectionContent } from '../types'

const content = (eyebrow: string, title: string, description: string, image: string, names: string[]): CollectionContent => ({
  eyebrow,
  title,
  description,
  image,
  items: names.map((name, index) => destinations.find((place) => place.name === name) ?? destinations[index % destinations.length]),
})

export const pageContent: Record<string, CollectionContent> = {
  explore: content('The land of many worlds', 'Find your own Uttarakhand', 'Follow the mountain roads beyond the familiar. Find a place to linger, a trail to remember, and a view that feels entirely your own.', 'photo-1464822759023-fed622ff2c3b', ['Nainital', 'Almora', 'Rishikesh', 'Chopta', 'Auli', 'Munsiyari']),
  destinations: content('A sense of place', 'Places that stay with you', 'From quiet Kumaoni ridgelines to the wide valleys of Garhwal, explore the places that make Uttarakhand feel like nowhere else.', 'photo-1470770841072-f978cf4d019e', ['Nainital', 'Almora', 'Rishikesh', 'Chopta', 'Auli', 'Munsiyari']),
  experiences: content('Made for the feeling', 'Come closer to the mountains', 'Thoughtful ways to experience the outdoors, meet local makers, and find a new rhythm in the hills.', 'photo-1513836279014-a89f7a76ae86', ['Chopta', 'Almora', 'Rishikesh', 'Munsiyari']),
  packages: content('Journeys with meaning', 'A little more time in the mountains', 'Unhurried, considered journeys bringing together mountain landscapes, village life and the people who call these hills home.', 'photo-1500530855697-b586d89ba3ee', ['Almora', 'Nainital', 'Chopta', 'Auli']),
  culture: content('Rooted in the hills', 'Meet the culture behind the mountains', 'Discover the living traditions, everyday rituals, folk art and generous hospitality that shape life in Uttarakhand.', 'photo-1513836279014-a89f7a76ae86', ['Almora', 'Munsiyari', 'Nainital']),
  food: content('A taste of the hills', 'Gather around the Pahadi table', 'Seasonal ingredients, familiar recipes and the pleasure of sharing a meal made with care.', 'photo-1547592180-85f173990554', ['Almora', 'Nainital', 'Munsiyari']),
  adventure: content('Out here, everything opens up', 'Find your kind of wild', 'Set out on foot, follow the river or simply take the long way through the forest. The best adventures begin with curiosity.', 'photo-1464822759023-fed622ff2c3b', ['Chopta', 'Auli', 'Rishikesh', 'Munsiyari']),
  homestays: content('A place to feel at home', 'Stay where the mountains live', 'Wake to hillside light, eat what is in season and get to know the place through the people who welcome you in.', 'photo-1470770841072-f978cf4d019e', ['Almora', 'Munsiyari', 'Nainital']),
  about: content('A little about us', 'Travel with a lighter footprint', 'Dev Bhoomi Trip is here to help you experience Uttarakhand with curiosity, care and a little more time.', 'photo-1500534623283-312aade485b7', ['Almora', 'Chopta', 'Munsiyari']),
  contact: content('Let’s begin', 'Your mountain story starts here', 'Tell us what draws you to Uttarakhand. We would love to help you shape a journey that feels like yours.', 'photo-1470770841072-f978cf4d019e', ['Nainital', 'Almora', 'Chopta']),
}