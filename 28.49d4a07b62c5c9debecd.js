(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/yGZ":function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=function(){return function(){}}(),u=e("pMnS"),r=e("oBZk"),i=e("ZZ/e"),s=e("gIcY"),a=e("mrSG"),c=e("8ArQ"),g=e("F8q/"),b=e("kHVi"),d=function(){function n(n,l,e,o,t,u,r,i){this.fireauth=n,this.storage=l,this.logger=e,this.toastController=o,this.alertController=t,this.termsuserservice=u,this.loadingController=r,this.router=i,this.loggedinuser=null,this.useraccount=null,this.submitted=!1,this.loaduser(),this.getaccount()}return n.prototype.ionViewWillEnter=function(){this.loaduser(),this.getaccount()},n.prototype.getaccount=function(){return a.b(this,void 0,void 0,function(){var n=this;return a.e(this,function(l){return[2,new Promise(function(l,e){n.loggedinuser&&""!=n.loggedinuser.uid||l(8),n.termsuserservice.getaccount({googleid:n.loggedinuser.uid,email:n.loggedinuser.email}).then(function(e){n.logger.info(e),e?(n.useraccount=e,n.storage.set(c.a.storageuniq+"useraccount",JSON.stringify(n.useraccount)),n.storage.set(c.a.storageuniq+"token","WebKey "+n.useraccount.token),"yes"!=n.useraccount.termsagreed&&l(4),null==n.useraccount.docvalidatefeature&&l(5),l(7)):l(3)},function(e){try{var o=JSON.parse(e._body);o.response&&(console.log(o.response.message),l(1))}catch(t){console.log(t),n.presentAlert("","",t),l(0)}})})]})})},n.prototype.ngOnInit=function(){this.loaduser(),this.getaccount()},n.prototype.forgot=function(){this.router.navigateByUrl("/forgot")},n.prototype.onSignup=function(){this.router.navigateByUrl("/signup")},n.prototype.loginfun=function(){var n=this;this.fireauth.auth.signInWithEmailAndPassword(this.email,this.password).then(function(l){l&&(n.logger.info(l),n.storage.clear(),n.checkifemailverified())}).catch(function(l){n.logger.info(l),n.error=l.message,n.presentAlert("Login failed","",l)})},n.prototype.presentAlert=function(n,l,e){return a.b(this,void 0,void 0,function(){var o,t=this;return a.e(this,function(u){switch(u.label){case 0:return[4,this.alertController.create({header:n,subHeader:l,message:e,buttons:["OK"]})];case 1:return[4,(o=u.sent()).present()];case 2:return u.sent(),setTimeout(function(){return a.b(t,void 0,void 0,function(){return a.e(this,function(n){switch(n.label){case 0:return[4,o.dismiss()];case 1:return n.sent(),[2]}})})},2e3),[2]}})})},n.prototype.acceptterm=function(){return a.b(this,void 0,void 0,function(){var n;return a.e(this,function(l){switch(l.label){case 0:return this.loggedinuser?""==this.loggedinuser.uid?(this.presentAlert("Message","You have not loggedin","Go to login screen"),[2]):[4,this.getaccount()]:(this.presentAlert("Message","You have not loggedin","Go to login screen"),[2]);case 1:return n=l.sent(),console.log(n),1==n?(console.log("account not created"),this.router.navigateByUrl("/manage")):5==n?console.log("account created, no features"):7==n?this.router.navigateByUrl("/docchain"):8==n?console.log("User not loggedin error "):console.log("network error "),[2]}})})},n.prototype.loaduser=function(){return a.b(this,void 0,void 0,function(){var n;return a.e(this,function(l){switch(l.label){case 0:return n=this,[4,this.termsuserservice.getloggedinuser()];case 1:return n.loggedinuser=l.sent(),[2]}})})},n.prototype.saveuser=function(n){var l=this;this.loggedinuser={uid:n.uid,displayName:n.displayName,photoURL:n.photoURL,phoneNumber:n.phoneNumber,email:n.email,emailVerified:n.emailVerified},this.loggedinuser.uid&&""!=this.loggedinuser.uid||this.presentAlert("Message","Login","Error during login. "),console.log("saveuser="+JSON.stringify(this.loggedinuser)),this.storage.set(c.a.storageuniq+"loggedinuser",JSON.stringify(this.loggedinuser)).then(function(n){l.termsuserservice.reflectloginuser()})},n.prototype.checkifemailverified=function(){var n=this;this.fireauth.auth.onAuthStateChanged(function(l){l&&(n.saveuser(l),n.logger.info(l),l.emailVerified?n.acceptterm():n.router.navigateByUrl("/verifyemail"))})},n.prototype.presentToast=function(n,l,e,o){return a.b(this,void 0,void 0,function(){return a.e(this,function(t){switch(t.label){case 0:return[4,this.toastController.create({message:n,showCloseButton:l,position:e,duration:o})];case 1:return t.sent().present(),[2]}})})},n.prototype.gotokyc=function(){this.router.navigateByUrl("/kycpage")},n}(),p=e("ZBkt"),h=e("iw74"),f=e("ZYCi"),m=o.nb({encapsulation:0,styles:[[".login-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function k(n){return o.Hb(0,[(n()(),o.pb(0,0,null,null,13,"ion-header",[],null,null,null,r.X,r.o)),o.ob(1,49152,null,0,i.B,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,11,"ion-toolbar",[],null,null,null,r.rb,r.I)),o.ob(3,49152,null,0,i.Bb,[o.h,o.k],null,null),(n()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.N,r.e)),o.ob(5,49152,null,0,i.l,[o.h,o.k],null,null),(n()(),o.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/docchain"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==o.zb(n,8).onClick(e)&&t),t},r.K,r.b)),o.ob(7,49152,null,0,i.g,[o.h,o.k],{defaultHref:[0,"defaultHref"]},null),o.ob(8,16384,null,0,i.h,[[2,i.hb],i.Hb],{defaultHref:[0,"defaultHref"]},null),(n()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,r.qb,r.H)),o.ob(10,49152,null,0,i.zb,[o.h,o.k],null,null),(n()(),o.Fb(-1,0,[" Login "])),(n()(),o.pb(12,0,null,0,1,"ion-buttons",[["slot","secondary"]],null,null,null,r.N,r.e)),o.ob(13,49152,null,0,i.l,[o.h,o.k],null,null),(n()(),o.pb(14,0,null,null,50,"ion-content",[],null,null,null,r.U,r.l)),o.ob(15,49152,null,0,i.u,[o.h,o.k],null,null),(n()(),o.pb(16,0,null,0,31,"ion-list",[],null,null,null,r.eb,r.u)),o.ob(17,49152,null,0,i.O,[o.h,o.k],null,null),(n()(),o.pb(18,0,null,0,29,"ion-card",[],null,null,null,r.S,r.f)),o.ob(19,49152,null,0,i.m,[o.h,o.k],null,null),(n()(),o.pb(20,0,null,0,13,"ion-item",[],null,null,null,r.bb,r.r)),o.ob(21,49152,null,0,i.H,[o.h,o.k],null,null),(n()(),o.pb(22,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.cb,r.t)),o.ob(23,49152,null,0,i.N,[o.h,o.k],{color:[0,"color"],position:[1,"position"]},null),(n()(),o.Fb(-1,0,["Email"])),(n()(),o.pb(25,0,null,0,8,"ion-input",[["name","username"],["placeholder","Enter email-id"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0,u=n.component;return"ionBlur"===l&&(t=!1!==o.zb(n,28)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==o.zb(n,28)._handleInputEvent(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(u.email=e)&&t),t},r.Z,r.q)),o.ob(26,16384,null,0,s.l,[],{required:[0,"required"]},null),o.Cb(1024,null,s.e,function(n){return[n]},[s.l]),o.ob(28,16384,null,0,i.Nb,[o.k],null,null),o.Cb(1024,null,s.f,function(n){return[n]},[i.Nb]),o.ob(30,671744,null,0,s.k,[[8,null],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,s.g,null,[s.k]),o.ob(32,16384,null,0,s.h,[[4,s.g]],null,null),o.ob(33,49152,null,0,i.G,[o.h,o.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),o.pb(34,0,null,0,13,"ion-item",[],null,null,null,r.bb,r.r)),o.ob(35,49152,null,0,i.H,[o.h,o.k],null,null),(n()(),o.pb(36,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.cb,r.t)),o.ob(37,49152,null,0,i.N,[o.h,o.k],{color:[0,"color"],position:[1,"position"]},null),(n()(),o.Fb(-1,0,["Password"])),(n()(),o.pb(39,0,null,0,8,"ion-input",[["name","password"],["placeholder","Enter password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var t=!0,u=n.component;return"ionBlur"===l&&(t=!1!==o.zb(n,42)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==o.zb(n,42)._handleInputEvent(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(u.password=e)&&t),t},r.Z,r.q)),o.ob(40,16384,null,0,s.l,[],{required:[0,"required"]},null),o.Cb(1024,null,s.e,function(n){return[n]},[s.l]),o.ob(42,16384,null,0,i.Nb,[o.k],null,null),o.Cb(1024,null,s.f,function(n){return[n]},[i.Nb]),o.ob(44,671744,null,0,s.k,[[8,null],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,s.g,null,[s.k]),o.ob(46,16384,null,0,s.h,[[4,s.g]],null,null),o.ob(47,49152,null,0,i.G,[o.h,o.k],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(n()(),o.pb(48,0,null,0,11,"ion-row",[["responsive-sm",""]],null,null,null,r.ib,r.z)),o.ob(49,49152,null,0,i.ib,[o.h,o.k],null,null),(n()(),o.pb(50,0,null,0,4,"ion-col",[],null,null,null,r.T,r.k)),o.ob(51,49152,null,0,i.t,[o.h,o.k],null,null),(n()(),o.pb(52,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.loginfun()&&o),o},r.M,r.d)),o.ob(53,49152,null,0,i.k,[o.h,o.k],{expand:[0,"expand"]},null),(n()(),o.Fb(-1,0,["Login"])),(n()(),o.pb(55,0,null,0,4,"ion-col",[],null,null,null,r.T,r.k)),o.ob(56,49152,null,0,i.t,[o.h,o.k],null,null),(n()(),o.pb(57,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.onSignup()&&o),o},r.M,r.d)),o.ob(58,49152,null,0,i.k,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),o.Fb(-1,0,["Signup"])),(n()(),o.pb(60,0,null,0,4,"ion-item",[["text-center",""]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.forgot()&&o),o},r.bb,r.r)),o.ob(61,49152,null,0,i.H,[o.h,o.k],null,null),(n()(),o.pb(62,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.cb,r.t)),o.ob(63,49152,null,0,i.N,[o.h,o.k],{color:[0,"color"],position:[1,"position"]},null),(n()(),o.Fb(-1,0,["Forgot password"]))],function(n,l){var e=l.component;n(l,7,0,"/docchain"),n(l,8,0,"/docchain"),n(l,23,0,"primary","stacked"),n(l,26,0,""),n(l,30,0,"username",e.email),n(l,33,0,"username","Enter email-id","","text"),n(l,37,0,"primary","stacked"),n(l,40,0,""),n(l,44,0,"password",e.password),n(l,47,0,"password","Enter password","","password"),n(l,53,0,"block"),n(l,58,0,"light","block"),n(l,63,0,"primary","stacked")},function(n,l){n(l,25,0,o.zb(l,26).required?"":null,o.zb(l,32).ngClassUntouched,o.zb(l,32).ngClassTouched,o.zb(l,32).ngClassPristine,o.zb(l,32).ngClassDirty,o.zb(l,32).ngClassValid,o.zb(l,32).ngClassInvalid,o.zb(l,32).ngClassPending),n(l,39,0,o.zb(l,40).required?"":null,o.zb(l,46).ngClassUntouched,o.zb(l,46).ngClassTouched,o.zb(l,46).ngClassPristine,o.zb(l,46).ngClassDirty,o.zb(l,46).ngClassValid,o.zb(l,46).ngClassInvalid,o.zb(l,46).ngClassPending)})}function v(n){return o.Hb(0,[(n()(),o.pb(0,0,null,null,1,"page-login",[],null,null,null,k,m)),o.ob(1,114688,null,0,d,[p.a,h.b,g.a,i.Ob,i.a,b.a,i.Eb,f.m],null,null)],function(n,l){n(l,1,0)},null)}var y=o.lb("page-login",d,v,{},{},[]),C=e("Ip0R"),w=function(){return function(){}}();e.d(l,"LoginModuleNgFactory",function(){return x});var x=o.mb(t,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[u.a,y]],[3,o.j],o.x]),o.xb(4608,C.l,C.k,[o.u,[2,C.s]]),o.xb(4608,s.o,s.o,[]),o.xb(4608,i.b,i.b,[o.z,o.g]),o.xb(4608,i.Gb,i.Gb,[i.b,o.j,o.q]),o.xb(4608,i.Kb,i.Kb,[i.b,o.j,o.q]),o.xb(1073742336,C.b,C.b,[]),o.xb(1073742336,s.m,s.m,[]),o.xb(1073742336,s.d,s.d,[]),o.xb(1073742336,i.Db,i.Db,[]),o.xb(1073742336,f.p,f.p,[[2,f.v],[2,f.m]]),o.xb(1073742336,w,w,[]),o.xb(1073742336,t,t,[]),o.xb(1024,f.k,function(){return[[{path:"",component:d}]]},[])])})}}]);