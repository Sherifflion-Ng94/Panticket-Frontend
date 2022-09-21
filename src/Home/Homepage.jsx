import React from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";

import "./Homepage.css";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import BigCard from "../components/BigCard";

function Homepage() {
  return (
    <>
      <Navbar />
      <header className="home-header">
        <div className="header-text">
          <p className="text-content">Connect and get ticket to </p>
          <p className="text-content">events near you based on your</p>
          <p className="text-content">interest</p>
        </div>
      </header>
      <section className="events-section">
        <form className="search-form">
          <div className="search-input">
            <Input placeholder="Search Event" />
          </div>
          <div className="category-input">
            <Input placeholder="Category" />
          </div>
          <div className="form-btn">
            <Button title="Search Event" variation={"secondary"} />
          </div>
        </form>
        <div className="event-container">
          <p className="section-title">Events near you</p>
          <div className="events">
            <Card
              name="The Concert"
              image={"/images/image-1.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-2.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-3.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-4.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-5.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-6.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-7.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-8.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-9.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
          </div>
        </div>
        <div className="event-container">
          <p className="section-title">Featured Events</p>
          <div className="featured-section">
            <BigCard
              name="The Concert"
              image={"/images/Featured-image1.png"}
              location="Gbagada, Lagos on October, 2022"
              price="N200,000"
              discount="Get 20% Off"
            />
            <BigCard
              name="The Concert"
              image={"/images/featured-image2.png"}
              location="Gbagada, Lagos on October, 2022"
              price="N200,000"
              discount="Get 20% Off"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
