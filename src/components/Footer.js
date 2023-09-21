//components/Footer.js

import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <section id='Footer' className="footer flex w-full p-6">
            <div className="footer-container flex flex-wrap justify-center w-full gap-4 p-4">
                <div className="footer-item w-full lg:w-1/4 p-4 text-center lg:order-1">
                    <a className='button blue-button' href='/images/pdf/resume.pdf' target="_blank">VIEW MY RESUME (CV)</a>
                </div>
                <div className="footer-item w-full lg:w-1/4 p-4 text-center order-last lg:order-2">
                    <p>&#169; 2023 All Rights Reserved. <br/>Site Designer/Developer: Dwyan Alford.</p>
                </div>
                <div className="footer-item w-full lg:w-1/4 p-4 text-center lg:order-3">
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};
  
export default Footer;