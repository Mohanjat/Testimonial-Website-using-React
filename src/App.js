import logo from './logo.svg';
import Testimonials from './components/Testimonials'
import data from './data'
import './App.css';
import { useState } from 'react';

function App() {

  const [reviews,setReviews] = useState(data);

  return (
    <div className='app' >
      <div className='main_title'>
        <h1 className='title' >Our Testimonials</h1>
      </div>
      <div className='set_line'>

      </div>

      <Testimonials reviews = {reviews} ></Testimonials>

    </div>
  );
}

export default App;
