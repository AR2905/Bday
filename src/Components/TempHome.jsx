import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TempHome.css";

const TempHome = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [stars, setStars] = useState([]);
    const [balloons, setBalloons] = useState([]);
    const [fadeOut, setFadeOut] = useState(false); // State to control page fade
    const navigate = useNavigate();

    useEffect(() => {
        // Show message and button with delays
        const messageTimeout = setTimeout(() => setShowMessage(true), 3000);
        const buttonTimeout = setTimeout(() => setShowButton(true), 5000);

        return () => {
            clearTimeout(messageTimeout);
            clearTimeout(buttonTimeout);
        };
    }, []);

    const handleButtonClick = () => {
        // Generate initial stars
        const newStars = Array.from({ length: 100 }).map(() => ({
            randomX: Math.random() * 100,
            randomY: Math.random() * 100,
            randomRotation: Math.random(),
        }));

        setStars(newStars);

        // Gradually generate balloons
        const interval = setInterval(() => {
            setBalloons((prev) => [
                ...prev,
                ...Array.from({ length: 5 }).map(() => ({
                    randomLeft: Math.random() * 100,
                    randomDelay: Math.random() * 2,
                    balloonColor: ["red", "blue", "yellow", "pink", "green"][
                        Math.floor(Math.random() * 5)
                    ],
                })),
            ]);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);

            // Trigger page fade-out effect
            setFadeOut(true);

            // Navigate after fade-out completes
            setTimeout(() => {
                navigate("/birthday"); // Redirect after fade transition
            }, 1000); // Delay redirect to match fade-out time
        }, 15000); // Ensure balloons have enough time to cover the screen

        setAnimate(true);
    };

    return (
        <div
            className={`relative overflow-hidden  flex flex-col items-center justify-center min-h-screen h-fit bg-pink-100 text-center min-w-screen fade-out ${fadeOut ? "hide" : ""}`}
            style={{ width: "100vw" }}
        >
            <h1 className="text-4xl font-bold text-pink-600">Hi :)</h1>
            {showMessage && (
                <p className="mt-4 text-lg text-gray-800">
                    Oops, this isn't the real surprise. Just kidding! 🎉
                </p>
            )}
            {showButton && (
                <button
                    onClick={handleButtonClick}
                    className="mt-6 px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg transition duration-300 relative z-20"
                >
                    Click Me
                </button>
            )}
            {animate && (
                <>
                    {/* Balloons floating upward */}
                    {balloons.map((balloon, index) => (
                        <div
                            key={index}
                            className="absolute animate-balloon z-50"
                            style={{
                                "--random-left": balloon.randomLeft,
                                "--random-delay": balloon.randomDelay,
                                "--balloon-color": balloon.balloonColor,
                            }}
                        >
                            🎈
                        </div>
                    ))}
                    {/* Stars spreading outward */}
                    {stars.map((star, index) => (
                        <div
                            key={index}
                            className="absolute animate-star"
                            style={{
                                "--random-x": star.randomX,
                                "--random-y": star.randomY,
                                "--random-rotation": star.randomRotation,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            ⭐
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default TempHome;
