import Head from 'next/head';
import Home from "./marketplace";
import Link from 'next/link';

import Navbar from './Navbar';


const style = {
  wrapper: `relative `,
  container: ` mx-auto p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`,
  button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text-[#282b2f] font-semibold mt-4`,
  cardsize: `px-6 py-1`,
  bigFont: `text-[#D37506]-700 font-bold text-xl mb-2`,
  smallFont: `text-gray-700 text-base`,
  bigButton: `text-white text-[23px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-6 text-center mr-1 mb-1`,
};

function Market() {
  return (
    <div className="mrkt py-12">
      <Navbar/>
      <div>Heyyy</div>
      <Navbar/>
      <div className="mrkt `{style.wrapper}`">
       <h1>Heyyy</h1>
   
        <nav className={`${style.container} border-b p-10`}>
       
          <p className="text-5xl py-12 text-white font-medium"> Hub</p>
          <Home/>
        </nav>
      </div>
    </div>
  );
}

export default Market;
