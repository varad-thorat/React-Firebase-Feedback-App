import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import './Dashboard.css';

const View = () => {

  const { feedbackId } = useParams();
  const navigate = useNavigate();
  const database = getDatabase();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [firebaseId, setFirebaseId] = useState('');

  useEffect(() => {
    const feedbackRef = ref(database, 'feedback');

    const fetchFeedback = onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const feedbackEntry = Object.values(data)[feedbackId - 1];
        setFeedback(feedbackEntry.fb);
        setRating(feedbackEntry.rating);
        setFirebaseId(feedbackEntry.firebaseId);
      }
    });

    return () => {
      fetchFeedback(); // Clean up the event listener when the component is unmounted
    };
  }, [database, feedbackId]);

  const confirmation =()=>{
    if (window.confirm("Are you sure?")){
      deleteFeedback()
    }
  }
  const deleteFeedback = () => {
    const feedbackRef = ref(database, `feedback`);

    remove(feedbackRef)
      .then(() => {
        navigate('/dashboard'); // Redirect to the dashboard after deletion
      })
      .catch((error) => {
        console.log('Error deleting feedback:', error);
      });
  };
  return (
    <div className='container'>
      <h2>Feedback Application</h2>
      <h3>Feedback {feedbackId}</h3>
      <p>{feedback}</p>
      <h3>Rating</h3>
      <label>{rating}</label>
      <button type='button'>
        <Link to='/dashboard'>Back</Link>
      </button>
      <button type='button' onClick={confirmation}>
        Delete
      </button>
    </div>
  );
};

export default View;
