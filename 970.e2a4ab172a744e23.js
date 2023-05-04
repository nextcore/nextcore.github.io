(self.webpackChunkmagic=self.webpackChunkmagic||[]).push([[970],{9554:(T,C,a)=>{"use strict";a.d(C,{v:()=>g});const g={name:"Name must be minimum 2 characters long",backendname:"Alphanumeric characters between 2 to 20 (no space).",username:"Alphanumeric between 2 and 20 characters (no space)",email:"Email must be a valid email address",confirmEmail:"Email addresses must match",confirmPassword:"Passwords must match",currentPassword:"Your password is incorrect",cloudletName:"Minimum of 5 characters, only lowercase and numbers",phone:"e.g. 1111111111",subject:"2 to 30 letters, without special characters",message:"Message cannot be less than 3 characters",appNames:"Only lowercase alphanumeric characters, dot (.), - or _ please",appNamesWithUppercaseDot:"Only alphanumeric characters, dot (.), - or _ please",appNamesWithDot:"Only lowercase alphanumeric characters, and - or _ please",appNameWithUppercase:"Accepts alphanumeric characters and _",appNameWithUppercaseHyphen:"Accepts alphanumeric characters, - and _",domain:"Domain is not valid",backend:"Backend URL must contain http://",password:"Minimum 12 characters",recaptcha:"Not valid reCAPTCHA secret or key"}},8194:(T,C,a)=>{"use strict";a.d(C,{g:()=>g});const g={phone:/^[0-9 ]*$/,name:/^[a-z0-9]{2,20}$/,subject:/^.{4,1000}$/,appNames:/^[a-z0-9_.-]+$/,appNamesWithDot:/^[a-z0-9_.-]+$/,appNamesWithUppercaseDot:/^[a-zA-Z0-9_.-]+$/,appNameWithUppercase:/^[a-zA-Z0-9_]+$/,appNameWithUppercaseHyphen:/^[a-zA-Z0-9_-]+$/,domain:/(^https?:\/\/)([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,backend:/^https?:\/\/([\w\-.])+(:[0-9]*)?(\.\w+)?$/,email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,password:/^.{12,}$/,recaptcha:/^([a-zA-Z-_0-9]{20,100})$/}},7832:(T,C,a)=>{"use strict";a.d(C,{K:()=>p});var g=a(6895),e=a(2278),b=a(4006),v=a(1103),A=a(4650);let p=(()=>{class d{}return d.\u0275fac=function(y){return new(y||d)},d.\u0275mod=A.oAB({type:d}),d.\u0275inj=A.cJS({imports:[g.ez,e.q,b.u5,b.UX,v.k]}),d})()},9311:(T,C,a)=>{"use strict";a.d(C,{J:()=>A});var g=a(4650),e=a(6895);const b=function(p){return{height:p}};function v(p,d){if(1&p&&(g.TgZ(0,"div"),g._UZ(1,"div",2),g.qZA()),2&p){const _=g.oxw();g.Tol(_.colClass),g.xp6(1),g.ekj("mat-elevation-z1",_.hasShadow),g.Q6J("ngStyle",g.VKq(5,b,_.blockHeight))}}let A=(()=>{class p{constructor(){this.amount=2,this.colClass="col-12",this.blockHeight="375px",this.hasShadow=!0,this.itemsArray=[]}ngOnInit(){for(let _=0;_<this.amount;_++)this.itemsArray.push("item"+_)}}return p.\u0275fac=function(_){return new(_||p)},p.\u0275cmp=g.Xpm({type:p,selectors:[["app-loading-skeleton"]],inputs:{amount:"amount",colClass:"colClass",blockHeight:"blockHeight",hasShadow:"hasShadow"},decls:2,vars:1,consts:[[1,"row"],[3,"class",4,"ngFor","ngForOf"],[1,"block","mb-3",3,"ngStyle"]],template:function(_,y){1&_&&(g.TgZ(0,"div",0),g.YNc(1,v,2,7,"div",1),g.qZA()),2&_&&(g.xp6(1),g.Q6J("ngForOf",y.itemsArray))},dependencies:[e.sg,e.PC],styles:[".block[_ngcontent-%COMP%]{background:#eee;background:linear-gradient(90deg,#ffffff 8%,#f2f2f2 18%,#fafafa 33%);background-size:200% 100%;animation:1s shine linear infinite;border-radius:5px;border:1px solid rgba(217,217,217,.05)}@keyframes shine{to{background-position-x:-200%}}"]}),p})()},1565:(T,C,a)=>{"use strict";a.d(C,{Q:()=>b});var g=a(4650),e=a(9845);let b=(()=>{class v{constructor(p){this.httpService=p}list(p=null){let d="";return null!==p&&(d+="?limit="+p.limit,d+="&offset="+p.offset,p.filter&&""!==p.filter&&(d+="&filter="+encodeURIComponent(p.filter))),this.httpService.get("/magic/system/cache/list"+d)}count(p=null){let d="";return null!==p&&""!==p&&(d+="?filter="+encodeURIComponent(p)),this.httpService.get("/magic/system/cache/count"+d)}delete(p){return this.httpService.delete("/magic/system/cache/delete?id="+encodeURIComponent(p))}clear(p=null){let d="";return null!==p&&""!==p&&(d+="?filter="+encodeURIComponent(p)),this.httpService.delete("/magic/system/cache/empty"+d)}}return v.\u0275fac=function(p){return new(p||v)(g.LFG(e.O))},v.\u0275prov=g.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},8588:(T,C,a)=>{"use strict";a.d(C,{C:()=>p});var g=a(8266),e=a.n(g),b=a(7579);const v=JSON.parse('[{"extensions":["sql"],"options":{"mode":"text/x-mysql","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["md","txt","log","key"],"options":{"mode":"markdown","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["yml","yaml"],"options":{"mode":"text/x-yaml","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["xml","html","htm"],"options":{"mode":"application/xml","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["css"],"options":{"mode":"text/css","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["scss"],"options":{"mode":"text/x-scss","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["less"],"options":{"mode":"text/x-less","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["sass"],"options":{"mode":"text/x-sass","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["js","ts"],"options":{"mode":"text/javascript","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["json"],"options":{"mode":"application/ld+json","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["py"],"options":{"mode":"text/x-python","lineNumbers":true,"readOnly":false,"tabSize":4,"indentUnit":4,"indentAuto":true,"matchBrackets":true,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{"Shift-Tab":"indentLess","Tab":"indentMore"}}},{"extensions":["rb"],"options":{"mode":"text/x-ruby","lineNumbers":true,"readOnly":false,"tabSize":4,"indentUnit":4,"indentAuto":true,"matchBrackets":true,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{"Shift-Tab":"indentLess","Tab":"indentMore"}}},{"extensions":["sh"],"options":{"mode":"application/x-sh","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"extraKeys":{}}},{"extensions":["hl","config"],"options":{"mode":"hyperlambda","lineNumbers":true,"readOnly":false,"theme":"aista","autofocus":true,"styleActiveLine":true,"tabSize":3,"indentUnit":3,"indentAuto":true,"extraKeys":{"Shift-Tab":"indentLess","Tab":"indentMore","Ctrl-Space":"autocomplete"}}}]');var A=a(4650);let p=(()=>{class d{constructor(y){this.ngZone=y,this.extensions=v,this.action=new b.x}getActions(y,f){let o=[];if(y){const r=y.substring(y.lastIndexOf(".")+1).toLowerCase();o=this.extensions.filter(u=>-1!==u.extensions.indexOf(r))}else f&&(o=this.extensions.filter(r=>-1!==r.extensions.indexOf(f)));if(0===o.length)return null;{const r=this.clone(o[0]);return r.options.extraKeys&&(r.options.extraKeys["Alt-M"]=u=>{u.setOption("fullScreen",!u.getOption("fullScreen"))},r.options.extraKeys["Alt-S"]=()=>{this.ngZone.run(()=>{this.action.next("save")})},r.options.extraKeys["Alt-D"]=()=>{this.ngZone.run(()=>{this.action.next("deleteFile")})},r.options.extraKeys["Alt-C"]=()=>{this.ngZone.run(()=>{this.action.next("close")})},r.options.extraKeys["Alt-R"]=()=>{this.ngZone.run(()=>{this.action.next("renameFile")})},r.options.extraKeys["Alt-L"]=()=>{this.ngZone.run(()=>{this.action.next("renameFolder")})},r.options.extraKeys["Alt-V"]=()=>{this.ngZone.run(()=>{this.action.next("insertSnippet")})},r.options.extraKeys["Alt-O"]=()=>{this.ngZone.run(()=>{this.action.next("macro")})},r.options.extraKeys["Alt-A"]=()=>{this.ngZone.run(()=>{this.action.next("newFile")})},r.options.extraKeys["Alt-B"]=()=>{this.ngZone.run(()=>{this.action.next("newFolder")})},r.options.extraKeys["Alt-X"]=()=>{this.ngZone.run(()=>{this.action.next("deleteFolder")})},r.options.extraKeys["Alt-P"]=()=>{this.ngZone.run(()=>{this.action.next("preview")})},r.options.extraKeys.F5=()=>{this.ngZone.run(()=>{this.action.next("execute")})},r.options.extraKeys.F1=()=>{this.ngZone.run(()=>{this.action.next("prompt")})},"sql"===f&&(r.options.extraKeys["Ctrl-Space"]=u=>{this.ngZone.run(()=>{u.showHint({hint:e().hint.sql,completeSingle:!1})})})),r.options}}clone(y){var f={};for(var o in y)f[o]="object"==typeof y[o]?this.clone(y[o]):y[o];return f}}return d.\u0275fac=function(y){return new(y||d)(A.LFG(A.R0b))},d.\u0275prov=A.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},6463:(T,C,a)=>{"use strict";a.d(C,{B:()=>b});var g=a(4650),e=a(9845);let b=(()=>{class v{constructor(p){this.httpService=p}endpoints(){return this.httpService.get("/magic/system/endpoints/list")}get(p,d="json"){return this.httpService.get(p,{observe:"response",responseType:d})}delete(p,d="json"){return this.httpService.delete(p,{observe:"response",responseType:d})}post(p,d,_="json"){return this.httpService.post(p,d,{observe:"response",responseType:_})}put(p,d,_="json"){return this.httpService.put(p,d,{observe:"response",responseType:_})}patch(p,d,_="json"){return this.httpService.patch(p,d,{observe:"response",responseType:_})}}return v.\u0275fac=function(p){return new(p||v)(g.LFG(e.O))},v.\u0275prov=g.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},9214:(T,C,a)=>{"use strict";a.d(C,{I:()=>_});var g=a(4327),b=a(9751),v=a(4650),A=a(9845),p=a(3885),d=a(1565);let _=(()=>{class y{constructor(o,r,u){this.httpService=o,this.generalService=r,this.cacheService=u}listFiles(o,r=null){let u="?folder="+encodeURIComponent(o);return r&&(u+="&filter="+encodeURIComponent(r)),this.httpService.get("/magic/system/file-system/list-files"+u)}listFilesRecursively(o,r){let u="?folder="+encodeURIComponent(o);return this.httpService.get("/magic/system/file-system/list-files-recursively"+u+"&sys="+r)}listFolders(o){return this.httpService.get("/magic/system/file-system/list-folders?folder="+encodeURIComponent(o))}listFoldersRecursively(o,r){return this.httpService.get("/magic/system/file-system/list-folders-recursively?folder="+encodeURIComponent(o)+"&sys="+r)}loadFile(o){return this.httpService.get("/magic/system/file-system/file?file="+encodeURIComponent(o),{responseType:"text"})}saveFile(o,r){const u=o.substring(0,o.lastIndexOf("/")+1),x=new FormData,w=new Blob([r],{type:"text/plain"});return x.append("file",w,o.substring(o.lastIndexOf("/")+1)),this.httpService.put("/magic/system/file-system/file?folder="+encodeURIComponent(u),x)}rename(o,r){return this.httpService.post("/magic/system/file-system/rename",{oldName:o,newName:r})}deleteFile(o){return this.httpService.delete("/magic/system/file-system/file?file="+encodeURIComponent(o))}downloadFile(o){this.httpService.download("/magic/system/file-system/file?file="+encodeURIComponent(o)).subscribe({next:r=>{let x=r.headers.get("Content-Disposition").split(";")[1].trim().split("=")[1].replace(/"/g,"");const w=new Blob([r.body]);(0,g.saveAs)(w,x)},error:r=>this.generalService.showFeedback(r?.error?.message??r,"errorMessage","Ok",4e3)})}uploadFile(o,r){const u=new FormData;return u.append("file",r),this.httpService.put("/magic/system/file-system/file?folder="+encodeURIComponent(o),u)}uploadDatabaseBackup(o){return new b.y(r=>{const u=new FormData;u.append("file",o),this.httpService.put("/magic/system/sql/backup",u).subscribe({next:x=>{this.cacheService.delete("magic.sql.databases.sqlite.*").subscribe({next:()=>{r.next(x),r.complete()},error:w=>{r.error(w),r.complete()}})},error:x=>{r.error(x),r.complete()}})})}importUsers(o){const r=new FormData;return r.append("file",o),this.httpService.put("/magic/system/auth/import-users",r)}uploadStaticWebsite(o){return this.httpService.put("/magic/system/file-system/overwrite-folder",o)}downloadFolder(o){this.httpService.download("/magic/system/file-system/download-folder?folder="+encodeURIComponent(o)).subscribe({next:r=>{const u=r.headers.get("Content-Disposition");let x=u.substring(u.indexOf("=")+1);x=x.substring(1,x.lastIndexOf('"'));const w=new Blob([r.body],{type:"application/zip"});(0,g.saveAs)(w,x)},error:r=>this.generalService.showFeedback(r?.error?.message??r,"errorMessage")})}createFolder(o){return this.httpService.put("/magic/system/file-system/folder",{folder:o})}deleteFolder(o){return this.httpService.delete("/magic/system/file-system/folder?folder="+encodeURIComponent(o))}getMacroDefinition(o){return this.httpService.get("/magic/system/ide/macro?macro="+encodeURIComponent(o))}executeMacro(o,r){return this.httpService.post("/magic/system/ide/execute-macro",{macro:o,args:r})}installModule(o){const r=new FormData;return r.append("file",o),this.httpService.put("/magic/system/file-system/install-module",r)}unzip(o){return this.httpService.put("/magic/system/file-system/unzip",{file:o,create_folder:!0})}}return y.\u0275fac=function(o){return new(o||y)(v.LFG(A.O),v.LFG(p.m),v.LFG(d.Q))},y.\u0275prov=v.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},5970:(T,C,a)=>{"use strict";a.r(C),a.d(C,{FrontendGeneratorModule:()=>me});var g=a(6895),e=a(4650),b=a(3848),v=a(3546),A=a(9554),p=a(8194),d=a(6271),_=a(3885),y=a(8710),f=a(6463),o=a(8588),r=a(9132),u=a(9311),x=a(7392),w=a(4859),Z=a(9549),U=a(4144),F=a(6709),k=a(266),M=a(4385),D=a(3238),I=a(7331),O=a(4006),N=a(1103);function R(i,h){if(1&i&&(e.TgZ(0,"mat-option",39),e._uU(1),e.qZA()),2&i){const t=h.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function K(i,h){if(1&i&&(e.TgZ(0,"mat-option",39),e._uU(1),e.qZA()),2&i){const t=h.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function G(i,h){if(1&i&&(e.TgZ(0,"mat-option",39),e._uU(1),e.qZA()),2&i){const t=h.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function J(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"mat-chip",40),e.NdJ("click",function(){const m=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.moduleClicked(m.name))}),e._uU(1),e.qZA()}if(2&i){const t=h.$implicit,n=e.oxw();e.Q6J("selected",n.moduleSelected(t.name)),e.xp6(1),e.Oqu(t.name)}}function B(i,h){1&i&&e._UZ(0,"app-loading-skeleton",41)}function W(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"mat-chip",40),e.NdJ("click",function(){const m=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.componentClicked(m.name))}),e._uU(1),e.qZA()}if(2&i){const t=h.$implicit,n=e.oxw();e.Q6J("selected",n.componentSelected(t.name)),e.xp6(1),e.hij(" ",t.name," ")}}function j(i,h){1&i&&e._UZ(0,"app-loading-skeleton",41)}function Y(i,h){1&i&&e._UZ(0,"app-loading-skeleton",42)}function Q(i,h){1&i&&(e.TgZ(0,"p"),e._uU(1," You have no endpoints, "),e.TgZ(2,"a",43),e._uU(3,"create endpoints here"),e.qZA()())}function q(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"div",44)(1,"mat-checkbox",45),e.NdJ("ngModelChange",function(s){const c=e.CHM(t).$implicit;return e.KtG(c.selected=s)}),e.TgZ(2,"span"),e._uU(3),e.qZA(),e._uU(4),e.qZA()()}if(2&i){const t=h.$implicit;e.xp6(1),e.Q6J("ngModel",t.selected),e.xp6(1),e.Gre("span me-3 methods ",null==t?null:t.verb,""),e.xp6(1),e.Oqu(null==t?null:t.verb),e.xp6(1),e.hij(" ",t.path," ")}}function H(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"ngx-codemirror",46),e.NdJ("ngModelChange",function(s){e.CHM(t);const m=e.oxw();return e.KtG(m.template=s)}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngModel",t.template)("options",t.codemirrorOptions)}}function z(i,h){1&i&&(e.TgZ(0,"p",47),e._uU(1,"Step 7 - Copyright"),e.qZA())}function $(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"mat-form-field",5)(1,"span",48)(2,"mat-icon"),e._uU(3,"copyright"),e.qZA(),e.TgZ(4,"span",7),e._uU(5,"|"),e.qZA()(),e.TgZ(6,"input",49),e.NdJ("ngModelChange",function(s){e.CHM(t);const m=e.oxw();return e.KtG(m.copyRight=s)}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.copyRight)}}function X(i,h){1&i&&e._UZ(0,"div",50)}let V=(()=>{class i{constructor(t,n,s,m,c){this.crudifyService=t,this.generalService=n,this.backendService=s,this.endpointsService=m,this.codemirrorActionsService=c,this.frontendTypes=ee,this.frontendType="",this.frontendName="",this.isApp=!0,this.colorPalettes=[],this.colorPalette="",this.themes=[],this.theme="",this.databases=[],this.tables=[],this.template="",this.copyRight="Automatically generated by Magic",this.CommonRegEx=p.g,this.CommonErrorMessages=A.v}ngOnInit(){this.frontendType=this.frontendTypes[1].value,this.generalService.showLoading(),this.getEndpoints(),this.codemirrorOptions=this.codemirrorActionsService.getActions("html")}changeFrontendType(){this.isApp=this.frontendType===this.frontendTypes[1].value,this.isApp?(this.colorPalette=this.colorPalettes[0].value,this.theme=this.themes[0].value):(this.theme="",this.colorPalette="")}selectedEndpoints(){return this.endpoints.filter(t=>t.selected).length}moduleClicked(t){const n=this.endpoints.filter(m=>m.path.startsWith("magic/modules/"+t+"/"));if(n.filter(m=>m.selected).length===n.length)for(const m of n)m.selected=!1;else for(const m of n){let c=!0;for(var s of n.filter(l=>l.selected&&l.verb===m.verb)){const l=s.path.split("/"),S=m.path.split("/");l[l.length-1]===S[S.length-1]&&(c=!1)}m.selected=c}}componentClicked(t){const n=this.endpoints.filter(m=>m.path.endsWith("/"+t)||m.path.endsWith("/"+t+"-count")),s=n.filter(m=>!m.selected).length>0;for(const m of n)m.selected=s}moduleSelected(t){const n=this.endpoints.filter(s=>s.path.startsWith("magic/modules/"+t+"/"));return n.filter(s=>s.selected).length===n.length}componentSelected(t){return 1===this.endpoints.filter(n=>n.selected).filter(n=>"get"===n.verb&&"crud-count"===n.type&&n.path=="magic/modules/"+t+"-count").length}generate(t=!0){if(""===this.frontendName)return void this.generalService.showFeedback("Please give your fontend a name","errorMessage");if(0===this.endpoints.length)return void this.generalService.showFeedback("No endpoints selected","errorMessage");let n=this.backendService.active.url;for(;n.endsWith("/");)n=n.substring(0,n.length-1);let s={};this.isApp&&(s={intro:this.template,palette:this.colorPalette,theme:this.theme});const m=this.createServiceModel(this.endpoints.filter(c=>c.selected));this.generalService.showLoading(),this.crudifyService.generate(this.frontendType,n+"/",this.frontendName,""===this.copyRight?"Automatically generated by Magic":this.copyRight,m,t,s,()=>{this.generalService.hideLoading(),this.generalService.showFeedback(t?"Success, edit the generated code in Frontend IDE":"Successfully generated","successMessage","Ok",5e3)},()=>{this.generalService.showFeedback("Something went wrong as we tried to generate your frontend","errorMessage","Ok",5e3),this.generalService.hideLoading()})}createServiceModel(t){const n=[];for(const s of t){const m={auth:s.auth,description:s.description,path:s.path,type:s.type,verb:s.verb,input:[],output:[]};if(s.input&&s.input.length>0){s.input.sort((c,l)=>"name"===c.name.toLowerCase()&&"name"!==l.name.toLowerCase()?-1:"name"!==c.name.toLowerCase()&&"name"===l.name.toLowerCase()?1:"name"===c.name.toLowerCase()&&"name"===l.name.toLowerCase()?0:c.name.toLowerCase().indexOf("name")>=0&&-1===c.name.indexOf(".")&&(-1===l.name.toLowerCase().indexOf("name")||l.name.indexOf(".")>=0)?-1:l.name.toLowerCase().indexOf("name")>=0&&-1===l.name.indexOf(".")&&(-1===c.name.toLowerCase().indexOf("name")||c.name.indexOf(".")>=0)?1:c.lookup&&!l.lookup?-1:!c.lookup&&l.lookup?1:c.lookup&&l.lookup?0:"string"===c.type&&"string"!==l.type?-1:"string"!==c.type&&"string"===l.type?1:"string"===c.type&&"string"===l.type?0:"date"===c.type&&"date"!==l.type?-1:"date"!==c.type&&"date"===l.type?1:0);for(const c of s.input){const l={name:c.name,type:c.type};if(c.lookup){for(l.lookup=c.lookup,l.lookup.service=s.path.substring(14),l.lookup.service=l.lookup.service.substring(0,l.lookup.service.indexOf("/"))+"."+l.lookup.table;l.lookup.service.indexOf("-")>0;)l.lookup.service=l.lookup.service.replace("-","_");for(;l.lookup.service.indexOf(".")>0;)l.lookup.service=l.lookup.service.replace(".","_")}c.handling&&(l.handling=c.handling),m.input.push(l)}}if(s.output&&s.output.length>0){s.output.sort((c,l)=>{if("name"===c.name.toLowerCase()&&"name"!==l.name.toLowerCase())return-1;if("name"!==c.name.toLowerCase()&&"name"===l.name.toLowerCase())return 1;if("name"===c.name.toLowerCase()&&"name"===l.name.toLowerCase())return 0;if(c.name.toLowerCase().indexOf("name")>=0&&-1===c.name.indexOf(".")&&(-1===l.name.toLowerCase().indexOf("name")||l.name.indexOf(".")>=0))return-1;if(l.name.toLowerCase().indexOf("name")>=0&&-1===l.name.indexOf(".")&&(-1===c.name.toLowerCase().indexOf("name")||c.name.indexOf(".")>=0))return 1;if(c.lookup&&!l.lookup)return-1;if(!c.lookup&&l.lookup)return 1;if(c.lookup&&l.lookup)return 0;if("crud-read"===s.type){let S=!1;if(c.name.indexOf(".")>0){const P=c.name.split(".")[0],E=s.path.split("/");P!==E[E.length]&&(S=!0)}let L=!1;if(l.name.indexOf(".")>0){const P=l.name.split(".")[0],E=s.path.split("/");P!==E[E.length]&&(L=!0)}if(S&&!L)return-1;if(!S&&L)return 1;if(S&&L)return 0}return"string"===c.type&&"string"!==l.type?-1:"string"!==c.type&&"string"===l.type?1:"string"===c.type&&"string"===l.type?0:"date"===c.type&&"date"!==l.type?-1:"date"!==c.type&&"date"===l.type?1:0});for(const c of s.output){const l={name:c.name,type:c.type||m.input[c.name+".eq"]};if(c.handling&&(l.handling=c.handling),c.lookup)for(l.lookup=c.lookup,l.lookup.service=s.path.substring(14),l.lookup.service=l.lookup.service.substring(0,l.lookup.service.indexOf("/"))+"."+l.lookup.table;l.lookup.service.indexOf(".")>0;)l.lookup.service=l.lookup.service.replace(".","_");m.output.push(l)}}n.push(m)}return n}getComponents(){this.tables=this.endpoints.filter(t=>"crud-count"===t.type).map(t=>{const n=t.path.substring(14);return{name:n.substring(0,n.length-6),selected:!0}})}getEndpoints(){this.endpointsService.endpoints().subscribe({next:t=>{if(t){this.endpoints=t.filter(s=>!s.path.startsWith("magic/system/")&&!s.path.startsWith("magic/modules/magic/")).filter(s=>"crud-count"===s.type||"crud-delete"===s.type||"crud-read"===s.type||"crud-create"===s.type||"crud-update"===s.type).map(s=>({path:s.path,verb:s.verb,consumes:s.consumes,produces:s.produces,input:s.input,output:s.output,array:s.array,auth:s.auth,type:s.type,description:s.description,selected:!0}));const n=[];for(const s of this.endpoints){let m=s.path.substring(14);m=m.substring(0,m.indexOf("/")),-1===n.findIndex(c=>c.name===m)&&n.push({name:m,selected:!0})}this.databases=n,this.getComponents(),this.getPalette()}},error:t=>{this.generalService.showFeedback(t?.error?.message??t,"errorMessage")}})}getPalette(){this.crudifyService.templateCustomArgs(this.frontendType).subscribe({next:t=>{this.generalService.hideLoading(),t&&(this.colorPalettes=t?.palette||[],this.colorPalette=this.colorPalettes[0].value,this.themes=t?.theme||[],this.theme=this.themes[0].value,this.template=t?.intro)},error:t=>{this.generalService.hideLoading(),this.generalService.showFeedback(t?.error?.message??t,"errorMessage")}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.A),e.Y36(_.m),e.Y36(y.v),e.Y36(f.B),e.Y36(o.C))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-auto-generate"]],decls:80,vars:23,consts:[[1,"row","mt-4","frontend-generator"],[1,"col-md-6","col-12","pe-lg-4","mb-3"],[1,"fw-bold","pb-3"],[1,"row"],[1,"col-sm-6","col-12"],[1,"w-100"],["matPrefix","","matTooltip","Type of application",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],[1,"text-muted"],["placeholder","Frontend type",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"w-100","standalone-field"],["matPrefix","","matTooltip","Name of app",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],["matInput","","autocomplete","off",3,"placeholder","ngModel","pattern","ngModelChange"],[1,"col-md-6","col-12","ps-lg-4","mb-3"],["matPrefix","","matTooltip","Color theme of app",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],["placeholder","Colour palette",3,"ngModel","disabled","ngModelChange"],["matPrefix","","matTooltip","Dark or light theme",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],["placeholder","Theme",3,"ngModel","disabled","ngModelChange"],[1,"col-lg-6","col-12","pe-lg-4","mb-3"],[1,"d-flex","justify-content-between","align-items-center","pb-3"],[1,"fw-bold","my-0"],["aria-label","table selection","multiple",""],["color","primary",3,"selected","click",4,"ngFor","ngForOf"],["amount","1","colClass","col-12","blockHeight","45px","hasShadow","false",4,"ngIf"],[1,"col-lg-6","col-12","ps-lg-4","mb-3"],[1,"col-lg-6","col-12","pe-lg-4","mb-lg-0","mb-3"],[1,"endpoints-list","w-100","pe-2"],["amount","5","colClass","col-12","blockHeight","40px","hasShadow","false",4,"ngIf"],[4,"ngIf"],["class","d-flex mb-2 bg-light px-3 py-2",4,"ngFor","ngForOf"],[1,"col-lg-6","col-12","ps-lg-4"],[1,"fw-bold","pb-3","mt-2"],["class","h-100 large",3,"ngModel","options","ngModelChange",4,"ngIf"],["class","fw-bold pb-3 mt-4",4,"ngIf"],["class","w-100",4,"ngIf"],["class","fake-container bg-light",4,"ngIf"],[1,"col-12","d-flex","justify-content-end","button-row"],["mat-button","","color","primary",1,"px-5",3,"click"],["mat-flat-button","","color","primary",1,"px-5",3,"click"],[3,"value"],["color","primary",3,"selected","click"],["amount","1","colClass","col-12","blockHeight","45px","hasShadow","false"],["amount","5","colClass","col-12","blockHeight","40px","hasShadow","false"],["routerLink","/endpoint-generator",1,"link"],[1,"d-flex","mb-2","bg-light","px-3","py-2"],["color","primary",1,"",3,"ngModel","ngModelChange"],[1,"h-100","large",3,"ngModel","options","ngModelChange"],[1,"fw-bold","pb-3","mt-4"],["matPrefix","","matTooltip","Copyright file header for code",1,"d-flex","flex-nowrap","align-items-center","justify-content-between","me-2"],["matInput","","autocomplete","off",3,"ngModel","ngModelChange"],[1,"fake-container","bg-light"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Step 1 - App type & name"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"span",6)(8,"mat-icon"),e._uU(9,"apps"),e.qZA(),e.TgZ(10,"span",7),e._uU(11,"|"),e.qZA()(),e.TgZ(12,"mat-select",8),e.NdJ("ngModelChange",function(m){return n.frontendType=m})("selectionChange",function(){return n.changeFrontendType()}),e.YNc(13,R,2,2,"mat-option",9),e.qZA()()(),e.TgZ(14,"div",4)(15,"mat-form-field",10)(16,"span",11)(17,"mat-icon"),e._uU(18,"edit"),e.qZA(),e.TgZ(19,"span",7),e._uU(20,"|"),e.qZA()(),e.TgZ(21,"input",12),e.NdJ("ngModelChange",function(m){return n.frontendName=m}),e.qZA(),e.TgZ(22,"mat-error"),e._uU(23),e.qZA()()()()(),e.TgZ(24,"div",13)(25,"p",2),e._uU(26,"Step 2 - App appearance"),e.qZA(),e.TgZ(27,"div",3)(28,"div",4)(29,"mat-form-field",5)(30,"span",14)(31,"mat-icon"),e._uU(32,"palette"),e.qZA(),e.TgZ(33,"span",7),e._uU(34,"|"),e.qZA()(),e.TgZ(35,"mat-select",15),e.NdJ("ngModelChange",function(m){return n.colorPalette=m}),e.YNc(36,K,2,2,"mat-option",9),e.qZA()()(),e.TgZ(37,"div",4)(38,"mat-form-field",5)(39,"span",16)(40,"mat-icon"),e._uU(41,"invert_colors"),e.qZA(),e.TgZ(42,"span",7),e._uU(43,"|"),e.qZA()(),e.TgZ(44,"mat-select",17),e.NdJ("ngModelChange",function(m){return n.theme=m}),e.YNc(45,G,2,2,"mat-option",9),e.qZA()()()()(),e.TgZ(46,"div",18)(47,"div",19)(48,"p",20),e._uU(49,"Step 3 - Modules"),e.qZA()(),e.TgZ(50,"mat-chip-list",21),e.YNc(51,J,2,2,"mat-chip",22),e.qZA(),e.YNc(52,B,1,0,"app-loading-skeleton",23),e.qZA(),e.TgZ(53,"div",24)(54,"div",19)(55,"p",20),e._uU(56,"Step 4 - Components"),e.qZA()(),e.TgZ(57,"mat-chip-list",21),e.YNc(58,W,2,2,"mat-chip",22),e.qZA(),e.YNc(59,j,1,0,"app-loading-skeleton",23),e.qZA(),e.TgZ(60,"div",25)(61,"div",19)(62,"p",20),e._uU(63,"Step 5 - App endpoints"),e.qZA()(),e.TgZ(64,"div",26),e.YNc(65,Y,1,0,"app-loading-skeleton",27),e.YNc(66,Q,4,0,"p",28),e.YNc(67,q,5,6,"div",29),e.qZA()(),e.TgZ(68,"div",30)(69,"p",31),e._uU(70,"Step 6 - Homepage"),e.qZA(),e.YNc(71,H,1,2,"ngx-codemirror",32),e.YNc(72,z,2,0,"p",33),e.YNc(73,$,7,1,"mat-form-field",34),e.YNc(74,X,1,0,"div",35),e.qZA(),e.TgZ(75,"div",36)(76,"button",37),e.NdJ("click",function(){return n.generate(!1)}),e._uU(77," Download "),e.qZA(),e.TgZ(78,"button",38),e.NdJ("click",function(){return n.generate(!0)}),e._uU(79," Generate "),e.qZA()()()),2&t&&(e.xp6(12),e.Q6J("ngModel",n.frontendType),e.xp6(1),e.Q6J("ngForOf",n.frontendTypes),e.xp6(8),e.Q6J("placeholder",n.frontendType===n.frontendTypes[1].value?"App name":"Service name")("ngModel",n.frontendName)("pattern",n.CommonRegEx.appNameWithUppercaseHyphen),e.xp6(2),e.Oqu(n.CommonErrorMessages.appNameWithUppercaseHyphen),e.xp6(12),e.Q6J("ngModel",n.colorPalette)("disabled",!n.isApp),e.xp6(1),e.Q6J("ngForOf",n.colorPalettes),e.xp6(8),e.Q6J("ngModel",n.theme)("disabled",!n.isApp),e.xp6(1),e.Q6J("ngForOf",n.themes),e.xp6(6),e.Q6J("ngForOf",n.databases),e.xp6(1),e.Q6J("ngIf",!n.databases),e.xp6(6),e.Q6J("ngForOf",n.tables),e.xp6(1),e.Q6J("ngIf",!n.tables),e.xp6(6),e.Q6J("ngIf",!n.endpoints),e.xp6(1),e.Q6J("ngIf",0===(null==n.endpoints?null:n.endpoints.length)),e.xp6(1),e.Q6J("ngForOf",n.endpoints),e.xp6(4),e.Q6J("ngIf",n.isApp),e.xp6(1),e.Q6J("ngIf",n.isApp),e.xp6(1),e.Q6J("ngIf",n.isApp),e.xp6(1),e.Q6J("ngIf",!n.isApp))},dependencies:[g.sg,g.O5,r.yS,u.J,x.Hw,w.lW,Z.TO,Z.KE,Z.qo,U.Nt,F.oG,k.gM,M.gD,D.ey,I.qn,I.HS,O.Fj,O.JJ,O.c5,O.On,N.C],styles:[".frontend-generator[_ngcontent-%COMP%]     .mat-chip{font-size:12px;min-height:25px}.frontend-generator[_ngcontent-%COMP%]     .mat-checkbox-label{margin-left:12px;white-space:pre-wrap;word-break:break-word}.frontend-generator[_ngcontent-%COMP%]     .CodeMirror{height:100%;max-height:300px}.fake-container[_ngcontent-%COMP%]{height:400px}.endpoints-list[_ngcontent-%COMP%]{max-height:408px;overflow:hidden auto}.endpoints-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #f5f5f5;-webkit-box-shadow:inset 0 0 6px #f5f5f5;background-color:#f5f5f5}.endpoints-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;background-color:#f5f5f5}.endpoints-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#bdbdbd;border-radius:10px}.link[_ngcontent-%COMP%]{text-decoration:none}.methods[_ngcontent-%COMP%]{min-width:50px;min-height:20px;width:50px;height:20px;font-size:10px;border-radius:45px;display:inline-flex;align-items:center;justify-content:center;text-transform:uppercase;color:#fff}.methods.get[_ngcontent-%COMP%]{background-color:#2f80ed}.methods.post[_ngcontent-%COMP%]{background-color:#27ae60}.methods.put[_ngcontent-%COMP%], .methods.patch[_ngcontent-%COMP%]{background-color:#e2b93b}.methods.delete[_ngcontent-%COMP%]{background-color:#eb5757}"]}),i})();const ee=[{name:"Angular service",value:"angular-service"},{name:"Angular application",value:"angular"}];var te=a(9214);function ne(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(t),e.oxw();const s=e.MAs(10);return e.KtG(s.click())}),e.TgZ(1,"i"),e._uU(2,"Drag & drop or click to upload your static website here"),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"span",13),e._uU(5,"Choose a file"),e.qZA()()}if(2&i){const t=e.oxw();e.Q6J("disabled",t.uploading)}}function oe(i,h){1&i&&(e.TgZ(0,"p",16),e._uU(1,"Uploading ..."),e.qZA())}function ie(i,h){1&i&&(e.TgZ(0,"p",16),e._uU(1,"Uploaded!"),e.qZA())}function re(i,h){if(1&i&&(e.ynx(0),e.TgZ(1,"h4",14),e._uU(2),e.qZA(),e.YNc(3,oe,2,0,"p",15),e.YNc(4,ie,2,0,"p",15),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.file.name),e.xp6(1),e.Q6J("ngIf",t.uploading),e.xp6(1),e.Q6J("ngIf",!t.uploading)}}let se=(()=>{class i{constructor(t,n){this.generalService=t,this.fileService=n,this.uploading=!1}getFile(t){this.uploading=!0,this.file=t.target.files[0];const n=new FormData;n.append("file",this.file,this.file.name),n.append("folder","/etc/www/"),this.generalService.showLoading(),this.fileService.uploadStaticWebsite(n).subscribe({next:()=>{this.uploading=!1,this.generalService.hideLoading(),this.generalService.showFeedback("Website successfully uploaded to /etc/www/","successMessage")},error:s=>{this.uploading=!1,this.generalService.hideLoading(),this.generalService.showFeedback(s?.error?.message??s,"errorMessage")}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.m),e.Y36(te.I))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-upload-existing"]],decls:18,vars:2,consts:[[1,"row","justify-content-center","mt-4"],[1,"col-12","pb-5","pt-3"],[1,"fw-bold"],[1,"text-muted"],[1,"col-xxl-5","col-xl-6","col-lg-7","col-12"],[1,"drop-container","pointer","border-color"],["type","file","accept",".zip",1,"w-100","h-100","hide","pointer",3,"change"],["upload",""],["mat-button","","class","w-100",3,"disabled","click",4,"ngIf"],[4,"ngIf"],[1,"mt-4","text-center"],["routerLink","/hyper-ide"],["mat-button","",1,"w-100",3,"disabled","click"],[1,"text-primary"],[1,"my-0"],["class","text-center mt-3",4,"ngIf"],[1,"text-center","mt-3"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Upload your website template"),e.qZA(),e.TgZ(4,"p",3),e._uU(5,"And serve it over the root URL of your cloudlet"),e.qZA()(),e.TgZ(6,"div",4)(7,"form")(8,"div",5)(9,"input",6,7),e.NdJ("change",function(m){return n.getFile(m)}),e.qZA(),e.YNc(11,ne,6,1,"button",8),e.YNc(12,re,5,3,"ng-container",9),e.qZA(),e.TgZ(13,"p",10)(14,"i"),e._uU(15,"You can find your uploaded website's files "),e.TgZ(16,"a",11),e._uU(17,"here"),e.qZA()()()()()()),2&t&&(e.xp6(11),e.Q6J("ngIf",!n.file),e.xp6(1),e.Q6J("ngIf",n.file))},dependencies:[g.O5,r.yS,w.lW,O._Y,O.JL,O.F],styles:[".drop-container[_ngcontent-%COMP%]{position:relative;height:200px;border-style:dashed;border-width:1px;border-radius:10px;border-color:#0080ff;background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;flex-direction:column}.hide[_ngcontent-%COMP%]{opacity:0;position:absolute;left:0;right:0;z-index:1}"]}),i})();function ae(i,h){1&i&&(e._uU(0," Auto "),e.TgZ(1,"span",7),e._uU(2,"frontend"),e.qZA(),e._uU(3," generator "))}function le(i,h){1&i&&(e._uU(0," Upload "),e.TgZ(1,"span",7),e._uU(2,"existing"),e.qZA(),e._uU(3," frontend "))}const ce=[{path:"",component:(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-frontend-generator"]],decls:12,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"h-100"],[1,"endpoint-generator","h-100"],["mat-stretch-tabs","","dynamicHeight","","animationDuration","0ms"],["tabs",""],["mat-tab-label",""],[1,"d-sm-inline","d-none","px-1"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content",3)(4,"mat-tab-group",4,5)(6,"mat-tab"),e.YNc(7,ae,4,0,"ng-template",6),e._UZ(8,"app-auto-generate"),e.qZA(),e.TgZ(9,"mat-tab"),e.YNc(10,le,4,0,"ng-template",6),e._UZ(11,"app-upload-existing"),e.qZA()()()()()())},dependencies:[b.SP,b.uD,b.uX,v.a8,v.dn,V,se],encapsulation:2}),i})()}];let pe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.Bz.forChild(ce),r.Bz]}),i})();var de=a(7832),ue=a(2278);let me=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,pe,de.K,ue.q,O.u5,N.k]}),i})()},4327:function(T,C){var e;void 0!==(e=function(){"use strict";function v(f,o,r){var u=new XMLHttpRequest;u.open("GET",f),u.responseType="blob",u.onload=function(){y(u.response,o,r)},u.onerror=function(){console.error("could not download file")},u.send()}function A(f){var o=new XMLHttpRequest;o.open("HEAD",f,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function p(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(o)}}var d="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,_=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=d.saveAs||("object"!=typeof window||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(f,o,r){var u=d.URL||d.webkitURL,x=document.createElement("a");x.download=o=o||f.name||"download",x.rel="noopener","string"==typeof f?(x.href=f,x.origin===location.origin?p(x):A(x.href)?v(f,o,r):p(x,x.target="_blank")):(x.href=u.createObjectURL(f),setTimeout(function(){u.revokeObjectURL(x.href)},4e4),setTimeout(function(){p(x)},0))}:"msSaveOrOpenBlob"in navigator?function(f,o,r){if(o=o||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(function b(f,o){return typeof o>"u"?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\ufeff",f],{type:f.type}):f}(f,r),o);else if(A(f))v(f,o,r);else{var u=document.createElement("a");u.href=f,u.target="_blank",setTimeout(function(){p(u)})}}:function(f,o,r,u){if((u=u||open("","_blank"))&&(u.document.title=u.document.body.innerText="downloading..."),"string"==typeof f)return v(f,o,r);var x="application/octet-stream"===f.type,w=/constructor/i.test(d.HTMLElement)||d.safari,Z=/CriOS\/[\d]+/.test(navigator.userAgent);if((Z||x&&w||_)&&typeof FileReader<"u"){var U=new FileReader;U.onloadend=function(){var M=U.result;M=Z?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=M:location=M,u=null},U.readAsDataURL(f)}else{var F=d.URL||d.webkitURL,k=F.createObjectURL(f);u?u.location=k:location.href=k,u=null,setTimeout(function(){F.revokeObjectURL(k)},4e4)}});d.saveAs=y.saveAs=y,T.exports=y}.apply(C,[]))&&(T.exports=e)}}]);