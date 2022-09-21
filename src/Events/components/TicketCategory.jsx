import React from "react";
import Button from "../../components/Button";
import "./TicketCategory.css";

function TicketCategory({ name, price, availableTicket }) {
  return (
    <div className="ticket-wrapper">
      <div className="ticket-type">
        <div className="ticket-color"></div>
        <div className="ticket-type-title">{name}</div>
      </div>
      <p ticket-price>{price}</p>
      <div className="quantity-container">
        <p className="quantity">Quantity</p>
        <div className="quantity-counter">
          <p className="available-ticket">{availableTicket}</p>
          <p className="ticket-input"></p>
        </div>
      </div>
      <div className="get-ticket">
        <Button title={"Get Ticket"} variation="secondary" />
      </div>
    </div>
  );
}

export default TicketCategory;
