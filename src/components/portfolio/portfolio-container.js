import React, { Component } from "react";
import axios from "axios";
import Tilt from "react-parallax-tilt";
import wordArt from "../../../backgrounds/wordArtPortrait.png";


import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://kenttaylor.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("eCommerce")}
          >
            eCommerce
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Scheduling")}
          >
            Scheduling
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Enterprise")}
          >
            Enterprise
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="portfolio-home-header">
          <img src={wordArt} alt="" />
          {/* <div className="css-typing">

<p>Kent is a Lead Instructor for ThriveDx and Varsity Tutors!</p>
<p>He is certified in Information Technology, Full Stack Development,</p>
<p>Business Web Design and Computer Technology. He has been</p>
<p>teaching since 2020 at various boot camps and building</p>
<p>websites and mobile applications from small companies to</p>
<p>bigger companies such as 1800Contacts. Kent is from</p>
<p>TN where he lives with his sweet wife, two</p>
<p>little girls and a puppy (of whom is the</p>
<p>best little cuddle-bug).</p>
</div> */}
          {/* <div className="css-typing">
            <p>Hi, I'm Kent and i'm a Web and Mobile Developer</p>
            <p>I love to create sites and apps that show</p>
            <p>clean, powerful functions with simple designs.</p>
            <p>Core Competency: Technology for problem solving.</p>
          </div> */}

          <div className="temp-header">
          Kent is a Lead Instructor for ThriveDx and Varsity Tutors! He is certified in Information Technology, Full Stack Development, Business Web Design and Computer Technology. He has been teaching since 2020 at various boot camps and building websites and mobile applications from small companies to bigger companies such as 1800Contacts. Kent is from Knoxville TN where he lives with his sweet wife, two little girls and a puppy (of whom is the best little cuddle-bug).
          </div>
          <div className="header-container">
            <Tilt
              className="parallax-effect-swirly"
              tiltEnable={false}
              scale={1}
              perspective={100}
              glareEnable={false}
              transitionSpeed={1500}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
            >
              <div className="hoja">
                <p className="myName">Kent Taylor</p>
              </div>
            </Tilt>
          </div>
        </div >
        <div className="portfolio-items-wrapper">

          {this.portfolioItems()}

        </div>
      </div >
    );
  }
}