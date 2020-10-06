# opensticker css for misskey
[OpenSticker](https://opensticker.0px.io/) のMisskeyに対応したCSSを生成します  
データは公開されているjsonを利用しています：[https://s.0px.io/json](https://s.0px.io/json)

herokuでデプロイしていま~~す：[https://opensticker-css-misskey.herokuapp.com/style.css](https://opensticker-css-misskey.herokuapp.com/style.css)~~ したがちょっと諸々問題ありそうなのでこちらは使わない方が良いです  
そのうちちゃんとしたところに上げます

<!-- ## つかいかた
Misskeyのファイルの`src/client/style.scss`の2行目（`:root`の直前）にインポートします  
自鯖のドメインをdomainパラメーターで渡してあげることで自（分と同じ）鯖の発言もデコレーションされます

以下はkkcakeの自鯖（[ms.kvche.ch](https://ms.kvche.ch)）の場合
```scss
@import url("https://opensticker-css-misskey.herokuapp.com/style.css?domain=ms.kvche.ch")
``` -->

## ありがとうリスト
[OpenSticker](https://opensticker.0px.io/)
[misskeyにopenstickerを適用する](https://www.kaias1jp.com/entry/2020/09/22/105034)：元々こちらの記事で公開されていたcssを利用させていただこうとしていたのですが自鯖にデコレーションがされないようだったのでこちらを参考にしながら書いたのが今回のです

全体的に素人も良いところなのでPRどんどんしてください