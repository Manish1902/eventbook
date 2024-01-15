// ... (previous code)
import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const eventsData = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      category: 'Technology',
      date: '20-4-2024',
      description: 'Join us for the latest trends in technology and innovation.',
    },
    {
      id: 2,
      title: 'Fitness Workshop',
      category: 'Health & Wellness',
      date: '20-4-2024',
      description: 'Get fit and healthy with our expert trainers. All fitness levels welcome!',
    },
    {
      id: 3,
      title: 'Art Exhibition',
      category: 'Art & Culture',
      date: '20-4-2024',
      description: 'Explore the world of art with our diverse collection of paintings and sculptures.',
    },
    {
      id: 4,
      title: 'Tech Conference 2024',
      category: 'Technology',
      date: '20-4-2024',
      description: 'Join us for the latest trends in technology and innovation.',
    },
    {
      id: 5,
      title: 'Fitness Workshop',
      category: 'Health & Wellness',
      date: '20-4-2024',
      description: 'Get fit and healthy with our expert trainers. All fitness levels welcome!',
    },
    {
      id: 6,
      title: 'Art Exhibition',
      category: 'Art & Culture',
      date: '20-4-2024',
      description: 'Explore the world of art with our diverse collection of paintings and sculptures.',
    },
    // Add more events as needed
  ];

  const uniqueCategories = [...new Set(eventsData.map((event) => event.category))];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAllClick = () => {
    setSelectedCategory(null);
  };

  const filteredEvents = selectedCategory
    ? eventsData.filter((event) => event.category === selectedCategory)
    : eventsData;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-5">Categories</h2>
      <div className="row">
        {uniqueCategories.map((category) => (
          <div key={category} className="col-lg-2 col-md-4 mb-4">
            <div
              className={`card h-100 ${selectedCategory === category ? 'selected-category' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="card-body">
                <h6 className="card-subtitle mb-2 mt-2 text-white">{category}</h6>
              </div>
            </div>
          </div>
        ))}
        {/* Show All card */}
        <div className="col-lg-2 col-md-4 mb-4">
          <div className={`card h-100 ${selectedCategory === null ? 'selected-category' : ''}`} onClick={handleShowAllClick}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 mt-2 text-white">Show All</h6>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4 mb-5 text-center">All Events</h2>
      <div className="row">
        {filteredEvents.map((event) => (
          <div key={event.id} className="col-lg-2 col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-white">{event.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-white">{event.category}</h6>
                <p className="card-text text-white">{event.date}</p>
                <p className="card-text text-white">{event.description}</p>
                <a href="./" className="card-link text-white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
