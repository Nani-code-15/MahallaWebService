!function(){function e(e,r){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){a&&(e=a);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){s=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_coreui_coreui_free_angular_admin_template=self.webpackChunk_coreui_coreui_free_angular_admin_template||[]).push([["src_app_views_masterwindow_masterwindow_module_ts"],{81362:function(t,a,n){"use strict";n.r(a),n.d(a,{MasterwindowModule:function(){return C}});var o=n(64762),l=n(33018),s=n(38583),c=n(90665),d=n(9517),u=n(15574),m=n(75298),p=n(96255),h=n(73495),f=n(33013),v=n(91841),b=n(49457),g=function(){function t(e,a,i,n,o,l,s,c,d){r(this,t),this.route=e,this.router=a,this.tableandform=i,this.cd=n,this.user=o,this.injector=l,this.messageService=s,this.confirmationService=c,this.http=d,this.files=[],this.ModuleID="",this.displayDialog=!1,this.displayDialog2=!1,this.displayView=!1,this.virtualdata=[],this.FormData=[],this.formValue=[],this.headersRow=[],this.csvRecordsArray=[],this.tableSchema=[],this.OtherOptions={},this.viewData={},this.router.routeReuseStrategy.shouldReuseRoute=function(){return!1}}return i(t,[{key:"onclickEvent",value:function(e){switch(e.action){case"edit":this.editdata(e);break;case"view":this.viewdata(e);break;case"delete":this.deletedata(e);break;case"deleteSelected":this.deleteSelected(e.data);break;default:this.onclickEventFormWithNoAction(e)}}},{key:"viewdata",value:function(e){this.displayView=!0,this.viewData=null==e?void 0:e.data,console.log(this.tableSchema)}},{key:"deleteSelected",value:function(e){var t=this;this.confirmationService.confirm({message:"Are you sure that you want to perform this action?",accept:function(){t.service.deleteSelected(e).subscribe(function(e){t.table.refreshTable(),t.Form.resetForm(),t.messageService.add({severity:"success",summary:e.message,detail:""}),t.cd.detectChanges()},function(e){})}})}},{key:"createNew",value:function(){this.Form.resetForm(),this.Form.editScreen=!1,this.displayDialog=!0}},{key:"editdata",value:function(e){this.displayDialog=!0,this.Form.editScreen=!0,this.Form.updateAngForm(e.data)}},{key:"deletedata",value:function(e){var t=this;this.confirmationService.confirm({message:"Are you sure that you want to perform this action?",accept:function(){t.onclickEventForm(e)}})}},{key:"showDialogMaximized",value:function(e){setTimeout(function(){document.getElementsByClassName("pi-window-maximize")[0],setTimeout(function(){},0)},0)}},{key:"ngOnInit",value:function(){var e=this;this.tableSchema.mainschema=[],this.tableSchema.buttonSchema=[],this.pageTitle=this.route.snapshot.data.title,this.ModuleID=this.route.snapshot.queryParams.ModuleID||"",""!==this.ModuleID?this.tableandform.getAllModuleById(this.ModuleID).subscribe(function(t){e.ModuleData=t.results.pageMaster,""!==e.ModuleData.options&&(e.OtherOptions=JSON.parse(e.ModuleData.options),e.tableSchema.OtherOptions=JSON.parse(e.ModuleData.options)),e.tableSchema.buttonSchema=t.results.tableButtonSchema,e.tableSchema.mainschema=t.results.tableMainSchema,e.tableSchema.roleMasterPrm=t.results.roleMasterPrm,e.tableSchema.serviceName=e.ModuleData.serviceName,!0===e.tableSchema.roleMasterPrm.read?(e.pageTitle=e.ModuleData.name,e.service=e.injector.get(e.ModuleData.serviceName),t.results.formData.forEach(function(t){var r=JSON.parse(t);e.FormData.push(r),("dropdown"==r.Fieldname||"multiselect"==r.Fieldname)&&e.Form.updateOptionbyurl(r),e.Form.updateAngForm()}),e.cd.detectChanges()):e.messageService.add({severity:"error",summary:"Error:",detail:"No Access"})},function(e){}):console.log("Error: in loading module id")}},{key:"import",value:function(){this.displayDialog2=!0,this.displayDialog=!1}},{key:"getData",value:function(){var e=this;this.service.getAll().subscribe(function(t){e.virtualdata=t.results,e.cd.detectChanges()},function(e){})}},{key:"onclickEventFormWithNoAction",value:function(e){var t=e.action;if(this.service[t]){var r=e.data;this.service[t](r)}}},{key:"onclickEventForm",value:function(e){var t,r=this,a=e.action;this.service[a]&&(t="submitform"==e.action||"delete"==e.action?e.data:e,this.service[a](t).subscribe(function(t){console.log("df",t),"submitform"==e.action&&1==t.status||"delete"==e.action&&1==t.status?(r.displayDialog=!1,r.table.refreshTable(),r.Form.resetForm(),r.messageService.add({severity:"success",summary:t.message,detail:""})):"submitform"!==e.action?(r.FormData=t,r.cd.detectChanges(),r.Form.detectChanges()):r.messageService.add({severity:"error",summary:"Error:",detail:t})},function(e){r.messageService.add({severity:"error",summary:"Errorq:",detail:e})}))}},{key:"dropped",value:function(t){var r=this;this.files=t;var a,i=e(t);try{for(i.s();!(a=i.n()).done;){var n=a.value;if(n.fileEntry.isFile)n.fileEntry.file(function(e){var t=new FileReader;t.readAsText(e),t.onload=function(){var e=t.result;r.csvRecordsArray=e.split(/\r\n|\n/),r.headersRow=r.getHeaderArray(r.csvRecordsArray),r.csvRecordsArray=r.getFullArray(r.csvRecordsArray)},t.onerror=function(){console.log("error is occured while reading file!")}});else{var o=n.fileEntry;console.log(n.relativePath,o)}}}catch(l){i.e(l)}finally{i.f()}}},{key:"getFullArray",value:function(e){e.splice(0,1);for(var t=[],r=0;r<e.length-1;r++)t.push(e[r].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));return t}},{key:"getHeaderArray",value:function(e){for(var t=this,r=e[0].split(","),a=[],i=function(e){t.FormData.forEach(function(t){t.DBColName==r[e]&&(t.csvheader=e)}),a.push({code:e,name:r[e]})},n=0;n<r.length;n++)i(n);return a}},{key:"fileOver",value:function(e){console.log(e)}},{key:"fileLeave",value:function(e){console.log(e)}},{key:"reset",value:function(){this.headersRow=[],this.csvRecordsArray=[],this.FormData.forEach(function(e){e.defaultValue=void 0,e.csvheader=void 0})}},{key:"importcsv",value:function(){var e=this;if(0!=this.csvRecordsArray.length){if(this.FormData.forEach(function(t){1!=t.Required||null!=t.csvheader||null!=t.defaultValue||e.messageService.add({severity:"error",summary:"Error:",detail:"Fill Required Field "+t.Label})}),this.service.ImportCSV){var t=[];this.csvRecordsArray.forEach(function(r){var a={};e.FormData.forEach(function(e){"submitbutton"!=e.Fieldname&&(void 0!==e.defaultValue?a[e.DBColName]=e.defaultValue:null!==e.csvheader?a[e.DBColName]=r[e.csvheader]:a[e.DBColName]=!0)}),t.push(a)}),this.service.ImportCSV(t).subscribe(function(t){1==t.status?(e.displayDialog2=!1,setTimeout(function(){e.table.refreshTable()},500),e.Form.resetForm(),e.reset(),e.FormData.forEach(function(e){e.defaultValue=void 0,e.csvheader=void 0}),e.messageService.add({severity:"success",summary:t.message,detail:""})):e.messageService.add({severity:"error",summary:"Error:",detail:t})},function(t){e.messageService.add({severity:"error",summary:"Error:",detail:t})})}}else this.messageService.add({severity:"error",summary:"Error:",detail:"Insert CSV File"})}},{key:"dowldDemoCSV",value:function(){var e=[];this.FormData.forEach(function(t){"submitbutton"!=t.Fieldname&&e.push(t.DBColName)});var t=e.join(","),r=new Blob([t],{type:"text/csv"});(0,b.saveAs)(r,"DemoCSVFile.csv")}}]),t}();g.ctorParameters=function(){return[{type:p.gz},{type:p.F0},{type:h.vq},{type:l.sBO},{type:h.KD},{type:l.zs3},{type:f.ez},{type:f.YP},{type:v.eN}]},g.propDecorators={Form:[{type:l.i9L,args:["Form",{static:!1}]}],table:[{type:l.i9L,args:["table",{static:!1}]}]},g=(0,o.gn)([(0,l.wA2)({selector:"app-masterwindow",template:'<div class="animated fadeIn">\r\n    <div class="row">\r\n      <div class="col-md-12" *ngIf="tableSchema[\'mainschema\'].length > 0 ">\r\n        <div class="card">\r\n          <div class="card-header">\r\n            {{pageTitle}}\r\n\r\n\r\n            <div class="card-header-actions" style="height: 21px;">\r\n                <button *ngIf="tableSchema[\'roleMasterPrm\'].create==true" pButton class="btn btn-block btn-primary" (click)="createNew()" label="Create New" type="button" icon="pi pi-plus" iconPos="left"></button>\r\n            </div>\r\n\r\n            \x3c!--<div class="card-header-actions" style="height: 21px;" *ngIf="this.service[\'ImportCSV\']">\r\n                <button pButton class="btn btn-block btn-primary" (click)="import()" label="Import" type="button" icon="pi pi-upload" iconPos="left"></button>\r\n            </div>--\x3e\r\n          </div>\r\n          <div class="card-body datatable">\r\n            <app-datatable #table [tableData]="virtualdata" [tableSchema]="tableSchema" (onclickEvent)="onclickEvent($event)"></app-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<p-dialog header="New {{pageTitle}}"  [(visible)]="displayDialog" [modal]="true" [style]="{width: \'80vw\'}" [maximizable]="true" [baseZIndex]="10000"\r\n    [draggable]="false" [resizable]="false">\r\n    <app-form #Form [formData]="FormData"  [type]="\'\'" (onclickEvent)="onclickEventForm($event)"></app-form>\r\n\r\n    <p-footer *ngIf="OtherOptions.ShowImport && OtherOptions.ShowImport == true">\r\n      <button pButton class="btn btn-block btn-primary float-right" (click)="import()" label="Import" type="button" icon="pi pi-upload" iconPos="left"></button>\r\n    </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header="Import {{pageTitle}}"  [(visible)]="displayDialog2" [modal]="true" [style]="{width: \'80vw\'}" [maximizable]="true" [baseZIndex]="10000"\r\n    [draggable]="false" [resizable]="false">\r\n    <ngx-file-drop *ngIf="headersRow.length == 0" dropZoneLabel="Drop CSV files here" (onFileDrop)="dropped($event)"  (onFileOver)="fileOver($event)" (onFileLeave)="fileLeave($event)" accept=".csv">\r\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector="openFileSelector">\r\n          <a href="javascript:void(0)" (click)="openFileSelector()">Drag and Drop Your CSV File Or Click Here..</a>\r\n        </ng-template>\r\n    </ngx-file-drop>\r\n    <p *ngIf="headersRow.length == 0" class="text-center"><a (click)="dowldDemoCSV()" href="javascript:void(0)">Download Demo File</a></p>\r\n\r\n    <div class="row" style="margin-top: 15px;" *ngIf="headersRow.length > 0">\r\n      <div class="col-md-12">\r\n        <h5 class="text-center">Please Select the Following Field With CSV Header</h5>\r\n        <table class="table table-bordered" style="max-width: 80vw;  margin: 0 auto;">\r\n          <tr>\r\n            <th>Heading</th>\r\n            <th>CSV Header</th>\r\n            <th>Default Value</th>\r\n          </tr>\r\n          <tr *ngFor="let item of FormData" >\r\n            <ng-container  *ngIf="item.Fieldname != \'submitbutton\'">\r\n              <th>{{item.Label}} <span *ngIf="item.Required == true">*</span></th>\r\n              <td>\r\n                <p-dropdown placeholder="Select From List" [options]="headersRow" [filter]="true" filterBy="name" [showClear]="true"  [(ngModel)]="item.csvheader" optionLabel="name" optionValue="code"></p-dropdown>\r\n              </td>\r\n              <td>\r\n                <div *ngIf="item.Fieldname !== \'dropdown\' && item.Fieldname !== \'inputswitch\'">\r\n                  <input type="text" style="width: 100%;" pInputText [(ngModel)]="item.defaultValue"/>\r\n                </div>\r\n                <div *ngIf="item.Fieldname == \'dropdown\'">\r\n                  <p-dropdown  [group]="item.group" [(ngModel)]="item.defaultValue"  [options]="item.Options"  optionLabel="{{item.optlable}}" optionValue="{{item.optCode}}" [filter]="item.filter" [showClear]="item.showclear" placeholder="Select From List"></p-dropdown>\r\n                </div>\r\n                <div *ngIf="item.Fieldname == \'inputswitch\'">\r\n                  <p-inputSwitch [(ngModel)]="item.defaultValue"></p-inputSwitch>\r\n                </div>\r\n              </td>\r\n            </ng-container >\r\n           </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n    <p-footer>\r\n      <button pButton class="btn btn-block btn-error float-right" (click)="reset()" label="Reset" type="button" icon="pi pi-replay" iconPos="left"></button>\r\n      <button pButton class="btn btn-block btn-primary float-right" (click)="importcsv()" label="Import" type="button" icon="pi pi-upload" iconPos="left"></button>\r\n    </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog header="View {{pageTitle}}"  [(visible)]="displayView" [modal]="true" [style]="{width: \'80vw\'}" [maximizable]="true" [baseZIndex]="10000"\r\n    [draggable]="false" [resizable]="false">\r\n\r\n    <table class="table table-bordered">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Value</th>\r\n      </tr>\r\n      <tr *ngFor="let item of FormData">\r\n        <ng-container  *ngIf="item.Fieldname!=\'submitbutton\'">\r\n          <th>{{item.Label}}</th>\r\n          <td *ngIf="item.Fieldname!=\'upload\'">{{viewData[item.DBColName]}}</td>\r\n          <td *ngIf="item.Fieldname==\'upload\'">\r\n            <a href="{{viewData[item.DBColName]}}" target="_blank">View</a>\r\n          </td>\r\n        </ng-container>\r\n      </tr>\r\n    </table>\r\n\r\n</p-dialog>\r\n\r\n<p-toast position="top-center"></p-toast>\r\n<p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>\r\n',providers:[f.ez,f.YP],styles:[""]})],g);var y=n(53737),F=function(){function e(t,a,i,n,o,l,s,c,d){r(this,e),this.route=t,this.router=a,this.tableandform=i,this.cd=n,this.rolepermission=o,this.ProfileSettingService=l,this.injector=s,this.messageService=c,this.confirmationService=d,this.FormData=[]}return i(e,[{key:"ngAfterViewInit",value:function(){var e=this;[{FormId:"1",FieldLable:"Text Field",Fieldname:"inputtext",icon:"fa-text-width",size:{name:"12",code:12},DBColName:"companyName",Label:"Company Name",PlaceHolder:"Company Name",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",pKeyFilter:{name:"All",code:"all"},pKeyFilterOther:"",functionName:"",Disabled:!1,ForceDisabled:!1,MaxTextLength:32},{FormId:"3",FieldLable:"Text Field",Fieldname:"inputtext",icon:"fa-text-width",size:{name:"12",code:12},DBColName:"email",Label:"Email",PlaceHolder:"Email",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",pKeyFilter:{name:"All",code:"all"},pKeyFilterOther:"",functionName:"",Disabled:!1,ForceDisabled:!1,MaxTextLength:32},{FormId:"4",FieldLable:"Text Field",Fieldname:"inputtext",icon:"fa-text-width",size:{name:"12",code:12},DBColName:"phoneNumber",Label:"PhoneNumber",PlaceHolder:"PhoneNumber",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",pKeyFilter:{name:"All",code:"all"},pKeyFilterOther:"",functionName:"",Disabled:!1,ForceDisabled:!1,MaxTextLength:32},{FormId:"5",FieldLable:"Text Field",Fieldname:"inputtext",icon:"fa-text-width",size:{name:"12",code:12},DBColName:"addressOne",Label:"AddressOne",PlaceHolder:"AddressOne",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",pKeyFilter:{name:"All",code:"all"},pKeyFilterOther:"",functionName:"",Disabled:!1,ForceDisabled:!1,MaxTextLength:32},{FormId:"6",FieldLable:"Text Field",Fieldname:"inputtext",icon:"fa-text-width",size:{name:"12",code:12},DBColName:"addressTwo",Label:"AddressTwo",PlaceHolder:"AddressTwo",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",pKeyFilter:{name:"All",code:"all"},pKeyFilterOther:"",functionName:"",Disabled:!1,ForceDisabled:!1,MaxTextLength:32},{FormId:"45",FieldLable:"upload",Fieldname:"upload",icon:"fa-cloud-upload ",size:{name:"12",code:12},DBColName:"logoSmallFile",Label:"LogoSmall",PlaceHolder:"LogoSmall",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",accept:"image/*",maxsize:"1090000",Disabled:!1,ForceDisabled:!1},{FormId:"456",FieldLable:"upload",Fieldname:"upload",icon:"fa-cloud-upload ",size:{name:"12",code:12},DBColName:"logoLargeFile",Label:"LogoLarge",PlaceHolder:"LogoLarge",ErrorTxt:"",ID:"",Class:"",Required:!1,HelpTxt:"",accept:"image/*",maxsize:"1090000",Disabled:!1,ForceDisabled:!1},{FormId:"4525",FieldLable:"Submit Button",Fieldname:"submitbutton",icon:"fa-check",size:{name:"12",code:12},Label:"Submit",LabelIcon:"pi pi-check",ID:"",Class:"float-right p-button-secondary",functionName:"submitform",Disabled:!1,ForceDisabled:!1}].forEach(function(t){var r=t;e.FormData.push(r),("dropdown"==r.Fieldname||"multiselect"==r.Fieldname)&&e.Form.updateOptionbyurl(r),e.Form.updateAngForm()})}},{key:"ngOnInit",value:function(){var e=this;this.service=this.injector.get("ProfileSettingService"),this.ProfileSettingService.getAll().subscribe(function(t){console.log(t),e.editdata(t.results)})}},{key:"editdata",value:function(e){this.Form.editScreen=!0,this.Form.updateAngForm(e)}},{key:"onclickEventForm",value:function(e){var t,r=this,a=e.action;this.service[a]&&(t="submitform"==e.action||"delete"==e.action?e.data:e,this.service[a](t).subscribe(function(t){console.log("df",t),"submitform"==e.action&&1==t.status?r.messageService.add({severity:"success",summary:t.message,detail:""}):"delete"==e.action&&1==t.status?(r.Form.resetForm(),r.messageService.add({severity:"success",summary:t.message,detail:""})):"submitform"!==e.action?(r.FormData=t,r.cd.detectChanges(),r.Form.detectChanges()):r.messageService.add({severity:"error",summary:"Error:",detail:t})},function(e){r.messageService.add({severity:"error",summary:"Errorq:",detail:e})}))}}]),e}();F.ctorParameters=function(){return[{type:p.gz},{type:p.F0},{type:h.vq},{type:l.sBO},{type:h.rR},{type:h.Bf},{type:l.zs3},{type:f.ez},{type:f.YP}]},F.propDecorators={Form:[{type:l.i9L,args:["Form",{static:!1}]}]},F=(0,o.gn)([(0,l.wA2)({selector:"app-settings",template:'<div class="animated fadeIn">\r\n  <div class="row">\r\n    <div class="col-md-12">\r\n      <div class="card">\r\n        <div class="card-header">\r\n          Settings\r\n\r\n          <div class="card-header-actions" style="height: 21px;">\r\n\r\n          </div>\r\n        </div>\r\n        <div class="card-body datatable">\r\n          <div class="pad-15">\r\n            <div class="container-fluid">\r\n              <app-form #Form [formData]="FormData"  [type]="\'\'" (onclickEvent)="onclickEventForm($event)"></app-form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n',providers:[f.ez,f.YP],styles:[""]})],F);var D=[{path:"",component:g,data:{title:"Master Window"}},{path:"rolepermission",component:y.X,data:{title:"Master Window"}},{path:"settings",component:F,data:{title:"Settings Window"}}],w=i(function e(){r(this,e)});w=(0,o.gn)([(0,l.LVF)({imports:[p.Bz.forChild(D)],exports:[p.Bz]})],w);var S,x=n(70721),k=n(93184),I=n(90593),C=S=i(function e(t){r(this,e),S.injector=t});C.ctorParameters=function(){return[{type:l.zs3}]},C=S=(0,o.gn)([(0,l.LVF)({declarations:[g,d.U,u.n,y.X,F],imports:[s.ez,w,c.UX,c.u5,m.v,x.Yi,k.m9,I.bQ],providers:[]})],C)}}])}();
//# sourceMappingURL=src_app_views_masterwindow_masterwindow_module_ts-es5.js.map