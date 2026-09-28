import type { CultureCard, CultureGalleryImage, CulturePrinciple } from '../types'

export const culturalWays = [
  'Local village life',
  'Traditional food',
  'Folk music',
  'Folk dance',
  'Traditional clothing',
  'Local crafts',
  'Stories and oral traditions',
  'Community celebrations',
]

export const cultureExperiences: CultureCard[] = [
  { id: 'village-life', title: 'Pahadi Village Life', category: 'Village Life', description: 'Experience everyday life in a Himalayan village through respectful, community-led interactions.', image: 'photo-1470770841072-f978cf4d019e', imageAlt: 'A quiet hillside village surrounded by Himalayan landscapes', href: '/experiences?category=village-life' },
  { id: 'folk-music-dance', title: 'Folk Music & Dance', category: 'Music & Movement', description: 'Discover regional music, instruments, dance and storytelling traditions.', image: 'photo-1517457373958-b7bdd4587205', imageAlt: 'People gathered for a community performance', href: '/experiences?category=culture' },
  { id: 'traditional-food', title: 'Traditional Food', category: 'Food', description: 'Explore local ingredients, cooking methods and traditional mountain dishes.', image: 'photo-1547592180-85f173990554', imageAlt: 'A shared meal prepared with local ingredients', href: '/food' },
  { id: 'traditional-clothing', title: 'Traditional Clothing', category: 'Textiles', description: 'Learn about regional clothing, textiles and the craftsmanship behind them.', image: 'photo-1529139574466-a303027c1d8b', imageAlt: 'Traditional textiles and clothing details', href: '/experiences?category=culture' },
  { id: 'local-crafts', title: 'Local Crafts', category: 'Craft', description: 'Discover handmade products, weaving, woodwork and other regional crafts where available.', image: 'photo-1452860606245-08befc0ff44b', imageAlt: 'Handcrafted objects arranged in an artisan workshop', href: '/experiences?category=culture' },
  { id: 'local-markets', title: 'Local Markets', category: 'Everyday Life', description: 'Walk through local markets and discover food, crafts and everyday mountain life.', image: 'photo-1488459716781-31db52582fe9', imageAlt: 'Fresh produce and everyday goods at a local market', href: '/experiences?category=culture' },
]

export const cultureSoundStories: CultureCard[] = [
  { id: 'folk-music', title: 'Folk Music', description: 'Regional songs and musical traditions are part of how communities share memory and place.', image: 'photo-1516280440614-37939bbacd81', imageAlt: 'A musician performing for a small audience' },
  { id: 'folk-dance', title: 'Folk Dance', description: 'Community dances may be part of cultural occasions and celebrations in their local context.', image: 'photo-1508700115892-45ecd05ae2ad', imageAlt: 'Performers moving together at a cultural gathering' },
  { id: 'oral-stories', title: 'Oral Stories', description: 'Stories, legends and knowledge continue to be shared between generations.', image: 'photo-1511632765486-a01980e01a18', imageAlt: 'People sharing a story in conversation' },
]

export const clothingStories: CultureCard[] = [
  { id: 'womens-wear', title: "Traditional Women's Wear", description: 'Explore clothing traditions through the communities and regions where they belong.', image: 'photo-1529139574466-a303027c1d8b', imageAlt: 'Colorful woven fabric and traditional clothing detail' },
  { id: 'mens-wear', title: "Traditional Men's Wear", description: 'Notice regional garments, practical layers and details shaped by local context.', image: 'photo-1515886657613-9f3515b0c78f', imageAlt: 'Portrait showing layered clothing and woven fabric' },
  { id: 'wool-textiles', title: 'Wool & Mountain Textiles', description: 'See how wool and textiles are used in clothing and everyday life across the hills.', image: 'photo-1600166898405-da9535204843', imageAlt: 'Handwoven wool textile with a natural pattern' },
  { id: 'handcrafted-accessories', title: 'Handcrafted Accessories', description: 'Look closely at the materials and craftwork used in regional accessories.', image: 'photo-1490312278390-ab64016e0aa9', imageAlt: 'Handcrafted jewelry and textile accessories' },
]

export const foodStories: CultureCard[] = [
  { id: 'bhatt-dishes', title: 'Bhatt-based dishes', description: 'Explore dishes made with bhatt in local food contexts.', image: 'photo-1547592180-85f173990554', imageAlt: 'A bowl of regional food served for sharing' },
  { id: 'mandua-foods', title: 'Mandua-based foods', description: 'Learn how mandua appears in foods prepared in different parts of the region.', image: 'photo-1509440159596-0249088772ff', imageAlt: 'Freshly prepared grain-based food' },
  { id: 'jhangora-dishes', title: 'Jhangora-based dishes', description: 'Discover jhangora in dishes and home cooking where it is used.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'A prepared meal with grains and seasonal ingredients' },
  { id: 'traditional-lentils', title: 'Traditional lentils', description: 'Mountain meals often include lentils prepared with local approaches and ingredients.', image: 'photo-1547592180-85f173990554', imageAlt: 'A warm bowl of lentils with herbs' },
  { id: 'local-vegetables', title: 'Local vegetables', description: 'Seasonal vegetables bring a sense of place to everyday meals.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'Fresh vegetables arranged for cooking' },
  { id: 'mountain-chutneys', title: 'Mountain chutneys', description: 'Discover chutneys and accompaniments served alongside regional food.', image: 'photo-1547592180-85f173990554', imageAlt: 'Small dishes and condiments served with a meal' },
]

export const communityStories: CultureCard[] = [
  { id: 'festivals', title: 'Festivals', description: 'Community celebrations and regional traditions, experienced in their local setting.', image: 'photo-1533174072545-7a4b6ad7a6c3', imageAlt: 'A community gathering illuminated during a celebration' },
  { id: 'seasonal-life', title: 'Seasonal Life', description: 'Notice how seasons shape food, work and village life.', image: 'photo-1470770841072-f978cf4d019e', imageAlt: 'Mountain village and changing seasonal landscape' },
  { id: 'local-gatherings', title: 'Local Gatherings', description: 'Community events and social traditions shared on local terms.', image: 'photo-1529156069898-49953e39b3ac', imageAlt: 'People gathering outdoors in conversation' },
  { id: 'craft-traditions', title: 'Craft Traditions', description: 'Skills and handmade work passed between generations.', image: 'photo-1452860606245-08befc0ff44b', imageAlt: 'Hands working on a handmade craft' },
]

export const culturePrinciples: CulturePrinciple[] = [
  { id: 'ask-before-photographing', title: 'Ask Before Photographing', description: "Respect people's privacy and ask permission.", icon: 'camera' },
  { id: 'respect-sacred-spaces', title: 'Respect Sacred Spaces', description: 'Follow local rules and community guidance.', icon: 'landmark' },
  { id: 'dress-appropriately', title: 'Dress Appropriately', description: 'Dress respectfully when visiting cultural or religious spaces.', icon: 'shirt' },
  { id: 'listen-first', title: 'Listen First', description: 'Observe and learn instead of assuming.', icon: 'ear' },
  { id: 'support-local', title: 'Support Local', description: 'Choose local guides, homestays, artisans and businesses where possible.', icon: 'heart' },
  { id: 'leave-no-trace', title: 'Leave No Trace', description: 'Protect the environment and local spaces.', icon: 'leaf' },
]

export const cultureGallery: CultureGalleryImage[] = [
  { id: 'photo-1470770841072-f978cf4d019e', alt: 'Himalayan village in a green mountain valley', caption: 'Village life · Uttarakhand', shape: 'wide' },
  { id: 'photo-1547592180-85f173990554', alt: 'A meal prepared with regional ingredients', caption: 'Food stories · Pahadi table', shape: 'portrait' },
  { id: 'photo-1529139574466-a303027c1d8b', alt: 'Textile and clothing detail from a cultural wardrobe', caption: 'Textiles · Craft & clothing', shape: 'square' },
  { id: 'photo-1517457373958-b7bdd4587205', alt: 'A performance in a community setting', caption: 'Performance · Community gathering', shape: 'wide' },
  { id: 'photo-1488459716781-31db52582fe9', alt: 'Produce and goods at a neighborhood market', caption: 'Market · Everyday life', shape: 'square' },
  { id: 'photo-1452860606245-08befc0ff44b', alt: 'Artisan hands working on a handmade object', caption: 'Craft · Made by hand', shape: 'portrait' },
  { id: 'photo-1513836279014-a89f7a76ae86', alt: 'A forest landscape in the Himalayan foothills', caption: 'Landscape · Mountain setting', shape: 'wide' },
  { id: 'photo-1529156069898-49953e39b3ac', alt: 'People spending time together outdoors', caption: 'Community · Shared moments', shape: 'square' },
]