# OpenSticker CSS for Misskey

[OpenSticker](https://opensticker.0px.io/)の[Misskey](https://join.misskey.page/ja/)に対応した CSS を生成します  
基本的には[本家](https://opensticker.0px.io/)や[InstanceTicker](https://miy.pw/)の見た目に倣いつつ細かいところを kkcake の好みに修正した感じです  
↓ こんな感じのデコレーションがされます

![CSSを適用した場合のイメージ](https://d1rv60vthn4ial.cloudfront.net/misskey/59737395-1ce1-47b0-a70b-2165b0ecb74d.png)

データは[公開されている json](https://s.0px.io/json)を利用しています  
node.js でうごいてます

## デプロイ先

-   [Google Cloud Functions](https://asia-northeast1-opensticker-css-for-misskey.cloudfunctions.net/create_css)（推奨）
-   ~~[heroku](https://opensticker-css-misskey.herokuapp.com/style.css)~~ レスポンスが悪いので実用には不向きかも GCP を使ってください

どっちも無料枠内での運用のつもりだから急に使えなくなったりしたらごめん  
自力デプロイできる人はソース引っ張ってきて自前環境でデプロイして使用する方がいいかもしれないです

## つかいかた

Misskey のファイルの`src/server/web/views/base.pug`の`head`内部で読み込ませます  
`preload`推奨です（普通に読み込ませようとすると高確率でレンダリング阻害されてクライアントが使えなくなります）  
もっと上手いやり方があれば教えてください

デフォルト状態では自鯖ユーザーの発言がデコレーションされません  
`domain`パラメーターでインスタンスのドメインを渡してやることでデコレーションされるようになります

kkcake の自鯖（[ms.kvche.ch](https://ms.kvche.ch)）の例  
[CSS を非同期ロードする最も簡単な方法 - Qiita](https://qiita.com/rana_kualu/items/95a7adf8420ea2b9f657)を参考にした記述をちょっと追加しています  
下コピペでドメイン部分だけ変更すれば多分つかえるはず

```pug
link(rel="preload" href="https://asia-northeast1-opensticker-css-for-misskey.cloudfunctions.net/create_css?domain=ms.kvche.ch" as="style")
link(rel="stylesheet" href="https://asia-northeast1-opensticker-css-for-misskey.cloudfunctions.net/create_css?domain=ms.kvche.ch" media="print" onload="this.media='all'")
```

## ありがとうリスト

-   [Misskey](https://join.misskey.page/ja/)
-   [OpenSticker](https://opensticker.0px.io/)
-   [misskey に opensticker を適用する](https://www.kaias1jp.com/entry/2020/09/22/105034)  
    元々こちらの記事で公開されていた css を利用させていただこうとしていたのですが自鯖にデコレーションがされないように見えた（のですが実は後々検索かけたところその対応もされていた様だったので完全な二番煎じと化してしまった）ので自前で実装したのがこれになります

## 備考

個人的な用途で作り出したのでいろいろ雑＋素人も良いところなので PR 大歓迎です  
つくったひと：[kkcake](https://ms.kvche.ch/@kkcake)
