import React from 'react';
import 'remixicon/fonts/remixicon.css';
import beyond from '../../assets/images/beyond.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);

  const handleClick = () => {
    console.log(handleClick);
    console.log('Before handleClick:', isBookmarkActive);

    setIsBookmarkActive((prevIsBookmarkActive) => !prevIsBookmarkActive);
    // Toggle the isActive state when the icon is clicked
  };

  useEffect(() => {
    console.log('Updated State:', isBookmarkActive);
  }, [isBookmarkActive]);

  return (
    <nav>
      <div className="nav-icon1">
        <span className="colored-icon">
          <i class="ri-clapperboard-fill"></i>
        </span>
        <div className="nav-icon2">
          <span className="mark">
            <i onClick={() => navigate('/')} class="ri-layout-grid-fill"></i>
          </span>
          <span className="mark">
            <i class="ri-film-fill"></i>
          </span>
          <span className="mark">
            <i class="ri-tv-line"></i>
          </span>
          <span className="mark">
            <i
              onClick={() => {
                handleClick();
                navigate('/bookmarked');

                console.log('Before handleClick:', isBookmarkActive);

                console.log('After handleClick:', isBookmarkActive);
              }}
              style={{ backgroundColor: isBookmarkActive ? 'red' : 'initial' }}
              className="ri-bookmark-fill"
            ></i>
          </span>
        </div>
      </div>
      <div className="image-circle">
        <img src={beyond} alt="" />
      </div>
    </nav>
  );
};

export default NavigationBar;
