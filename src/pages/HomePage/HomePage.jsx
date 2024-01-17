import React from 'react'
import BurgerMenu from '../../components/BurgerMenu/Burger'
import Events from '../Events/Events'
// import EventDetailPage from '../Events/EventDetailPage'
// import PaymentPage from '../Payment/Payment'

function HomePage() {
  return (
    <div className='background'>
        <BurgerMenu />
        <Events />
        {/* <EventDetailPage /> */}
        {/* <PaymentPage /> */}
    </div>
  )
}

export default HomePage