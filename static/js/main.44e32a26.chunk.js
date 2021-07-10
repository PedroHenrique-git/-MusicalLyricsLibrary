(this["webpackJsonpaudio-tracker"]=this["webpackJsonpaudio-tracker"]||[]).push([[0],{47:function(n,t,e){"use strict";e.r(t);var i=e(1),r=e(17),a=e.n(r),c=e(20),s=e(7),o=e(3),d=e(18),l=e(16),b="https://www.theaudiodb.com/api/v1/json/1/",m=function(n){return fetch(n).then((function(n){return n.json()}))};function x(n){var t=Object(l.a)("".concat(b,"/album.php?i=").concat(n),m),e=t.data,i=t.error;return{albumData:e,isLoading:!e&&!i,isError:i}}var h,u,j,p=e(4),g=e(5),f="#d8d8d8",O="#e9e7f8",w=g.b.main(h||(h=Object(p.a)(["\n    background: rgba(28, 32, 44, 0.8);\n    max-width: 100%;\n    padding: 25px;\n    margin: 0 auto;\n\n    section {\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n\n    h1 {\n        color: ",";\n        font-size: 70px;\n        text-align: center;\n\n        @media (max-width: 640px) {\n            font-size: 55px;\n        }\n    }\n\n    .artist_logo {\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        max-width: 100%;\n        h1 {\n            width: 100%;\n\n            img {\n                height: 100%;\n                max-width: 100%;\n            }\n        }\n    }\n\n    .artist_informations {\n        a {\n            text-decoration: none;\n        }\n        .artist_informations-data,\n        .artist_informations-social-medias {\n            display: flex;\n            flex-direction: column;\n\n            li,\n            a {\n                color: ",";\n                list-style: none;\n                font-size: 20px;\n                text-decoration: none;\n            }\n        }\n\n        .artist_informations-social-medias {\n            margin-top: 20px;\n        }\n\n        p {\n            color: ",";\n            font-size: 16px;\n            margin: 20px 0;\n            text-align: left;\n            max-height: 400px;\n            overflow-y: auto;\n\n            &::-webkit-scrollbar {\n                width: 0.4em;\n            }\n\n            &::-webkit-scrollbar-track {\n                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n            }\n\n            &::-webkit-scrollbar-thumb {\n                background-color: ",";\n                outline: 1px solid slategrey;\n            }\n        }\n    }\n\n    .artist_informations-image {\n        margin: 30px auto 0 auto;\n        max-height: 700px;\n        max-width: 700px;\n        img {\n            height: 100%;\n            width: 100%;\n        }\n    }\n\n    .album-container,\n    .tracks-container {\n        margin-top: 80px;\n    }\n"])),f,f,f,f),v=g.b.div(u||(u=Object(p.a)(["\n    margin-top: 40px;\n\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    gap: 20px;\n    grid-template-columns: repeat(4, 0.22234fr);\n\n    @media (max-width: 640px) {\n        gap: 10px;\n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    a {\n        display: block;\n        height: 100%;\n        width: 100%;\n    }\n\n    .album {\n        height: 100%;\n        width: 100%;\n        img {\n            object-fit: cover;\n            height: 100%;\n            width: 100%;\n        }\n\n        &:hover {\n            transform: scale(1.3);\n            transition: all 0.3s;\n        }\n    }\n"]))),y=e.p+"static/media/load-image-gif.b74d0983.gif",k=e.p+"static/media/default.2d86ca35.jpg",_=function(n){return n||k},z=e(2);function N(n){var t=x(n.id),e=t.albumData,i=t.isLoading,r=t.isError;return i?Object(z.jsx)("h1",{children:"Loading..."}):r?Object(z.jsx)("h1",{children:"Error..."}):Object(z.jsx)(v,{children:e.album.map((function(n){return Object(z.jsx)(s.b,{to:"/album/".concat(n.idArtist,"/").concat(n.idAlbum),children:Object(z.jsx)("div",{className:"album",children:Object(z.jsx)("img",{src:i?y:_(n.strAlbumThumb),alt:n.idAlbum})})})}))})}var A,E=g.b.section(j||(j=Object(p.a)(["\n    margin: 40px auto 0 auto !important;\n    display: flex;\n    gap: 50px;\n\n    @media (max-width: 1546px) {\n        justify-content: center;\n    }\n\n    @media (max-width: 1020px) {\n        flex-direction: column;\n    }\n\n    iframe {\n        min-height: 280px;\n        min-width: 420px;\n\n        @media (max-width: 1546px) {\n            max-height: 280px;\n            min-width: auto;\n        }\n\n        @media (max-width: 1020px) {\n            max-height: 400px;\n        }\n\n        @media (max-width: 640px) {\n            min-height: 280px;\n            min-width: auto;\n        }\n    }\n\n    .none_track {\n        color: ",";\n        text-align: center;\n        font-size: 40px;\n    }\n"])),f);function L(n){var t=function(n){var t=Object(l.a)("".concat(b,"/mvid.php?i=").concat(n),m),e=t.data,i=t.error;return{data:e,isLoading:!e&&!i,isError:i}}(n.id),e=t.data,i=t.isLoading,r=t.isError;if(i)return Object(z.jsx)("h1",{children:"Loading..."});if(r)return Object(z.jsx)("h1",{children:"Error..."});var a=function(n,t){return Math.floor(Math.random()*(Math.floor(n)-Math.ceil(t))+Math.ceil(t))};return e.mvids?Object(z.jsxs)(E,{children:[Object(z.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.mvids[a(e.mvids.length,0)].strMusicVid.split("?v=")[1]),frameBorder:"0",title:"track_1"}),Object(z.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.mvids[a(e.mvids.length,0)].strMusicVid.split("?v=")[1]),frameBorder:"0",title:"track_2"}),Object(z.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.mvids[a(e.mvids.length,0)].strMusicVid.split("?v=")[1]),frameBorder:"0",title:"track_3"})]}):Object(z.jsx)(E,{style:{justifyContent:"center"},children:Object(z.jsx)("p",{className:"none_track",children:"None track"})})}var S=g.b.div(A||(A=Object(p.a)(["\n    background: #000;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n        height: auto;\n        width: 300px;\n    }\n"]))),I=e.p+"static/media/loading.79a159df.gif";function T(){return Object(z.jsx)(S,{children:Object(z.jsx)("img",{src:I,alt:"loading gif"})})}var M,C=e.p+"static/media/background.37ae16bc.jpg",B=g.b.div(M||(M=Object(p.a)(["\n    background: #000;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n\n    h1 {\n        color: ",";\n        font-size: 2.6em;\n        font-weight: 600;\n    }\n\n    a {\n        background: #071307;\n        color: ",";\n        font-size: 1.8em;\n        display: block;\n        height: 45px;\n        padding: 10px;\n        margin: 8px 0;\n        text-decoration: none;\n        text-align: center;\n        width: 240px;\n    }\n"])),f,f);function R(){return Object(z.jsxs)(B,{children:[Object(z.jsx)("h1",{children:"Error"}),Object(z.jsx)(s.b,{to:"/",children:"Return to home"})]})}var D=document.querySelector("html");function F(){var n=function(n){var t=Object(l.a)("".concat(b,"/search.php?s=").concat(n),m),e=t.data,i=t.error;return{data:e,isLoading:!e&&!i,isError:i}}(Object(o.h)().name),t=n.data,e=n.isLoading,i=n.isError;return e?Object(z.jsx)(T,{}):i?Object(z.jsx)(R,{}):null===t.artists?(c.b.error("nothing found"),Object(z.jsx)(o.a,{to:"/"})):(null!==t.artists[0].strArtistWideThumb?D.style.backgroundImage="url(".concat(t.artists[0].strArtistWideThumb,")"):D.style.backgroundImage="url(".concat(C,")"),Object(z.jsx)(w,{children:Object(z.jsxs)("section",{children:[Object(z.jsx)(s.b,{to:"/",children:Object(z.jsx)(d.a,{size:50,color:"#d8d8d8"})}),Object(z.jsxs)("div",{className:"artist_informations",children:[Object(z.jsx)("a",{className:"artist_logo",href:"https://".concat(t.artists[0].strWebsite),target:"_blank",rel:"noreferrer",children:Object(z.jsx)("h1",{children:Object(z.jsx)("img",{src:e?y:t.artists[0].strArtistLogo,alt:t.artists[0].strArtist})})}),Object(z.jsxs)("ul",{className:"artist_informations-data",children:[Object(z.jsx)("li",{children:t.artists[0].intFormedYear}),Object(z.jsx)("li",{children:t.artists[0].strGenre}),Object(z.jsx)("li",{children:t.artists[0].strStyle})]}),Object(z.jsxs)("ul",{className:"artist_informations-social-medias",children:[Object(z.jsx)("li",{children:Object(z.jsx)("a",{href:"https://".concat(t.artists[0].strTwitter),children:t.artists[0].strTwitter})}),Object(z.jsx)("li",{children:Object(z.jsx)("a",{href:"https://".concat(t.artists[0].strFacebook),children:t.artists[0].strFacebook})})]}),Object(z.jsx)("p",{children:t.artists[0].strBiographyEN})]}),Object(z.jsx)("div",{className:"artist_informations-image",children:Object(z.jsx)("img",{src:e?y:t.artists[0].strArtistThumb,alt:t.artists[0].strArtist})}),Object(z.jsxs)("div",{className:"album-container",children:[Object(z.jsx)("h1",{children:"Albums"}),Object(z.jsx)(N,{id:t.artists[0].idArtist})]}),Object(z.jsxs)("div",{className:"tracks-container",children:[Object(z.jsx)("h1",{children:"Some tracks"}),Object(z.jsx)(L,{id:t.artists[0].idArtist})]})]})}))}var J,V,W,q=e(26),G=e.n(q),Y=e(27),H=e(32),K=e(21),P=e(33),Q=g.b.div(J||(J=Object(p.a)(["\n    background: rgba(28, 32, 44, 0.952);\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: -1;\n"]))),U=g.b.section(V||(V=Object(p.a)(["\n    max-width: 600px;\n    margin: 100px auto;\n    padding: 0 25px;\n\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 1;\n\n    @media (max-width: 640px) {\n        margin: 30px auto;\n    }\n\n    h1 {\n        color: ",";\n        font-weight: 100;\n        font-size: 28px;\n        margin-bottom: 30px;\n\n        @media (max-width: 640px) {\n            text-align: center;\n        }\n    }\n\n    form {\n        border-bottom: 2.5px solid ",";\n        width: 100%;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        input {\n            border: none;\n            background: transparent;\n            color: ",";\n            outline: none;\n            height: 45px;\n            font-size: 18px;\n            padding: 10px;\n            border-radius: 20px;\n            width: 100%;\n\n            &::placeholder {\n                color: ",";\n            }\n        }\n\n        button {\n            border: none;\n            background: transparent;\n            cursor: pointer;\n            height: 45px;\n        }\n    }\n\n    .recently_searched {\n        margin: 30px 0;\n\n        display: flex;\n        align-items: flex-start;\n        justify-content: flex-start;\n        flex-direction: column;\n    }\n\n    .recently_searched {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n\n        .title {\n            h2 {\n                color: ",";\n                font-weight: 100;\n                font-size: 28px;\n                margin-bottom: 15px;\n            }\n        }\n        .recently_searched-cards {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            flex-wrap: wrap;\n            width: 100%;\n\n            .card {\n                img {\n                    height: 140px;\n                    width: 140px;\n\n                    @media (max-width: 640px) {\n                        margin-bottom: 10px;\n                        height: 170px;\n                        width: 170px;\n                    }\n                }\n            }\n        }\n    }\n"])),O,O,O,"#fff",O);function X(){var n=Object(i.useState)(""),t=Object(K.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)(!1),c=Object(K.a)(a,2),d=c[0],l=c[1],m=Object(i.useState)([]),x=Object(K.a)(m,2),h=x[0],u=x[1];Object(i.useEffect)((function(){var n=localStorage.getItem("artists");n&&u(JSON.parse(n))}),[]),Object(i.useEffect)((function(){localStorage.setItem("artists",JSON.stringify(h))}),[h]);var j=function(){var n=Object(H.a)(G.a.mark((function n(t){var i,r,a,c,s;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,fetch("".concat(b,"/search.php?s=").concat(e));case 3:return i=n.sent,n.next=6,i.json();case 6:r=n.sent,-1===h.findIndex((function(n){return n.name===e}))&&r.artists&&(h.length<=3?u([].concat(Object(Y.a)(h),[{name:e.toLocaleLowerCase(),image:r.artists[0].strArtistThumb,id:h.length}])):(a=Object(Y.a)(h),c=a[0].id,a.forEach((function(n){n.id<c&&(c=n.id)})),s=a.findIndex((function(n){return n.id===c})),a.splice(s,1,{name:e.toLocaleLowerCase(),image:r.artists[0].strArtistThumb,id:a.length+c}),u(a))),l(!0);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return d?Object(z.jsx)(o.a,{to:"/artist/".concat(e)}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Q,{}),Object(z.jsxs)(U,{children:[Object(z.jsx)("h1",{children:"Search by name of your favorite artist"}),Object(z.jsxs)("form",{onSubmit:function(n){return j(n)},children:[Object(z.jsx)("input",{autoComplete:"off",type:"text",name:"artist",id:"artist",placeholder:"artist name",onChange:function(n){return r(n.target.value.toLocaleLowerCase())}}),Object(z.jsx)("button",{type:"submit",disabled:!e,style:e?{opacity:1}:{opacity:.5},children:Object(z.jsx)(P.a,{size:32,color:"#e9e7f8"})})]}),Object(z.jsxs)("div",{className:"recently_searched",children:[Object(z.jsx)("div",{className:"title",children:Object(z.jsx)("h2",{children:"Recently searched"})}),Object(z.jsx)("div",{className:"recently_searched-cards",children:h.map((function(n){return Object(z.jsx)(s.b,{to:"/artist/".concat(n.name),children:Object(z.jsx)("div",{className:"card",children:Object(z.jsx)("img",{src:n.image,alt:n.name})})})}))})]})]})]})}var Z,$=g.b.main(W||(W=Object(p.a)(["\n    background: rgba(28, 32, 44, 0.8);\n    max-width: 100%;\n    padding: 25px;\n    margin: 0 auto;\n\n    section {\n        padding: 25px;\n        max-width: 1200px;\n        margin: 0 auto;\n\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: center;\n\n        .prev_button {\n            border: none;\n            cursor: pointer;\n            background: transparent;\n            outline: none;\n        }\n\n        .album_title {\n            color: ",";\n            font-size: 2.6em;\n            white-space: nowrap;\n        }\n\n        .album_tumb {\n            max-height: 400px;\n            max-width: 400px;\n            margin: 25px 0;\n        }\n\n        .album_tracks {\n            li {\n                border-bottom: 1px solid ",";\n                padding-bottom: 10px;\n                margin: 10px 0;\n                color: ",";\n                list-style: none;\n                font-size: 1em;\n                text-align: center;\n            }\n        }\n    }\n"])),f,f,f);function nn(){var n,t,e=Object(o.h)(),i=e.artistId,r=e.albumId,a=function(n){var t=Object(l.a)("".concat(b,"/track.php?m=").concat(n),m),e=t.data,i=t.error;return{data:e,isLoading:!e&&!i,isError:i}}(r),c=a.data,s=a.isError,h=a.isLoading,u=x(i),j=u.albumData,p=u.isError,g=u.isLoading,f=Object(o.g)();return h||g?Object(z.jsx)(T,{}):s||p?Object(z.jsx)("h1",{children:"Error..."}):Object(z.jsx)($,{children:Object(z.jsxs)("section",{children:[Object(z.jsx)("button",{className:"prev_button",type:"button",onClick:function(){return f.goBack()},children:Object(z.jsx)(d.a,{size:50,color:"#d8d8d8"})}),Object(z.jsx)("h1",{className:"album_title",children:c.track[0].strAlbum}),Object(z.jsx)("img",{className:"album_tumb",src:h&&g?y:_(null===(n=j.album.find((function(n){return n.idAlbum===r})))||void 0===n?void 0:n.strAlbumThumb),alt:null===(t=j.album.find((function(n){return n.idAlbum===r})))||void 0===t?void 0:t.idAlbum}),Object(z.jsx)("ul",{className:"album_tracks",children:c.track.map((function(n){return Object(z.jsx)("li",{children:Object(z.jsx)("h1",{children:n.strTrack})})}))})]})})}var tn,en=g.b.div(Z||(Z=Object(p.a)(["\n    background: #000;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n        height: auto;\n        width: 300px;\n    }\n\n    a {\n        background: #071307;\n        color: ",";\n        font-size: 1.8em;\n        display: block;\n        height: 45px;\n        padding: 10px;\n        margin: 8px 0;\n        text-decoration: none;\n        text-align: center;\n        width: 240px;\n    }\n"])),f),rn=e.p+"static/media/404.80d0b630.gif";function an(){return Object(z.jsxs)(en,{children:[Object(z.jsx)("img",{src:rn,alt:"404 gif"}),Object(z.jsx)(s.b,{to:"/",children:"Return to home"})]})}function cn(){return Object(z.jsxs)(o.d,{children:[Object(z.jsx)(o.b,{exact:!0,path:"/",component:X}),Object(z.jsx)(o.b,{exact:!0,path:"/artist/:name",component:F}),Object(z.jsx)(o.b,{exact:!0,path:"/album/:artistId/:albumId",component:nn}),Object(z.jsx)(o.b,{exact:!0,path:"*",component:an})]})}function sn(){return Object(z.jsx)(s.a,{children:Object(z.jsx)(cn,{})})}var on=Object(g.a)(tn||(tn=Object(p.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        font-family: 'RocknRoll One', sans-serif;\n    }\n\n    html {\n        background: url(",") no-repeat center center fixed;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n    }\n\n    html, body, #root {\n        width: 100%;\n    }\n"])),C);e(46);a.a.render(Object(z.jsxs)(i.StrictMode,{children:[Object(z.jsx)(on,{}),Object(z.jsx)(sn,{}),Object(z.jsx)(c.a,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.44e32a26.chunk.js.map