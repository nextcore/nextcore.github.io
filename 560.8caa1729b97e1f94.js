(self.webpackChunkmagic=self.webpackChunkmagic||[]).push([[560],{7832:(b,y,i)=>{"use strict";i.d(y,{K:()=>l});var e=i(6895),d=i(2278),g=i(4006),m=i(1103),h=i(4650);let l=(()=>{class r{}return r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[e.ez,d.q,g.u5,g.UX,m.k]}),r})()},316:(b,y,i)=>{"use strict";i.d(y,{E:()=>I});var e=i(4650),d=i(4006),g=i(8372),m=i(1884),h=i(6895),l=i(7392),r=i(4859),x=i(9549),p=i(4144),s=i(6709),t=i(266),n=i(4385),o=i(3238);function c(_,C){if(1&_){const a=e.EpF();e.TgZ(0,"mat-checkbox",10),e.NdJ("ngModelChange",function(u){e.CHM(a);const S=e.oxw();return e.KtG(S.checked=u)})("change",function(){e.CHM(a);const u=e.oxw();return e.KtG(u.filter())}),e._uU(1),e.qZA()}if(2&_){const a=e.oxw();e.Q6J("ngModel",a.checked),e.xp6(1),e.hij(" ",a.checkBoxText," ")}}function v(_,C){if(1&_&&(e.TgZ(0,"mat-option",15)(1,"span",17),e._uU(2),e.qZA()()),2&_){const a=C.$implicit;e.Q6J("value",a),e.xp6(2),e.Oqu(a)}}function D(_,C){if(1&_){const a=e.EpF();e.TgZ(0,"mat-form-field",11)(1,"span",12)(2,"mat-icon"),e._uU(3,"filter_list"),e.qZA(),e.TgZ(4,"span",13),e._uU(5,"|"),e.qZA()(),e.TgZ(6,"mat-select",14),e.NdJ("ngModelChange",function(u){e.CHM(a);const S=e.oxw();return e.KtG(S.type=u)})("selectionChange",function(){e.CHM(a);const u=e.oxw();return u.filter(),e.KtG(u.typeChanged())}),e.TgZ(7,"mat-option",15),e._uU(8," Remove filter "),e.qZA(),e.YNc(9,v,3,2,"mat-option",16),e.qZA()()}if(2&_){const a=e.oxw();e.xp6(6),e.Q6J("ngModel",a.type),e.xp6(1),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",a.types)}}function M(_,C){if(1&_){const a=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(a);const u=e.oxw();return e.KtG(u.removeSearchTerm())}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}function O(_,C){if(1&_&&(e.TgZ(0,"mat-icon"),e._uU(1),e.qZA()),2&_){const a=e.oxw(2);e.xp6(1),e.Oqu(a.buttonIcon)}}function T(_,C){if(1&_){const a=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(a);const u=e.oxw();return e.KtG(u.buttonClicked())}),e.YNc(1,O,2,1,"mat-icon",20),e._uU(2),e.qZA()}if(2&_){const a=e.oxw();e.Q6J("disabled",a.buttonDisabled),e.xp6(1),e.Q6J("ngIf",a.buttonIcon),e.xp6(1),e.hij(" ",a.buttonText," ")}}function E(_,C){if(1&_){const a=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(a);const u=e.oxw();return e.KtG(u.button2Clicked())}),e._uU(1),e.qZA()}if(2&_){const a=e.oxw();e.Q6J("disabled",a.button2Disabled),e.xp6(1),e.hij(" ",a.button2Text," ")}}let I=(()=>{class _{constructor(){this.filterList=new e.vpe,this.buttonClick=new e.vpe,this.button2Click=new e.vpe,this.typeChange=new e.vpe,this.checkBoxText=null,this.buttonText=null,this.button2Text=null,this.buttonIcon=null,this.buttonDisabled=!1,this.button2Disabled=!1,this.checked=!1}ngOnInit(){this.filterControl=new d.NI(""),this.filterControl.valueChanges.pipe((0,g.b)(400),(0,m.x)()).subscribe(()=>{this.filter()})}removeSearchTerm(){this.filterControl.setValue("")}filter(){const a={};this.filterControl.value?.length>0&&(a.searchKey=this.filterControl.value),this.type&&(a.type=this.type),this.checkBoxText&&(a.checked=this.checked),this.filterList.emit(a)}typeChanged(){this.typeChange?.emit(this.type)}buttonClicked(){this.buttonClick.emit()}button2Clicked(){this.button2Click.emit()}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-searchbox"]],inputs:{types:"types",type:"type",checkBoxText:"checkBoxText",buttonText:"buttonText",button2Text:"button2Text",buttonIcon:"buttonIcon",buttonDisabled:"buttonDisabled",button2Disabled:"button2Disabled"},outputs:{filterList:"filterList",buttonClick:"buttonClick",button2Click:"button2Click",typeChange:"typeChange"},decls:14,vars:6,consts:[[1,"d-flex","justify-content-md-between","align-items-md-center","align-items-end","flex-md-row","w-100"],["color","primary","class","mt-md-0 mt-1 me-3",3,"ngModel","ngModelChange","change",4,"ngIf"],["class","w-100 standalone-field me-3",4,"ngIf"],[1,"w-100","standalone-field"],["matPrefix","","matTooltip","Search for item(s)",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],[1,"text-muted"],["matInput","","placeholder","Search ...","autocomplete","off",3,"formControl"],["input",""],["mat-icon-button","","matSuffix","",3,"click",4,"ngIf"],["mat-flat-button","","color","primary","class","ms-3",3,"disabled","click",4,"ngIf"],["color","primary",1,"mt-md-0","mt-1","me-3",3,"ngModel","ngModelChange","change"],[1,"w-100","standalone-field","me-3"],["matPrefix","","matTooltip","Filter on type",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],[1,"text-muted","ms-1"],["placeholder","Type ...",3,"ngModel","ngModelChange","selectionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"d-block","name-line"],["mat-icon-button","","matSuffix","",3,"click"],["mat-flat-button","","color","primary",1,"ms-3",3,"disabled","click"],[4,"ngIf"]],template:function(a,f){if(1&a&&(e.TgZ(0,"div",0),e.YNc(1,c,2,2,"mat-checkbox",1),e.YNc(2,D,10,3,"mat-form-field",2),e.TgZ(3,"mat-form-field",3)(4,"span",4)(5,"mat-icon"),e._uU(6,"search"),e.qZA(),e.TgZ(7,"span",5),e._uU(8,"|"),e.qZA()(),e._UZ(9,"input",6,7),e.YNc(11,M,3,0,"button",8),e.qZA(),e.YNc(12,T,3,3,"button",9),e.YNc(13,E,2,2,"button",9),e.qZA()),2&a){const u=e.MAs(10);e.xp6(1),e.Q6J("ngIf",f.checkBoxText),e.xp6(1),e.Q6J("ngIf",(null==f.types?null:f.types.length)>0),e.xp6(7),e.Q6J("formControl",f.filterControl),e.xp6(2),e.Q6J("ngIf",""!==u.value),e.xp6(1),e.Q6J("ngIf",f.buttonText||f.buttonIcon),e.xp6(1),e.Q6J("ngIf",f.button2Text)}},dependencies:[h.sg,h.O5,l.Hw,r.lW,x.KE,x.qo,x.R9,p.Nt,s.oG,t.gM,n.gD,o.ey,d.Fj,d.JJ,d.On,d.oH],encapsulation:2}),_})()},1565:(b,y,i)=>{"use strict";i.d(y,{Q:()=>g});var e=i(4650),d=i(9845);let g=(()=>{class m{constructor(l){this.httpService=l}list(l=null){let r="";return null!==l&&(r+="?limit="+l.limit,r+="&offset="+l.offset,l.filter&&""!==l.filter&&(r+="&filter="+encodeURIComponent(l.filter))),this.httpService.get("/magic/system/cache/list"+r)}count(l=null){let r="";return null!==l&&""!==l&&(r+="?filter="+encodeURIComponent(l)),this.httpService.get("/magic/system/cache/count"+r)}delete(l){return this.httpService.delete("/magic/system/cache/delete?id="+encodeURIComponent(l))}clear(l=null){let r="";return null!==l&&""!==l&&(r+="?filter="+encodeURIComponent(l)),this.httpService.delete("/magic/system/cache/empty"+r)}}return m.\u0275fac=function(l){return new(l||m)(e.LFG(d.O))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},9214:(b,y,i)=>{"use strict";i.d(y,{I:()=>x});var e=i(4327),g=i(9751),m=i(4650),h=i(9845),l=i(3885),r=i(1565);let x=(()=>{class p{constructor(t,n,o){this.httpService=t,this.generalService=n,this.cacheService=o}listFiles(t,n=null){let o="?folder="+encodeURIComponent(t);return n&&(o+="&filter="+encodeURIComponent(n)),this.httpService.get("/magic/system/file-system/list-files"+o)}listFilesRecursively(t,n){let o="?folder="+encodeURIComponent(t);return this.httpService.get("/magic/system/file-system/list-files-recursively"+o+"&sys="+n)}listFolders(t){return this.httpService.get("/magic/system/file-system/list-folders?folder="+encodeURIComponent(t))}listFoldersRecursively(t,n){return this.httpService.get("/magic/system/file-system/list-folders-recursively?folder="+encodeURIComponent(t)+"&sys="+n)}loadFile(t){return this.httpService.get("/magic/system/file-system/file?file="+encodeURIComponent(t),{responseType:"text"})}saveFile(t,n){const o=t.substring(0,t.lastIndexOf("/")+1),c=new FormData,v=new Blob([n],{type:"text/plain"});return c.append("file",v,t.substring(t.lastIndexOf("/")+1)),this.httpService.put("/magic/system/file-system/file?folder="+encodeURIComponent(o),c)}rename(t,n){return this.httpService.post("/magic/system/file-system/rename",{oldName:t,newName:n})}deleteFile(t){return this.httpService.delete("/magic/system/file-system/file?file="+encodeURIComponent(t))}downloadFile(t){this.httpService.download("/magic/system/file-system/file?file="+encodeURIComponent(t)).subscribe({next:n=>{let c=n.headers.get("Content-Disposition").split(";")[1].trim().split("=")[1].replace(/"/g,"");const v=new Blob([n.body]);(0,e.saveAs)(v,c)},error:n=>this.generalService.showFeedback(n?.error?.message??n,"errorMessage","Ok",4e3)})}uploadFile(t,n){const o=new FormData;return o.append("file",n),this.httpService.put("/magic/system/file-system/file?folder="+encodeURIComponent(t),o)}uploadDatabaseBackup(t){return new g.y(n=>{const o=new FormData;o.append("file",t),this.httpService.put("/magic/system/sql/backup",o).subscribe({next:c=>{this.cacheService.delete("magic.sql.databases.sqlite.*").subscribe({next:()=>{n.next(c),n.complete()},error:v=>{n.error(v),n.complete()}})},error:c=>{n.error(c),n.complete()}})})}importUsers(t){const n=new FormData;return n.append("file",t),this.httpService.put("/magic/system/auth/import-users",n)}uploadStaticWebsite(t){return this.httpService.put("/magic/system/file-system/overwrite-folder",t)}downloadFolder(t){this.httpService.download("/magic/system/file-system/download-folder?folder="+encodeURIComponent(t)).subscribe({next:n=>{const o=n.headers.get("Content-Disposition");let c=o.substring(o.indexOf("=")+1);c=c.substring(1,c.lastIndexOf('"'));const v=new Blob([n.body],{type:"application/zip"});(0,e.saveAs)(v,c)},error:n=>this.generalService.showFeedback(n?.error?.message??n,"errorMessage")})}createFolder(t){return this.httpService.put("/magic/system/file-system/folder",{folder:t})}deleteFolder(t){return this.httpService.delete("/magic/system/file-system/folder?folder="+encodeURIComponent(t))}getMacroDefinition(t){return this.httpService.get("/magic/system/ide/macro?macro="+encodeURIComponent(t))}executeMacro(t,n){return this.httpService.post("/magic/system/ide/execute-macro",{macro:t,args:n})}installModule(t){const n=new FormData;return n.append("file",t),this.httpService.put("/magic/system/file-system/install-module",n)}unzip(t){return this.httpService.put("/magic/system/file-system/unzip",{file:t,create_folder:!0})}}return p.\u0275fac=function(t){return new(t||p)(m.LFG(h.O),m.LFG(l.m),m.LFG(r.Q))},p.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},4327:function(b,y){var d;void 0!==(d=function(){"use strict";function m(s,t,n){var o=new XMLHttpRequest;o.open("GET",s),o.responseType="blob",o.onload=function(){p(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function h(s){var t=new XMLHttpRequest;t.open("HEAD",s,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function l(s){try{s.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),s.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,x=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(s,t,n){var o=r.URL||r.webkitURL,c=document.createElement("a");c.download=t=t||s.name||"download",c.rel="noopener","string"==typeof s?(c.href=s,c.origin===location.origin?l(c):h(c.href)?m(s,t,n):l(c,c.target="_blank")):(c.href=o.createObjectURL(s),setTimeout(function(){o.revokeObjectURL(c.href)},4e4),setTimeout(function(){l(c)},0))}:"msSaveOrOpenBlob"in navigator?function(s,t,n){if(t=t||s.name||"download","string"!=typeof s)navigator.msSaveOrOpenBlob(function g(s,t){return typeof t>"u"?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type)?new Blob(["\ufeff",s],{type:s.type}):s}(s,n),t);else if(h(s))m(s,t,n);else{var o=document.createElement("a");o.href=s,o.target="_blank",setTimeout(function(){l(o)})}}:function(s,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof s)return m(s,t,n);var c="application/octet-stream"===s.type,v=/constructor/i.test(r.HTMLElement)||r.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||c&&v||x)&&typeof FileReader<"u"){var M=new FileReader;M.onloadend=function(){var E=M.result;E=D?E:E.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=E:location=E,o=null},M.readAsDataURL(s)}else{var O=r.URL||r.webkitURL,T=O.createObjectURL(s);o?o.location=T:location.href=T,o=null,setTimeout(function(){O.revokeObjectURL(T)},4e4)}});r.saveAs=p.saveAs=p,b.exports=p}.apply(y,[]))&&(b.exports=d)},1794:b=>{"use strict";b.exports=JSON.parse('{"autofocus":true,"readonly":false,"lineNumbers":true,"theme":"aista","mode":"hyperlambda","tabSize":3,"indentUnit":3,"indentAuto":true,"styleActiveLine":true,"extraKeys":{"Shift-Tab":"indentLess","Tab":"indentMore","Ctrl-Space":"autocomplete"}}')}}]);