import React from 'react'
import BurgerMenu from '../../components/BurgerMenu/Burger'
// import Events from '../Events/Events'
import EventDetailPage from '../Events/EventDetailPage'

function HomePage() {
  return (
    <div>
        <BurgerMenu />
        {/* <Events /> */}
        <EventDetailPage />
    </div>
  )
}

export default HomePage