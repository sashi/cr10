var Ge=Object.defineProperty;var Qe=(e,n,i)=>n in e?Ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var C=(e,n,i)=>(Qe(e,typeof n!="symbol"?n+"":n,i),i);import{gE as Ze}from"./setupMonaco-3db402c8.js";import"./index-6f2994c0.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var Ke=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyNames,rt=Object.prototype.hasOwnProperty,oe=(e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of tt(n))!rt.call(e,t)&&t!==i&&Ke(e,t,{get:()=>n[t],enumerable:!(r=et(n,t))||r.enumerable});return e},nt=(e,n,i)=>(oe(e,n,"default"),i&&oe(i,n,"default")),l={};nt(l,Ze);var it=2*60*1e3,at=class{constructor(e){C(this,"_defaults");C(this,"_idleCheckInterval");C(this,"_lastUsedTime");C(this,"_configChangeListener");C(this,"_worker");C(this,"_client");this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>it&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=l.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>n)}},ue;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(ue||(ue={}));var Y;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(Y||(Y={}));var T;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=Y.MAX_VALUE),t===Number.MAX_VALUE&&(t=Y.MAX_VALUE),{line:r,character:t}}e.create=n;function i(r){var t=r;return o.objectLiteral(t)&&o.uinteger(t.line)&&o.uinteger(t.character)}e.is=i})(T||(T={}));var _;(function(e){function n(r,t,a,s){if(o.uinteger(r)&&o.uinteger(t)&&o.uinteger(a)&&o.uinteger(s))return{start:T.create(r,t),end:T.create(a,s)};if(T.is(r)&&T.is(t))return{start:r,end:t};throw new Error("Range#create called with invalid arguments["+r+", "+t+", "+a+", "+s+"]")}e.create=n;function i(r){var t=r;return o.objectLiteral(t)&&T.is(t.start)&&T.is(t.end)}e.is=i})(_||(_={}));var te;(function(e){function n(r,t){return{uri:r,range:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.range)&&(o.string(t.uri)||o.undefined(t.uri))}e.is=i})(te||(te={}));var ce;(function(e){function n(r,t,a,s){return{targetUri:r,targetRange:t,targetSelectionRange:a,originSelectionRange:s}}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.targetRange)&&o.string(t.targetUri)&&(_.is(t.targetSelectionRange)||o.undefined(t.targetSelectionRange))&&(_.is(t.originSelectionRange)||o.undefined(t.originSelectionRange))}e.is=i})(ce||(ce={}));var re;(function(e){function n(r,t,a,s){return{red:r,green:t,blue:a,alpha:s}}e.create=n;function i(r){var t=r;return o.numberRange(t.red,0,1)&&o.numberRange(t.green,0,1)&&o.numberRange(t.blue,0,1)&&o.numberRange(t.alpha,0,1)}e.is=i})(re||(re={}));var de;(function(e){function n(r,t){return{range:r,color:t}}e.create=n;function i(r){var t=r;return _.is(t.range)&&re.is(t.color)}e.is=i})(de||(de={}));var fe;(function(e){function n(r,t,a){return{label:r,textEdit:t,additionalTextEdits:a}}e.create=n;function i(r){var t=r;return o.string(t.label)&&(o.undefined(t.textEdit)||M.is(t))&&(o.undefined(t.additionalTextEdits)||o.typedArray(t.additionalTextEdits,M.is))}e.is=i})(fe||(fe={}));var W;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(W||(W={}));var le;(function(e){function n(r,t,a,s,u){var c={startLine:r,endLine:t};return o.defined(a)&&(c.startCharacter=a),o.defined(s)&&(c.endCharacter=s),o.defined(u)&&(c.kind=u),c}e.create=n;function i(r){var t=r;return o.uinteger(t.startLine)&&o.uinteger(t.startLine)&&(o.undefined(t.startCharacter)||o.uinteger(t.startCharacter))&&(o.undefined(t.endCharacter)||o.uinteger(t.endCharacter))&&(o.undefined(t.kind)||o.string(t.kind))}e.is=i})(le||(le={}));var ne;(function(e){function n(r,t){return{location:r,message:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&te.is(t.location)&&o.string(t.message)}e.is=i})(ne||(ne={}));var N;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(N||(N={}));var ge;(function(e){e.Unnecessary=1,e.Deprecated=2})(ge||(ge={}));var he;(function(e){function n(i){var r=i;return r!=null&&o.string(r.href)}e.is=n})(he||(he={}));var $;(function(e){function n(r,t,a,s,u,c){var d={range:r,message:t};return o.defined(a)&&(d.severity=a),o.defined(s)&&(d.code=s),o.defined(u)&&(d.source=u),o.defined(c)&&(d.relatedInformation=c),d}e.create=n;function i(r){var t,a=r;return o.defined(a)&&_.is(a.range)&&o.string(a.message)&&(o.number(a.severity)||o.undefined(a.severity))&&(o.integer(a.code)||o.string(a.code)||o.undefined(a.code))&&(o.undefined(a.codeDescription)||o.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(o.string(a.source)||o.undefined(a.source))&&(o.undefined(a.relatedInformation)||o.typedArray(a.relatedInformation,ne.is))}e.is=i})($||($={}));var V;(function(e){function n(r,t){for(var a=[],s=2;s<arguments.length;s++)a[s-2]=arguments[s];var u={title:r,command:t};return o.defined(a)&&a.length>0&&(u.arguments=a),u}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.title)&&o.string(t.command)}e.is=i})(V||(V={}));var M;(function(e){function n(a,s){return{range:a,newText:s}}e.replace=n;function i(a,s){return{range:{start:a,end:a},newText:s}}e.insert=i;function r(a){return{range:a,newText:""}}e.del=r;function t(a){var s=a;return o.objectLiteral(s)&&o.string(s.newText)&&_.is(s.range)}e.is=t})(M||(M={}));var x;(function(e){function n(r,t,a){var s={label:r};return t!==void 0&&(s.needsConfirmation=t),a!==void 0&&(s.description=a),s}e.create=n;function i(r){var t=r;return t!==void 0&&o.objectLiteral(t)&&o.string(t.label)&&(o.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(o.string(t.description)||t.description===void 0)}e.is=i})(x||(x={}));var w;(function(e){function n(i){var r=i;return typeof r=="string"}e.is=n})(w||(w={}));var P;(function(e){function n(a,s,u){return{range:a,newText:s,annotationId:u}}e.replace=n;function i(a,s,u){return{range:{start:a,end:a},newText:s,annotationId:u}}e.insert=i;function r(a,s){return{range:a,newText:"",annotationId:s}}e.del=r;function t(a){var s=a;return M.is(s)&&(x.is(s.annotationId)||w.is(s.annotationId))}e.is=t})(P||(P={}));var G;(function(e){function n(r,t){return{textDocument:r,edits:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&Q.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(G||(G={}));var H;(function(e){function n(r,t,a){var s={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(s.options=t),a!==void 0&&(s.annotationId=a),s}e.create=n;function i(r){var t=r;return t&&t.kind==="create"&&o.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||o.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||o.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||w.is(t.annotationId))}e.is=i})(H||(H={}));var z;(function(e){function n(r,t,a,s){var u={kind:"rename",oldUri:r,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(u.options=a),s!==void 0&&(u.annotationId=s),u}e.create=n;function i(r){var t=r;return t&&t.kind==="rename"&&o.string(t.oldUri)&&o.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||o.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||o.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||w.is(t.annotationId))}e.is=i})(z||(z={}));var B;(function(e){function n(r,t,a){var s={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(s.options=t),a!==void 0&&(s.annotationId=a),s}e.create=n;function i(r){var t=r;return t&&t.kind==="delete"&&o.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||o.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||o.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||w.is(t.annotationId))}e.is=i})(B||(B={}));var ie;(function(e){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(t){return o.string(t.kind)?H.is(t)||z.is(t)||B.is(t):G.is(t)}))}e.is=n})(ie||(ie={}));var J=function(){function e(n,i){this.edits=n,this.changeAnnotations=i}return e.prototype.insert=function(n,i,r){var t,a;if(r===void 0?t=M.insert(n,i):w.is(r)?(a=r,t=P.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=P.insert(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(n,i,r){var t,a;if(r===void 0?t=M.replace(n,i):w.is(r)?(a=r,t=P.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=P.replace(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(n,i){var r,t;if(i===void 0?r=M.del(n):w.is(i)?(t=i,r=P.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),r=P.del(n,t)),this.edits.push(r),t!==void 0)return t},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ve=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,i){var r;if(w.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new ve(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(G.is(r)){var t=new J(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=t}})):n.changes&&Object.keys(n.changes).forEach(function(r){var t=new J(n.changes[r]);i._textEditChanges[r]=t})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(Q.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),r=new J(t,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var t=[];this._workspaceEdit.changes[n]=t,r=new J(t),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ve,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;x.is(i)||w.is(i)?t=i:r=i;var a,s;if(t===void 0?a=H.create(n,r):(s=w.is(t)?t:this._changeAnnotations.manage(t),a=H.create(n,r,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s},e.prototype.renameFile=function(n,i,r,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;x.is(r)||w.is(r)?a=r:t=r;var s,u;if(a===void 0?s=z.create(n,i,t):(u=w.is(a)?a:this._changeAnnotations.manage(a),s=z.create(n,i,t,u)),this._workspaceEdit.documentChanges.push(s),u!==void 0)return u},e.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;x.is(i)||w.is(i)?t=i:r=i;var a,s;if(t===void 0?a=B.create(n,r):(s=w.is(t)?t:this._changeAnnotations.manage(t),a=B.create(n,r,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s},e})();var pe;(function(e){function n(r){return{uri:r}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)}e.is=i})(pe||(pe={}));var me;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)&&o.integer(t.version)}e.is=i})(me||(me={}));var Q;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)&&(t.version===null||o.integer(t.version))}e.is=i})(Q||(Q={}));var _e;(function(e){function n(r,t,a,s){return{uri:r,languageId:t,version:a,text:s}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.string(t.uri)&&o.string(t.languageId)&&o.integer(t.version)&&o.string(t.text)}e.is=i})(_e||(_e={}));var q;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(q||(q={}));(function(e){function n(i){var r=i;return r===e.PlainText||r===e.Markdown}e.is=n})(q||(q={}));var ae;(function(e){function n(i){var r=i;return o.objectLiteral(i)&&q.is(r.kind)&&o.string(r.value)}e.is=n})(ae||(ae={}));var p;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(p||(p={}));var se;(function(e){e.PlainText=1,e.Snippet=2})(se||(se={}));var ke;(function(e){e.Deprecated=1})(ke||(ke={}));var we;(function(e){function n(r,t,a){return{newText:r,insert:t,replace:a}}e.create=n;function i(r){var t=r;return t&&o.string(t.newText)&&_.is(t.insert)&&_.is(t.replace)}e.is=i})(we||(we={}));var be;(function(e){e.asIs=1,e.adjustIndentation=2})(be||(be={}));var Ce;(function(e){function n(i){return{label:i}}e.create=n})(Ce||(Ce={}));var Ee;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}e.create=n})(Ee||(Ee={}));var Z;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function i(r){var t=r;return o.string(t)||o.objectLiteral(t)&&o.string(t.language)&&o.string(t.value)}e.is=i})(Z||(Z={}));var Ae;(function(e){function n(i){var r=i;return!!r&&o.objectLiteral(r)&&(ae.is(r.contents)||Z.is(r.contents)||o.typedArray(r.contents,Z.is))&&(i.range===void 0||_.is(i.range))}e.is=n})(Ae||(Ae={}));var ye;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}e.create=n})(ye||(ye={}));var Se;(function(e){function n(i,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s={label:i};return o.defined(r)&&(s.documentation=r),o.defined(t)?s.parameters=t:s.parameters=[],s}e.create=n})(Se||(Se={}));var U;(function(e){e.Text=1,e.Read=2,e.Write=3})(U||(U={}));var Ie;(function(e){function n(i,r){var t={range:i};return o.number(r)&&(t.kind=r),t}e.create=n})(Ie||(Ie={}));var m;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(m||(m={}));var Te;(function(e){e.Deprecated=1})(Te||(Te={}));var Pe;(function(e){function n(i,r,t,a,s){var u={name:i,kind:r,location:{uri:a,range:t}};return s&&(u.containerName=s),u}e.create=n})(Pe||(Pe={}));var Me;(function(e){function n(r,t,a,s,u,c){var d={name:r,detail:t,kind:a,range:s,selectionRange:u};return c!==void 0&&(d.children=c),d}e.create=n;function i(r){var t=r;return t&&o.string(t.name)&&o.number(t.kind)&&_.is(t.range)&&_.is(t.selectionRange)&&(t.detail===void 0||o.string(t.detail))&&(t.deprecated===void 0||o.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(Me||(Me={}));var Le;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Le||(Le={}));var Re;(function(e){function n(r,t){var a={diagnostics:r};return t!=null&&(a.only=t),a}e.create=n;function i(r){var t=r;return o.defined(t)&&o.typedArray(t.diagnostics,$.is)&&(t.only===void 0||o.typedArray(t.only,o.string))}e.is=i})(Re||(Re={}));var De;(function(e){function n(r,t,a){var s={title:r},u=!0;return typeof t=="string"?(u=!1,s.kind=t):V.is(t)?s.command=t:s.edit=t,u&&a!==void 0&&(s.kind=a),s}e.create=n;function i(r){var t=r;return t&&o.string(t.title)&&(t.diagnostics===void 0||o.typedArray(t.diagnostics,$.is))&&(t.kind===void 0||o.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||V.is(t.command))&&(t.isPreferred===void 0||o.boolean(t.isPreferred))&&(t.edit===void 0||ie.is(t.edit))}e.is=i})(De||(De={}));var Ne;(function(e){function n(r,t){var a={range:r};return o.defined(t)&&(a.data=t),a}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.range)&&(o.undefined(t.command)||V.is(t.command))}e.is=i})(Ne||(Ne={}));var Oe;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}e.create=n;function i(r){var t=r;return o.defined(t)&&o.uinteger(t.tabSize)&&o.boolean(t.insertSpaces)}e.is=i})(Oe||(Oe={}));var xe;(function(e){function n(r,t,a){return{range:r,target:t,data:a}}e.create=n;function i(r){var t=r;return o.defined(t)&&_.is(t.range)&&(o.undefined(t.target)||o.string(t.target))}e.is=i})(xe||(xe={}));var je;(function(e){function n(r,t){return{range:r,parent:t}}e.create=n;function i(r){var t=r;return t!==void 0&&_.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(je||(je={}));var Fe;(function(e){function n(a,s,u,c){return new st(a,s,u,c)}e.create=n;function i(a){var s=a;return!!(o.defined(s)&&o.string(s.uri)&&(o.undefined(s.languageId)||o.string(s.languageId))&&o.uinteger(s.lineCount)&&o.func(s.getText)&&o.func(s.positionAt)&&o.func(s.offsetAt))}e.is=i;function r(a,s){for(var u=a.getText(),c=t(s,function(I,R){var j=I.range.start.line-R.range.start.line;return j===0?I.range.start.character-R.range.start.character:j}),d=u.length,v=c.length-1;v>=0;v--){var g=c[v],b=a.offsetAt(g.range.start),h=a.offsetAt(g.range.end);if(h<=d)u=u.substring(0,b)+g.newText+u.substring(h,u.length);else throw new Error("Overlapping edit");d=b}return u}e.applyEdits=r;function t(a,s){if(a.length<=1)return a;var u=a.length/2|0,c=a.slice(0,u),d=a.slice(u);t(c,s),t(d,s);for(var v=0,g=0,b=0;v<c.length&&g<d.length;){var h=s(c[v],d[g]);h<=0?a[b++]=c[v++]:a[b++]=d[g++]}for(;v<c.length;)a[b++]=c[v++];for(;g<d.length;)a[b++]=d[g++];return a}})(Fe||(Fe={}));var st=function(){function e(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},e.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,t=0;t<i.length;t++){r&&(n.push(t),r=!1);var a=i.charAt(t);r=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return T.create(0,n);for(;r<t;){var a=Math.floor((r+t)/2);i[a]>n?t=a:r=a+1}var s=r-1;return T.create(s,n-i[s])},e.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),o;(function(e){var n=Object.prototype.toString;function i(h){return typeof h<"u"}e.defined=i;function r(h){return typeof h>"u"}e.undefined=r;function t(h){return h===!0||h===!1}e.boolean=t;function a(h){return n.call(h)==="[object String]"}e.string=a;function s(h){return n.call(h)==="[object Number]"}e.number=s;function u(h,I,R){return n.call(h)==="[object Number]"&&I<=h&&h<=R}e.numberRange=u;function c(h){return n.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}e.integer=c;function d(h){return n.call(h)==="[object Number]"&&0<=h&&h<=2147483647}e.uinteger=d;function v(h){return n.call(h)==="[object Function]"}e.func=v;function g(h){return h!==null&&typeof h=="object"}e.objectLiteral=g;function b(h,I){return Array.isArray(h)&&h.every(I)}e.typedArray=b})(o||(o={}));var ot=class{constructor(e,n,i){C(this,"_disposables",[]);C(this,"_listener",Object.create(null));this._languageId=e,this._worker=n;const r=a=>{let s=a.getLanguageId();if(s!==this._languageId)return;let u;this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(a.uri,s),500)}),this._doValidate(a.uri,s)},t=a=>{l.editor.setModelMarkers(a,this._languageId,[]);let s=a.uri.toString(),u=this._listener[s];u&&(u.dispose(),delete this._listener[s])};this._disposables.push(l.editor.onDidCreateModel(r)),this._disposables.push(l.editor.onWillDisposeModel(t)),this._disposables.push(l.editor.onDidChangeModelLanguage(a=>{t(a.model),r(a.model)})),this._disposables.push(i(a=>{l.editor.getModels().forEach(s=>{s.getLanguageId()===this._languageId&&(t(s),r(s))})})),this._disposables.push({dispose:()=>{l.editor.getModels().forEach(t);for(let a in this._listener)this._listener[a].dispose()}}),l.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,n){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{const r=i.map(a=>ct(e,a));let t=l.editor.getModel(e);t&&t.getLanguageId()===n&&l.editor.setModelMarkers(t,n,r)}).then(void 0,i=>{console.error(i)})}};function ut(e){switch(e){case N.Error:return l.MarkerSeverity.Error;case N.Warning:return l.MarkerSeverity.Warning;case N.Information:return l.MarkerSeverity.Info;case N.Hint:return l.MarkerSeverity.Hint;default:return l.MarkerSeverity.Info}}function ct(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:ut(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}var dt=class{constructor(e,n){this._worker=e,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doComplete(t.toString(),L(n))).then(a=>{if(!a)return;const s=e.getWordUntilPosition(n),u=new l.Range(n.lineNumber,s.startColumn,n.lineNumber,s.endColumn),c=a.items.map(d=>{const v={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:gt(d.command),range:u,kind:lt(d.kind)};return d.textEdit&&(ft(d.textEdit)?v.range={insert:y(d.textEdit.insert),replace:y(d.textEdit.replace)}:v.range=y(d.textEdit.range),v.insertText=d.textEdit.newText),d.additionalTextEdits&&(v.additionalTextEdits=d.additionalTextEdits.map(X)),d.insertTextFormat===se.Snippet&&(v.insertTextRules=l.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:a.isIncomplete,suggestions:c}})}};function L(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Be(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function y(e){if(e)return new l.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ft(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function lt(e){const n=l.languages.CompletionItemKind;switch(e){case p.Text:return n.Text;case p.Method:return n.Method;case p.Function:return n.Function;case p.Constructor:return n.Constructor;case p.Field:return n.Field;case p.Variable:return n.Variable;case p.Class:return n.Class;case p.Interface:return n.Interface;case p.Module:return n.Module;case p.Property:return n.Property;case p.Unit:return n.Unit;case p.Value:return n.Value;case p.Enum:return n.Enum;case p.Keyword:return n.Keyword;case p.Snippet:return n.Snippet;case p.Color:return n.Color;case p.File:return n.File;case p.Reference:return n.Reference}return n.Property}function X(e){if(e)return{range:y(e.range),text:e.newText}}function gt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var ht=class{constructor(e){this._worker=e}provideHover(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.doHover(r.toString(),L(n))).then(t=>{if(t)return{range:y(t.range),contents:pt(t.contents)}})}};function vt(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function We(e){return typeof e=="string"?{value:e}:vt(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function pt(e){if(e)return Array.isArray(e)?e.map(We):[We(e)]}var qt=class{constructor(e){this._worker=e}provideDocumentHighlights(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDocumentHighlights(r.toString(),L(n))).then(t=>{if(t)return t.map(a=>({range:y(a.range),kind:mt(a.kind)}))})}};function mt(e){switch(e){case U.Read:return l.languages.DocumentHighlightKind.Read;case U.Write:return l.languages.DocumentHighlightKind.Write;case U.Text:return l.languages.DocumentHighlightKind.Text}return l.languages.DocumentHighlightKind.Text}var Xt=class{constructor(e){this._worker=e}provideDefinition(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDefinition(r.toString(),L(n))).then(t=>{if(t)return[qe(t)]})}};function qe(e){return{uri:l.Uri.parse(e.uri),range:y(e.range)}}var Jt=class{constructor(e){this._worker=e}provideReferences(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.findReferences(t.toString(),L(n))).then(a=>{if(a)return a.map(qe)})}},Yt=class{constructor(e){this._worker=e}provideRenameEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doRename(t.toString(),L(n),i)).then(a=>_t(a))}};function _t(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){const r=l.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,versionId:void 0,textEdit:{range:y(t.range),text:t.newText}})}return{edits:n}}var kt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:wt(t.kind),range:y(t.location.range),selectionRange:y(t.location.range),tags:[]}))})}};function wt(e){let n=l.languages.SymbolKind;switch(e){case m.File:return n.Array;case m.Module:return n.Module;case m.Namespace:return n.Namespace;case m.Package:return n.Package;case m.Class:return n.Class;case m.Method:return n.Method;case m.Property:return n.Property;case m.Field:return n.Field;case m.Constructor:return n.Constructor;case m.Enum:return n.Enum;case m.Interface:return n.Interface;case m.Function:return n.Function;case m.Variable:return n.Variable;case m.Constant:return n.Constant;case m.String:return n.String;case m.Number:return n.Number;case m.Boolean:return n.Boolean;case m.Array:return n.Array}return n.Function}var $t=class{constructor(e){this._worker=e}provideLinks(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentLinks(i.toString())).then(r=>{if(r)return{links:r.map(t=>({range:y(t.range),url:t.target}))}})}},bt=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.format(r.toString(),null,Xe(n)).then(a=>{if(!(!a||a.length===0))return a.map(X)}))}},Ct=class{constructor(e){C(this,"canFormatMultipleRanges",!1);this._worker=e}provideDocumentRangeFormattingEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.format(t.toString(),Be(n),Xe(i)).then(s=>{if(!(!s||s.length===0))return s.map(X)}))}};function Xe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Et=class{constructor(e){this._worker=e}provideDocumentColors(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(t=>({color:t.color,range:y(t.range)}))})}provideColorPresentations(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getColorPresentations(r.toString(),n.color,Be(n.range))).then(t=>{if(t)return t.map(a=>{let s={label:a.label};return a.textEdit&&(s.textEdit=X(a.textEdit)),a.additionalTextEdits&&(s.additionalTextEdits=a.additionalTextEdits.map(X)),s})})}},At=class{constructor(e){this._worker=e}provideFoldingRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getFoldingRanges(r.toString(),n)).then(t=>{if(t)return t.map(a=>{const s={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(s.kind=yt(a.kind)),s})})}};function yt(e){switch(e){case W.Comment:return l.languages.FoldingRangeKind.Comment;case W.Imports:return l.languages.FoldingRangeKind.Imports;case W.Region:return l.languages.FoldingRangeKind.Region}}var St=class{constructor(e){this._worker=e}provideSelectionRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getSelectionRanges(r.toString(),n.map(L))).then(t=>{if(t)return t.map(a=>{const s=[];for(;a;)s.push({range:y(a.range)}),a=a.parent;return s})})}};function It(e,n){n===void 0&&(n=!1);var i=e.length,r=0,t="",a=0,s=16,u=0,c=0,d=0,v=0,g=0;function b(f,E){for(var S=0,A=0;S<f||!E;){var k=e.charCodeAt(r);if(k>=48&&k<=57)A=A*16+k-48;else if(k>=65&&k<=70)A=A*16+k-65+10;else if(k>=97&&k<=102)A=A*16+k-97+10;else break;r++,S++}return S<f&&(A=-1),A}function h(f){r=f,t="",a=0,s=16,g=0}function I(){var f=r;if(e.charCodeAt(r)===48)r++;else for(r++;r<e.length&&D(e.charCodeAt(r));)r++;if(r<e.length&&e.charCodeAt(r)===46)if(r++,r<e.length&&D(e.charCodeAt(r)))for(r++;r<e.length&&D(e.charCodeAt(r));)r++;else return g=3,e.substring(f,r);var E=r;if(r<e.length&&(e.charCodeAt(r)===69||e.charCodeAt(r)===101))if(r++,(r<e.length&&e.charCodeAt(r)===43||e.charCodeAt(r)===45)&&r++,r<e.length&&D(e.charCodeAt(r))){for(r++;r<e.length&&D(e.charCodeAt(r));)r++;E=r}else g=3;return e.substring(f,E)}function R(){for(var f="",E=r;;){if(r>=i){f+=e.substring(E,r),g=2;break}var S=e.charCodeAt(r);if(S===34){f+=e.substring(E,r),r++;break}if(S===92){if(f+=e.substring(E,r),r++,r>=i){g=2;break}var A=e.charCodeAt(r++);switch(A){case 34:f+='"';break;case 92:f+="\\";break;case 47:f+="/";break;case 98:f+="\b";break;case 102:f+="\f";break;case 110:f+=`
`;break;case 114:f+="\r";break;case 116:f+="	";break;case 117:var k=b(4,!0);k>=0?f+=String.fromCharCode(k):g=4;break;default:g=5}E=r;continue}if(S>=0&&S<=31)if(F(S)){f+=e.substring(E,r),g=2;break}else g=6;r++}return f}function j(){if(t="",g=0,a=r,c=u,v=d,r>=i)return a=i,s=17;var f=e.charCodeAt(r);if(ee(f)){do r++,t+=String.fromCharCode(f),f=e.charCodeAt(r);while(ee(f));return s=15}if(F(f))return r++,t+=String.fromCharCode(f),f===13&&e.charCodeAt(r)===10&&(r++,t+=`
`),u++,d=r,s=14;switch(f){case 123:return r++,s=1;case 125:return r++,s=2;case 91:return r++,s=3;case 93:return r++,s=4;case 58:return r++,s=6;case 44:return r++,s=5;case 34:return r++,t=R(),s=10;case 47:var E=r-1;if(e.charCodeAt(r+1)===47){for(r+=2;r<i&&!F(e.charCodeAt(r));)r++;return t=e.substring(E,r),s=12}if(e.charCodeAt(r+1)===42){r+=2;for(var S=i-1,A=!1;r<S;){var k=e.charCodeAt(r);if(k===42&&e.charCodeAt(r+1)===47){r+=2,A=!0;break}r++,F(k)&&(k===13&&e.charCodeAt(r)===10&&r++,u++,d=r)}return A||(r++,g=1),t=e.substring(E,r),s=13}return t+=String.fromCharCode(f),r++,s=16;case 45:if(t+=String.fromCharCode(f),r++,r===i||!D(e.charCodeAt(r)))return s=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return t+=I(),s=11;default:for(;r<i&&Ye(f);)r++,f=e.charCodeAt(r);if(a!==r){switch(t=e.substring(a,r),t){case"true":return s=8;case"false":return s=9;case"null":return s=7}return s=16}return t+=String.fromCharCode(f),r++,s=16}}function Ye(f){if(ee(f)||F(f))return!1;switch(f){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function $e(){var f;do f=j();while(f>=12&&f<=15);return f}return{setPosition:h,getPosition:function(){return r},scan:n?$e:j,getToken:function(){return s},getTokenValue:function(){return t},getTokenOffset:function(){return a},getTokenLength:function(){return r-a},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return a-v},getTokenError:function(){return g}}}function ee(e){return e===32||e===9||e===11||e===12||e===160||e===5760||e>=8192&&e<=8203||e===8239||e===8287||e===12288||e===65279}function F(e){return e===10||e===13||e===8232||e===8233}function D(e){return e>=48&&e<=57}var Ue;(function(e){e.DEFAULT={allowTrailingComma:!1}})(Ue||(Ue={}));var Tt=It;function Pt(e){return{getInitialState:()=>new K(null,null,!1,null),tokenize:(n,i)=>Wt(e,n,i)}}var Ve="delimiter.bracket.json",He="delimiter.array.json",Mt="delimiter.colon.json",Lt="delimiter.comma.json",Rt="keyword.json",Dt="keyword.json",Nt="string.value.json",Ot="number.json",xt="string.key.json",jt="comment.block.json",Ft="comment.line.json",O=class{constructor(e,n){this.parent=e,this.type=n}static pop(e){return e?e.parent:null}static push(e,n){return new O(e,n)}static equals(e,n){if(!e&&!n)return!0;if(!e||!n)return!1;for(;e&&n;){if(e===n)return!0;if(e.type!==n.type)return!1;e=e.parent,n=n.parent}return!0}},K=class{constructor(e,n,i,r){C(this,"_state");C(this,"scanError");C(this,"lastWasColon");C(this,"parents");this._state=e,this.scanError=n,this.lastWasColon=i,this.parents=r}clone(){return new K(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this?!0:!e||!(e instanceof K)?!1:this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&O.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}};function Wt(e,n,i,r=0){let t=0,a=!1;switch(i.scanError){case 2:n='"'+n,t=1;break;case 1:n="/*"+n,t=2;break}const s=Tt(n);let u=i.lastWasColon,c=i.parents;const d={tokens:[],endState:i.clone()};for(;;){let v=r+s.getPosition(),g="";const b=s.scan();if(b===17)break;if(v===r+s.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+n.substr(s.getPosition(),3));switch(a&&(v-=t),a=t>0,b){case 1:c=O.push(c,0),g=Ve,u=!1;break;case 2:c=O.pop(c),g=Ve,u=!1;break;case 3:c=O.push(c,1),g=He,u=!1;break;case 4:c=O.pop(c),g=He,u=!1;break;case 6:g=Mt,u=!0;break;case 5:g=Lt,u=!1;break;case 8:case 9:g=Rt,u=!1;break;case 7:g=Dt,u=!1;break;case 10:const I=(c?c.type:0)===1;g=u||I?Nt:xt,u=!1;break;case 11:g=Ot,u=!1;break}if(e)switch(b){case 12:g=Ft;break;case 13:g=jt;break}d.endState=new K(i.getStateData(),s.getTokenError(),u,c),d.tokens.push({startIndex:v,scopes:g})}return d}var Ut=class extends ot{constructor(e,n,i){super(e,n,i.onDidChange),this._disposables.push(l.editor.onWillDisposeModel(r=>{this._resetSchema(r.uri)})),this._disposables.push(l.editor.onDidChangeModelLanguage(r=>{this._resetSchema(r.model.uri)}))}_resetSchema(e){this._worker().then(n=>{n.resetSchema(e.toString())})}};function Gt(e){const n=[],i=[],r=new at(e);n.push(r);const t=(...u)=>r.getLanguageServiceWorker(...u);function a(){const{languageId:u,modeConfiguration:c}=e;Je(i),c.documentFormattingEdits&&i.push(l.languages.registerDocumentFormattingEditProvider(u,new bt(t))),c.documentRangeFormattingEdits&&i.push(l.languages.registerDocumentRangeFormattingEditProvider(u,new Ct(t))),c.completionItems&&i.push(l.languages.registerCompletionItemProvider(u,new dt(t,[" ",":",'"']))),c.hovers&&i.push(l.languages.registerHoverProvider(u,new ht(t))),c.documentSymbols&&i.push(l.languages.registerDocumentSymbolProvider(u,new kt(t))),c.tokens&&i.push(l.languages.setTokensProvider(u,Pt(!0))),c.colors&&i.push(l.languages.registerColorProvider(u,new Et(t))),c.foldingRanges&&i.push(l.languages.registerFoldingRangeProvider(u,new At(t))),c.diagnostics&&i.push(new Ut(u,t,e)),c.selectionRanges&&i.push(l.languages.registerSelectionRangeProvider(u,new St(t)))}a(),n.push(l.languages.setLanguageConfiguration(e.languageId,Vt));let s=e.modeConfiguration;return e.onDidChange(u=>{u.modeConfiguration!==s&&(s=u.modeConfiguration,a())}),n.push(ze(i)),ze(n)}function ze(e){return{dispose:()=>Je(e)}}function Je(e){for(;e.length;)e.pop().dispose()}var Vt={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};export{dt as CompletionAdapter,Xt as DefinitionAdapter,ot as DiagnosticsAdapter,Et as DocumentColorAdapter,bt as DocumentFormattingEditProvider,qt as DocumentHighlightAdapter,$t as DocumentLinkAdapter,Ct as DocumentRangeFormattingEditProvider,kt as DocumentSymbolAdapter,At as FoldingRangeAdapter,ht as HoverAdapter,Jt as ReferenceAdapter,Yt as RenameAdapter,St as SelectionRangeAdapter,at as WorkerManager,L as fromPosition,Be as fromRange,Gt as setupMode,y as toRange,X as toTextEdit};
