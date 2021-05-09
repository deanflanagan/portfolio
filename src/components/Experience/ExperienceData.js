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
import Adaptability from '../../assets/data-logos/adaptability.png'
import Collaboration from '../../assets/data-logos/collaboration.png'
import Education from '../../assets/data-logos/education.png'
import Product from '../../assets/data-logos/product.png'

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
          text: "Python? C'est ma langue maternelle. I first started with Python six years ago and love how it reads so well and can be applied to most applications. Click the image to see a CLI I made for betting on Major League Soccer with a Node.js (Express) backend.",
          url:"https://github.com/spankyf/soccer-betting"
        },
        {
          type: "Javascript",
          img: JS,
          text: "Initially, coming from OOP to Javascript was a shock. But once you render your first div the validation from seeing your work right there motivates to go further. My skill here is growing: both this and my main project are coded in React. I am happy to work in vanilla JS too though; check out this little metaphor maker server I made to help practice coming up with lyrics.",
          url:"https://github.com/spankyf/metaphorize"
        },
        {
          type: "SQL / NoSQL",
          img: SQL,
          text: "When I first began learning to code, I did everything in a vacuum and mostly through Pandas. So everything was stored in a csv. Thank heavens I eventually grew up and learned all about SQL. The link takes you to a course I took which helped my stop worrying and love writing queries and setting up databases in psql. Still not great with preventing injection yet.",
          url:"https://www.udemy.com/course/master-sql-for-data-science/"
        },
        {
          type: "Linux",
          img: Linux,
          text: "I migrated to using an Ubuntu system about 10 years ago. Honestly, the setup and lack of fiddling that comes with it converted me to the good church of FOSS and off the likes of Apple for life. The link takes you to a link showing how I managed to set up a Django scraping job on it. I am currently trying to convert the old girl to a home server.",
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
        type: "Education",
        img: Education,
        text: "Bachelors of Science in Chemistry from National University of Ireland, Galway",
        url:"www.netflix.com"
      },
      {
        type: "Collaboration",
        img: Collaboration,
        text: "Comfortable working across departements to achieve marketing, techncial goals",
        url:"www.netflix.com"
      },
      {
        type: "Adaptability",
        img: Adaptability,
        text: "I could live in a shoe: whatever my tools are, that's what I work with.",
        url:"www.netflix.com"
      },
      {
        type: "Product Management and Customer Satisfaction",
        img: Product,
        text: "Have worked with customers through a long B2B process and understand how to manage that. ",
        url:"www.netflix.com"
      },

    ],
  },
];

export default data;
