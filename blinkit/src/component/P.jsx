import React, { useState } from 'react';

export default function P() {
  const [data1, setData1] = useState([
    {
      url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      name: "Amul Gold Full Cream Fresh Milk",
      qty: "500 ml",
      price: "₹33"
    },
    {
      url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      name: "Amul Taaza Toned Fresh Milk",
      qty: "500 ml",
      price: "₹27"
    },
    {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
        name: "Amul Masti",
        qty: "400 ml",
        price: "₹35"
    },
    {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
        name: "Amul masti",
        qty: "200 ml",
        price: "₹23"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
        name: "Amul Salted Butter",
        qty: "100 ml",
        price: "₹60"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/170a.jpg?ts=1704366792",
        name: "Amul Cheese Cubes",
        qty: "200 ml",
        price: "₹20"
      },
  ]);

  const [data2, setData2] = useState([
    {
      url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
      name: "Cheetos cheez puffs",
      qty: "28 g",
      price: "₹10"
    },
    {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
        name: "Cheetos cheez puffs",
        qty: "28 g",
        price: "₹10"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
        name: "Cheetos cheez puffs",
        qty: "28 g",
        price: "₹10"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
        name: "Cheetos cheez puffs",
        qty: "28 g",
        price: "₹10"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
        name: "Cheetos cheez puffs",
        qty: "28 g",
        price: "₹10"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985",
        name: "Cheetos cheez puffs",
        qty: "28 g",
        price: "₹10"
      },

  ]);

  const [data3, setData3] = useState([
    {
      url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
      name: "Center Fresh Sugar Free Candy",
      qty: "350 g",
      price: "₹10"
    },
    {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
        name: "Center Fresh Sugar Free Candy",
        qty: "350 g",
        price: "₹10"
      },
      {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
        name: "Center Fresh Sugar Free Candy",
        qty: "350 g",
        price: "₹10"
      }, {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
        name: "Center Fresh Sugar Free Candy",
        qty: "350 g",
        price: "₹10"
      }, {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
        name: "Center Fresh Sugar Free Candy",
        qty: "350 g",
        price: "₹10"
      }, {
        url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495586a.jpg?ts=1690813422",
        name: "Center Fresh Sugar Free Candy",
        qty: "350 g",
        price: "₹10"
      }, 
  ]);

  return (
    <div>
  {/* Data - 1 */}
  <h1 className="category-title">Dairy, Bread & Eggs</h1>
  
  <div className="product-grid">
    {data1 &&
      data1.map((element, index) => {
        return (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={element.url} alt={element.name} />
            </div>
            <div className="product-timer">
              <i className="ri-timer-line"></i>14 MINS
            </div>
            <div className="product-name">{element.name}</div>
            <div className="product-qty">{element.qty}</div>
            <div className="product-footer">
              <b className="product-price">{element.price}</b>
              <button className="add-button">ADD</button>
            </div>
          </div>
        );
      })}
  </div>

  {/* Data - 2 */}
  <h1 className="category-title">Snacks & Manchies</h1>
  
  <div className="product-grid">
    {data2 &&
      data2.map((element, index) => {
        return (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={element.url} alt={element.name} />
            </div>
            <div className="product-timer">
              <i className="ri-timer-line"></i>12 MINS
            </div>
            <div className="product-name">{element.name}</div>
            <div className="product-qty">{element.qty}</div>
            <div className="product-footer">
              <b className="product-price">{element.price}</b>
              <button className="add-button">ADD</button>
            </div>
          </div>
        );
      })}
  </div>

  {/* Data - 3 */}
  <h1 className="category-title">Mouth fresheners</h1>
  
  <div className="product-grid">
    {data3 &&
      data3.map((element, index) => {
        return (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={element.url} alt={element.name} />
            </div>
            <div className="product-timer">
              <i className="ri-timer-line"></i>15 MINS
            </div>
            <div className="product-name">{element.name}</div>
            <div className="product-qty">{element.qty}</div>
            <div className="product-footer">
              <b className="product-price">{element.price}</b>
              <button className="add-button">ADD</button>
            </div>
          </div>
        );
      })}
  </div>
</div>

  
  )
}