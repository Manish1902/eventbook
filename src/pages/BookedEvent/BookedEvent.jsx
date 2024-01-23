import {useContext, useState, useEffect} from 'react'
import {DataContext} from '../../context/dataContext';
import axios from 'axios';

function BookedEvent() {
  let { user } = useContext(DataContext);
    let [boookedEvents,setBookedEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/bookevents/?email=${user.email}`)
                setBookedEvents(response.data);
                // console.log(boookedEvnets)
          } catch (error) {
            console.error('Error fetching event details:', error);
          }
        };
    
        fetchData();
      }, [boookedEvents, setBookedEvents]);
  
    
  return (
    <div className="container mt-5 mb-5">
      <div className="card pt-5 pb-5">
        <div className="card-body mt-3 mb-3">
            {boookedEvents.map((book) => (
                <div>
                <h4>{book.title}</h4>
                <h4>{book.date}</h4>
                <h4>{book.venue}</h4>
                <h4>{book.tickets}</h4>
                </div>
            ))}
          <h2 className="card-title mb-3">Hello</h2>
        </div>
      </div>
    </div>
  );
}

export default BookedEvent;
