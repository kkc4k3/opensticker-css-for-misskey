const express = require("express")
const app = express()
const axios = require("axios")

app.get("/style.css", async (req, res) => {
    res.header("Content-Type", "text/css")
    // jsonからデータ取ってくる
    const openstickerApi = await axios.get("https://s.0px.io/json")
    const data = openstickerApi.data
    // インスタンス
    const instance = data.data
    // デフォルトの色
    const defaultColor = data.default

    var cssBody = ""
    await instance.forEach((item) => {
        const itemList = [
            `a[class*='eiwwqkts avatar'][title*='@${item.domain}']+.main>.body::before{`,
            makeStyle(item, defaultColor),
            "}",
        ]
        cssBody = cssBody + itemList.join("")

        // domainパラメーターで指定したものと一致している場合自鯖用のcssも作る
        if (req.query.domain === item.domain) {
            cssBody =
                cssBody +
                `a[class*='eiwwqkts avatar']:not([title*='@'])+.main>.body::before{` +
                makeStyle(item, defaultColor) +
                "}"
        }
    })
    res.send("@charset 'utf-8';" + cssBody)
})

app.listen(process.env.PORT || 3000, () => {})

// css生成
function makeStyle(item, defaultColor) {
    const colorSet = defaultColor[item.type]

    // フォントカラー
    var fontColor = colorSet.fontColor
    if ("fontColor" in item) {
        fontColor = item.fontColor
    }

    // 背景カラー
    var bgColor = ""
    var bgColorList = defaultColor[item.type].bgColor

    if ("bgColor" in item) {
        bgColorList = item.bgColor
    }

    bgColorList.forEach((color) => {
        bgColor = bgColor + "," + color
    })

    const css = [
        `content:"${item.name}"`,
        "display:block",
        "width:100%",
        "margin: 2px 0 5px;",
        "padding-left:25px;",
        "border-radius: 3px;",
        "font-size:12px",
        "font-weight:700",
        "line-height:1.5",
        `color:${fontColor}`,
        `background: url("${item.favicon}"),linear-gradient(to right ${bgColor},transparent)`,
        "background-repeat:no-repeat",
        "background-size:auto 16px,auto",
        "background-position:center left 5px,left",
        "",
    ]

    return css.join("!important;")
}
