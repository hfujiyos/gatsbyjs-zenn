import React from "react"
import { Helmet } from "react-helmet"

/**
 * SEOコンポーネント
 * @param {any} title SEO情報のタイトル
 * @param {any} description SEO情報の説明
 * @return {Helmet} SEOコンポーネント
 * @description HTMLのヘッダータグにSEO情報を付与される
 * @description SEOと大文字定義により、PascalCaseで書くようWarning発生するが今回対応しない
 */
const SEO = ({ title, description }) => {
    return (
        <Helmet
            htmlAttributes={{ lang: "ja-jp" }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `Dev Blog`,
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`,
                },
            ]}
        />
    )
}

export default SEO