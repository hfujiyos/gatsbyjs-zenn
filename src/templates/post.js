import React from "react"
import "../styles/post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * Postコンポーネント
 * @param {pageContext} createPageの引数のcontextで指定したデータ
 * @return {Layout} Postコンポーネント
 * @description ジェネレイト時に作成する記事詳細コンポーネント
 */
 export default function Post({ pageContext }) {
    const { title, updatedAt, image } = pageContext.post;
    const description = pageContext.post.description.description;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <SEO title={title} description={description} />
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <img src={image.file.url} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
        </Layout>
    )
}