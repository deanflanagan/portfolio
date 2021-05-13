import HTML from "../../assets/data-logos/html.png";
import Python from "../../assets/data-logos/python.png";
import JS from "../../assets/data-logos/javascript.png";
import SQL from "../../assets/data-logos/sql.png";
import Linux from "../../assets/data-logos/linux.png";
import ReactLogo from "../../assets/data-logos/react.png";
import Backend from "../../assets/data-logos/backend.png";
import Frontend from "../../assets/data-logos/frontend.png";
import Algo from "../../assets/data-logos/algo.png";
import Api from "../../assets/data-logos/api.png";
import Sales from "../../assets/data-logos/sales.png";
import Collaboration from "../../assets/data-logos/collaboration.png";
import Education from "../../assets/data-logos/education.png";

const data = [
  {
    skills: [
      {
        type: "Python",
        level: 90,
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
        type: "Javascript & Node.js",
        level: 70,
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

    skillBlurbs: [
      {
        type: "Python",
        img: Python,
        text: "Python? C'est ma langue maternelle. I first started with Python six years ago and love how it reads so well and can be applied to most applications. Click the image to see a CLI I made for betting on Major League Soccer with a Node.js (Express) backend.",
        url: "https://github.com/spankyf/soccer-betting",
      },
      {
        type: "Javascript",
        img: JS,
        text: "Initially, coming from OOP to Javascript was a shock. But once you render your first div with a JS function showing the time or something the validation from seeing your work right there motivates to go further. My skill here is growing: both this and my main project are coded in React. I am happy to work in vanilla JS too though; check out this little metaphor maker server I made to help practice coming up with lyrics.",
        url: "https://github.com/spankyf/metaphorize",
      },
      {
        type: "SQL / NoSQL",
        img: SQL,
        text: "When I first began learning to code, I did everything in a vacuum and mostly through Pandas. So everything was stored in a csv. Thank heavens I eventually grew up and learned all about SQL. The link takes you to a course I took which helped my stop worrying and love writing queries and setting up databases in psql. Still not great with preventing injection yet.",
        url: "https://www.udemy.com/course/master-sql-for-data-science/",
      },
      {
        type: "Linux",
        img: Linux,
        text: "I migrated to using an Ubuntu system about 10 years ago. Using it has converted me to the good church of FOSS and off the likes of Apple for life. The link takes you to a short video showing how to set up a CRON job to scrape using a Django app. I am currently trying to convert the old girl to a home server.",
        url: "https://www.youtube.com/watch?v=HR9GXzBSbJw&t=230s",
      },
      {
        type: "HTML & CSS",
        img: HTML,
        text: "Playing with these and adjusting to displays is essential for everyone doing web development of any kind. No examples but both this and my main projects' styling and html was all done by yours truly.",
        url: "#technical",
      },
      {
        type: "React",
        img: ReactLogo,
        text: "Both this and the Basebets site are made using React. I comfortable using effects, states and designing simple components and their associated lifecycles. Have to say their documentation and the community at large have made it easy to jump into using React and away from templating options like Pug or Django's templating system.",
        url: "#technical",
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
        type: "API/REST",
        level: 75,
      },
      {
        type: "Data/Algo",
        level: 65,
      },

      {
        type: "Frontend",
        level: 50,
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
        text: "One of the main reasons I enjoy this field is the mental problem solving side of it. I love working with Python here (but would be hoping to get more languages under my belt in time) and enjoy turning over and looking for routes to solve abstract problems. While my portfolio showcases web-dev, I have a lot of personal projects including work with statistics, modeling and the likes. Clicking on the icon will bring you to a simple but clever betting algorithm. A quick description is that it calculates all teams relative over- or under-performance vs market expectations over recent matches. Then - assuming the market is fairly accurate - it bets on teams who are due to 'bounceback' and get a result. It's profitable most seasons!.",
        url: "https://github.com/spankyf/soccer-betting/blob/master/make_bets.py",
      },
      {
        type: "Frontend",
        img: Frontend,
        text: "While backend is what I enjoy most, I do like to think through a business case for a website and say 'what functionalities does a user need to access?' And let's face it, nobody want's to be testing through Postman constantly. So I can get my UI/UX idea's across by now. React has made this easy for me. ",
        url: "#concepts",
      },
      {
        type: "Data Structures & Algorhthms",
        img: Algo,
        text: "As I mentioned above, I enjoy abstract problem solving. To that end, i've practiced on Leetcode a bit, and intend to go back for more to brush up on standard use cases for such algo's in industry. Click the logo and you'll be taken to a repo with both Python and Javascript solutions of some problems i've solved.",
        url: "https://github.com/spankyf/leetcode",
      },
      {
        type: "REST API Operations",
        img: Api,
        text: "As shown in the main project and a few examples on my Github, i'm comfortable building and using API's to perform CRUD operations. I've made them in Node.js and Django and understand the difference between the MVC style and Django's Views/Serializers setup.",
        url: "#concepts",
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
        type: "Collaboration",
        level: 70,
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
        text: "While initially a chemist, I have performed sales and BD for the last 8+ years. Sales is difficult, rewarding, and to experience and suceed in it really does set one up to conquer a lot of challenges like networking, building customer relationships and learning when to say no. You can view my extensive experience on my LinkedIn profile by clicking on the logo.",
        url: "https://ca.linkedin.com/in/dean-flanagan",
      },
      {
        type: "Education",
        img: Education,
        text: "I have a BSc Hons. Chemistry from National University of Ireland, Galway. Subjects studied include Organic, Physical, Analytical Chemistry as well as Statistics. But more than that, I am a lifelong learner. I mean, who picks up coding for 'fun'?",
        url: "https://www.nuigalway.ie/",
      },
      {
        type: "Collaboration",
        img: Collaboration,
        text: "Having worked in the lab with colleagues, conducting plant trials and demos in 20+ countries, negotiating agreements with customers, I come with a lot of collaborative experience and soft skills. One thing i'm particularly keen to learn is how projects are executed and how customers (internal and external) are included in that process. I look forward to adding value in this area also.",
        url: "#career",
      },
    ],
  },
];

export default data;
