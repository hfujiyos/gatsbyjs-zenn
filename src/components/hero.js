import React from "react"
import "../styles/hero.css"
import AVATAR_IMG from "../../static/avatar.jpg"

/**
 * Heroコンポーネント
 * @return {div} Heroコンポーネント
 */
export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src={AVATAR_IMG} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by HF.<br />
                    Front Engineer at GSI. Love JavaScript.
                </p>
            </div>
        </div>
    )
}