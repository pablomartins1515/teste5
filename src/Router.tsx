import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Politica } from './pages/Politica'
import { Post } from './pages/Post'
import { BlogPage } from './pages/BlogPage'
import { MaisConsultas } from './pages/MaisConsultas'

import { Event } from './pages/Event'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/" element={<Home />} />
      <Route path="/maisconsultas" element={<MaisConsultas />} />
      <Route path="/blogpage" element={<BlogPage />} />
      <Route path="/politica" element={<Politica />} />
      <Route path="/blogpage/post/:slug" element={<Post />} />
    </Routes>
  )
}
