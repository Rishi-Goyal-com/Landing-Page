export interface Project {
  title: string
  thumb: string
  full: string
  link: string
  linkLabel: string
}

export const projects: Project[] = [
  {
    title: 'Selva: AI Stylist',
    thumb: '/images/thumbs/09.png',
    full: '/images/fulls/09.png',
    link: 'https://meetselva.com',
    linkLabel: 'Try it live',
  },
  {
    title: 'Live Aquaria',
    thumb: '/images/thumbs/07.png',
    full: '/images/fulls/07.png',
    link: 'https://live-aquaria.onrender.com/',
    linkLabel: 'Link',
  },
  {
    title: 'Workout Scheduler',
    thumb: '/images/thumbs/08.png',
    full: '/images/fulls/08.png',
    link: 'https://workoutscheduler-frontend.onrender.com/signin',
    linkLabel: 'Link',
  },
  {
    title: 'FitB ChatBot',
    thumb: '/images/thumbs/04.png',
    full: '/images/fulls/04.png',
    link: 'https://www.youtube.com/watch?v=UrpPUo7k7cM&t=11s',
    linkLabel: 'YouTube Link',
  },
]
