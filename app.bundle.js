webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(329)},329:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=t(330),r=o(n),a=t(332),i=o(a),l=t(418),u=o(l),d=t(420),s=o(d),c=t(576),f=o(c),m=t(609),p=o(m);t(613),r.default.module("app",[i.default,u.default,s.default,f.default]).component("app",p.default)},420:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(421),i=o(a),l=t(449),u=o(l),d=t(461),s=o(d),c=t(544),f=o(c),m=t(470),p=o(m),v=t(574),h=o(v),b=r.default.module("app.common",[i.default,u.default,s.default,f.default,p.default,h.default]).name;exports.default=b},421:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(422),u=o(l),d=r.default.module("header",[i.default]).component("header",u.default).name;exports.default=d},422:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(423),r=o(n),a=t(424),i=o(a);t(445);var l={bindings:{pageTitle:"<"},template:r.default,controller:i.default};exports.default=l},423:function(e,exports){e.exports='<navbar></navbar>\n<h1 class="h3">{{ $ctrl.pageTitle }}</h1>\n'},424:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="header"}}]),e}();exports.default=l},445:function(e,exports,t){var o=t(446);"string"==typeof o&&(o=[[e.id,o,""]]);t(448)(o,{});o.locals&&(e.exports=o.locals)},446:function(e,exports,t){exports=e.exports=t(447)(void 0),exports.push([e.id,"header{display:block}header>h1{text-transform:capitalize;padding:10px}",""])},449:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(450),u=o(l),d=t(452),s=o(d),c=t(456),f=o(c),m=r.default.module("navbar",[i.default,u.default,s.default]).component("navbar",f.default).name;exports.default=m},452:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(453),i=o(a),l=r.default.module("addButton",[]).component("addButton",i.default).name;exports.default=l},453:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(454),r=o(n),a=t(455),i=o(a),l={bindings:{},template:r.default,controller:i.default};exports.default=l},454:function(e,exports){e.exports='<span><a class="btn btn-success" ui-sref="add">New<span class="sr-only-xs-down">Resource</span></a></span>'},455:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="addButton",this.adding=!1,this.form="addForm"}}]),e}();exports.default=l},456:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(457),r=o(n),a=t(458),i=o(a);t(459);var l={bindings:{},template:r.default,controller:i.default};exports.default=l},457:function(e,exports){e.exports='<div class="container">\n\t<div class="navbar-header">\n\t\t<button type="button" class="navbar-toggle" ng-click="$ctrl.isNavCollapsed = !$ctrl.isNavCollapsed">\n\t\t\t<span class="sr-only">Toggle navigation</span>\n\t\t\t<span class="icon-bar"></span>\n\t\t\t<span class="icon-bar"></span>\n\t\t\t<span class="icon-bar"></span>\n\t\t</button>\n\t\t<a class="navbar-brand" ui-sref="home">Your <span class="sr-only-xs-down">Favorite</span> Resources</a>\n\t\t<add-button></add-button>\t\t\t\n\t</div>\n\t<nav class="collapse navbar-collapse" uib-collapse="$ctrl.isNavCollapsed">\n\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t<li ui-sref-active="active"><a ui-sref="home">home</a></li>\n\t\t\t<li ui-sref-active="active"><a ui-sref="about">about</a></li>\n\t\t\t<li ui-sref-active="active"><a ui-sref="list">list</a></li>\n\t\t</ul>\n\t</nav>\n</div>'},458:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="navbar",this.isNavCollapsed=!0}}]),e}();exports.default=l},459:function(e,exports,t){var o=t(460);"string"==typeof o&&(o=[[e.id,o,""]]);t(448)(o,{});o.locals&&(e.exports=o.locals)},460:function(e,exports,t){exports=e.exports=t(447)(void 0),exports.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,".sr-only-xs-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:34em){.sr-only-xs-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}.sr-only-sm-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:48em){.sr-only-sm-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}.sr-only-md-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:62em){.sr-only-md-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}.sr-only-lg-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:75em){.sr-only-lg-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}navbar{display:block;background-color:#6f5499}navbar a{color:#fff}navbar a:hover{color:#bfb2d4}navbar add-button{display:flex;align-items:center;height:100%;min-height:50px}navbar .active a{background-color:#bfb2d4}navbar .nav>li>a:focus,navbar .nav>li>a:hover{color:#6f5499;background-color:#dad2e7}navbar .navbar-header .navbar-toggle,navbar .navbar-header .navbar-toggle:focus,navbar .navbar-header .navbar-toggle:hover{border-color:#fff;background-color:#fff}navbar .navbar-header .navbar-toggle .icon-bar{background-color:#6f5499}",""])},461:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(462),i=o(a),l=t(464),u=o(l),d=t(569),s=o(d),c=r.default.module("resources",[i.default,u.default]).component("resources",s.default).name;exports.default=c},464:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(465),i=o(a),l=t(469),u=o(l),d=t(564),s=o(d),c=r.default.module("resource",[i.default,u.default]).component("resource",s.default).name;exports.default=c},465:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(466),i=o(a),l=r.default.module("editButton",[]).component("editButton",i.default).name;exports.default=l},466:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(467),r=o(n),a=t(468),i=o(a),l={bindings:{item:"<"},template:r.default,controller:i.default};exports.default=l},467:function(e,exports){e.exports='<span><a class="btn btn-info" ui-sref="edit({ id: $ctrl.item.id })">Edit</a></span>'},468:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="editButton"}}]),e}();exports.default=l},469:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(470),i=o(a),l=t(544),u=o(l),d=t(561),s=o(d),c=r.default.module("removeButton",[i.default,u.default]).component("removeButton",s.default).name;exports.default=c},470:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(471),i=(o(a),t(476)),l=o(i),u=r.default.module("store",["angular-uuid"]).constant("STORAGE_KEY","ejbaker-codetest-resources").service("Store",l.default).name;exports.default=u},476:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(477),r=o(n),a=t(425),i=o(a),l=t(426),u=o(l),d=t(532),s=t(534),c=t(539),f=function(){function e(t,o,n){"ngInject";(0,i.default)(this,e),this._$window=n,this._uuid=o,this._STORAGE_KEY=t,this._resources=(0,s.list)(this._$window,this._STORAGE_KEY)}return e.$inject=["STORAGE_KEY","uuid","$window"],(0,u.default)(e,[{key:"list",value:function(e){return e?this.listRecent(e):r.default.resolve(this._resources)}},{key:"listRecent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=(0,d.sortBy)(this._resources,"added");return r.default.resolve(t.slice(0,e))}},{key:"get",value:function(e){var t=(0,c.getById)(e,this._resources);return(0,d.isEmpty)(t)?r.default.reject("No resource with that ID!"):r.default.resolve(t)}},{key:"add",value:function(e){if((0,c.ensureUniq)(e.name,e.type,this._resources))return r.default.reject("Resource exists!");e.id=this._uuid.v4(),e.added=new Date,e.updated=new Date;var t=this._resources;return t.push(e),(0,s.save)(this._$window,this._STORAGE_KEY,t),r.default.resolve(this._resources)}},{key:"edit",value:function(e){var t=this._resources,o=t.findIndex(function(t){return t.id===e.id});return o>-1?(e.updated=new Date,t[o]=e,(0,s.save)(this._$window,this._STORAGE_KEY,t),r.default.resolve(this._resources)):r.default.reject("No resource with that ID!")}},{key:"remove",value:function(e){(0,d.isString)(e)&&(e=[e]);var t=(0,c.getByIds)(e,this._resources);return(0,d.isEmpty)(t)?r.default.reject("No resource with that ID!"):((0,s.save)(this._$window,this._STORAGE_KEY,(0,c.removeByIds)(e,this._resources)),r.default.resolve(this._resources))}}]),e}();exports.default=f},534:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(535);Object.defineProperty(exports,"list",{enumerable:!0,get:function(){return o(n).default}});var r=t(536);Object.defineProperty(exports,"save",{enumerable:!0,get:function(){return o(r).default}})},535:function(e,exports,t){"use strict";function o(e,t){var o=e.localStorage.getItem(t);return(0,n.isString)(o)&&(o=JSON.parse(o)),(0,n.isEmpty)(o)?[]:o}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(532);exports.default=o},536:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){(0,i.isString)(o)||(o=(0,a.default)(o)),e.localStorage.setItem(t,o)}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(537),a=o(r),i=t(532);exports.default=n},539:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(540);Object.defineProperty(exports,"ensureUniq",{enumerable:!0,get:function(){return o(n).default}});var r=t(541);Object.defineProperty(exports,"getById",{enumerable:!0,get:function(){return o(r).default}});var a=t(542);Object.defineProperty(exports,"getByIds",{enumerable:!0,get:function(){return o(a).default}});var i=t(543);Object.defineProperty(exports,"removeByIds",{enumerable:!0,get:function(){return o(i).default}})},540:function(e,exports,t){"use strict";function o(e,t,o){return(0,n.find)(o,function(o){return o.name===e&&o.type===t})}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(532);exports.default=o},541:function(e,exports,t){"use strict";function o(e,t){return(0,n.find)(t,function(t){return t.id===e})}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(532);exports.default=o},542:function(e,exports,t){"use strict";function o(e,t){return(0,n.find)(t,function(t){return(0,n.includes)(e,t.id)})}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(532);exports.default=o},543:function(e,exports,t){"use strict";function o(e,t){return(0,n.isString)(e)&&(e=[e]),(0,n.remove)(t,function(t){return(0,n.includes)(e,t.id)}),t}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(532);exports.default=o},544:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(545),i=o(a),l=t(557),u=o(l);t(559);var d=r.default.module("modal",[i.default]).service("Modal",u.default).name;exports.default=d},557:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=t(532),u=t(558),d=o(u),s=function(){function e(t){"ngInject";(0,r.default)(this,e),this._$uibModal=t,this._modalSettings={backdrop:!0,keyboard:!0,modalFade:!0,template:d.default,windowClass:"modal-secondary"},this._modalOptions={closeButtonText:"Cancel",actionButtonText:"OK",headerText:"Proceed?",bodyText:"Perform this action?"}}return e.$inject=["$uibModal"],(0,i.default)(e,[{key:"showModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return e.backdrop="static",this.show(e,t)}},{key:"show",value:function(e,t){var o=this,n={},r={};return(0,l.assignIn)(n,o._modalSettings,e),(0,l.assignIn)(r,o._modalOptions,t),n.controller||(n.controllerAs="$ctrl",n.bindToController=!0,n.controller=["$uibModalInstance",function(e){"ngInject";this.modalOptions=r,this.modalOptions.ok=function(t){e.close(t)},this.modalOptions.close=function(){e.dismiss("cancel")}}]),o._$uibModal.open(n).result}},{key:"confirm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={type:"warn",closeButtonText:"Cancel",actionButtonText:"Confirm",headerText:"Please Confirm",bodyText:"Are you sure?"};return this.showModal({windowClass:"modal-warn"},(0,l.assignIn)({},t,e))}},{key:"error",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={closeButtonText:!1,actionButtonText:"OK",headerText:"Error",bodyText:"Something went wrong."};return this.showModal({windowClass:"modal-danger"},(0,l.assignIn)({},t,e))}}]),e}();exports.default=s},558:function(e,exports){e.exports='<div class="modal-header" ng-if="$ctrl.modalOptions.headerText">\n\t<h3>{{ $ctrl.modalOptions.headerText }}</h3>\n</div>\n<div class="modal-body" ng-if="$ctrl.modalOptions.bodyText">\n\t<p>\n\t\t{{ $ctrl.modalOptions.bodyText }}\n\t</p>\n</div>\n<div class="modal-footer">\n\t<button ng-if="$ctrl.modalOptions.actionButtonText" class="btn btn-danger" ng-click="$ctrl.modalOptions.ok()">{{ $ctrl.modalOptions.actionButtonText }}</button>\n\t<button ng-if="$ctrl.modalOptions.closeButtonText" type="button" class="btn btn-default" ng-click="$ctrl.modalOptions.close()">{{ $ctrl.modalOptions.closeButtonText }}</button>\n</div>'},559:function(e,exports,t){var o=t(560);"string"==typeof o&&(o=[[e.id,o,""]]);t(448)(o,{});o.locals&&(e.exports=o.locals)},560:function(e,exports,t){exports=e.exports=t(447)(void 0),exports.push([e.id,".modal-dialog{color:#222}.modal-secondary .modal-dialog{color:#292b2c;border-color:#ccc}.modal-secondary .modal-dialog .modal-content{background-color:#ed5c5c}.modal-success .modal-dialog{border-color:#d0e9c6;color:#3c763d}.modal-success .modal-dialog .modal-content{background-color:#dff0d8}.modal-success .modal-dialog .modal-footer,.modal-success .modal-dialog .modal-header{border-color:#d0e9c6}.modal-info .modal-dialog{border-color:#bcdff1;color:#31708f}.modal-info .modal-dialog .modal-content{background-color:#d9edf7}.modal-info .modal-dialog .modal-footer,.modal-info .modal-dialog .modal-header{border-color:#bcdff1}.modal-warn .modal-dialog{border-color:#faf2cc;color:#8a6d3b}.modal-warn .modal-dialog .modal-content{background-color:#fcf8e3}.modal-warn .modal-dialog .modal-footer,.modal-warn .modal-dialog .modal-header{border-color:#faf2cc}.modal-danger .modal-dialog{border-color:#ebcccc;color:#a94442}.modal-danger .modal-dialog .modal-content{background-color:#f2dede}.modal-danger .modal-dialog .modal-footer,.modal-danger .modal-dialog .modal-header{border-color:#ebcccc}",""])},561:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(562),r=o(n),a=t(563),i=o(a),l={bindings:{item:"<"},template:r.default,controller:i.default};exports.default=l},562:function(e,exports){e.exports='<div>\n\t<form ng-submit="$ctrl.onSubmit()" novalidate>\n\t\t<button class="btn btn-danger">\n\t\t\tDel<span class="sr-only-md-down">ete</span>\n\t\t</button>\n\t</form>\n</div>\n'},563:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(t,o,n){"ngInject";(0,r.default)(this,e),this._Store=t,this._Modal=o,this._Errors=n}return e.$inject=["Store","Modal","Errors"],(0,i.default)(e,[{key:"$onInit",value:function(){this.name="removeButton"}},{key:"onSubmit",value:function(){var e=this,t={actionButtonText:"Delete",bodyText:"Really delete "+this.item.name+"?"};this._Modal.confirm(t).then(function(){return e._Store.remove(e.item.id)}).catch(function(t){return e._Errors.catch(t)})}}]),e}();exports.default=l},564:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(565),r=o(n),a=t(566),i=o(a);t(567);var l={bindings:{item:"<",type:"<"},template:r.default,controller:i.default};exports.default=l},565:function(e,exports){e.exports='<div  ng-class="{ \'col-xs-5 col-sm-5\': $ctrl.recent, \'col-xs-3 col-sm-4\': !$ctrl.recent }">\n\t<a ng-if="$ctrl.hasLink" ng-href="{{ $ctrl.item.ref }}">{{ $ctrl.item.name }}</a>\n\t<span ng-if="!$ctrl.hasLink">{{ $ctrl.item.name }}</span>\n\t<span ng-if="$ctrl.item.author || $ctrl.item.creator"><i>by</i> {{ $ctrl.item.author || $ctrl.item.creator }}</span>\n</div>\n<div ng-class="{ \'col-xs-6 col-sm-6\': $ctrl.recent, \'col-xs-4 col-sm-5\': !$ctrl.recent }">{{ $ctrl.item.desc }}</div>\n<div class="col-xs-2 col-sm-1">{{ $ctrl.item.type }}</div>\n<div class="col-xs-3 col-sm-2" ng-if="!$ctrl.recent">\n\t<div class="col-xs-6">\n\t\t<edit-button item="$ctrl.item"></edit-button>\n\t</div>\n\t<div class="col-xs-6">\n\t\t<remove-button item="$ctrl.item"></remove-button>\n\t</div>\n</div>'},566:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="resource",this.recent="recent"===this.type,this.hasLink="book"!==this.item.type}}]),e}();exports.default=l},567:function(e,exports,t){var o=t(568);"string"==typeof o&&(o=[[e.id,o,""]]);t(448)(o,{});o.locals&&(e.exports=o.locals)},568:function(e,exports,t){exports=e.exports=t(447)(void 0),exports.push([e.id,"resource{display:block}",""])},569:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(570),r=o(n),a=t(571),i=o(a);t(572);var l={bindings:{items:"<",type:"@"},template:r.default,controller:i.default};exports.default=l},570:function(e,exports){e.exports='<div class="container">\n\t<div ng-if="!$ctrl.items.length" class="row">\n\t\t<div class="col-xs-12">No resources have been added yet!</div>\n\t</div>\n\t<div ng-if="$ctrl.items.length" class="row row-header">\n\t\t<div ng-repeat="header in $ctrl.rowHeaders" class="{{ header.classes }}" ng-click="$ctrl.changeSort(header.key)">\n\t\t\t<span ng-if="header.key === \'desc\'" ng-bind-html="header.label"></span>\n\t\t\t<span ng-if="header.key !== \'desc\'">{{ header.label }}</span>\n\t\t\t<span ng-if="header.key" ng-show="$ctrl.sortType[0] === header.key" class="caret" ng-class="{ reverse: $ctrl.sortReverse }" aria-hidden="true"></span>\n\t\t</div>\n\t</div>\n\t<resource class="row" dir-paginate="item in $ctrl.items | orderBy:$ctrl.sortType:$ctrl.sortReverse | itemsPerPage:3 track by item.id" item="item" type="$ctrl.type"></resource>\n\t<dir-pagination-controls></dir-pagination-controls>\n</div>\n'},571:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(t){"ngInject";(0,r.default)(this,e),this._$sce=t}return e.$inject=["$sce"],(0,i.default)(e,[{key:"$onInit",value:function(){var e=this,t="all"===e.type;e.name="resources",e.sortType=["type","name"],e.sortReverse=!1,e.rowHeaders=[{label:"Name",key:"name",classes:t?"col-xs-3 col-sm-4":"col-xs-5 col-sm-5"},{label:e._$sce.trustAsHtml('Desc<span class="sr-only-sm-down">ription</span>'),key:"desc",classes:t?"col-xs-4 col-sm-5":"col-xs-6 col-sm-6"},{label:"Type",key:"type",classes:"col-xs-2 col-sm-1"}],t&&e.rowHeaders.push({label:"Manage",classes:"col-xs-3 col-sm-2"})}},{key:"changeSort",value:function(e){if(e)if(e!==this.sortType[0]){this.sortReverse=!1;var t=e!==name?"name":"type";this.sortType=[e,t]}else this.sortReverse=!this.sortReverse}}]),e}();exports.default=l},572:function(e,exports,t){var o=t(573);"string"==typeof o&&(o=[[e.id,o,""]]);t(448)(o,{});o.locals&&(e.exports=o.locals)},573:function(e,exports,t){exports=e.exports=t(447)(void 0),exports.push([e.id,'dir-pagination-controls{display:block;text-align:center}.row{vertical-align:top;border-top:1px solid #eceeef}.row>div{display:table-cell;padding:1rem .75rem}.row>div:nth-child(4)>div:first-child{text-align:right}.row-header{font-weight:700;vertical-align:bottom;border-top:1px solid #eceeef;border-bottom:2px solid #eceeef}.row-header>div:nth-child(4){text-align:center}.caret.reverse{content:"";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}@media (max-width:400px){.row-header{font-size:1.1rem}}@media (max-width:800px){.row>div:nth-child(4)>div{width:100%}.row>div:nth-child(4)>div:first-child{text-align:left}.row>div:nth-child(4)>div:not(:first-child){margin-top:5px;clear:left}}',""])},574:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(544),i=o(a),l=t(575),u=o(l),d=r.default.module("errors",[i.default]).service("Errors",u.default).name;exports.default=d},575:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=t(532),u=function(){function e(t){"ngInject";(0,r.default)(this,e),this._Modal=t}return e.$inject=["Modal"],(0,i.default)(e,[{key:"catch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An error occurred.";return(0,l.isError)(e)&&(0,l.has)(e,"message")?this._Modal.error({bodyText:e.message}):"cancel"!==e&&this._Modal.error({bodyText:e})}}]),e}();exports.default=u},576:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(577),i=o(a),l=t(581),u=o(l),d=t(585),s=o(d),c=t(595),f=o(c),m=t(603),p=o(m),v=r.default.module("app.components",[i.default,u.default,s.default,f.default,p.default]).name;exports.default=v},577:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(470),u=o(l),d=t(578),s=o(d),c=r.default.module("home",[i.default,u.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",component:"home",resolve:{items:["Store","Errors",function(e,t){return e.list(5).then().catch(function(e){return t.catch(e)})}]}})}]).component("home",s.default).name;exports.default=c},578:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(579),r=o(n),a=t(580),i=o(a),l={bindings:{items:"<"},template:r.default,controller:i.default};exports.default=l},579:function(e,exports){e.exports='<header page-title="$ctrl.name"></header>\n<main class="container">\n\t<resources items="$ctrl.items" type="recent"></resources>\n</main>'},580:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="recent activity"}}]),e}();exports.default=l},581:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(582),u=o(l),d=r.default.module("about",[i.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("about",{url:"/about",component:"about"})}]).component("about",u.default).name;exports.default=d},582:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(583),r=o(n),a=t(584),i=o(a),l={bindings:{},template:r.default,controller:i.default};exports.default=l},583:function(e,exports){e.exports='<header page-title="$ctrl.name"></header>\n<main class="container">\n\t<h1 class="h4">Your resources, your way</h1>\n\t<p>Every resource you add to this site is saved in your own computer\'s localStorage!</p>\n</main>'},584:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=function e(){(0,r.default)(this,e),this.name="about"};exports.default=a},585:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(586),u=o(l),d=t(592),s=o(d),c=r.default.module("add",[i.default,u.default]).config(["$stateProvider",function(e){"ngInject";e.state("add",{url:"/add",component:"add"})}]).component("add",s.default).name;exports.default=c},586:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(418),u=o(l),d=t(587),s=o(d),c=t(470),f=o(c),m=t(574),p=o(m),v=t(588),h=o(v),b=r.default.module("addForm",[i.default,u.default,s.default,f.default,p.default]).component("addForm",h.default).name;exports.default=b},588:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(589),r=o(n),a=t(590),i=o(a),l={bindings:{},template:r.default,controller:i.default};exports.default=l},589:function(e,exports){e.exports='<form ng-submit="$ctrl.onSubmit()" name="$ctrl.form" novalidate>\n\t<formly-form model="$ctrl.model" fields="$ctrl.fields" options="$ctrl.options" form="$ctrl.form">\n\t\t<button type="submit" class="btn btn-primary submit-button" ng-disabled="$ctrl.form.$invalid">Submit</button>\n\t\t<button type="button" class="btn btn-default" ng-click="$ctrl.options.resetModel()">Reset</button>\n\t</formly-form>\n</form>\n'},590:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=t(591),u=o(l),d=function(){function e(t,o,n){"ngInject";(0,r.default)(this,e),this._$state=t,this._Store=o,this._Errors=n}return e.$inject=["$state","Store","Errors"],(0,i.default)(e,[{key:"$onInit",value:function(){this.name="addForm",this.form="addForm",this.model={},this.options={},this.fields=(0,u.default)()}},{key:"onSubmit",value:function(){var e=this;this._Store.add(this.model).then(function(){return e._$state.go("list")}).catch(function(t){return e._Errors.catch(t)})}}]),e}();exports.default=d},591:function(e,exports){"use strict";function t(){return[{key:"type",type:"select",templateOptions:{label:"Type",options:[{name:"Book",value:"book"},{name:"Podcast",value:"podcast"},{name:"Website",value:"website"},{name:"YouTube Channel",value:"youtube"}]}},{key:"name",type:"input",templateOptions:{label:"Name",placeholder:"Resource Name",required:!0}},{key:"author",type:"input",templateOptions:{label:"Author(s)",placeholder:"Resource Author",required:!0},hideExpression:"!model.type || model.type !== 'book'"},{key:"creator",type:"input",templateOptions:{label:"Creator(s)",placeholder:"Resource Creator",required:!0},hideExpression:"!model.type || (model.type !== 'youtube' && model.type !== 'podcast')"},{key:"desc",type:"textarea",templateOptions:{label:"Description",placeholder:"A really awesome resource for Subject that I use every day.",required:!0}},{key:"ref",type:"input",templateOptions:{type:"url",label:"Reference",placeholder:"http://somewhere.you.can.find.this.com/",required:!0},hideExpression:"!model.type || model.type === 'book'"}]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t},592:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(593),r=o(n),a=t(594),i=o(a),l={bindings:{},template:r.default,controller:i.default};exports.default=l},593:function(e,exports){e.exports='<header page-title="$ctrl.name"></header>\n<main class="container">\n\t<add-form></add-form>\n</main>\n'},594:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="add"}}]),e}();exports.default=l},595:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(470),u=o(l),d=t(596),s=o(d),c=t(600),f=o(c),m=r.default.module("edit",[i.default,u.default,s.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("edit",{url:"/edit/:id",component:"edit",resolve:{item:["$stateParams","Store","Errors",function(e,t,o){return t.get(e.id).then().catch(function(e){return o.catch(e)})}]}})}]).component("edit",f.default).name;exports.default=m},596:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(418),i=o(a),l=t(587),u=o(l),d=t(470),s=o(d),c=t(597),f=o(c),m=r.default.module("editForm",[i.default,u.default,s.default]).component("editForm",f.default).name;exports.default=m},597:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{
default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(598),r=o(n),a=t(599),i=o(a),l={bindings:{item:"<"},template:r.default,controller:i.default};exports.default=l},598:function(e,exports){e.exports='<form ng-submit="$ctrl.onSubmit()" name="$ctrl.form" novalidate>\n\t<formly-form model="$ctrl.model" fields="$ctrl.fields" options="$ctrl.options" form="$ctrl.form">\n\t\t<button type="submit" class="btn btn-primary submit-button" ng-disabled="$ctrl.form.$invalid">Submit</button>\n\t\t<button type="button" class="btn btn-default" ng-click="$ctrl.options.resetModel()">Reset</button>\n\t</formly-form>\n</form>\n'},599:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(537),r=o(n),a=t(425),i=o(a),l=t(426),u=o(l),d=t(591),s=o(d),c=function(){function e(t,o,n){"ngInject";(0,i.default)(this,e),this._$state=t,this._Store=o,this._Errors=n}return e.$inject=["$state","Store","Errors"],(0,u.default)(e,[{key:"$onInit",value:function(){this.name="editResource",this.form="editForm",this.model=this.item?JSON.parse((0,r.default)(this.item)):{},this.options={},this.fields=(0,s.default)()}},{key:"onSubmit",value:function(){var e=this;this._Store.edit(this.model).then(function(){return e._$state.go("list")}).catch(function(t){return e._Errors.catch(t)})}}]),e}();exports.default=c},600:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(601),r=o(n),a=t(602),i=o(a),l={bindings:{item:"<"},template:r.default,controller:i.default};exports.default=l},601:function(e,exports){e.exports='<header page-title="$ctrl.name"></header>\n<main class="container">\n\t\t<edit-form item="$ctrl.item"></edit-form>\n</main>'},602:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="edit"}}]),e}();exports.default=l},603:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),a=t(332),i=o(a),l=t(604),u=o(l),d=t(470),s=o(d),c=t(606),f=o(c),m=r.default.module("list",[i.default,u.default,s.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("list",{url:"/list",component:"list",resolve:{items:["Store","Errors",function(e,t){return e.list().then().catch(function(e){return t.catch(e)})}]}})}]).component("list",f.default).name;exports.default=m},606:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(607),r=o(n),a=t(608),i=o(a),l={bindings:{items:"<"},template:r.default,controller:i.default};exports.default=l},607:function(e,exports){e.exports='<header page-title="$ctrl.name"></header>\n<main class="container">\n\t<resources items="$ctrl.items" type="all"></resources>\n</main>'},608:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),a=t(426),i=o(a),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,[{key:"$onInit",value:function(){this.name="list"}}]),e}();exports.default=l},609:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(610),r=o(n);t(611);var a={template:r.default};exports.default=a},610:function(e,exports){e.exports='<div class="app">\n\t<div ui-view></div>\n</div>\n'},611:function(e,exports,t){var o=t(612);"string"==typeof o&&(o=[[e.id,o,""]]);t(448)(o,{});o.locals&&(e.exports=o.locals)},612:function(e,exports,t){exports=e.exports=t(447)(void 0),exports.push([e.id,"@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css);",""]),exports.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,".sr-only-xs-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:34em){.sr-only-xs-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}.sr-only-sm-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:48em){.sr-only-sm-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}.sr-only-md-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:62em){.sr-only-md-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}.sr-only-lg-down{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:75em){.sr-only-lg-down{position:relative;width:auto;height:auto;padding:0;margin:0;overflow:auto;clip:auto;border:0}}html{height:100%}body{height:auto;min-height:100%;font-family:Roboto,sans-serif;color:#222;background-color:#fff}main{display:block;padding:10px}main a{font-weight:700}",""])}});
//# sourceMappingURL=app.bundle.js.map