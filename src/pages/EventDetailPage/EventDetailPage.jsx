import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/Burger';

const EventDetailPage = () => {

  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/events/${eventId}`);
        setEventDetails(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchData();
  }, [eventId]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BurgerMenu />
      <div className="container mt-5 mb-5">
        <div className="card pt-5 pb-5" >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={eventDetails.imageUrl} className="card-img" alt="Event" />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3 mb-3">
                <h4 className="card-title mb-3">{eventDetails.title}</h4>
                <p className="card-text mb-3">{eventDetails.date}</p>
                <p className="card-text mt-3 mb-3">{eventDetails.priceInRupees}</p>
                <button className="btn btn-primary  mt -3 mb-3"><Link to={`/Payment/${eventDetails.id}`} className='link-style'>Book Now</Link></button>
                <p className="card-text mt-3">{eventDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
