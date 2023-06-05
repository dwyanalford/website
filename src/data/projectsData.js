const projectsData = [
    {
      title: "Portfolio Site",
      type: "Individual Project",
      buttonColor: "button-gold",
      date: "", // you will fill this out
      descriptions: [
        "This portfolio website is a testament to my skills and experience in front-end and back-end development. By using the latest tools and technologies, I was able to create a website that is fast, responsive, and optimized for performance.",
        "With my expertise in React, Next JS, Java, Javelin, and JDBC, I am confident in my ability to develop high-quality software solutions that meet the needs of my clients.",
      ],
      technologies: "Java, JavaScript, CSS Flexbox, HTML, JSX, NextJS, PostGreSQL, Javalin, JBDC",
      link: "",
      videoId: null,
      caption: null,
      responsibilities: [],
    },
    {
      title: "Stacks on Stacks Capstone",
      type: "Team Project",
      buttonColor: "button-green",
      date: "", // you will fill this out
      descriptions: [
        "Testing an e-Commerce application. Our task for the Project  is to implement BDD with Selenium, Cucumber and TestNG/Junit to write End to End tests for the front end of the website.Test the backend endpoints using Postman, write a Startup and General.md file, and document testing (RTM, Test Case Design Document, Test Plan, Defect Report).",
        "We were to use Agile/Scrum methodologies as you work with your team to complete the tasks. Including but not limited to: Sprint Planning, Product Backlog, Sprint Backlog, Daily Standups, Sprint Review and Sprint Retrospective. You will use Trello for management of your sprints.",
      ],
      technologies: "Gherkin, Cucumber, Selenium, Java, Agile-Scrum, Postman, JUnit",
      link: "",
      videoId: "M_3j9PRDN7c",
      caption: "Stacks on Stacks Capstone Presentation (2:36)",
      responsibilities: [
        "Developed comprehensive test suites for a website, utilizing a range of tools and technologies to ensure efficient and effective testing.",
        "Wrote Cucumber/Gherkin feature files and Java code for Selenium End-2-End tests, covering key functionalities such as displaying products, searching for products, and creating, updating, and deleting products.",
        "Developed a runner class using JUnit to manage and execute End-2-End tests.",
        "Automated black-box testing for the website's Products Controller API endpoints, including Product Search -GET, Display - GET, Create- POST, Update, and Delete Products, utilizing Postman.",
        "Ensured that the website's functionalities were thoroughly tested and that any issues were identified and addressed before deployment.",
      ],
    },
    {
        title: "MicroBlaug - Microblogging Site",
        type: "Team Project",
        buttonColor: "button-green",
        date: "", // you will fill this out
        descriptions: [
          "The Project is designed to help solve the issue of cluttered blogging sites. After signing up, users can login, write posts, view/comment other user posts and see time stamps for activities. The front end is a single page application comprised of HTML, CSS and JavaScript. The backend consists of API endpoints that handle user requests using Java, Javalin and JDBC.",
          "The database uses Postgres as a vendor and is hosted on Google Cloud Platform. User First Name, Last Name, ID and Comments are stored on a persistent database. The database is constantly updated by user input. A feed displays on the webpage with data pulled from the database.",
        ],
        technologies: "Javalin, Java, JavaScript, Selenium, Cucumber, Gherkin, HTML, CSS, JUnit, DevOps, SQL, Agile-Scrum",
        link: "",
        videoId: "eRPjnGCfNXc",
        caption: "Microblogging Site Presentation (3:37)",
        responsibilities: [
          "Developed and wrote the code for Gherkin/Cucumber feature files and step implementation files to facilitate End-to-End Testing.",
          "Adhered to Test-Driven Development (TDD) and Behavior-Driven Development (BDD) methodologies to create a Requirements Traceability Matrix (RTM), Test Case Design Document, and Defect Reports.",
          "Utilized HTML, CSS, and JavaScript to design and develop the front-end for the home page post/comments feature",
          "Implemented Java, JBDC, DBeaver, and PostgresSQL to establish the backend web API and database connectivity.",
        ],
      },
      {
        title: "BugCatcher",
        type: "Individual Project",
        buttonColor: "button-gold",
        date: "", // you will fill this out
        descriptions: [
          "Exciting news! A team of talented developers has recently completed a prototype of a new Test Case and Bug Reporting management system for internal use. While the application's many features are incomplete, the team has made significant progress, creating a functional application that lacks styling. The team also expects the application to have visual and logical bugs.",
          "To address this, I have been tasked with testing the application and writing automation tests to facilitate rapid regression testing in future sprints. While I won't have access to the source code, I have been provided with a version of the application running in a dev environment, including access to the underlying API",
        ],
        technologies: "Java, Selenium, Agile-Scrum",
        link: "",
        videoId: null,
        caption: null,
        responsibilities: [
          "Created a Requirements Traceability Matrix to match business requirements with features to be tested.",
          "Created a Test Case Document showing all features, scenarios, steps tested and the results.",
          "Created a Defect report for all tests - tracking bugs and documenting them according to their priority.",
          "Wrote and implemented Automated End-2-End tests with Java, Selenium and Cucumber with the Gherkin feature files provided.",
          "Presented the final results in front of a panel, showed my automated testing in action and fielded all questions they had regarding my testing.",
        ],
      },
    ];
    
    export default projectsData;
      