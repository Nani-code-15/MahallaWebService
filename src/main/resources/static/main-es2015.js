(self.webpackChunk_coreui_coreui_free_angular_admin_template=self.webpackChunk_coreui_coreui_free_angular_admin_template||[]).push([["main"],{98255:function(e){function t(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=98255,e.exports=t},83211:function(e,t,r){"use strict";r.d(t,{i:function(){return a}});var s=r(64762),i=r(33018);let a=class{constructor(){this.insurenceData=[],this.ProfileData={}}};a.ctorParameters=()=>[],a=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],a)},6111:function(e,t,r){"use strict";r.d(t,{$h:function(){return d},gD:function(){return _},gA:function(){return U},vq:function(){return f},cA:function(){return S},Bf:function(){return b},rR:function(){return h},Qr:function(){return y},xe:function(){return v},KD:function(){return m},tn:function(){return o}});var s=r(64762),i=r(33018),a=r(91841),n=r(92340);let o=class{constructor(e){this.http=e}loginError(){return this.http.get(`${n.N.webhookUrl}/beeserp_loginError`)}};o.ctorParameters=()=>[{type:a.eN}],o=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],o);var l=r(26215),p=r(88002),c=r(48248);let d=class{constructor(e){this.http=e,this.currentUserSubject=new l.X(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return this.currentUserSubject.value}login(e,t){var r={userId:e,password:t};return this.http.post(`${n.N.apiUrl}/auth/web-login`,r).pipe((0,p.U)(e=>{if(1==e.status){var t=e.refreshToken,r=this.getDecodedAccessToken(e.refreshToken);r.token=t,localStorage.setItem("currentUser",JSON.stringify(r)),this.currentUserSubject.next(r)}return e}))}getDecodedAccessToken(e){try{return(0,c.Z)(e)}catch(Error){return null}}logout(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null),location.reload()}};d.ctorParameters=()=>[{type:a.eN}],d=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],d);var u=r(96255);let h=class{constructor(e,t,r){this.http=e,this.user=t,this.router=r}getAll(e){return this.http.get(`${n.N.apiUrl}/role-master?isPagination=false`)}submitform(e){return e.id?this.http.put(`${n.N.apiUrl}/role-master`,e):this.http.post(`${n.N.apiUrl}/role-master`,e)}delete(e){return this.http.delete(`${n.N.apiUrl}/role-master/`+(null==e?void 0:e.id))}definerole(e){this.router.navigate(["/masterwindow/rolepermission"],{queryParams:{RoleID:null==e?void 0:e.id}})}getPermissionValue(e){return this.http.get(`${n.N.apiUrl}/role-master-prm/`+e)}submitpermission(e){return this.http.put(`${n.N.apiUrl}/role-master-prm/`,e)}};h.ctorParameters=()=>[{type:a.eN},{type:m},{type:u.F0}],h=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],h);let m=class{constructor(e){this.http=e,this.userData=[],this.baseServiceUrl="/user-master"}getAll(){return this.http.get(`${n.N.apiUrl}/user-master?isPagination=false`)}submitform(e){return e.id?this.http.put(`${n.N.apiUrl}/user-master`,e):this.http.post(`${n.N.apiUrl}/user-master`,e)}delete(e){return this.http.delete(`${n.N.apiUrl}/user-master/`+(null==e?void 0:e.id))}deleteSelected(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/delete-all`,e)}ImportCSV(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/add-all`,e)}};m.ctorParameters=()=>[{type:a.eN}],m=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],m);let v=class{constructor(e,t,r){this.http=e,this.user=t,this.router=r,this.baseServiceUrl="/userrolemaster"}getAll(e){return this.http.get(`${n.N.apiUrl}/userrolemaster/getAll`)}submitform(e){return e.CRBY=this.user.userData.ID,e.ID?this.http.post(`${n.N.apiUrl}/userrolemaster/update`,e):this.http.post(`${n.N.apiUrl}/userrolemaster/create`,e)}delete(e){return this.http.post(`${n.N.apiUrl}/userrolemaster/delete`,e)}deleteSelected(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/delete-all`,e)}ImportCSV(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/add-all`,e)}};v.ctorParameters=()=>[{type:a.eN},{type:m},{type:u.F0}],v=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],v);var g=r(83211);let b=class{constructor(e,t,r){this.http=e,this.RootService=t,this.router=r,this.userData=[],this.baseServiceUrl="/profile-setting",this.baseServiceUrl_auth="/auth/profile-setting"}getAll(){return this.http.get(`${n.N.apiUrl+this.baseServiceUrl_auth}`)}submitform(e){var t=new FormData;return Object.keys(e).forEach(function(r){"logoSmallFile"==r||"logoLargeFile"==r?(e.logoSmallFile&&t.append(r,e.logoSmallFile),e.logoLargeFile&&t.append(r,e.logoLargeFile)):t.append(r,e[r])}),e.id?this.http.put(`${n.N.apiUrl+this.baseServiceUrl}`,t):(e.id=0,t.append("id",e.id),this.http.post(`${n.N.apiUrl+this.baseServiceUrl}`,t))}delete(e){return this.http.delete(`${n.N.apiUrl+this.baseServiceUrl}/`+(null==e?void 0:e.id))}};b.ctorParameters=()=>[{type:a.eN},{type:g.i},{type:u.F0}],b=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],b);let f=class{constructor(e,t){this.http=e,this.user=t}getAllModuleByuserrole(e){return this.http.get(`${n.N.apiUrl}/role-master-prm/read-only`)}getAllModuleById(e){return this.http.get(`${n.N.apiUrl}/all-module/`+e)}getTableMainSchema(e){return this.http.get(`${n.N.apiUrl}/table-main-schema/`+e)}getTableButtonSchema(e){return this.http.get(`${n.N.apiUrl}/table-button-schema/`+e)}getFormSchema(e){return this.http.get(`${n.N.apiUrl}/form-data/`+e)}CreateFormData(e){return this.http.post(`${n.N.apiUrl}/form-data`,e)}submittabledata(e,t){return e.sortBy=0,e.pageMasterId=t,e.id?this.http.put(`${n.N.apiUrl}/table-main-schema`,e):this.http.post(`${n.N.apiUrl}/table-main-schema`,e)}delete3(e){return this.http.delete(`${n.N.apiUrl}/table-main-schema/`+(null==e?void 0:e.id))}submittabledata2(e,t){return e.pageMasterId=t,e.id?this.http.put(`${n.N.apiUrl}/table-button-schema`,e):this.http.post(`${n.N.apiUrl}/table-button-schema`,e)}delete2(e){return this.http.delete(`${n.N.apiUrl}/table-button-schema/`+(null==e?void 0:e.id))}};f.ctorParameters=()=>[{type:a.eN},{type:m}],f=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],f);let S=class{constructor(e,t,r){this.http=e,this.user=t,this.router=r,this.baseServiceUrl="/page-master"}getAll(e){return this.http.get(`${n.N.apiUrl}/page-master?isPagination=false`)}submitform(e){1==e.parent&&null==e.parentId&&(e.parentId=0);var t={ShowImport:e.ShowImport,ShowDeleteAll:e.DeleteAll};return e.options=JSON.stringify(t),e.id?this.http.put(`${n.N.apiUrl}/page-master`,e):this.http.post(`${n.N.apiUrl}/page-master`,e)}delete(e){return this.http.delete(`${n.N.apiUrl}/page-master/`+(null==e?void 0:e.id))}formbuilder(e){this.router.navigate(["/formbuilder"],{queryParams:{ModuleID:e.id}})}tablebuilder(e){this.router.navigate(["/tablebuilder"],{queryParams:{ModuleID:e.id}})}deleteSelected(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/delete-all`,e)}ImportCSV(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/add-all`,e)}};S.ctorParameters=()=>[{type:a.eN},{type:m},{type:u.F0}],S=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],S);let _=class{constructor(e){this.http=e,this.userData=[],this.baseServiceUrl="/family-head-details"}getAll(e){return this.http.get(`${n.N.apiUrl+this.baseServiceUrl}?${e}`)}submitform(e){return e.id?this.http.put(`${n.N.apiUrl+this.baseServiceUrl}`,e):(e.id=0,this.http.post(`${n.N.apiUrl+this.baseServiceUrl}`,e))}delete(e){return this.http.delete(`${n.N.apiUrl+this.baseServiceUrl}/`+(null==e?void 0:e.id))}deleteSelected(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/delete-all`,e)}ImportCSV(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/add-all`,e)}};_.ctorParameters=()=>[{type:a.eN}],_=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],_);let U=class{constructor(e){this.http=e,this.userData=[],this.baseServiceUrl="/family-member-details"}getAll(e){return this.http.get(`${n.N.apiUrl+this.baseServiceUrl}?${e}`)}submitform(e){return e.id?this.http.put(`${n.N.apiUrl+this.baseServiceUrl}`,e):(e.id=0,this.http.post(`${n.N.apiUrl+this.baseServiceUrl}`,e))}delete(e){return this.http.delete(`${n.N.apiUrl+this.baseServiceUrl}/`+(null==e?void 0:e.id))}deleteSelected(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/delete-all`,e)}ImportCSV(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/add-all`,e)}};U.ctorParameters=()=>[{type:a.eN}],U=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],U);let y=class{constructor(e){this.http=e,this.userData=[],this.baseServiceUrl="/subscription-entry"}getAll(e){return this.http.get(`${n.N.apiUrl+this.baseServiceUrl}?${e}`)}submitform(e){return e.id?this.http.put(`${n.N.apiUrl+this.baseServiceUrl}`,e):(e.id=0,this.http.post(`${n.N.apiUrl+this.baseServiceUrl}`,e))}delete(e){return this.http.delete(`${n.N.apiUrl+this.baseServiceUrl}/`+(null==e?void 0:e.id))}deleteSelected(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/delete-all`,e)}ImportCSV(e){return this.http.post(`${n.N.apiUrl+this.baseServiceUrl}/add-all`,e)}};y.ctorParameters=()=>[{type:a.eN}],y=(0,s.gn)([(0,i.GSi)({providedIn:"root"})],y)},92340:function(e,t,r){"use strict";r.d(t,{N:function(){return s}});const s={production:!1,baseURL:"http://207.180.233.17:10040",apiUrl:"http://localhost:10040/api/v1",webhookUrl:"http://207.180.233.17:10040/webhook"}},8320:function(e,t,r){"use strict";var s=r(33018),i=r(1914),a=r(64762),n=r(39075),o=r(38583),l=r(46237),p=r(91841),c=r(56585),d=r(96255),u=r(6111);let h=class{constructor(e,t){this.router=e,this.authenticationService=t}canActivate(e,t){return!!this.authenticationService.currentUserValue||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)}};h.ctorParameters=()=>[{type:d.F0},{type:u.$h}],h=(0,a.gn)([(0,s.GSi)({providedIn:"root"})],h);var m=r(40205),v=r(5304);let g=class{constructor(e){this.authenticationService=e}intercept(e,t){return t.handle(e).pipe((0,v.K)(e=>{var t;console.log(e),401===e.status&&(this.authenticationService.logout(),location.reload(!0));const r=(null===(t=e.error)||void 0===t?void 0:t.errorMessage)||e.statusText;return(0,m._)(r)}))}};g.ctorParameters=()=>[{type:u.$h}],g=(0,a.gn)([(0,s.GSi)()],g);var b=r(25917),f=r(19773),S=r(25037),_=r(71289),U=r(31560);const y=[{id:1,email:"test",password:"test"}];let w=class{intercept(e,t){const{url:r,method:s,headers:i,body:a}=e;return(0,b.of)(null).pipe((0,f.zg)(function(){switch(!0){case r.endsWith("/users/authenticate")&&"POST"===s:return function(){const{username:e,password:t}=a,r=y.find(r=>r.email===e&&r.password===t);return r?n({id:r.id,username:r.email,token:"fake-jwt-token"}):function(e){return(0,m._)({error:{message:e}})}("Username or password is incorrect")}();case r.endsWith("/users")&&"GET"===s:return"Bearer fake-jwt-token"===i.get("Authorization")?n(y):(0,m._)({status:401,error:{message:"Unauthorised"}});default:return t.handle(e)}})).pipe((0,S.i)()).pipe((0,_.g)(500)).pipe((0,U.D)());function n(e){return(0,b.of)(new p.Zn({status:200,body:e}))}}};w=(0,a.gn)([(0,s.GSi)()],w);p.TP;var N=r(92340);let I=class{constructor(e){this.authenticationService=e}intercept(e,t){const r=this.authenticationService.currentUserValue,s=r&&r.token,i=e.url.startsWith(N.N.apiUrl);return s&&i&&(e=e.clone({setHeaders:{Authorization:`Bearer ${r.token}`}})),t.handle(e)}};I.ctorParameters=()=>[{type:u.$h}],I=(0,a.gn)([(0,s.GSi)()],I);var $=r(76033),x=r(70721),k=r(90665),P=r(93104),D=r(70705),F=r(4207),A=r(20187),M=r(90593),C=r(67495);let z=class{constructor(){this.src=this.fallback=""}onError(){this.src=this.fallback}};z.ctorParameters=()=>[],z.propDecorators={src:[{type:s.IIB},{type:s.pfw,args:["src"]}],fallback:[{type:s.IIB}],onError:[{type:s.L6J,args:["error"]}]},z=(0,a.gn)([(0,s.Xek)({selector:"img[fallback]"})],z);var q=r(19279),B=r(83211);let E=class{constructor(e,t,r){this.router=e,this.iconSet=t,this.RootService=r,t.icons=Object.assign({},q.z)}ngOnInit(){this.router.events.subscribe(e=>{e instanceof d.m2&&window.scrollTo(0,0)})}};E.ctorParameters=()=>[{type:d.F0},{type:$.uk},{type:B.i}],E=(0,a.gn)([(0,s.wA2)({selector:"body",template:"<router-outlet></router-outlet>",providers:[$.uk]})],E);const T=[];var L=r(33013);let G=class{constructor(e,t,r,s,i,a){this.RootService=e,this.messageService=t,this.router=r,this.authenticationService=s,this.module=i,this.user=a,this.sidebarMinimized=!0,this.navItems=T}ngOnInit(){this.user.userData=JSON.parse(localStorage.getItem("currentUser"))}ngAfterViewInit(){this.module.getAllModuleByuserrole(this.user.userData.rol).subscribe(e=>{1==e.status?(this.messageService.add({severity:"success",summary:e.message,detail:""}),this.navItems=this.unflatten(e.results),console.log(this.navItems)):this.messageService.add({severity:"success",summary:"Error:",detail:e.errorMessage})},e=>{this.messageService.add({severity:"success",summary:e,detail:""})})}unflatten(e){var t,r,s={},i=[];for(r=0;r<e.length;r+=1)s[e[r].id]=r,1==e[r].parent?e[r].children=[]:e[r].linkProps={queryParams:{ModuleID:e[r].id}};for(r=0;r<e.length;r+=1)0!==(t=e[r]).parentId?e[s[t.parentId]].children.push(t):i.push(t);return i.sort(function(e,t){return e.sortId-t.sortId}),i}toggleMinimize(e){this.sidebarMinimized=e}logout(){this.authenticationService.logout()}Setting(){this.router.navigate(["masterwindow/settings"])}};G.ctorParameters=()=>[{type:B.i},{type:L.ez},{type:d.F0},{type:u.$h},{type:u.vq},{type:u.KD}],G=(0,a.gn)([(0,s.wA2)({selector:"app-dashboard",template:'\x3c!-- changed profileData in navbarBrandFull --\x3e\r\n<app-header\r\n  [navbarBrandRouterLink]="[\'/dashboard\']"\r\n  [fixed]="true"\r\n  [navbarBrandFull]="{src: \'assets/img/brand/itzLogo.png\', width: 89, height: 25, alt: \'Logo\'}"\r\n  [navbarBrandMinimized]="{src: \'assets/img/avatars/6.jpg\', width: 30, height: 30, alt: \'Logo\'}"\r\n  [sidebarToggler]="\'lg\'"\r\n  [asideMenuToggler]="\'lg\'">\r\n  <ul class="nav navbar-nav d-md-down-none">\r\n    <li class="nav-item px-3">\r\n      <a class="nav-link" [routerLink]="[\'/dashboard\']">Dashboard</a>\r\n    </li>\r\n  </ul>\r\n  <ul class="nav navbar-nav ml-auto">\r\n    <li class="nav-item d-md-down-none">\r\n      <a class="nav-link" href="#"><i class="icon-bell"></i><span class="badge badge-pill badge-danger">0</span></a>\r\n    </li>\r\n\r\n    <li class="nav-item dropdown" dropdown placement="bottom right">\r\n      <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle (click)="false">\r\n        <img src="assets/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"/>\r\n      </a>\r\n      <div class="dropdown-menu dropdown-menu-right"  aria-labelledby="simple-dropdown">\r\n        <div class="dropdown-header text-center"><strong>Account</strong></div>\r\n          <a *ngIf="this.authenticationService.currentUserValue?.rol == 1" class="dropdown-item"  [routerLink]="[\'/masterwindow/settings\']" href="#"><i class="fa fa-wrench"></i> Setting</a>\r\n          <a class="dropdown-item" (click)="logout()" href="#"><i class="fa fa-lock"></i> Logout</a>\r\n        </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class="app-body">\r\n  <app-sidebar #appSidebar [fixed]="true"  [display]="\'lg\'" [minimized]="sidebarMinimized" (minimizedChange)="toggleMinimize($event)">\r\n    <app-sidebar-nav  [navItems]="navItems" [perfectScrollbar] [disabled]="appSidebar.minimized"></app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  \x3c!-- Main content --\x3e\r\n  <main class="main">\r\n    \x3c!-- Breadcrumb --\x3e\r\n    \x3c!-- breaking change \'cui-breadcrumb\' --\x3e\r\n    <cui-breadcrumb>\r\n      \x3c!-- Breadcrumb Menu--\x3e\r\n      <li class="breadcrumb-menu d-md-down-none">\r\n        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">\r\n          <a class="btn" href="#"><i class="icon-speech"></i></a>\r\n        </div>\r\n      </li>\r\n    </cui-breadcrumb>\r\n    <div class="container-fluid">\r\n      <router-outlet ></router-outlet>\r\n    </div>\x3c!-- /.container-fluid --\x3e\r\n  </main>\r\n  <app-aside [fixed]="true" [display]="false" [ngClass]="\'test\'">\r\n\r\n  </app-aside>\r\n</div>\r\n\x3c!--<app-footer>\r\n\r\n</app-footer>--\x3e\r\n\x3c!--<p-toast position="top-center"></p-toast>--\x3e\r\n\r\n<ng-http-loader></ng-http-loader>\r\n',providers:[L.ez]})],G);let R=class{constructor(){}};R.ctorParameters=()=>[],R=(0,a.gn)([(0,s.wA2)({template:'<div class="app flex-row align-items-center">\r\n  <div class="container">\r\n    <div class="row justify-content-center">\r\n      <div class="col-md-6">\r\n        <div class="clearfix">\r\n          <h1 class="float-left display-3 mr-4">404</h1>\r\n          <h4 class="pt-3">Oops! You\'re lost.</h4>\r\n          <p class="text-muted">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class="input-prepend input-group">\r\n          <div class="input-group-prepend">\r\n            <span class="input-group-text"><i class="fa fa-search"></i></span>\r\n          </div>\r\n          <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">\r\n          <span class="input-group-append">\r\n            <button class="btn btn-info" type="button">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'})],R);let O=class{constructor(){}};O.ctorParameters=()=>[],O=(0,a.gn)([(0,s.wA2)({template:'<div class="app flex-row align-items-center">\r\n  <div class="container">\r\n    <div class="row justify-content-center">\r\n      <div class="col-md-6">\r\n        <div class="clearfix">\r\n          <h1 class="float-left display-3 mr-4">500</h1>\r\n          <h4 class="pt-3">Houston, we have a problem!</h4>\r\n          <p class="text-muted">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class="input-prepend input-group">\r\n          <div class="input-group-prepend">\r\n            <span class="input-group-text"><i class="fa fa-search"></i></span>\r\n          </div>\r\n          <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">\r\n          <span class="input-group-append">\r\n            <button class="btn btn-info" type="button">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'})],O);var j=r(28049);let V=class{constructor(e,t,r,s,i,a){this.formBuilder=e,this.route=t,this.router=r,this.authenticationService=s,this.messageService=i,this.webhook=a,this.loading=!1,this.submitted=!1,this.returnUrl="/dashboard",this.error="",this.authenticationService.currentUserValue&&this.router.navigate(["/dashboard"])}ngOnInit(){this.loginForm=this.formBuilder.group({userId:["",k.kI.required],password:["",k.kI.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||""}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||(this.error="",this.loading=!0,this.authenticationService.login(this.f.userId.value,this.f.password.value).pipe((0,j.P)()).subscribe(e=>{if(1==e.status){localStorage.removeItem("errorCount");var t=this.returnUrl.split("?ModuleID=");console.log(t),this.router.navigate([t[0]],{queryParams:{ModuleID:t[1]}})}else{this.error=e.data,this.messageService.add({severity:"error",summary:"Login Failed",detail:this.error}),this.loading=!1;var r=localStorage.getItem("errorCount");r=1*r+1,localStorage.setItem("errorCount",r)}},e=>{this.error=e,this.messageService.add({severity:"error",summary:"Login Failed",detail:this.error}),this.loading=!1;var t=localStorage.getItem("errorCount");t=1*t+1,localStorage.setItem("errorCount",t)}))}};V.ctorParameters=()=>[{type:k.qu},{type:d.gz},{type:d.F0},{type:u.$h},{type:L.ez},{type:u.tn}],V=(0,a.gn)([(0,s.wA2)({selector:"app-dashboard",template:'<div class="app-body">\r\n  <main class="main d-flex align-items-center">\r\n    <div class="container">\r\n      <div class="row">\r\n        <div class="col-md-8 mx-auto">\r\n          <div class="card-group">\r\n            <div class="card p-4">\r\n              <div class="card-body">\r\n                <form [formGroup]="loginForm">\r\n                  <h1>Login</h1>\r\n                  <p class="text-muted">Sign In to your account</p>\r\n                  <p style="color: red;">{{error}}</p>\r\n                  <div class="input-group mb-3">\r\n                    <div class="input-group-prepend">\r\n                      <span class="input-group-text"><i class="icon-user"></i></span>\r\n                    </div>\r\n                    <input type="text" class="form-control" formControlName="userId" [ngClass]="{ \'is-invalid\': submitted && f.userId.errors }" placeholder="Username" autocomplete="username" required>\r\n                    <div *ngIf="submitted && f.userId.errors" class="invalid-feedback">\r\n                      <div *ngIf="f.userId.errors.required">Email is required</div>\r\n                  </div>\r\n                  </div>\r\n                  <div class="input-group mb-4">\r\n                    <div class="input-group-prepend">\r\n                      <span class="input-group-text"><i class="icon-lock"></i></span>\r\n                    </div>\r\n                    <input type="password" class="form-control" formControlName="password" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" placeholder="Password" autocomplete="current-password" required>\r\n                    <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\r\n                      <div *ngIf="f.password.errors.required">Password is required</div>\r\n                  </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div class="col-6">\r\n                      <button type="button" (click)="onSubmit()" class="btn btn-primary px-4">Login</button>\r\n                      <div *ngIf="error" class="alert alert-danger mt-3 mb-0">{{error}}</div>\r\n                    </div>\r\n                    <div class="col-6 text-right">\r\n                      <button type="button" class="btn btn-link px-0">Forgot password?</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n\x3c!--<p-toast position="top-center"></p-toast>--\x3e',providers:[L.ez]})],V);let J=class{constructor(){}};J.ctorParameters=()=>[],J=(0,a.gn)([(0,s.wA2)({selector:"app-dashboard",template:'<div class="app-body">\r\n  <main class="main d-flex align-items-center">\r\n    <div class="container">\r\n      <div class="row">\r\n        <div class="col-md-6 mx-auto">\r\n          <div class="card mx-4">\r\n            <div class="card-body p-4">\r\n              <form>\r\n                <h1>Register</h1>\r\n                <p class="text-muted">Create your account</p>\r\n                <div class="input-group mb-3">\r\n                  <div class="input-group-prepend">\r\n                    <span class="input-group-text"><i class="icon-user"></i></span>\r\n                  </div>\r\n                  <input type="text" class="form-control" placeholder="Username" autocomplete="username" required>\r\n                </div>\r\n                <div class="input-group mb-3">\r\n                  <div class="input-group-prepend">\r\n                    <span class="input-group-text">@</span>\r\n                  </div>\r\n                  <input type="text" class="form-control" placeholder="Email" autocomplete="email" required>\r\n                </div>\r\n                <div class="input-group mb-3">\r\n                  <div class="input-group-prepend">\r\n                    <span class="input-group-text"><i class="icon-lock"></i></span>\r\n                  </div>\r\n                  <input type="password" class="form-control" placeholder="Password" autocomplete="new-password" required>\r\n                </div>\r\n                <div class="input-group mb-4">\r\n                  <div class="input-group-prepend">\r\n                    <span class="input-group-text"><i class="icon-lock"></i></span>\r\n                  </div>\r\n                  <input type="password" class="form-control" placeholder="Repeat password" autocomplete="new-password" required>\r\n                </div>\r\n                <button type="button" class="btn btn-block btn-success">Create Account</button>\r\n              </form>\r\n            </div>\r\n            <div class="card-footer p-4">\r\n              <div class="row">\r\n                <div class="col-6">\r\n                  <button class="btn btn-block btn-facebook" type="button"><span>facebook</span></button>\r\n                </div>\r\n                <div class="col-6">\r\n                  <button class="btn btn-block btn-twitter" type="button"><span>twitter</span></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n'})],J);var W=r(30606);const K=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"login",component:V},{path:"",component:G,canActivate:[h],data:{title:"Home"},children:[{path:"dashboard",loadChildren:()=>Promise.all([r.e("default-src_app_containers_form_form_component_ts-src_app_primengcomp_primengcomp_module_ts"),r.e("default-src_app_containers_datatable_datatable_component_ts"),r.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-src_app_views_rolepermiss-d31b8f"),r.e("src_app_views_dashboard_dashboard_module_ts")]).then(r.bind(r,2068)).then(e=>e.DashboardModule)},{path:"formbuilder",loadChildren:()=>Promise.all([r.e("default-src_app_containers_form_form_component_ts-src_app_primengcomp_primengcomp_module_ts"),r.e("src_app_views_formbuilder_formbuilder_module_ts")]).then(r.bind(r,80820)).then(e=>e.FormbuilderModule)},{path:"tablebuilder",loadChildren:()=>Promise.all([r.e("default-src_app_containers_form_form_component_ts-src_app_primengcomp_primengcomp_module_ts"),r.e("default-src_app_containers_datatable_datatable_component_ts"),r.e("src_app_views_tablebuilder_tablebuilder_module_ts")]).then(r.bind(r,42344)).then(e=>e.TablebuilderModule)},{path:"masterwindow",loadChildren:()=>Promise.all([r.e("default-src_app_containers_form_form_component_ts-src_app_primengcomp_primengcomp_module_ts"),r.e("default-src_app_containers_datatable_datatable_component_ts"),r.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js-src_app_views_rolepermiss-d31b8f"),r.e("src_app_views_masterwindow_masterwindow_module_ts")]).then(r.bind(r,81362)).then(e=>e.MasterwindowModule)}]},{path:"**",component:R}];let X=class{};X=(0,a.gn)([(0,s.LVF)({imports:[d.Bz.forRoot(K,{relativeLinkResolution:"legacy"})],exports:[d.Bz]})],X);var H=r(29536);const Q=[G];let Z=class{};Z=(0,a.gn)([(0,s.LVF)({imports:[n.b2,l.PW,X,W.kI,W.so.forRoot(),W.JM,W.k3,k.UX,F.hJ,A.KZ,P.Z_,D.L$,M.bQ.forRoot({animation:150}),k.u5,W.el,c.Xd,$.QX,p.JF,x.Yi,p.JF,C.wc.forRoot(),H.O,$.Eb.forRoot()],declarations:[E,...Q,R,O,V,J,z],providers:[{provide:"UserService",useExisting:u.KD},{provide:"FormAndTableService",useExisting:u.vq},{provide:"ModuleService",useExisting:u.cA},{provide:"RolePermissionService",useExisting:u.rR},{provide:"UserRoleMasterService",useExisting:u.xe},{provide:"ProfileSettingService",useExisting:u.Bf},{provide:"FamilyHeadDetailsService",useExisting:u.gD},{provide:"FamilyMemberDetailsService",useExisting:u.gA},{provide:"SubscriptionEntryService",useExisting:u.Qr},{provide:p.TP,useClass:I,multi:!0},{provide:p.TP,useClass:g,multi:!0},{provide:o.S$,useClass:o.Do},$.uk],bootstrap:[E]})],Z),N.N.production&&(0,s.G48)(),(0,i.y)().bootstrapModule(Z,{useJit:!0,preserveWhitespaces:!0}).catch(e=>console.log(e))}},function(e){"use strict";e.O(0,["vendor"],function(){return t=8320,e(e.s=t);var t});e.O()}]);
//# sourceMappingURL=main-es2015.js.map