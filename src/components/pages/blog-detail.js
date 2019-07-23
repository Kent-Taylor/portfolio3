import React, { Component } from 'react';
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        }
    }

    getBlogItem() {
        axios.get(`https://kenttaylor.devcamp.space/portfolio/portfolio_blogs/${this.state
        .currentId}`
        ).then(Response => {
            this.setState({
                blogItem: Response.data.portfolio_blog
            })
        }).catch(error =>{
            console.log("getBlogItem error", error)
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }
    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;

        console.log("currentId", this.state.currentId)
        return (
            <div className="blog-container">
                <div className="content-container">
                    <h1>{title}</h1>
                    <div className="featured-image-wrapper">
                        <img src={featured_image_url}></img>
                    </div>
                    <div className="content">{content}</div>
                </div>
            </div>
        );
    }
}