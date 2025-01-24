import React, { useState } from 'react'
import Animation from '../Components/Animation'
import TempHome from '../Components/TempHome'

const Home = () => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div>
            <>
                <style>
                    {`@import url('https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+VN:wght@100..400&display=swap');`}
                </style>
                {!showContent ? (
                    <Animation setShowContent={setShowContent}></Animation>
                ) : (
                    <div>
                        <TempHome></TempHome>
                    </div>
                )}
            </>
        </div>
    )
}

export default Home