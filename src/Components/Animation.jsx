import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Animation = ({ setShowContent }) => {
    // const messages = [
    //     "Hey Virus :)",
    //     "Close your eyes...",
    //     "Just kidding, don't! Otherwise you won't be able to see what's coming...",
    //     "Something common for today is coming but in special way...!",
    //     "So something special is loading...!",
    // ];
    const messages = [

        "Hey, Vidhi! 😊",
        "Close your eyes for a moment...",
        "Just kidding! Don't do that—you might miss the surprise! 😄",
        "Today is a special day, and you deserve something truly unique...",
        "Hold on, something exciting is loading just for you! 🎉",
    ];


    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [messageCompleted, setMessageCompleted] = useState(false);

    // Variants for each letter to animate them one by one
    const letterVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom.letterIndex * 0.2,
                duration: 0.8
            },
        }),
    };

    // Add state to track letter animations
    const [lettersCompleted, setLettersCompleted] = useState(0);

    useEffect(() => {
        // Reset letters completed when message changes
        setLettersCompleted(0);
    }, [currentMessageIndex]);

    useEffect(() => {
        // Check if all letters in current message have completed
        if (lettersCompleted === messages[currentMessageIndex].length) {
            setTimeout(() => {
                setMessageCompleted(true);
                setLettersCompleted(0);
            }, 1000); // Wait a bit after last letter appears
        }
    }, [lettersCompleted, currentMessageIndex]);

    // Handle message changes
    useEffect(() => {
        if (messageCompleted && currentMessageIndex < messages.length - 1) {
            setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1);
                setMessageCompleted(false);
            }, 500);
        } else if (messageCompleted && currentMessageIndex === messages.length - 1) {
            setTimeout(() => {
                setShowContent(true);
            }, 1000);
        }
    }, [messageCompleted, currentMessageIndex, setShowContent]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#000",
                color: "#333",
                padding: '1rem',
                fontFamily: "Playwrite Display", // Royal font family
            }}
        >
            <div>

                {/* Display each letter of the current message */}
                {messages[currentMessageIndex].split("").map((letter, index) => (
                    <motion.span
                        key={`${currentMessageIndex}-${index}`}
                        variants={letterVariants}
                        custom={{
                            letterIndex: index,
                            messageIndex: currentMessageIndex
                        }}
                        onAnimationComplete={() => {
                            setLettersCompleted(prev => prev + 1);
                        }}
                        style={{
                            fontSize: "clamp(24px, 6vw, 80px)", // Large text size
                            fontWeight: "bold", // Bold text for royal effect
                            color: "yellow", // Royal color

                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default Animation;
