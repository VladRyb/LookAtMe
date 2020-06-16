import React from "react";

export default function DressCarouselHeader({itemsArray,title}) {

  const items = itemsArray.map((el) => {
    return(
    <option>{el}</option>
    )
  });
 
  return (
    <div className="carouselHeader">
    <span>{title}</span>
    <select className='select select btn btn-secondary btn-sm dropdown-toggle'>
      {items}
    </select>
    </div>
  );
}
