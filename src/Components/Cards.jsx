import React from 'react';
import './../styles/cards.css'
const CardComponent = () => {
    return (
        <div className="card-container mb-4">

            <ul className="card-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-10 justify-center z-50">
                <li className="card-card z-50 card-cards__item roll-in-blurred-right">
                    <div className="card__frame">
                        <div className="card__picture">
                            <img
                                src="https://image.flaticon.com/icons/svg/1496/1496034.svg"
                                alt=""
                                width="120"
                            />
                        </div>
                        <h2 className="card__title">🌟Success </h2>
                    </div>
                    <div className="card__overlay"></div>
                    <div className="card__content">
                        <h2 className='text-white card-head'>Success</h2>
                        <span className='text-white card-p'>
                            Happy Birthday! May your journey toward your dreams be filled with opportunities, achievements, and endless inspiration. You have the passion and the talent to conquer any challenge that comes your way. This year, may your hard work lead to breakthroughs that you’ve always dreamed of!
                        </span>
                    </div>
                </li>
                <li className="card-card z-50 card-cards__item slide-in-elliptic-top-fwd ">
                    <div className="card__frame">
                        <div className="card__picture">
                            <img
                                src="https://image.flaticon.com/icons/svg/1336/1336494.svg"
                                alt=""
                                width="120"
                            />
                        </div>
                        <h2 className="card__title">❤️Love</h2>
                    </div>
                    <div className="card__overlay"></div>
                    <div className="card__content">
                        <h2 className='card-head'>Love</h2>
                        <span className='card-p'>
                            Happy Birthday to someone who fills the world with love and kindness! May your year be filled with relationships that bring joy, support, and laughter to your life. Whether it’s with family, friends, or someone special, may you always be surrounded by people who truly value you.
                        </span>
                    </div>
                </li>
                <li className="card-card z-50 card-cards__item roll-in-blurred-left sm:col-span-2 lg:col-span-1">
                    <div className="card__frame">
                        <div className="card__picture">
                            <img
                                src="https://image.flaticon.com/icons/svg/478/478543.svg"
                                alt=""
                                width="120"
                            />
                        </div>
                        <h2 className="card__title">😊Joy</h2>
                    </div>
                    <div className="card__overlay"></div>
                    <div className="card__content">
                        <h2 className='card-head'>Joy</h2>
                        <span className='card-p'>
                            Happy Birthday! On your special day, I wish you warmth, love, and endless blessings. May this year bring you good health, inner peace, and the strength to rise above every challenge life may present. Your happiness means the world , and I hope every moment is filled with joy, positivity, and light that brightens even the darkest days. You are truly special, and you deserve all the beautiful moments life has to offer.
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CardComponent;
