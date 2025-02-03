import React, { useState, useEffect } from "react";
import "./../styles/birthday.css";
import Cake from "./../assets/card1.png";
import P1 from "./../assets/party1.png";
import Corner from "./../assets/corner.png";
import RightCorner from "./../assets/right-corner.png";
import CardComponent from "../Components/Cards";

export const Birthday = () => {
    const [frameIn, setFrameIn] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [cornersIn, setCornersIn] = useState(false);
    const [slide, setSlide] = useState(false);
    const [showNewSection, setShowNewSection] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false); // New state for image loading

    useEffect(() => {
        const frameTimeout = setTimeout(() => setFrameIn(true), 500);
        const fadeTimeout = setTimeout(() => setFadeIn(true), 1500);
        const cornersTimeout = setTimeout(() => setCornersIn(true), 1000);

        return () => {
            clearTimeout(frameTimeout);
            clearTimeout(fadeTimeout);
            clearTimeout(cornersTimeout);
        };
    }, []);

    const handleButtonClick = () => {
        setSlide(true);
        setTimeout(() => {
            setShowNewSection(true);
        }, 1000);
    };

    return (
        <>
            <div
                className={`decoration relative ${frameIn ? "top-0" : "-top-80"} ${slide ? 'slide-out-top' : ''} transition-all duration-700`}
            >
                <img src={P1} alt="Party Decoration" className="absolute top-0 right-0" />
                <img src={P1} alt="Party Decoration" className="absolute left-0 top-0" />
            </div>
            <section className="one relative min-h-screen h-fit min-w-screen">
                {!slide && (
                    <div
                        className={`absolute scroll-btn flex justify-center bottom-10 w-screen z-50 ${fadeIn ? "fade-in" : ""}`}
                        style={{
                            transform: "scale(0.6) rotate(270deg)",
                            height: "fit-content"
                        }}
                    >
                        <button onClick={handleButtonClick}>
                            <div className="indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                )}

                {!showNewSection && (
                    <div className={`birthday-page ${slide ? "slide-out-elliptic-top-bck" : ""} relative ${fadeIn ? "fade-in" : ""} w-screen min-h-screen h-fit flex items-center justify-center`}>
                        <div className="card">
                            <div className="imgBox">
                                <div className="bark"></div>

                                {/* Display Loading Animation Until Image Loads */}
                                {!imageLoaded && (
                                    <div className="loading-animation h-full w-full bg-[skyblue] flex justify-center items-center">
                                        <svg
                                            className="animate-spin h-10 w-10 text-gray-500"
                                            viewBox="0 0 50 50"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="25"
                                                cy="25"
                                                r="20"
                                                stroke="currentColor"
                                                strokeWidth="5"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="skyblue"
                                                d="M25 5a20 20 0 0110.61 2.94A2.5 2.5 0 1037 7.5 20 20 0 1125 5z"
                                            ></path>
                                        </svg>
                                    </div>
                                )}

                                <img
                                    src={Cake}
                                    alt="Birthday Cake"
                                    className={`transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>
                            <div className="details md:text-xl">
                                <p>Happy Birthday to my amazing best friend! 🎉</p>
                                <p>You deserve all the love, happiness, and joy in the world today and every day.</p>
                                <p>May your days be filled with laughter, love, and everything that makes you truly happy.</p>
                                <i>Bas itna hi, agar aur wishes chahiye, toh scroll karne ki mehnat karni padegi! 😜</i>
                                <p className="text-right">Friend :)</p>
                            </div>
                            <p className="align-end open" style={{ textAlign: "end" }}>
                                Open it :)
                            </p>
                        </div>
                    </div>
                )}

                {showNewSection && (
                    <div>
                        <div className="new-section fade-in-animation w-screen flex-col items-center justify-center">
                            <h1 className="font-bold relative text-animated text-3xl sm:text-5xl text-center my-8 mt-20 md:mt-40 text-yellow-800">
                                ✨ Wishes ✨
                            </h1>
                            <CardComponent />
                        </div>
                    </div>
                )}
            </section>

            <img
                src={Corner}
                alt="Party Decoration"
                className={`corners fixed left-0 bottom-0 w-32 md:w-60 transition-transform duration-700 ${cornersIn ? "translate-y-0 -translate-x-0" : "translate-y-full -translate-x-full"}`}
            />
            <img
                src={RightCorner}
                alt="Party Decoration"
                className={`corners fixed right-0 bottom-0 w-32 md:w-60 transition-transform duration-700 ${cornersIn ? "translate-y-0 translate-x-0" : "translate-y-full translate-x-full"}`}
            />
        </>
    );
};
