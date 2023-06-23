import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import './Dashboard.css';

const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const database = getDatabase();
    const feedbackRef = ref(database, 'feedback');

    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const feedbackArray = Object.values(data);
        setFeedbackList(feedbackArray);
      } else {
        setFeedbackList([]);
      }
    });
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign out successful
        navigate('/login'); // Redirect to login page after sign out
      })
      .catch((error) => {
        console.log('Error signing out:', error);
      });
  };

  return (
    <div className='container'>
      <h2>Feedback Application</h2>
      <h4>Hello, Email</h4>
      <button type='button' onClick={handleSignOut}>
        Sign out
      </button>
      <br />
      <div className='scrollable'>
        <ul>
          {feedbackList.map((feedback, index) => (
            <li key={index}>
              Feedback {index + 1}
              <button className='view'>
                <Link to={`/view/${index + 1}`}>View</Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <button type='button'>
        <Link to='/add'>Add new</Link>
      </button>
    </div>
  );
};

export default Dashboard;
