
const TemplatePage = () => {
    return (
      <>
      {/* <!-- Header section --> */}
<section className="bg-red-500 p-4 mx-auto flex justify-center sticky top-0 z-10">
  <div className="header flex justify-center bg-stone-600 p-4 w-full gap-1 ">
    <div className="w-1/12 p-4 bg-orange-300 text-center">Mobile</div>
    <div className="w-3/12 p-4 bg-orange-300 text-center">Avatar</div>
    <div className="w-6/12 p-4 bg-orange-300 text-center">Desktop</div>
    <div className="w-2/12 p-4 bg-orange-300 text-center">Contact</div>
  </div>
</section>

{/* <!-- Page Header section --> */}
<section className="bg-blue-500 text-white">
  <div className="flex flex-wrap justify-center">
    <div className="w-1/4 p-4 text-center">Page Header</div>
  </div>
</section>

{/* <!-- Hero section --> */}
<section className="bg-green-500 p-4 h-screen">
  <div className="flex flex-wrap relative">
    <div className="hero-image w-1/2 p-4">Background Image</div>
    <div className="hero-text absolute top-48 left-48">Foreground Text</div>
  </div>
</section>

{/* <!-- Content section --> */}
<section className="bg-yellow-500 p-4 mx-auto">
  <div className="flex flex-wrap w-full p-4 bg-amber-700 justify-center gap-14">
    <div className="p-4 bg-cyan-500 text-center" style={{width: '500px', order: 2}}>Content Image</div>
    <div className="p-4 bg-teal-500 text-center" style={{width: '600px', order: 1}}>Content Text</div>
  </div>
</section>

{/* <!-- Footer section --> */}
<section className="bg-purple-500 p-10">
  <div className="flex flex-wrap justify-center w-full gap-7">
    <div className="w-1/6 p-4 text-center bg-sky-300" style={{width: '500px'}}>Footer Item 1</div>
    <div className="w-1/6 p-4 text-center bg-sky-300" style={{width: '500px'}}>Footer Item 2</div>
    <div className="w-1/6 p-4 text-center bg-sky-300" style={{width: '500px'}}>Footer Item 3</div>
  </div>
</section>
      </>
    );
  };  

export default TemplatePage;