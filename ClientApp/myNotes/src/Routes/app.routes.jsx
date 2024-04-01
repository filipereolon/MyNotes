import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { NewNote } from '../Pages/New Note'
import { Details } from '../Pages/Details'
import { Profile } from '../Pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewNote />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}