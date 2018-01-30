var ie=(document.all)?true:false;var ns4=(document.layers)?true:false;var ns6=(document.getElementById)?true:false;var IB=new Object;var posX=0;var posY=0;var xOffset=20;var yOffset=20;var dayarray=new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");var montharray=new Array("Janv","Fev","Mars","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Dec");function AffBulle(titre,texte,w){contenu="<table width='"+w+"' cellspacing='0' cellpadding='"+IB.NbPixel+"'><tr style='background: "+IB.ColContour+";'><td>&nbsp;<b>"+titre+"</b></td></tr><tr style='background: "+IB.ColContour+";'><td valign='top'><table width='100%' style='background: "+IB.ColFond+";' cellpadding='3' cellspacing='0'><tr><td>"+texte+"</td></tr></table></td></tr></table>&nbsp;";var finalPosX=posX-xOffset;if(finalPosX<0)finalPosX=0;if(ns4){document.layers["infobulle"].document.write(contenu);document.layers["infobulle"].document.close();document.layers["infobulle"].top=posY+yOffset+"px";document.layers["infobulle"].left=finalPosX+"px";document.layers["infobulle"].visibility="show";}
if(ie){infobulle.innerHTML=contenu;document.all["infobulle"].style.top=posY+yOffset+"px";document.all["infobulle"].style.left=finalPosX+"px";document.all["infobulle"].style.visibility="visible";document.all["infobulle"].style.zIndex=500;}else if(ns6){document.getElementById("infobulle").innerHTML=contenu;document.getElementById("infobulle").style.top=posY+yOffset+"px";document.getElementById("infobulle").style.left=finalPosX+"px";document.getElementById("infobulle").style.visibility="visible";document.getElementById("infobulle").style.zIndex=500;}}
function getMousePos(e){if(ie){posX=event.x+document.documentElement.scrollLeft;posY=event.y+document.documentElement.scrollTop;}else{posX=e.pageX;posY=e.pageY;}}
function HideBulle(){if(ns4){document.layers["infobulle"].visibility="hide";}
if(ie){document.all["infobulle"].style.visibility="hidden";}
else if(ns6){document.getElementById("infobulle").style.visibility="hidden";}}
function InitBulle(ColFond,ColContour,NbPixel){IB.ColFond=ColFond;IB.ColContour=ColContour;IB.NbPixel=NbPixel;if(ns4){document.write("<layer name='infobulle' top='0' left='0' visibility='hide'></layer>");window.captureEvents(Event.MOUSEMOVE);window.onMouseMove=getMousePos;}
if(ie){document.write("<div id='infobulle' style='position:absolute;top:0;left:0;visibility:hidden'></div>");document.onmousemove=getMousePos;}
else if(ns6){document.write("<div id='infobulle' style='position:absolute;top:0;left:0;visibility:hidden;'></div>");document.onmousemove=getMousePos;}}
function getthedate(){var mydate=new Date()
var year=mydate.getYear()
if(year<1000){year+=1900}
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if(daym<10){daym="0"+daym}
var hours=mydate.getHours()
var minutes=mydate.getMinutes()
var seconds=mydate.getSeconds()
var dn="AM"
if(hours>=12){dn="PM"}
if(hours>23){hours=0}
if(hours<=9){hours="0"+hours}
if(minutes<=9){minutes="0"+minutes}
if(seconds<=9){seconds="0"+seconds}
var cdate=hours+":"+minutes+":"+seconds+" | "+dayarray[day]+" "+daym+" "+montharray[month]+" "+year;if(document.all){document.all.clock.innerHTML=cdate}else if(document.getElementById){document.getElementById("clock").innerHTML=cdate}else{document.write(cdate)}}
if(!document.all&&!document.getElementById){getthedate()}
function showdate(){if(document.all||document.getElementById){setInterval("getthedate()",1000)}}
function tabberObj(argsObj)
{var arg;this.div=null;this.classMain="tabber";this.classMainLive="tabberlive";this.classTab="tabbertab";this.classTabDefault="tabbertabdefault";this.classNav="tabbernav";this.classTabHide="tabbertabhide";this.classNavActive="tabberactive";this.titleElements=['h2','h3','h4','h5','h6'];this.titleElementsStripHTML=true;this.removeTitle=true;this.addLinkId=false;this.linkIdFormat='<tabberid>nav<tabnumberone>';for(arg in argsObj){this[arg]=argsObj[arg];}
this.REclassMain=new RegExp('\\b'+this.classMain+'\\b','gi');this.REclassMainLive=new RegExp('\\b'+this.classMainLive+'\\b','gi');this.REclassTab=new RegExp('\\b'+this.classTab+'\\b','gi');this.REclassTabDefault=new RegExp('\\b'+this.classTabDefault+'\\b','gi');this.REclassTabHide=new RegExp('\\b'+this.classTabHide+'\\b','gi');this.tabs=new Array();if(this.div){this.init(this.div);this.div=null;}}
tabberObj.prototype.init=function(e)
{var
childNodes,i,i2,t,defaultTab=0,DOM_ul,DOM_li,DOM_a,aId,headingElement;if(!document.getElementsByTagName){return false;}
if(e.id){this.id=e.id;}
this.tabs.length=0;childNodes=e.childNodes;for(i=0;i<childNodes.length;i++){if(childNodes[i].className&&childNodes[i].className.match(this.REclassTab)){t=new Object();t.div=childNodes[i];this.tabs[this.tabs.length]=t;if(childNodes[i].className.match(this.REclassTabDefault)){defaultTab=this.tabs.length-1;}}}
DOM_ul=document.createElement("ul");DOM_ul.className=this.classNav;for(i=0;i<this.tabs.length;i++){t=this.tabs[i];t.headingText=t.div.title;if(this.removeTitle){t.div.title='';}
if(!t.headingText){for(i2=0;i2<this.titleElements.length;i2++){headingElement=t.div.getElementsByTagName(this.titleElements[i2])[0];if(headingElement){t.headingText=headingElement.innerHTML;if(this.titleElementsStripHTML){t.headingText.replace(/<br>/gi," ");t.headingText=t.headingText.replace(/<[^>]+>/g,"");}
break;}}}
if(!t.headingText){t.headingText=i+1;}
DOM_li=document.createElement("li");t.li=DOM_li;DOM_a=document.createElement("a");DOM_a.appendChild(document.createTextNode(t.headingText));DOM_a.href="javascript:void(null);";DOM_a.title=t.headingText;DOM_a.onclick=this.navClick;DOM_a.tabber=this;DOM_a.tabberIndex=i;if(this.addLinkId&&this.linkIdFormat){aId=this.linkIdFormat;aId=aId.replace(/<tabberid>/gi,this.id);aId=aId.replace(/<tabnumberzero>/gi,i);aId=aId.replace(/<tabnumberone>/gi,i+1);aId=aId.replace(/<tabtitle>/gi,t.headingText.replace(/[^a-zA-Z0-9\-]/gi,''));DOM_a.id=aId;}
DOM_li.appendChild(DOM_a);DOM_ul.appendChild(DOM_li);}
e.insertBefore(DOM_ul,e.firstChild);e.className=e.className.replace(this.REclassMain,this.classMainLive);this.tabShow(defaultTab);if(typeof this.onLoad=='function'){this.onLoad({tabber:this});}
return this;};tabberObj.prototype.navClick=function(event)
{var
rVal,a,self,tabberIndex,onClickArgs;a=this;if(!a.tabber){return false;}
self=a.tabber;tabberIndex=a.tabberIndex;a.blur();if(typeof self.onClick=='function'){onClickArgs={'tabber':self,'index':tabberIndex,'event':event};if(!event){onClickArgs.event=window.event;}
rVal=self.onClick(onClickArgs);if(rVal===false){return false;}}
self.tabShow(tabberIndex);return false;};tabberObj.prototype.tabHideAll=function()
{var i;for(i=0;i<this.tabs.length;i++){this.tabHide(i);}};tabberObj.prototype.tabHide=function(tabberIndex)
{var div;if(!this.tabs[tabberIndex]){return false;}
div=this.tabs[tabberIndex].div;if(!div.className.match(this.REclassTabHide)){div.className+=' '+this.classTabHide;}
this.navClearActive(tabberIndex);return this;};tabberObj.prototype.tabShow=function(tabberIndex)
{var div;if(!this.tabs[tabberIndex]){return false;}
this.tabHideAll();div=this.tabs[tabberIndex].div;div.className=div.className.replace(this.REclassTabHide,'');this.navSetActive(tabberIndex);if(typeof this.onTabDisplay=='function'){this.onTabDisplay({'tabber':this,'index':tabberIndex});}
return this;};tabberObj.prototype.navSetActive=function(tabberIndex)
{this.tabs[tabberIndex].li.className=this.classNavActive;return this;};tabberObj.prototype.navClearActive=function(tabberIndex)
{this.tabs[tabberIndex].li.className='';return this;};function tabberAutomatic(tabberArgs)
{var
tempObj,divs,i;if(!tabberArgs){tabberArgs={};}
tempObj=new tabberObj(tabberArgs);divs=document.getElementsByTagName("div");for(i=0;i<divs.length;i++){if(divs[i].className&&divs[i].className.match(tempObj.REclassMain)){tabberArgs.div=divs[i];divs[i].tabber=new tabberObj(tabberArgs);}}
return this;}
function tabberAutomaticOnLoad(tabberArgs)
{var oldOnLoad;if(!tabberArgs){tabberArgs={};}
oldOnLoad=window.onload;if(typeof window.onload!='function'){window.onload=function(){tabberAutomatic(tabberArgs);};}else{window.onload=function(){oldOnLoad();tabberAutomatic(tabberArgs);};}}
if(typeof tabberOptions=='undefined'){tabberAutomaticOnLoad();}else{if(!tabberOptions['manualStartup']){tabberAutomaticOnLoad(tabberOptions);}}