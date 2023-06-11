// data/templateData.js
const templateData = [
    {
      page: "HomePage",
      boxHeight: "500px",
      content: [
        {
          image: {
            large: { url: "large_image_url_1", height: "height", width: "width" },
            tablet: { url: "tablet_image_url_1", height: "height", width: "width" },
            mobile: { url: "mobile_image_url_1", height: "height", width: "width" }
          },
          title: "Your title here for home page",
          subTitle: "Your subtitle here for home page",
          color: "black",
          text: "Your text here for home page"
        },
        // add more sections as needed
      ]
    },
    {
      page: "AboutPage",
      boxHeight: "500px",
      content: [
        {
          image: {
            large: { url: "large_image_url_2", height: "height", width: "width" },
            tablet: { url: "tablet_image_url_2", height: "height", width: "width" },
            mobile: { url: "mobile_image_url_2", height: "height", width: "width" }
          },
          title: "Your title here for about page",
          subTitle: "Your subtitle here for about page",
          color: "black",
          text: "Your text here for about page"
        },
        // add more sections as needed
      ]
    },
    // add more pages as needed
  ]
  
  export default templateData;
  