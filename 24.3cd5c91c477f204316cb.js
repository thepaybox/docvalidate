(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{LGuB:function(e,t,s){"use strict";s.r(t);var r=s("CcnG"),n=function(){return function(){}}(),i=s("pMnS"),o=s("oBZk"),l=s("ZZ/e"),a=s("Ip0R"),u=s("ZYCi"),c=s("mrSG"),d=s("+9Pp"),h=s("KE9Z"),f=s("8ArQ"),p=s("kHVi"),g=s("sOmj"),b=s("XBu5"),m=s("X87e"),v=s("F8q/"),y=s("KzJN"),w=function(){function e(e,t,s,r,n,i,o,l,a,u,c,d){this.http=e,this.blue011consume=t,this.blue011issue=s,this.alertController=r,this.termsuserservice=n,this.kycService=i,this.policyService=o,this.webuserservice=l,this.logger=a,this.changellyCalls=u,this.router=c,this.storage=d,this.whichdash="testnet"==f.a.network?"tDASH":"DASH",this.whichsegment="safety",this.address1={name:"",address:""},this.address2={name:"",address:""},this.feesdisplay={stddiscountfeesdisp:"",stdgalaxyfeesdisp:"",stdstarfeesdisp:"",stdfeesdisp:"",rvtdiscountfeesdisp:"",rvtgalaxyfeesdisp:"",rvtstarfeesdisp:"",rvtfeesdisp:"",networkfees:""},this.consumefees={networkfees:0,fixed:0,percentage:0},this.loggedinuser={uid:"",displayName:"",photoURL:"",phoneNumber:"",email:"",emailVerified:""},this.enableoverwrite=!1,this.copyofwalletkeptsafe=!1,this.wifisprotected=!1,this.knowwalletwifneededforrestore=!1,this.network=f.a.network,this.hidden=!0,this.hiddenwif="",this.useraccount={termsagreed:"no",testaddress:"",liveaddress:"",safetyconfirmation:"false"},this.nullify(),this.refresh()}return e.prototype.nullify=function(){return c.b(this,void 0,void 0,function(){var e,t=this;return c.e(this,function(s){switch(s.label){case 0:return this.loggedinuser={uid:"",displayName:"",photoURL:"",phoneNumber:"",email:"",emailVerified:""},this.walletbalance={address:"",balance:0,balanceSat:0,unconfirmedBalanceSat:0,unconfirmedBalance:0},this.loadaccount(),this.storage.get(f.a.storageuniq+"consumefees").then(function(e){e&&(t.consumefees=e)}),e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=s.sent(),[2]}})})},e.prototype.ionViewWillEnter=function(){this.refresh()},e.prototype.refresh=function(){return c.b(this,void 0,void 0,function(){var e;return c.e(this,function(t){switch(t.label){case 0:return this.loaduser(),e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=t.sent(),this.getaccount(),[2]}})})},e.prototype.ngOnInit=function(){this.refresh()},e.prototype.getconsumefees=function(){var e=this;this.blue011consume.getconsumefees({network:this.network}).then(function(t){t&&(e.consumefees={networkfees:Number(t.networkfees),fixed:Number(t.vendorfeesfixed)+Number(t.partnerfeesfixed),percentage:Number(t.vendorfeespercentage)+Number(t.partnerfeespercentage)},e.storage.set(f.a.storageuniq+"consumefees",e.consumefees))}).catch(function(e){})},e.prototype.loadaccount=function(){return c.b(this,void 0,void 0,function(){var e;return c.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.termsuserservice.getuseraccount()];case 1:return e.useraccount=t.sent(),this.useraccount.address1&&(this.address1=this.useraccount.address1),this.useraccount.address2&&(this.address2=this.useraccount.address2),this.useraccount.dashprice&&(this.setdashpriceinusd=this.useraccount.dashprice),"yes"==this.useraccount.termsagreed&&(this.feesdisplay=this.blue011issue.getdisplayfees(this.useraccount)),[2]}})})},e.prototype.loaduser=function(){return c.b(this,void 0,void 0,function(){var e;return c.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=t.sent(),[2]}})})},e.prototype.loadkycdata=function(){var e=this;this.storage.get(f.a.storageuniq+"kycdata").then(function(t){e.kycdata=t})},e.prototype.show=function(){var e=this;this.hidden=!1,setTimeout(function(){e.hidden=!0},15e3)},e.prototype.hide=function(){this.hidden=!0},e.prototype.clearwif=function(){this.walletwif=""},e.prototype.pastewif=function(){},e.prototype.createwif=function(){},e.prototype.freeze=function(){this.savewif(),this.enableoverwrite=!1},e.prototype.wiftoaddress=function(){},e.prototype.getkycdata=function(){return c.b(this,void 0,void 0,function(){var e,t=this;return c.e(this,function(s){switch(s.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=s.sent(),this.kycService.getkycdata({liveaddress:this.useraccount.defaultwallet.address,testaddress:this.useraccount.defaultwallet.address,network:this.network,paymentdata:"null",email:this.loggedinuser.email,googleid:this.loggedinuser.uid,kycid:""}).then(function(e){t.storage.set(f.a.storageuniq+"kycdata",e).then(function(e){t.loadkycdata()})}),[2]}})})},e.prototype.savewif=function(){return c.b(this,void 0,void 0,function(){return c.e(this,function(e){return[2]})})},e.prototype.getaccount=function(){return c.b(this,void 0,void 0,function(){var e,t=this;return c.e(this,function(s){switch(s.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=s.sent(),""==this.loggedinuser.uid?[2]:(this.termsuserservice.getaccount({googleid:this.loggedinuser.uid}).then(function(e){t.logger.info(e),e&&(t.useraccount=e,t.useraccount.address1&&(t.address1=t.useraccount.address1),t.useraccount.address2&&(t.address2=t.useraccount.address2),t.useraccount.dashprice&&(t.setdashpriceinusd=t.useraccount.dashprice),t.storage.set(f.a.storageuniq+"useraccount",JSON.stringify(t.useraccount)),t.storage.set(f.a.storageuniq+"token","WebKey "+t.useraccount.token),t.termsuserservice.reflectuseraccount(),t.gotohome())},function(e){if(e._body){var s;try{s=JSON.parse(e._body)}catch(r){}s&&s.response?t.presentAlert("Accept terms",s.response.message,f.a.err.W1233.code):t.presentAlert("Unable to read account","Check if you have accepted terms","Or Network may be down ")}else t.presentAlert("Unable to read account","Check if you have accepted terms","Error code: "+f.a.err.W1233.code)}),[2])}})})},e.prototype.loadoldwif=function(){},e.prototype.loadwalletwif=function(){},e.prototype.getwalletbalance=function(){var e=this;this.useraccount.defaultwallet.address?this.blue011consume.getBalance(this.useraccount.defaultwallet.address,this.network).then(function(t){null!=t?(e.walletbalance=t,e.savewalletbalance(e.walletbalance)):e.presentAlert("","","Balance query failed "+f.a.err.W1234.code)},function(t){e.presentAlert("","","Balance query failed "+f.a.err.W1234.code)}):this.presentAlert("","","Wallet address empty")},e.prototype.selfemail=function(){},e.prototype.createhelp=function(){this.presentAlert("Wallet create ","Creates random wallet. ","Create random wallet  or enter your own wallet WIF.Then click Save . ")},e.prototype.restartwallet=function(){this.presentAlert("Restart wallet "," ","For changes to take effect.")},e.prototype.termsagree=function(){this.presentAlert("Terms of Usage ","Accept terms after reading.","Accept safety terms, usage terms. ")},e.prototype.presentAlert=function(e,t,s){return c.b(this,void 0,void 0,function(){var r,n=this;return c.e(this,function(i){switch(i.label){case 0:return[4,this.alertController.create({header:e,subHeader:t,message:s,buttons:["OK"]})];case 1:return[4,(r=i.sent()).present()];case 2:return i.sent(),setTimeout(function(){return c.b(n,void 0,void 0,function(){return c.e(this,function(e){switch(e.label){case 0:return[4,r.dismiss()];case 1:return e.sent(),[2]}})})},f.a.alertdelay),[2]}})})},e.prototype.loadwalletbalance=function(){return c.b(this,void 0,void 0,function(){var e;return c.e(this,function(t){switch(t.label){case 0:return e=this,[4,this.termsuserservice.getwalletbalance()];case 1:return e.walletbalance=t.sent(),[2]}})})},e.prototype.savewalletbalance=function(e){var t=this;this.storage.set(f.a.storageuniq+"walletbalance",e).then(function(e){t.termsuserservice.reflectwalletbalance()})},e.prototype.safetyconfirmation=function(){this.copyofwalletkeptsafe&&this.wifisprotected&&this.knowwalletwifneededforrestore?(this.presentAlert("","","Updating confirmation. "),this.confirmsafety()):this.presentAlert("","","Confirm safety terms below. ")},e.prototype.gotologin=function(){this.router.navigateByUrl("/login")},e.prototype.accept=function(){return c.b(this,void 0,void 0,function(){var e,t=this;return c.e(this,function(s){switch(s.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=s.sent(),this.loggedinuser&&""!=this.loggedinuser.uid?(this.termsuserservice.createaccount({email:this.loggedinuser.email,googleid:this.loggedinuser.uid,name:this.loggedinuser.displayName,termsagreed:"yes"}).then(function(e){e&&(t.useraccount=e,t.storage.set(f.a.storageuniq+"useraccount",JSON.stringify(t.useraccount)).then(function(e){t.termsuserservice.reflectuseraccount()}),t.storage.set(f.a.storageuniq+"token","WebKey "+t.useraccount.token)),t.refresh()}).catch(function(e){t.presentAlert("","Create account failed","Error code:"+f.a.err.W1230.code)}),[2]):[2]}})})},e.prototype.setdashprice=function(){return c.b(this,void 0,void 0,function(){var e,t=this;return c.e(this,function(s){switch(s.label){case 0:return e=this,[4,this.termsuserservice.getloggedinuser()];case 1:return e.loggedinuser=s.sent(),this.loggedinuser&&""!=this.loggedinuser.uid?Number.isNaN(this.setdashpriceinusd)?(this.presentAlert("","Set valid price in numbers  ","Error code:"+f.a.err.W1230.code),[2]):(this.webuserservice.setdashprice({dashprice:this.setdashpriceinusd}).then(function(e){e&&(t.useraccount=e,t.storage.set(f.a.storageuniq+"useraccount",JSON.stringify(t.useraccount)).then(function(e){t.termsuserservice.reflectuseraccount()}),t.storage.set(f.a.storageuniq+"token","WebKey "+t.useraccount.token)),t.gotohome()}).catch(function(e){t.presentAlert("","Set dash price failed","Error code:"+f.a.err.W1230.code)}),[2]):[2]}})})},e.prototype.setdefaultaddress=function(e,t){return c.b(this,void 0,void 0,function(){var s,r,n=this;return c.e(this,function(i){switch(i.label){case 0:if(s={item:e,action:t},"setaddress1"==e&&""==this.address1.address)return this.presentAlert("","Wallet address1 not set  ","Error code:"+f.a.err.W1230.code),[2];if("setaddress2"==e&&""==this.address2.address)return this.presentAlert("","Wallet address2 not set  ","Error code:"+f.a.err.W1230.code),[2];if("setdefaultwallet"==e&&"wallet2"==t&&""==this.address2.address)return this.presentAlert("","Wallet address2 not set  ","Error code:"+f.a.err.W1230.code),[2];if("setdefaultwallet"==e&&"wallet1"==t&&""==this.address1.address)return this.presentAlert("","Wallet address1 not set  ","Error code:"+f.a.err.W1230.code),[2];if("deladdress1"==e&&!this.useraccount.address1)return this.presentAlert("","Wallet address1 not set  ","Error code:"+f.a.err.W1230.code),[2];if("deladdress2"==e&&!this.useraccount.address2)return this.presentAlert("","Wallet address1 not set  ","Error code:"+f.a.err.W1230.code),[2];if("setaddress1"==e&&""!=this.address1.address){if("testnet"==this.network){if(!dashcore.Address.isValid(this.address1.address,dashcore.Networks.testnet))return this.presentAlert("","","Invalid address "),[2]}else if(!dashcore.Address.isValid(this.address1.address,dashcore.Networks.livenet))return this.presentAlert("","","Invalid address "),[2];s.action=this.address1}if("setaddress2"==e&&""!=this.address2.address){if("testnet"==this.network){if(!dashcore.Address.isValid(this.address2.address,dashcore.Networks.testnet))return this.presentAlert("","","Invalid address "),[2]}else if(!dashcore.Address.isValid(this.address2.address,dashcore.Networks.livenet))return this.presentAlert("","","Invalid address "),[2];s.action=this.address2}if("deladdress2"==e&&this.useraccount.address2){if(this.useraccount.address2.address==this.useraccount.defaultwallet.address)return this.presentAlert("","","Default address cannot be deleted "),[2];s.action=this.address2}if("deladdress1"==e&&this.useraccount.address1){if(this.useraccount.address1.address==this.useraccount.defaultwallet.address)return this.presentAlert("","","Default address cannot be deleted "),[2];s.action=this.address1}return r=this,[4,this.termsuserservice.getloggedinuser()];case 1:return r.loggedinuser=i.sent(),this.loggedinuser&&""!=this.loggedinuser.uid?Number.isNaN(this.setdashpriceinusd)?(this.presentAlert("","Set valid price in numbers  ","Error code:"+f.a.err.W1230.code),[2]):(this.webuserservice.setdefaultaddress(s).then(function(e){e&&(n.useraccount=e),n.refresh()}).catch(function(e){n.presentAlert("","Operation failed","Error code:"+f.a.err.W1230.code)}),[2]):(this.presentAlert("Message","Login ","Go to login screen "),[2])}})})},e.prototype.confirmsafety=function(){var e=this;this.policyService.confirmsafety({}).then(function(t){e.getaccount()})},e.prototype.gotohome=function(){this.router.navigateByUrl("/docvalidate")},e.prototype.clearall=function(){this.storage.clear()},e.prototype.localsave=function(){if("testnet"==this.network){if(this.useraccount.defaultwallet.address!=this.useraccount.testaddress)return void this.presentAlert("","Test address registered not matching ","Error code:"+f.a.err.W1230.code);this.storage.set(f.a.storageuniq+"walletwif",this.walletwif),this.presentAlert("","","Saved successsfully ")}else{if(this.useraccount.defaultwallet.address!=this.useraccount.liveaddress)return void this.presentAlert("","Live address registered not matching ","Error code:"+f.a.err.W1230.code);this.storage.set(f.a.storageuniq+"walletwif",this.walletwif),this.presentAlert("","","Saved successsfully ")}},e.prototype.usdamountChanged=function(e){this.toamount=this.changellyCalls.fromFiatDash(this.toamountusd),this.toamountdash=""},e.prototype.dashamountChanged=function(e){this.toamount=this.changellyCalls.toSatoshi(this.toamountdash),this.toamountusd=""},e.prototype.gotokyc=function(){this.router.navigateByUrl("/kycpage")},e}(),k=s("sE5F"),A=s("iw74"),N=r.nb({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:20px}"]],data:{}});function W(e){return r.Hb(0,[(e()(),r.pb(0,0,null,null,18,"ion-header",[],null,null,null,o.X,o.o)),r.ob(1,49152,null,0,l.B,[r.h,r.k],null,null),(e()(),r.pb(2,0,null,0,16,"ion-toolbar",[],null,null,null,o.rb,o.I)),r.ob(3,49152,null,0,l.Bb,[r.h,r.k],null,null),(e()(),r.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.N,o.e)),r.ob(5,49152,null,0,l.l,[r.h,r.k],null,null),(e()(),r.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.fb,o.x)),r.ob(7,49152,null,0,l.R,[r.h,r.k],null,null),(e()(),r.pb(8,0,null,0,2,"ion-title",[],null,null,null,o.qb,o.H)),r.ob(9,49152,null,0,l.zb,[r.h,r.k],null,null),(e()(),r.Fb(-1,0,[" Misc "])),(e()(),r.pb(11,0,null,0,7,"ion-buttons",[["slot","secondary"]],null,null,null,o.N,o.e)),r.ob(12,49152,null,0,l.l,[r.h,r.k],null,null),(e()(),r.pb(13,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(e,t,s){var r=!0;return"click"===t&&(r=!1!==e.component.getaccount()&&r),r},o.M,o.d)),r.ob(14,49152,null,0,l.k,[r.h,r.k],{disabled:[0,"disabled"]},null),(e()(),r.Fb(-1,0,[" Refresh "])),(e()(),r.pb(16,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(e,t,s){var r=!0;return"click"===t&&(r=!1!==e.component.gotologin()&&r),r},o.M,o.d)),r.ob(17,49152,null,0,l.k,[r.h,r.k],{disabled:[0,"disabled"]},null),(e()(),r.Fb(-1,0,[" Login "])),(e()(),r.pb(19,0,null,null,23,"ion-content",[],null,null,null,o.U,o.l)),r.ob(20,49152,null,0,l.u,[r.h,r.k],null,null),(e()(),r.pb(21,0,null,0,21,"ion-card",[],null,null,null,o.S,o.f)),r.ob(22,49152,null,0,l.m,[r.h,r.k],null,null),(e()(),r.pb(23,0,null,0,19,"ion-item",[],null,null,null,o.bb,o.r)),r.ob(24,49152,null,0,l.H,[r.h,r.k],null,null),(e()(),r.pb(25,0,null,0,2,"ion-badge",[["slot","start"]],null,null,null,o.L,o.c)),r.ob(26,49152,null,0,l.j,[r.h,r.k],null,null),(e()(),r.Fb(-1,0,["1"])),(e()(),r.pb(28,0,null,0,9,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.cb,o.t)),r.ob(29,49152,null,0,l.N,[r.h,r.k],null,null),(e()(),r.pb(30,0,null,0,1,"h4",[],null,null,null,null,null)),(e()(),r.Fb(-1,null,[" By clicking \u201cAccept\u201d, "])),(e()(),r.pb(32,0,null,0,5,"p",[],null,null,null,null,null)),(e()(),r.Fb(-1,null,["\nI agree to terms and conditions in the "])),(e()(),r.pb(34,0,null,null,3,"a",[["routerLink","/termspage"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,s){var n=!0;return"click"===t&&(n=!1!==r.zb(e,35).onClick(s)&&n),"click"===t&&(n=!1!==r.zb(e,36).onClick(s.button,s.ctrlKey,s.metaKey,s.shiftKey)&&n),n},null,null)),r.ob(35,737280,null,0,l.Lb,[a.h,l.Hb,r.k,u.m,[2,u.n]],null,null),r.ob(36,671744,null,0,u.o,[u.m,u.a,a.h],{routerLink:[0,"routerLink"]},null),(e()(),r.Fb(-1,null,[" link. "])),(e()(),r.pb(38,0,null,0,4,"ion-label",[["slot","end"]],null,null,null,o.cb,o.t)),r.ob(39,49152,null,0,l.N,[r.h,r.k],null,null),(e()(),r.pb(40,0,null,0,2,"ion-button",[["color","primary"],["size","small"]],null,[[null,"click"]],function(e,t,s){var r=!0;return"click"===t&&(r=!1!==e.component.accept()&&r),r},o.M,o.d)),r.ob(41,49152,null,0,l.k,[r.h,r.k],{color:[0,"color"],disabled:[1,"disabled"],size:[2,"size"]},null),(e()(),r.Fb(-1,0,[" Accept "]))],function(e,t){var s=t.component;e(t,14,0,!s.loggedinuser),e(t,17,0,s.loggedinuser&&""!=s.loggedinuser.uid),e(t,35,0),e(t,36,0,"/termspage"),e(t,41,0,"primary",""==s.loggedinuser.uid||"yes"==s.useraccount.termsagreed,"small")},function(e,t){e(t,34,0,r.zb(t,36).target,r.zb(t,36).href)})}function x(e){return r.Hb(0,[(e()(),r.pb(0,0,null,null,1,"app-tab4",[],null,null,null,W,N)),r.ob(1,114688,null,0,w,[k.e,d.a,h.a,l.a,p.a,g.a,b.a,m.a,v.a,y.a,u.m,A.b],null,null)],function(e,t){e(t,1,0)},null)}var S=r.lb("app-tab4",w,x,{},{},[]),C=s("gIcY"),q=s("n0MC");s.d(t,"Tab4PageModuleNgFactory",function(){return E});var E=r.mb(n,[],function(e){return r.wb([r.xb(512,r.j,r.bb,[[8,[i.a,S]],[3,r.j],r.x]),r.xb(4608,a.l,a.k,[r.u,[2,a.s]]),r.xb(4608,l.b,l.b,[r.z,r.g]),r.xb(4608,l.Gb,l.Gb,[l.b,r.j,r.q]),r.xb(4608,l.Kb,l.Kb,[l.b,r.j,r.q]),r.xb(4608,C.o,C.o,[]),r.xb(1073742336,a.b,a.b,[]),r.xb(1073742336,l.Db,l.Db,[]),r.xb(1073742336,q.a,q.a,[]),r.xb(1073742336,C.m,C.m,[]),r.xb(1073742336,C.d,C.d,[]),r.xb(1073742336,u.p,u.p,[[2,u.v],[2,u.m]]),r.xb(1073742336,n,n,[]),r.xb(1024,u.k,function(){return[[{path:"",component:w}]]},[])])})}}]);