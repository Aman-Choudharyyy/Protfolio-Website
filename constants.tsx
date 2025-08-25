import React from 'react';
import type { Skill, Experience, Education, Project } from './types';

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dusty-blush dark:text-violet-glow flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.042m15.482 0l.07.042m-4.506 1.125a48.617 48.617 0 01-1.372 2.496m1.372-2.496a48.617 48.617 0 001.372 2.496m-1.372-2.496L12 11.25m-2.252-1.103L12 11.25m2.252-1.103L12 11.25m-2.252 1.103a2.99 2.99 0 00-1.372 2.496m1.372-2.496a2.99 2.99 0 011.372 2.496m0 0a2.99 2.99 0 01-2.744 0" />
    </svg>
);

const SpecializationIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dusty-blush dark:text-violet-glow flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622V9.75a11.99 11.99 0 00-1.004-4.248A11.959 11.959 0 0112 2.714z" />
    </svg>
);


export const PORTFOLIO_DATA = {
  name: "Aman Choudhary",
  title: "Defensive Security Specialist",
  about: [
    "I'm a final-year B.Tech Computer Science student with a deep passion for cybersecurity, particularly in defensive security strategies. My journey in tech has been driven by curiosity and a commitment to protecting digital assets.",
    "Specializing in threat detection, incident response, and security automation, I'm constantly learning and adapting to the evolving cybersecurity landscape."
  ],
  aboutSubtitle: "Passionate about cybersecurity and building secure digital environments",
  contact: {
    email: "aman.r.choudharyy@gmail.com",
    phone: "+91 9825228983",
    location: "Gandhidham, Gujarat",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    x: "https://x.com/",
  },
};

export const ABOUT_CARDS = [
  {
    icon: <EducationIcon />,
    title: "Education",
    subtitle: "B.Tech Computer Science",
    description: "Final year student focusing on cybersecurity and defensive security strategies.",
  },
  {
    icon: <SpecializationIcon />,
    title: "Specialization",
    subtitle: "Defensive Security",
    description: "Focused on threat detection, incident response, and security automation.",
  }
];

export const EXPERIENCE: Experience[] = [
    {
        company: "The Hacker's Meetup",
        role: "Core Member",
        period: "July 2024 - July 2025",
        description: "Lead the planning, coordination, and execution of monthly cybersecurity meetups focused on ethical hacking, malware analysis, red/blue teaming, and hands-on labs. Collaborate with fellow organizers and industry professionals to design technical workshops, facilitate knowledge sharing, and foster a growing community of cybersecurity enthusiasts and practitioners. Actively contribute to content curation, speaker outreach, and event logistics."
    },
    {
        company: "Thevaultofcodes",
        role: "Intern",
        period: "November 2023 - December 2023",
        description: "Completed a one-month internship focused on foundational cybersecurity concepts and practical skills. Gained hands-on experience in vulnerability assessment, basic penetration testing, network security, and threat identification. Developed a strong understanding of core cybersecurity principles, tools, and methodologies through guided projects, research tasks, and technical training. Strengthened analytical thinking and built a solid base for advanced security practices."
    }
];

export const EDUCATION: Education = {
    university: "Parul University",
    degree: "Bachelor's in Technology",
    period: "2022 - 2026",
    gpa: "7.0 GPA/CGPA"
};


export const SKILLS: Skill[] = [
  { name: "Network Security", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { name: "SIEM", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { name: "SOAR", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { name: "Digital Forensic", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10.5a.5.5 0 11-1 0 .5.5 0 011 0z" /></svg> },
  { name: "Incident Response", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> },
];

export const PROJECTS: Project[] = [
  {
    title: "Phishing Email Analyzer",
    description: "A Python-based tool to analyze email headers and content to detect phishing attempts. It extracts URLs, attachments, and sender information for threat intelligence.",
    imageUrl: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "Regex", "Threat Intelligence APIs"],
    sourceUrl: "https://github.com/",
  },
  {
    title: "Network Intrusion Detection System",
    description: "Developed a simple NIDS using Scapy and Python to monitor network traffic for suspicious patterns and potential intrusions, logging alerts for further analysis.",
    imageUrl: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "Scapy", "Pandas"],
    sourceUrl: "https://github.com/",
  },
  {
    title: "Vulnerability Scanner",
    description: "A script that scans a given IP address or range for open ports and known vulnerabilities using public vulnerability databases. Helps in identifying security weaknesses.",
    imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "Nmap", "CVE databases"],
    sourceUrl: "https://github.com/",
  },
  {
    title: "Log Analysis Dashboard",
    description: "Created a dashboard using ELK stack (Elasticsearch, Logstash, Kibana) to ingest, parse, and visualize security logs from various sources to identify security incidents.",
    imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["ELK Stack", "Filebeat", "Logstash"],
    liveUrl: "https://www.elastic.co/kibana/",
  },
];