import type { FoodExperience, FoodFaq, FoodGalleryImage, FoodItem, FoodPrinciple, FoodSeason, FoodStoryPoint } from '../types'

export const foodCultureTopics = [
  'Local grains', 'Pulses', 'Seasonal vegetables', 'Mountain herbs',
  'Traditional cooking', 'Village kitchens', 'Family recipes', 'Community meals',
]

export const kitchenSteps: FoodStoryPoint[] = [
  { id: 'learn', title: 'LEARN', description: 'Discover traditional preparation methods.' },
  { id: 'cook', title: 'COOK', description: 'Participate where the host community welcomes guests to do so.' },
  { id: 'share', title: 'SHARE', description: 'Sit together and experience a local meal.' },
]

export const foodCultureFlow = ['FOOD', 'STORIES', 'PEOPLE', 'MEMORIES']

export const mountainIngredients: FoodItem[] = [
  { slug: 'mandua', name: 'Mandua', category: 'Mountain grain', description: 'Finger millet used in traditional mountain foods. Preparation and use differ between households.', image: 'photo-1509440159596-0249088772ff', imageAlt: 'Grain flour and freshly prepared bread on a wooden surface' },
  { slug: 'bhatt', name: 'Bhatt', category: 'Local pulse', description: 'A black soybean used in regional dishes, with recipes and seasoning shaped by local kitchens.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'A bowl of beans and seasonal ingredients ready for cooking' },
  { slug: 'jhangora', name: 'Jhangora', category: 'Himalayan grain', description: 'Barnyard millet traditionally cultivated in Himalayan regions and prepared in different ways.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'Cooked grain with herbs and fresh ingredients' },
  { slug: 'local-lentils', name: 'Local Lentils', category: 'Everyday cooking', description: 'Traditional pulses used in everyday mountain cooking; varieties and methods vary by place.', image: 'photo-1547592180-85f173990554', imageAlt: 'A warm bowl of lentils served with herbs' },
  { slug: 'seasonal-vegetables', name: 'Seasonal Vegetables', category: 'Seasonal produce', description: 'Locally available vegetables prepared according to season and household tradition.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'Fresh seasonal vegetables arranged for a shared meal' },
  { slug: 'mountain-herbs', name: 'Mountain Herbs', category: 'Regional ingredients', description: 'Regional herbs and ingredients used in traditional cooking where available.', image: 'photo-1518977676601-b53f82aba655', imageAlt: 'Fresh herbs and ingredients on a kitchen table' },
]

export const pahadiDishes: FoodItem[] = [
  { slug: 'kafuli', name: 'Kafuli', category: 'Regional dish', description: 'A greens-based preparation found in examples of Uttarakhand cooking; recipes vary by household.', image: 'photo-1547592180-85f173990554', imageAlt: 'A bowl of greens-based curry with a simple accompaniment' },
  { slug: 'bhatt-based-dishes', name: 'Bhatt-based Dishes', category: 'Pulse preparations', description: 'Bhatt appears in a range of local preparations, with ingredients and methods that vary by place.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'A bowl of beans prepared with herbs and spices' },
  { slug: 'aloo-ke-gutke', name: 'Aloo ke Gutke', category: 'Potato preparation', description: 'A spiced potato preparation found in regional food traditions, with household variations.', image: 'photo-1518977676601-b53f82aba655', imageAlt: 'Spiced potatoes prepared with fresh herbs' },
  { slug: 'chainsoo', name: 'Chainsoo', category: 'Lentil preparation', description: 'A traditional lentil preparation; local methods and seasoning can differ between kitchens.', image: 'photo-1547592180-85f173990554', imageAlt: 'A hearty lentil dish served in a bowl' },
  { slug: 'mandua-based-foods', name: 'Mandua-based Foods', category: 'Mountain grain', description: 'Mandua is used in a variety of foods, including breads prepared in some local kitchens.', image: 'photo-1509440159596-0249088772ff', imageAlt: 'Flatbread and grain flour ready to share' },
  { slug: 'jhangora-based-dishes', name: 'Jhangora-based Dishes', category: 'Himalayan grain', description: 'Jhangora appears in both savoury and sweet preparations, depending on local practice.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'A grain dish with seasonal ingredients' },
  { slug: 'traditional-chutneys', name: 'Traditional Chutneys', category: 'Accompaniments', description: 'Chutneys and accompaniments bring local ingredients and personal recipes to the table.', image: 'photo-1547592180-85f173990554', imageAlt: 'Small bowls of chutney served with a meal' },
  { slug: 'local-sweets', name: 'Local Sweets', category: 'Sweet dishes', description: 'Sweet dishes and festive treats vary across regions, seasons and family traditions.', image: 'photo-1488477181946-6428a0291777', imageAlt: 'A plate of small sweets prepared for sharing' },
]

export const foodExperiences: FoodExperience[] = [
  { slug: 'village-homestay-meal', title: 'Village Homestay Meal', description: 'Share a meal in a homestay when a host welcomes guests to their table.', image: 'photo-1528605248644-14dd04022da1', imageAlt: 'A shared meal set out on a table', duration: 'A meal', category: 'Village Life', icon: 'meal', href: '/experiences/village-homestay' },
  { slug: 'traditional-cooking', title: 'Traditional Cooking Experience', description: 'Learn about ingredients and preparation in a kitchen where participation is welcomed.', image: 'photo-1556911220-bff31c812dba', imageAlt: 'A cook preparing ingredients in a home kitchen', duration: 'Half day', category: 'Food', icon: 'cooking', href: '/experiences?category=food' },
  { slug: 'local-market-walk', title: 'Local Market Walk', description: 'Explore local produce and everyday food culture with a curious eye.', image: 'photo-1488459716781-31db52582fe9', imageAlt: 'Fresh produce at a neighborhood market', duration: 'A morning', category: 'Culture', icon: 'market', href: '/experiences?category=culture' },
  { slug: 'pahadi-breakfast', title: 'Pahadi Breakfast', description: 'Start the day with a locally prepared breakfast, shaped by what is available.', image: 'photo-1498837167922-ddd27525d352', imageAlt: 'A breakfast table with fresh local food', duration: 'A morning', category: 'Food', icon: 'breakfast', href: '/experiences?category=food' },
  { slug: 'farm-to-table', title: 'Farm-to-Table Experience', description: 'Where offered, learn how locally sourced ingredients shape a seasonal meal.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'Seasonal vegetables and grains arranged for a meal', duration: 'A meal', category: 'Food', icon: 'farm', href: '/experiences?category=food' },
]

export const seasonalFood: FoodSeason[] = [
  { id: 'spring', title: 'SPRING', description: 'Seasonal greens and fresh local ingredients.', image: 'photo-1512621776951-a57141f2eefd', imageAlt: 'Fresh greens and spring ingredients' },
  { id: 'summer', title: 'SUMMER', description: 'Fresh vegetables, grains and regional preparations.', image: 'photo-1498837167922-ddd27525d352', imageAlt: 'A colorful spread of seasonal vegetables and grains' },
  { id: 'monsoon', title: 'MONSOON', description: 'Traditional seasonal foods and local produce.', image: 'photo-1506976785307-8732e854ad03', imageAlt: 'Seasonal ingredients gathered for cooking' },
  { id: 'winter', title: 'WINTER', description: 'Hearty mountain meals and warming preparations.', image: 'photo-1547592180-85f173990554', imageAlt: 'A warm meal served on a winter day' },
]

export const foodGallery: FoodGalleryImage[] = [
  { id: 'photo-1547592180-85f173990554', alt: 'Regional dish served with simple accompaniments', caption: 'Traditional dishes · Shared at the table', shape: 'wide' },
  { id: 'photo-1556911220-bff31c812dba', alt: 'Food being prepared in a home kitchen', caption: 'Village kitchen · Preparation', shape: 'portrait' },
  { id: 'photo-1509440159596-0249088772ff', alt: 'Grains and flour on a wooden surface', caption: 'Ingredients · Local grains', shape: 'square' },
  { id: 'photo-1528605248644-14dd04022da1', alt: 'A meal laid out for people to share', caption: 'Mountain dining · Together', shape: 'wide' },
  { id: 'photo-1488459716781-31db52582fe9', alt: 'Local produce at a market', caption: 'Market · Seasonal produce', shape: 'square' },
  { id: 'photo-1518977676601-b53f82aba655', alt: 'Herbs and vegetables being prepared', caption: 'Cooking · Fresh ingredients', shape: 'portrait' },
  { id: 'photo-1470770841072-f978cf4d019e', alt: 'A Himalayan settlement surrounded by green slopes', caption: 'Landscape · Food and place', shape: 'wide' },
  { id: 'photo-1498837167922-ddd27525d352', alt: 'People gathered around a meal', caption: 'Community meal · A shared moment', shape: 'square' },
]

export const responsibleFoodPrinciples: FoodPrinciple[] = [
  { id: 'local-hosts', title: 'Support Local Hosts', description: 'Choose locally operated experiences where possible.', icon: 'host' },
  { id: 'respect-traditions', title: 'Respect Food Traditions', description: 'Ask before photographing kitchens, food preparation or people.', icon: 'respect' },
  { id: 'reduce-waste', title: 'Reduce Waste', description: 'Avoid unnecessary food and packaging waste.', icon: 'waste' },
  { id: 'value-ingredients', title: 'Value Local Ingredients', description: 'Learn where ingredients come from.', icon: 'ingredient' },
  { id: 'community-customs', title: 'Respect Community Customs', description: "Follow your host's guidance.", icon: 'custom' },
]

export const foodJourneyStops = [
  { day: 'DAY 02', title: 'Village Meal', image: 'photo-1528605248644-14dd04022da1' },
  { day: 'DAY 04', title: 'Pahadi Food Experience', image: 'photo-1547592180-85f173990554' },
  { day: 'DAY 06', title: 'Cultural Evening', image: 'photo-1513836279014-a89f7a76ae86' },
  { day: 'DAY 09', title: 'Local Market', image: 'photo-1488459716781-31db52582fe9' },
]

export const foodFaqs: FoodFaq[] = [
  { question: 'What kind of food can travellers experience?', answer: 'Experiences may include local ingredients, seasonal preparations and regional dishes. What is available varies by host, location and season.' },
  { question: 'Can I join a traditional cooking experience?', answer: 'Cooking experiences may be available where a host chooses to welcome participation. Arrangements depend on location, season and availability.' },
  { question: 'Are vegetarian options available?', answer: 'Many regional meals include plant-based dishes, but menus differ. Please discuss preferences with the host during planning.' },
  { question: 'Can food experiences accommodate dietary restrictions?', answer: 'Dietary needs should be shared in advance. Whether they can be accommodated depends on the host, location, ingredients and preparation facilities.' },
  { question: 'Can I experience food during a village homestay?', answer: 'A shared meal may be part of a homestay where offered by the host. Experiences vary by household and selected stay.' },
  { question: 'Can I buy local ingredients or products?', answer: 'Local markets may offer ingredients or products depending on the place and season. Availability is not guaranteed.' },
]