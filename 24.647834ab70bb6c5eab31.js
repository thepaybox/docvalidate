(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{pjs3:function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),i=function(){return function(){}}(),o=n("pMnS"),r=n("oBZk"),s=n("ZZ/e"),u=n("Ip0R"),a=n("mrSG"),c=n("KzJN"),p=n("cXWO"),d=n("+9Pp"),h=n("KE9Z"),b=n("oMq/"),g=n("8ArQ"),f=n("kHVi"),v=n("sOmj"),m=n("F8q/"),y=n("48Oy"),w=function(){function e(e,t,n,l,i,o,r,s,u,a,c,p,d){this.storage=e,this.changellyCalls=t,this.blue011issue=n,this.invoiceservice=l,this.termsuserservice=i,this.kycService=o,this.recordService=r,this.route=s,this.pagerService=u,this.modalController=a,this.logger=c,this.alertController=p,this.blue011consume=d,this.whichdash="testnet"==g.a.network?"tDASH":"DASH",this.templatescreen="true",this.purpose="",this.invoiceaddress="",this.invoicedmessages=[],this.invoices=[],this.pagedinvoices=[],this.pager={},this.network=g.a.network,this.whichsegment="invoice",this.useraccount={termsagreed:"no"},this.loggedinuser={uid:"",displayName:"",photoURL:"",phoneNumber:"",email:"",emailVerified:""},this.defaultinvoice={id:"",templatenumber:""},this.invoicesetting={id:"",format:"default",invoiceemail:"",invoicephone:"",invoicemessage:"",invoicenumber:"",invoiceamount:"",invoiceunit:"",dashprice:"",dashamount:"",stdmessage:"",templatenumber:"",templatetype:"",businesstitle:"",contactemail:"",contactphone:"",receiveaddress:"",senderaddress:"",contactterms:"",contactaddress:""},this.foredit=!1,this.loadaccount(),this.loadinvoices()}return e.prototype.getdefinv=function(){var e=this;this.invoiceservice.getdefaultinvtemplate().then(function(t){t&&(e.defaultinvoice=JSON.parse(t))})},e.prototype.editsetting=function(){this.foredit=!0},e.prototype.clearsetting=function(){this.initinvoice(),this.foredit=!1},e.prototype.defaulttemplate=function(e){var t=this;this.invoiceservice.webdefaultinvtemplate(e).then(function(e){t.storage.set(g.a.storageuniq+"defaulttemplate",JSON.stringify(e)),t.getdefaultsetting()},function(e){t.presentAlert("","","Error default setting.")})},e.prototype.getdefaultsetting=function(){var e=this;this.invoiceservice.webgetdefaultinvtemplate({}).then(function(t){e.defaultinvoice=t,e.storage.set(g.a.storageuniq+"defaulttemplate",JSON.stringify(t))},function(t){e.presentAlert("","","Error default setting.")})},e.prototype.defaultsetting=function(){var e=this;this.invoiceservice.webdefaultinvtemplate(this.invoicesetting).then(function(t){e.getdefaultsetting(),e.storage.set(g.a.storageuniq+"defaulttemplate",JSON.stringify(t))},function(t){e.presentAlert("","","Error default setting.")})},e.prototype.createsetting=function(){this.initinvoice(),this.foredit=!0},e.prototype.initinvoice=function(){this.invoicesetting={id:"",format:"default",invoiceemail:"",invoicephone:"",invoicemessage:"",invoicenumber:"",invoiceamount:"",invoiceunit:"",dashprice:"",dashamount:"",templatenumber:"",templatetype:"",businesstitle:"",contactemail:"",stdmessage:"",contactphone:"",receiveaddress:"",senderaddress:"",contactterms:"",contactaddress:""}},e.prototype.saveinvoice=function(){return a.b(this,void 0,void 0,function(){var e=this;return a.e(this,function(t){return this.foredit=!1,this.invoiceservice.webcreateinvtemplate(this.invoicesetting).then(function(e){},function(t){e.presentAlert("","","Error saving."),e.initinvoice()}),[2]})})},e.prototype.getaccount=function(){return a.b(this,void 0,void 0,function(){var e,t=this;return a.e(this,function(n){switch(n.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=n.sent(),""==this.loggedinuser.uid?(this.presentAlert("Message","You have not loggedin","Go to login screen"),[2]):(this.termsuserservice.getaccount({googleid:this.loggedinuser.uid}).then(function(e){t.logger.info(e),e&&(t.useraccount=e,t.storage.set(g.a.storageuniq+"useraccount",JSON.stringify(t.useraccount)).then(function(e){t.termsuserservice.reflectuseraccount()}),t.storage.set(g.a.storageuniq+"token","WebKey "+t.useraccount.token))},function(e){if(e._body){var n;try{n=JSON.parse(e._body)}catch(l){}n&&n.response?t.presentAlert("Accept terms",n.response.message,g.a.err.W1233.code):t.presentAlert("","","Error connecting.")}else t.presentAlert("","","Error reading account. ")}),[2])}})})},e.prototype.assigninvoiceaddress=function(){this.invoiceaddress=this.walletaddress},e.prototype.loadinvoice=function(e){this.invoicesetting=e,this.foredit=!1,this.templatescreen="false"},e.prototype.deleteinvoice=function(e){var t=this;this.invoiceservice.webdeleteinvoice(e).then(function(e){t.loadinvoices()}).catch(function(e){})},e.prototype.deletesetting=function(){var e=this;this.invoiceservice.webdeleteinvtemplate(this.invoicesetting).then(function(t){e.loadinvoices()}).catch(function(e){})},e.prototype.nullify=function(){this.loggedinuser={uid:"",displayName:"",photoURL:"",phoneNumber:"",email:"",emailVerified:""}},e.prototype.loadaccount=function(){return a.b(this,void 0,void 0,function(){var e;return a.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.termsuserservice.getuseraccount()];case 1:return e.useraccount=t.sent(),[2]}})})},e.prototype.loadinvoices=function(){var e=this;this.invoiceservice.webgetuserinvoices({}).then(function(t){e.invoices=t||[],e.setPage(1),e.templatescreen="true"}).catch(function(t){e.useraccount.kycid?e.templatescreen="true":e.presentAlert("Message","You have not loggedin","Go to login screen")})},e.prototype.loaduser=function(){return a.b(this,void 0,void 0,function(){var e;return a.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=t.sent(),[2]}})})},e.prototype.goToBarcodeScan=function(){},e.prototype.copyaddress=function(){},e.prototype.pastecontract=function(){},e.prototype.pastepin=function(){},e.prototype.ngOnInit=function(){this.loaduser(),this.loadkycdata(),this.loadaccount(),this.transacted={txid:"",amount:"",fromaddress:"",toaddress:""},this.revertible={id:"",message:"",pin:"",address:"",email:"",target:"",kycstatus:"",network:"",type:"BLUE011"},this.walletbalance={address:"",balance:0,balanceSat:0,unconfirmedBalance:0,unconfirmedBalanceSat:0},this.forreverse()},e.prototype.forreverse=function(){var e=this;this.storage.get(g.a.storageuniq+"forreverse").then(function(t){t&&(e.revertible.message=t.message,e.revertible.pin=t.pin,e.storage.set(g.a.storageuniq+"forreverse",null))})},e.prototype.loadkycdata=function(){var e=this;this.storage.get(g.a.storageuniq+"kycstatus").then(function(t){t&&(e.kycstatus=t)})},e.prototype.presentAlert=function(e,t,n){return a.b(this,void 0,void 0,function(){var l,i=this;return a.e(this,function(o){switch(o.label){case 0:return[4,this.alertController.create({header:e,subHeader:t,message:n,buttons:["OK"]})];case 1:return[4,(l=o.sent()).present()];case 2:return o.sent(),setTimeout(function(){return a.b(i,void 0,void 0,function(){return a.e(this,function(e){switch(e.label){case 0:return[4,l.dismiss()];case 1:return e.sent(),[2]}})})},g.a.alertdelay),[2]}})})},e.prototype.ionViewWillEnter=function(){this.loaduser(),this.getaccount(),this.forreverse();var e=this.route.snapshot.paramMap.get("contract"),t=this.route.snapshot.paramMap.get("pin");e&&t?(this.revertible.message=this.decryptcontract(e,"pinforuse"),this.revertible.pin=t,this.presentAlert("","","Accept funds from escrow")):e&&(this.revertible.message=this.decryptcontract(e,"pinforuse"),this.presentAlert("","","Enter PIN and accept funds")),this.loadinvoicedmessages()},e.prototype.decryptcontract=function(e,t){try{return this.changellyCalls.decryptcontract(e,t)}catch(n){return this.presentAlert("","","Invalid data "+g.a.err.W1224.code),null}},e.prototype.wiftoaddress=function(){"testnet"==this.network?this.walletaddress=dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.testnet).toString():"livenet"==this.network?this.walletaddress=dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.livenet).toString():this.presentAlert("","","Invalid network "+g.a.err.W1223.code)},e.prototype.loadwalletwif=function(){var e=this;this.storage.get(g.a.storageuniq+"walletwif").then(function(t){t?(e.walletwif=t,e.wiftoaddress(),e.loadwalletbalance()):e.presentAlert("","","Set your wallet before use "+g.a.err.W1222.code)})},e.prototype.consumemessage=function(){return a.b(this,void 0,void 0,function(){return a.e(this,function(e){return[2]})})},e.prototype.getwalletbalance=function(){var e=this;this.walletaddress?this.blue011consume.getBalance(this.walletaddress,this.network).then(function(t){null!=t?(e.walletbalance=t,e.savewalletbalance(e.walletbalance)):e.presentAlert("","","Balance check failed  "+g.a.err.W1220.code)},function(t){e.presentAlert("Get balance failed","Error",g.a.err.W1220.code)}):this.presentAlert("","","Address field empty "+g.a.err.W1220.code)},e.prototype.refresh=function(){this.loadinvoices()},e.prototype.loadinvoicedmessages=function(){var e=this;this.blue011consume.getinvoicedmessages().then(function(t){null!=t&&(e.invoicedmessages=t)},function(t){e.presentAlert("","",t)})},e.prototype.clearall=function(){this.blue011consume.deleteallmessage(),this.presentAlert("","","Cleared")},e.prototype.scanqrcode=function(){},e.prototype.loadwalletbalance=function(){return a.b(this,void 0,void 0,function(){var e;return a.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.termsuserservice.getwalletbalance()];case 1:return e.walletbalance=t.sent(),[2]}})})},e.prototype.savewalletbalance=function(e){var t=this;this.storage.set(g.a.storageuniq+"walletbalance",e).then(function(e){t.termsuserservice.reflectwalletbalance()})},e.prototype.dynamicopen=function(e){var t,n;t=e,(n=window.open("","_blank","top=0,left=0,height=50%,width=auto")).document.open(),n.document.write("\n    "+t+"\n\n      "),n.window.print(),n.window.close(),n.document.close()},e.prototype.setPage=function(e){e<1||e>this.pager.totalPages||(this.pager=this.pagerService.getPager(this.invoices.length,e,5),this.pagedinvoices=this.invoices.slice(this.pager.startIndex,this.pager.endIndex+1))},e}(),k=n("iw74"),x=n("ZYCi"),A=l.nb({encapsulation:0,styles:[["div[_ngcontent-%COMP%]{font-size:.875em}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:20px}"]],data:{}});function P(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.setPage(e.context.$implicit)&&l),l},r.M,r.d)),l.ob(1,49152,null,0,s.k,[l.h,l.k],{disabled:[0,"disabled"]},null),(e()(),l.Fb(2,0,[""," "]))],function(e,t){e(t,1,0,!(t.component.pager.currentPage===t.context.$implicit))},function(e,t){e(t,2,0,t.context.$implicit)})}function O(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,14,"div",[],null,null,null,null,null)),(e()(),l.pb(1,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.setPage(1)&&l),l},r.M,r.d)),l.ob(2,49152,null,0,s.k,[l.h,l.k],{disabled:[0,"disabled"]},null),(e()(),l.Fb(-1,0,["First "])),(e()(),l.pb(4,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(e,t,n){var l=!0,i=e.component;return"click"===t&&(l=!1!==i.setPage(i.pager.currentPage-1)&&l),l},r.M,r.d)),l.ob(5,49152,null,0,s.k,[l.h,l.k],{disabled:[0,"disabled"]},null),(e()(),l.Fb(-1,0,["Previous "])),(e()(),l.gb(16777216,null,null,1,null,P)),l.ob(8,278528,null,0,u.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(e()(),l.pb(9,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(e,t,n){var l=!0,i=e.component;return"click"===t&&(l=!1!==i.setPage(i.pager.currentPage+1)&&l),l},r.M,r.d)),l.ob(10,49152,null,0,s.k,[l.h,l.k],{disabled:[0,"disabled"]},null),(e()(),l.Fb(-1,0,["Next "])),(e()(),l.pb(12,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(e,t,n){var l=!0,i=e.component;return"click"===t&&(l=!1!==i.setPage(i.pager.totalPages)&&l),l},r.M,r.d)),l.ob(13,49152,null,0,s.k,[l.h,l.k],{disabled:[0,"disabled"]},null),(e()(),l.Fb(-1,0,["Last "]))],function(e,t){var n=t.component;e(t,2,0,1===n.pager.currentPage),e(t,5,0,1===n.pager.currentPage),e(t,8,0,n.pager.pages),e(t,10,0,n.pager.currentPage===n.pager.totalPages),e(t,13,0,n.pager.currentPage===n.pager.totalPages)},null)}function S(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,3,"ion-item",[],null,null,null,r.bb,r.r)),l.ob(1,49152,null,0,s.H,[l.h,l.k],null,null),(e()(),l.gb(16777216,null,0,1,null,O)),l.ob(3,16384,null,0,u.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],function(e,t){var n=t.component;e(t,3,0,n.pager.pages&&n.pager.pages.length>0)},null)}function F(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,2,"ion-item",[],null,null,null,r.bb,r.r)),l.ob(1,49152,null,0,s.H,[l.h,l.k],null,null),(e()(),l.Fb(-1,0,[" No invoices "]))],null,null)}function N(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,11,"ion-item",[],null,null,null,r.bb,r.r)),l.ob(1,49152,null,0,s.H,[l.h,l.k],null,null),(e()(),l.pb(2,0,null,0,9,"ion-label",[["text-wrap",""]],null,null,null,r.cb,r.t)),l.ob(3,49152,null,0,s.N,[l.h,l.k],null,null),(e()(),l.pb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(e()(),l.Fb(5,null,[" Orderid: "," "])),(e()(),l.pb(6,0,null,0,1,"h3",[],null,null,null,null,null)),(e()(),l.Fb(7,null,[" Amount: "," "," "])),(e()(),l.pb(8,0,null,0,1,"h3",[],null,null,null,null,null)),(e()(),l.Fb(9,null,[" Status : "," "])),(e()(),l.pb(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.Fb(11,null,[" Description: "," "]))],null,function(e,t){e(t,5,0,t.context.$implicit.orderId),e(t,7,0,t.context.$implicit.txnAmount,t.context.$implicit.currency),e(t,9,0,t.context.$implicit.resultStatus),e(t,11,0,t.context.$implicit.details)})}function I(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.X,r.o)),l.ob(1,49152,null,0,s.B,[l.h,l.k],null,null),(e()(),l.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.rb,r.I)),l.ob(3,49152,null,0,s.Bb,[l.h,l.k],null,null),(e()(),l.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.N,r.e)),l.ob(5,49152,null,0,s.l,[l.h,l.k],null,null),(e()(),l.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.fb,r.x)),l.ob(7,49152,null,0,s.R,[l.h,l.k],null,null),(e()(),l.pb(8,0,null,0,2,"ion-label",[],null,null,null,r.cb,r.t)),l.ob(9,49152,null,0,s.N,[l.h,l.k],null,null),(e()(),l.Fb(-1,0,[" Invoices "])),(e()(),l.pb(11,0,null,null,14,"ion-content",[],null,null,null,r.U,r.l)),l.ob(12,49152,null,0,s.u,[l.h,l.k],null,null),(e()(),l.pb(13,0,null,0,4,"ion-item",[],null,null,null,r.bb,r.r)),l.ob(14,49152,null,0,s.H,[l.h,l.k],null,null),(e()(),l.pb(15,0,null,0,2,"ion-button",[["slot","end"]],null,[[null,"click"]],function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.refresh()&&l),l},r.M,r.d)),l.ob(16,49152,null,0,s.k,[l.h,l.k],null,null),(e()(),l.Fb(-1,0,[" Refresh "])),(e()(),l.gb(16777216,null,0,1,null,S)),l.ob(19,16384,null,0,u.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(e()(),l.pb(20,0,null,0,5,"ion-list",[],null,null,null,r.eb,r.u)),l.ob(21,49152,null,0,s.O,[l.h,l.k],null,null),(e()(),l.gb(16777216,null,0,1,null,F)),l.ob(23,16384,null,0,u.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(e()(),l.gb(16777216,null,0,1,null,N)),l.ob(25,278528,null,0,u.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(e,t){var n=t.component;e(t,19,0,!n.pagedinvoices),e(t,23,0,!n.pagedinvoices||0==n.pagedinvoices.length),e(t,25,0,n.pagedinvoices)},null)}function M(e){return l.Hb(0,[(e()(),l.pb(0,0,null,null,1,"app-tab1",[],null,null,null,I,A)),l.ob(1,114688,null,0,w,[k.b,c.a,h.a,b.a,f.a,v.a,p.a,x.a,y.a,s.Gb,m.a,s.a,d.a],null,null)],function(e,t){e(t,1,0)},null)}var q=l.lb("app-tab1",w,M,{},{},[]),H=n("gIcY"),C=n("n0MC");n.d(t,"Tab1PageModuleNgFactory",function(){return W});var W=l.mb(i,[],function(e){return l.wb([l.xb(512,l.j,l.bb,[[8,[o.a,q]],[3,l.j],l.x]),l.xb(4608,u.l,u.k,[l.u,[2,u.s]]),l.xb(4608,s.b,s.b,[l.z,l.g]),l.xb(4608,s.Gb,s.Gb,[s.b,l.j,l.q]),l.xb(4608,s.Kb,s.Kb,[s.b,l.j,l.q]),l.xb(4608,H.o,H.o,[]),l.xb(1073742336,u.b,u.b,[]),l.xb(1073742336,s.Db,s.Db,[]),l.xb(1073742336,C.a,C.a,[]),l.xb(1073742336,H.m,H.m,[]),l.xb(1073742336,H.d,H.d,[]),l.xb(1073742336,x.p,x.p,[[2,x.v],[2,x.m]]),l.xb(1073742336,i,i,[]),l.xb(1024,x.k,function(){return[[{path:"",component:w}]]},[])])})}}]);