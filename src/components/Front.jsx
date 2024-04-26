import React, { useRef } from 'react';
import img1 from './nike.png';
import './Front.css';

import { FaArrowCircleDown } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";

import list from './Data';
import Cards from './Cards';
import shoe from './shoeimg.webp'
import Threed from './Threed';

const Front = ({handleClick}) => {
  const productspgRef = useRef(null);


  const handleScrollToProducts = () => {
    productspgRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div>
      
      <div className="frontpg">
        <div className="frontcontainer">
          <div className="container1">
            <h1 className='fronttitle'><span className='orange'>Sneakers</span> that speak your style</h1>
            <div className="searchbtn"><IoSearchCircleSharp /></div>
            
          </div>
          <div className="frontimg"><Threed/></div>
        </div>
        
      </div>
      <div className="downbtn" onClick={handleScrollToProducts}><FaArrowCircleDown /></div>
      <div className="productspg" ref={productspgRef}>
        <h1 className='h1'>Products</h1>
        <div className='products'>
          {list.map((item) => (
            <Cards item={item} key={item.id} {...item}  handleClick={handleClick}/>
          ))}
        </div>
      </div>
      <div className="aboutpg" > 
        <h1 className='h1'>About Us</h1>
        <div className="aboutcontainer">
          <img src={shoe}/>
        <p>
Discover style, comfort, and exclusivity at Sneaky, your go-to destination for the latest sneakers. Explore our curated collection of top brands and limited editions, ensuring every step is a statement of your unique style. Join Sneaky today and step into a world of authenticity and trendsetting sneaker culture..</p>
      </div>
      </div>
    </div>
  );
};

export default Front;
