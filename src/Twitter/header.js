import React from "react"
import './twitter.css'

export default function user(props) {
        return(
            <div>
                <div className="top">
                    <button >
                    {/* <ArrowLeft size={20} color="white" /> */}
                    </button>
                    <div className="info">
                    <h1>Dagim</h1>
                    <span className="info__tweets-count">12,334 Tweets</span>
                    </div>
                </div>
                <div className="cover">
                    <img src="https://picsum.photos/500/300" />
                </div>
        </div>
    )
}