window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {div, span, h1, p, a, ol, li, input, select, option} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.IcoMoon.20240617102110/`}, 'IcoMoonテスト')),
        p('IcoMoonを使ってみた。'),
        ol(
            li(a({href:`http://cryptoicons.co/`},'適当なアイコン'), span('を取得する')),
            li(a({href:`https://icomoon.io/app/#/select`},'IcoMoon'), span('にアップロードしフォントとしてDLする')),
            li(span('DLしたフォントファイルを使用して文字コードからフォントを表示する&#xe900;')),
        ),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

