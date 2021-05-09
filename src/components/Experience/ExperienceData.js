import React from "react";
import HTML from '../../assets/data-logos/html.png'
import Python from '../../assets/data-logos/python.png'
import JS from '../../assets/data-logos/javascript.png'
import SQL from '../../assets/data-logos/sql.png'
import Linux from '../../assets/data-logos/linux.png'
import ReactLogo from '../../assets/data-logos/react.png'
import Backend from '../../assets/data-logos/backend.png'
import Frontend from '../../assets/data-logos/frontend.png'
import Algo from '../../assets/data-logos/algo.png'
import Api from '../../assets/data-logos/api.png'
import Sales from '../../assets/data-logos/sales.png'

const data = [
  {
    skills: [
      {
        type: "Python",
        level: 100,
      },
      {
        type: "Javascript & Node.js",
        level: 70,
      },
      {
        type: "SQL",
        level: 80,
      },
      {
        type: "Linux OS",
        level: 80,
      },
      {
        type: "React",
        level: 60,
      },
      {
        type: "HTML/CSS",
        level: 50,
      },
    ],
    colours: {
      bar: "#3498db",
      title: {
        text: "#fff",
        background: "#2980b9",
      },
    },
    title: "Technical",
    tag: "#technical",
    // image: HTML,
    // link: "www.google.com",
 
      skillBlurbs: [
        {
          type: "Python",
          img: Python,
          text: "It all started with a gigantic excel file...",
          url:"www.google.com"
        },
        {
          type: "Javascript",
          img: JS,
          text: "I learned the language of the web because, well one has to don't they?",
          url:"www.netflix.com"
        },
        {
          type: "SQL / NoSQL",
          img: SQL,
          text: "No DB = no pants.",
          url:"www.netflix.com"
        },
        {
          type: "Linux",
          img: Linux,
          text: "To paraphrase Jagger 'A software engineer can't be a software engineer if he doesn't smoke the same sudo as me'",
          url:"www.netflix.com"
        },
        {
          type: "HTML & CSS",
          img: HTML,
          text: "Playing with these and adjusting to displays is essential for everyone purporting to do web development.",
          url:"www.netflix.com"
        },
        {
          type: "React",
          img: ReactLogo,
          text: "I started wth React a little while ago and love it. Web development simplifiee..",
          url:"http://www.netflix.com"
        },

      ],
    },
  {
    skills: [
      {
        type: "Backend",
        level: 80,
      },
      {
        type: "Frontend",
        level: 50,
      },
      {
        type: "Data/Algo",
        level: 90,
      },
      {
        type: "API/REST",
        level: 75,
      },
    ],
    colours: {
      bar: "9ccc9b",
      title: {
        text: "#fff",
        background: "#2980b9",
      },
    },
    title: "Concepts",
    tag: "#concepts",
    skillBlurbs: [
      {
        type: "Backend",
        img: Backend,
        text: "This is where I can add value right away",
        url:"www.google.com"
      },
      {
        type: "Frontend",
        img: Frontend,
        text: "My frontend skills are at a formative stage still.",
        url:"www.netflix.com"
      },
      {
        type: "Data Structures & Algorhthms",
        img: Algo,
        text: "I enjoy this.",
        url:"www.netflix.com"
      },
      {
        type: "RESTful API Operations",
        img: Api,
        text: "So Cool!",
        url:"www.netflix.com"
      },

    ],
  },
  {
    skills: [
      {
        type: "B2B Sales",
        level: 90,
      },
      {
        type: "Education",
        level: 90,
      },
      {
        type: "Mgmt.",
        level: 70,
      },
      {
        type: "Prod. Dev.",
        level: 60,
      },
      {
        type: "Adaptability",
        level: 90,
      },
    ],
    colours: {
      bar: "9ccc9b",
      title: {
        text: "#fff",
        background: "#2980b9",
      },
    },
    title: "Career",
    tag: "#career",
    skillBlurbs: [
      {
        type: "B2B Sales",
        img: Sales,
        text: "Touch my BASE",
        url:"www.google.com"
      },
      {
        type: "Javascript",
        img: JS,
        text: "I learned the language of the web because, well one has to don't they?",
        url:"www.netflix.com"
      },

    ],
  },
];

export default data;
