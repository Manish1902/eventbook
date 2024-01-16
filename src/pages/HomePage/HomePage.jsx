import React from 'react'
import BurgerMenu from '../../components/BurgerMenu/Burger'
// import PaymentPage from '../Payment/Payment'
import Events from '../Events/Events'
// import EventDetailPage from '../Events/EventDetailPage'

function HomePage() {
  return (
    <div className='background'>
        <BurgerMenu />
        <Events />
        {/* <EventDetailPage />
        <PaymentPage /> */}
    </div>
  )
}

export default HomePage