import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Briefcase, GraduationCap, BookOpen, } from 'lucide-react';

const ExperienceTimeline = () => {
  const theme = {
    background: '#253242', // Dark Navy
    cardBg: '#1b2939',     // Slightly lighter navy for cards
    accent: '#a5711c',     // Gold/Orange accent
    textMain: '#ffffff',
    textSecondary: '#cbd5e1'
  };

  const timelineData = [
    {
      title: "Frontend Developer Intern",
      company: "Zeenopay nepal",
      description: "Building impactful digital experiences and optimizing performance.",
      date: "2025 - Present",
      icon: <Briefcase />,
    },
    {
      title: "Bachelor in Software Engineering",
      company: "Nepal College of Information Technology",
      description: "Focused on Full-stack development and College Projects.",
      date: "2021 - 2025",
      icon: <GraduationCap />,
    },
    {
      title: "+2 Science",
      company: "Liverpool International College",
      description: "Specialized in Physics, Mathematics and Computer Science.",
      date: "2019 - 2021",
      icon: <BookOpen />,
    },
    {
      title: "Secondary School (SEE)",
      company: "Mount Everest Boarding School",
      description: "Completed foundation schooling with honors.",
      date: "2018",
      icon: <School />,
    }
  ];

  return (
    <div style={{ backgroundColor: theme.background, color: theme.textMain, padding: '50px 0', minHeight: '80vh' }}>
      
      <style>{`
        .vertical-timeline::before {
          background: ${theme.accent} !important;
          opacity: 0.3;
        }
        .vertical-timeline-element-content {
          border: 1.5px solid ${theme.accent} !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
          border-radius: 12px !important;
        }
        .vertical-timeline-element-date {
          color: ${theme.textMain} !important;
          font-weight: 600;
        }
        @media only screen and (min-width: 1170px) {
          .vertical-timeline-element-content {
            width: 44% !important;
          }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', color: theme.textMain }}>My Journey</h2>
        <div style={{ height: '4px', width: '60px', background: theme.accent, margin: '10px auto' }}></div>
      </div>

      <VerticalTimeline animate={true} lineColor={theme.accent}>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: theme.cardBg, color: theme.textMain }}
            contentArrowStyle={{ borderRight: `7px solid ${theme.cardBg}` }}
            date={item.date}
            iconStyle={{ background: theme.background, color: theme.accent, boxShadow: `0 0 0 4px ${theme.accent}` }}
            icon={item.icon}
          >
            <h3 style={{ margin: 0, fontSize: '1.4rem', color: theme.textMain }}>{item.title}</h3>
            <h4 style={{ margin: '5px 0 15px 0', fontWeight: '400', color: theme.accent }}>{item.company}</h4>
            <p style={{ color: theme.textSecondary, fontSize: '0.95rem', lineHeight: '1.6' }}>
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;