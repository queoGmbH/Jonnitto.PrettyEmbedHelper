(()=>{function V(t){t.directive("prettyembedconsent",(e,{value:i})=>{if(i==="accept"){K({element:e,Alpine:t});return}z({element:e,Alpine:t})})}function z({element:t,Alpine:e}){e.bind(t,{"x-show"(){return this.gdpr=="isOpen"},"x-transition.opacity"(){}})}function K({element:t,Alpine:e}){e.bind(t,{"@click"(i){i.preventDefault(),this.acceptGdpr()}})}var A=!1,I=!1;function _(t,e){let i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("defer",!0),i.setAttribute("src",t),typeof e=="function"&&i.addEventListener("load",e),document.head.appendChild(i)}function D(t){let e=()=>{x(()=>window.Vimeo,t)};if(I){e();return}I=!0,_("https://player.vimeo.com/api/player.js",e)}function C(t){let e=()=>{x(()=>window.YT?.loaded,t)};if(A){e();return}A=!0,_("https://www.youtube.com/iframe_api",e)}function J(t,e){let i=window.requestAnimationFrame,o=Date.now(),s=!1,n=()=>{Date.now()-o<e?s||i(n):t()};return i(n),{clear:()=>s=!0}}function x(t,e,i=100){if(!(typeof t!="function"&&typeof e!="function"||i<=0)){if(t()){e();return}i--,J(()=>x(t,e,i),100)}}function b(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}var j="prettyembed",B="/_Resources/Static/Packages/Jonnitto.PrettyEmbedHelper/Scripts/Hls.js?v=1.5.9";function F(t){t.directive("prettyembedmedia",(e,{value:i,modifiers:o,expression:s},{evaluate:n})=>{if(i==="media"){X({element:e,Alpine:t,src:s});return}let r=o.includes("streaming"),a=o.includes("lightbox")?"lightbox":"inline",d={streaming:r,style:a,...n(s||"{}")};Q({element:e,Alpine:t,options:d})})}function Q({element:t,Alpine:e,options:i}){let{style:o,streaming:s}=i,n={type:null,playing:!1,url:null,id:null,autoplay:!1,loaded:!1,lightbox:o==="lightbox"?!1:null,__media:null},r=s?!Z():null;e.bind(t,{"x-data"(){return{...n,play(){if(this.lightbox!==null&&(this.lightbox=!0),!!this.__media?.paused){if(!this.loaded&&s){if(r){if(this.lightbox){setTimeout(()=>{k(this.__media,this.url)},500);return}k(this.__media,this.url);return}this.__media.src=this.url}if(this.lightbox){setTimeout(()=>{this.__media?.play()},500);return}this.__media?.play()}},pause(a=!1){a&&(this.autoplay||this.__media?.muted)||this.__media?.paused||this.__media?.pause()},reset(){this.autoplay||(this.pause(),this.__media?.currentTime&&(this.__media.currentTime=0),this.loaded=!1)},toogle(){if(this.__media.paused){this.play();return}this.pause()},dispatchEvent(a){let d=this.__media.currentTime;d===this.__media.duration&&(a="finished",!this.__media.loop&&!this.lightbox&&!b()&&this.reset()),this.$dispatch(j,{detail:{event:a,currentTime:d,type:this.type,style:o,autoplay:this.autoplay,url:this.url,id:this.id}})},init(){o==="lightbox"&&this.$watch("lightbox",(a,d)=>{!a&&a!==d&&this.pause()})}}},"@prettyembedPauseInternal.window"({detail:a}){a!=this.$root&&this.pause(!0)}})}function X({element:t,Alpine:e,src:i}){let s=t.tagName.toLowerCase()==="video"?"Video":"Audio";e.bind(t,{"x-init"(){this.__media=t,this.url=i||t.currentSrc,this.id=this.url.split("/").pop(),this.autoplay=t.autoplay,this.type=s},"@play"(){this.loaded||(this.loaded=!0),this.playing=!0,!this.autoplay&&!this.muted&&(this.$dispatch("prettyembedPauseInternal",this.$root),this.dispatchEvent("play"))},"@pause"(){this.playing=!1,this.autoplay=!1,this.muted||this.dispatchEvent("pause")}})}function Z(){return!!document.createElement("video").canPlayType("application/vnd.apple.mpegurl")}function k(t,e){if(typeof window.Hls<"u"){L(t,e);return}_(B,()=>{setTimeout(()=>L(t,e),10)})}function L(t,e){let i=window.Hls;if(!i||!i.isSupported())return;let o=new i;o.loadSource(e),o.attachMedia(t),o.on(i.Events.MEDIA_ATTACHED,()=>t.play())}function H(t){t.magic("prettyembedPause",()=>N),t.magic("prettyembedReset",()=>Y),t.magic("prettyembedPlay",()=>R)}window.addEventListener("prettyembedReset",({detail:t})=>Y(t));window.addEventListener("prettyembedPause",({detail:t})=>N(t));window.addEventListener("prettyembedPlay",({detail:t})=>R(t));function Y(t){return P(t).forEach(e=>{let i=window.Alpine.$data(e);typeof i.reset=="function"&&i.reset()})}function N(t){return P(t).forEach(e=>{let i=window.Alpine.$data(e);typeof i.pause=="function"&&i.pause(!0)})}function R(t){return P(t).every(e=>{let i=window.Alpine.$data(e);return typeof i.play=="function"?(i.play(),!1):!0})}var $="jonnitto-prettyembed";function P(t){if(typeof t=="string"){let e=et(t),i=[];return[...document.querySelectorAll(e)].forEach(o=>{i=[...i,...G(o)]}),i}return G(t)}var tt=["youtube","vimeo","video","audio"];function et(t){let e=t.toLowerCase();return tt.includes(e)?`.${$}--${e}`:t}function G(t){if(!(t instanceof Element))t=document;else if(t.classList.contains($))return[t];return[...t.querySelectorAll(`.${$}`)]}function M(t){t.directive("prettyembedpopup",(e,{expression:i},{evaluate:o})=>{let s=window.getComputedStyle(e).getPropertyValue("--aspect-ratio")||"16 / 9",{ratio:n}=o(`{ratio:${s}}`),r=i||e.href;t.bind(e,{"@click"(a){a.preventDefault();let d=Math.min(window.innerWidth,1260),h=d/n,m=(screen.width-d)/2,f=(screen.height-h)/2;window.open(r,"_blank",`noopener=yes,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=${d},height=${h},left=${m},top=${f}`)}})})}var O="prettyembed";function q(t){t.directive("prettyembedvimeo",(e,{modifiers:i,expression:o},{evaluate:s})=>{let n=i.includes("lightbox")?"lightbox":"inline",r=i.includes("slim"),a={style:n,slim:r,...s(o||"{}")};it({element:e,Alpine:t,options:a})})}function it({element:t,Alpine:e,options:i}){let o="Vimeo",{style:s,slim:n,video:r,color:a,loop:d,gdpr:h,background:m}=i,f={id:r,autopip:!0,autoplay:!0,pip:!0,portrait:!1,responsive:!1,title:!1,byline:!1,background:!!m,loop:!!d,autopause:!1,controls:!n};a&&(f.color=a);let v=window.localStorage,p=`jonnittoprettyembed_gdpr_${o.toLowerCase()}`,c={loaded:!1,playing:!1,lightbox:s==="lightbox"?!1:null,gdpr:h&&v.getItem(p)!=="true"?"needCheck":"isAccepted"},l=null;e.bind(t,{"x-data"(){return{...c,init(){this.lightbox!==null&&this.$watch("lightbox",(u,y)=>{!u&&u!==y&&this.pause()})},acceptGdpr(){v.setItem(p,"true"),this.$dispatch("prettyembedAcceptGdpr",o),this.load()},play(){l?.play()},pause(){l?.pause()},load(u){if(u&&u.preventDefault(),this.gdpr!="isAccepted"){this.gdpr="isOpen";return}if(this.lightbox!==null&&(this.lightbox=!0),this.loaded){this.play();return}D(()=>{let y=this.$refs?.vimeo||t;l=new window.Vimeo.Player(y,f);let T=async g=>{let W=[l.getVideoTitle(),l.getVideoId(),l.getVideoUrl(),l.getCurrentTime(),l.getEnded()],w=await Promise.allSettled(W);return w[4].value&&(g="finished",!d&&!this.lightbox&&!b()&&this.reset()),{event:g,type:o,style:s,title:w[0].value,videoID:w[1].value,videoUrl:w[2].value,currentTime:w[3].value}};l.on("play",async()=>{let g=await T("play");this.$dispatch("prettyembedPauseInternal",t),this.loaded=!0,this.playing=!0,this.$dispatch(O,g)}),l.on("pause",async()=>{let g=await T("pause");this.playing=!1,this.$dispatch(O,g)})})},async reset(){l&&(await this.pause(),await l.destroy(),l=null,this.loaded=!1,this.playing=!1)}}},"@prettyembedAcceptGdpr.window"({detail:u}){u==o&&(this.gdpr="isAccepted")},"@prettyembedPauseInternal.window"({detail:u}){u!=this.$root&&this.pause()}})}var S="prettyembed";function U(t){t.directive("prettyembedyoutube",(e,{modifiers:i,expression:o},{evaluate:s})=>{let n=i.includes("lightbox")?"lightbox":"inline",a={slim:i.includes("slim"),style:n,...s(o||"{}")};ot({element:e,Alpine:t,options:a})})}function ot({element:t,Alpine:e,options:i}){let o="YouTube",{video:s,playlist:n,style:r,slim:a,loop:d}=i,h={playerVars:{autoplay:1,modestbranding:1,playsinline:1,rel:0,showinfo:0,controls:a?0:1,loop:d?1:0}};s&&(h.videoId=s),n&&(n.startsWith("PL")||(n="PL"+n),h.playerVars.listType="playlist",h.playerVars.list=n);let m=window.localStorage,f=`jonnittoprettyembed_gdpr_${o.toLowerCase()}`,v={title:i.title,loaded:!1,playing:!1,lightbox:r==="lightbox"?!1:null,gdpr:i.gdpr&&m.getItem(f)!=="true"?"needCheck":"isAccepted"},p=null;e.bind(t,{"x-data"(){return{...v,init(){this.ligtbox!==null&&this.$watch("lightbox",(c,l)=>{!c&&c!==l&&this.pause()})},acceptGdpr(){m.setItem(f,"true"),this.$dispatch("prettyembedAcceptGdpr",o),this.load()},play(){p?.playVideo()},pause(){p?.pauseVideo()},load(c){if(c&&c.preventDefault(),this.gdpr!="isAccepted"){this.gdpr="isOpen";return}if(this.lightbox!==null&&(this.lightbox=!0),this.loaded){this.play();return}C(()=>{let l=this.$refs?.youtube||t,u=window.YT;p=new u.Player(l,{...h,events:{onStateChange:({data:y})=>{setTimeout(()=>{if(y===u.PlayerState.PLAYING){this.$dispatch("prettyembedPauseInternal",t),this.loaded=!0,this.playing=!0,this.$dispatch(S,E({event:"play",type:o,style:r,player:p}));return}if(y===u.PlayerState.PAUSED){this.playing=!1,this.$dispatch(S,E({event:"pause",type:o,style:r,player:p}));return}y===u.PlayerState.ENDED&&(this.playing=!1,!d&&!this.lightbox&&!b()&&this.reset(),this.$dispatch(S,E({event:"finished",type:o,style:r,player:p})))},10)}}})})},reset(){p&&(p?.stopVideo(),p.destroy(),p=null,this.loaded=!1,this.playing=!1)}}},"@prettyembedAcceptGdpr.window"({detail:c}){c==o&&(this.gdpr="isAccepted")},"@prettyembedPauseInternal.window"({detail:c}){c!=this.$root&&this.pause()}})}function E({player:t,type:e,style:i,event:o}){let s,n=0,r={};try{s=t?.getVideoUrl()||null,n=t?.getCurrentTime()||0,r=t?.getVideoData()||{}}catch{}return{event:o,type:e,style:i,title:r?.title,author:r?.author,videoUrl:s,currentTime:n,videoID:r?.video_id,quality:r?.video_quality,playlistID:r?.list||null}}window.addEventListener("alpine:init",()=>{window.Alpine.plugin([V,F,H,M,q,U])});})();
