import React, { useState } from 'react';
import 'firebase/database';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, push } from 'firebase/database';
import { uid } from 'uid';

const Add = () => {
  const [fb, setFb] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const writeToDatabase = () => {
    const database = getDatabase();
    const feedbackRef = ref(database, 'feedback');
    const firebaseId = uid(); // Generate a unique Firebase ID

    const newFeedback = {
      firebaseId: firebaseId, // Store the Firebase ID along with the feedback data
      fb: fb,
      rating: rating,
    };

    push(feedbackRef, newFeedback)
      .then(() => {
        navigate('/tyadd');
      })
      .catch((error) => {
        console.log('Error writing to database:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fb || !rating) {
      setError('Please enter feedback and rating');
    } else {
      setError('');
      writeToDatabase();
    }
  };

  return (
    <div className='container'>
      <h2>Feedback Application</h2>
      <h4>Hello, Email</h4>
      <button type='button'>
        <Link to='/dashboard'>Back</Link>
      </button>
      <br />
      <form onSubmit={handleSubmit}>
        <div className='text-area'>
          <textarea
            placeholder='Write Feedback here'
            value={fb}
            onChange={(e) => {
              setFb(e.target.value);
            }}
          ></textarea>
        </div>
        <label>Rate Us</label>
        <div className='stars'>
          <label>
            <input
              type='radio'
              name='rating'
              value='1'
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            1
          </label>
          <label>
            <input
              type='radio'
              name='rating'
              value='2'
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            2
          </label>
          <label>
            <input
              type='radio'
              name='rating'
              value='3'
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            3
          </label>
          <label>
            <input
              type='radio'
              name='rating'
              value='4'
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            4
          </label>
          <label>
            <input
              type='radio'
              name='rating'
              value='5'
              checked={rating === '5'}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            5
          </label>
        </div>
        {error && <p className='error'>{error}</p>}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Add;
