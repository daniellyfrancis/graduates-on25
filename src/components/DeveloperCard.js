import React from 'react';
import { Tilt } from 'react-tilt';
import './DeveloperCard.css';
import githubImage from '../assets/img/github.png';
import linkedinImage from '../assets/img/linkedin.png';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="developer-card">
      <div>
        <Tilt>
        <img className="img-profile" src={developer.image} alt={developer.name} />
        </Tilt>
          <h2>{developer.name}</h2>
          <h5>{developer.area}</h5>
          <div className="social-media">
            <div className='github-image'>
              <a href={developer.github} target="_blank">
                <img src={githubImage} />
              </a>
            </div>
            <div className='linkedin-image'>
              <a href={developer.linkedin} target="_blank">
                <img src={linkedinImage} />
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DeveloperCard;