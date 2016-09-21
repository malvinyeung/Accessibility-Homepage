var siteCatConfig=siteCatConfig||{};
siteCatConfig.trackPageLoad=function(){s.server=digitalData.page.server;
s.pageName=digitalData.page.pagename;
s.pageURL=digitalData.page.url;
s.referrer=digitalData.page.referrer;
s.eVar1=digitalData.page.url;
s.eVar3=digitalData.page.locale;
s.eVar4=digitalData.user[0].profile[0].dayssincelastvisit;
s.eVar6=digitalData.page.sitesection;
s.eVar10=digitalData.user[0].profile[0].targetingcompanysize;
s.eVar11=digitalData.page.pageloadtime;
s.eVar12=digitalData.page.searchterm;
s.eVar14=digitalData.user[0].profile[0].usertype;
s.eVar16=digitalData.user[0].profile[0].usercompanysize;
s.eVar17=digitalData.page.numberpageviews;
s.eVar18=digitalData.user[0].profile[0].usercompanycountry;
s.eVar19=digitalData.user[0].profile[0].userprimaryprodinterest;
s.eVar20=digitalData.page.convertingpage;
s.eVar22=digitalData.page.internaldrivers;
s.eVar24=digitalData.user[0].profile[0].timepartinghour;
s.eVar25=digitalData.user[0].profile[0].timepartingday;
s.eVar26=digitalData.user[0].profile[0].formfillstatus;
s.eVar28=digitalData.page.offerid;
s.eVar32=digitalData.page.moduletracking;
s.eVar33=digitalData.page.numofintsearches;
s.eVar34=digitalData.user[0].profile[0].visitnumber;
s.eVar35=digitalData.page.cloud;
s.eVar36=digitalData.page.type;
s.eVar38=digitalData.user[0].profile[0].usercompanyname;
s.eVar40=digitalData.page.authorName;
s.eVar41=digitalData.user[0].profile[0].targetingcompanyindustry;
s.eVar42=digitalData.page.emailid;
s.eVar43=digitalData.page.numberofformcompletes;
s.eVar44=digitalData.page.crossvisittrafficdrivertype;
s.eVar45=digitalData.page.toporleftnav;
s.eVar46=digitalData.page.sembrand;
s.eVar50=digitalData.page.captchatype;
s.eVar52=digitalData.user[0].profile[0].targetingcompanyname;
s.eVar53=digitalData.page.sharechannel;
s.eVar54=digitalData.user[0].profile[0].userfirstformcompletetime;
s.eVar57=digitalData.user[0].profile[0].orgId;
s.eVar58=digitalData.user[0].profile[0].orgEdition;
s.eVar63=digitalData.user[0].profile[0].targetingaudience;
s.eVar75=digitalData.page.subdomainReferrer;
s.prop4=digitalData.page.pageloadtime;
s.prop22=digitalData.page.drivertypepathing;
s.prop27=digitalData.user[0].profile[0].detailedusertype;
s.prop35=digitalData.page.prevpagesanitized;
s.prop37=digitalData.page.percentpageviewed;
s.prop39=digitalData.page.namenolocale;
s.prop40=digitalData.page.drivertype;
s.prop42=digitalData.page.uiframework;
s.prop43=digitalData.page.blogpostmeta;
s.prop47=digitalData.page.numsearchresults;
s.prop49=digitalData.page.segment;
s.prop50=digitalData.page.reportsuite;
s.transactionID=digitalData.user[0].profile[0].transactionid;
s.linkType=digitalData.flags.linktype;
s.pageLoaded=digitalData.flags.pageloaded;
s.charSet=digitalData.page.charSet;
s.channel=digitalData.page.sitesection;
s.prevPage=digitalData.page.prevpage;
var b={pageview:"event11",displayadid:"event43",intdriverimp:"event19",intdriverclick:"event25",firsttimevisit:"event36",returnvisit:"event37",freetriallogin:"event44",scremove:"scRemove",onlinejobapp:"event1",seosearches:"event15",semsearches:"event14",chatview:"event33",blogcomment:"event5",intsearch:"event12",exitlink:"event65",chatformshown:"event32",formconfirmationview:"event28",formview:"event16",autoformcomplete:"event23",formcompletesubmitbuttonclick:"event17",demoformcomplete:"event21",signupformcomplete:"event22",topnavigationclicks:"event2"};
for(var a=0;
a<digitalData.event.length;
a++){if(b[digitalData.event[a].eventInfo.eventID]){s.events=s.apl(s.events,b[digitalData.event[a].eventInfo.eventID],",",2)
}}s.pageType=digitalData.page.spagetype;
if(digitalData.page.spagetype==="errorPage"){s.pageType="errorPage";
s.prop29=digitalData.page.url
}s.products=digitalData.page.products;
s.campaign=digitalData.page.scampaign
};
siteCatConfig.runOnEveryAMRequest=function(){if(s.linkObject&&s.linkType==="e"){if(s.linkObject.attributes&&s.linkObject.attributes["data-exit"]&&s.linkObject.attributes["data-exit"].value==="false"){s.linkObject=null
}if(s.pageName.indexOf("news-press")>-1){s.linkObject.href="pr_page:"+s.linkObject.href
}s.eVar70=s.linkObject.href;
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar70",",",2);
s.events=s.apl(s.events,"event65",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"events",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event65",",",2)
}s.clicked=s.p_go();
if(s.clicked&&s.clicked.href){var b=s.trimUrl(document.location.href);
var f=s.trimUrl(s.clicked.href);
if((b!=f)&&Util.getParam("d","",s.clicked.href)){var a=Server.getInternalDomains(),g=true;
if(a.length>0){for(var d=0;
d<a.length;
d++){if(s.clicked.href.indexOf(a[d])>-1){g=false;
break
}}if(g){s.linkType="e";
s.products=digitalData.util.trackCTAs("",Util.convert15To18(Util.getParam("d","",s.clicked.href)));
s.events=s.products.indexOf("event25")==-1?s.events:s.apl(s.events,"event25",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"products",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"events",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event25",",",2)
}else{if(s.clicked.href.indexOf("internal=true")==-1){s.clicked.href=s.clicked.href.replace("d="+Util.getParam("d","",s.clicked.href),"d="+Util.getParam("d","",s.clicked.href)+"&internal=true")
}}}}if(s.pageName.indexOf(":login")>-1&&s.clicked.href.indexOf("www.salesforce.com")>-1){s.clicked.href+=(s.clicked.href.indexOf("?")>-1?"&":"?")+"r="+Url.encodeComponent(document.location.href)
}try{s.dfSite="dreamevent.secure.force.com/dreamforce";
if(s.clicked.href.indexOf(s.dfSite)>-1){s.clicked.href=s.clicked.href.indexOf(s.dfSite+"/")>-1?s.clicked.href:s.clicked.href.replace(s.dfSite,s.dfSite+"/");
s.clicked.href+=(s.clicked.href.indexOf("?")>-1?"&":"?")+"wl="+Page.getLocale()+"&wt="+vp.getType();
s.clicked.href+=(s.clicked.href.indexOf("?")>-1?"&":"?")+"mboxSession="+mboxFactoryDefault.getSessionId().getId()
}}catch(c){}try{if(s.clicked.getAttribute("sfdc:mobilehref")!=null){s.linkType=s.linkType||"o";
s.linkName="mobile-swap|"+s.clicked.href
}else{if(s.clicked.href.indexOf("#")>-1&&s.clicked.href.indexOf("#submit")==-1&&s.clicked.href.indexOf("#")!=s.clicked.href.length-1&&!s.linkTracked){s.linkType=s.linkType||"o";
s.linkName="anchor|"+s.clicked.href
}}}catch(c){}s.linkTracked=false
}if(!s.linkTracked){s.downloadUrl=s.linkHandler("","d","",1);
if(s.downloadUrl){s.events="event11";
s.downloadUrl=s.downloadUrl.indexOf("#")>-1?s.downloadUrl.substring(0,s.downloadUrl.indexOf("#")):s.downloadUrl;
s.downloadUrl=s.downloadUrl.toLowerCase();
s.downloadUrl=s.repl(s.downloadUrl,"https://","");
s.downloadUrl=s.repl(s.downloadUrl,"http://","");
s.downloadUrl=s.downloadUrl.substring(s.downloadUrl.indexOf("/")+1);
s.downloadUrl=s.repl(s.downloadUrl,"/",":").toLowerCase();
s.pageName=s.server+":"+s.eVar6+":file:"+s.downloadUrl;
s.prop35=Page.setPrevious()?Page.setPrevious():"[NO PREVIOUS PAGE AVAILABLE]"
}}s.prop1=s.eVar1="D=g";
s.prop2=s.eVar3?"D=v3":"";
s.channel=s.eVar6?"D=v6":"";
s.prop12=s.eVar12?"D=v12":"";
s.prop14=s.eVar14?"D=v14":"";
s.prop18=s.eVar24?"D=v24":"";
s.prop19=s.eVar25?"D=v25":"";
s.prop23=s.eVar34?"D=v34":"";
s.prop32=s.eVar35?"D=v35":"";
s.prop33=s.eVar36?"D=v36":"";
s.eVar2=s.referrer?"D=r":"";
s.eVar8=s.pageName?"D=pageName":"";
s.eVar64=(s.transactionID?"D=xact":"");
s.eVar27=s.campaign?"D=v0":"";
s.eVar39=s.prop35?"D=c35":"";
s.linkTrackVars=s.apl(s.linkTrackVars,"prop7",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"prop49",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar34",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar7",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar8",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar35",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event7",",",2)
};
var s_account=Server.getAccount();
var s=s_gi(s_account);
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes=".exe,.zip,.wav,.mp3,.mov,.mpg,.avi,.wmv,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.eps";
s.linkInternalFilters="javascript:,.salesforce.com,sfdcstatic.com,.force.com,chatter.com,opinionlab.com,mailto:,"+document.location.hostname;
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
s.fpCookieDomainPeriods=(Util.countChars(document.location.hostname,".")+1).toString();
s._tpDST={2012:"3/11,11/4",2013:"3/10,11/3",2014:"3/9,11/2",2015:"3/8,11/1",2016:"3/13,11/6",2017:"3/12,11/5",2018:"3/11,11/4",2019:"3/10,11/3"};
s.wd=window;
s.usePlugins=true;
function s_doPlugins(a){if(!a.canceldoplugins){if(!a.pageLoaded){siteCatConfig.trackPageLoad()
}siteCatConfig.runOnEveryAMRequest()
}a.pageLoaded=true
}s.doPlugins=s_doPlugins;
s.cvpSimple=function(v,cn,ex,ct,dl){if(!v){return""
}ex=ex?ex:365;
var exd=new Date(),cv=s.c_r(cn),na=new Array();
if(cv.indexOf("[[")>-1){var oa=new Array();
oa=eval(cv);
for(var i=0;
i<oa.length;
i++){na[na.length]=oa[i][0]
}exd.setDate(exd.getDate()-1)
}else{if(cv){na=cv.split("~")
}}if(na.length>=ct){na.splice(0,1)
}na[na.length]=v;
exd.setDate(exd.getDate()+ex);
s.c_w(cn,na.join("~"),exd);
return na.join(dl)
};
function s_getLoadTime(){if(!window.s_loadT){var c=new Date().getTime(),f=window.performance?performance.timing:0,d=f?f.requestStart:window.inHeadTS||0;
s_loadT=d?Math.round((c-d)/100):""
}return s_loadT
}s.trimUrl=new Function("u","if(!u){return '';}if(u.indexOf('?')>-1){u=u.substring(0,u.indexOf('?'));}if(u.indexOf('#')>-1){u=u.substring(0,u.indexOf('#'));}return u;");
s.deDupe=new Function("l","d","d=d?d:',';if(!(l&&d)){return false;}var a=l.split(d),lv='',i=0;a.sort();while(i<a.length){if(a[i]==lv){a.splice(i,1);}else{lv=a[i];i++;}}return a.join(d)");
s.getQueryParam=s.Util.getQueryParam;
s.getValOnce=new Function("v","c","e","var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
if(!s.__ccucr){s.c_rr=s.c_r;
s.__ccucr=true;
function c_r(f){var j=this,o=new Date,b=j.c_rr(f),p=j.c_rspers(),g,a,n;
if(b){return b
}f=j.escape?j.escape(f):encodeURIComponent(f);
g=p.indexOf(" "+f+"=");
p=g<0?j.c_rr("s_sess"):p;
g=p.indexOf(" "+f+"=");
a=g<0?g:p.indexOf("|",g);
n=g<0?g:p.indexOf(";",g);
a=a>0?a:n;
b=g<0?"":j.unescape?j.unescape(p.substring(g+2+f.length,a<0?p.length:a)):decodeURIComponent(p.substring(g+2+f.length,a<0?p.length:a));
return b
}function c_rspers(){var j=this,c=j.c_rr("s_pers"),f=new Date().getTime(),a=null,k=[],d="";
if(!c){return d
}k=c.split(";");
for(var g=0,b=k.length;
g<b;
g++){a=k[g].match(/\|([0-9]+)$/);
if(a&&parseInt(a[1])>=f){d+=k[g]+";"
}}return d
}s.c_rspers=c_rspers;
s.c_r=s.cookieRead=c_r
}if(!s.__ccucw){s.c_wr=s.c_w;
s.__ccucw=true;
function c_w(g,y,o){var B=this,p=new Date,w=0,b="s_pers",a="s_sess",u=0,r=0,z,x,q,j,A,n;
p.setTime(p.getTime()-60000);
if(B.c_rr(g)){B.c_wr(g,"",p)
}g=B.escape?B.escape(g):encodeURIComponent(g);
z=B.c_rspers();
j=z.indexOf(" "+g+"=");
if(j>-1){z=z.substring(0,j)+z.substring(z.indexOf(";",j)+1);
u=1
}x=B.c_rr(a);
j=x.indexOf(" "+g+"=");
if(j>-1){x=x.substring(0,j)+x.substring(x.indexOf(";",j)+1);
r=1
}p=new Date;
if(o){if(o==1){o=new Date,n=o.getYear(),o.setYear(n+5+(n<1900?1900:0))
}if(o.getTime()>p.getTime()){z+=" "+g+"="+(B.escape?B.escape(y):encodeURIComponent(y))+"|"+o.getTime()+";";
u=1
}}else{x+=" "+g+"="+(B.escape?B.escape(y):encodeURIComponent(y))+";";
r=1
}x=x.replace(/%00/g,"");
z=z.replace(/%00/g,"");
if(r){B.c_wr(a,x,0)
}if(u){A=z;
while(A&&A.indexOf(";")!=-1){var m=parseInt(A.substring(A.indexOf("|")+1,A.indexOf(";")));
A=A.substring(A.indexOf(";")+1);
w=w<m?m:w
}p.setTime(w);
B.c_wr(b,z,p)
}return y==B.c_r(B.unescape?B.unescape(g):decodeURIComponent(g))
}s.c_w=s.cookieWrite=c_w
}s.getAndPersistValue=new Function("v","c","e","var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
s.linkHandler=new Function("p","t","r","c","var s=this;var o=s.p_go(),h=o.href;var i,l;var n=p?'':t=='e'?'linkInternalFilters':t=='d'?'linkDownloadFileTypes':'';t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(n){p=s.rep(s[n],',','|');}l=s.pt(p,'|','p_gn',h.toLowerCase());if(l&&n!='linkInternalFilters'||(!l&&n=='linkInternalFilters')){s.linkName=l=='[['?'':l;s.linkType=t;if(c){s.linkName=s.linkType=s.lnk=s.eo='';}return r?o:h;}return '';");
s.p_gn=new Function("t","h","var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;");
s.getPercentPageViewed=new Function("n","var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a");
s.getTimeParting=new Function("h","z","var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
s.trackTNT=new Function("v","p","b","var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s.getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");
s.apl=new Function("l","v","d","u","var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l");
s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.repl=new Function("x","o","n","var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.ia=new Function("ar","v","for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");
s.p_go=new Function("var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk;var y=s.ot(o);var n=s.oid(o);var x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);x=o.s_oidt}}return o?o:'';");
s.visitorNamespace="salesforce";
s.trackingServer="omtr1.partners.salesforce.com";
s.trackingServerSecure="omtr2.partners.salesforce.com";
s.visitorMigrationServer="salesforce.122.2o7.net";
if(typeof Visitor!=="undefined"){s.prop57="VisitorAPI Present";
s.visitor=Visitor.getInstance("8D6C67C25245AF020A490D4C@AdobeOrg")
}else{s.prop57="VisitorAPI Missing"
}function AppMeasurement(){var o=this;
o.version="1.5.3";
var f=window;
f.s_c_in||(f.s_c_il=[],f.s_c_in=0);
o._il=f.s_c_il;
o._in=f.s_c_in;
o._il[o._in]=o;
f.s_c_in++;
o._c="s_c";
var c=f.AppMeasurement.zb;
c||(c=null);
var b=f,d,w;
try{for(d=b.parent,w=b.location;
d&&d.location&&w&&""+d.location!=""+w&&b.location&&""+d.location!=""+b.location&&d.location.host==w.host;
){b=d,d=b.parent
}}catch(p){}o.ob=function(n){try{console.log(n)
}catch(k){}};
o.za=function(k){return""+parseInt(k)==""+k
};
o.replace=function(n,k,q){return !n||0>n.indexOf(k)?n:n.split(k).join(q)
};
o.escape=function(n){var a,k;
if(!n){return n
}n=encodeURIComponent(n);
for(a=0;
7>a;
a++){k="+~!*()'".substring(a,a+1),0<=n.indexOf(k)&&(n=o.replace(n,k,"%"+k.charCodeAt(0).toString(16).toUpperCase()))
}return n
};
o.unescape=function(k){if(!k){return k
}k=0<=k.indexOf("+")?o.replace(k,"+"," "):k;
try{return decodeURIComponent(k)
}catch(a){}return unescape(k)
};
o.gb=function(){var n=f.location.hostname,a=o.fpCookieDomainPeriods,k;
a||(a=o.cookieDomainPeriods);
if(n&&!o.cookieDomain&&!/^[0-9.]+$/.test(n)&&(a=a?parseInt(a):2,a=2<a?a:2,k=n.lastIndexOf("."),0<=k)){for(;
0<=k&&1<a;
){k=n.lastIndexOf(".",k-1),a--
}o.cookieDomain=0<k?n.substring(k):n
}return o.cookieDomain
};
o.c_r=o.cookieRead=function(q){q=o.escape(q);
var a=" "+o.d.cookie,n=a.indexOf(" "+q+"="),k=0>n?n:a.indexOf(";",n);
q=0>n?"":o.unescape(a.substring(n+2+q.length,0>k?a.length:k));
return"[[B]]"!=q?q:""
};
o.c_w=o.cookieWrite=function(t,a,r){var n=o.gb(),q=o.cookieLifetime,k;
a=""+a;
q=q?(""+q).toUpperCase():"";
r&&"SESSION"!=q&&"NONE"!=q&&((k=""!=a?parseInt(q?q:0):-60)?(r=new Date,r.setTime(r.getTime()+1000*k)):1==r&&(r=new Date,k=r.getYear(),r.setYear(k+5+(1900>k?1900:0))));
return t&&"NONE"!=q?(o.d.cookie=t+"="+o.escape(""!=a?a:"[[B]]")+"; path=/;"+(r&&"SESSION"!=q?" expires="+r.toGMTString()+";":"")+(n?" domain="+n+";":""),o.cookieRead(t)==a):0
};
o.G=[];
o.ba=function(u,k,t){if(o.ta){return 0
}o.maxDelay||(o.maxDelay=250);
var q=0,r=(new Date).getTime()+o.maxDelay,n=o.d.visibilityState,a=["webkitvisibilitychange","visibilitychange"];
n||(n=o.d.webkitVisibilityState);
if(n&&"prerender"==n){if(!o.ca){for(o.ca=1,t=0;
t<a.length;
t++){o.d.addEventListener(a[t],function(){var x=o.d.visibilityState;
x||(x=o.d.webkitVisibilityState);
"visible"==x&&(o.ca=0,o.delayReady())
})
}}q=1;
r=0
}else{t||o.l("_d")&&(q=1)
}q&&(o.G.push({m:u,a:k,t:r}),o.ca||setTimeout(o.delayReady,o.maxDelay));
return q
};
o.delayReady=function(){var n=(new Date).getTime(),a=0,k;
for(o.l("_d")?a=1:o.na();
0<o.G.length;
){k=o.G.shift();
if(a&&!k.t&&k.t>n){o.G.unshift(k);
setTimeout(o.delayReady,parseInt(o.maxDelay/2));
break
}o.ta=1;
o[k.m].apply(o,k.a);
o.ta=0
}};
o.setAccount=o.sa=function(n){var a,k;
if(!o.ba("setAccount",arguments)){if(o.account=n,o.allAccounts){for(a=o.allAccounts.concat(n.split(",")),o.allAccounts=[],a.sort(),k=0;
k<a.length;
k++){0!=k&&a[k-1]==a[k]||o.allAccounts.push(a[k])
}}else{o.allAccounts=n.split(",")
}}};
o.foreachVar=function(u,k){var t,q,r,n,a="";
r=q="";
if(o.lightProfileID){t=o.K,(a=o.lightTrackVars)&&(a=","+a+","+o.ga.join(",")+",")
}else{t=o.c;
if(o.pe||o.linkType){a=o.linkTrackVars,q=o.linkTrackEvents,o.pe&&(r=o.pe.substring(0,1).toUpperCase()+o.pe.substring(1),o[r]&&(a=o[r].yb,q=o[r].xb))
}a&&(a=","+a+","+o.A.join(",")+",");
q&&a&&(a+=",events,")
}k&&(k=","+k+",");
for(q=0;
q<t.length;
q++){r=t[q],(n=o[r])&&(!a||0<=a.indexOf(","+r+","))&&(!k||0<=k.indexOf(","+r+","))&&u(r,n)
}};
o.B=function(B,C,z,x,y){var u="",r,a,t,D,q=0;
"contextData"==B&&(B="c");
if(C){for(r in C){if(!(Object.prototype[r]||y&&r.substring(0,y.length)!=y)&&C[r]&&(!z||0<=z.indexOf(","+(x?x+".":"")+r+","))){t=!1;
if(q){for(a=0;
a<q.length;
a++){r.substring(0,q[a].length)==q[a]&&(t=!0)
}}if(!t&&(""==u&&(u+="&"+B+"."),a=C[r],y&&(r=r.substring(y.length)),0<r.length)){if(t=r.indexOf("."),0<t){a=r.substring(0,t),t=(y?y:"")+a+".",q||(q=[]),q.push(t),u+=o.B(a,C,z,x,t)
}else{if("boolean"==typeof a&&(a=a?"true":"false"),a){if("retrieveLightData"==x&&0>y.indexOf(".contextData.")){switch(t=r.substring(0,4),D=r.substring(4),r){case"transactionID":r="xact";
break;
case"channel":r="ch";
break;
case"campaign":r="v0";
break;
default:o.za(D)&&("prop"==t?r="c"+D:"eVar"==t?r="v"+D:"list"==t?r="l"+D:"hier"==t&&(r="h"+D,a=a.substring(0,255)))
}}u+="&"+o.escape(r)+"="+o.escape(a)
}}}}}""!=u&&(u+="&."+B)
}return u
};
o.ib=function(){var D="",E,C,z,B,y,u,q,x,t="",a="",F=B="";
if(o.lightProfileID){E=o.K,(t=o.lightTrackVars)&&(t=","+t+","+o.ga.join(",")+",")
}else{E=o.c;
if(o.pe||o.linkType){t=o.linkTrackVars,a=o.linkTrackEvents,o.pe&&(B=o.pe.substring(0,1).toUpperCase()+o.pe.substring(1),o[B]&&(t=o[B].yb,a=o[B].xb))
}t&&(t=","+t+","+o.A.join(",")+",");
a&&(a=","+a+",",t&&(t+=",events,"));
o.events2&&(F+=(""!=F?",":"")+o.events2)
}if(o.visitor&&1.5<=parseFloat(o.visitor.version)&&o.visitor.getCustomerIDs){B=c;
if(y=o.visitor.getCustomerIDs()){for(C in y){Object.prototype[C]||(z=y[C],B||(B={}),z.id&&(B[C+".id"]=z.id),z.authState&&(B[C+".as"]=z.authState))
}}B&&(D+=o.B("cid",B))
}o.AudienceManagement&&o.AudienceManagement.isReady()&&(D+=o.B("d",o.AudienceManagement.getEventCallConfigParams()));
for(C=0;
C<E.length;
C++){B=E[C];
y=o[B];
z=B.substring(0,4);
u=B.substring(4);
!y&&"events"==B&&F&&(y=F,F="");
if(y&&(!t||0<=t.indexOf(","+B+","))){switch(B){case"supplementalDataID":B="sdid";
break;
case"timestamp":B="ts";
break;
case"dynamicVariablePrefix":B="D";
break;
case"visitorID":B="vid";
break;
case"marketingCloudVisitorID":B="mid";
break;
case"analyticsVisitorID":B="aid";
break;
case"audienceManagerLocationHint":B="aamlh";
break;
case"audienceManagerBlob":B="aamb";
break;
case"authState":B="as";
break;
case"pageURL":B="g";
255<y.length&&(o.pageURLRest=y.substring(255),y=y.substring(0,255));
break;
case"pageURLRest":B="-g";
break;
case"referrer":B="r";
break;
case"vmk":case"visitorMigrationKey":B="vmt";
break;
case"visitorMigrationServer":B="vmf";
o.ssl&&o.visitorMigrationServerSecure&&(y="");
break;
case"visitorMigrationServerSecure":B="vmf";
!o.ssl&&o.visitorMigrationServer&&(y="");
break;
case"charSet":B="ce";
break;
case"visitorNamespace":B="ns";
break;
case"cookieDomainPeriods":B="cdp";
break;
case"cookieLifetime":B="cl";
break;
case"variableProvider":B="vvp";
break;
case"currencyCode":B="cc";
break;
case"channel":B="ch";
break;
case"transactionID":B="xact";
break;
case"campaign":B="v0";
break;
case"latitude":B="lat";
break;
case"longitude":B="lon";
break;
case"resolution":B="s";
break;
case"colorDepth":B="c";
break;
case"javascriptVersion":B="j";
break;
case"javaEnabled":B="v";
break;
case"cookiesEnabled":B="k";
break;
case"browserWidth":B="bw";
break;
case"browserHeight":B="bh";
break;
case"connectionType":B="ct";
break;
case"homepage":B="hp";
break;
case"events":F&&(y+=(""!=y?",":"")+F);
if(a){for(u=y.split(","),y="",z=0;
z<u.length;
z++){q=u[z],x=q.indexOf("="),0<=x&&(q=q.substring(0,x)),x=q.indexOf(":"),0<=x&&(q=q.substring(0,x)),0<=a.indexOf(","+q+",")&&(y+=(y?",":"")+u[z])
}}break;
case"events2":y="";
break;
case"contextData":D+=o.B("c",o[B],t,B);
y="";
break;
case"lightProfileID":B="mtp";
break;
case"lightStoreForSeconds":B="mtss";
o.lightProfileID||(y="");
break;
case"lightIncrementBy":B="mti";
o.lightProfileID||(y="");
break;
case"retrieveLightProfiles":B="mtsr";
break;
case"deleteLightProfiles":B="mtsd";
break;
case"retrieveLightData":o.retrieveLightProfiles&&(D+=o.B("mts",o[B],t,B));
y="";
break;
default:o.za(u)&&("prop"==z?B="c"+u:"eVar"==z?B="v"+u:"list"==z?B="l"+u:"hier"==z&&(B="h"+u,y=y.substring(0,255)))
}y&&(D+="&"+B+"="+("pev"!=B.substring(0,3)?o.escape(y):y))
}"pev3"==B&&o.e&&(D+=o.e)
}return D
};
o.u=function(n){var k=n.tagName;
if("undefined"!=""+n.Cb||"undefined"!=""+n.sb&&"HTML"!=(""+n.sb).toUpperCase()){return""
}k=k&&k.toUpperCase?k.toUpperCase():"";
"SHAPE"==k&&(k="");
k&&(("INPUT"==k||"BUTTON"==k)&&n.type&&n.type.toUpperCase?k=n.type.toUpperCase():!k&&n.href&&(k="A"));
return k
};
o.va=function(n){var k=n.href?n.href:"",t,q,r;
t=k.indexOf(":");
q=k.indexOf("?");
r=k.indexOf("/");
k&&(0>t||0<=q&&t>q||0<=r&&t>r)&&(q=n.protocol&&1<n.protocol.length?n.protocol:l.protocol?l.protocol:"",t=l.pathname.lastIndexOf("/"),k=(q?q+"//":"")+(n.host?n.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>t?0:t)+"/":"")+k);
return k
};
o.H=function(t){var a=o.u(t),r,n,q="",k=0;
return a&&(r=t.protocol,n=t.onclick,!t.href||"A"!=a&&"AREA"!=a||n&&r&&!(0>r.toLowerCase().indexOf("javascript"))?n?(q=o.replace(o.replace(o.replace(o.replace(""+n,"\r",""),"\n",""),"\t","")," ",""),k=2):"INPUT"==a||"SUBMIT"==a?(t.value?q=t.value:t.innerText?q=t.innerText:t.textContent&&(q=t.textContent),k=3):t.src&&"IMAGE"==a&&(q=t.src):q=o.va(t),q)?{id:q.substring(0,100),type:k}:0
};
o.Ab=function(n){for(var a=o.u(n),k=o.H(n);
n&&!k&&"BODY"!=a;
){if(n=n.parentElement?n.parentElement:n.parentNode){a=o.u(n),k=o.H(n)
}}k&&"BODY"!=a||(n=0);
n&&(a=n.onclick?""+n.onclick:"",0<=a.indexOf(".tl(")||0<=a.indexOf(".trackLink("))&&(n=0);
return n
};
o.rb=function(){var D,E,C=o.linkObject,z=o.linkType,B=o.linkURL,y,x;
o.ha=1;
C||(o.ha=0,C=o.clickObject);
if(C){D=o.u(C);
for(E=o.H(C);
C&&!E&&"BODY"!=D;
){if(C=C.parentElement?C.parentElement:C.parentNode){D=o.u(C),E=o.H(C)
}}E&&"BODY"!=D||(C=0);
if(C&&!o.linkObject){var t=C.onclick?""+C.onclick:"";
if(0<=t.indexOf(".tl(")||0<=t.indexOf(".trackLink(")){C=0
}}}else{o.ha=1
}!B&&C&&(B=o.va(C));
B&&!o.linkLeaveQueryString&&(y=B.indexOf("?"),0<=y&&(B=B.substring(0,y)));
if(!z&&B){var u=0,a=0,k;
if(o.trackDownloadLinks&&o.linkDownloadFileTypes){for(t=B.toLowerCase(),y=t.indexOf("?"),x=t.indexOf("#"),0<=y?0<=x&&x<y&&(y=x):y=x,0<=y&&(t=t.substring(0,y)),y=o.linkDownloadFileTypes.toLowerCase().split(","),x=0;
x<y.length;
x++){(k=y[x])&&t.substring(t.length-(k.length+1))=="."+k&&(z="d")
}}if(o.trackExternalLinks&&!z&&(t=B.toLowerCase(),o.ya(t)&&(o.linkInternalFilters||(o.linkInternalFilters=f.location.hostname),y=0,o.linkExternalFilters?(y=o.linkExternalFilters.toLowerCase().split(","),u=1):o.linkInternalFilters&&(y=o.linkInternalFilters.toLowerCase().split(",")),y))){for(x=0;
x<y.length;
x++){k=y[x],0<=t.indexOf(k)&&(a=1)
}a?u&&(z="e"):u||(z="e")
}}o.linkObject=C;
o.linkURL=B;
o.linkType=z;
if(o.trackClickMap||o.trackInlineStats){o.e="",C&&(z=o.pageName,B=1,C=C.sourceIndex,z||(z=o.pageURL,B=0),f.s_objectID&&(E.id=f.s_objectID,C=E.type=1),z&&E&&E.id&&D&&(o.e="&pid="+o.escape(z.substring(0,255))+(B?"&pidt="+B:"")+"&oid="+o.escape(E.id.substring(0,100))+(E.type?"&oidt="+E.type:"")+"&ot="+D+(C?"&oi="+C:"")))
}};
o.jb=function(){var y=o.ha,z=o.linkType,x=o.linkURL,t=o.linkName;
z&&(x||t)&&(z=z.toLowerCase(),"d"!=z&&"e"!=z&&(z="o"),o.pe="lnk_"+z,o.pev1=x?o.escape(x):"",o.pev2=t?o.escape(t):"",y=1);
o.abort&&(y=0);
if(o.trackClickMap||o.trackInlineStats){var z={},x=0,u=o.cookieRead("s_sq"),r=u?u.split("&"):0,n,a,q,u=0;
if(r){for(n=0;
n<r.length;
n++){a=r[n].split("="),t=o.unescape(a[0]).split(","),a=o.unescape(a[1]),z[a]=t
}}t=o.account.split(",");
if(y||o.e){y&&!o.e&&(u=1);
for(a in z){if(!Object.prototype[a]){for(n=0;
n<t.length;
n++){for(u&&(q=z[a].join(","),q==o.account&&(o.e+=("&"!=a.charAt(0)?"&":"")+a,z[a]=[],x=1)),r=0;
r<z[a].length;
r++){q=z[a][r],q==t[n]&&(u&&(o.e+="&u="+o.escape(q)+("&"!=a.charAt(0)?"&":"")+a+"&u=0"),z[a].splice(r,1),x=1)
}}}}y||(x=1);
if(x){u="";
n=2;
!y&&o.e&&(u=o.escape(t.join(","))+"="+o.escape(o.e),n=1);
for(a in z){!Object.prototype[a]&&0<n&&0<z[a].length&&(u+=(u?"&":"")+o.escape(z[a].join(","))+"="+o.escape(a),n--)
}o.cookieWrite("s_sq",u)
}}}return y
};
o.kb=function(){if(!o.wb){var F=new Date,G=b.location,E,C,D=C=E="",B="",y="",z="1.2",r=o.cookieWrite("s_cc","true",0)?"Y":"N",a="",K="";
if(F.setUTCDate&&(z="1.3",(0).toPrecision&&(z="1.5",F=[],F.forEach))){z="1.6";
C=0;
E={};
try{C=new Iterator(E),C.next&&(z="1.7",F.reduce&&(z="1.8",z.trim&&(z="1.8.1",Date.parse&&(z="1.8.2",Object.create&&(z="1.8.5")))))
}catch(J){}}E=screen.width+"x"+screen.height;
D=navigator.javaEnabled()?"Y":"N";
C=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
B=o.w.innerWidth?o.w.innerWidth:o.d.documentElement.offsetWidth;
y=o.w.innerHeight?o.w.innerHeight:o.d.documentElement.offsetHeight;
try{o.b.addBehavior("#default#homePage"),a=o.b.Bb(G)?"Y":"N"
}catch(I){}try{o.b.addBehavior("#default#clientCaps"),K=o.b.connectionType
}catch(H){}o.resolution=E;
o.colorDepth=C;
o.javascriptVersion=z;
o.javaEnabled=D;
o.cookiesEnabled=r;
o.browserWidth=B;
o.browserHeight=y;
o.connectionType=K;
o.homepage=a;
o.wb=1
}};
o.L={};
o.loadModule=function(q,a){var n=o.L[q];
if(!n){n=f["AppMeasurement_Module_"+q]?new f["AppMeasurement_Module_"+q](o):{};
o.L[q]=o[q]=n;
n.Oa=function(){return n.Sa
};
n.Ta=function(r){if(n.Sa=r){o[q+"_onLoad"]=r,o.ba(q+"_onLoad",[o,n],1)||r(o,n)
}};
try{Object.defineProperty?Object.defineProperty(n,"onLoad",{get:n.Oa,set:n.Ta}):n._olc=1
}catch(k){n._olc=1
}}a&&(o[q+"_onLoad"]=a,o.ba(q+"_onLoad",[o,n],1)||a(o,n))
};
o.l=function(n){var a,k;
for(a in o.L){if(!Object.prototype[a]&&(k=o.L[a])&&(k._olc&&k.onLoad&&(k._olc=0,k.onLoad(o,k)),k[n]&&k[n]())){return 1
}}return 0
};
o.mb=function(){var q=Math.floor(10000000000000*Math.random()),a=o.visitorSampling,n=o.visitorSamplingGroup,n="s_vsn_"+(o.visitorNamespace?o.visitorNamespace:o.account)+(n?"_"+n:""),k=o.cookieRead(n);
if(a){k&&(k=parseInt(k));
if(!k){if(!o.cookieWrite(n,q)){return 0
}k=q
}if(k%10000>v){return 0
}}return 1
};
o.M=function(y,n){var x,t,u,r,a,q;
for(x=0;
2>x;
x++){for(t=0<x?o.oa:o.c,u=0;
u<t.length;
u++){if(r=t[u],(a=y[r])||y["!"+r]){if(!n&&("contextData"==r||"retrieveLightData"==r)&&o[r]){for(q in o[r]){a[q]||(a[q]=o[r][q])
}}o[r]=a
}}}};
o.Ha=function(t,a){var r,n,q,k;
for(r=0;
2>r;
r++){for(n=0<r?o.oa:o.c,q=0;
q<n.length;
q++){k=n[q],t[k]=o[k],a||t[k]||(t["!"+k]=1)
}}};
o.eb=function(E){var D,C,z,B,y,u=0,x,t="",r="";
if(E&&255<E.length&&(D=""+E,C=D.indexOf("?"),0<C&&(x=D.substring(C+1),D=D.substring(0,C),B=D.toLowerCase(),z=0,"http://"==B.substring(0,7)?z+=7:"https://"==B.substring(0,8)&&(z+=8),C=B.indexOf("/",z),0<C&&(B=B.substring(z,C),y=D.substring(C),D=D.substring(0,C),0<=B.indexOf("google")?u=",q,ie,start,search_key,word,kw,cd,":0<=B.indexOf("yahoo.co")&&(u=",p,ei,"),u&&x)))){if((E=x.split("&"))&&1<E.length){for(z=0;
z<E.length;
z++){B=E[z],C=B.indexOf("="),0<C&&0<=u.indexOf(","+B.substring(0,C)+",")?t+=(t?"&":"")+B:r+=(r?"&":"")+B
}t&&r?x=t+"&"+r:r=""
}C=253-(x.length-r.length)-D.length;
E=D+(0<C?y.substring(0,C):"")+"?"+x
}return E
};
o.Na=function(n){var a=o.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];
a||(a=o.d.webkitVisibilityState);
if(a&&"prerender"==a){if(n){for(a=0;
a<k.length;
a++){o.d.addEventListener(k[a],function(){var q=o.d.visibilityState;
q||(q=o.d.webkitVisibilityState);
"visible"==q&&n()
})
}}return !1
}return !0
};
o.Y=!1;
o.D=!1;
o.Ua=function(){o.D=!0;
o.i()
};
o.W=!1;
o.Q=!1;
o.Ra=function(a){o.marketingCloudVisitorID=a;
o.Q=!0;
o.i()
};
o.T=!1;
o.N=!1;
o.Ja=function(a){o.analyticsVisitorID=a;
o.N=!0;
o.i()
};
o.V=!1;
o.P=!1;
o.La=function(a){o.audienceManagerLocationHint=a;
o.P=!0;
o.i()
};
o.U=!1;
o.O=!1;
o.Ka=function(a){o.audienceManagerBlob=a;
o.O=!0;
o.i()
};
o.Ma=function(a){o.maxDelay||(o.maxDelay=250);
return o.l("_d")?(a&&setTimeout(function(){a()
},o.maxDelay),!1):!0
};
o.X=!1;
o.C=!1;
o.na=function(){o.C=!0;
o.i()
};
o.isReadyToTrack=function(){var k=!0,a=o.visitor;
o.Y||o.D||(o.Na(o.Ua)?o.D=!0:o.Y=!0);
if(o.Y&&!o.D){return !1
}a&&a.isAllowed()&&(o.W||o.marketingCloudVisitorID||!a.getMarketingCloudVisitorID||(o.W=!0,o.marketingCloudVisitorID=a.getMarketingCloudVisitorID([o,o.Ra]),o.marketingCloudVisitorID&&(o.Q=!0)),o.T||o.analyticsVisitorID||!a.getAnalyticsVisitorID||(o.T=!0,o.analyticsVisitorID=a.getAnalyticsVisitorID([o,o.Ja]),o.analyticsVisitorID&&(o.N=!0)),o.V||o.audienceManagerLocationHint||!a.getAudienceManagerLocationHint||(o.V=!0,o.audienceManagerLocationHint=a.getAudienceManagerLocationHint([o,o.La]),o.audienceManagerLocationHint&&(o.P=!0)),o.U||o.audienceManagerBlob||!a.getAudienceManagerBlob||(o.U=!0,o.audienceManagerBlob=a.getAudienceManagerBlob([o,o.Ka]),o.audienceManagerBlob&&(o.O=!0)),o.W&&!o.Q&&!o.marketingCloudVisitorID||o.T&&!o.N&&!o.analyticsVisitorID||o.V&&!o.P&&!o.audienceManagerLocationHint||o.U&&!o.O&&!o.audienceManagerBlob)&&(k=!1);
o.X||o.C||(o.Ma(o.na)?o.C=!0:o.X=!0);
o.X&&!o.C&&(k=!1);
return k
};
o.k=c;
o.o=0;
o.callbackWhenReadyToTrack=function(q,a,n){var k;
k={};
k.Ya=q;
k.Xa=a;
k.Va=n;
o.k==c&&(o.k=[]);
o.k.push(k);
0==o.o&&(o.o=setInterval(o.i,100))
};
o.i=function(){var a;
if(o.isReadyToTrack()&&(o.o&&(clearInterval(o.o),o.o=0),o.k!=c)){for(;
0<o.k.length;
){a=o.k.shift(),a.Xa.apply(a.Ya,a.Va)
}}};
o.Pa=function(r){var a,q,k=c,n=c;
if(!o.isReadyToTrack()){a=[];
if(r!=c){for(q in k={},r){k[q]=r[q]
}}n={};
o.Ha(n,!0);
a.push(k);
a.push(n);
o.callbackWhenReadyToTrack(o,o.track,a);
return !0
}return !1
};
o.hb=function(){var r=o.cookieRead("s_fid"),a="",q="",k;
k=8;
var n=4;
if(!r||0>r.indexOf("-")){for(r=0;
16>r;
r++){k=Math.floor(Math.random()*k),a+="0123456789ABCDEF".substring(k,k+1),k=Math.floor(Math.random()*n),q+="0123456789ABCDEF".substring(k,k+1),k=n=16
}r=a+"-"+q
}o.cookieWrite("s_fid",r,1)||(r=0);
return r
};
o.t=o.track=function(t,a){var r,n=new Date,q="s"+Math.floor(n.getTime()/10800000)%10+Math.floor(10000000000000*Math.random()),k=n.getYear(),k="t="+o.escape(n.getDate()+"/"+n.getMonth()+"/"+(1900>k?k+1900:k)+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()+" "+n.getDay()+" "+n.getTimezoneOffset());
o.visitor&&(o.visitor.fb&&(o.authState=o.visitor.fb()),!o.supplementalDataID&&o.visitor.getSupplementalDataID&&(o.supplementalDataID=o.visitor.getSupplementalDataID("AppMeasurement:"+o._in,o.expectSupplementalData?!1:!0)));
o.l("_s");
o.Pa(t)||(a&&o.M(a),t&&(r={},o.Ha(r,0),o.M(t)),o.mb()&&(o.analyticsVisitorID||o.marketingCloudVisitorID||(o.fid=o.hb()),o.rb(),o.usePlugins&&o.doPlugins&&o.doPlugins(o),o.account&&(o.abort||(o.trackOffline&&!o.timestamp&&(o.timestamp=Math.floor(n.getTime()/1000)),n=f.location,o.pageURL||(o.pageURL=n.href?n.href:n),o.referrer||o.Ia||(o.referrer=b.document.referrer),o.Ia=1,o.referrer=o.eb(o.referrer),o.l("_g")),o.jb()&&!o.abort&&(o.kb(),k+=o.ib(),o.qb(q,k),o.l("_t"),o.referrer=""))),t&&o.M(r,1));
o.abort=o.supplementalDataID=o.timestamp=o.pageURLRest=o.linkObject=o.clickObject=o.linkURL=o.linkName=o.linkType=f.s_objectID=o.pe=o.pev1=o.pev2=o.pev3=o.e=o.lightProfileID=0
};
o.tl=o.trackLink=function(r,a,q,k,n){o.linkObject=r;
o.linkType=a;
o.linkName=q;
n&&(o.j=r,o.q=n);
return o.track(k)
};
o.trackLight=function(q,a,n,k){o.lightProfileID=q;
o.lightStoreForSeconds=a;
o.lightIncrementBy=n;
return o.track(k)
};
o.clearVars=function(){var k,a;
for(k=0;
k<o.c.length;
k++){if(a=o.c[k],"prop"==a.substring(0,4)||"eVar"==a.substring(0,4)||"hier"==a.substring(0,4)||"list"==a.substring(0,4)||"channel"==a||"events"==a||"eventList"==a||"products"==a||"productList"==a||"purchaseID"==a||"transactionID"==a||"state"==a||"zip"==a||"campaign"==a){o[a]=void 0
}}};
o.tagContainerMarker="";
o.qb=function(x,a){var u,r=o.trackingServer;
u="";
var t=o.dc,q="sc.",n=o.visitorNamespace;
r?o.trackingServerSecure&&o.ssl&&(r=o.trackingServerSecure):(n||(n=o.account,r=n.indexOf(","),0<=r&&(n=n.substring(0,r)),n=n.replace(/[^A-Za-z0-9]/g,"")),u||(u="2o7.net"),t=t?(""+t).toLowerCase():"d1","2o7.net"==u&&("d1"==t?t="112":"d2"==t&&(t="122"),q=""),r=n+"."+t+"."+q+u);
u=o.ssl?"https://":"http://";
t=o.AudienceManagement&&o.AudienceManagement.isReady();
u+=r+"/b/ss/"+o.account+"/"+(o.mobile?"5.":"")+(t?"10":"1")+"/JS-"+o.version+(o.vb?"T":"")+(o.tagContainerMarker?"-"+o.tagContainerMarker:"")+"/"+x+"?AQB=1&ndh=1&pf=1&"+(t?"callback=s_c_il["+o._in+"].AudienceManagement.passData&":"")+a+"&AQE=1";
o.bb(u);
o.da()
};
o.bb=function(a){o.g||o.lb();
o.g.push(a);
o.fa=o.r();
o.Fa()
};
o.lb=function(){o.g=o.nb();
o.g||(o.g=[])
};
o.nb=function(){var n,a;
if(o.ka()){try{(a=f.localStorage.getItem(o.ia()))&&(n=f.JSON.parse(a))
}catch(k){}return n
}};
o.ka=function(){var a=!0;
o.trackOffline&&o.offlineFilename&&f.localStorage&&f.JSON||(a=!1);
return a
};
o.wa=function(){var a=0;
o.g&&(a=o.g.length);
o.v&&a++;
return a
};
o.da=function(){if(!o.v){if(o.xa=c,o.ja){o.fa>o.J&&o.Da(o.g),o.ma(500)
}else{var a=o.Wa();
if(0<a){o.ma(a)
}else{if(a=o.ua()){o.v=1,o.pb(a),o.tb(a)
}}}}};
o.ma=function(a){o.xa||(a||(a=0),o.xa=setTimeout(o.da,a))
};
o.Wa=function(){var a;
if(!o.trackOffline||0>=o.offlineThrottleDelay){return 0
}a=o.r()-o.Ca;
return o.offlineThrottleDelay<a?0:o.offlineThrottleDelay-a
};
o.ua=function(){if(0<o.g.length){return o.g.shift()
}};
o.pb=function(n){if(o.debugTracking){var a="AppMeasurement Debug: "+n;
n=n.split("&");
var k;
for(k=0;
k<n.length;
k++){a+="\n\t"+o.unescape(n[k])
}o.ob(a)
}};
o.Qa=function(){return o.marketingCloudVisitorID||o.analyticsVisitorID
};
o.S=!1;
var A;
try{A=JSON.parse('{"x":"y"}')
}catch(m){A=null
}A&&"y"==A.x?(o.S=!0,o.R=function(k){return JSON.parse(k)
}):f.$&&f.$.parseJSON?(o.R=function(k){return f.$.parseJSON(k)
},o.S=!0):o.R=function(){return null
};
o.tb=function(t){var a,r,n;
o.Qa()&&2047<t.length&&("undefined"!=typeof XMLHttpRequest&&(a=new XMLHttpRequest,"withCredentials" in a?r=1:a=0),a||"undefined"==typeof XDomainRequest||(a=new XDomainRequest,r=2),a&&o.AudienceManagement&&o.AudienceManagement.isReady()&&(o.S?a.pa=!0:a=0));
!a&&o.Ga&&(t=t.substring(0,2047));
!a&&o.d.createElement&&o.AudienceManagement&&o.AudienceManagement.isReady()&&(a=o.d.createElement("SCRIPT"))&&"async" in a&&((n=(n=o.d.getElementsByTagName("HEAD"))&&n[0]?n[0]:o.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),r=3):a=0);
a||(a=new Image,a.alt="");
a.ra=function(){try{o.la&&(clearTimeout(o.la),o.la=0),a.timeout&&(clearTimeout(a.timeout),a.timeout=0)
}catch(u){}};
a.onload=a.ub=function(){a.ra();
o.ab();
o.Z();
o.v=0;
o.da();
if(a.pa){a.pa=!1;
try{var x=o.R(a.responseText);
o.AudienceManagement.passData(x)
}catch(u){}}};
a.onabort=a.onerror=a.cb=function(){a.ra();
(o.trackOffline||o.ja)&&o.v&&o.g.unshift(o.$a);
o.v=0;
o.fa>o.J&&o.Da(o.g);
o.Z();
o.ma(500)
};
a.onreadystatechange=function(){4==a.readyState&&(200==a.status?a.ub():a.cb())
};
o.Ca=o.r();
if(1==r||2==r){var q=t.indexOf("?");
n=t.substring(0,q);
q=t.substring(q+1);
q=q.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");
1==r?(a.open("POST",n,!0),a.send(q)):2==r&&(a.open("POST",n),a.send(q))
}else{if(a.src=t,3==r){if(o.Aa){try{n.removeChild(o.Aa)
}catch(k){}}n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a);
o.Aa=o.Za
}}a.abort&&(o.la=setTimeout(a.abort,5000));
o.$a=t;
o.Za=f["s_i_"+o.replace(o.account,",","_")]=a;
if(o.useForcedLinkTracking&&o.F||o.q){o.forcedLinkTrackingTimeout||(o.forcedLinkTrackingTimeout=250),o.aa=setTimeout(o.Z,o.forcedLinkTrackingTimeout)
}};
o.ab=function(){if(o.ka()&&!(o.Ba>o.J)){try{f.localStorage.removeItem(o.ia()),o.Ba=o.r()
}catch(a){}}};
o.Da=function(k){if(o.ka()){o.Fa();
try{f.localStorage.setItem(o.ia(),f.JSON.stringify(k)),o.J=o.r()
}catch(a){}}};
o.Fa=function(){if(o.trackOffline){if(!o.offlineLimit||0>=o.offlineLimit){o.offlineLimit=10
}for(;
o.g.length>o.offlineLimit;
){o.ua()
}}};
o.forceOffline=function(){o.ja=!0
};
o.forceOnline=function(){o.ja=!1
};
o.ia=function(){return o.offlineFilename+"-"+o.visitorNamespace+o.account
};
o.r=function(){return(new Date).getTime()
};
o.ya=function(k){k=k.toLowerCase();
return 0!=k.indexOf("#")&&0!=k.indexOf("about:")&&0!=k.indexOf("opera:")&&0!=k.indexOf("javascript:")?!0:!1
};
o.setTagContainer=function(q){var a,n,k;
o.vb=q;
for(a=0;
a<o._il.length;
a++){if((n=o._il[a])&&"s_l"==n._c&&n.tagContainerName==q){o.M(n);
if(n.lmq){for(a=0;
a<n.lmq.length;
a++){k=n.lmq[a],o.loadModule(k.n)
}}if(n.ml){for(k in n.ml){if(o[k]){for(a in q=o[k],k=n.ml[k],k){!Object.prototype[a]&&("function"!=typeof k[a]||0>(""+k[a]).indexOf("s_c_il"))&&(q[a]=k[a])
}}}}if(n.mmq){for(a=0;
a<n.mmq.length;
a++){k=n.mmq[a],o[k.m]&&(q=o[k.m],q[k.f]&&"function"==typeof q[k.f]&&(k.a?q[k.f].apply(q,k.a):q[k.f].apply(q)))
}}if(n.tq){for(a=0;
a<n.tq.length;
a++){o.track(n.tq[a])
}}n.s=o;
break
}}};
o.Util={urlEncode:o.escape,urlDecode:o.unescape,cookieRead:o.cookieRead,cookieWrite:o.cookieWrite,getQueryParam:function(q,a,n){var k;
a||(a=o.pageURL?o.pageURL:f.location);
n||(n="&");
return q&&a&&(a=""+a,k=a.indexOf("?"),0<=k&&(a=n+a.substring(k+1)+n,k=a.indexOf(n+q+"="),0<=k&&(a=a.substring(k+n.length+q.length+1),k=a.indexOf(n),0<=k&&(a=a.substring(0,k)),0<a.length)))?o.unescape(a):""
}};
o.A="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
o.c=o.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
o.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
o.K=o.ga.slice(0);
o.oa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(d=0;
250>=d;
d++){76>d&&(o.c.push("prop"+d),o.K.push("prop"+d)),o.c.push("eVar"+d),o.K.push("eVar"+d),6>d&&o.c.push("hier"+d),4>d&&o.c.push("list"+d)
}d="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
o.c=o.c.concat(d);
o.A=o.A.concat(d);
o.ssl=0<=f.location.protocol.toLowerCase().indexOf("https");
o.charSet="UTF-8";
o.contextData={};
o.offlineThrottleDelay=0;
o.offlineFilename="AppMeasurement.offline";
o.Ca=0;
o.fa=0;
o.J=0;
o.Ba=0;
o.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
o.w=f;
o.d=f.document;
try{if(o.Ga=!1,navigator){var j=navigator.userAgent;
if("Microsoft Internet Explorer"==navigator.appName||0<=j.indexOf("MSIE ")||0<=j.indexOf("Trident/")&&0<=j.indexOf("Windows NT 6")){o.Ga=!0
}}}catch(g){}o.Z=function(){o.aa&&(f.clearTimeout(o.aa),o.aa=c);
o.j&&o.F&&o.j.dispatchEvent(o.F);
o.q&&("function"==typeof o.q?o.q():o.j&&o.j.href&&(o.d.location=o.j.href));
o.j=o.F=o.q=0
};
o.Ea=function(){o.b=o.d.body;
o.b?(o.p=function(C){var D,B,y,z,x;
if(!(o.d&&o.d.getElementById("cppXYctnr")||C&&C["s_fe_"+o._in])){if(o.qa){if(o.useForcedLinkTracking){o.b.removeEventListener("click",o.p,!1)
}else{o.b.removeEventListener("click",o.p,!0);
o.qa=o.useForcedLinkTracking=0;
return
}}else{o.useForcedLinkTracking=0
}o.clickObject=C.srcElement?C.srcElement:C.target;
try{if(!o.clickObject||o.I&&o.I==o.clickObject||!(o.clickObject.tagName||o.clickObject.parentElement||o.clickObject.parentNode)){o.clickObject=0
}else{var u=o.I=o.clickObject;
o.ea&&(clearTimeout(o.ea),o.ea=0);
o.ea=setTimeout(function(){o.I==u&&(o.I=0)
},10000);
y=o.wa();
o.track();
if(y<o.wa()&&o.useForcedLinkTracking&&C.target){for(z=C.target;
z&&z!=o.b&&"A"!=z.tagName.toUpperCase()&&"AREA"!=z.tagName.toUpperCase();
){z=z.parentNode
}if(z&&(x=z.href,o.ya(x)||(x=0),B=z.target,C.target.dispatchEvent&&x&&(!B||"_self"==B||"_top"==B||"_parent"==B||f.name&&B==f.name))){try{D=o.d.createEvent("MouseEvents")
}catch(t){D=new f.MouseEvent
}if(D){try{D.initMouseEvent("click",C.bubbles,C.cancelable,C.view,C.detail,C.screenX,C.screenY,C.clientX,C.clientY,C.ctrlKey,C.altKey,C.shiftKey,C.metaKey,C.button,C.relatedTarget)
}catch(k){D=0
}D&&(D["s_fe_"+o._in]=D.s_fe=1,C.stopPropagation(),C.stopImmediatePropagation&&C.stopImmediatePropagation(),C.preventDefault(),o.j=C.target,o.F=D)
}}}}}catch(a){o.clickObject=0
}}},o.b&&o.b.attachEvent?o.b.attachEvent("onclick",o.p):o.b&&o.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&o.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&f.MouseEvent)&&(o.qa=1,o.useForcedLinkTracking=1,o.b.addEventListener("click",o.p,!0)),o.b.addEventListener("click",o.p,!1))):setTimeout(o.Ea,30)
};
o.Ea()
}function s_gi(j){var f,c=window.s_c_il,b,d,o=j.split(","),m,p,g=0;
if(c){for(b=0;
!g&&b<c.length;
){f=c[b];
if("s_c"==f._c&&(f.account||f.oun)){if(f.account&&f.account==j){g=1
}else{for(d=f.account?f.account:f.oun,d=f.allAccounts?f.allAccounts:d.split(","),m=0;
m<o.length;
m++){for(p=0;
p<d.length;
p++){o[m]==d[p]&&(g=1)
}}}}b++
}}g||(f=new AppMeasurement);
f.setAccount?f.setAccount(j):f.sa&&f.sa(j);
return f
}AppMeasurement.getInstance=s_gi;
window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var b=window,c=b.s_giq,f,d,g;
if(c){for(f=0;
f<c.length;
f++){d=c[f],g=s_gi(d.oun),g.setAccount(d.un),g.setTagContainer(d.tagContainerName)
}}b.s_giq=0
}s_pgicq();
function AppMeasurement_Module_Integrate(a){var d=this;
d.s=a;
var b=window;
b.s_c_in||(b.s_c_il=[],b.s_c_in=0);
d._il=b.s_c_il;
d._in=b.s_c_in;
d._il[d._in]=d;
b.s_c_in++;
d._c="s_m";
d.list=[];
d.add=function(g,c){var f;
c||(c="s_Integrate_"+g);
b[c]||(b[c]={});
f=d[g]=b[c];
f.a=g;
f.e=d;
f._c=0;
f._d=0;
void 0==f.disable&&(f.disable=0);
f.get=function(j,q){var p=document,o=p.getElementsByTagName("HEAD"),n;
if(!f.disable&&(q||(v="s_"+d._in+"_Integrate_"+f.a+"_get_"+f._c),f._c++,f.VAR=v,f.CALLBACK="s_c_il["+d._in+"]."+f.a+".callback",f.delay(),o=o&&0<o.length?o[0]:p.body)){try{n=p.createElement("SCRIPT"),n.type="text/javascript",n.setAttribute("async","async"),n.src=d.c(f,j),0>j.indexOf("[CALLBACK]")&&(n.onload=n.onreadystatechange=function(){f.callback(b[v])
}),o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n)
}catch(m){}}};
f.callback=function(j){var k;
if(j){for(k in j){Object.prototype[k]||(f[k]=j[k])
}}f.ready()
};
f.beacon=function(j){var k="s_i_"+d._in+"_Integrate_"+f.a+"_"+f._c;
f.disable||(f._c++,k=b[k]=new Image,k.src=d.c(f,j))
};
f.script=function(j){f.get(j,1)
};
f.delay=function(){f._d++
};
f.ready=function(){f._d--;
f.disable||a.delayReady()
};
d.list.push(g)
};
d._g=function(j){var c,f=(j?"use":"set")+"Vars";
for(j=0;
j<d.list.length;
j++){if((c=d[d.list[j]])&&!c.disable&&c[f]){try{c[f](a,c)
}catch(g){}}}};
d._t=function(){d._g(1)
};
d._d=function(){var f,c;
for(f=0;
f<d.list.length;
f++){if((c=d[d.list[f]])&&!c.disable&&0<c._d){return 1
}}return 0
};
d.c=function(p,j){var k,o,m,n;
"http"!=j.toLowerCase().substring(0,4)&&(j="http://"+j);
a.ssl&&(j=a.replace(j,"http:","https:"));
p.RAND=Math.floor(10000000000000*Math.random());
for(k=0;
0<=k;
){k=j.indexOf("[",k),0<=k&&(o=j.indexOf("]",k),o>k&&(m=j.substring(k+1,o),2<m.length&&"s."==m.substring(0,2)?(n=a[m.substring(2)])||(n=""):(n=""+p[m],n!=p[m]&&parseFloat(n)!=p[m]&&(m=0)),m&&(j=j.substring(0,k)+encodeURIComponent(n)+j.substring(o+1)),k=o))
}return j
}
}function AppMeasurement_Module_Media(c){var a=this;
a.s=c;
c=window;
c.s_c_in||(c.s_c_il=[],c.s_c_in=0);
a._il=c.s_c_il;
a._in=c.s_c_in;
a._il[a._in]=a;
c.s_c_in++;
a._c="s_m";
a.list=[];
a.open=function(q,r,p,m){var o={},j=new Date,b="",n;
r||(r=-1);
if(q&&p){a.list||(a.list={});
a.list[q]&&a.close(q);
m&&m.id&&(b=m.id);
if(b){for(n in a.list){!Object.prototype[n]&&a.list[n]&&a.list[n].R==b&&a.close(a.list[n].name)
}}o.name=q;
o.length=r;
o.offset=0;
o.e=0;
o.playerName=a.playerName?a.playerName:p;
o.R=b;
o.C=0;
o.a=0;
o.timestamp=Math.floor(j.getTime()/1000);
o.k=0;
o.u=o.timestamp;
o.c=-1;
o.n="";
o.g=-1;
o.D=0;
o.I={};
o.G=0;
o.m=0;
o.f="";
o.B=0;
o.L=0;
o.A=0;
o.F=0;
o.l=!1;
o.v="";
o.J="";
o.K=0;
o.r=!1;
o.H="";
o.complete=0;
o.Q=0;
o.p=0;
o.q=0;
a.list[q]=o
}};
a.openAd=function(q,r,p,j,o,t,b,n){var m={};
a.open(q,r,p,n);
if(m=a.list[q]){m.l=!0,m.v=j,m.J=o,m.K=t,m.H=b
}};
a.M=function(b){var f=a.list[b];
a.list[b]=0;
f&&f.monitor&&clearTimeout(f.monitor.interval)
};
a.close=function(b){a.i(b,0,-1)
};
a.play=function(m,n,j,b){var g=a.i(m,1,n,j,b);
g&&!g.monitor&&(g.monitor={},g.monitor.update=function(){1==g.k&&a.i(g.name,3,-1);
g.monitor.interval=setTimeout(g.monitor.update,1000)
},g.monitor.update())
};
a.click=function(b,f){a.i(b,7,f)
};
a.complete=function(b,f){a.i(b,5,f)
};
a.stop=function(b,f){a.i(b,2,f)
};
a.track=function(b){a.i(b,4,-1)
};
a.P=function(t,u){var r="a.media.",m=t.linkTrackVars,p=t.linkTrackEvents,w="m_i",j,o=t.contextData,n;
u.l&&(r+="ad.",u.v&&(o["a.media.name"]=u.v,o[r+"pod"]=u.J,o[r+"podPosition"]=u.K),u.G||(o[r+"CPM"]=u.H));
u.r&&(o[r+"clicked"]=!0,u.r=!1);
o["a.contentType"]="video"+(u.l?"Ad":"");
o["a.media.channel"]=a.channel;
o[r+"name"]=u.name;
o[r+"playerName"]=u.playerName;
0<u.length&&(o[r+"length"]=u.length);
o[r+"timePlayed"]=Math.floor(u.a);
0<Math.floor(u.a)&&(o[r+"timePlayed"]=Math.floor(u.a));
u.G||(o[r+"view"]=!0,w="m_s",a.Heartbeat&&a.Heartbeat.enabled&&(w=u.l?a.__primetime?"mspa_s":"msa_s":a.__primetime?"msp_s":"ms_s"),u.G=1);
u.f&&(o[r+"segmentNum"]=u.m,o[r+"segment"]=u.f,0<u.B&&(o[r+"segmentLength"]=u.B),u.A&&0<u.a&&(o[r+"segmentView"]=!0));
!u.Q&&u.complete&&(o[r+"complete"]=!0,u.S=1);
0<u.p&&(o[r+"milestone"]=u.p);
0<u.q&&(o[r+"offsetMilestone"]=u.q);
if(m){for(n in o){Object.prototype[n]||(m+=",contextData."+n)
}}j=o["a.contentType"];
t.pe=w;
t.pev3=j;
var b,x;
if(a.contextDataMapping){for(n in t.events2||(t.events2=""),m&&(m+=",events"),a.contextDataMapping){if(!Object.prototype[n]){w=n.length>r.length&&n.substring(0,r.length)==r?n.substring(r.length):"";
j=a.contextDataMapping[n];
if("string"==typeof j){for(b=j.split(","),x=0;
x<b.length;
x++){j=b[x],"a.contentType"==n?(m&&(m+=","+j),t[j]=o[n]):"view"==w||"segmentView"==w||"clicked"==w||"complete"==w||"timePlayed"==w||"CPM"==w?(p&&(p+=","+j),"timePlayed"==w||"CPM"==w?o[n]&&(t.events2+=(t.events2?",":"")+j+"="+o[n]):o[n]&&(t.events2+=(t.events2?",":"")+j)):"segment"==w&&o[n+"Num"]?(m&&(m+=","+j),t[j]=o[n+"Num"]+":"+o[n]):(m&&(m+=","+j),t[j]=o[n])
}}else{if("milestones"==w||"offsetMilestones"==w){n=n.substring(0,n.length-1),o[n]&&a.contextDataMapping[n+"s"][o[n]]&&(p&&(p+=","+a.contextDataMapping[n+"s"][o[n]]),t.events2+=(t.events2?",":"")+a.contextDataMapping[n+"s"][o[n]])
}}o[n]&&(o[n]=0);
"segment"==w&&o[n+"Num"]&&(o[n+"Num"]=0)
}}}t.linkTrackVars=m;
t.linkTrackEvents=p
};
a.i=function(O,P,N,J,M){var Q={},I=(new Date).getTime()/1000,L,K,E=a.trackVars,C=a.trackEvents,B=a.trackSeconds,A=a.trackMilestones,z=a.trackOffsetMilestones,o=a.segmentByMilestones,j=a.segmentByOffsetMilestones,F,G,D=1,H={},b;
a.channel||(a.channel=a.s.w.location.hostname);
if(Q=O&&a.list&&a.list[O]?a.list[O]:0){if(Q.l&&(B=a.adTrackSeconds,A=a.adTrackMilestones,z=a.adTrackOffsetMilestones,o=a.adSegmentByMilestones,j=a.adSegmentByOffsetMilestones),0>N&&(N=1==Q.k&&0<Q.u?I-Q.u+Q.c:Q.c),0<Q.length&&(N=N<Q.length?N:Q.length),0>N&&(N=0),Q.offset=N,0<Q.length&&(Q.e=Q.offset/Q.length*100,Q.e=100<Q.e?100:Q.e),0>Q.c&&(Q.c=N),b=Q.D,H.name=O,H.ad=Q.l,H.length=Q.length,H.openTime=new Date,H.openTime.setTime(1000*Q.timestamp),H.offset=Q.offset,H.percent=Q.e,H.playerName=Q.playerName,H.mediaEvent=0>Q.g?"OPEN":1==P?"PLAY":2==P?"STOP":3==P?"MONITOR":4==P?"TRACK":5==P?"COMPLETE":7==P?"CLICK":"CLOSE",2<P||P!=Q.k&&(2!=P||1==Q.k)){M||(J=Q.m,M=Q.f);
if(P){1==P&&(Q.c=N);
if((3>=P||5<=P)&&0<=Q.g&&(D=!1,E=C="None",Q.g!=N)){K=Q.g;
K>N&&(K=Q.c,K>N&&(K=N));
F=A?A.split(","):0;
if(0<Q.length&&F&&N>=K){for(G=0;
G<F.length;
G++){(L=F[G]?parseFloat(""+F[G]):0)&&K/Q.length*100<L&&Q.e>=L&&(D=!0,G=F.length,H.mediaEvent="MILESTONE",Q.p=H.milestone=L)
}}if((F=z?z.split(","):0)&&N>=K){for(G=0;
G<F.length;
G++){(L=F[G]?parseFloat(""+F[G]):0)&&K<L&&N>=L&&(D=!0,G=F.length,H.mediaEvent="OFFSET_MILESTONE",Q.q=H.offsetMilestone=L)
}}}if(Q.L||!M){if(o&&A&&0<Q.length){if(F=A.split(",")){for(F.push("100"),G=K=0;
G<F.length;
G++){if(L=F[G]?parseFloat(""+F[G]):0){Q.e<L&&(J=G+1,M="M:"+K+"-"+L,G=F.length),K=L
}}}}else{if(j&&z&&(F=z.split(","))){for(F.push(""+(0<Q.length?Q.length:"E")),G=K=0;
G<F.length;
G++){if((L=F[G]?parseFloat(""+F[G]):0)||"E"==F[G]){if(N<L||"E"==F[G]){J=G+1,M="O:"+K+"-"+L,G=F.length
}K=L
}}}}M&&(Q.L=!0)
}(M||Q.f)&&M!=Q.f&&(Q.F=!0,Q.f||(Q.m=J,Q.f=M),0<=Q.g&&(D=!0));
(2<=P||100<=Q.e)&&Q.c<N&&(Q.C+=N-Q.c,Q.a+=N-Q.c);
if(2>=P||3==P&&!Q.k){Q.n+=(1==P||3==P?"S":"E")+Math.floor(N),Q.k=3==P?1:P
}!D&&0<=Q.g&&3>=P&&(B=B?B:0)&&Q.a>=B&&(D=!0,H.mediaEvent="SECONDS");
Q.u=I;
Q.c=N
}if(!P||3>=P&&100<=Q.e){2!=Q.k&&(Q.n+="E"+Math.floor(N)),P=0,E=C="None",H.mediaEvent="CLOSE"
}7==P&&(D=H.clicked=Q.r=!0);
if(5==P||a.completeByCloseOffset&&(!P||100<=Q.e)&&0<Q.length&&N>=Q.length-a.completeCloseOffsetThreshold){D=H.complete=Q.complete=!0
}I=H.mediaEvent;
"MILESTONE"==I?I+="_"+H.milestone:"OFFSET_MILESTONE"==I&&(I+="_"+H.offsetMilestone);
Q.I[I]?H.eventFirstTime=!1:(H.eventFirstTime=!0,Q.I[I]=1);
H.event=H.mediaEvent;
H.timePlayed=Q.C;
H.segmentNum=Q.m;
H.segment=Q.f;
H.segmentLength=Q.B;
a.monitor&&4!=P&&a.monitor(a.s,H);
a.Heartbeat&&a.Heartbeat.enabled&&0<=Q.g&&(D=!1);
0==P&&a.M(O);
D&&Q.D==b&&(O={contextData:{}},O.linkTrackVars=E,O.linkTrackEvents=C,O.linkTrackVars||(O.linkTrackVars=""),O.linkTrackEvents||(O.linkTrackEvents=""),a.P(O,Q),O.linkTrackVars||(O["!linkTrackVars"]=1),O.linkTrackEvents||(O["!linkTrackEvents"]=1),a.s.track(O),Q.F?(Q.m=J,Q.f=M,Q.A=!0,Q.F=!1):0<Q.a&&(Q.A=!1),Q.n="",Q.p=Q.q=0,Q.a-=Math.floor(Q.a),Q.g=N,Q.D++)
}}return Q
};
a.O=function(n,o,m,g,j){var b=0;
if(n&&(!a.autoTrackMediaLengthRequired||o&&0<o)){if(a.list&&a.list[n]){b=1
}else{if(1==m||3==m){a.open(n,o,"HTML5 Video",j),b=1
}}b&&a.i(n,m,g,-1,0)
}};
a.attach=function(g){var j,f,b;
g&&g.tagName&&"VIDEO"==g.tagName.toUpperCase()&&(a.o||(a.o=function(p,k,o){var n,m;
a.autoTrack&&(n=p.currentSrc,(m=p.duration)||(m=-1),0>o&&(o=p.currentTime),a.O(n,m,k,o,p))
}),j=function(){a.o(g,1,-1)
},f=function(){a.o(g,1,-1)
},a.j(g,"play",j),a.j(g,"pause",f),a.j(g,"seeking",f),a.j(g,"seeked",j),a.j(g,"ended",function(){a.o(g,0,-1)
}),a.j(g,"timeupdate",j),b=function(){g.paused||g.ended||g.seeking||a.o(g,3,-1);
setTimeout(b,1000)
},b())
};
a.j=function(d,g,f){d.attachEvent?d.attachEvent("on"+g,f):d.addEventListener&&d.addEventListener(g,f,!1)
};
void 0==a.completeByCloseOffset&&(a.completeByCloseOffset=1);
void 0==a.completeCloseOffsetThreshold&&(a.completeCloseOffsetThreshold=1);
a.Heartbeat={};
a.N=function(){var b,f;
if(a.autoTrack&&(b=a.s.d.getElementsByTagName("VIDEO"))){for(f=0;
f<b.length;
f++){a.attach(b[f])
}}};
a.j(c,"load",a.N)
}var digitalData={page:{},user:[],event:[],util:{},flags:{}};
digitalData.user[0]={};
digitalData.user[0].profile=[];
digitalData.user[0].profile[0]={};
if(typeof(CQ_Analytics)!=="undefined"){try{if(typeof(CQ_Analytics.PageDataMgr.data)!=="undefined"){digitalData.cq_pagedata=CQ_Analytics.PageDataMgr.data
}if(typeof(CQ_Analytics.ProfileDataMgr.data)!=="undefined"){digitalData.cq_profiledata=CQ_Analytics.ProfileDataMgr.data
}if(typeof(CQ_Analytics.SurferInfoMgr.data)!=="undefined"){digitalData.cq_surferdata=CQ_Analytics.SurferInfoMgr.data
}if(typeof(CQ_Analytics.EventDataMgr.data)!=="undefined"){digitalData.cq_eventdata=CQ_Analytics.EventDataMgr.data
}}catch(e){console.log(e)
}}digitalData.util.trackActivity=function(f,a){if(!f){return
}var d=a&&a.events||[];
var c=a&&a.properties||{};
if(!c.eVar37){c.eVar37=f
}s.linkTrackEvents=s.events=d.join();
s.events=s.apl(s.events,"event66",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event66",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"events",",",2);
for(var b in c){var g=c[b];
s[b]=g;
s.linkTrackVars=s.apl(s.linkTrackVars,b,",",2)
}s.linkTracked=true;
s.tl(true,"o",f);
s.linkTracked=false;
s.events="";
s.linkTrackVars="";
s.linkTrackEvents=""
};
digitalData.util.sfTrackFormsCampaigns=function(){var c="";
digitalData.event=[];
digitalData.page.products=digitalData.page.internaldrivers=digitalData.page.moduletracking=digitalData.page.sharechannel=digitalData.page.captchatype="";
digitalData.page.pagename=digitalData.page.pagename||Page.getName();
digitalData.util.setEvent("pageview");
if(Page.hasLeadCaptureForm()&&(Page.getName().indexOf(":form:")>-1||Page.getName().indexOf(":events:details:")>-1)){c=(digitalData.page.offerid&&digitalData.page.offerid.indexOf("|")==-1)?digitalData.page.offerid:Page.getNameCaptureId();
if(c){s.c_w("lastOffer",c+":view");
digitalData.page.offerid=s.getValOnce(c,"v28");
c=digitalData.page.pagename+"|"+c;
c=(Page.isFormBuilderForm()?"form-builder":"old-form")+"|"+c;
if(digitalData.page.offerid&&digitalData.page.offerid.indexOf(digitalData.page.pagename)==-1){digitalData.page.offerid=c;
s.c_w("c30",digitalData.page.offerid)
}}if(digitalData.page.offerid){digitalData.util.setEvent("formview")
}}else{if(Page.isConfirmation()){digitalData.util.setEvent("formconfirmationview");
if(Util.getParam("redirect")==="true"){digitalData.page.internaldrivers=Util.convert15To18(Util.getParam("d")?Util.getParam("d"):Util.getParam("DriverCampaignId"));
if(digitalData.page.internaldrivers&&!Util.getParam("d")){digitalData.page.products+=(digitalData.page.products?",":"")+";"+digitalData.page.internaldrivers+";;;event25=1";
digitalData.page.internaldrivers=Page.getPrevious()+"|"+digitalData.page.internaldrivers;
digitalData.util.setEvent("intdriverclicks")
}digitalData.page.offerid=Util.convert15To18(Util.getParam("FormCampaignId"));
if(digitalData.page.offerid){digitalData.page.offerid="form-builder|"+Page.calculateName(Util.getParam("landing_page"))+"|"+digitalData.page.offerid
}}if(vp.getFormCompleteId()){digitalData.user[0].profile[0].transactionid=vp.getFormCompleteId()
}if(digitalData.user[0].profile[0].transactionid){digitalData.page.numberofformcompletes="+1";
if(Util.getParam("redirect")==="true"){digitalData.util.setEvent("autoformcomplete")
}else{digitalData.util.setEvent("formcompletesubmitbuttonclick");
if(Page.isDemo()){digitalData.util.setEvent("demoformcomplete")
}if(Page.isSignup()){digitalData.util.setEvent("signupformcomplete")
}}}}}if(Page.isConfirmation()){digitalData.user[0].profile[0].usercompanysize=vp.getCompanyEmployees()?vp.getCompanyEmployees():"[FORM:NO COMPANY SIZE]";
digitalData.user[0].profile[0].usercompanycountry=vp.getCompanyCountry()?vp.getCompanyCountry():"[FORM:NO COUNTRY]";
digitalData.user[0].profile[0].userprimaryprodinterest=vp.getPrimaryProductInterest()?vp.getPrimaryProductInterest():"[FORM:NO PRIMARY PRODUCT INTEREST]";
digitalData.user[0].profile[0].usercompanyname=vp.getCompanyName()?vp.getCompanyName():"[FORM:NO COMPANY NAME]";
digitalData.user[0].profile[0].userfirstformcompletetime=vp.getFirstFormCompleteTime()
}digitalData.page.searchterm=Page.getSearchTerm();
digitalData.page.searchterm=s.getValOnce(digitalData.page.searchterm,"v12");
if(digitalData.page.searchterm){digitalData.page.numsearchresults=Page.getNumSearchResults();
digitalData.util.setEvent("intsearch");
digitalData.page.numofintsearches="+1"
}digitalData.page.products=digitalData.page.products?digitalData.page.products:"";
var a=a?a:"";
digitalData.page.products+=(digitalData.page.products?",":"")+digitalData.util.trackCTAs(Page.getCTAs(),(Page.getDriver()&&Page.getDriver().type=="internal"?Page.getDriver().id:""));
if(digitalData.page.products&&a.indexOf(digitalData.page.products)!=-1){digitalData.page.products=""
}else{a=digitalData.page.products
}if(digitalData.page.products.indexOf("event19")>-1){digitalData.util.setEvent("intdriverimp")
}if(digitalData.page.products.indexOf("event25")>-1){digitalData.util.setEvent("intdriverclick")
}if(s.c_r("v32")){digitalData.page.moduletracking=s.c_r("v32");
s.c_w("v32","");
try{if(digitalData.page.moduletracking){var f="";
if(digitalData.page.moduletracking.indexOf("|left-nav")>-1){f="Left"
}else{if(digitalData.page.moduletracking.indexOf("|topnav-products-menu")>-1){f="products-menu-Top"
}else{if(digitalData.page.moduletracking.indexOf("|topnav")>-1){f="Top"
}}}if(f){digitalData.util.setEvent("topnavigationclicks");
var b=Page.getNameNoLocale();
b=b.replace(Page.getServer()+":","");
digitalData.page.toporleftnav=f+"|"+b
}}}catch(d){}}if(digitalData.flags.linktype){}};
digitalData.util.trackPageGlobal=function(){digitalData.page.pagename=digitalData.page.pagename?digitalData.page.pagename:Page.getName();
digitalData.page.charSet="UTF-8";
digitalData.page.sitesection=Page.getChannel();
digitalData.page.server="SFDC";
digitalData.page.locale=Page.getLocale();
digitalData.page.prevpage=Page.getPrevious();
digitalData.page.prevpagesanitized=digitalData.page.prevpage||"[NO PREVIOUS PAGE AVAILABLE]";
digitalData.page.namenolocale=Page.getNameNoLocale();
digitalData.page.type=Page.getType();
digitalData.page.cloud=Page.getCloud();
var a=new Date();
a.setDate(a.getDate()-1);
digitalData.page.expdate=a;
digitalData.page.referrer=Page.getReferrer();
digitalData.page.subdomainReferrer=Page.getSFDCNetworkReferrer()&&Page.getSFDCNetworkReferrer().id;
try{if(digitalData.page.prevpage){var c=s.getPercentPageViewed(digitalData.page.pagename);
if(s.c_r("s_ppv_x")==="true"){digitalData.page.percentpageviewed="100|0";
s.c_w("s_ppv_x","",digitalData.page.expdate)
}else{if(c.length>1&&c[1]!=="undefined"&&typeof(c[1])!=="undefined"){digitalData.page.percentpageviewed=c[1]+"|"+(c.length>2&&c[1]>c[2]?(c[1]-c[2]):"0")
}}}}catch(d){}try{if(top!=self){s.browserWidth=s.browserHeight="";
s.c_w("s_ppv_x","true")
}}catch(d){}var b=window.location.href;
digitalData.page.url=Page.hasExcludedParam(b)?b.split("?")[0]:b;
digitalData.util.setEvent("pageview");
digitalData.page.numberpageviews="+1";
digitalData.user[0].profile[0].usertype=vp.getType();
digitalData.page.segment=Page.getSegment();
try{if(vp.OrgInfo.getStatus()||vp.OrgInfo.getType()){digitalData.user[0].profile[0].orgEdition=vp.OrgInfo.getEdition()
}digitalData.user[0].profile[0].orgId=vp.OrgInfo.getID()
}catch(d){}var f=new Date();
digitalData.user[0].profile[0].timepartinghour=s.getTimeParting("h","-8",f.getFullYear()).split("|")[0];
digitalData.user[0].profile[0].timepartingday=s.getTimeParting("d","-8",f.getFullYear()).split("|")[1];
if(Page.is404()){digitalData.page.spagetype="errorPage"
}digitalData.user[0].profile[0].visitnumber=vp.getVisitNumber();
if(vp.isNewSession()){if(vp.isNewVisitor()){digitalData.util.setEvent("firsttimevisit")
}else{digitalData.util.setEvent("returnvisit")
}}digitalData.user[0].profile[0].dayssincelastvisit=vp.getDaysSinceLastVisit();
digitalData.page.reportsuite=Server.getAccount();
digitalData.page.pageloadtime=s_getLoadTime()
};
digitalData.util.trackPageSFDC=function(){var c="";
var j;
var g="";
digitalData.page.products=digitalData.page.products?digitalData.page.products:"";
digitalData.user[0].profile[0].detailedusertype=vp.getTypeDetailed();
digitalData.user[0].profile[0].formfillstatus=vp.getUserEmail()?"known":"anonymous";
if(Page.isLogin()){if(vp.hasCurrentTrial()){digitalData.user[0].profile[0].logintype="freetrial";
digitalData.util.setEvent("freetriallogin")
}else{if(digitalData.user[0].profile[0].usertype==="developer"){digitalData.user[0].profile[0].logintype="developer"
}else{digitalData.user[0].profile[0].logintype="customer"
}}}var b=vp.getTargeting("db","size");
digitalData.user[0].profile[0].targetingcompanysize="DB="+(b||"[NO DATA]");
b=vp.getTargeting("db","ind");
digitalData.user[0].profile[0].targetingcompanyindustry="DB="+(b||"[NO DATA]");
b=vp.getTargeting("db","name");
digitalData.user[0].profile[0].targetingcompanyname="DB="+(b||"[NO DATA]")+"|SFDC="+(vp.getCompanyName()||"[NO DATA]");
b=vp.getTargeting("db","aud");
digitalData.user[0].profile[0].targetingaudience="DB="+(b||"[NO DATA]");
digitalData.user[0].profile[0].dreamforcerole=vp.getActivity("DFrole")||"";
if(Page.isProductCategory()){digitalData.util.setEvent("scremove")
}digitalData.page.jobid=Util.getParam("jobId");
if(Page.isCareersConfirmation()){digitalData.util.setEvent("onlinejobapp")
}var f=Util.getParam("elq_mid")||Util.getParam("RRID")||Util.getParam("eid")||Util.getParam("ban")||Util.getParam("dcmp")||Util.getParam("soc")||Util.getParam("mkt_tok");
digitalData.page.emailid=s.getValOnce(f,"v42",0);
digitalData.page.displayadid=Page.getDisplayAdId();
if(digitalData.page.displayadid){digitalData.util.setEvent("displayadid")
}var a=Page.getDriver();
if(a){if(a.type=="internal"||a.internal){digitalData.page.internaldrivers=s.getValOnce(a.internal||a.id,"v22");
if(digitalData.page.internaldrivers){digitalData.page.internaldrivers=digitalData.page.prevpage+"|"+digitalData.page.internaldrivers
}}if(a.type!="internal"){if((a.type=="Typed/Bookmarked"||a.type=="Force.com")&&s.c_r("v0")){a.id=""
}a.id=s.getValOnce(a.id,"v0",0);
if(a.id){digitalData.page.scampaign=a.id;
if(a.type=="SEO"){digitalData.util.setEvent("seosearches")
}else{if(a.type=="SEM"){digitalData.util.setEvent("semsearches")
}}digitalData.page.drivertypepathing=s.getAndPersistValue(a.type,"c22");
digitalData.page.drivertype=digitalData.page.drivertypepathing;
digitalData.page.crossvisittrafficdrivertype=s.cvpSimple(digitalData.page.drivertype,"v44","365","5"," ^ ")
}}}if((digitalData.page.scampaign||digitalData.page.internaldrivers||(Page.hasLeadCaptureForm()&&!s.c_r("v20")))){if(digitalData.page.prevpage){digitalData.page.convertingpage=digitalData.page.prevpage;
try{if(Page.hasInternalReferrer()){j=document.createElement("a");
j.href=document.referrer;
if(j.pathname){c=j.pathname.replace(/(^\/?)/,"/")
}g=Page.calculateName(c,j.hostname);
if(g===Page.getServer()+":"+Page.getLocale()+":blog"){g+=":homepage"
}if(document.referrer.indexOf("login.salesforce.com")>-1){g=Page.getServer()+":"+Page.getLocale()+":login"
}if(digitalData.page.prevpage!==g){digitalData.page.convertingpage=g
}}}catch(d){}}else{if(!s.c_r("v20")){digitalData.page.convertingpage="Direct Landing"
}}if(digitalData.page.convertingpage){s.c_w("v20",digitalData.page.convertingpage)
}}if(digitalData.util.hasEvent("formcompletesubmitbuttonclick")){if(!(s.c_r("v28")||s.c_r("c30"))){digitalData.page.offerid="[NO OFFER ID]"
}else{digitalData.page.offerid=s.c_r("c30")
}if(!s.c_r("v22")){digitalData.page.internaldrivers="[NO INTERNAL PLACEMENT ID]"
}s.c_w("v0","",digitalData.page.expdate);
s.c_w("v20","",digitalData.page.expdate);
s.c_w("v22","",digitalData.page.expdate);
s.c_w("v28","",digitalData.page.expdate);
s.c_w("c30","",digitalData.page.expdate)
}digitalData.page.drivertypepathing=s.getAndPersistValue("","c22");
digitalData.page.drivertypepathing=digitalData.page.drivertypepathing?digitalData.page.drivertypepathing+":"+digitalData.page.pagename:"";
if(s.c_r("c40")||digitalData.page.drivertype){if(!digitalData.page.drivertype||(digitalData.page.drivertype===s.c_r("c40"))){digitalData.page.drivertype="did not bounce"
}else{if(digitalData.page.drivertype!=s.c_r("c40")){digitalData.page.drivertype=s.getAndPersistValue(digitalData.page.drivertype,"c40")
}}}digitalData.page.uiframework="AEM framework";
if(Page.hasChatForm()){digitalData.util.setEvent("chatformshown")
}if(Page.isBlog()){digitalData.page.blogpostmeta=Page.getBlogPostMeta();
digitalData.page.authorName=Page.getBlogAuthor()
}if(Page.isSEM()){if(Util.getParam("brand")==="yes"){digitalData.page.sembrand="yes"
}else{if(Util.getParam("brand")==="no"){digitalData.page.sembrand="no"
}}}};
digitalData.util.trackModules=function(c,d){var b="";
try{switch(d){case"blogs":(function(f,g){f(g).parentsUntil(".page-wrap").each(function(){var k=f(this),m=k.attr("id")||"",j=k.attr("class")||"";
if(j.indexOf("header-main")>-1){b="topnav"
}else{if(m==="blogspotlightwrap"){b="grid-row-1"
}else{if(j==="container-fluid container-width-md top-20"){b="grid-row-2"
}else{if(j==="footer"){b="footer"
}}}}if(b){return false
}})
})($,c);
break;
case"sflive":(function(f,g){f(g).parentsUntil("body").each(function(){var k=f(this),m=k.attr("id")||"",j=k.attr("class")||"";
if(j.indexOf("header-container")>-1){b="topnav"
}else{if(j==="bottom"){b="footer"
}else{if(k.parent().get(0).className.indexOf("content-container")>-1){b="grid-row-"+(f(this).index()+1)
}}}if(b){return false
}})
})($,c);
break;
default:(function(g,j){var f=g(j).parentsUntil("body").addBack();
selfUpToParents=g(f).get().reverse();
g(selfUpToParents).each(function(){var m=g(this),n=m.attr("id")||"",k=m.attr("class")||"";
if(n.indexOf("products_expand_par")>-1){b="topnav-products-menu"
}else{if(k.indexOf("navbar-expandable-container")>-1||(k.indexOf("overlayMenuItem")>-1)){b="topnav"
}else{if(n==="navigation_left"){b="left-nav"
}else{if(k.indexOf("navbar-header-container")>-1){b="header"
}else{if(k==="bottom"){b="footer"
}else{if(m.parent().get(0).className.indexOf("content-container")>-1){b="grid-row-"+(g(this).index()+1)
}}}}}}if(b){return false
}})
})($,c)
}}catch(a){}if(b){s.c_w("v32",digitalData.page.pagename+"|"+b)
}};
digitalData.util.doCustomPlugins=function(){try{custom_var=Page.getLocale()+"|"+vp.getType()+"|"+Page.getSegment()+"|"+vp.getTypeDetailed()+"|"+vp.getVisitNumber()+"|"+Page.getName()
}catch(a){}if(!($("html").hasClass("ie7")||$("html").hasClass("ie6"))){if(Page.isBlog()){$("header a, .page-content a").click(function(){digitalData.util.trackModules(this,"blogs")
})
}else{if(Page.isSFLive()){$("header.header-container a, footer.bottom a, .content-container a").click(function(){digitalData.util.trackModules(this,"sflive")
})
}else{$("header.header-container a, footer.bottom a, .content-container a").click(function(){digitalData.util.trackModules(this,"www")
});
$(".nav-container a").on("click",function(){var b=$(this).text().toLowerCase().replace(/ /g,"_"),c=Page.getName()+"|topnav-toplevel|"+b;
digitalData.util.trackActivity(c,{events:["event2"],properties:{eVar32:c}})
})
}}}try{s.loadModule("Media");
s.Media.autoTrack=false;
s.Media.trackMilestones="25,50,75,100";
s.Media.playerName="YouTube no-flash player";
s.Media.segmentByMilestones=false;
s.Media.trackUsingContextData=true;
s.Media.contextDataMapping={"a.media.name":"eVar7,prop7","a.media.timePlayed":"event71","a.media.view":"event7","a.media.milestones":{25:"event67",50:"event68",75:"event69",100:"event70"}}
}catch(a){}};
digitalData.util.setEvent=function(a,b){if(!a){return false
}if(digitalData.event){digitalData.event.push({eventInfo:{eventName:a,eventID:a},category:{primaryCategory:b||""}})
}};
digitalData.util.hasEvent=function(a){for(i=0;
i<digitalData.event.length;
i++){if(digitalData.event[i].eventInfo.eventID===a){return true
}}return false
};
digitalData.util.trackPartialPageLoad=function(j,a){if(!j){return
}for(var f=0;
f<75;
f++){s["prop"+f]="";
s["eVar"+f]=""
}digitalData.page={};
digitalData.user[0].profile[0]={};
digitalData.util.trackPageGlobal();
digitalData.page.pagename=j;
siteCatConfig.trackPageLoad();
Page.setPrevious(digitalData.page.pagename);
s.products="";
s.events="event11";
var d=a&&a.events||[];
var c=a&&a.properties||{};
for(var f=0;
f<d.length;
f++){s.events=s.apl(s.events,d[f],",",2)
}for(var b in c){var g=c[b];
s[b]=g
}s.canceldoplugins=true;
s.t();
s.canceldoplugins=false
};
digitalData.util.trackCTAs=function(b,d){var c="";
d=d||"";
if(!b){return d?";"+d+";;;event25=1":""
}if(d){c=";"+d+";;;event25=1"
}for(var a=0;
a<b.length;
a++){if(c.indexOf(b[a])==-1){c+=(c!=""?",":"")+";"+b[a]+";;;event19=1"
}}return c
};
digitalData.util.clearVarsAndEvents=function(){s.clearVars()
};
function trackGoogPlus(b){try{if(b.state=="on"){digitalData.util.trackActivity("GooglePlus: social share",{events:["event26"],properties:{eVar53:"GooglePlus"}})
}}catch(a){}}digitalData.util.sfTrackFormsCampaigns();
digitalData.util.trackPageGlobal();
digitalData.util.trackPageSFDC();
digitalData.util.doCustomPlugins();
$(window).load(function(){var a="event26";
if(Page.isBlog()){$(".IN-widget a").bind("click",function(){digitalData.util.trackActivity("LinkedIn: social share",{events:[a],properties:{eVar53:"LinkedIn"}})
});
$(".email_share a").bind("click",function(){digitalData.util.trackActivity("email: social share",{events:[a],properties:{eVar53:"email"}})
});
try{FB.Event.subscribe("edge.create",function(c){digitalData.util.trackActivity("Facebook-like: social share",{events:[a],properties:{eVar53:"Facebook-like"}})
})
}catch(b){}try{FB.Event.subscribe("comment.create",function(c){digitalData.util.trackActivity("Facebook-comment: social share",{events:[a],properties:{eVar53:"Facebook-comment"}})
})
}catch(b){}try{twttr.events.bind("click",function(c){if(c.type==="click"){digitalData.util.trackActivity("Twitter: social share",{events:[a],properties:{eVar53:"Twitter"}})
}})
}catch(b){}}});
Page.PixelManager.trackWithTnTRedirect=function(b){var a=Page.getName()+":redirect";
if(mboxFactoryDefault.getMboxes().get(a).length()>0){if(typeof TnT!=="undefined"&&TnT.suppressTracking){return
}else{s.t()
}}else{if(b===3){s.t()
}else{b+=1;
setTimeout(Page.PixelManager.trackWithTnTRedirect,500,b)
}}};
Page.PixelManager.newPixel({show:true,mobile:true,login:true},function(){if(!(Page.isAjax()||Page.isLogin()||(typeof Page.suppressTracking==="function"&&Page.suppressTracking()))){if(Page.hasTnTRedirect){Page.PixelManager.trackWithTnTRedirect(0)
}else{if(typeof(vp)!=="undefined"&&typeof(vp.activityData)!=="undefined"&&typeof(vp.activityData.db)!=="undefined"&&!vp.activityData.db.requestMade){setTimeout(function(){OmniConfig.populateDemandBaseVars();
s.t()
},500)
}else{s.t()
}}Page.PixelManager.s_tComplete=true
}});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,login:true,locales:["us","au"]},function(b){var a="//www.sfdcstatic.com/system/shared/common/assets/thirdparty/google/analytics.js",d;
a=(Url&&Url.getFullUrl?Url.getFullUrl(a):a);
(function(k,n,t,q,p,j,f){k.GoogleAnalyticsObject=p;
k[p]=k[p]||function(){(k[p].q=k[p].q||[]).push(arguments)
},k[p].l=1*new Date();
j=n.createElement(t),f=n.getElementsByTagName(t)[0];
j.async=1;
j.src=q;
f.parentNode.insertBefore(j,f)
})(window,document,"script",a,"ga");
ga("create","UA-48200310-3","auto");
ga("require","displayfeatures");
ga("set","dimension2",vp.getType());
try{ga(function(f){ga("set","dimension1",f.get("clientId"));
ga("send","pageview")
})
}catch(c){}});
Page.PixelManager.newPixel({show:true,mobile:true},function(){if(!(document.getElementById("eloquaScript"))){var d="2761";
window._elqQ=window._elqQ||[];
window._elqQ.push(["elqSetSiteId",d]);
window._elqQ.push(["elqTrackPageView"]);
var a=document.createElement("script");
a.type="text/javascript";
a.async=true;
a.id="mcloudScript";
var b="//www.sfdcstatic.com/system/shared/common/assets/thirdparty/mcloud/mcloudCfg.min.js";
a.src=(Url&&Url.getFullUrl?Url.getFullUrl(b):b);
var c=document.getElementsByTagName("script")[0];
c.parentNode.insertBefore(a,c);
if(!vp.getActivity("mcloud")){setTimeout(function(){try{var k=document.location.protocol,j=k.indexOf("https")>-1,f=k+"//"+(j?"secure":"now")+".eloqua.com/visitor/v200/svrGP?pps=70&siteid="+d+"&format=json";
Targeter.getData(f,function(m){vp.activityData.mcloud=m.visitorID;
vp.saveActivityData()
},true)
}catch(g){}},5000)
}}});
Page.PixelManager.newPixel({show:true,mobile:true,locales:["jp"]},function(){var a=document.createElement("script");
a.type="text/javascript";
var f="/* <![CDATA[ */var yahoo_retargeting_id = 'JMDQB5XBUZ';var yahoo_retargeting_label = 'main';/* ]]> */";
a.text=f;
var d=document.getElementsByTagName("script")[0];
if(d!=(null||undefined)){d.parentNode.insertBefore(a,d)
}var b=document.createElement("script");
b.type="text/javascript";
var c="//www.sfdcstatic.com/system/shared/common/assets/thirdparty/yahooJp/s_retargeting.js";
b.src=(Url&&Url.getFullUrl?Url.getFullUrl(c):c);
var d=document.getElementsByTagName("script")[1];
if(d!=(null||undefined)){d.parentNode.insertBefore(b,d)
}});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us"],details:[{show:Page.getName().indexOf(":desk:overview")>-1,imgsuffix:"type=sfdcd0;cat=sfdcd0;ord=1?"},{show:Page.getName().indexOf(":form:conf:demo-desk-new")>-1&&Page.isConfirmation(),imgsuffix:"type=sfdcd0;cat=sfdcd00;ord=1?"},{show:Page.getName().indexOf(":desk:features")>-1,imgsuffix:"type=sfdcd0;cat=sfdcd000;ord=1?"},{show:Page.getName().indexOf(":desk:pricing")>-1,imgsuffix:"type=sfdcd0;cat=sfdcd001;ord=1?"},{show:Page.getName().indexOf(":desk:customer-stories")>-1,imgsuffix:"type=sfdcd0;cat=sfdcd002;ord=1?"},{show:Page.getName().indexOf(":desk:resources")>-1,imgsuffix:"type=sfdcd0;cat=sfdcd003;ord=1?"},{show:Page.getName().indexOf(":customers:stories:onekingslane")>-1,imgsuffix:"type=sfdcd0;cat=sfdco0;ord=1?"},{show:Page.getName().indexOf(":customers:stories:spotify")>-1,imgsuffix:"type=sfdcd0;cat=sfdcs0;ord=1?"},{show:Page.getName().indexOf(":customers:stories:soundcloud")>-1,imgsuffix:"type=sfdcd0;cat=sfdcs00;ord=1?"},{show:Page.getName().indexOf(":customers:stories:barkbox")>-1,imgsuffix:"type=sfdcd0;cat=sfdcb0;ord=1?"},{show:Page.getName().indexOf(":crm:editions-pricing-desk")>-1,imgsuffix:"type=sfdcd0;cat=sfdcd004;ord=1?"},{show:Page.getName().indexOf(":customers:stories:zenpayroll")>-1,imgurl:"//4480358.fls.doubleclick.net/activityi;src=4480358;type=sfdcd0;cat=sfdcz0;ord=1?"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl?b.imgurl:"//ad.doubleclick.net/activity;src=4480358;"+b.imgsuffix;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return((Page.hasLeadCaptureForm())&&(Page.getCloud()=="Custom Cloud"))
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6025792496949&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6025792483749&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return((Page.getName().indexOf(":df15-expo")>-1)||(Page.getName()=="SFDC:us:dreamforce:DF15"))
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?id=1424193781160198&ev=PageView&noscript=1";
var d="https://analytics.twitter.com/i/adsct?txn_id=l6gmd&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0";
var c="https://t.co/i/adsct?txn_id=l6gmd&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0";
var b="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1071772740/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a);
this.insertImage(d);
this.insertImage(c);
this.insertImage(b)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("conf:frexpo-thanks")>-1
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6028431189559&cd[value]=0.01&cd[currency]=USD&noscript=1";
var d="https://analytics.twitter.com/i/adsct?txn_id=l6gmc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0";
var c="https://t.co/i/adsct?txn_id=l6gmc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0";
var b="https://www.googleadservices.com/pagead/conversion/1006302291/?label=MSCvCI3Bwl4Q0-jr3wM&amp;guid=ON&amp;script=0";
this.insertImage(a);
this.insertImage(d);
this.insertImage(c);
this.insertImage(b)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName()=="SFDC:us:form:marketingcloud:sc:conf:arcsoft-case-study"||Page.getName()=="SFDC:us:form:marketingcloud:sc:conf:tripit-case-study")
},mobile:true,exclusive:true,locales:["us"]},function(){var a=["//www.googleadservices.com/pagead/conversion/970504060/?label=4RHSCNXo31cQ_O7izgM&amp;guid=ON&amp;script=0","https://analytics.twitter.com/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","//t.co/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","https://www.facebook.com/tr?ev=6020647137344&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1"];
for(var c=0;
c<a.length;
c++){var b=a[c];
this.insertImage(b)
}});
Page.PixelManager.newPixel({show:function(){return(Page.getName().indexOf(":form:campaigns:csp")>-1)
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6030124341440&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName().indexOf(":form:conf:campaigns:csp")>-1)
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6029947169240&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("de:events:details:sfwt15-munich")>-1
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https://tags.w55c.net/rs?id=0fce01bcd3c8435d984539310fe890e6&t=homepage";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("SFDC:de")>-1
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https://tags.w55c.net/rs?id=8249444b386142ebb1e98ae2b14679c6&t=homepage";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName()==="SFDC:de:small-business-solutions"||Page.getName()==="SFDC:de:form:demo:demo-small-business"||Page.getName().indexOf("de:form:sem:landing")>-1)
},exclusive:true,mobile:true,locales:["de"]},function(){this.insertImage("https://tags.w55c.net/rs?id=9fc8c6589c5143b289366417e252c991&t=homepage")
});
Page.PixelManager.newPixel({show:function(){return Util.getParam("r")==="https://www.salesforce.com/ca/"&&Page.getName()==="SFDC:us:login"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1071772740/?value=1.00&amp;currency_code=USD&amp;label=SY3fCIPToAcQxOiH_wM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:de:events:details:sfwt15-munich:conf"
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https://tags.w55c.net/rs?id=92f91ab0981b4fcd8089bbf5640f57d5&t=checkout&tx=$TRANSACTION_ID&sku=$SKUS&price=$price";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf(":conf:")>-1&&Page.getName()!=="SFDC:de:events:details:sfwt15-munich:conf"
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https://tags.w55c.net/rs?id=fd259108e69340eaa6cfe27c395b59e4&t=checkout&tx=$TRANSACTION_ID&sku=$SKUS&price=$price";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf(":conf:")>-1
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6025792483749&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:demo:crm-service-demos-b"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://loadm.exelator.com/load/?p=204&g=380&buid=11069968733074186&j=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:demo:crm-service-demos-b"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://secure.adnxs.com/seg?add=3413283&t=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:conf:demo-service"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://loadm.exelator.com/load/?p=204&g=380&buid=11069968733074186&j=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:conf:demo-service"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://secure.adnxs.com/px?id=603074&t=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:pdf:2015-state-of-service"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://loadm.exelator.com/load/?p=204&g=380&buid=11069968733074186&j=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:pdf:2015-state-of-service"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://secure.adnxs.com/seg?add=3413307&t=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:conf:2015-state-of-service"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://secure.adnxs.com/px?id=603076&t=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:conf:2015-state-of-service"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://loadm.exelator.com/load/?p=204&g=380&buid=11069968733074186&j=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},mobile:true,exclusive:true},function(){var a="https://amplifypixel.outbrain.com/pixel?mid=00a305aa598746b56bfcafd7aef7d00301";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("uk:blog")>-1
},mobile:true,exclusive:true,locales:["uk"]},function(){var a="https//googleads.g.doubleclick.net/pagead/viewthroughconversion/1067824670/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("de:blog")>-1
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https//googleads.g.doubleclick.net/pagead/viewthroughconversion/990137594/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("nl:blog")>-1
},mobile:true,exclusive:true,locales:["nl"]},function(){var a="https//googleads.g.doubleclick.net/pagead/viewthroughconversion/991005130/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName().indexOf("nl:blog")>-1)
},mobile:true,exclusive:true,locales:["nl"]},function(){var a="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/991005130/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName().indexOf("fr:blog")>-1)
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/984848299/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:marketingcloud:sc:advertising-q2-2015-benchmark-report"
},mobile:true,exclusive:true,locales:["us"]},function(){var a="https://analytics.twitter.com/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:conf:demo-communities"||Page.getName()==="SFDC:us:form:sem:conf:demo-communities"||Page.getName()==="SFDC:us:form:conf:forrester-social-platforms-report"||Page.getName()==="SFDC:us:form:conf:contactme"||Page.getName()==="SFDC:us:form:conf:partner-community-101"||Page.getName()==="SFDC:us:form:conf:community-eway"||Page.getName()==="SFDC:us:form:conf:customer-community-101"||Page.getName()==="SFDC:us:form:conf:communities-new-key-to-business-success"||Page.getName()==="SFDC:us:form:conf:10-ways-community-cloud-transforms-business"||Page.getName()==="SFDC:us:form:conf:engaging-your-chatter-community"||Page.getName()==="SFDC:us:form:conf:building-a-thriving-community"||Page.getName()==="SFDC:us:form:conf:demo-chatter"||Page.getName()==="SFDC:us:form:conf:chatter-engage-ebook"||Page.getName()==="SFDC:us:form:conf:5-steps-to-communities-that-thrive"||Page.getName()==="SFDC:us:form:conf:chatter-engagement-playbook"||Page.getName()==="SFDC:us:form:conf:work-out-loud-on-chatter-infographic"||Page.getName()==="SFDC:us:form:conf:building-a-thriving-community"||Page.getName()==="SFDC:us:form:conf:chatter-champion-guide-getting-started"||Page.getName()==="SFDC:us:form:conf:community-cloud-pure-ebook"||Page.getName()==="SFDC:us:form:conf:community-cloud-101"||Page.getName()==="SFDC:us:form:conf:7-new-ways-to-go-faster"||Page.getName()==="SFDC:us:form:conf:pono-ebook"||Page.getName()==="SFDC:us:form:conf:shaping-customer-service-with-communities"||Page.getName()==="SFDC:us:form:conf:gartner-comm-magic-quadrant-2015"||Page.getName()==="SFDC:us:form:conf:gartner-comm-social-2015"
},exclusive:true,mobile:true,locales:["us"]},function(b){var c="https://www.facebook.com/tr?ev=6034533017261&cd[value]=0.01&cd[currency]=USD&noscript=1";
var a="https://www.googleadservices.com/pagead/conversion/960961529/?label=A3IeCJ3vxF4Q-becygM&amp;guid=ON&amp;script=0";
this.insertImage(c);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:conf:customer-service-best-practices"||Page.getName()==="SFDC:us:form:conf:2015-state-of-service"||Page.getName()==="SFDC:us:form:conf:great-customer-service"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="https://trc.taboola.com/salesforce-servicecloud-sc/log/3/action?name=conversion&item-url=";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:conf:demo-communities"||Page.getName()==="SFDC:us:form:sem:conf:demo-communities"||Page.getName()==="SFDC:us:form:conf:forrester-social-platforms-report"||Page.getName()==="SFDC:us:form:conf:contactme"||Page.getName()==="SFDC:us:form:conf:partner-community-101"||Page.getName()==="SFDC:us:form:conf:community-eway"||Page.getName()==="SFDC:us:form:conf:customer-community-101"||Page.getName()==="SFDC:us:form:conf:communities-new-key-to-business-success"||Page.getName()==="SFDC:us:form:conf:10-ways-community-cloud-transforms-business"||Page.getName()==="SFDC:us:form:conf:engaging-your-chatter-community"||Page.getName()==="SFDC:us:form:conf:building-a-thriving-community"||Page.getName()==="SFDC:us:form:conf:demo-chatter"||Page.getName()==="SFDC:us:form:conf:chatter-engage-ebook"||Page.getName()==="SFDC:us:form:conf:5-steps-to-communities-that-thrive"||Page.getName()==="SFDC:us:form:conf:chatter-engagement-playbook"||Page.getName()==="SFDC:us:form:conf:work-out-loud-on-chatter-infographic"||Page.getName()==="SFDC:us:form:conf:building-a-thriving-community"||Page.getName()==="SFDC:us:form:conf:chatter-champion-guide-getting-started"||Page.getName()==="SFDC:us:form:conf:community-cloud-pure-ebook"||Page.getName()==="SFDC:us:form:conf:community-cloud-101"||Page.getName()==="SFDC:us:form:conf:employee-community-101"||Page.getName()==="SFDC:us:form:conf:7-new-ways-to-go-faster"||Page.getName()==="SFDC:us:form:conf:pono-ebook"||Page.getName()==="SFDC:us:form:conf:shaping-customer-service-with-communities"||Page.getName()==="SFDC:us:form:conf:gartner-comm-social-2015"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="https://trc.taboola.com/salesforce-communitycloud-sc/log/3/action?name=conversion&item-url=";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:de:events:details:cebit"
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https://tags.w55c.net/rs?id=deea964d7c5949e2a18cedc78ffe7206&t=homepage";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:de:events:details:cebit:register"
},mobile:true,exclusive:true,locales:["de"]},function(){var a="https://tags.w55c.net/rs?id=d96c1f5f5dec4022812c40e99aedcdd2&t=homepage";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:pdf:customer-engagement-guide"||Page.getName()==="SFDC:us:form:conf:customer-engagement-guide:[conf]"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="https://www.facebook.com/tr?id=1424193781160198&ev=PageView&noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:pdf:customer-engagement-guide"||Page.getName()==="SFDC:us:form:conf:customer-engagement-guide:[conf]"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="https://www.bizographics.com/collect/?pid=543&fmt=gif";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.hasLeadCaptureForm()||Page.isCareersConfirmation()
},mobile:true,exclusive:true,details:[{locales:["ap","au","cn","in","kr","tw"],id:"551hz62487",conv:"response"},{locales:["de","es","eu","fr","it","nl","se","uk"],id:"9guevvvsq0",conv:"responses"},{locales:["mx","br"],id:"551ilj2349",conv:"responded"},{locales:["jp"],id:"551hum2905",conv:"responses"},{locales:["us"],id:"551glr15414",show:vp.getCompanyCountry().toLowerCase()=="ca"||Util.getParam("country")=="ca",conv:"responses"},{locales:["ca","fr-ca"],id:"551glr15414",conv:"responses"},{locales:["us"],id:"551er56561",show:Page.getCloud()=="Data Cloud",conv:"jigsaw"},{locales:["jp","us"],id:"fpnnep64e0",conv:(Page.isCareersConfirmation()?"careerappform":"responses")}]},function(d){var b=this.protocol+"//tracker.marinsm.com/tp?";
var a=this.current[0];
var c="";
if(Page.isConfirmation()){marinStep="2";
c="UTM:I|"+(vp.getFormCompleteId()?vp.getFormCompleteId().replace(/\|/g,""):"")+"|"+this.details[a].conv+"||||1"
}else{marinStep="1";
if(Page.isCareersConfirmation()){c="UTM:I||"+this.details[a].conv+"||||1"
}}var f={act:marinStep,cid:this.details[a].id,page:document.location.href,ref:Page.getReferrer(),rnd:this.date.getTime(),tz:this.date.getTimezoneOffset()/60,trans:c};
b+=this.toQueryString(f);
this.insertImage(b)
});
Page.PixelManager.newPixel({show:function(){return Page.getCloud()!="No Cloud"&&Page.isConfirmation()&&!Page.isAjax()
},exclusive:true,locales:["us","ca"],details:[{show:Page.getCloud()=="Service Cloud",event:"Service+Cloud+Conversion"},{show:Page.getCloud()=="Collaboration Cloud",event:"Chatter+Conversion"},{show:Page.getCloud()=="Data Cloud",event:"Data+com+Conversion"},{show:Page.getCloud()=="Sales Cloud",event:"Sales+Cloud+Conversion"},{show:Page.getCloud()=="Custom Cloud",event:"Force+com+Conversion"}]},function(d){var c=this.details[this.current[0]],a="p-A-9KH5ScCZw9T.gif",b=this.protocol+"//secure.quantserve.com/pixel/"+a+"?labels=_fp.event."+c.event;
this.insertImage(b)
});
Page.PixelManager.newPixel({show:!Page.isAjax(),exclusive:true,mobile:true,locales:["au","us","fr","de","uk","nl"],details:[{locales:["au","us"],id1:"BJ2LEY7ICBALDJY44RXUPT",id2:"PVKJPLAT7JB25N36LOQYTU"},{locales:["de"],id1:"BUM2FS2SSJGE5C23YDEAWZ",id2:"HCOG67ZSARFOLPA6NNHCDR"},{locales:["fr"],id1:"E3YMPVV4ENCI3DBP3ALT2Q",id2:"XTD3OHAYLBHEVP3PIZ6DNM"},{locales:["uk"],id1:"2ZCUYMULN5AQRHP3F45E2Z",id2:"SEPZ3MHIMFAM7JDIDU7VKT"},{locales:["nl"],id1:"Z3EYBNJWVJFH5PR7SZJ3OQ",id2:"IY2CFTIW3FFFBCWI7XSRIT"}]},function(c){var b=this.details[this.current[0]],a=this.protocol+"//d.adroll.com/ipixel/"+b.id1+"/"+b.id2+"?"+(Page.isConfirmation()?"name=converted&":""),d={ar_ed_product:Page.getCloud(),ar_ed_pageType:Page.getType(),ar_ed_locale:Page.getLocale(),ar_ed_visitorType:vp.getType()};
a+=this.toQueryString(d);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:true,exclusive:true,locales:["de"],details:[{show:Page.isConfirmation(),account:"1011350631",label:"LB81CLmcrQQQ5_if4gM",add:"385769",d1:"VSV36O4DSZFB7EQGWILKQC",d2:"7VBXTEY2XFCPBEFBKFMKYW",name:"converted"},{show:Page.isHome(),account:"1011350631",label:"3YeTCKGfrQQQ5_if4gM",add:"385772",d1:"VSV36O4DSZFB7EQGWILKQC",d2:"7VBXTEY2XFCPBEFBKFMKYW",name:"homepage"},{show:Page.getName().indexOf(":socialsuccess")>-1,account:"1011350631",label:"zJsgCNGZrQQQ5_if4gM",add:"385766",d1:"VSV36O4DSZFB7EQGWILKQC",d2:"7VBXTEY2XFCPBEFBKFMKYW",name:"socialsuccess"},{show:Page.isSocialEnterprise(),account:"1011350631",label:"8e3ACNmYrQQQ5_if4gM",add:"385765",d1:"VSV36O4DSZFB7EQGWILKQC",d2:"7VBXTEY2XFCPBEFBKFMKYW",name:"socialenterprise"},{show:Page.getCloud()=="Sales Cloud",account:"1011350631",label:"hiFwCMmarQQQ5_if4gM",add:"385767",d1:"VSV36O4DSZFB7EQGWILKQC",d2:"7VBXTEY2XFCPBEFBKFMKYW",name:"salescloud"}]},function(j){var a=this.details[this.current[0]],g=this.protocol+"//d.adroll.com/imgpix/",k=g+"g/pagead/conversion/"+a.account+"/?",f=g+"x/seg?",d=a.d1?("//d.adroll.com/ipixel/"+a.d1+"/"+a.d2+"?name="+a.name):"",c={label:a.label,guid:"ON",script:"0"},b={add:a.add,t:"2"};
k+=this.toQueryString(c);
f+=this.toQueryString(b);
this.insertImage(k);
this.insertImage(f);
if(d){this.insertImage(d)
}});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},locales:["de","nl","fr","uk"],mobile:true,exclusive:true,details:[{locales:["de"],id:"f5ef1270-e151-46e1-b9ad-2a51dc76adc0",domain:"2989024",action:"243400"},{locales:["nl"],id:"15fd05fb-3c71-438d-a693-9f4de720407b",domain:"2989016",action:"255985"},{locales:["fr"],id:"700a44f3-43a6-45b2-aca8-c3c00c188818",domain:"2989010",action:"254052"},{locales:["uk"],id:"67073c07-d8a9-4a73-b847-df9f1f82d5ed",domain:"2988995",action:"255976"}]},function(c){var b=this.details[this.current[0]],d="5050",a="//flex.msn.com/mstag/tag/"+b.id+"/analytics.html?",f={dedup:"1",domainId:b.domain,type:"1",actionid:b.action};
a+=this.toQueryString(f);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},locales:["us"],mobile:true,exclusive:true,details:[{show:Page.getCloud()=="Data Cloud",id:"258d7134-cf51-4a14-9817-1badd555021d",domain:"1160910",action:"46053"},{show:true,id:"db171edf-370d-4903-8000-47df04b637b3",domain:"120798",action:"45992"}]},function(c){var b=this.details[this.current[0]],d="5050",a=this.protocol+"//flex.atdmt.com/mstag/tag/"+b.id+"/analytics.html?",f={dedup:"1",domainId:b.domain,type:"1",actionid:b.action};
a+=this.toQueryString(f)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.isCareersConfirmation()
},exclusive:true,mobile:true,locales:["ap","au","br","ca","fr-ca","cn","dk","de","es","fi","fr","in","it","jp","mx","nl","no","us"],details:[{show:vp.getCompanyCountry().toLowerCase()=="ca"&&(Page.getName().indexOf("events:details")>-1&&Page.getName().indexOf("-canada")>-1),locales:["us"],id:"1007182467",label:"gjoTCO2d4QIQg8Wh4AM",value:"0",format:"3"},{show:vp.getCompanyCountry().toLowerCase()=="ca"&&Page.getCloud()=="Custom Cloud",locales:["us"],id:"1007182467",label:"zCx6CPX81QIQg8Wh4AM",value:"0",format:"3"},{show:vp.getCompanyCountry().toLowerCase()=="ca"&&Page.getCloud()=="Sales Cloud",locales:["us"],id:"1007182467",label:"dhKwCI361QIQg8Wh4AM",value:"0",format:"3"},{show:vp.getCompanyCountry().toLowerCase()=="ca"&&Page.getCloud()=="Service Cloud",locales:["us"],id:"1007182467",label:"NQbFCIX71QIQg8Wh4AM",value:"0",format:"3"},{show:vp.getCompanyCountry().toLowerCase()=="ca"&&Page.getCloud()=="Collaboration Cloud",locales:["us"],id:"1007182467",label:"AbifCO391QIQg8Wh4AM",value:"0",format:"3"},{show:Page.getName().indexOf("events:details")>-1&&Page.getName().indexOf("-canada")>-1,locales:["ca","fr-ca"],id:"1007182467",label:"gjoTCO2d4QIQg8Wh4AM",value:"0",format:"3"},{show:Page.getCloud()=="Custom Cloud",locales:["ca","fr-ca"],id:"1007182467",label:"zCx6CPX81QIQg8Wh4AM",value:"0",format:"3"},{show:Page.getCloud()=="Sales Cloud",locales:["ca","fr-ca"],id:"1007182467",label:"dhKwCI361QIQg8Wh4AM",value:"0",format:"3"},{show:Page.getCloud()=="Service Cloud",locales:["ca","fr-ca"],id:"1007182467",label:"NQbFCIX71QIQg8Wh4AM",value:"0",format:"3"},{show:Page.getCloud()=="Collaboration Cloud",locales:["ca","fr-ca"],id:"1007182467",label:"AbifCO391QIQg8Wh4AM",value:"0",format:"3"},{show:Page.getName().indexOf("dreamforce")>-1,locales:["us"],id:"1006302291",label:"R4_kCKWG-ggQ0-jr3wM",value:"0",format:"2"},{show:Page.isCareersConfirmation(),locales:["us"],id:"1071772740",label:"TP8oCKPuqAIQxOiH_wM",value:"0",format:"2"},{show:Page.getName().indexOf(":events:details:")>-1,locales:["us"],id:"1006302291",label:"mWM9CPXhowMQ0-jr3wM",value:"0",format:"2"},{show:Page.getCloud()=="Data Cloud",locales:["us"],id:"981579177",label:"O8yVCPfeoAIQqeuG1AM",value:"0",format:"2"},{show:Page.getCloud()=="Custom Cloud",locales:["us"],id:"1071772740",label:"sjPxCIPN-gEQxOiH_wM",value:"0",format:"2"},{show:Page.getCloud()=="Sales Cloud",locales:["us"],id:"1071772740",label:"seyzCIu2-QEQxOiH_wM",value:"0",format:"2"},{show:Page.getCloud()=="Service Cloud",locales:["us"],id:"1071772740",label:"0bnmCPu3-QEQxOiH_wM",value:"0",format:"2"},{show:Page.getCloud()=="Collaboration Cloud",locales:["us"],id:"1071772740",label:"yMbFCPO4-QEQxOiH_wM",value:"0",format:"2"},{locales:["us"],id:"1006058336",label:"LIlqCPDO1wUQ4Pbc3wM",value:"0",format:"3"},{locales:["us"],id:"1071772740",value:"0"},{show:Page.getName().indexOf(":conf")>-1,locales:["fr"],id:"984848299",label:"rIDXCIXP8QYQq6_O1QM",value:"0",format:"1"},{show:Page.getName().indexOf(":conf")>-1,locales:["de"],id:"990137594",label:"QklvCL7s2AQQ-pmR2AM",value:"0",format:"1"},{show:Page.getName().indexOf(":conf")>-1,locales:["it"],id:"988803874",label:"zSX_CLaE4gQQoua_1wM",value:"0",format:"1"},{show:Page.getName().indexOf(":conf")>-1,locales:["es"],id:"988841293",label:"4nNUCIuX6gQQzYrC1wM",value:"0",format:"1"},{id:"1008838283",locales:["cn"],show:Page.getCloud()=="Service Cloud",label:"Nlg-CI3I4AIQi82G4QM",value:"0",format:"2"},{id:"1008838283",locales:["cn"],show:Page.getCloud()=="Custom Cloud",label:"Ioj1CJ2B4wIQi82G4QM",value:"0",format:"2"},{id:"1008838283",locales:["cn"],show:Page.getCloud()=="Sales Cloud",label:"GCLRCM2F3gIQi82G4QM",value:"0",format:"2"},{id:"993757685",locales:["au"],label:"DXo7CIOykgUQ9ZPu2QM",value:"0",format:"2"},{id:"990747468",locales:["ap"],label:"yaMRCLTb1gQQzLa22AM",value:"0",format:"2"},{id:"987761254",locales:["in"],label:"dsiICOK0wQYQ5pSA1wM",value:"0",format:"2"},{id:"1059959353",locales:["br","mx"],lang:"es",format:"2"},{id:"991005130",locales:["nl"],lang:"en",label:"qHYhCLaVgAkQypPG2AM",format:"2",value:"0"},{id:"1069216573",locales:["dk","fi","no"],format:"2",value:"0"},{show:(Page.getName().indexOf(":jp:form:seminar:customer:conf")==-1&&Page.getName().indexOf(":jp:form:seminar:online:conf")==-1&&document.location.href.indexOf("/assets/swf/youtube_players/")==-1),locales:["jp"],id:"1061316053",lang:"ja",format:"3",label:"OvNjCJPhjgIQ1cuJ-gM",value:"0"}]},function(){var b=this.details[this.current[0]],a=this.protocol+"//www.googleadservices.com/pagead/conversion/"+b.id+"/?",c="",d={random:this.date.getTime(),cv:"6",fst:this.date.getTime(),num:"1",fmt:b.format||"1",value:b.value||"1",label:b.label||"lead",bg:"ffffff",hl:b.lang||"",gl:b.country||"",guid:"ON",u_tz:-this.date.getTimezoneOffset(),url:document.location.href};
a+=this.toQueryString(d);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.isCareersConfirmation()
},exclusive:true,mobile:true,locales:["us"],details:[{locales:["us"],id:"1006058336",label:"LIlqCPDO1wUQ4Pbc3wM",value:"0",format:"3"}]},function(){var b=this.details[this.current[0]],a=this.protocol+"//www.googleadservices.com/pagead/conversion/"+b.id+"/?",c="",d={random:this.date.getTime(),cv:"6",fst:this.date.getTime(),num:"1",fmt:b.format||"1",value:b.value||"1",label:b.label||"lead",bg:"ffffff",hl:b.lang||"",gl:b.country||"",guid:"ON",u_tz:-this.date.getTimezoneOffset(),url:document.location.href};
a+=this.toQueryString(d);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return vp.isCustomer()
},login:true,locales:["us","au","uk"],exclusive:true,details:[{locales:["us","au","uk","ap"],id:"1071772740",label:"SY3fCIPToAcQxOiH_wM",value:"0"}]},function(d){var b=this.details[this.current[0]],a="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/"+b.id+"/?",c={product:Page.getCloud(),pageType:Page.getType(),locale:Page.getLocale(),visitorType:vp.getType()},f={label:b.label,guid:"ON",url:document.location.href,random:this.date.getTime(),value:"0"};
a+=this.toQueryString(f)+"&data="+this.toQueryString(c,";");
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName().indexOf("us:industries:financial-services")>-1||Page.getName().indexOf("us:form:industries:retail-banking-wp")>-1||Page.getName().indexOf("us:form:industries:bankingcrm")>-1||Page.getName().indexOf("us:form:industries:lead-referral-infographic")>-1||Page.getName().indexOf("us:form:industries:ab-lr-wp")>-1||Page.getName().indexOf("us:form:industries:ab-webinar-rbs-bmo")>-1)
},login:true,locales:["us"],exclusive:true,details:[{locales:["us"],id:"1020572884"}]},function(c){var b=this.details[this.current[0]],a="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/"+b.id+"/?",d={guid:"ON",random:this.date.getTime(),value:"0",script:"0"};
a+=this.toQueryString(d);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return !(Page.isConfirmation()||Page.isAjax())
},locales:["ap","au","br","ca","cn","de","dk","fi","fr","fr-ca","in","jp","kr","mx","nl","no","se","tw","uk","us"],exclusive:true,details:[{show:Page.getCloud()=="Data Cloud",locales:["us"],id:"981579177",label:"0jgnCL_O3AQQqeuG1AM",value:"0"},{locales:["us"],id:"1071772740",label:"xVRVCIPNgQMQxOiH_wM",value:"0"},{locales:["ca","fr-ca"],id:"1007182467",label:"FQ3aCOXOjwQQg8Wh4AM",value:"0"},{show:Page.getName().indexOf(":nl:form:sem:sales-performance")>-1,locales:["nl"],id:"1051754287",value:"0"},{locales:["nl"],id:"991005130",value:"0"},{locales:["de","fr","uk"],id:"1051754287",label:"zYRLCPfS0wMQr_7B9QM",value:"0"},{locales:["jp"],id:"1061316053",label:"aDEvCIPL4wMQ1cuJ-gM",value:"0"},{locales:["cn","kr","tw"],id:"1066588057",label:"Nm5FCKu94wMQma_L_AM",value:"0"},{locales:["au"],id:"993757685",label:"Cf7xCJOwkgUQ9ZPu2QM",value:"0"},{locales:["ap"],id:"990747468",label:"Q5nVCKzc1gQQzLa22AM",value:"0"},{locales:["in"],id:"987761254",label:"tia6COqzwQYQ5pSA1wM",value:"0"},{locales:["br","mx"],id:"1059959353",label:"RxYICPuJgQQQueS2-QM",value:"0"},{locales:["dk","fi","no","se"],id:"1069216573",value:"0"},{show:Page.getName().indexOf(":conf:cloudforce")>-1,locales:["br"],src:"2382028",type:"sdfcs420",cat:"brclo805"}]},function(d){var b=this.details[this.current[0]],a=this.protocol+"//googleads.g.doubleclick.net/pagead/viewthroughconversion/"+b.id+"/?",c={product:Page.getCloud(),pageType:Page.getType(),locale:Page.getLocale(),visitorType:vp.getType()},f={label:b.label,guid:"ON",url:document.location.href,random:this.date.getTime(),value:"0"};
a+=this.toQueryString(f)+"&data="+this.toQueryString(c,";");
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.isCareersConfirmation()
},exclusive:true,mobile:true,locales:["au","br","de","fr","in","jp","mx","nl","us","uk"],details:[{show:Page.getName().indexOf("dreamforce")>-1,locales:["us"],src:"2382028",type:"event225",cat:"dream500"},{show:Page.getName().indexOf("events:details:")>-1,locales:["us"],src:"2382028",type:"event225",cat:"custo058"},{show:Page.getCloud()=="SMB Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"smbfo197"},{show:Page.getCloud()=="Service Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"servi120"},{show:Page.getCloud()=="Work.com",locales:["us"],src:"2382028",type:"sales383",cat:"workc235"},{show:Page.getCloud()=="Marketing Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"marke764"},{show:Page.getCloud()=="Collaboration Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"chatt840"},{show:Page.getCloud()=="Custom Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"platf854"},{show:Page.getCloud()=="Data Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"datac786"},{show:Page.getCloud()=="Sales Cloud",locales:["us"],src:"2382028",type:"sales383",cat:"sales599"},{show:Page.getName().indexOf("events:details:")>-1,locales:["uk"],src:"2971757",type:"ukcon227",cat:"londo281"},{show:(Page.getName().indexOf("freetrial-conf-lp-d")>-1||Page.getName().indexOf("demo-sales-lp-d")>-1||Page.getName().indexOf("contactme-lp-d")>-1),locales:["uk"],src:"2971757",type:"displ100",cat:""},{locales:["uk"],src:"2971757",type:"ukcon227",cat:"ukcon988"},{locales:["nl"],src:"4000273",type:"landi096",cat:"nl_di600"},{locales:["br","mx"],src:"2382028",type:"sfdcc796",cat:"mxsal804"},{show:Page.getName().indexOf("events:details:")>-1,locales:["fr"],src:"2971759",type:"frcon275",cat:"frcon296"},{locales:["fr"],src:"2971759",type:"frcon275",cat:"frcon789"},{show:Page.getName().indexOf(":conf")>-1,locales:["de"],src:"2971760",type:"conve201",cat:"decon381"},{locales:["de"],src:"2971760",type:"conve201",cat:"decon557"},{show:Page.getName().indexOf("events:details:")>-1,locales:["au"],src:"2971722",type:"audfa323",cat:"event364"},{show:Page.getCloud()=="SMB Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"smbfo568"},{show:Page.getCloud()=="Service Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"servi748"},{show:Page.getCloud()=="Work.com",locales:["au"],src:"2971722",type:"audfa323",cat:"workc125"},{show:Page.getCloud()=="Marketing Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"marke856"},{show:Page.getCloud()=="Collaboration Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"chatt741"},{show:Page.getCloud()=="Custom Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"platf727"},{show:Page.getCloud()=="Data Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"datac211"},{show:Page.getCloud()=="Sales Cloud",locales:["au"],src:"2971722",type:"audfa323",cat:"sales949"},{locales:["in"],src:"2971756",type:"incon238",cat:"incon608"},{locales:["jp"],src:"2971761",type:"jpcon264",cat:"jpcon972"}]},function(g){var d=this.details[this.current[0]],f=Math.random()+"",b=f*10000000000000,c=this.protocol+"//ad.doubleclick.net/activity;",j={src:d.src,type:d.type,cat:d.cat,ord:b,num:"1"};
c+=this.toQueryString(j,";");
this.insertImage(c)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.isCareersConfirmation()
},exclusive:true,mobile:true,locales:["nl"],details:[{locales:["nl"],src:"4000273",type:"nlcon758",cat:"nlcon441"}]},function(g){var d=this.details[this.current[0]],f=Math.random()+"",b=f*10000000000000,c=this.protocol+"//ad.doubleclick.net/activity;",j={src:d.src,type:d.type,cat:d.cat,ord:b,num:"1"};
c+=this.toQueryString(j,";");
this.insertImage(c)
});
Page.PixelManager.newPixel({show:function(){return !(Page.isConfirmation()||Page.isAjax())
},exclusive:true,locales:["au","fr","uk","us"],details:[{show:Page.getName().indexOf("dreamforce")>-1,locales:["us"],src:"2382028",type:"sales555",cat:"retar702"},{show:Page.getCloud()=="SMB Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar561"},{show:Page.getCloud()=="SMB Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar579"},{show:Page.getCloud()=="Work.com"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar522"},{show:Page.getCloud()=="Work.com",locales:["us"],src:"2382028",type:"sales555",cat:"retar739"},{show:Page.getCloud()=="Marketing Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar554"},{show:Page.getCloud()=="Marketing Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar027"},{show:Page.getCloud()=="Custom Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar203"},{show:Page.getCloud()=="Custom Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar527"},{show:Page.getCloud()=="Data Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar586"},{show:Page.getCloud()=="Data Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar141"},{show:Page.getCloud()=="Collaboration Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar860"},{show:Page.getCloud()=="Collaboration Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar539"},{show:Page.getCloud()=="Service Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar106"},{show:Page.getCloud()=="Service Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar775"},{show:Page.getCloud()=="Sales Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["us"],src:"2382028",type:"sales555",cat:"retar797"},{show:Page.getCloud()=="Sales Cloud",locales:["us"],src:"2382028",type:"sales555",cat:"retar188"},{show:vp.isCustomer(),locales:["us"],src:"2382028",type:"sales555",cat:"retar607"},{show:true,locales:["us"],src:"2382028",type:"sales555",cat:"retar915"},{show:Page.getName().indexOf(":events:details")>-1,locales:["fr"],src:"2971759",type:"frlan850",cat:"cttpa476"},{show:Page.getName().indexOf(":campaigns:nous-innovons-avec-salesforce")>-1,locales:["fr"],src:"2971759",type:"frlan850",cat:"aware335"},{show:Page.isHome(),locales:["uk"],src:"2971757",type:"homep382",cat:""},{show:Page.getName().indexOf("sales-cloud-display")>-1,locales:["uk"],src:"2971757",type:"landi501",cat:"displ249"},{show:Page.getName().indexOf(":events:details:")>-1,locales:["au"],src:"2971722",type:"audfa327",cat:"event816"},{show:Page.getCloud()=="SMB Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["au"],src:"2971722",type:"audfa327",cat:"smbpe140"},{show:Page.getCloud()=="SMB Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"smbpr100"},{show:Page.getCloud()=="Service Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["au"],src:"2971722",type:"audfa327",cat:"servi401"},{show:Page.getCloud()=="Service Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"servi738"},{show:Page.getCloud()=="Work.com",locales:["au"],src:"2971722",type:"audfa327",cat:"workc576"},{show:Page.getCloud()=="Marketing Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["au"],src:"2971722",type:"audfa327",cat:"marke210"},{show:Page.getCloud()=="Marketing Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"marke175"},{show:Page.getCloud()=="Collaboration Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["au"],src:"2971722",type:"audfa327",cat:"chatt782"},{show:Page.getCloud()=="Collaboration Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"chatt019"},{show:Page.getCloud()=="Custom Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["au"],src:"2971722",type:"audfa327",cat:"platf806"},{show:Page.getCloud()=="Custom Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"platf160"},{show:Page.getCloud()=="Data Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"datac508"},{show:Page.getCloud()=="Sales Cloud"&&Page.getType()=="Pricing and Editions Page",locales:["au"],src:"2971722",type:"audfa327",cat:"sales133"},{show:Page.getCloud()=="Sales Cloud",locales:["au"],src:"2971722",type:"audfa327",cat:"sales677"},{show:vp.isCustomer(),locales:["au"],src:"2971722",type:"audfa327",cat:"custo541"},{show:true,locales:["au"],src:"2971722",type:"audfa327",cat:"prosp024"}]},function(g){var d=this.details[this.current[0]],f=Math.random()+"",b=f*10000000000000,c=this.protocol+"//ad.doubleclick.net/activity;",j={src:d.src,type:d.type,cat:d.cat,ord:b};
c+=this.toQueryString(j,";");
this.insertImage(c)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["de","fr","nl"],details:[{show:Page.getCloud()==="Sales Cloud",locales:["de"],txn_id:"l4hnp",p_id:"Twitter"},{show:Page.getCloud()==="Custom Cloud",locales:["de"],txn_id:"l4k66",p_id:"Twitter"},{show:Page.getType()==="Events Page",locales:["de"],txn_id:"l4k68",p_id:"Twitter"},{show:Page.getType()==="Product Page",locales:["fr"],txn_id:"l4d8l",p_id:"Twitter"},{show:Page.getCloud()==="Sales Cloud",locales:["nl"],txn_id:"l4hnd",p_id:"Twitter"},{show:Page.getCloud()==="Service Cloud",locales:["nl"],txn_id:"l4hne",p_id:"Twitter"},{show:Page.getName().indexOf("SFDC:nl:form:demo:demo-platform")>-1||Page.getName().indexOf("SFDC:nl:form:signup:freetrial-platform-lb")>-1,locales:["nl"],txn_id:"l4k62",p_id:"Twitter"}]},function(c){var b=this.details[this.current[0]],a=this.protocol+"//analytics.twitter.com/i/adsct?",d={txn_id:b.txn_id,p_id:b.p_id};
a+=this.toQueryString(d,"&");
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},exclusive:true,mobile:true,locales:["fr","de","nl","uk"],details:[{locales:["uk"],txn_id:"l47cz",p_id:"Twitter"},{locales:["nl"],txn_id:"l47cy",p_id:"Twitter"},{locales:["de"],txn_id:"l47ct",p_id:"Twitter"},{locales:["fr"],txn_id:"l47cr",p_id:"Twitter"}]},function(c){var b=this.details[this.current[0]],a=this.protocol+"//analytics.twitter.com/i/adsct?",d={txn_id:b.txn_id,p_id:b.p_id};
a+=this.toQueryString(d,"&");
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getCloud()==="Custom Cloud"
},exclusive:true,mobile:true,locales:["us"]},function(c){var a=this.details[this.current[0]],d="https://a.company-target.com/pixel?id=1386806278&type=img",b="https://a.company-target.com/pixel?id=1386805952&type=img";
this.insertImage(d);
this.insertImage(b)
});
Page.PixelManager.newPixel({show:function(){return Page.getLocale()!=="jp"
},exclusive:true,mobile:true,login:true},function(b){var a="//www.bizographics.com/collect/?pid=543&fmt=gif";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return vp.isCustomer()&&Page.isHome()
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="//api.adsymptotic.com/api/s/trackconversion?_pid=11748&_psign=b42e8ca344ae182cf1df49ca78dd56f4&_aid=926&_lbl=RT_SALESFORCE_HOMEPAGE";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["fr","nl","de","uk"]},function(b){var a="//www.facebook.com/tr?id=620008638087704&amp;ev=NoScript";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true},function(b){var a="//www.facebook.com/tr?id=1424193781160198&amp;ev=NoScript&amp;",c={visitorType:vp.getType()};
a+=this.toQueryString(c);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.isCareersConfirmation()
},exclusive:true,mobile:true,locales:["fr","nl","de","uk","us","ca","fr-ca"],details:[{locales:["fr","nl","de","uk"],imgurl:"//www.facebook.com/offsite_event.php?id=6005485237752&amp;value=0&amp;currency=EUR"},{show:Page.getCloud()==="Sales Cloud",locales:["us","ca","fr-ca"],imgurl:"//www.facebook.com/tr?ev=6017334457061&cd[value]=0.01&cd[currency]=USD&noscript=1"},{show:Page.getCloud()==="Service Cloud",locales:["us","ca","fr-ca"],imgurl:"//www.facebook.com/tr?ev=6017334460261&cd[value]=0.01&cd[currency]=USD&noscript=1"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.hasLeadCaptureForm()||Page.isHome()
},exclusive:true,mobile:true,locales:["us","ca"],details:[{show:Page.isHome()&&vp.isCustomer(),imgurl:"//t.co/i/adsct?txn_id=l5joj&p_id=Twitter"},{show:Page.getCloud()==="Sales Cloud"&&Page.isConfirmation(),imgurl:"//t.co/i/adsct?txn_id=l5hdn&p_id=Twitter"},{show:Page.getCloud()==="Sales Cloud"&&Page.hasLeadCaptureForm(),imgurl:"//t.co/i/adsct?txn_id=l5jok&p_id=Twitter"},{show:Page.getCloud()==="Custom Cloud"&&Page.isConfirmation(),imgurl:"//t.co/i/adsct?txn_id=l5jon&p_id=Twitter"},{show:Page.getCloud()==="Custom Cloud"&&Page.hasLeadCaptureForm(),imgurl:"//t.co/i/adsct?txn_id=l5jol&p_id=Twitter"},{show:Page.getCloud()==="Service Cloud"&&Page.isConfirmation(),imgurl:"//t.co/i/adsct?txn_id=l5jop&p_id=Twitter"},{show:Page.getCloud()==="Service Cloud"&&Page.hasLeadCaptureForm(),imgurl:"//t.co/i/adsct?txn_id=l5joo&p_id=Twitter"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us","ca"],details:[{show:Page.getName().indexOf(":us:homepage")>-1&&vp.getType()==="anonymous",locales:["us"],imgurl:"https://www.facebook.com/tr?id=295914173948517&cd[segment_eid]=6CD7O5VWYNC75LBYZFHNRD"},{show:Page.getName().indexOf(":us:homepage")>-1&&vp.getType()==="customer",locales:["us"],imgurl:"https://www.facebook.com/tr?id=295914173948517&cd[segment_eid]=LQCLMHYIHJDW7CS76JQMR5"},{locales:["us","ca"],show:Page.getCloud()==="Data Cloud"&&Page.isConfirmation(),imgurl:"https://www.facebook.com/tr?ev=6018854077861&cd[value]=0.01&cd[currency]=USD&noscript=1"},{show:Page.isConfirmation(),locales:["us"],imgurl:"https://www.facebook.com/tr?id=295914173948517&cd[segment_eid]=SGCA7JHZ6ZDNVMXFAHNQJ5"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.hasLeadCaptureForm()||Page.isConfirmation())&&Page.getCloud()==="Service Cloud"
},exclusive:true,mobile:true,locales:["us"],details:[{show:Page.hasLeadCaptureForm(),imgurl:"https://sp.analytics.yahoo.com/spp.pl?a=1000599773565&.yp=26193&js=no"},{show:Page.isConfirmation(),imgurl:"https://sp.analytics.yahoo.com/spp.pl?a=1000599773565&.yp=26194&js=no"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us","ca"],details:[{show:Page.getName().indexOf(":form:demo:crm-handbook")>-1,imgurl:"//pixel.quantserve.com/pixel/p-A-9KH5ScCZw9T.gif?labels=_fp.event.CRM+Handbook+Form"},{show:Page.getName().indexOf(":form:conf:demo-smb")>-1&&Page.isConfirmation(),imgurl:"//pixel.quantserve.com/pixel/p-A-9KH5ScCZw9T.gif?labels=_fp.event.Small+Business+Demo+Confirmation"},{show:Page.getName().indexOf(":form:demo:demo-small-business")>-1,imgurl:"//pixel.quantserve.com/pixel/p-A-9KH5ScCZw9T.gif?labels=_fp.event.Small+Business+Demo+Landing+Page"},{show:Page.getName().indexOf(":form:smb:ebook-salesforce-app")>-1,imgurl:"//pixel.quantserve.com/pixel/p-A-9KH5ScCZw9T.gif?labels=_fp.event.eBook+Form+Page"},{show:Page.getName().indexOf(":form:conf:smb:ebook-salesforce-app")>-1&&Page.isConfirmation(),imgurl:"//pixel.quantserve.com/pixel/p-A-9KH5ScCZw9T.gif?labels=_fp.event.eBook+Confirmation,_fp.pcat.INSERT+PRODUCT+CATEGORY"},{show:Page.getName().indexOf(":form:conf:demo-sales")>-1&&Page.isConfirmation(),imgurl:"https://ad.doubleclick.net/activity;src=4633026;type=invmedia;cat=xlectsjb;ord=1?"},{show:Page.getName().indexOf(":homepage")>-1,imgurl:"https://ad.doubleclick.net/activity;src=4633026;type=invmedia;cat=4tdv6zti;ord=1?"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us"],details:[{show:Page.isConfirmation(),imgurl:"//trc.taboola.com/salesforce-sfdc-sc/log/3/action?name=Taboola_conversion&item-url="+encodeURIComponent(location.href)}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us","ca"],details:[{show:Page.hasLeadCaptureForm()&&(Page.getName().indexOf(":form:demo:platform-lightning-connect")>-1||Page.getName().indexOf(":form:offer:platform-services-ebook")>-1||Page.getName().indexOf(":form:demo:platform-overview")>-1),imgurl:"//px.spiceworks.com/px/1msi"},{show:Page.isConfirmation()&&(Page.getName().indexOf(":form:conf:platform-lightning-connect")>-1||Page.getName().indexOf(":form:conf:platform-services-ebook")>-1||Page.getName().indexOf(":form:conf:platform-overview")>-1),imgurl:"//px.spiceworks.com/px/8wca"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return(Page.getName().indexOf(":form:marketingcloud:conf:social-ads-benchmark")>-1||Page.getName().indexOf(":form:marketingcloud:conf:active-audiences")>-1||Page.getName().indexOf(":form:marketingcloud:conf:gree-advertising")>-1||Page.getName().indexOf(":form:marketingcloud:conf:peak-games")>-1||Page.getName().indexOf(":form:marketingcloud:conf:performance-agency")>-1||Page.getName().indexOf(":form:marketingcloud:conf:unique-value-facebook")>-1||Page.getName().indexOf(":form:marketingcloud:conf:facebook-advertising-mobile-opportunity")>-1||Page.getName().indexOf(":form:marketingcloud:sc:conf:decode-facebook-auction")>-1||Page.getName().indexOf(":form:marketingcloud:sc:conf:omd-mcdonalds")>-1||Page.getName().indexOf(":form:marketingcloud:sc:conf:salesforce-linkedin")>-1||Page.getName().indexOf(":form:marketingcloud:sc:conf:luxury-auto-case-study")>-1||Page.getName().indexOf(":form:marketingcloud:sc:conf:sgn-creative-cookie-jam")>-1)
},exclusive:true,mobile:true,locales:["us"]},function(c){var a="//www.googleadservices.com/pagead/conversion/970504060/?label=4RHSCNXo31cQ_O7izgM&amp;guid=ON&amp;script=0";
var b="https://www.facebook.com/tr?ev=6020647137344&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1";
this.insertImage(a);
this.insertImage(b)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["fr","de","uk"],details:[{show:Page.isHome(),imgurl:"_fp.event.Homepage"},{show:(Page.hasLeadCaptureForm()&&Page.getCloud()==="Sales Cloud"&&Page.getName().indexOf(":form:contact:")>-1===false),imgurl:"_fp.event.SalesCloud+Forms"},{show:Page.getName().indexOf(":small-business-solutions")>-1===true,imgurl:"_fp.event.SMB+Homepage"},{show:(Page.isConfirmation()&&Page.getName().indexOf(":form:conf:contactme")>-1===false),imgurl:"_fp.event.Sales+Cloud+Conversion"},{show:(Page.hasLeadCaptureForm()&&Page.getName().indexOf(":form:contact:")>-1===true),imgurl:"_fp.event.Contact+Us"},{show:(Page.isConfirmation()&&Page.getName().indexOf(":form:conf:contactme")>-1===true),imgurl:"_fp.event.Contact+Confirmation,_fp.pcat.INSERT+PRODUCT+CATEGORY"},{show:Page.getCloud()=="Sales Cloud",imgurl:"_fp.event.SalesCloud+Product+Pages"}]},function(c){var b=this.details[this.current[0]];
var a="//pixel.quantserve.com/pixel/p-A-9KH5ScCZw9T.gif?labels="+b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getCloud()==="Custom Cloud"
},exclusive:true,mobile:true,locales:["us"]},function(c){var b=this.details[this.current[0]],a=this.protocol+"//spg.demandbase.com/ab7900eeb0c18f6b4b788c270384b4c7f832086d.gif";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us"],details:[{show:(Page.getName().indexOf(":form:conf:demo-sales")>-1||Page.getName().indexOf(":form:signup:conf:freetrial-conf-lb")>-1||Page.getName().indexOf(":form:sem:conf:sales_manage_sales")>-1),imgurl:"https://centertrk.com/p.ashx?o=1041&f=img&t=TRANSACTION_ID&r=REQUEST_SESSION_ID",imgurl2:"https://www.googleadservices.com/pagead/conversion/950955243/?label=EdZnCLi1nFoQ69m5xQM&amp;guid=ON&amp;script=0"}]},function(d){var b=this.details[this.current[0]];
var a=b.imgurl;
var c=b.imgurl2;
this.insertImage(a);
this.insertImage(c)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},exclusive:true,mobile:true,locales:["jp"]},function(b){var a="https://b91.yahoo.co.jp/pagead/conversion/1000195645/?value=0&amp;label=L8uvCKWYmVoQ8u7uxwM&amp;guid=ON&amp;script=0&amp;disvt=true";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},exclusive:true,mobile:true,locales:["jp"]},function(b){var a="//b90.yahoo.co.jp/c?yahoo_ydn_conv_io=PsHPaRoOLDUpUAvCQRQS&yahoo_ydn_conv_label=TDLE2JPF5UQ0PHPWAI4C31360&yahoo_ydn_conv_transaction_id=&yahoo_ydn_conv_amount=0&guid=ON";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("SFDC:us:dreamforce:DF15")>-1
},exclusive:true,mobile:true,locales:["us"],details:[{show:(Page.getName()==="SFDC:us:dreamforce:DF15"||Page.getName()==="SFDC:us:dreamforce:DF15:why-attend"||Page.getName()==="SFDC:us:dreamforce:DF15:agenda"||Page.getName()==="SFDC:us:dreamforce:DF15:keynotes"||Page.getName()==="SFDC:us:dreamforce:DF15:sessions"||Page.getName()==="SFDC:us:dreamforce:DF15:videos"||Page.getName()==="SFDC:us:dreamforce:DF15:giving-back"||Page.getName()==="SFDC:us:dreamforce:DF15:cloud-expos"||Page.getName()==="SFDC:us:dreamforce:DF15:training"||Page.getName()==="SFDC:us:dreamforce:DF15:help"||Page.getName()==="SFDC:us:dreamforce:DF15:dreamboat"||Page.getName()==="SFDC:us:dreamforce:DF15:register"),imgurl:"https://www.facebook.com/tr?id=853063601403560&amp;ev=PixelInitialized",imgurl2:"//googleads.g.doubleclick.net/pagead/viewthroughconversion/1006302291/?value=0&amp;guid=ON&amp;script=0",imgurl3:"https://d.adroll.com/ipixel/BJ2LEY7ICBALDJY44RXUPT/PVKJPLAT7JB25N36LOQYTU?name=059f45538dd90c7d",imgurl4:"https://www.facebook.com/tr?id=295914173948517&cd[segment_eid]=MDJOE6OFGVGCNBZ5F2Q6ZQ"}]},function(g){var b=this.details[this.current[0]];
var a=b.imgurl;
var f=b.imgurl2;
var d=b.imgurl3;
var c=b.imgurl4;
this.insertImage(a);
this.insertImage(f);
this.insertImage(d);
this.insertImage(c)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["uk"],details:[{show:(Page.getName()==="SFDC:uk:form:demo:demo-marketing"),imgurl:"//googleads.g.doubleclick.net/pagead/viewthroughconversion/1067824670/?value=0&amp;guid=ON&amp;script=0"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us"],details:[{show:(Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:fitness-first-case-study"||Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:essence-ocpm-case-study"||Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:atomic-212"||Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:active-audiences-email-data"),imgurl:"https://www.facebook.com/tr?ev=6020647137344&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["jp"]},function(b){var a="https://www.salesforce.com/jp/assets/images/jp_ydn_pixel.gif";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:conf:demo-service"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="https://secimg.vmmpxl.com/?bkt=35126";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:active-audiences-email-data"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="//www.googleadservices.com/pagead/conversion/970504060/?label=4RHSCNXo31cQ_O7izgM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["eu"],details:[{show:(Page.getName()==="SFDC:eu:form:signup:freetrial-sales-pe"||Page.getName()==="SFDC:eu:form:contact:contactme"||Page.getName()==="SFDC:eu:form:demo:demo-sales"||Page.getName()==="SFDC:eu:form:signup:freetrial-service"||Page.getName()==="SFDC:eu:form:demo:demo-service"),imgurl:"//googleads.g.doubleclick.net/pagead/viewthroughconversion/967701087/?value=0&amp;guid=ON&amp;script=0"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["eu"],details:[{show:(Page.getName()==="SFDC:eu:form:conf:contactme"||Page.getName()==="SFDC:eu:form:signup:conf:freetrial-conf-lb"||Page.getName()==="SFDC:eu:form:demo:conf:demo-sales"||Page.getName()==="SFDC:eu:form:signup:conf:freetrial-ee-service-lb"||Page.getName()==="SFDC:eu:form:demo:conf:demo-service"),imgurl:"//www.googleadservices.com/pagead/conversion/967701087/?label=zYItCPr32VoQ3-S3zQM&amp;guid=ON&amp;script=0"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["fr","de"],details:[{show:(Page.getName()==="SFDC:de:form:signup:conf:freetrial-ee-service-lb"||Page.getName()==="SFDC:de:form:conf:contactme"||Page.getName()==="SFDC:de:form:demo:conf:demo-service"||Page.getName()==="SFDC:de:form:signup:conf:freetrial-conf-lb"||Page.getName()==="SFDC:de:form:conf:testdrive"||Page.getName()==="SFDC:de:form:demo:conf:demo-sales"||Page.getName()==="SFDC:fr:form:signup:conf:freetrial-conf-lb"||Page.getName()==="SFDC:fr:form:conf:testdrive"||Page.getName()==="SFDC:fr:form:demo:conf:demo-sales"||Page.getName()==="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"||Page.getName()==="SFDC:fr:form:conf:contactme"||Page.getName()==="SFDC:fr:form:demo:conf:demo-service"),imgurl:"//www.googleadservices.com/pagead/conversion/981258464/?label=4oGbCI-85FoQ4KHz0wM&amp;guid=ON&amp;script=0"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["de"],details:[{show:(Page.getName()==="SFDC:de:form:signup:conf:freetrial-ee-service-lb"||Page.getName()==="SFDC:de:form:conf:contactme"||Page.getName()==="SFDC:de:form:demo:conf:demo-service"||Page.getName()==="SFDC:de:form:signup:conf:freetrial-conf-lb"||Page.getName()==="SFDC:de:form:conf:testdrive"||Page.getName()==="SFDC:de:form:demo:conf:demo-sales"),imgurl:"//www.googleadservices.com/pagead/conversion/984144807/?label=g_TqCJ3L81oQp7ej1QM&amp;guid=ON&amp;script=0"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:campaigns:success-services:leads"||Page.getName()==="SFDC:us:campaigns:success-services:opportunities"||Page.getName()==="SFDC:us:form:conf:opportunity-pipeline-5-steps"||Page.getName()==="SFDC:us:form:conf:lead-management-5-steps"
},exclusive:true,mobile:true,locales:["us"]},function(b){var a="//insight.adsrvr.org/track/evnt/?adv=4q1u6lp&ct=0:ephqxp77&fmt=3";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:conf:opportunity-pipeline-5-steps"||Page.getName()==="SFDC:us:form:conf:lead-management-5-steps"
},exclusive:true,mobile:true,locales:["us"]},function(){var a="https://ad.doubleclick.net/ddm/activity/src=4754632;type=retar0;cat=sales0;ord=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["uk"],details:[{show:(Page.getName()==="SFDC:uk:form:demo:crm-handbook"||Page.getName()==="SFDC:uk:form:conf:crm-handbook"),imgurl:"//googleads.g.doubleclick.net/pagead/viewthroughconversion/1067824670/?value=0&amp;guid=ON&amp;script=0"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us"],details:[{show:(Page.getName()==="SFDC:us:form:conf:sflive-lon15-session"),imgurl:"https://20666535p.rfihub.com/ca.gif?rb=8067&ca=20666535&"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl,d={ra:this.date.getTime()};
a+=this.toQueryString(d);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return true
},exclusive:true,mobile:true,locales:["us"],details:[{show:Page.getName().indexOf(":us:form:campaigns:start-2015:start-your-year")>-1,imgurl:"https://insight.adsrvr.org/track/evnt/?adv=xznvl0e&ct=0:utbvgi8f&fmt=3"},{show:Page.getName().indexOf(":us:form:conf:campaigns:thank-you")>-1,imgurl:"https://insight.adsrvr.org/track/conv/?adv=xznvl0e&ct=0:g381oy2u&fmt=3"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()
},mobile:true,exclusive:true},function(){var a=this.protocol+"//traffic.outbrain.com/network/trackpxl?advid=8932&action=view";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:uk:form:demo:conf:demo-smb"
},mobile:true,exclusive:true,locales:["uk"]},function(){var a="https://www.facebook.com/tr?ev=6005485237752&amp;cd[value]=0.00&amp;cd[currency]=EUR&amp;noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){var d="SFDC:us:form:marketingcloud:",c=Page.getName(),a=["conf:socialcom-benchmark","sc:conf:active-audiences","sc:conf:gree-advertising","sc:conf:active-audiences","sc:conf:peak-games","sc:conf:performance-agency","conf:unique-value-facebook","sc:conf:facebook-advertising-mobile-opportunity","sc:conf:omd-mcdonalds","sc:conf:sgn-creative-cookie-jam","sc:conf:salesforce-linkedin","sc:conf:decode-facebook-auction"];
for(var b=0;
b<a.length;
b++){if(c===d+a[b]){return true
}}return false
},mobile:true,exclusive:true,locales:["us"]},function(){var b="https://analytics.twitter.com/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0",a="//t.co/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0";
this.insertImage(b);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:jp:form:conf:multi-channel-marketing"||Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:digital-video-advertising-trends"
},mobile:true,exclusive:true,locales:["us","jp"]},function(){var a=["https://www.facebook.com/tr?ev=6020647137344&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1","//www.googleadservices.com/pagead/conversion/970504060/?label=4RHSCNXo31cQ_O7izgM&amp;guid=ON&amp;script=0","https://analytics.twitter.com/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","//t.co/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"];
for(var c=0;
c<a.length;
c++){var b=a[c];
this.insertImage(b)
}});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:advertising-benchmark-report"
},mobile:true,exclusive:true,locales:["us"]},function(){var a=["https://analytics.twitter.com/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","//t.co/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","https://www.facebook.com/tr?ev=6020647137344&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1","//www.googleadservices.com/pagead/conversion/970504060/?label=4RHSCNXo31cQ_O7izgM&amp;guid=ON&amp;script=0"];
for(var c=0;
c<a.length;
c++){var b=a[c];
this.insertImage(b)
}});
Page.PixelManager.newPixel({show:function(){return true
},mobile:true,exclusive:true,locales:["uk"],details:[{show:Page.getName().indexOf("SFDC:uk:homepage")>-1,imgurl:"//go.affec.tv/i/5575ca3d95cfa4000ce63d1d"},{show:Page.getName().indexOf("SFDC:uk:service-cloud:pricing")>-1,imgurl:"//go.affec.tv/i/5575ca749e1780000d68367c"},{show:Page.getName().indexOf("SFDC:uk:service-cloud:")>-1,imgurl:"//go.affec.tv/i/5575ca4d9e3d96000d620019"},{show:Page.getName().indexOf("SFDC:uk:form:sem:call-center-demo_optb1")>-1,imgurl:"//go.affec.tv/i/5575cb6395cfa4000ce63d1e"},{show:(Page.getCloud()==="Service Cloud"&&Page.isConfirmation()),imgurl:"//go.affec.tv/i/5575cb7e9e3d96000d62001a"}]},function(c){var b=this.details[this.current[0]];
var a=b.imgurl;
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){var d="SFDC:uk:form:",c=Page.getName(),a=["signup:freetrial-sales-pe","contact:contactme","demo:conf:demo-sales","sem:sales-performance","demo:conf:demo-smb","demo:conf:demo-sales","signup:testdrive","signup:conf:freetrial-conf-lb","conf:contactme","demo:conf:demo-sales","sem:conf:demo-salescloud","demo:conf:demo-smb","conf:testdrive","sem:call-center-demo_optb1","signup:freetrial-service","contact:contactme","demo:demo-service","conf:campaigns:demo-servicecloud","signup:conf:freetrial-ee-service-lb","conf:contactme","demo:conf:demo-service","contact:marketingcloud_contactme","conf:marketingcloud_contactme","demo:conf:demo-platform","signup:freetrial-platform","contact:contactme","demo:conf:demo-platform","signup:conf:freetrial-platform","conf:contactme","sales-performance:conf:sp-5-ways-improve-outbound-sales-performance-b","conf:campaigns:pdf-sales-quickpeek-ebook","sales-performance:conf:sp-5-steps-better-sales-performance","conf:make-customer-service-easy","conf:advantages-of-mobile-for-service","conf:customer-call-center","conf:five-ways-to-drive-revenue","conf:5-steps-to-communities-that-thrive","conf:service-quick-peek","conf:campaigns:pdf-service-15reasons-cs","conf:customer-service-process-bottom-line","conf:6-secrets-to-offering-customer-service","conf:enterprise-mobile-apps","conf:platform-devguide-peek-res","conf:platform-mobile-services-ebook","demo:integrated-platform","demo:integrated-sales","demo:integrated-service"];
for(var b=0;
b<a.length;
b++){if(c===d+a[b]){return true
}}return false
},mobile:true,exclusive:true,locales:["uk"]},function(){var a="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1067824670/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){var b=["SFDC:us:services-training:add-ons:accelerators","SFDC:us:events:details:accelerators-webinar","SFDC:us:events:details:accelerators-webinar-06-25-2015","SFDC:us:events:details:accelerators-webinar-07-02-2015","SFDC:us:form:conf:introducing-salesforce-accelerators"];
for(var a=0;
a<b.length;
a++){if(Page.getName()===b[a]){return true
}}return false
},mobile:true,exclusive:true,locales:["us"]},function(){var a="//insight.adsrvr.org/track/evnt/?adv=4q1u6lp&ct=0:wzgedk9n&fmt=3";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:us:form:marketingcloud:sc:conf:mediacom-westpac-case-study"
},mobile:true,exclusive:true,locales:["us"]},function(){var b=["https://www.facebook.com/tr?ev=6020647137344&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1","https://analytics.twitter.com/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","//t.co/i/adsct?txn_id=l5vvc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0","//www.googleadservices.com/pagead/conversion/970504060/?label=4RHSCNXo31cQ_O7izgM&amp;guid=ON&amp;script=0"];
for(var a=0;
a<b.length;
a++){this.insertImage(b[a])
}});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:uk:form:sem:call-center-demo_optb1"
},exclusive:true,mobile:true,locales:["uk"]},function(){var a="https://mpp2.vindicosuite.com/?nwk=1&y=2&t=i&tp=1&clid=5226&pixid=33016357&rnd=<timestamp>";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:uk:form:conf:campaigns:demo-servicecloud"
},exclusive:true,mobile:true,locales:["uk"]},function(){var a="https://mpp2.vindicosuite.com/conv/v4;m=1;t=20276;ts=timestamp_here";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"
},exclusive:true,mobile:true,locales:["fr"]},function(){var a="https://www.googleadservices.com/pagead/conversion/1051754287/?value=1.00&amp;currency_code=EUR&amp;label=msqwCOeA5gEQr_7B9QM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName().indexOf("form:conf:sflive-df15-prereg")>-1
},exclusive:true,mobile:true,locales:["ap","au","br","ca","cn","de","dk","fi","fr","fr-ca","in","jp","kr","mx","nl","no","se","tw","uk","us"]},function(){var a="https://www.facebook.com/tr?ev=6029314058759&cd[value]=0.01&cd[currency]=USD&noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()==="SFDC:de:form:demo:integrated-sales"||Page.getName()==="SFDC:de:form:demo:integrated-service"||Page.getName()==="SFDC:de:form:demo:integrated-platform"
},exclusive:true,locales:["de"]},function(){var a="//googleads.g.doubleclick.net/pagead/viewthroughconversion/990137594/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){var d="SFDC:fr:",c=Page.getName(),a=["form:signup:freetrial-sales-pe","form:contact:contactme","form:demo:demo-sales","form:sem:sales-performance","form:demo:demo-small-business","form:signup:testdrive","form:signup:conf:freetrial-conf-lb","form:conf:contactme","form:demo:conf:demo-sales","form:conf:campaigns:demo-salescloud","form:demo:conf:demo-smb","form:conf:testdrive","form:sem:call-center-demo_optb2","form:signup:freetrial-service","form:contact:contactme","form:demo:demo-service","form:conf:campaigns:demo-servicecloud","form:signup:conf:freetrial-ee-service-lb","form:conf:contactme","form:demo:conf:demo-service","form:demo:demo-marketing","form:contact:marketingcloud_contactme","form:demo:conf:demo-marketing","form:conf:marketingcloud_contactme","form:demo:demo-platform","form:signup:freetrial-platform","form:contact:contactme","form:demo:conf:demo-platform","form:signup:conf:freetrial-platform","form:conf:contactme","form:sales-performance:sp-5-ways-improve-outbound-sales-performance-b","form:campaigns:pdf-sales-quickpeek-ebook","form:pdf:data-driven-sales","form:pdf:salesforce1-road-warriors","form:pdf:sales-process-map-ebook","form:pdf:DF-announcements-shape-2015","form:demo:crm-handbook","form:pdf:simplifying-modern-sales-cycle","form:pdf:effortless-service","form:pdf:social-selling","form:pdf:mobile-marketing","form:sales-performance:conf:sp-5-ways-improve-outbound-sales-performance-b","form:conf:campaigns:pdf-sales-quickpeek-ebook","form:conf:data-driven-sales","form:conf:salesforce1-road-warriors","form:conf:sales-process-map-ebook","form:conf:DF-announcements-shape-2015","form:conf:crm-handbook","form:conf:simplifying-modern-sales-cycle","form:conf:effortless-service","form:conf:social-selling","form:conf:mobile-marketing","form:pdf:make-customer-service-easy","form:pdf:advantages-of-mobile-for-service","form:pdf:customer-call-center","form:pdf:five-ways-to-drive-revenue","form:pdf:5-steps-to-communities-that-thrive","form:pdf:service-quick-peek","form:pdf:customer-service-process-bottom-line","form:pdf:6-secrets-to-offering-customer-service","form:pdf:customer-service-best-practices","form:pdf:5-dreamforce-announcements-that-will-shape-service-in-2015","form:pdf:effortless-service","form:pdf:make-customer-service-easy","form:pdf:advantages-of-mobile-for-service","form:pdf:customer-call-center","form:pdf:five-ways-to-drive-revenue","form:conf:make-customer-service-easy","form:conf:advantages-of-mobile-for-service","form:conf:customer-call-center","form:conf:five-ways-to-drive-revenue","form:conf:5-steps-to-communities-that-thrive","form:conf:service-quick-peek","form:conf:customer-service-process-bottom-line","form:conf:6-secrets-to-offering-customer-service","form:conf:customer-service-best-practices","form:conf:5-dreamforce-announcements-that-will-shape-service-in-2015","form:conf:effortless-service","form:conf:make-customer-service-easy","form:conf:advantages-of-mobile-for-service","form:conf:customer-call-center","form:conf:five-ways-to-drive-revenue","form:pdf:enterprise-mobile-apps","form:offer:platform-devguide-peek-res","form:pdf:platform-hr-workforce","form:pdf:platform-employee-engagement","form:offer:Anatomy-MobileApp-eBook","form:pdf:platform-tech-trends","form:offer:platform-services-ebook","form:pdf:platform-dept-marketing","form:offer:platform-clickbook-offer","form:conf:enterprise-mobile-apps","form:conf:platform-devguide-peek-res","form:conf:platform-hr-workforce","form:conf:platform-employee-engagement","form:conf:Anatomy-MobileApp-eBook","form:conf:platform-tech-trends","form:conf:platform-services-ebook","form:conf:platform-dept-marketing","form:conf:platform-clickbook-offer","sales-cloud:overview","service-cloud:overview","desk:overview","analytics-cloud:overview","marketing-cloud:overview","pardot:overview","platform:overview","small-business-solutions","crm:what-is-crm"];
for(var b=0;
b<a.length;
b++){if(c===d+a[b]||Page.isHome()){return true
}}return false
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="//googleads.g.doubleclick.net/pagead/viewthroughconversion/984848299/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:uk:form:sem:call-center-demo_optb1"||Page.getName()
},mobile:true,exclusive:true,locales:["uk"]},function(){var a="http://mpp2.vindicosuite.com/?nwk=1&y=2&t=i&tp=1&clid=5226&pixid=33016357&rnd=<timestamp>";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:signup:freetrial-sales-pe"||Page.getName()=="SFDC:fr:form:contact:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-sales"||Page.getName()=="SFDC:fr:form:sem:sales-performance"||Page.getName()=="SFDC:fr:form:demo:conf:demo-smb"||Page.getName()=="SFDC:fr:form:signup:testdrive"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-conf-lb"||Page.getName()=="SFDC:fr:form:conf:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-sales"||Page.getName()=="SFDC:fr:form:conf:campaigns:demo-salescloud"||Page.getName()=="SFDC:fr:form:demo:conf:demo-smb"||Page.getName()=="SFDC:fr:form:conf:testdrive"||Page.getName()=="SFDC:fr:form:sem:call-center-demo_optb2"||Page.getName()=="SFDC:fr:form:signup:freetrial-service"||Page.getName()=="SFDC:fr:form:contact:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-service"||Page.getName()=="SFDC:fr:form:conf:campaigns:demo-servicecloud"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"||Page.getName()=="SFDC:fr:form:conf:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-service"||Page.getName()=="SFDC:fr:form:demo:conf:demo-marketing"||Page.getName()=="SFDC:fr:form:contact:marketingcloud_contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-marketing"||Page.getName()=="SFDC:fr:form:conf:marketingcloud_contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-platform"||Page.getName()=="SFDC:fr:form:signup:freetrial-platform"||Page.getName()=="SFDC:fr:form:contact:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-platform"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-platform"||Page.getName()=="SFDC:fr:form:conf:contactme"||Page.getName()=="SFDC:fr:form:sales-performance:conf:sp-5-ways-improve-outbound-sales-performance-b"||Page.getName()=="SFDC:fr:form:conf:campaigns:pdf-sales-quickpeek-ebook"||Page.getName()=="SFDC:fr:form:pdf:data-driven-sales"||Page.getName()=="SFDC:fr:form:conf:salesforce1-road-warriors"||Page.getName()=="SFDC:fr:form:conf:sales-process-map-ebook"||Page.getName()=="SFDC:fr:form:conf:DF-announcements-shape-2015"||Page.getName()=="SFDC:fr:form:conf:crm-handbook"||Page.getName()=="SFDC:fr:form:pdf:simplifying-modern-sales-cycle"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:pdf:social-selling"||Page.getName()=="SFDC:fr:form:conf:mobile-marketing"||Page.getName()=="SFDC:fr:form:sales-performance:conf:sp-5-ways-improve-outbound-sales-performance-b"||Page.getName()=="SFDC:fr:form:conf:campaigns:pdf-sales-quickpeek-ebook"||Page.getName()=="SFDC:fr:form:conf:data-driven-sales"||Page.getName()=="SFDC:fr:form:conf:salesforce1-road-warriors"||Page.getName()=="SFDC:fr:form:conf:sales-process-map-ebook"||Page.getName()=="SFDC:fr:form:conf:DF-announcements-shape-2015"||Page.getName()=="SFDC:fr:form:conf:crm-handbook"||Page.getName()=="SFDC:fr:form:conf:simplifying-modern-sales-cycle"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:conf:social-selling"||Page.getName()=="SFDC:fr:form:conf:mobile-marketing"||Page.getName()=="SFDC:fr:form:pdf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:pdf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:5-steps-to-communities-that-thrive"||Page.getName()=="SFDC:fr:form:pdf:service-quick-peek"||Page.getName()=="SFDC:fr:form:conf:customer-service-process-bottom-line"||Page.getName()=="SFDC:fr:form:pdf:6-secrets-to-offering-customer-service"||Page.getName()=="SFDC:fr:form:conf:customer-service-best-practices"||Page.getName()=="SFDC:fr:form:conf:5-dreamforce-announcements-that-will-shape-service-in-2015"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:pdf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:pdf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:conf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:5-steps-to-communities-that-thrive"||Page.getName()=="SFDC:fr:form:conf:service-quick-peek"||Page.getName()=="SFDC:fr:form:conf:customer-service-process-bottom-line"||Page.getName()=="SFDC:fr:form:conf:6-secrets-to-offering-customer-service"||Page.getName()=="SFDC:fr:form:conf:customer-service-best-practices"||Page.getName()=="SFDC:fr:form:conf:5-dreamforce-announcements-that-will-shape-service-in-2015"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:conf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:conf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:enterprise-mobile-apps"||Page.getName()=="SFDC:fr:form:conf:platform-devguide-peek-res"||Page.getName()=="SFDC:fr:form:conf:platform-hr-workforce"||Page.getName()=="SFDC:fr:form:conf:platform-employee-engagement"||Page.getName()=="SFDC:fr:form:conf:Anatomy-MobileApp-eBook"||Page.getName()=="SFDC:fr:form:conf:platform-tech-trends"||Page.getName()=="SFDC:fr:form:conf:platform-services-ebook"||Page.getName()=="SFDC:fr:form:pdf:platform-dept-marketing"||Page.getName()=="SFDC:fr:form:offer:platform-clickbook-offer"||Page.getName()=="SFDC:fr:form:conf:enterprise-mobile-apps"||Page.getName()=="SFDC:fr:form:conf:platform-devguide-peek-res"||Page.getName()=="SFDC:fr:form:conf:platform-hr-workforce"||Page.getName()=="SFDC:fr:form:conf:platform-employee-engagement"||Page.getName()=="SFDC:fr:form:conf:Anatomy-MobileApp-eBook"||Page.getName()=="SFDC:fr:form:conf:platform-tech-trends"||Page.getName()=="SFDC:fr:form:conf:platform-services-ebook"||Page.getName()=="SFDC:fr:form:conf:platform-dept-marketing"||Page.getName()=="SFDC:fr:form:conf:platform-clickbook-offer"||Page.getName()=="SFDC:fr:homepage"||Page.getName()=="SFDC:fr:sales-cloud:overview"||Page.getName()=="SFDC:fr:service-cloud:overview"||Page.getName()=="SFDC:fr:desk:overview"||Page.getName()=="SFDC:fr:analytics-cloud:overview"||Page.getName()=="SFDC:fr:marketing-cloud:overview"||Page.getName()=="SFDC:fr:pardot:overview"||Page.getName()=="SFDC:fr:platform:overview"||Page.getName()=="SFDC:fr:small-business-solutions"||Page.getName()=="SFDC:fr:crm:what-is-crm"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/984848299/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://www.googleadservices.com/pagead/conversion/1051754287/?value=1.00&amp;currency_code=EUR&amp;label=msqwCOeA5gEQr_7B9QM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://www.googleadservices.com/pagead/conversion/1051754287/?value=1.00&amp;currency_code=EUR&amp;label=msqwCOeA5gEQr_7B9QM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:uk:form:demo:integrated-platform"||Page.getName()=="SFDC:uk:form:demo:integrated-sales"||Page.getName()=="SFDC:uk:form:demo:integrated-service"
},mobile:true,exclusive:true,locales:["uk"]},function(){var a="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/1067824670/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:de:form:demo:integrated-sales"||Page.getName()=="SFDC:de:form:demo:integrated-service"||Page.getName()=="SFDC:de:form:demo:integrated-platform"
},mobile:true,exclusive:true,locales:["de"]},function(){var a="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/990137594/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:events:sflive-df15-prereg"||Page.getName()=="SFDC:us:form:event:sflive-df15-sales"||Page.getName()=="SFDC:us:form:event:sflive-df15-innov"||Page.getName()=="SFDC:us:form:event:sflive-df15-keynotes"||Page.getName()=="SFDC:us:form:event:sflive-df15-smb"
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?id=1424193781160198&ev=PageView&noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:service-cloud:overview"||Page.getName()=="SFDC:fr:form:sem:call-center-demo_optb2"||Page.getName()=="SFDC:fr:form:signup:freetrial-service"||Page.getName()=="SFDC:fr:form:contact:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-service"||Page.getName()=="SFDC:fr:form:demo:integrated-service"||Page.getName()=="SFDC:fr:form:pdf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:pdf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:5-steps-to-communities-that-thrive"||Page.getName()=="SFDC:fr:form:pdf:service-quick-peek"||Page.getName()=="SFDC:fr:form:conf:customer-service-process-bottom-line"||Page.getName()=="SFDC:fr:form:pdf:6-secrets-to-offering-customer-service"||Page.getName()=="SFDC:fr:form:conf:customer-service-best-practices"||Page.getName()=="SFDC:fr:form:conf:5-dreamforce-announcements-that-will-shape-service-in-2015"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:pdf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:pdf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"
},mobile:true,exclusive:true,locales:["fr"]},function(){this.insertImage("https://www.facebook.com/tr?id=276747225857620&cd[segment_eid]=WSUDJBWDDNE7HPZZLGOD2S");
this.insertImage("//d.adroll.com/ipixel/E3YMPVV4ENCI3DBP3ALT2Q/XTD3OHAYLBHEVP3PIZ6DNM")
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:homepage"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="https://www.facebook.com/tr?id=276747225857620&cd[segment_eid]=EDETZBQFARAX7FZRGEZQAB";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:signup:conf:freetrial-conf-lb"||Page.getName()=="SFDC:fr:form:conf:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-sales"||Page.getName()=="SFDC:fr:form:conf:campaigns:demo-salescloud"||Page.getName()=="SFDC:fr:form:demo:conf:demo-smb"||Page.getName()=="SFDC:fr:form:conf:testdrive"||Page.getName()=="SFDC:fr:form:conf:campaigns:demo-servicecloud"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"||Page.getName()=="SFDC:fr:form:demo:conf:demo-service"||Page.getName()=="SFDC:fr:form:demo:conf:demo-marketing"||Page.getName()=="SFDC:fr:form:conf:marketingcloud_contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-platform"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-platform"||Page.getName()=="SFDC:fr:form:sales-performance:conf:sp-5-ways-improve-outbound-sales-performance-b"||Page.getName()=="SFDC:fr:form:conf:campaigns:pdf-sales-quickpeek-ebook"||Page.getName()=="SFDC:fr:form:conf:data-driven-sales"||Page.getName()=="SFDC:fr:form:conf:salesforce1-road-warriors"||Page.getName()=="SFDC:fr:form:conf:sales-process-map-ebook"||Page.getName()=="SFDC:fr:form:conf:DF-announcements-shape-2015"||Page.getName()=="SFDC:fr:form:conf:crm-handbook"||Page.getName()=="SFDC:fr:form:conf:simplifying-modern-sales-cycle"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:conf:social-selling"||Page.getName()=="SFDC:fr:form:conf:mobile-marketing"||Page.getName()=="SFDC:fr:form:conf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:conf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:5-steps-to-communities-that-thrive"||Page.getName()=="SFDC:fr:form:conf:service-quick-peek"||Page.getName()=="SFDC:fr:form:conf:customer-service-process-bottom-line"||Page.getName()=="SFDC:fr:form:conf:6-secrets-to-offering-customer-service"||Page.getName()=="SFDC:fr:form:conf:customer-service-best-practices"||Page.getName()=="SFDC:fr:form:conf:5-dreamforce-announcements-that-will-shape-service-in-2015"||Page.getName()=="SFDC:fr:form:conf:effortless-service"||Page.getName()=="SFDC:fr:form:conf:make-customer-service-easy"||Page.getName()=="SFDC:fr:form:conf:advantages-of-mobile-for-service"||Page.getName()=="SFDC:fr:form:conf:customer-call-center"||Page.getName()=="SFDC:fr:form:conf:five-ways-to-drive-revenue"||Page.getName()=="SFDC:fr:form:conf:enterprise-mobile-apps"||Page.getName()=="SFDC:fr:form:conf:platform-devguide-peek-res"||Page.getName()=="SFDC:fr:form:conf:platform-hr-workforce"||Page.getName()=="SFDC:fr:form:conf:platform-employee-engagement"||Page.getName()=="SFDC:fr:form:conf:Anatomy-MobileApp-eBook"||Page.getName()=="SFDC:fr:form:conf:platform-tech-trends"||Page.getName()=="SFDC:fr:form:conf:platform-services-ebook"||Page.getName()=="SFDC:fr:form:conf:platform-dept-marketing"||Page.getName()=="SFDC:fr:form:conf:platform-clickbook-offer"
},mobile:true,exclusive:true,locales:["fr"]},function(){this.insertImage("https://www.facebook.com/tr?id=276747225857620&cd[segment_eid]=KO7PG56JC5DZTBMRCBL7WF");
this.insertImage("//d.adroll.com/ipixel/E3YMPVV4ENCI3DBP3ALT2Q/XTD3OHAYLBHEVP3PIZ6DNM")
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:homepage"
},mobile:true,exclusive:true,locales:["fr"]},function(){this.insertImage("https://www.facebook.com/tr?id=276747225857620&cd[segment_eid]=Z4JVNUQLZJECJLVCRJZZFQ");
this.insertImage("//d.adroll.com/ipixel/E3YMPVV4ENCI3DBP3ALT2Q/XTD3OHAYLBHEVP3PIZ6DNM")
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:demo:integrated-platform"||Page.getName()=="SFDC:fr:form:demo:integrated-service"||Page.getName()=="SFDC:fr:form:demo:integrated-sales"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://www.googleadservices.com/pagead/conversion/1051754287/%3Fvalue=1.00&amp%3Bcurrency_code=EUR&amp%3Blabel=msqwCOeA5gEQr_7B9QM&amp%3Bguid=ON&amp%3Bscript=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:demo:integrated-sales"||Page.getName()=="SFDC:fr:form:demo:integrated-service"||Page.getName()=="SFDC:fr:form:demo:integrated-platform"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://www.googleadservices.com/pagead/conversion/1051754287/?value=1.00&amp;currency_code=EUR&amp;label=msqwCOeA5gEQr_7B9QM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:demo:integrated-sales"||Page.getName()=="SFDC:fr:form:demo:integrated-service"||Page.getName()=="SFDC:fr:form:demo:integrated-platform"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://www.googleadservices.com/pagead/conversion/984848299/?value=1.00&amp;currency_code=EUR&amp;label=rIDXCIXP8QYQq6_O1QM&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:demo:integrated-sales"||Page.getName()=="SFDC:fr:form:demo:integrated-service"||Page.getName()=="SFDC:fr:form:demo:integrated-platform"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/984848299/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:uk:form:conf:contactme"||Page.getName()=="SFDC:uk:form:signup:conf:signup-conf"||Page.getName()=="SFDC:uk:form:demo:conf:demo-sales"||Page.getName()=="SFDC:uk:form:demo:conf:demo-service"||Page.getName()=="SFDC:uk:form:signup:conf:freetrial-ee-service-lb"||Page.getName()=="SFDC:uk:form:conf:testdrive"
},mobile:true,exclusive:true,locales:["uk"]},function(){var a="http://bat.bing.com/action/0?ti=4073959&Ver=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:de:form:signup:conf:freetrial-conf-lb"||Page.getName()=="SFDC:de:form:conf:testdrive"||Page.getName()=="SFDC:de:form:demo:conf:demo-sales"||Page.getName()=="SFDC:de:form:conf:contactme"||Page.getName()=="SFDC:de:form:demo:conf:demo-service"||Page.getName()=="SFDC:de:form:signup:conf:freetrial-ee-service-lb"
},mobile:true,exclusive:true,locales:["de"]},function(){var a="http://bat.bing.com/action/0?ti=4073960&Ver=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:fr:form:demo:conf:demo-sales"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-conf-lb"||Page.getName()=="SFDC:fr:form:conf:contactme"||Page.getName()=="SFDC:fr:form:demo:conf:demo-service"||Page.getName()=="SFDC:fr:form:signup:conf:freetrial-ee-service-lb"||Page.getName()=="SFDC:fr:form:conf:testdrive"
},mobile:true,exclusive:true,locales:["fr"]},function(){var a="http://bat.bing.com/action/0?ti=4073962&Ver=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:nl:form:conf:contactme"||Page.getName()=="SFDC:nl:form:demo:conf:demo-sales"||Page.getName()=="SFDC:nl:form:signup:conf:freetrial-conf-lb"||Page.getName()=="SFDC:nl:form:demo:conf:demo-service"||Page.getName()=="SFDC:nl:form:signup:conf:freetrial-ee-service-lb"||Page.getName()=="SFDC:nl:form:conf:testdrive"
},mobile:true,exclusive:true,locales:["nl"]},function(){var a="http://bat.bing.com/action/0?ti=4073963&Ver=2";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:uk:form:conf:advantages-of-mobile-sales"||Page.getName()=="SFDC:uk:form:pdf:9-principles-killer-dashboards"
},mobile:true,exclusive:true,locales:["nl"]},function(){var a="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/1067824670/?value=0&amp;guid=ON&amp;script=0";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:function(){return Page.isConfirmation()||Page.isCareersConfirmation()
},exclusive:false,details:[{locales:["de","es","eu","fr","it","nl","se","uk","us"],id:"1069216573",lang:"en",country:"GB"},{show:function(){return Page.isConfirmation()
},locales:["de","es","eu","fr","it","nl","se","uk"],id:"1051754287",lang:"en",label:"msqwCOeA5gEQr_7B9QM",format:"3",value:"1"},{id:"1067824670",locales:["uk"]}]},function(){this.getGoogle()
});
Page.PixelManager.newPixel({show:function(){return Page.getName()=="SFDC:us:form:conf:sflive-df15-prereg"
},mobile:true,exclusive:true,locales:["us","ca"]},function(){var a="https://www.facebook.com/tr?ev=6029314058759&cd[value]=0.01&cd[currency]=USD&noscript=1";
this.insertImage(a)
});
Page.PixelManager.newPixel({show:true,mobile:true,exclusive:true,locales:["us"],details:[{show:function(){if(Page.getName().indexOf(":blog:company:datacom")>-1){return true
}},id:"981579177",value:"0",format:"2"},{show:function(){if(Page.getName().indexOf("blog")>-1){return true
}},id:"1071772740",value:"0",format:"2"}]},function(){var b=this.details[this.current[0]],a=this.protocol+"//googleads.g.doubleclick.net/pagead/viewthroughconversion/"+b.id+"/?",c="",d={value:b.value||"1",guid:"ON",script:"0"};
a+=this.toQueryString(d);
this.insertImage(a)
});
Page.PixelManager.newPixel({show:true,mobile:true},function(b){var a="https://www.facebook.com/tr?id=1424193781160198&amp;ev=PixelInitialized&",c={visitorType:vp.getType()};
a+=this.toQueryString(c);
this.insertImage(a)
});
try{jQuery(function(){Page.PixelManager.configure(jQuery)
})
}catch(ex){};