# opensticker css for misskey
[OpenSticker](https://opensticker.0px.io/) のMisskeyに対応したCSSを生成します  
データは公開されているjsonを利用しています：[https://s.0px.io/json](https://s.0px.io/json)  

node.jsでうごいてます

## デプロイ先
- [Google Cloud Functions](https://asia-northeast1-opensticker-css-for-misskey.cloudfunctions.net/create_css)（推奨）
- [heroku](https://opensticker-css-misskey.herokuapp.com/style.css)  

どっちも無料枠内での運用のつもりだから急に使えなくなったりしたらごめん  
自力デプロイできる人はソース引っ張ってきて自前環境でデプロイして使用する方がいいかもしれないです

## つかいかた
Misskeyのファイルの`src/server/web/views/base.pug`の`head`内部で読み込ませます  
`preload`推奨です（普通に読み込ませようとすると高確率でレンダリング阻害されてクライアントが使えなくなります）  
もっと上手いやり方があれば教えてください

デフォルト状態では自鯖ユーザーの発言がデコレーションされません  
`domain`パラメーターでインスタンスのドメインを渡してやることでデコレーションされるようになります  

kkcakeの自鯖（[ms.kvche.ch](https://ms.kvche.ch)）の例  
[CSSを非同期ロードする最も簡単な方法 - Qiita](https://qiita.com/rana_kualu/items/95a7adf8420ea2b9f657)を参考にした記述をちょっと追加しています  
下コピペでドメイン部分だけ変更すれば多分つかえるはず  

```pug
link(rel="preload" href="https://asia-northeast1-opensticker-css-for-misskey.cloudfunctions.net/create_css?domain=ms.kvche.ch" as="style")
link(rel="stylesheet" href="https://asia-northeast1-opensticker-css-for-misskey.cloudfunctions.net/create_css?domain=ms.kvche.ch" media="print" onload="this.media='all'")
```

## ありがとうリスト
- [OpenSticker](https://opensticker.0px.io/)  
- [misskeyにopenstickerを適用する](https://www.kaias1jp.com/entry/2020/09/22/105034)  
元々こちらの記事で公開されていたcssを利用させていただこうとしていたのですが自鯖にデコレーションがされないように見えた（のですが実は後々検索かけたところその対応もされていた様だったので完全な二番煎じと化してしまった）ので自前で実装したのがこれになります

個人的な用途で作り出したのでいろいろ雑＋素人も良いところなのでPR大歓迎です