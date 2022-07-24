# GitHubFlow

## 1. 初期ブランチ構築（スクラムマスター）

- ローカルリポジトリで初期環境構築
- リモートリポジトリに main ブランチ作成
- ローカルリポジトリのブランチ名を main に変更

  ```sh
  $ git branch -m master main
  ```

- ローカルリポジトリで initial commit してリモートへプッシュ

  ```sh
  $ git commit -m "initial commit"
  $ git remote add origin git@github.com:hfujiyos/gatsbyjs-site.git
  $ git push -u origin main
  ```

- リモートリポジトリにプロジェクト作成
- リモートリポジトリのプロジェクト設定

  ```
  プルリクエストがマージされた後、ヘッドブランチを自動的に削除
  ☑︎Automatically delete head branches
  ```

## 2. イシュー定義（レビュア）

- リモートリポジトリにイシューを作成して開発者をアサイン

  ```
  Add login mock
  Fix login logic
  ```

## 3. チケット駆動開発（開発者）

- ローカルリポジトリで main ブランチの最新のソースをプル

  ```sh
  mainブランチに切替
  $ git checkout main

  mainブランチの最新ソースをリモートリポジトリからプル
  $ git pull
  ```

- ローカルリポジトリに feature ブランチを切る

  ```sh
  featureブランチを新規作成してブランチ切替
  $ git checkout -b feature/fixLoginLogic
  ```

- ローカルリポジトリに feature ブランチで、コーディング / コミット / プッシュ

  ```sh
  開発時にはコミット
  $ git add
  $ git commit -m "Fix login logic"

  featureブランチをリモートリポジトリへプッシュ
  $ git push origin HEAD
  ```

- リモートリポジトリの feature ブランチを、リモートリポジトリの main ブランチへマージ依頼するプルリクエスト

  ```
  マージする際にイシューもクローズするコメント付与
  $ close #9
  ```

## 4. コードレビュー（レビュア）

- レビュアにて、コードレビュー / 承認

- レビュアにて、main ブランチへマージ

## 5. 後工程（開発者）

- マージ後の main ブランチを取得する
- ローカルリポジトリで main ブランチの最新のソースをプル

  ```sh
  mainブランチに切替
  $ git checkout main

  mainブランチの最新ソースをリモートリポジトリからプル
  $ git pull
  ```

- ローカルリポジトリの不要ブランチ削除

  ```sh
  現在のブランチがmainであるか確認
  $ git branch
    feature/funcE
  * main

  ローカルリポジトリの不要ブランチを削除
  $ git branch -D feature/funcE

  不要ブランチが削除されていることを確認
  $ git branch
  * main
  ```
