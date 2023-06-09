const largeDevice = { height: "600px", width: "1000px" };
const tablet = { height: "450px", width: "800px" };
const mobile = { height: "300px", width: "600px" };

const heroData = [
  {
    page: "Home",
    boxHeight: "100vh",
    content: [
      {
        image: {
          large: { ...largeDevice, url: "/images/home-background.jpg" },
          tablet: { ...tablet, url: "/images/home-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/home-image-mobile.jpg" },
        },
        title: "Dwyan is a",
        subTitle: "creative problem solver with a penchant for turning ideas into reality.",
        color: "white",
        text: ""
      },
    ],
  },
  {
    page: "Education",
    boxHeight: "100vh",
    content: [
      {
        image: {
          large: { ...largeDevice, url: "/images/education-background.jpg" },
          tablet: { ...tablet, url: "/images/education-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/education-image-mobile.jpg" },
        },
        title: "GWU Coding Bootcamp",
        subTitle: "Foundational step to learn building full stack apps in 2017",
        color: "white",
        text: ""
      },
    ],
  },
  {
    page: "Experience",
    boxHeight: "100vh",
    content: [
      {
        image: {
          large: { ...largeDevice, url: "/images/experience-background.jpg" },
          tablet: { ...tablet, url: "/images/experience-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/experience-image-mobile.jpg" },
        },
        title: "Continuous Learning",
        subTitle: "Always learning new ways of being more productive.",
        color: "black",
        text: ""
      },
    ],
  },
  {
    page: "Biography",
    boxHeight: "100vh",
    content: [
      {
        image: {
          large: { ...largeDevice, url: "/images/biography-background.jpg" },
          tablet: { ...tablet, url: "/images/biography-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/biography-image-mobile.jpg" },
        },
        title: "An Interesting Fact About Me",
        subTitle: "At 15 years old, I had already lived and went to school in six different countries.",
        color: "white",
        text: ""
      },
    ],
  },
  {
    page: "Skills",
    boxHeight: "100vh",
    content: [
      {
        image: {
          large: { ...largeDevice, url: "/images/skills-background.jpg" },
          tablet: { ...tablet, url: "/images/skills-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/skills-image-mobile.jpg" },
        },
        title: "Skill Comes with Time and Practice",
        subTitle: "See the breakdown of the technologies that I use.",
        color: "black",
        text: ""
      },
    ],
  },
  {
    page: "Projects",
    boxHeight: "100vh",
    content: [
      {
        image: {
          large: { ...largeDevice, url: "/images/projects-background.jpg" },
          tablet: { ...tablet, url: "/images/projects-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/projects-image-mobile.jpg" },
        },
        title: "What am I building now?",
        subTitle: "See my latest project below as well as past projects.",
        color: "black",
        text: ""
      },
    ],
  },
];

export default heroData;