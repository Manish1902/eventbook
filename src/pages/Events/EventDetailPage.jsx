import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventDetails.css'

const EventDetailPage = () => {
  const eventDetails = {
    id: 1,
    title: 'Tech Conference 2024',
    date: 'January 30, 2024',
    imageUrl: 'https://placekitten.com/200/200', // Replace 
    description: 'Join us for the latest trends in technology and innovation. Explore new ideas and meet industry experts.',
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={eventDetails.imageUrl} className="card-img" alt="Event" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{eventDetails.title}</h4>
              <p className="card-text">{eventDetails.date}</p>
              <button className="btn btn-primary">Book Now</button>
              <p className="card-text mt-3">{eventDetails.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
