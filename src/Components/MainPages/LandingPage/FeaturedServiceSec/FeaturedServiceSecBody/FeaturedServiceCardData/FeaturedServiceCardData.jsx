import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../../../../../Helpers/FormatPrice';

export const FeaturedServiceCardData = (ServiceCardData) => {
  const {id , name , price , image , category} = ServiceCardData;
//   console.log('Getting Data', ServiceCardData);
  return (
  <NavLink to={`/Service/${id}`}>

    <div  className='FeaturedService-1'>
                        <div className='FeaturedService1-Image'>
                            <div className='FeaturedService1-ImgShadow'></div>
                            <div className='FeaturedService1Img-Footer'>
                                <div className='FeaturedService1Img-FooterContent'>
                                    <h4 className='FeaturedService1Img-ContentHead'>{name}</h4>
                                    <p className='FeaturedService1Img-ContentBody'><FormatPrice price={price}/></p>
                                </div>
                                <NavLink to="/Cart">
                                <svg className='FeaturedService1-ImgIcon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.2092 0H8.89634C3.54801 0 0.359589 3.255 0.359589 8.715V21.27C0.359589 26.745 3.54801 30 8.89634 30H21.1946C26.5429 30 29.7313 26.745 29.7313 21.285V8.715C29.746 3.255 26.5576 0 21.2092 0ZM20.9301 16.125H16.1548V21C16.1548 21.615 15.6552 22.125 15.0528 22.125C14.4504 22.125 13.9508 21.615 13.9508 21V16.125H9.17551C8.57309 16.125 8.07352 15.615 8.07352 15C8.07352 14.385 8.57309 13.875 9.17551 13.875H13.9508V9C13.9508 8.385 14.4504 7.875 15.0528 7.875C15.6552 7.875 16.1548 8.385 16.1548 9V13.875H20.9301C21.5325 13.875 22.0321 14.385 22.0321 15C22.0321 15.615 21.5325 16.125 20.9301 16.125Z" fill="white"/>
                                </svg>
                                </NavLink>

                            </div>
                            <img className='FeaturedService1-Img' src={image} />
                            
                        </div>
                    </div>
  </NavLink>
  )
}

export default FeaturedServiceCardData;