webpackJsonp([1],{"+pP8":function(e,t){},"/RJO":function(e,t){},"9ZyJ":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=n("/ocq"),i=n("mtWM"),s=n.n(i),r={name:"Register",methods:{register:function(e){e.preventDefault();var t=e.target.elements.username.value,n=e.target.elements.email.value,a=e.target.elements.password.value,o=function(){var e={username:t,email:n,password:a};s.a.post("/api/register",e).then(function(e){console.log("Registered"),U.push("/login")}).catch(function(e){console.log("Cannot register")})};o()}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Register")]),this._v(" "),t("form",{on:{submit:this.register}},[t("input",{attrs:{type:"text",name:"username",placeholder:"username"}}),t("br"),this._v(" "),t("input",{attrs:{type:"text",name:"email",placeholder:"email"}}),t("br"),this._v(" "),t("input",{attrs:{type:"text",name:"password",placeholder:"password"}}),t("br"),this._v(" "),t("input",{attrs:{type:"submit",value:"Register"}})])])},staticRenderFns:[]},c=n("VU/8")(r,l,!1,null,null,null).exports,u=new a.a,d=n("VU/8")(u,null,!1,null,null,null).exports,m={name:"Login",data:function(){return{userName:"",passWord:""}},methods:{login:function(e){var t=this;e.preventDefault();var n=this.userName,a=this.passWord,o=function(){var e={username:n,password:a};s.a.post("/api/login",e).then(function(e){t.emitLoggedInMethod(),console.log("Logged in"),U.push("/profile")}).catch(function(e){console.log("Cannot log in"),console.log(e)})};o()},emitLoggedInMethod:function(){d.$emit("logged-in","loggedin")}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Login")]),e._v(" "),n("form",{on:{submit:e.login}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",name:"username",placeholder:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"text",name:"password",placeholder:"password"},domProps:{value:e.passWord},on:{input:function(t){t.target.composing||(e.passWord=t.target.value)}}}),n("br"),e._v(" "),n("input",{attrs:{type:"submit",value:"Login"}})])])},staticRenderFns:[]};var v=n("VU/8")(m,h,!1,function(e){n("gt+M")},null,null).exports,p={name:"Login",data:function(){return{user:{id:"",username:"",email:"",password:"",mode:"",channel:{radioname:"please select",radiourl:"blabla"},alternativechannel:{radioname:"please select",radiourl:"blabla"},shmoo:["",""]},modes:["alternativeChannel","alternativePlaylist"],radiochannels:[{radioname:"",radiocountry:""}],countrylist:["AUT","CZE","ITA","FRA","AUS"],isHovering:!1,showeditemail:!1,showeditmode:!1,showeditmainchannel:!1,showeditalternativechannel:!1,selectedchannel:"unselected",selectedalternativechannel:"",selectedcountry:"",selectedcountryalternative:"",filteredchannels:[],filteredalternativechannels:[]}},methods:{emitLoggedInMethod:function(){setTimeout(function(){d.$emit("logged-in","loggedin")},1e3)},getUserData:function(){var e=this,t=this;s.a.get("/api/user").then(function(n){t.$set(e,"user",n.data.user)}).catch(function(e){console.log(e),U.push("/login")})},getRadioData:function(){var e=this;s.a.get("/api/radiodata").then(function(t){e.radiochannels=t.data.radiodata}).catch(function(e){console.log(e),U.push("/login")})},editEmail:function(e){e.preventDefault();var t,n=e.target.elements.email.value;t={newEmail:n},s.a.post("/api/emailchange",t).then(function(e){U.push("/profile")}).catch(function(e){console.log("Cannot change email")}),setTimeout(function(){location.reload()},1e3)},editMode:function(){console.log(this.user.mode);var e,t=this.user.mode;e={selectedMode:t},s.a.post("api/modeselection",e).then(function(e){U.push("/profile")}).catch(function(e){console.log("Cannot save modeselection")});var n=this;setTimeout(function(){n.reloadPage()},1e3)},filteredChannels:function(){var e;for(this.filteredchannels=[],e=0;e<this.radiochannels.length;e++){var t=this.radiochannels[e];t.radiocountry==this.selectedcountry&&this.filteredchannels.push(t.radioname)}},selectChannel:function(e,t){this.selectedchannel=t,this.user.channel=t,this.changeChannel()},changeChannel:function(){var e,t=this.user.channel;e={selectedChannel:t},s.a.post("api/channelselection",e).then(function(e){U.push("/profile")}).catch(function(e){console.log("Cannot save channelselection")});var n=this;setTimeout(function(){n.reloadPage()},1e3)},filteredAlternativeChannels:function(){var e;for(this.filteredalternativechannels=[],e=0;e<this.radiochannels.length;e++){var t=this.radiochannels[e];t.radiocountry==this.selectedcountryalternative&&this.filteredalternativechannels.push(t.radioname)}},selectAlternativeChannel:function(e,t){this.selectedalternativechannel=t,this.user.alternativechannel=t,this.changeAlternativeChannel()},changeAlternativeChannel:function(){var e,t=this.user.alternativechannel;e={selectedAlternativeChannel:t},s.a.post("api/alternativechannelselection",e).then(function(e){U.push("/profile")}).catch(function(e){console.log("Cannot save channelselection")});var n=this;setTimeout(function(){n.reloadPage()},1e3)},reloadPage:function(){location.reload()}},mounted:function(){this.getUserData(),this.getRadioData(),this.emitLoggedInMethod()}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"gethelp",class:{hovering:e.isHovering},on:{mouseover:function(t){e.isHovering=!0},mouseout:function(t){e.isHovering=!1}}},[e._v("\n        "+e._s(e.isHovering?"Skip the current song, by clicking the 'No¶' button. The song will be added to your No¶-List and therefore skipped everytime it is played on the radio. If you open the app on a desktop device, you can also select the mode here -'alternativePlaylist Mode' will make the app switch to a random track from your playlist, whenever a No¶ title is detected, 'alternativeChannel Mode' will make it switch to another channel instead. -'MainChannel' defines the channel you will be listening to. -'AlternativeChannel' defines the channel that will be switched to (if you chose 'alternativeChannel Mode'), if a No¶ title is detected on your main channel.":"Help")+"\n    ")]),e._v(" "),n("div",{staticClass:"hideonmobile"},[n("h2",{staticClass:"profileheader"},[e._v("Profile")]),e._v(" "),n("div",{staticClass:"profilecontainer"},[n("div",[e._v("Username: "+e._s(e.user.username)+" ")]),e._v(" "),n("div",[e._v("Email: "+e._s(e.user.email)+" "),n("button",{staticClass:"editbutton",on:{click:function(t){e.showeditemail=!0}}},[e._v("Edit")]),e._v(" "),e.showeditemail?n("div",[n("label",[e._v("New Email")]),e._v(" "),n("form",{on:{submit:e.editEmail}},[n("input",{attrs:{type:"text",name:"email"}}),n("br"),e._v(" "),n("input",{attrs:{type:"submit",value:"Change EMail"}})])]):e._e()]),e._v(" "),n("div",[e._v("Mode: "+e._s(e.user.mode)+" "),n("button",{staticClass:"editbutton",on:{click:function(t){e.showeditmode=!0}}},[e._v("Edit")]),e._v(" "),e.showeditmode?n("div",[n("label",[e._v("Select Mode")]),e._v(" "),n("form",{staticClass:"profileform",on:{submit:e.editMode}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.user.mode,expression:"user.mode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.user,"mode",t.target.multiple?n:n[0])}}},e._l(e.modes,function(t){return n("option",{key:t.id},[e._v(e._s(t))])}),0),e._v(" "),n("input",{attrs:{type:"submit",value:"save"}})])]):e._e()]),e._v(" "),n("div",[e._v("MainChannel: "+e._s(e.user.channel.radioname)+" "),n("button",{staticClass:"editbutton",on:{click:function(t){e.showeditmainchannel=!0}}},[e._v("Edit")]),e._v(" "),e.showeditmainchannel?n("div",[n("label",[e._v("Search By Country")]),e._v(" "),n("form",{staticClass:"profileform",on:{submit:e.filteredChannels}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedcountry,expression:"selectedcountry"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedcountry=t.target.multiple?n:n[0]}}},e._l(e.countrylist,function(t){return n("option",{key:t.id},[e._v(e._s(t))])}),0),e._v(" "),n("input",{attrs:{type:"submit",value:"filter"}})]),e._v(" "),e._l(e.filteredchannels,function(t){return n("li",{staticClass:"radiochannelitem",on:{click:function(n){return e.selectChannel(n,t)}}},[n("a",[e._v(e._s(t))])])})],2):e._e()]),e._v(" "),n("div",[e._v("AlternativeChannel: "+e._s(e.user.alternativechannel.radioname)+" "),n("button",{staticClass:"editbutton",on:{click:function(t){e.showeditalternativechannel=!0}}},[e._v("Edit")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showeditalternativechannel,expression:"showeditalternativechannel"}]},[n("label",[e._v("Search By Country")]),e._v(" "),n("form",{staticClass:"profileform",on:{submit:e.filteredAlternativeChannels}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedcountryalternative,expression:"selectedcountryalternative"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedcountryalternative=t.target.multiple?n:n[0]}}},e._l(e.countrylist,function(t){return n("option",{key:t.id},[e._v(e._s(t))])}),0),e._v(" "),n("input",{attrs:{type:"submit",value:"filter"}})]),e._v(" "),e._l(e.filteredalternativechannels,function(t){return n("li",{staticClass:"radiochannelitem",on:{click:function(n){return e.selectAlternativeChannel(n,t)}}},[n("a",[e._v(e._s(t))])])})],2)])])])])},staticRenderFns:[]};var g=n("VU/8")(p,f,!1,function(e){n("nogy")},null,null).exports,_={name:"Shmoo",data:function(){return{user:{id:"",username:"",shmoo:[]},selectedShmoo:"",search:"",isHovering:!1}},methods:{emitLoggedInMethod:function(){setTimeout(function(){d.$emit("logged-in","loggedin")},1e3)},getUserData:function(){var e=this,t=this;s.a.get("/api/user").then(function(n){t.$set(e,"user",n.data.user)}).catch(function(e){console.log(e),U.push("/login")})},selectShmooElement:function(e,t){this.selectedShmoo=t,this.removeShmoo()},removeShmoo:function(){var e,t=this.selectedShmoo;e={elementToBeRemovedFromShmoo:t},s.a.post("/api/removeshmoo",e).then(function(e){console.log("shmoo element removed")}).catch(function(e){console.log("cannot remove shmoo element")}),window.location.reload()}},computed:{filteredShmoo:function(){var e=this;return this.user.shmoo.filter(function(t){return t.toLowerCase().match(e.search.toLowerCase())})}},mounted:function(){var e=this;this.getUserData(),this.emitLoggedInMethod(),d.$on("loadUserData",function(){e.getUserData()})}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"gethelp",class:{hovering:e.isHovering},on:{mouseover:function(t){e.isHovering=!0},mouseout:function(t){e.isHovering=!1}}},[e._v("\n        "+e._s(e.isHovering?"All the songs you disliked so far are listed here. You dont have to hear any of them ever again. In case you changed your taste (or if your brother used your account and made a mess of it), you can bring them back in the game by removing from this list":"Help")+"\n    ")]),e._v(" "),n("div",{staticClass:"hideonmobile"},[n("h2",{staticClass:"shmooheader"},[e._v("No¶-List")]),e._v(" "),n("ul",{staticClass:"shmooul"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{id:"searchshmoo",type:"text",placeholder:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.filteredShmoo,function(t,a){return n("li",{key:t.id,staticClass:"shmoolistitem",on:{click:function(n){return e.selectShmooElement(n,t)}}},[n("a",[e._v(e._s(a)+" - "+e._s(t))]),e._v(" "),n("a",{attrs:{id:"deleteitem"}},[e._v("delete")])])})],2),e._v(" "),n("br")])])},staticRenderFns:[]};var C=n("VU/8")(_,y,!1,function(e){n("zmj8")},null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"forumheader"},[e._v("Forum")]),e._v(" "),n("p",[e._v("ShmooFM is currently using 3rd party provider Xobor to run the forum. To visit the ShmooFM forum click here: "),n("a",{attrs:{href:"http://shmoofm.xobor.de"}},[e._v("http://shmoofm.xobor.de")]),e._v(".")]),e._v(" "),n("p",[e._v("To report a bug please write to dev@shmoofm.com.")]),e._v(" "),n("p",[e._v("If you have an idea for a new feature please discuss in the forum in the 'new features' section.")]),e._v(" "),n("p",[e._v("If you like to contact us concerning any other topic, please write to info@shmoofm.com.")])])}]};var w=n("VU/8")({name:"Forum"},b,!1,function(e){n("v1Y+")},null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",{staticClass:"homeheader"},[this._v("Home")]),this._v(" "),t("p",[this._v("Welcome to ShmooFM")]),this._v(" "),t("p",{staticClass:"hideondesktop"},[this._v("Please note, that the mobile version currently only supports basic functionalities and usage, i.e. login, listening and No¶. For registration and account setup use the desktop version.")]),this._v(" "),t("br")])}]};var E=n("VU/8")({name:"Home"},k,!1,function(e){n("lgeo")},null,null).exports,A=n("Xxa5"),M=n.n(A),P=n("exGp"),F=n.n(P),x={name:"Playlist",data:function(){return{user:{id:"",username:"",mode:"",privateplaylist:[]},selectedplaylistitem:"",search:"",isHovering:!1,file:"",message:"",error:!1,fileselected:!1}},methods:{emitLoggedInMethod:function(){setTimeout(function(){d.$emit("logged-in","loggedin")},1e3)},emitLoggedOutMethod:function(){setTimeout(function(){d.$emit("logged-in","")},1e3)},getUserData:function(){var e=this,t=this;s.a.get("/api/user").then(function(n){t.$set(e,"user",n.data.user)}).catch(function(e){console.log(e),t.emitLoggedOutMethod(),U.push("/login")})},selectFile:function(){var e=this.$refs.file.files[0],t=e.size>2e7;["audio/mpeg","audio/mp3"].includes(e.type)&&!t?(this.file=e,this.error=!1,this.message="",this.fileselected=!0):(this.file=e,this.error=!0,this.message=t?"File is too big. Max size: 20MB":"Only Mp3 allowed")},sendFile:function(){var e=this;return F()(M.a.mark(function t(){var n,a;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,(a=new FormData).append("file",e.file),t.prev=3,t.next=6,s.a.post("/api/fileupload",a);case 6:e.message="File has been uploaded",e.file="",e.error=!1,n.reload(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),e.message=t.t0.response.data.error,e.error=!0;case 16:case"end":return t.stop()}},t,e,[[3,12]])}))()},playlistItemClicked:function(e,t){this.selectedplaylistitem=t,this.deleteprivateplaylistitem()},deleteprivateplaylistitem:function(){var e,t=this.selectedplaylistitem;e={privatePlaylistItem:t},s.a.post("/api/deleteprivateplaylistitem",e).then(function(e){console.log("privateplaylistitem deleted")}).catch(function(e){console.log("cannot delete privateplaylistitem")}),this.reload()},reload:function(){setTimeout(function(){window.location.reload()},1e3)}},mounted:function(){this.getUserData(),this.emitLoggedInMethod()}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"gethelp",class:{hovering:e.isHovering},on:{mouseover:function(t){e.isHovering=!0},mouseout:function(t){e.isHovering=!1}}},[e._v("\n        "+e._s(e.isHovering?"If you run the app in 'alternativePlaylist Mode' it will switch to a random track from your playlist, whenever shmoo is detected.":"Help")+"\n    ")]),e._v(" "),n("div",[n("h2",{staticClass:"privateplaylistheader"},[e._v("Playlist")]),e._v(" "),n("p",[e._v("You can upload up to 10 tracks to your playlist.")]),e._v(" "),n("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[n("div",[n("label",{attrs:{for:"file"}},[e._v("Upload File")]),e._v(" "),n("input",{ref:"file",staticClass:"selectfile",attrs:{type:"file"},on:{change:e.selectFile}})]),e._v(" "),n("div",[this.user.privateplaylist.length<10&&1==this.fileselected?n("button",{staticClass:"sendfilebutton"},[e._v("Upload")]):e._e()]),e._v(" "),e.message?n("div",{staticClass:"messageclass"},[e._v(e._s(e.message))]):e._e()])]),e._v(" "),n("br"),e._v(" "),n("div",[n("ul",{staticClass:"playlistul"},e._l(e.user.privateplaylist,function(t){return n("li",{key:t.id,staticClass:"playlistitem",on:{click:function(n){return e.playlistItemClicked(n,t)}}},[n("a",[e._v(e._s(t))]),e._v(" "),n("a",{attrs:{id:"deleteitem"}},[e._v("delete")])])}),0)])])},staticRenderFns:[]};var T=n("VU/8")(x,S,!1,function(e){n("+pP8")},null,null).exports;a.a.use(o.a);var U=new o.a({routes:[{path:"/",name:"Home",component:E},{path:"/register",name:"Register",component:c},{path:"/login",name:"Login",component:v},{path:"/profile",name:"Profile",component:g},{path:"/shmoo",name:"Shmoo",component:C},{path:"/forum",name:"Forum",component:w},{path:"/playlist",name:"Playlist",component:T}]}),I={data:function(){return{auth:""}},methods:{logout:function(){s.a.get("/api/logout"),this.emitLoggedOutMethod(),this.auth="",U.push("/login"),console.log("logged out")},emitLoggedOutMethod:function(){d.$emit("logged-in","")}},mounted:function(){var e=this;d.$on("logged-in",function(t){e.auth=t})}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"navul"},["loggedin"==e.auth?n("li",{staticClass:"navlogout",on:{click:e.logout}},[n("router-link",{staticClass:"navlogoutitem",attrs:{to:"/login"}},[e._v("Logout")])],1):e._e(),e._v(" "),""==e.auth?n("li",{staticClass:"navli"},[n("router-link",{staticClass:"navitem hideonmobile",attrs:{to:"/register"}},[e._v("Register")])],1):e._e(),e._v(" "),""==e.auth?n("li",{staticClass:"navli"},[n("router-link",{staticClass:"navitem",attrs:{to:"/login"}},[e._v("Login")])],1):e._e(),e._v(" "),"loggedin"==e.auth?n("li",{staticClass:"navli"},[n("router-link",{staticClass:"navitem hideonmobile",attrs:{to:"/profile"}},[e._v("Profile")])],1):e._e(),e._v(" "),"loggedin"==e.auth?n("li",{staticClass:"navli"},[n("router-link",{staticClass:"navitem hideonmobile",attrs:{to:"/shmoo"}},[e._v("No¶-List")])],1):e._e(),e._v(" "),"loggedin"==e.auth?n("li",{staticClass:"navli"},[n("router-link",{staticClass:"navitem hideonmobile",attrs:{to:"/playlist"}},[e._v("Playlist")])],1):e._e(),e._v(" "),n("li",{staticClass:"navli"},[n("router-link",{staticClass:"navforum",attrs:{to:"/forum"}},[e._v("Forum")])],1)])])},staticRenderFns:[]};var R=n("VU/8")(I,N,!1,function(e){n("qwfH")},null,null).exports,$={name:"Player",data:function(){return{user:{id:"",username:"",email:"",password:"",mode:"",channel:{radioname:"unselected",radiourl:""},alternativechannel:{radioname:"unselected",radiourl:""},shmoo:["",""],privateplaylist:[]},currentsong:"not found",currentupdate:0,lastupdate:0,securecontent:[],showcommentsection:!1,comments:["blabla","bam oida"],yourcomment:"",checked:!1}},methods:{emitLoadUserDataOnOtherComponents:function(){d.$emit("loadUserData")},getUserData:function(){var e=this,t=this;s.a.get("/api/user").then(function(n){t.$set(e,"user",n.data.user)}).catch(function(e){console.log(e),U.push("/login")})},getNowPlayingMetaDataDirectlyFromFrontend:function(){var e=F()(M.a.mark(function e(){var t,n,a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.user.channel.radioname,n=this.user.channel.nowplayingurl,e.prev=2,e.next=5,s.a.get(n);case 5:a=e.sent,this.currentsong="88.6"==t?a.data.data[3].title+" - "+a.data.data[3].name:"Rockovyradio (CZE)"==t?a.data.current.song+" - "+a.data.current.interpret:"Triple J (AUS)"==t?a.data.now.recording.title+" - "+a.data.now.recording.artists[0].name:"TSF Jazz (FRA)"==t?a.data.title+" - "+a.data.artist:"Radio2.0 Bergamo (ITA)"==t?a.data:"Ö3"==t?a.data[0].items[20].title+" - "+a.data[0].items[20].interpreter:"Radio Wien"==t?a.data[0].items[12].title+" - "+a.data[0].items[12].interpreter:"nixe dada",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(){return e.apply(this,arguments)}}(),getSecureContent:function(){var e=this,t=this;s.a.get("/api/securecontent").then(function(n){t.$set(e,"securecontent",n.data.secureContent),e.securecontent=n.data.secureContent}).catch(function(e){console.log(e),U.push("/login")})},getComments:function(){var e=this,t=this;s.a.get("/api/getcomments").then(function(n){t.$set(e,"comments",n.data.comments),e.comments=n.data.comments}).catch(function(e){console.log(e),U.push("/login")})},postComment:function(){var e,t=this.user.channel.radioname,n=this.user.username,a=this.yourcomment;e={channelToComment:t,userWhoComments:n,newComment:a},s.a.post("api/postcomment",e).then(function(e){console.log("comment posted")}).catch(function(e){console.log("Cannot post comment")}),this.yourcomment=""},setPrimaryChannelSRC:function(){var e=this;setTimeout(function(){document.getElementById("primaryradiostream").src=e.user.channel.radiourl},2e3)},setAlternativeChannelSRC:function(){var e=this;setTimeout(function(){document.getElementById("alternativeradiostream").src=e.user.alternativechannel.radiourl},2e3)},playFunction:function(){document.getElementById("primaryradiostream").play()},muteFunction:function(){var e=document.getElementById("primaryradiostream"),t=document.getElementById("alternativeradiostream"),n=document.getElementById("playliststream");e.volume=0,t.volume=0,n.volume=0},unmuteFunction:function(){var e=document.getElementById("primaryradiostream"),t=document.getElementById("alternativeradiostream"),n=document.getElementById("playliststream");e.volume=1,t.volume=1,n.volume=1},updateCheck:function(){this.currentupdate<this.lastupdate&&("alternativeChannel"==this.user.mode?this.reloadPage():console.log("alternativePlaylistMode: no switch now"))},playerEndedCheck:function(){1==document.getElementById("playliststream").ended&&this.reloadPage()},setCurrentUpdateEqualToLastUpdate:function(){this.lastupdate=this.currentupdate},lolFunction:function(){var e,t=this,n=this;if("not found"==this.currentsong)alert("Shmoo can't be saved. You've been too fast. Try again in 3,2,1. Go!");else{var a,o=0;for(a=0;a<n.securecontent.length;a++)n.securecontent[a]==n.currentsong&&o++;if(o>0)console.log("you cant NO¶ secured content!"),alert("you cant NO¶ secured content!");else{e={currentSong:t.currentsong},s.a.post("/api/addshmoo",e).then(function(e){console.log("NO¶ submitted")}).catch(function(e){console.log("cannot submit NO¶")}),"alternativeChannel"==n.user.mode?this.switchToAlternativeChannel():this.switchToAlternativePlaylist(),setTimeout(function(){n.emitLoadUserDataOnOtherComponents(),n.getUserData()},1e3)}}},shmooAlarm:function(){var e=this,t=function(){var t,n=0;for(t=0;t<e.user.shmoo.length;t++){if(e.currentsong==e.user.shmoo[t])n++,e.currentupdate=n;else;0!==n?(e.currentupdate=n,e.delaySwitch()):e.currentupdate=0}};t()},delaySwitch:function(){var e=this;setTimeout(function(){"alternativePlaylist"==e.user.mode?e.switchToAlternativePlaylist():e.switchToAlternativeChannel()},6e3)},switchToAlternativePlaylist:function(){document.getElementById("primaryradiostream").pause();var e=this.user.privatefilenames,t=document.getElementById("playliststream");if(1==t.paused){var n="http://46.101.174.202/"+(e=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(e))[0];t.src=n,t.play()}},switchToAlternativeChannel:function(){var e,t;e=document.getElementById("primaryradiostream"),t=document.getElementById("alternativeradiostream"),e.pause(),t.play()},reloadPage:function(){location.reload()},alertCheck:function(){var e=this;setTimeout(function(){e.selectChannelAlert(),e.selectAlternativeChannelAlert(),e.primaryEqualsAlternativeAlert()},5e3)},selectChannelAlert:function(){"unselected"==this.user.channel.radioname&&alert("New Here? Select a MainChannel first of all!")},selectAlternativeChannelAlert:function(){"unselected"==this.user.alternativechannel.radioname&&"alternativeChannel"==this.user.mode&&"unselected"!==this.user.channel.radioname&&(alert("... aaand an AlternativeChannel or change to alternativePlaylist Mode and add your playlist! - better choose an AlternativeChannel anyway."),document.getElementById("primaryradiostream").pause())},primaryEqualsAlternativeAlert:function(){this.user.channel.radioname==this.user.alternativechannel.radioname&&"alternativeChannel"==this.user.mode&&"unselected"!==this.user.channel.radioname&&(alert("MainChannel and AlternativeChannel should not be the same in alternativeChannel Mode! Please change one of them!"),document.getElementById("primaryradiostream").pause())},update:function(){var e=this;setTimeout(function(){e.playFunction()},3e3),setInterval(function(){e.getNowPlayingMetaDataDirectlyFromFrontend(),e.updateCheck(),e.setCurrentUpdateEqualToLastUpdate(),e.shmooAlarm(),e.playerEndedCheck(),e.getComments()},2e3)}},mounted:function(){this.getUserData(),this.getSecureContent(),this.setPrimaryChannelSRC(),this.setAlternativeChannelSRC(),this.update(),this.alertCheck()}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playercomponentcontainer"},[n("button",{staticClass:"playbutton",on:{click:e.playFunction}},[e._v("Play >")]),e._v(" "),n("button",{staticClass:"mutebutton",on:{click:e.muteFunction}},[e._v("Mute")]),e._v(" "),n("button",{staticClass:"unmutebutton",on:{click:e.unmuteFunction}},[e._v("Unmute")]),e._v(" "),n("br",{staticClass:"hideonmobile"}),e._v(" "),n("br"),e._v(" "),n("button",{staticClass:"lolbutton",attrs:{id:"LolButton"},on:{click:e.lolFunction}},[e._v("No¶")]),e._v(" "),n("div",[n("br"),e._v(" "),n("br",{staticClass:"hideondesktop"}),e._v(" "),n("br",{staticClass:"hideondesktop"}),e._v(" "),n("br",{staticClass:"hideondesktop"}),e._v(" "),n("br",{staticClass:"hideondesktop"}),e._v(" "),n("br",{staticClass:"hideondesktop"}),e._v(" "),n("div",{staticClass:"nowplayingdiv"},[e._v("Now playing on Main Channel:")]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"nowplayingtitle"},[e._v(e._s(e.currentsong))]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"nowplayingdiv"},[e._v(e._s(e.user.channel.radioname))]),e._v(" "),n("br"),e._v(" "),n("br")]),e._v(" "),n("div",[!1===e.showcommentsection?n("button",{staticClass:"editbutton",on:{click:function(t){e.showcommentsection=!0}}},[e._v("Show Comments")]):e._e(),e._v(" "),e.showcommentsection?n("button",{staticClass:"editbutton",on:{click:function(t){e.showcommentsection=!1}}},[e._v("Hide Comments")]):e._e(),e._v(" "),e.showcommentsection?n("div",[n("br"),e._v(" "),n("form",{on:{submit:e.postComment}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.yourcomment,expression:"yourcomment"}],staticClass:"commentfield",attrs:{id:"newcomment",type:"text",placeholder:"write a comment"},domProps:{value:e.yourcomment},on:{input:function(t){t.target.composing||(e.yourcomment=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("input",{attrs:{type:"submit",value:"Send Comment"}})]),e._v(" "),n("ul",{staticClass:"commentsoutputbox"},e._l(e.comments,function(t){return n("li",{key:t.id,staticClass:"commentitem"},[n("a",[e._v(e._s(t))])])}),0)]):e._e(),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br")]),e._v(" "),n("div",{staticClass:"hide"},[n("p",[e._v("Primary Radio Stream ( "+e._s(e.user.channel.radioname)+" )")]),e._v(" "),n("audio",{attrs:{width:"300",height:"48",controls:"controls",id:"primaryradiostream"}},[e._v('type="audio/mpeg"/>Your browser does not support HTML5 audio. Please update your browser to view this media content.')])]),e._v(" "),n("div",{staticClass:"hide"},[n("p",[e._v("Alternative Radio Stream ( "+e._s(e.user.alternativechannel.radioname)+" )")]),e._v(" "),n("audio",{attrs:{width:"300",height:"48",controls:"controls",id:"alternativeradiostream"}},[e._v('type="audio/mpeg"/>Your browser does not support HTML5 audio. Please update your browser to view this media content.')])]),e._v(" "),e._m(0),e._v(" "),n("br"),e._v(" "),n("br")])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hide"},[t("p",[this._v("Playlist Player")]),this._v(" "),t("audio",{attrs:{id:"playliststream",tabindex:"0",controls:"",type:"audio/mpeg"}})])}]};var H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",{staticClass:"copyright"},[this._v("Copyright Edwin Pree, 2021")])])}]};var D={name:"App",components:{Navbar:R,Player:n("VU/8")($,L,!1,function(e){n("/RJO")},null,null).exports,Copyright:n("VU/8")({name:"Copyright"},H,!1,function(e){n("9ZyJ")},null,null).exports},data:function(){return{auth:""}},mounted:function(){var e=this;d.$on("logged-in",function(t){e.auth=t})}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar",{staticClass:"navcontainer"}),e._v(" "),n("router-view"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("hr",{staticClass:"hideonmobile"}),e._v(" "),"loggedin"==e.auth?n("Player"):e._e(),e._v(" "),n("Copyright")],1)},staticRenderFns:[]};var O=n("VU/8")(D,B,!1,function(e){n("ytSE")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",router:U,components:{App:O},template:"<App/>"})},"gt+M":function(e,t){},lgeo:function(e,t){},nogy:function(e,t){},qwfH:function(e,t){},"v1Y+":function(e,t){},ytSE:function(e,t){},zmj8:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9b2a817c9b1b8d19e95c.js.map