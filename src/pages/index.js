import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"

/**
 * Homeコンポーネント
 * @param {data} GraphQLクエリで取得したリスト形式データ
 * @return {Layout} Homeコンポーネント
 * @description ページネーション用にedges/nodeにてGraphQLクエリを構成
 */
export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
            title
            image {
              title
              file {
                url
              }
            }
            description {
              description
            }
            slug
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
`
