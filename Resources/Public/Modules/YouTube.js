import{c as w,d as v}from"./chunk-TTJLV6PQ.js";var y="prettyembed";function x(e){e.directive("prettyembedyoutube",(n,{modifiers:a,expression:i},{evaluate:r})=>{let l=a.includes("lightbox")?"lightbox":"inline",d={slim:a.includes("slim"),style:l,...r(i||"{}")};$({element:n,Alpine:e,options:d})})}function $({element:e,Alpine:n,options:a}){let i="YouTube",{video:r,playlist:l,style:t,slim:d,loop:g}=a,p={playerVars:{autoplay:1,modestbranding:1,playsinline:1,rel:0,showinfo:0,controls:d?0:1,loop:g?1:0}};r&&(p.videoId=r),l&&(l.startsWith("PL")||(l="PL"+l),p.playerVars.listType="playlist",p.playerVars.list=l);let b=window.localStorage,m=`jonnittoprettyembed_gdpr_${i.toLowerCase()}`,P={title:a.title,loaded:!1,playing:!1,lightbox:t==="lightbox"?!1:null,gdpr:a.gdpr&&b.getItem(m)!=="true"?"needCheck":"isAccepted"},s=null;n.bind(e,{"x-data"(){return{...P,init(){this.ligtbox!==null&&this.$watch("lightbox",(o,h)=>{!o&&o!==h&&this.pause()})},acceptGdpr(){b.setItem(m,"true"),this.$dispatch("prettyembedAcceptGdpr",i),this.load()},play(){s?.playVideo()},pause(){s?.pauseVideo()},load(o){if(o&&o.preventDefault(),this.gdpr!="isAccepted"){this.gdpr="isOpen";return}if(this.lightbox!==null&&(this.lightbox=!0),this.loaded){this.play();return}w(()=>{let h=this.$refs?.youtube||e,u=window.YT;s=new u.Player(h,{...p,events:{onStateChange:({data:c})=>{setTimeout(()=>{if(c===u.PlayerState.PLAYING){this.$dispatch("prettyembedPauseInternal",e),this.loaded=!0,this.playing=!0,this.$dispatch(y,f({event:"play",type:i,style:t,player:s}));return}if(c===u.PlayerState.PAUSED){this.playing=!1,this.$dispatch(y,f({event:"pause",type:i,style:t,player:s}));return}c===u.PlayerState.ENDED&&(this.playing=!1,!g&&!this.lightbox&&!v()&&this.reset(),this.$dispatch(y,f({event:"finished",type:i,style:t,player:s})))},10)}}})})},reset(){s&&(s?.stopVideo(),s.destroy(),s=null,this.loaded=!1,this.playing=!1)}}},"@prettyembedAcceptGdpr.window"({detail:o}){o==i&&(this.gdpr="isAccepted")},"@prettyembedPauseInternal.window"({detail:o}){o!=this.$root&&this.pause()}})}function f({player:e,type:n,style:a,event:i}){let r,l=0,t={};try{r=e?.getVideoUrl()||null,l=e?.getCurrentTime()||0,t=e?.getVideoData()||{}}catch{}return{event:i,type:n,style:a,title:t?.title,author:t?.author,videoUrl:r,currentTime:l,videoID:t?.video_id,quality:t?.video_quality,playlistID:t?.list||null}}window.addEventListener("alpine:init",()=>{window.Alpine.plugin(x)});
