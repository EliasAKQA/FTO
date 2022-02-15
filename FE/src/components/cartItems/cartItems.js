import React, { useEffect, useState } from 'react';
import "./cartItems.scss"
import Rock from "../shopItems/rock.png"


const CartItem = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // let myStorage = window.sessionStorage;
    // if (myStorage.getItem(`${props.name}`) == null){
    //   myStorage.setItem(`${props.name}`, count);
    // } else {
    //   setCount(()=>{
    //     myStorage.getItem(`${props.name}`);
    //   })
    // }

  }, []);


  // function addAmount(props) {
  //   document.getElementById(props.name).value = parseInt(document.getElementById(props.name).value) + 1;
  // }

  // function subtractAmount(props) {
  //     document.getElementById(props.name).value = parseInt(document.getElementById(props.name).value) - 1;
  // }

  function plus() {
    setCount((prev) => prev + 1);
  }
  function minus() {
    setCount((prev) => prev - 1);
  }
  return (
    <div className='cartHolder'>
      <div className='cart'>
        <div className='shopItemHolder'>
          <div className='shopItemlight'></div>
          <div className='shopItemIMG'>
            <div className='shopItemCircle'></div>
            <img className='shopItemRock' src={Rock} alt="rock" />
          </div>
          <p className='shopItemName'>{props.name}</p>
          <p className='shopItemPrize'>${props.price}</p>
          <div className='shopItemdark'></div>

        </div>
      </div>
      <div className='cartAmount'>
        <button className='buttonSubtract' onClick={minus} >&#8722;</button>
        <input className='cartAmountNumber' type="number" value={count} id={props.name} />
        <button className='buttonAdd' onClick={plus} >&#43;</button>
      </div>
    </div>
  );
};

export default CartItem;

