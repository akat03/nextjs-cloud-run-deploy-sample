# ● 1. nextjsアプリの作成
```
npx create-next-app@latest --ts nextjs-cloud-run-deploy-sample
```

# ● 2. package.jsonに追記

**package.json** に以下を追記

```
"engines": {
  "node": "16.x"
},
```


```
  "scripts": {
    ....
    "gcp-build": "next build"
  },
```


# ● 3. Google Cloud で設定してデプロイ実行

```
1. 好きなプロジェクトを選択（なければ新規作成）
2. Cloud Run へ移動
3.「サービスの作成」をクリック
4.「ソース リポジトリから新しいリビジョンを継続的にデプロイする」を選択し「CLOUD BUILD の設定」ボタンをクリック
5.「Cloud Build APIを有効にする」をクリック
6. Githubを認証し、「GOOGLE CLOUD BUILDのインストール」をクリック
7. リポジトリを選択する
8. 「次へ」をクリックして「Go、Node.js、Python、Java、.NET Core、Ruby（Google Cloud Buildpacks  を使用）」を選択して「保存」
9. 以下の設定で「作成」
---------------------
リージョン: asia-northeasat1 (東京)
自動スケーリング インスタンスの最大数 1
認証: 未認証の呼び出しを許可
---------------------


