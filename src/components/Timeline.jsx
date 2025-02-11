import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const Timeline = () => {
  const timelineEvents = [

    
    {
      date: 'Our First Date',
      title: 'A Magical Moment',
      description: 'We talked for hours, and time seemed to stand still. Your smile lit up the entire room.',
      icon: '🌟'
    },
    {
      date: 'The Day We Met',
      title: 'Our Beautiful Beginning',
      description: 'The first time I saw you, my heart skipped a beat. I knew you were someone special.',
      icon: '💝'
    },
    {
      date: 'First Trip Together',
      title: 'Adventure Begins',
      description: 'Explored Daringbadi, new places with you made me realize how amazing life can be when shared with the right person.',
      icon: '✈️'
    },
  
    {
      date: 'Today',
      title: 'Still Falling in Love',
      description: 'Every day with you is a new reason to fall in love all over again.',
      icon: '❤️'
    }
  ];

  return (
    <section className="timeline-section section">
      <h2 className="section-title">Our Love Story</h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VerticalTimeline>
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={event.date}
              icon={<span className="timeline-icon">{event.icon}</span>}
              iconStyle={{ 
                background: 'white',
                color: '#ff758c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>

      <motion.p 
        className="timeline-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Every moment with you is a precious chapter in our story, Kaju. 
        Here's to writing many more beautiful chapters together. ❤️
      </motion.p>
    </section>
  );
};

export default Timeline;
