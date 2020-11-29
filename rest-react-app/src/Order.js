import React, { useContext } from "react";
import { StateContext } from "./context";
import "./Order.css";

function Order() {
  const { orders, setOrders } = useContext(StateContext);
  
   
  const deleteItem = (deletedOrder) => {
   const newOrders = orders.filter(order => order !== deletedOrder);
   setOrders(newOrders)
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      {orders.length ? (
        <div>
          <form className="orderForm" onSubmit={handleSubmit}>
            <legend className="formName">My tasty journey:</legend>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <br></br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            <br></br>
            <label for="day">Date:</label>
            <input type="date" id="day" name="day" />
            <br></br>
            <ul className="orderContainer">
              {orders.map((order) => (
                <li className="orderLi">
                  <h4 className="orderTitle">{order}</h4>
                  <button className="deleteBtn" onClick={() => deleteItem(order)}>
                    &#10006;
                  </button>
                </li>
              ))}
            </ul>

            <input className="orderBtn" type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <h1 className="emptyOrder">No orders</h1>
      )}
    </div>
  );
}
export default Order;
