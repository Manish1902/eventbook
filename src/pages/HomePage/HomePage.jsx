import React from 'react'
import BurgerMenu from '../../components/BurgerMenu/Burger'
<<<<<<< Updated upstream
// import Events from '../Events/Events'
import EventDetailPage from '../Events/EventDetailPage'
=======
import PaymentPage from '../Payment/Payment'
import Events from '../Events/Events'
// import EventDetailPage from '../Events/EventDetailPage'
>>>>>>> Stashed changes

function HomePage() {
  return (
    <div>
        <BurgerMenu />
<<<<<<< Updated upstream
        {/* <Events /> */}
        <EventDetailPage />
=======
        <Events />
        {/* <EventDetailPage /> */}
        {/* <PaymentPage /> */}
>>>>>>> Stashed changes
    </div>
  )
}

export default HomePage