var sha256=function n(e){function t(n,e){return n>>>e|n<<32-e}for(var o,r,u=Math.pow,p=u(2,32),a="length",c="",d=[],s=8*e[a],m=n.h=n.h||[],i=n.k=n.k||[],l=i[a],b={},f=2;64>l;f++)if(!b[f]){for(o=0;313>o;o+=f)b[o]=f;m[l]=u(f,.5)*p|0,i[l++]=u(f,1/3)*p|0}for(e+="";e[a]%64-56;)e+="\0";for(o=0;o<e[a];o++){if(r=e.charCodeAt(o),r>>8)return;d[o>>2]|=r<<(3-o)%4*8}for(d[d[a]]=s/p|0,d[d[a]]=s,r=0;r<d[a];){var v=d.slice(r,r+=16),I=m;for(m=m.slice(0,8),o=0;64>o;o++){var E=v[o-15],g=v[o-2],h=m[0],x=m[4],y=m[7]+(t(x,6)^t(x,11)^t(x,25))+(x&m[5]^~x&m[6])+i[o]+(v[o]=16>o?v[o]:v[o-16]+(t(E,7)^t(E,18)^E>>>3)+v[o-7]+(t(g,17)^t(g,19)^g>>>10)|0),B=(t(h,2)^t(h,13)^t(h,22))+(h&m[1]^h&m[2]^m[1]&m[2]);m=[y+B|0].concat(m),m[4]=m[4]+y|0}for(o=0;8>o;o++)m[o]=m[o]+I[o]|0}for(o=0;8>o;o++)for(r=3;r+1;r--){var D=m[o]>>8*r&255;c+=(16>D?0:"")+D.toString(16)}return c},js1=function(){function n(n){var e="",t=0;for(i=0;i<9;i++)e+=n[i];return t=parseInt(e,16),t}function e(e,t){var o,r,u,p,a,c,d,s,m,i=0;c4=4,p=n(sha256(e+2)),a=n(sha256(e+3)),o=n(sha256(e))%1e4,r=n(sha256(e+1))%1e4,u=o*r,s=o%100,c=parseInt(o/100),m=r%100,d=parseInt(r/100);var l=0;l=t;var b=document.createElement("DIV");b.innerHTML=" "+p%l+"x"+a%l+" = "+p%l*(a%l)+"&nbsp;[("+p%l+","+a%l+")<"+l+"]",document.getElementById("output").appendChild(b);var f=document.createElement("DIV");f.innerHTML=" "+o+"x"+r+"="+c+" x "+d+"x10⁴+"+c+" x "+m+"x10²+"+s+"x"+d+"x10²+"+s+"x"+m,document.getElementById("output").appendChild(f);var v=document.createElement("DIV");v.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;="+c*d+"x10⁴+"+c*m+"x10²+"+d*s+"x10²+"+s*m,document.getElementById("output").appendChild(v);var I=document.createElement("DIV");I.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;="+c*d+"x10⁴+"+(c*m+d*s)+"x10²+"+m*s,document.getElementById("output").appendChild(I);var E=document.createElement("DIV");E.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;="+u,document.getElementById("output").appendChild(E)}var t,o;t=Date.now(),o=1e3,document.getElementById("output").innerHTML="",e(t,o),e(t+4,o),e(t+8,o),e(t+12,o),e(t+16,o),e(t+20,o),document.getElementById("button").onclick=function(){var n,t;n=Date.now(),t=document.getElementById("input").value,document.getElementById("output").innerHTML="",e(n,t),e(n+4,t),e(n+8,t),e(n+12,t),e(n+16,t),e(n+20,t)},document.getElementById("input").onchange=function(){var n,t;n=Date.now(),t=document.getElementById("input").value,document.getElementById("output").innerHTML="",e(n,t),e(n+4,t),e(n+8,t),e(n+12,t),e(n+16,t),e(n+20,t)}},js2=function(){var n=new Date;n=n.getFullYear(),n="©"+n+"  Jishnu R Dev",document.getElementsByClassName("copy")[0].innerHTML=n};