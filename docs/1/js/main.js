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
            li(span('DLしたwoffフォントを'), a({href:`https://products.aspose.app/font/ja/base64/woff`},'Base64に変換する')),
            li(span('CSSの'), van.tags.code('@font-face'), span('にセットする')),
            li(span('HTMLでフォントを使用し表示する&#xe900;'), van.tags.i({class:'icon-mona'})),
        ),
        ...makeSizeSlider(),
        ...makeWritingModeSelect(),
        ...makeColorSchemeSelect(),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
    document.querySelector(`input`).focus()
    document.querySelector(`input`).dispatchEvent(new Event('input'))
    function makeSizeSlider() {
        const state = van.state(parseFloat(document.querySelector(':root').style.getPropertyValue('--font-size')))
        return [input(
            {
                type:`range`,
                min:16, max:64, value:24,
                oninput:(e)=>{
                    state.val = e.target.value
                    document.querySelector(':root').style.setProperty('--font-size', `${e.target.value}px`)
                },
            },
            ),
            span(()=>`${state.val}px`),
        ]
    }
    function makeWritingModeSelect() {
        const DEF = {'horizontal-tb':'横','vertical-rl':'縦'}
        const state = van.state(parseFloat(document.querySelector(':root').style.getPropertyValue('--writing-mode')))
        return [select(
            {
                onchange:(e)=>{
                    state.val = e.target.value
                    document.querySelector(':root').style.setProperty('--writing-mode', e.target.value)
                    document.querySelector(':root').style.setProperty('--text-orientation', (('vertical-rl'===e.target.value) ? 'upright' : 'mixed'))
                },
            },
            //['horizontal-tb','vertical-rl'].map(v=>option({value:v}, (('vertical-rl'===v) ? '縦' : '横')))),
            [...Object.entries(DEF)].map(([k,v])=>option({value:k}, v)),
            ),
            span(()=>`${DEF[state.val]}`),
        ]
    }
    function makeColorSchemeSelect() {
        const DEF = {'light':{i:'☀',l:'Light',f:'black',b:'white',a:'blue'},'dark':{i:'🌙',l:'Dark',f:'white',b:'black',a:'yellow'}}
        const state = van.state('light')
        return [select(
            {
                onchange:(e)=>{
                    state.val = e.target.value
                    document.querySelector(':root').style.setProperty('--fg-color', DEF[state.val].f)
                    document.querySelector(':root').style.setProperty('--bg-color', DEF[state.val].b)
                    document.querySelector(':root').style.setProperty('--a-color', DEF[state.val].a)
                },
            },
            [...Object.entries(DEF)].map(([k,v])=>option({value:k}, v.i)),
            ),
            span(()=>`${DEF[state.val].l}`),
        ]
    }
    /*
    */
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

