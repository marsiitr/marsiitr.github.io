import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { achievements } from './api/achievements';
import '../styles/Achievements.css'; 
import ParticlesComponent from './particles.js';

const AchievementCard = ({ achievement }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={achievement.date}
    iconStyle={{ background: achievement.iconBg }}
    icon={
      <div className='achievement-icon-container'>
        <img src={achievement.icon} alt={achievement.event_name} className='achievement-icon' />
      </div>
    }
  >
    <div>
      <h3 className='achievement-card-title'>{achievement.title}</h3>
      <p className='achievement-card-event'>{achievement.event_name}</p>
    </div>
    <ul className='achievement-card-points'>
      {achievement.points.map((point, index) => (
        <li key={`achievement-point-${index}`} className='achievement-card-point'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Achievements = () => {
  return (
    <div className='achievements-page'>
      <ParticlesComponent id="tsparticles" />
      <div className='achievement-main'>
        <h2 className='achievement-title'>Achievements</h2>
      </div>
      <div className='achievement-list'>
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Achievements;
