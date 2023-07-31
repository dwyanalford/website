const projectsData = [
    {
      title: "My Portfolio Site",
      type: "Individual Project",
      buttonColor: "button-gold",
      date: "Current",
      descriptions: [
        "I built my portfolio website to showcase my skills as a Frontend Web Developer, this is just an informational app for now, so no need for databases or backend servers. Please note, I did import all the data into each page dynamically, fetching data from data files.",
      ],
      technologies: "NextJS, ReactJS, JSX, Node, Vanilla CSS Flexbox for styling, GIT, Github, Vercel.",
      link: "",
      videoId: null,
      caption: null,
      responsibilities: [],
      backupImage: "/images/project-3.jpg",
      backdrop: "/images/projects-backdrop-port.jpg",
    },
    {
      title: "Stacks on Stacks Capstone",
      type: "Team Project",
      buttonColor: "button-green",
      date: "", 
      descriptions: [
        "We tested an e-Commerce app, using BDD with Selenium, Cucumber, and TestNG/Junit for front-end End to End tests. Backend endpoints were tested with Postman. Agile/Scrum methodologies were followed with Trello for sprint management",
      ],
      technologies: "Gherkin, Cucumber, Selenium, Java, Agile-Scrum, Postman, JUnit",
      link: "",
      videoId: "M_3j9PRDN7c",
      caption: "Stacks on Stacks Capstone Presentation (2:36)",
      responsibilities: [
        "Wrote Cucumber/Gherkin feature files and Java code for Selenium End-2-End tests.",
        "Automated black-box testing for website's Products Controller API endpoints.",
      ],
      backupImage: "/images/project-2.jpg",
      backdrop: "/images/projects-backdrop-stacks.jpg",
    },
    {
        title: "MicroBlaug - Microblogging Site",
        type: "Team Project",
        buttonColor: "button-green",
        date: "", // you will fill this out
        descriptions: [
          "The project tackles cluttered blogging sites. Users can sign up, log in, write posts, view/comment on others' posts, and see timestamps. The app is designed as a single-page application to enhance user experience. The backend handles user requests and updates the database for a seamless and interactive blogging experience.",
        ],
        technologies: "Javalin, Java, JavaScript, Selenium, Cucumber, Gherkin, JUnit, SQL, Agile-Scrum",
        link: "",
        videoId: "eRPjnGCfNXc",
        caption: "Microblogging Site Presentation (3:37)",
        responsibilities: [
          "Wrote Cucumber/Gherkin feature files and Java code for Selenium End-2-End tests.",
          "Designed user-friendly home page for posting and commenting.",
          "Developed backend web API with database connectivity.",
          "Documented in reports (RTM, Test Case Design Document, and Defect Reports).",
        ],
        backupImage: "/images/project-1.jpg",
        backdrop: "/images/projects-backdrop-micro.jpg",
      },
      {
        title: "BugCatcher",
        type: "Individual Project",
        buttonColor: "button-gold",
        date: "", // you will fill this out
        descriptions: [
          "Exciting news! Talented developers completed a prototype of a Test Case and Bug Reporting system. I will test the application and write automation tests to facilitate regression testing. Given a dev environment with API access, I'll address visual, logical bugs.",
        ],
        technologies: "Java, Selenium, Agile-Scrum",
        link: "",
        videoId: null,
        caption: null,
        responsibilities: [
          "Developed a comprehensive Test Case Document outlining tested scenarios, steps, and results.",
          "Generated a Defect Report for tracking and prioritizing identified bugs.",
          "Implemented Automated End-2-End tests using Java, Selenium, and Cucumber with Gherkin feature files.",
          "Presented the final results, demonstrating automated testing and addressing questions from a panel.",
        ],
        backupImage: "/images/project-4.jpg",
        backdrop: "/images/projects-backdrop-bug.jpg",
      },
    ];
    
    export default projectsData;
      