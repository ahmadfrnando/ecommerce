// eslint-disable-next-line no-unused-vars
import React from 'react';
import FooterLogo from '../../assets/logo.png';
import Banner from '../../assets/website/Footer-Pattern.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const BannerTag = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
};
const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
];

const Footer = () => {
  return (
    <div style={BannerTag} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              Nanshop
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aspernatur temporibus deleniti fugit consequuntur velit. Ex libero dignissimos nesciunt. Maiores recusandae praesentium consequatur?</p>
          </div>
          {/* Footer Links  */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.title} className="cursor-pointer hovber:text-primary hover:translate-x-1 duration-300 text-gray-200">
                      <span className="hover:text-primary duration-300">{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.title} className="cursor-pointer hovber:text-primary hover:translate-x-1 duration-300 text-gray-200">
                      <span className="hover:text-primary duration-300">{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className='mt-6'>
                <div className='flex items-center gap-3'>
                    <FaLocationArrow />
                    <p>Medan, Sumatera Utara</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaMobileAlt />
                    <p>+62 821-xxxx-xxxx</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
