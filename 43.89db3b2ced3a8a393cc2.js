(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"8emo":function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){return function(){}}(),i=e("pMnS"),o=e("oBZk"),r=e("ZZ/e"),s=e("gIcY"),a=e("Ip0R"),c=e("mrSG"),b=e("KzJN"),d=e("cXWO"),p=e("+9Pp"),h=e("KE9Z"),g=e("oMq/"),v=e("8ArQ"),f=e("kHVi"),m=e("sOmj"),k=e("F8q/"),y=e("48Oy"),w=function(){function l(l,n,e,t,u,i,o,r,s,a,c,b,d){this.storage=l,this.changellyCalls=n,this.blue011issue=e,this.invoiceservice=t,this.termsuserservice=u,this.kycService=i,this.recordService=o,this.route=r,this.pagerService=s,this.modalController=a,this.logger=c,this.alertController=b,this.blue011consume=d,this.whichdash="testnet"==v.a.network?"tDASH":"DASH",this.templatescreen="true",this.purpose="",this.invoiceaddress="",this.invoicedmessages=[],this.invoices=[],this.pagedinvoices=[],this.pager={},this.network=v.a.network,this.whichsegment="invoice",this.useraccount={termsagreed:"no"},this.loggedinuser={uid:"",displayName:"",photoURL:"",phoneNumber:"",email:"",emailVerified:""},this.defaultinvoice={id:"",templatenumber:""},this.invoicesetting={id:"",format:"default",invoiceemail:"",invoicephone:"",invoicemessage:"",invoicenumber:"",invoiceamount:"",invoiceunit:"",dashprice:"",dashamount:"",stdmessage:"",templatenumber:"",templatetype:"",businesstitle:"",contactemail:"",contactphone:"",receiveaddress:"",senderaddress:"",contactterms:"",contactaddress:""},this.foredit=!1,this.loadaccount(),this.loadinvoices(),this.getdefaultsetting(),this.getdefinv()}return l.prototype.getdefinv=function(){var l=this;this.invoiceservice.getdefaultinvtemplate().then(function(n){n&&(l.defaultinvoice=JSON.parse(n))})},l.prototype.editsetting=function(){this.foredit=!0},l.prototype.clearsetting=function(){this.initinvoice(),this.foredit=!1},l.prototype.defaulttemplate=function(l){var n=this;this.invoiceservice.webdefaultinvtemplate(l).then(function(l){n.storage.set(v.a.storageuniq+"defaulttemplate",JSON.stringify(l)),n.getdefaultsetting()},function(l){n.presentAlert("","","Error default setting.")})},l.prototype.getdefaultsetting=function(){var l=this;this.invoiceservice.webgetdefaultinvtemplate({}).then(function(n){l.defaultinvoice=n,l.storage.set(v.a.storageuniq+"defaulttemplate",JSON.stringify(n))},function(n){l.presentAlert("","","Error default setting.")})},l.prototype.defaultsetting=function(){var l=this;this.invoiceservice.webdefaultinvtemplate(this.invoicesetting).then(function(n){l.getdefaultsetting(),l.storage.set(v.a.storageuniq+"defaulttemplate",JSON.stringify(n))},function(n){l.presentAlert("","","Error default setting.")})},l.prototype.createsetting=function(){this.initinvoice(),this.foredit=!0},l.prototype.initinvoice=function(){this.invoicesetting={id:"",format:"default",invoiceemail:"",invoicephone:"",invoicemessage:"",invoicenumber:"",invoiceamount:"",invoiceunit:"",dashprice:"",dashamount:"",templatenumber:"",templatetype:"",businesstitle:"",contactemail:"",stdmessage:"",contactphone:"",receiveaddress:"",senderaddress:"",contactterms:"",contactaddress:""}},l.prototype.saveinvoice=function(){return c.b(this,void 0,void 0,function(){var l=this;return c.e(this,function(n){return this.foredit=!1,this.invoiceservice.webcreateinvtemplate(this.invoicesetting).then(function(l){},function(n){l.presentAlert("","","Error saving."),l.initinvoice()}),[2]})})},l.prototype.getaccount=function(){return c.b(this,void 0,void 0,function(){var l,n=this;return c.e(this,function(e){switch(e.label){case 0:return l=this,[4,this.termsuserservice.getloggedinuser()];case 1:return l.loggedinuser=e.sent(),""==this.loggedinuser.uid?[2]:(this.termsuserservice.getaccount({googleid:this.loggedinuser.uid}).then(function(l){n.logger.info(l),l&&(n.useraccount=l,n.storage.set(v.a.storageuniq+"useraccount",JSON.stringify(n.useraccount)).then(function(l){n.termsuserservice.reflectuseraccount()}),n.storage.set(v.a.storageuniq+"token","WebKey "+n.useraccount.token))},function(l){if(l._body){var e;try{e=JSON.parse(l._body)}catch(t){}e&&e.response?n.presentAlert("Accept terms",e.response.message,v.a.err.W1233.code):n.presentAlert("","","Error connecting.")}else n.presentAlert("","","Error reading account. ")}),[2])}})})},l.prototype.assigninvoiceaddress=function(){this.invoiceaddress=this.walletaddress},l.prototype.loadinvoice=function(l){this.invoicesetting=l,this.foredit=!1,this.templatescreen="false"},l.prototype.deleteinvoice=function(l){var n=this;this.invoiceservice.webdeleteinvoice(l).then(function(l){n.loadinvoices()}).catch(function(l){})},l.prototype.deletesetting=function(){var l=this;this.invoiceservice.webdeleteinvtemplate(this.invoicesetting).then(function(n){l.loadinvoices()}).catch(function(l){})},l.prototype.nullify=function(){this.loggedinuser={uid:"",displayName:"",photoURL:"",phoneNumber:"",email:"",emailVerified:""}},l.prototype.loadaccount=function(){return c.b(this,void 0,void 0,function(){var l;return c.e(this,function(n){switch(n.label){case 0:return l=this,[4,this.termsuserservice.getuseraccount()];case 1:return l.useraccount=n.sent(),[2]}})})},l.prototype.loadinvoices=function(){var l=this;this.invoiceservice.webgetinvoices({templatetype:"Docblockchain"}).then(function(n){l.invoices=n||[],l.setPage(1),l.templatescreen="true"}).catch(function(n){l.templatescreen="true"})},l.prototype.loaduser=function(){return c.b(this,void 0,void 0,function(){var l;return c.e(this,function(n){switch(n.label){case 0:return l=this,[4,this.termsuserservice.getloggedinuser()];case 1:return l.loggedinuser=n.sent(),[2]}})})},l.prototype.goToBarcodeScan=function(){},l.prototype.copyaddress=function(){},l.prototype.pastecontract=function(){},l.prototype.pastepin=function(){},l.prototype.ngOnInit=function(){this.loaduser(),this.loadkycdata(),this.loadaccount(),this.transacted={txid:"",amount:"",fromaddress:"",toaddress:""},this.revertible={id:"",message:"",pin:"",address:"",email:"",target:"",kycstatus:"",network:"",type:"BLUE011"},this.walletbalance={address:"",balance:0,balanceSat:0,unconfirmedBalance:0,unconfirmedBalanceSat:0},this.loadwalletwif(),this.loadwalletbalance(),this.forreverse()},l.prototype.forreverse=function(){var l=this;this.storage.get(v.a.storageuniq+"forreverse").then(function(n){n&&(l.revertible.message=n.message,l.revertible.pin=n.pin,l.storage.set(v.a.storageuniq+"forreverse",null))})},l.prototype.loadkycdata=function(){var l=this;this.storage.get(v.a.storageuniq+"kycstatus").then(function(n){n&&(l.kycstatus=n)})},l.prototype.presentAlert=function(l,n,e){return c.b(this,void 0,void 0,function(){var t,u=this;return c.e(this,function(i){switch(i.label){case 0:return[4,this.alertController.create({header:l,subHeader:n,message:e,buttons:["OK"]})];case 1:return[4,(t=i.sent()).present()];case 2:return i.sent(),setTimeout(function(){return c.b(u,void 0,void 0,function(){return c.e(this,function(l){switch(l.label){case 0:return[4,t.dismiss()];case 1:return l.sent(),[2]}})})},v.a.alertdelay),[2]}})})},l.prototype.ionViewWillEnter=function(){this.loadwalletwif(),this.loaduser(),this.loadkycdata(),this.getaccount(),this.loadwalletbalance(),this.forreverse();var l=this.route.snapshot.paramMap.get("contract"),n=this.route.snapshot.paramMap.get("pin");l&&n?(this.revertible.message=this.decryptcontract(l,"pinforuse"),this.revertible.pin=n,this.presentAlert("","","Accept funds from escrow")):l&&(this.revertible.message=this.decryptcontract(l,"pinforuse"),this.presentAlert("","","Enter PIN and accept funds")),this.loadinvoicedmessages()},l.prototype.decryptcontract=function(l,n){try{return this.changellyCalls.decryptcontract(l,n)}catch(e){return this.presentAlert("","","Invalid data "+v.a.err.W1224.code),null}},l.prototype.wiftoaddress=function(){"testnet"==this.network?this.walletaddress=dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.testnet).toString():"livenet"==this.network?this.walletaddress=dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.livenet).toString():this.presentAlert("","","Invalid network "+v.a.err.W1223.code)},l.prototype.loadwalletwif=function(){var l=this;this.storage.get(v.a.storageuniq+"walletwif").then(function(n){n?(l.walletwif=n,l.wiftoaddress(),l.loadwalletbalance()):l.presentAlert("","","Set your wallet before use "+v.a.err.W1222.code)})},l.prototype.consumemessage=function(){return c.b(this,void 0,void 0,function(){return c.e(this,function(l){return[2]})})},l.prototype.getwalletbalance=function(){var l=this;this.walletaddress?this.blue011consume.getBalance(this.walletaddress,this.network).then(function(n){null!=n?(l.walletbalance=n,l.savewalletbalance(l.walletbalance)):l.presentAlert("","","Balance check failed  "+v.a.err.W1220.code)},function(n){l.presentAlert("Get balance failed","Error",v.a.err.W1220.code)}):this.presentAlert("","","Address field empty "+v.a.err.W1220.code)},l.prototype.refresh=function(){this.loadinvoices(),this.presentAlert("","","Refreshed")},l.prototype.loadinvoicedmessages=function(){var l=this;this.blue011consume.getinvoicedmessages().then(function(n){null!=n&&(l.invoicedmessages=n)},function(n){l.presentAlert("","",n)})},l.prototype.clearall=function(){this.blue011consume.deleteallmessage(),this.presentAlert("","","Cleared")},l.prototype.scanqrcode=function(){},l.prototype.loadwalletbalance=function(){return c.b(this,void 0,void 0,function(){var l;return c.e(this,function(n){switch(n.label){case 0:return l=this,[4,this.termsuserservice.getwalletbalance()];case 1:return l.walletbalance=n.sent(),[2]}})})},l.prototype.savewalletbalance=function(l){var n=this;this.storage.set(v.a.storageuniq+"walletbalance",l).then(function(l){n.termsuserservice.reflectwalletbalance()})},l.prototype.dynamicopen=function(l){var n,e;n=l,(e=window.open("","_blank","top=0,left=0,height=50%,width=auto")).document.open(),e.document.write("\n    "+n+"\n\n      "),e.window.print(),e.window.close(),e.document.close()},l.prototype.setPage=function(l){l<1||l>this.pager.totalPages||(this.pager=this.pagerService.getPager(this.invoices.length,l,5),this.pagedinvoices=this.invoices.slice(this.pager.startIndex,this.pager.endIndex+1))},l}(),C=e("iw74"),x=e("ZYCi"),O=t.nb({encapsulation:0,styles:[["div[_ngcontent-%COMP%]{font-size:.875em}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:20px}"]],data:{}});function I(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.editsetting()&&t),t},o.O,o.d)),t.ob(1,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Edit "]))],null,null)}function z(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deletesetting()&&t),t},o.O,o.d)),t.ob(1,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Delete "]))],null,null)}function F(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,86,"ion-card",[["class","datainput"]],null,null,null,o.U,o.f)),t.ob(1,49152,null,0,r.n,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,o.R,o.h)),t.ob(3,49152,null,0,r.p,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.S,o.i)),t.ob(5,49152,null,0,r.q,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["Invoice setting "])),(l()(),t.pb(7,0,null,0,14,"ion-item",[],null,null,null,o.db,o.r)),t.ob(8,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,2,"ion-badge",[["slot","start"]],null,null,null,o.N,o.c)),t.ob(10,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["1"])),(l()(),t.pb(12,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.eb,o.t)),t.ob(13,49152,null,0,r.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Fb(-1,0,[" Business title "])),(l()(),t.pb(15,0,null,0,6,"ion-input",[["placeholder","Business title "],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.zb(l,17)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.zb(l,17)._handleInputEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.invoicesetting.businesstitle=e)&&u),u},o.bb,o.q)),t.ob(16,49152,null,0,r.H,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.ob(17,16384,null,0,r.Ob,[t.k],null,null),t.Cb(1024,null,s.g,function(l){return[l]},[r.Ob]),t.ob(19,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,s.h,null,[s.l]),t.ob(21,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.pb(22,0,null,0,14,"ion-item",[],null,null,null,o.db,o.r)),t.ob(23,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(24,0,null,0,2,"ion-badge",[["slot","start"]],null,null,null,o.N,o.c)),t.ob(25,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["1.1"])),(l()(),t.pb(27,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.eb,o.t)),t.ob(28,49152,null,0,r.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Fb(-1,0,[" Contact email "])),(l()(),t.pb(30,0,null,0,6,"ion-input",[["placeholder","Contact email "],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.zb(l,32)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.zb(l,32)._handleInputEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.invoicesetting.contactemail=e)&&u),u},o.bb,o.q)),t.ob(31,49152,null,0,r.H,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.ob(32,16384,null,0,r.Ob,[t.k],null,null),t.Cb(1024,null,s.g,function(l){return[l]},[r.Ob]),t.ob(34,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,s.h,null,[s.l]),t.ob(36,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.pb(37,0,null,0,14,"ion-item",[],null,null,null,o.db,o.r)),t.ob(38,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(39,0,null,0,2,"ion-badge",[["slot","start"]],null,null,null,o.N,o.c)),t.ob(40,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["1.2"])),(l()(),t.pb(42,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.eb,o.t)),t.ob(43,49152,null,0,r.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Fb(-1,0,[" Contact phone "])),(l()(),t.pb(45,0,null,0,6,"ion-input",[["placeholder","Contact phone "],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.zb(l,47)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.zb(l,47)._handleInputEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.invoicesetting.contactphone=e)&&u),u},o.bb,o.q)),t.ob(46,49152,null,0,r.H,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.ob(47,16384,null,0,r.Ob,[t.k],null,null),t.Cb(1024,null,s.g,function(l){return[l]},[r.Ob]),t.ob(49,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,s.h,null,[s.l]),t.ob(51,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.pb(52,0,null,0,14,"ion-item",[],null,null,null,o.db,o.r)),t.ob(53,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(54,0,null,0,2,"ion-badge",[["slot","start"]],null,null,null,o.N,o.c)),t.ob(55,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["1.3"])),(l()(),t.pb(57,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.eb,o.t)),t.ob(58,49152,null,0,r.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Fb(-1,0,[" Address "])),(l()(),t.pb(60,0,null,0,6,"ion-textarea",[["class","ion-text-wrap"],["placeholder","Address to receive "],["rows","2"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.zb(l,62)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.zb(l,62)._handleInputEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.invoicesetting.receiveaddress=e)&&u),u},o.tb,o.I)),t.ob(61,49152,null,0,r.yb,[t.h,t.k],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null),t.ob(62,16384,null,0,r.Ob,[t.k],null,null),t.Cb(1024,null,s.g,function(l){return[l]},[r.Ob]),t.ob(64,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,s.h,null,[s.l]),t.ob(66,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.pb(67,0,null,0,14,"ion-item",[],null,null,null,o.db,o.r)),t.ob(68,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(69,0,null,0,2,"ion-badge",[["slot","start"]],null,null,null,o.N,o.c)),t.ob(70,49152,null,0,r.k,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["1.4"])),(l()(),t.pb(72,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.eb,o.t)),t.ob(73,49152,null,0,r.O,[t.h,t.k],{position:[0,"position"]},null),(l()(),t.Fb(-1,0,[" Terms "])),(l()(),t.pb(75,0,null,0,6,"ion-input",[["placeholder","Terms "],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.zb(l,77)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.zb(l,77)._handleInputEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.invoicesetting.terms=e)&&u),u},o.bb,o.q)),t.ob(76,49152,null,0,r.H,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.ob(77,16384,null,0,r.Ob,[t.k],null,null),t.Cb(1024,null,s.g,function(l){return[l]},[r.Ob]),t.ob(79,671744,null,0,s.l,[[8,null],[8,null],[8,null],[6,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,s.h,null,[s.l]),t.ob(81,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),t.pb(82,0,null,0,4,"ion-item",[],null,null,null,o.db,o.r)),t.ob(83,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(84,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.saveinvoice()&&t),t},o.O,o.d)),t.ob(85,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Save "]))],function(l,n){var e=n.component;l(n,13,0,"stacked"),l(n,16,0,"Business title ","text"),l(n,19,0,e.invoicesetting.businesstitle),l(n,28,0,"stacked"),l(n,31,0,"Contact email ","text"),l(n,34,0,e.invoicesetting.contactemail),l(n,43,0,"stacked"),l(n,46,0,"Contact phone ","text"),l(n,49,0,e.invoicesetting.contactphone),l(n,58,0,"stacked"),l(n,61,0,"Address to receive ","2"),l(n,64,0,e.invoicesetting.receiveaddress),l(n,73,0,"stacked"),l(n,76,0,"Terms ","text"),l(n,79,0,e.invoicesetting.terms)},function(l,n){l(n,15,0,t.zb(n,21).ngClassUntouched,t.zb(n,21).ngClassTouched,t.zb(n,21).ngClassPristine,t.zb(n,21).ngClassDirty,t.zb(n,21).ngClassValid,t.zb(n,21).ngClassInvalid,t.zb(n,21).ngClassPending),l(n,30,0,t.zb(n,36).ngClassUntouched,t.zb(n,36).ngClassTouched,t.zb(n,36).ngClassPristine,t.zb(n,36).ngClassDirty,t.zb(n,36).ngClassValid,t.zb(n,36).ngClassInvalid,t.zb(n,36).ngClassPending),l(n,45,0,t.zb(n,51).ngClassUntouched,t.zb(n,51).ngClassTouched,t.zb(n,51).ngClassPristine,t.zb(n,51).ngClassDirty,t.zb(n,51).ngClassValid,t.zb(n,51).ngClassInvalid,t.zb(n,51).ngClassPending),l(n,60,0,t.zb(n,66).ngClassUntouched,t.zb(n,66).ngClassTouched,t.zb(n,66).ngClassPristine,t.zb(n,66).ngClassDirty,t.zb(n,66).ngClassValid,t.zb(n,66).ngClassInvalid,t.zb(n,66).ngClassPending),l(n,75,0,t.zb(n,81).ngClassUntouched,t.zb(n,81).ngClassTouched,t.zb(n,81).ngClassPristine,t.zb(n,81).ngClassDirty,t.zb(n,81).ngClassValid,t.zb(n,81).ngClassInvalid,t.zb(n,81).ngClassPending)})}function P(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,77,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"ion-item",[],null,null,null,o.db,o.r)),t.ob(2,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(3,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.loadinvoices()&&t),t},o.O,o.d)),t.ob(4,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Load invoices "])),(l()(),t.pb(6,0,null,null,69,"ion-card",[["class","datainput"]],null,null,null,o.U,o.f)),t.ob(7,49152,null,0,r.n,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,61,"ion-grid",[],null,null,null,o.Y,o.n)),t.ob(9,49152,null,0,r.B,[t.h,t.k],null,null),(l()(),t.pb(10,0,null,0,15,"ion-row",[],null,null,null,o.kb,o.z)),t.ob(11,49152,null,0,r.jb,[t.h,t.k],null,null),(l()(),t.pb(12,0,null,0,13,"ion-col",[],null,null,null,o.V,o.k)),t.ob(13,49152,null,0,r.u,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,11,"ion-item",[],null,null,null,o.db,o.r)),t.ob(15,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(16,0,null,0,9,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.eb,o.t)),t.ob(17,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.pb(18,0,null,0,3,"ion-text",[["color","primary"]],null,null,null,o.sb,o.H)),t.ob(19,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(20,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Title "])),(l()(),t.pb(22,0,null,0,3,"ion-text",[["color","secondary"]],null,null,null,o.sb,o.H)),t.ob(23,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(24,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(25,null,[" "," "])),(l()(),t.pb(26,0,null,0,28,"ion-row",[],null,null,null,o.kb,o.z)),t.ob(27,49152,null,0,r.jb,[t.h,t.k],null,null),(l()(),t.pb(28,0,null,0,12,"ion-col",[],null,null,null,o.V,o.k)),t.ob(29,49152,null,0,r.u,[t.h,t.k],null,null),(l()(),t.pb(30,0,null,0,10,"ion-item",[],null,null,null,o.db,o.r)),t.ob(31,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(32,0,null,0,8,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.eb,o.t)),t.ob(33,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.pb(34,0,null,0,3,"ion-text",[["color","primary"]],null,null,null,o.sb,o.H)),t.ob(35,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(36,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Recieve address "])),(l()(),t.pb(38,0,null,0,2,"ion-text",[["color","secondary"]],null,null,null,o.sb,o.H)),t.ob(39,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Fb(40,0,[" "," "])),(l()(),t.pb(41,0,null,0,13,"ion-col",[],null,null,null,o.V,o.k)),t.ob(42,49152,null,0,r.u,[t.h,t.k],null,null),(l()(),t.pb(43,0,null,0,11,"ion-item",[],null,null,null,o.db,o.r)),t.ob(44,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(45,0,null,0,9,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.eb,o.t)),t.ob(46,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.pb(47,0,null,0,1,"ion-text",[["color","primary"]],null,null,null,o.sb,o.H)),t.ob(48,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(49,0,null,0,5,"ion-text",[["color","secondary"]],null,null,null,o.sb,o.H)),t.ob(50,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(51,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(52,null,[" Email: "," "])),(l()(),t.pb(53,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(54,null,[" Phone : "," "])),(l()(),t.pb(55,0,null,0,14,"ion-row",[],null,null,null,o.kb,o.z)),t.ob(56,49152,null,0,r.jb,[t.h,t.k],null,null),(l()(),t.pb(57,0,null,0,12,"ion-col",[],null,null,null,o.V,o.k)),t.ob(58,49152,null,0,r.u,[t.h,t.k],null,null),(l()(),t.pb(59,0,null,0,10,"ion-item",[],null,null,null,o.db,o.r)),t.ob(60,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(61,0,null,0,8,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.eb,o.t)),t.ob(62,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.pb(63,0,null,0,3,"ion-text",[["color","primary"]],null,null,null,o.sb,o.H)),t.ob(64,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(65,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Terms "])),(l()(),t.pb(67,0,null,0,2,"ion-text",[["color","secondary"]],null,null,null,o.sb,o.H)),t.ob(68,49152,null,0,r.xb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Fb(69,0,[" "," "])),(l()(),t.pb(70,0,null,0,5,"ion-item",[],null,null,null,o.db,o.r)),t.ob(71,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,I)),t.ob(73,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,z)),t.ob(75,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,F)),t.ob(77,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,19,0,"primary"),l(n,23,0,"secondary"),l(n,35,0,"primary"),l(n,39,0,"secondary"),l(n,48,0,"primary"),l(n,50,0,"secondary"),l(n,64,0,"primary"),l(n,68,0,"secondary"),l(n,73,0,e.invoicesetting.templatenumber),l(n,75,0,e.invoicesetting.templatenumber),l(n,77,0,e.foredit)},function(l,n){var e=n.component;l(n,25,0,e.invoicesetting.businesstitle),l(n,40,0,e.invoicesetting.receiveaddress),l(n,52,0,e.invoicesetting.contactemail),l(n,54,0,e.invoicesetting.contactphone),l(n,69,0,e.invoicesetting.terms)})}function A(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setPage(l.context.$implicit)&&t),t},o.O,o.d)),t.ob(1,49152,null,0,r.l,[t.h,t.k],{disabled:[0,"disabled"]},null),(l()(),t.Fb(2,0,[""," "]))],function(l,n){l(n,1,0,!(n.component.pager.currentPage===n.context.$implicit))},function(l,n){l(n,2,0,n.context.$implicit)})}function H(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setPage(1)&&t),t},o.O,o.d)),t.ob(2,49152,null,0,r.l,[t.h,t.k],{disabled:[0,"disabled"]},null),(l()(),t.Fb(-1,0,["First "])),(l()(),t.pb(4,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.setPage(u.pager.currentPage-1)&&t),t},o.O,o.d)),t.ob(5,49152,null,0,r.l,[t.h,t.k],{disabled:[0,"disabled"]},null),(l()(),t.Fb(-1,0,["Previous "])),(l()(),t.gb(16777216,null,null,1,null,A)),t.ob(8,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(9,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.setPage(u.pager.currentPage+1)&&t),t},o.O,o.d)),t.ob(10,49152,null,0,r.l,[t.h,t.k],{disabled:[0,"disabled"]},null),(l()(),t.Fb(-1,0,["Next "])),(l()(),t.pb(12,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.setPage(u.pager.totalPages)&&t),t},o.O,o.d)),t.ob(13,49152,null,0,r.l,[t.h,t.k],{disabled:[0,"disabled"]},null),(l()(),t.Fb(-1,0,["Last "]))],function(l,n){var e=n.component;l(n,2,0,1===e.pager.currentPage),l(n,5,0,1===e.pager.currentPage),l(n,8,0,e.pager.pages),l(n,10,0,e.pager.currentPage===e.pager.totalPages),l(n,13,0,e.pager.currentPage===e.pager.totalPages)},null)}function M(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-item",[],null,null,null,o.db,o.r)),t.ob(1,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" No invoices "]))],null,null)}function B(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,19,"ion-item",[],null,null,null,o.db,o.r)),t.ob(1,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,11,"ion-label",[["text-wrap",""]],null,null,null,o.eb,o.t)),t.ob(3,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(5,null,[" No: "," "])),(l()(),t.pb(6,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(7,null,[" Title: "," "])),(l()(),t.pb(8,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Fb(9,null,[" Record no: "," "])),(l()(),t.pb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(11,null,[" Email: "," "])),(l()(),t.pb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(13,null,[" Message: "," "])),(l()(),t.pb(14,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.loadinvoice(l.context.$implicit)&&t),t},o.O,o.d)),t.ob(15,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Select "])),(l()(),t.pb(17,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteinvoice(l.context.$implicit)&&t),t},o.O,o.d)),t.ob(18,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Delete "]))],null,function(l,n){l(n,5,0,n.context.$implicit.invoicenumber),l(n,7,0,n.context.$implicit.invoicedata.receivername),l(n,9,0,n.context.$implicit.userrecordno),l(n,11,0,n.context.$implicit.invoicedata.tomail),l(n,13,0,n.context.$implicit.invoicedata.invoicemessage)})}function E(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"ion-item",[],null,null,null,o.db,o.r)),t.ob(2,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.pb(3,0,null,0,2,"ion-button",[["slot","end"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.refresh()&&t),t},o.O,o.d)),t.ob(4,49152,null,0,r.l,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Refresh "])),(l()(),t.pb(6,0,null,null,3,"ion-item",[],null,null,null,o.db,o.r)),t.ob(7,49152,null,0,r.I,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,H)),t.ob(9,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(10,0,null,null,5,"ion-list",[],null,null,null,o.gb,o.u)),t.ob(11,49152,null,0,r.P,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,M)),t.ob(13,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,B)),t.ob(15,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,9,0,e.pager.pages&&e.pager.pages.length>0),l(n,13,0,0==e.invoices.length),l(n,15,0,e.pagedinvoices)},null)}function S(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,o.Z,o.o)),t.ob(1,49152,null,0,r.C,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.vb,o.K)),t.ob(3,49152,null,0,r.Cb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.P,o.e)),t.ob(5,49152,null,0,r.m,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.hb,o.x)),t.ob(7,49152,null,0,r.S,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,2,"ion-label",[],null,null,null,o.eb,o.t)),t.ob(9,49152,null,0,r.O,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Validation Invoices "])),(l()(),t.pb(11,0,null,null,5,"ion-content",[],null,null,null,o.W,o.l)),t.ob(12,49152,null,0,r.v,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,P)),t.ob(14,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,E)),t.ob(16,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,14,0,"false"==e.templatescreen),l(n,16,0,"true"==e.templatescreen)},null)}function N(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-tab1",[],null,null,null,S,O)),t.ob(1,114688,null,0,w,[C.b,b.a,h.a,g.a,f.a,m.a,d.a,x.a,y.a,r.Hb,k.a,r.b,p.a],null,null)],function(l,n){l(n,1,0)},null)}var q=t.lb("app-tab1",w,N,{},{},[]),_=e("n0MC");e.d(n,"Tab1PageModuleNgFactory",function(){return L});var L=t.mb(u,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[i.a,q]],[3,t.j],t.x]),t.xb(4608,a.l,a.k,[t.u,[2,a.s]]),t.xb(4608,r.c,r.c,[t.z,t.g]),t.xb(4608,r.Hb,r.Hb,[r.c,t.j,t.q]),t.xb(4608,r.Lb,r.Lb,[r.c,t.j,t.q]),t.xb(4608,s.p,s.p,[]),t.xb(1073742336,a.b,a.b,[]),t.xb(1073742336,r.Eb,r.Eb,[]),t.xb(1073742336,_.a,_.a,[]),t.xb(1073742336,s.n,s.n,[]),t.xb(1073742336,s.d,s.d,[]),t.xb(1073742336,x.p,x.p,[[2,x.v],[2,x.m]]),t.xb(1073742336,u,u,[]),t.xb(1024,x.k,function(){return[[{path:"",component:w}]]},[])])})}}]);