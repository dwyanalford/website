//components/Template.js

// please note that the colors here added as classes are only for the template page so that the <divs> can be identified
// when using code from this template remember to remove the color classes below

const TemplatePage = () => {
    return (
      <>
      {/* <!-- Header section --> */}
<section className="header flex justify-center p-4 mx-auto sticky top-0 z-10 red">
  <div className="header-container flex justify-center p-4 w-full gap-1 green">
    <div className="header-item w-1/12 p-4 text-center orange">Header 1</div>
    <div className="header-item w-3/12 p-4 text-center orange">Header 2</div>
    <div className="header-item w-6/12 p-4 text-center orange">Header 3</div>
    <div className="header-item w-2/12 p-4 text-center orange">Header 4</div>
  </div>
</section>

{/* <!-- Page Header section --> */}
<section className="page-title flex p-4 blue">
  <div className="page-title-container flex flex-wrap justify-center w-full p-4 green">
    <div className="page-title-item w-full p-4 text-center orange">Page Header Item</div>
  </div>
</section>

{/* <!-- Hero section --> */}
<section className="hero flex p-4 h-screen red">
  <div className="hero-container flex flex-wrap relative w-full p-4 green">
    <div className="hero-item w-full p-4 orange">Hero Item 1</div>
    <div className="hero-item absolute top-48 left-48 orange">Hero item 2</div>
  </div>
</section>

{/* <!-- Content section --> */}
<section className="content flex w-full mx-auto p-10 blue">
  <div className="content-container flex flex-wrap w-full justify-center p-4 gap-4 lg:gap-2 green">
    <div className="content-item p-4 text-center w-full lg:flex-1 orange">Content Item 1</div>
    <div className="content-item p-4 text-center w-full lg:flex-1 orange">Content Item 2</div>
  </div>
</section>

{/* <!-- Footer section --> */}
<section className="footer flex w-full p-6 red">
  <div className="footer-container flex flex-wrap justify-center w-full gap-4 p-4 green">
    <div className="footer-item w-full lg:w-1/4 p-4 text-center orange">Footer Item 1</div>
    <div className="footer-item w-full lg:w-1/4 p-4 text-center orange">Footer Item 2</div>
    <div className="footer-item w-full lg:w-1/4 p-4 text-center orange">Footer Item 3</div>
  </div>
</section>
      </>
    );
  };  

export default TemplatePage;