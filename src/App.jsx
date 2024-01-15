import { useState } from 'react'
import SidebarNav from './sitebaar-nav/sidebar-nav'
import MainLayout from './layout/main-layout/main-layout'

import './App.css'

function App() {

  return (
   <>
   <div className="boxAll">
   <SidebarNav/>
   <MainLayout/>
   </div>
   </>
  )
}

export default App
