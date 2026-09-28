import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './components/PublicLayout'
import { ReferenceHome as Home } from './pages/ReferenceHome'
import { CollectionPage } from './pages/CollectionPage'
import { ExplorePage } from './pages/ExplorePage'
import { DestinationsPage } from './pages/DestinationsPage'
import { ExperiencesPage } from './pages/ExperiencesPage'
import { PackagesPage } from './pages/PackagesPage'
import { CulturePage } from './pages/CulturePage'
import { pageContent } from './data/siteContent'

const AdventurePage = lazy(() => import('./pages/AdventurePage').then(({ AdventurePage: page }) => ({ default: page })))
const FoodPage = lazy(() => import('./pages/FoodPage').then(({ FoodPage: page }) => ({ default: page })))
const HomestaysPage = lazy(() => import('./pages/HomestaysPage').then(({ HomestaysPage: page }) => ({ default: page })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage: page }) => ({ default: page })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(({ ContactPage: page }) => ({ default: page })))
const TouristPortalLayout = lazy(() => import('./layouts/TouristPortalLayout').then(({ TouristPortalLayout: page }) => ({ default: page })))
const JourneyDashboard = lazy(() => import('./pages/portal/JourneyDashboard').then(({ JourneyDashboard: page }) => ({ default: page })))
const TripPage = lazy(() => import('./pages/portal/TripPage').then(({ TripPage: page }) => ({ default: page })))
const JourneyMapPage = lazy(() => import('./pages/portal/JourneyMapPage').then(({ JourneyMapPage: page }) => ({ default: page })))
const HimalayanPassport = lazy(() => import('./pages/portal/HimalayanPassport').then(({ HimalayanPassport: page }) => ({ default: page })))
const PhotosVideos = lazy(() => import('./pages/portal/PhotosVideos').then(({ PhotosVideos: page }) => ({ default: page })))
const TripStory = lazy(() => import('./pages/portal/TripStory').then(({ TripStory: page }) => ({ default: page })))
const Certificate = lazy(() => import('./pages/portal/Certificate').then(({ Certificate: page }) => ({ default: page })))
const Settings = lazy(() => import('./pages/portal/Settings').then(({ Settings: page }) => ({ default: page })))
const PortalSection = lazy(() => import('./pages/portal/PortalSection').then(({ PortalSection: page }) => ({ default: page })))

export default function App() {
  return (
    <Routes>
      <Route path="my-journey" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your journey…</div>}><TouristPortalLayout /></Suspense>}>
        <Route index element={<Suspense fallback={<div className="food-page-loading" role="status">Gathering your journey…</div>}><JourneyDashboard /></Suspense>} />
        <Route path="trip" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your itinerary…</div>}><TripPage /></Suspense>} />
        <Route path="map" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your journey map…</div>}><JourneyMapPage /></Suspense>} />
        <Route path="passport" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your Himalayan passport…</div>}><HimalayanPassport /></Suspense>} />
        <Route path="media" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your journey memories…</div>}><PhotosVideos /></Suspense>} />
        <Route path="story" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your trip story…</div>}><TripStory /></Suspense>} />
        <Route path="certificate" element={<Suspense fallback={<div className="food-page-loading" role="status">Preparing your journey certificate…</div>}><Certificate /></Suspense>} />
        <Route path="settings" element={<Suspense fallback={<div className="food-page-loading" role="status">Preparing your traveller settings…</div>}><Settings /></Suspense>} />
        <Route path=":section" element={<Suspense fallback={<div className="food-page-loading" role="status">Opening your journey…</div>}><PortalSection /></Suspense>} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="experiences/village-homestay" element={<Navigate to="/experiences?category=village-life" replace />} />
        <Route path="experiences" element={<ExperiencesPage />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="culture" element={<CulturePage />} />
        <Route path="adventure" element={<Suspense fallback={<div className="food-page-loading" role="status">Preparing your mountain adventure…</div>}><AdventurePage /></Suspense>} />
        <Route path="food" element={<Suspense fallback={<div className="food-page-loading" role="status">Preparing the Pahadi table…</div>}><FoodPage /></Suspense>} />
        <Route path="homestays" element={<Suspense fallback={<div className="food-page-loading" role="status">Finding a place in the mountains…</div>}><HomestaysPage /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<div className="food-page-loading" role="status">Discovering our story…</div>}><AboutPage /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<div className="food-page-loading" role="status">Preparing your journey…</div>}><ContactPage /></Suspense>} />
        {Object.entries(pageContent).filter(([path]) => path !== 'explore' && path !== 'destinations' && path !== 'experiences' && path !== 'packages' && path !== 'culture' && path !== 'food' && path !== 'adventure' && path !== 'homestays' && path !== 'about' && path !== 'contact').map(([path, content]) => (
          <Route key={path} path={path} element={<CollectionPage content={content} />} />
        ))}
        <Route path="*" element={<CollectionPage content={pageContent.explore} />} />
      </Route>
    </Routes>
  )
}