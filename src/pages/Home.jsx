import React, { useState } from 'react'
import Animation from '../Components/Animation'
import TempHome from '../Components/TempHome'

const Home = () => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div>
            <>
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