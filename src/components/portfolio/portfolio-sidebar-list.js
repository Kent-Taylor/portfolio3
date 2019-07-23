import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb_img">
                    <img src={portfolioItem.thumb_image_url}></img>
                </div>

                <div className="text-content">
                    <h1 className="title">{portfolioItem.name}</h1>
                    
                    <div className="actions">
                    <a className="action-icon" onClick={() => props.handleEditClick(portfolioItem)}>
                    <FontAwesomeIcon icon="edit"/>
                    </a>
                    </div>

                    <a className="action-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
                    <FontAwesomeIcon icon="trash"/>
                    </a>
                </div>
            </div>
        )
    })

    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
}

export default PortfolioSidebarList;