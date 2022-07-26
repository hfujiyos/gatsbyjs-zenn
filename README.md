# GatsbyJS

## 開発環境の構築

- バージョン確認

  ```sh
  $ node -v
  v16.14.2
  $ npm -v
  8.7.0
  ```

- GatsbyJS グローバルインストール

  ```sh
  $ npm install -g gatsby-cli
  $ gatsby -v
  Gatsby CLI version: 4.18.1
  ```

- GatsbyJS テンプレート（gatsby-starter-hello-world）のインストール

  ```sh
  $ gatsby new gatsbyjs-zenn https://github.com/gatsbyjs/gatsby-starter-hello-world
  ```

- 開発環境動作確認

  ```sh
  $ cd gatsbyjs-zenn
  $ gatsby develop
  ```

  http://localhost:8000/

## 追加ライブラリ導入

- 環境変数の導入

  ```sh
  環境変数をファイルから利用するためのライブラリ dotenv をインストール
  $ npm install --save dotenv
  ```

- Contentful 連携のライブラリ導入

  ```sh
  Contentful 連携のライブラリ導入
  $ npm install --save gatsby-source-contentful
  ```

  ```sh
  画像プラグインのライブラリ導入
  $ npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp
  ```

- GraphQL プラグインのインストール

  ```sh
  マークダウンファイルの HTML 変換する GraphQL 用プラグイン導入
  $ npm install gatsby-transformer-remark
  ```

- SEO 連携のライブラリ導入

  ```sh
  headタグを管理するプラグイン導入
  $ npm install --save react-helmet
  ```

- プロジェクト直下に.env.development 環境変数ファイルを用意

  ```sh:.env.development
  GATSBY_CONTENTFUL_SPACE_ID=[スペースID]
  GATSBY_CONTENTFUL_API_KEY=[APIキー]
  ```

- プロジェクト直下の gatsby-config.js に環境変数ファイルとプラグイン情報を記述

  ```js:gatsby-config.js
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

  module.exports = {
    siteMetadata: {
      title: "Dev Blog",
      description: "Gatsbyで作成したブログサイトです。",
      author: "Engineer X"
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
          accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          commonmark: true,
          footnotes: true,
          pedantic: true,
          gfm: true,
          plugins: [],
        },
      },
    ],
  }
  ```

## 参考文献

- [Zenn ｜ブログサイトを作りながら学ぶ Gatsby 入門](https://zenn.dev/tomokiya/books/4b13342f6d878b93e06c)
- [REFFECT ｜基礎から始める GatsbyJS 入門](https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners#Blog_Starter)
- [YouTube ｜マイケル｜ Gatsby 入門](https://bit.ly/3PytG4m)
- [GatsbyJS 公式サイト｜ How to use gatsby-cli](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [GatsbyJS テンプレート｜ gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog)
