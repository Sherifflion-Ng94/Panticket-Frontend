import React from "react";
import "./Content.css";
import TicketCategory from "./TicketCategory";

function Content() {
  return (
    <section className="main-container">
      <div className="event-content-container">
        <div className="event-info">
          <p className="info-title">Event Description</p>
          <p className="info-description">
            The play, "Pelumi," is a musical love story that revolves around
            Pelumi, a woman who was in a relationship with Adigun, a man with
            direction and purpose, but felt pressured by her mother to find love
            with someone else because of her mother's wealth and availability.
            You won’t want to miss this show on this year valentine.
          </p>
        </div>
        <div className="event-info">
          <p className="info-title">Date and Time</p>
          <p className="info-description">
            <p className="date">14th February, 2022</p>
            <p className="time">5PM Prompt</p>
          </p>
        </div>
        <div className="event-info">
          <p className="info-title">Venue</p>
          <p className="info-description">
            Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State
          </p>
        </div>
      </div>

      <div className="ticket-container">
        <p className="ticket-title">Get your Ticket</p>
        <div className="ticket-category">
          <TicketCategory
            name="VIP Ticket"
            price={"10,000"}
            availableTicket="10"
          />
        </div>
      </div>
    </section>
  );
}

export default Content;
