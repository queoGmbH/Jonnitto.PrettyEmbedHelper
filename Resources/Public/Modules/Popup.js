function i(e){e.directive("prettyembedpopup",(t,{expression:r},{evaluate:a})=>{let p=window.getComputedStyle(t).getPropertyValue("--aspect-ratio")||"16 / 9",{ratio:s}=a(`{ratio:${p}}`),c=r||t.href;e.bind(t,{"@click"(d){d.preventDefault();let o=Math.min(window.innerWidth,1260),n=o/s,l=(screen.width-o)/2,h=(screen.height-n)/2;window.open(c,"_blank",`noopener=yes,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=${o},height=${n},left=${l},top=${h}`)}})})}window.addEventListener("alpine:init",()=>{window.Alpine.plugin(i)});