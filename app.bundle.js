webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(329)},329:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=t(330),r=o(n),u=t(332),a=o(u),l=t(418),i=o(l),d=t(420),s=o(d),c=t(578),f=o(c),m=t(625),p=o(m);t(629),r.default.module("app",[a.default,i.default,s.default,f.default]).component("app",p.default)},420:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(421),a=o(u),l=t(430),i=o(l),d=t(461),s=o(d),c=t(554),f=o(c),m=t(480),p=o(m),v=t(576),h=o(v),_=r.default.module("app.common",[a.default,i.default,s.default,f.default,p.default,h.default]).name;exports.default=_},421:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(422),i=o(l),d=r.default.module("header",[a.default]).component("header",i.default).name;exports.default=d},422:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(423),r=o(n),u=t(424),a=o(u);t(426);var l={bindings:{name:"<"},template:r.default,controller:a.default};exports.default=l},423:function(e,exports){e.exports='<navbar></navbar>\n<h1 class="h3">{{ $ctrl.name }}</h1>\n'},424:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=function e(){(0,r.default)(this,e),this.name="header"};exports.default=u},426:function(e,exports,t){var o=t(427);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},427:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".header{color:red}",""])},430:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(431),i=o(l),d=t(436),s=o(d),c=r.default.module("navbar",[a.default,s.default]).component("navbar",i.default).name;exports.default=c},431:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(432),r=o(n),u=t(433),a=o(u);t(434);var l={bindings:{},template:r.default,controller:a.default};exports.default=l},432:function(e,exports){e.exports='<div class="container">\n\t<div class="navbar-header">\n\t\t<a class="navbar-brand" ui-sref="home">Your Favorite Resources</a>\n\t</div>\n\t<nav class="collapse navbar-collapse">\n\t\t<div class="nav navbar-nav">\n\t\t\t<add-button></add-button>\t\t\t\n\t\t</div>\n\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t<li ui-sref-active="active"><a ui-sref="home">home</a></li>\n\t\t\t<li ui-sref-active="active"><a ui-sref="about">about</a></li>\n\t\t\t<li ui-sref-active="active"><a ui-sref="list">list</a></li>\n\t\t</ul>\n\t</nav>\n</div>'},433:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=function e(){(0,r.default)(this,e),this.name="navbar"};exports.default=u},434:function(e,exports,t){var o=t(435);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},435:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"navbar{display:block;background-color:#6f5499}navbar a{color:#fff}navbar a:hover{color:#bfb2d4}navbar add-button{display:flex;align-items:center;height:100%;min-height:50px}navbar .active a{background-color:#bfb2d4}navbar .nav>li>a:focus,navbar .nav>li>a:hover{color:#6f5499;background-color:#dad2e7}",""])},436:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(437),a=o(u),l=r.default.module("addButton",[]).component("addButton",a.default).name;exports.default=l},437:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(438),r=o(n),u=t(439),a=o(u);t(459);var l={bindings:{},template:r.default,controller:a.default};exports.default=l},438:function(e,exports){e.exports='<span><a class="btn btn-success" ui-sref="add">New Resource</a></span>'},439:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){"ngInject";(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="addButton",this.adding=!1,this.form="addForm"}}]),e}();exports.default=l},459:function(e,exports,t){var o=t(460);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},460:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,"",""])},461:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(462),a=o(u),l=t(467),i=o(l),d=r.default.module("resources",[i.default]).component("resources",a.default).name;exports.default=d},462:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(463),r=o(n),u=t(464),a=o(u);t(465);var l={bindings:{items:"<",type:"@"},template:r.default,controller:a.default};exports.default=l},463:function(e,exports){e.exports='<div class="container">\n\t<div ng-if="!$ctrl.items.length" class="row">\n\t\t<div class="col-xs-12">No resources have been added yet!</div>\n\t</div>\n\t<div ng-if="$ctrl.items.length" class="row row-header">\n\t\t<div ng-repeat="header in $ctrl.rowHeaders" class="{{ header.classes }}" ng-click="$ctrl.changeSort(header.key)">\n\t\t\t{{ header.label }}\n\t\t\t<span ng-show="$ctrl.sortType[0] === header.key" class="caret" ng-class="{ reverse: $ctrl.sortReverse }" aria-hidden="true"></span>\n\t\t</div>\n\t</div>\n\t<resource class="row" dir-paginate="item in $ctrl.items | orderBy:$ctrl.sortType:$ctrl.sortReverse | itemsPerPage:3 track by item.id" item="item" type="$ctrl.type"></resource>\n\t<dir-pagination-controls></dir-pagination-controls>\n</div>\n'},464:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){"ngInject";(0,r.default)(this,e),this.name="resources"}return(0,a.default)(e,[{key:"$onInit",value:function(){var e="all"===this.type;this.sortType=["type","name"],this.sortReverse=!1,this.rowHeaders=[{label:"Name",key:"name",classes:e?"col-md-4":"col-md-5"},{label:"Description",key:"desc",classes:e?"col-md-5":"col-md-6"},{label:"Type",key:"type",classes:"col-md-1"}],e&&this.rowHeaders.push({label:"Manage",classes:"col-md-2"})}},{key:"changeSort",value:function(e){if(e!==this.sortType[0]){this.sortReverse=!1;var t=e!==name?"name":"type";this.sortType=[e,t]}else this.sortReverse=!this.sortReverse}}]),e}();exports.default=l},465:function(e,exports,t){var o=t(466);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},466:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,'.resources{color:red}.row{vertical-align:top;border-top:1px solid #eceeef}.row>div{display:table-cell;padding:1rem .75rem}.row>div:nth-child(4){text-align:right}.row-header{font-weight:700;vertical-align:bottom;border-top:1px solid #eceeef;border-bottom:2px solid #eceeef}.row-header>div:nth-child(4){text-align:center}dir-pagination-controls{display:block;text-align:center}.caret.reverse{content:"";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}',""])},467:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(468),a=o(u),l=t(473),i=o(l),d=t(479),s=o(d),c=r.default.module("resource",[i.default,s.default]).component("resource",a.default).name;exports.default=c},468:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(469),r=o(n),u=t(470),a=o(u);t(471);var l={bindings:{item:"<",type:"<"},template:r.default,controller:a.default};exports.default=l},469:function(e,exports){e.exports='<div  ng-class="{ \'col-md-4\': !$ctrl.recent, \'col-md-5\': $ctrl.recent }">\n\t<a ng-if="$ctrl.item.type === \'website\'" href="$ctrl.item.ref">{{ $ctrl.item.name }}</a>\n\t<span ng-if="$ctrl.item.type !== \'website\'">{{ $ctrl.item.name }}</span>\n\t<span ng-if="$ctrl.item.author || $ctrl.item.creator"><i>by</i> {{ $ctrl.item.author || $ctrl.item.creator }}</span>\n</div>\n<div ng-class="{ \'col-md-5\': !$ctrl.recent, \'col-md-6\': $ctrl.recent }">{{ $ctrl.item.desc }}</div>\n<div class="col-md-1">{{ $ctrl.item.type }}</div>\n<div class="col-md-1" ng-if="!$ctrl.recent">\n\t<edit-button item="$ctrl.item"></edit-button>\n</div>\n<div class="col-md-1" ng-if="!$ctrl.recent">\n\t<remove-form item="$ctrl.item"></remove-form>\n</div>'},470:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="resource",this.recent="recent"===this.type}}]),e}();exports.default=l},471:function(e,exports,t){var o=t(472);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},472:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,"resource{display:block}",""])},473:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(474),a=o(u),l=r.default.module("editButton",[]).component("editButton",a.default).name;exports.default=l},474:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(475),r=o(n),u=t(476),a=o(u);t(477);var l={bindings:{item:"<"},template:r.default,controller:a.default};exports.default=l},475:function(e,exports){e.exports='<span><a class="btn btn-info" ui-sref="edit({ id: $ctrl.item.id })">Edit</a></span>'},476:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="editButton",this.editing=!1}}]),e}();exports.default=l},477:function(e,exports,t){var o=t(478);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},478:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".editButton{color:red}",""])},479:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(480),a=o(u),l=t(554),i=o(l),d=t(571),s=o(d),c=r.default.module("removeForm",[a.default,i.default]).component("removeForm",s.default).name;exports.default=c},480:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(481),a=(o(u),t(486)),l=o(a),i=r.default.module("store",["angular-uuid"]).constant("STORAGE_KEY","ejbaker-codetest-resources").service("Store",l.default).name;exports.default=i},486:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(487),r=o(n),u=t(425),a=o(u),l=t(440),i=o(l),d=t(542),s=t(544),c=t(549),f=function(){function e(t,o,n){"ngInject";(0,a.default)(this,e),this._$window=n,this._uuid=o,this._STORAGE_KEY=t,this._resources=(0,s.list)(this._$window,this._STORAGE_KEY)}return e.$inject=["STORAGE_KEY","uuid","$window"],(0,i.default)(e,[{key:"list",value:function(e){return e?this.listRecent(e):r.default.resolve(this._resources)}},{key:"listRecent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=(0,d.sortBy)(this._resources,"added");return r.default.resolve(t.slice(0,e))}},{key:"get",value:function(e){var t=(0,c.getById)(e,this._resources);return(0,d.isEmpty)(t)?r.default.reject("No resource with that ID!"):r.default.resolve(t)}},{key:"add",value:function(e){if((0,c.ensureUniq)(e.name,e.type,this._resources))return r.default.reject("Resource exists!");e.id=this._uuid.v4(),e.added=new Date,e.updated=new Date;var t=this._resources;return t.push(e),(0,s.save)(this._$window,this._STORAGE_KEY,t),r.default.resolve(this._resources)}},{key:"edit",value:function(e){var t=this._resources,o=t.findIndex(function(t){return t.id===e.id});return o>-1?(e.updated=new Date,t[o]=e,(0,s.save)(this._$window,this._STORAGE_KEY,t),r.default.resolve(this._resources)):r.default.reject("No resource with that ID!")}},{key:"remove",value:function(e){(0,d.isString)(e)&&(e=[e]);var t=(0,c.getByIds)(e,this._resources);return(0,d.isEmpty)(t)?r.default.reject("No resource with that ID!"):((0,s.save)(this._$window,this._STORAGE_KEY,(0,c.removeByIds)(e,this._resources)),r.default.resolve(this._resources))}}]),e}();exports.default=f},544:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(545);Object.defineProperty(exports,"list",{enumerable:!0,get:function(){return o(n).default}});var r=t(546);Object.defineProperty(exports,"save",{enumerable:!0,get:function(){return o(r).default}})},545:function(e,exports,t){"use strict";function o(e,t){var o=e.localStorage.getItem(t);return(0,n.isString)(o)&&(o=JSON.parse(o)),(0,n.isEmpty)(o)?[]:o}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(542);exports.default=o},546:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){(0,a.isString)(o)||(o=(0,u.default)(o)),e.localStorage.setItem(t,o)}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(547),u=o(r),a=t(542);exports.default=n},549:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(550);Object.defineProperty(exports,"ensureUniq",{enumerable:!0,get:function(){return o(n).default}});var r=t(551);Object.defineProperty(exports,"getById",{enumerable:!0,get:function(){return o(r).default}});var u=t(552);Object.defineProperty(exports,"getByIds",{enumerable:!0,get:function(){return o(u).default}});var a=t(553);Object.defineProperty(exports,"removeByIds",{enumerable:!0,get:function(){return o(a).default}})},550:function(e,exports,t){"use strict";function o(e,t,o){return(0,n.find)(o,function(o){return o.name===e&&o.type===t})}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(542);exports.default=o},551:function(e,exports,t){"use strict";function o(e,t){return(0,n.find)(t,function(t){return t.id===e})}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(542);exports.default=o},552:function(e,exports,t){"use strict";function o(e,t){return(0,n.find)(t,function(t){return(0,n.includes)(e,t.id)})}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(542);exports.default=o},553:function(e,exports,t){"use strict";function o(e,t){return(0,n.isString)(e)&&(e=[e]),(0,n.remove)(t,function(t){return(0,n.includes)(e,t.id)}),t}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(542);exports.default=o},554:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(555),a=o(u),l=t(481),i=(o(l),t(567)),d=o(i);t(569);var s=r.default.module("modal",[a.default]).service("Modal",d.default).name;exports.default=s},567:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=t(542),i=t(568),d=o(i),s=function(){function e(t){"ngInject";(0,r.default)(this,e),this._$uibModal=t,this.modalDefaults={backdrop:!0,keyboard:!0,modalFade:!0,template:d.default,windowClass:"modal-secondary"},this.modalOptions={closeButtonText:"Cancel",actionButtonText:"OK",headerText:"Proceed?",bodyText:"Perform this action?"}}return e.$inject=["$uibModal"],(0,a.default)(e,[{key:"showModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return console.log("Updating modal defaults..."),e.backdrop="static",this.show(e,t)}},{key:"show",value:function(e,t){console.log("Show...");var o=this,n={},r={};return(0,l.assignIn)(n,o.modalDefaults,e),(0,l.assignIn)(r,o.modalOptions,t),n.controller||(n.controllerAs="$ctrl",n.bindToController=!0,n.controller=["$uibModalInstance",function(e){"ngInject";this.modalOptions=r,this.modalOptions.ok=function(t){e.close(t)},this.modalOptions.close=function(){e.dismiss("cancel")}}]),console.log("Returning $uibModal"),o._$uibModal.open(n).result}},{key:"confirm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("Confirming...");var t={type:"warn",closeButtonText:"Cancel",actionButtonText:"Confirm",headerText:"Please Confirm",bodyText:"Are you sure?"};return console.log("Showing modal..."),this.showModal({windowClass:"modal-warn"},(0,l.assignIn)({},t,e))}},{key:"error",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={closeButtonText:!1,actionButtonText:"OK",headerText:"Error",bodyText:"Something went wrong."};return this.showModal({windowClass:"modal-danger"},(0,l.assignIn)({},t,e))}}]),e}();exports.default=s},568:function(e,exports){e.exports='<div class="modal-header" ng-if="$ctrl.modalOptions.headerText">\n\t<h3>{{ $ctrl.modalOptions.headerText }}</h3>\n</div>\n<div class="modal-body" ng-if="$ctrl.modalOptions.bodyText">\n\t<p>\n\t\t{{ $ctrl.modalOptions.bodyText }}\n\t</p>\n</div>\n<div class="modal-footer">\n\t<button ng-if="$ctrl.modalOptions.actionButtonText" class="btn btn-danger" ng-click="$ctrl.modalOptions.ok()">{{ $ctrl.modalOptions.actionButtonText }}</button>\n\t<button ng-if="$ctrl.modalOptions.closeButtonText" type="button" class="btn btn-default" ng-click="$ctrl.modalOptions.close()">{{ $ctrl.modalOptions.closeButtonText }}</button>\n</div>'},569:function(e,exports,t){var o=t(570);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},570:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".modal-dialog{color:#222}.modal-secondary .modal-dialog{color:#292b2c;border-color:#ccc}.modal-secondary .modal-dialog .modal-content{background-color:#fff}.modal-success .modal-dialog{border-color:#d0e9c6;color:#3c763d}.modal-success .modal-dialog .modal-content{background-color:#dff0d8}.modal-success .modal-dialog .modal-footer,.modal-success .modal-dialog .modal-header{border-color:#d0e9c6}.modal-info .modal-dialog{border-color:#bcdff1;color:#31708f}.modal-info .modal-dialog .modal-content{background-color:#d9edf7}.modal-info .modal-dialog .modal-footer,.modal-info .modal-dialog .modal-header{border-color:#bcdff1}.modal-warn .modal-dialog{border-color:#faf2cc;color:#8a6d3b}.modal-warn .modal-dialog .modal-content{background-color:#fcf8e3}.modal-warn .modal-dialog .modal-footer,.modal-warn .modal-dialog .modal-header{border-color:#faf2cc}.modal-danger .modal-dialog{border-color:#ebcccc;color:#a94442}.modal-danger .modal-dialog .modal-content{background-color:#f2dede}.modal-danger .modal-dialog .modal-footer,.modal-danger .modal-dialog .modal-header{border-color:#ebcccc}",""])},571:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(572),r=o(n),u=t(573),a=o(u);t(574);var l={bindings:{item:"<"},template:r.default,controller:a.default};exports.default=l},572:function(e,exports){e.exports='<div>\n\t<form ng-submit="$ctrl.onSubmit()" novalidate>\n\t\t<button class="btn btn-danger">Delete</button>\n\t</form>\n</div>\n'},573:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(t,o,n){"ngInject";(0,r.default)(this,e),this._Store=t,this._Modal=o,this._Errors=n}return e.$inject=["Store","Modal","Errors"],(0,a.default)(e,[{key:"$onInit",value:function(){this.name="removeForm"}},{key:"onSubmit",value:function(){var e=this,t={actionButtonText:"Delete",bodyText:"Really delete "+this.item.name+"?"};this._Modal.confirm(t).then(function(){return e._Store.remove(e.item.id)}).catch(function(t){return e._Errors.catch(t)})}}]),e}();exports.default=l},574:function(e,exports,t){var o=t(575);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},575:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".removeForm{color:red}",""])},576:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(577),a=o(u),l=t(554),i=o(l),d=r.default.module("errors",[i.default]).service("Errors",a.default).name;exports.default=d},577:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=t(542),i=function(){function e(t){"ngInject";(0,r.default)(this,e),this._Modal=t}return e.$inject=["Modal"],(0,a.default)(e,[{key:"catch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An error occurred.";return(0,l.isError)(e)&&(0,l.has)(e,"message")?this._Modal.error({bodyText:e.message}):"cancel"!==e&&this._Modal.error({bodyText:e})}}]),e}();exports.default=i},578:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(579),a=o(u),l=t(585),i=o(l),d=t(591),s=o(d),c=t(605),f=o(c),m=t(617),p=o(m),v=r.default.module("app.components",[a.default,i.default,s.default,f.default,p.default]).name;exports.default=v},579:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(480),i=o(l),d=t(580),s=o(d),c=r.default.module("home",[a.default,i.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",component:"home",resolve:{items:["Store","Errors",function(e,t){return e.list(5).then().catch(function(e){return t.catch(e)})}]}})}]).component("home",s.default).name;exports.default=c},580:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(581),r=o(n),u=t(582),a=o(u);t(583);var l={bindings:{items:"<"},template:r.default,controller:a.default};exports.default=l},581:function(e,exports){e.exports='<header name="$ctrl.name"></header>\n<main>\n\t<resources items="$ctrl.items" type="recent"></resources>\n</main>'},582:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="recent activity"}}]),e}();exports.default=l},583:function(e,exports,t){var o=t(584);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},584:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".home{color:red}",""])},585:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(586),i=o(l),d=r.default.module("about",[a.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("about",{url:"/about",component:"about"})}]).component("about",i.default).name;exports.default=d},586:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(587),r=o(n),u=t(588),a=o(u);t(589);var l={bindings:{},template:r.default,controller:a.default};exports.default=l},587:function(e,exports){e.exports='<header name="$ctrl.name"></header>\n<main>\n\t<h1 class="h4">Your resources, your way</h1>\n\t<p>Every resource you add to this site is saved in your own computer\'s localStorage!</p>\n</main>'},588:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=function e(){(0,r.default)(this,e),this.name="about"};exports.default=u},589:function(e,exports,t){var o=t(590);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},590:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".about{color:red}",""])},591:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(592),i=o(l),d=t(600),s=o(d),c=r.default.module("add",[a.default,i.default]).config(["$stateProvider",function(e){"ngInject";e.state("add",{url:"/add",component:"add"})}]).component("add",s.default).name;exports.default=c},592:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(418),i=o(l),d=t(593),s=o(d),c=t(480),f=o(c),m=t(576),p=o(m),v=t(594),h=o(v),_=r.default.module("addForm",[a.default,i.default,s.default,f.default,p.default]).component("addForm",h.default).name;exports.default=_},594:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(595),r=o(n),u=t(596),a=o(u);t(598);var l={bindings:{},template:r.default,controller:a.default};exports.default=l},595:function(e,exports){e.exports='<form ng-submit="$ctrl.onSubmit()" name="$ctrl.form" novalidate>\n\t<formly-form model="$ctrl.model" fields="$ctrl.fields" options="$ctrl.options" form="$ctrl.form">\n\t\t<button type="submit" class="btn btn-primary submit-button" ng-disabled="$ctrl.form.$invalid">Submit</button>\n\t\t<button type="button" class="btn btn-default" ng-click="$ctrl.options.resetModel()">Reset</button>\n\t</formly-form>\n</form>\n'},596:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=t(597),i=o(l),d=function(){function e(t,o,n){"ngInject";(0,r.default)(this,e),this._$state=t,this._Store=o,this._Errors=n}return e.$inject=["$state","Store","Errors"],(0,a.default)(e,[{key:"$onInit",value:function(){this.name="addForm",this.adding=!1,this.form="addForm",this.model={},this.options={},this.fields=(0,i.default)()}},{key:"onSubmit",value:function(){var e=this;this.adding=!1,this._Store.add(this.model).then(function(){return e._$state.go("list")}).catch(function(t){return e._Errors.catch(t)})}}]),e}();exports.default=d},597:function(e,exports){"use strict";function t(){return[{key:"type",type:"select",templateOptions:{label:"Type",options:[{name:"Book",value:"book"},{name:"Podcast",value:"podcast"},{name:"Website",value:"website"},{name:"YouTube Channel",value:"youtube"}]}},{key:"name",type:"input",templateOptions:{label:"Name",placeholder:"Resource Name",required:!0}},{key:"author",type:"input",templateOptions:{label:"Author(s)",placeholder:"Resource Author",required:!0},hideExpression:"!model.type || model.type !== 'book'"},{key:"creator",type:"input",templateOptions:{label:"Creator(s)",placeholder:"Resource Creator",required:!0},hideExpression:"!model.type || (model.type !== 'youtube' && model.type !== 'podcast')"},{key:"desc",type:"textarea",templateOptions:{label:"Description",placeholder:"A really awesome resource for Subject that I use every day.",required:!0}},{key:"ref",type:"input",templateOptions:{type:"url",label:"Reference",placeholder:"http://somewhere.you.can.find.this.com/",required:!0},hideExpression:"!model.type || model.type === 'book'"}]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t},598:function(e,exports,t){var o=t(599);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},599:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".addResource{color:red}",""])},600:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(601),r=o(n),u=t(602),a=o(u);t(603);var l={bindings:{},template:r.default,controller:a.default};exports.default=l},601:function(e,exports){e.exports='<header name="$ctrl.name"></header>\n<main>\n\t<add-form></add-form>\n</main>\n'},602:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="add"}}]),e}();exports.default=l},603:function(e,exports,t){var o=t(604);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},604:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".add{color:red}",""])},605:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(480),i=o(l),d=t(606),s=o(d),c=t(612),f=o(c),m=r.default.module("edit",[a.default,i.default,s.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("edit",{url:"/edit/:id",component:"edit",resolve:{item:["$stateParams","Store","Errors",function(e,t,o){return t.get(e.id).then().catch(function(e){return o.catch(e)})}]}})}]).component("edit",f.default).name;exports.default=m},606:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(418),a=o(u),l=t(593),i=o(l),d=t(480),s=o(d),c=t(607),f=o(c),m=r.default.module("editForm",[a.default,i.default,s.default]).component("editForm",f.default).name;exports.default=m},607:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(608),r=o(n),u=t(609),a=o(u);t(610);var l={bindings:{item:"<"},template:r.default,controller:a.default};exports.default=l},608:function(e,exports){e.exports='<form ng-submit="$ctrl.onSubmit()" name="$ctrl.form" novalidate>\n\t<formly-form model="$ctrl.model" fields="$ctrl.fields" options="$ctrl.options" form="$ctrl.form">\n\t\t<button type="submit" class="btn btn-primary submit-button" ng-disabled="$ctrl.form.$invalid">Submit</button>\n\t\t<button type="button" class="btn btn-default" ng-click="$ctrl.options.resetModel()">Reset</button>\n\t</formly-form>\n</form>\n'},609:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0
});var n=t(547),r=o(n),u=t(425),a=o(u),l=t(440),i=o(l),d=t(597),s=o(d),c=function(){function e(t,o,n){"ngInject";(0,a.default)(this,e),this._$state=t,this._Store=o,this._Errors=n}return e.$inject=["$state","Store","Errors"],(0,i.default)(e,[{key:"$onInit",value:function(){this.name="editResource",this.editing=!1,this.form="editForm",this.model=this.item?JSON.parse((0,r.default)(this.item)):{},this.options={},this.fields=(0,s.default)()}},{key:"onSubmit",value:function(){var e=this;this.editing=!1,this._Store.edit(this.model).then(function(){return e._$state.go("list")}).catch(function(t){return e._Errors.catch(t)})}}]),e}();exports.default=c},610:function(e,exports,t){var o=t(611);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},611:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".editResource{color:red}",""])},612:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(613),r=o(n),u=t(614),a=o(u);t(615);var l={bindings:{item:"<"},template:r.default,controller:a.default};exports.default=l},613:function(e,exports){e.exports='<header name="$ctrl.name"></header>\n<main>\n\t<edit-form item="$ctrl.item"></edit-form>\n</main>'},614:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="edit"}}]),e}();exports.default=l},615:function(e,exports,t){var o=t(616);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},616:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".edit{color:red}",""])},617:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(330),r=o(n),u=t(332),a=o(u),l=t(618),i=o(l),d=t(480),s=o(d),c=t(620),f=o(c),m=r.default.module("list",[a.default,i.default,s.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("list",{url:"/list",component:"list",resolve:{items:["Store","Errors",function(e,t){return e.list().then().catch(function(e){return t.catch(e)})}]}})}]).component("list",f.default).name;exports.default=m},620:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(621),r=o(n),u=t(622),a=o(u);t(623);var l={bindings:{items:"<"},template:r.default,controller:a.default};exports.default=l},621:function(e,exports){e.exports='<header name="$ctrl.name"></header>\n<main>\n\t<resources items="$ctrl.items" type="all"></resources>\n</main>'},622:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(425),r=o(n),u=t(440),a=o(u),l=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"$onInit",value:function(){this.name="list"}}]),e}();exports.default=l},623:function(e,exports,t){var o=t(624);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},624:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,".list{color:red}",""])},625:function(e,exports,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(626),r=o(n);t(627);var u={template:r.default};exports.default=u},626:function(e,exports){e.exports='<div class="app">\n\t<div ui-view></div>\n</div>\n'},627:function(e,exports,t){var o=t(628);"string"==typeof o&&(o=[[e.id,o,""]]);t(429)(o,{});o.locals&&(e.exports=o.locals)},628:function(e,exports,t){exports=e.exports=t(428)(void 0),exports.push([e.id,"@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css);",""]),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"html{height:100%}body{height:auto;min-height:100%;font-family:Roboto,sans-serif;color:#222;background-color:#fff}.app header>h1{padding:10px;text-transform:capitalize}.app header nav{border-radius:0;padding-bottom:20px}.app main{padding:10px}.app main a{font-weight:700}",""])}});
//# sourceMappingURL=app.bundle.js.map