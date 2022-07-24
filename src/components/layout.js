import React from "react"
import "../styles/layout.css"

/**
 * Layoutコンポーネント
 * @param {any} children メッセージ
 * @return {div} Layoutコンポーネント
 */
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <main>{children}</main>
        </div>
    )
}

export default Layout