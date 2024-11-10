import React from 'react';
import './News.css';

export const MainNews = ({ date, imageX, title, description }) => (
    <div className="main-news">
        <div className="main-news-image">
            <img src={imageX} className="main-image" alt="Main News" />
        </div>
        <div className="main-news-details">
            <p className="main-date">{date}</p>
            <p className="main-title">{title}</p>
            <p className="main-description">{description}</p>
        </div>
    </div>
);

export const AdditionalNews = ({ date, image }) => (
    <div className="additional-news-item">
        <img src={image} alt="Additional News" className="additional-news-image" />
        <div className="additional-news-details">
            <p className="additional-date">{date}</p>
            <p className="additional-title">Lorem ipsum dolor sit amet,<br /> consectetur</p>
        </div>
    </div>
);

const News = ({ mainNews, additionalNews }) => (
    <div className="news-container">
        <div className="news-title">
            <h2>H2 TITLE ONE LINER</h2>
        </div>
        <div className="flex-container">
            {/* Main news on the left */}
            <MainNews
                date={mainNews.date}
                imageX={mainNews.imageX}
                title={mainNews.title}
                description={mainNews.description}
            />

            {/* Additional news items on the right */}
            <div className="additional-news-container">
                {additionalNews.map((newsItem) => (
                    <AdditionalNews
                        key={newsItem._id}
                        date={newsItem.date}
                        image={newsItem.image}
                    />
                ))}
            </div>
        </div>
        <div className="view-more-btn-container">
            <button className="view-more-btn">View All Notice & Events</button>
        </div>
    </div>
);

export default News;
