import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Tilt from "react-parallax-tilt";


export default class PortfolioItem extends Component {
  constructor(props) {
    super();

    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: 'image-blur' })
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: '' })
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      // <Tilt
      //   className="tilt"
      //   tiltEnable={true}
      //   scale={1}
      //   glareEnable={true}
      //   glareMaxOpacity={0.8}
      //   glareColor="#ffffff"
      //   glarePosition="bottom"
      // >
      <Link to={`/portfolio/${id}`}>

        <div
          className="portfolio-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >

          <div
            className={"portfolio-img-background " + this.state.portfolioItemClass}
            style={{
              backgroundImage: "url(" + thumb_image_url + ")"
            }}
          />

          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img src={logo_url} />
            </div>
            <div className="subtitle">{description}</div>
          </div>
        </div>

      </Link>
      // </Tilt>
    );
  }
}