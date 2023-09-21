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
        title: "Discovering Dwyan",
        subTitle: "A creative problem-solver skilled in the art of transforming ideas into reality.",
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
        title: "Professional Journey",
        subTitle: "Elevating User Experiences through Code. Turning Ideas into Seamless Digital Solutions",
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
        subTitle: "I lived and went to school in 6 different countries by the time I was 14 years old.",
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
          large: { ...largeDevice, url: "/images/skills-image-large.jpg" },
          tablet: { ...tablet, url: "/images/skills-image-tablet.jpg" },
          mobile: { ...mobile, url: "/images/skills-image-mobile.jpg" },
        },
        title: "Crafting Proficiency",
        subTitle: "Explore the Palette of Skills That Shape My Digital Universe.",
        color: "white",
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
        title: "Most Recent Projects",
        subTitle: "Continuously learning and integrating new technologies like chatGPT and other AI tools.",
        color: "black",
        text: ""
      },
    ],
  },
];

export default heroData;