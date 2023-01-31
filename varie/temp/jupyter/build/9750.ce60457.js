"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9750],{84288:(e,t,s)=>{s.d(t,{Ud:()=>u});const a=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),o=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>o(e)&&e[a],serialize(e){const{port1:t,port2:s}=new MessageChannel;return p(e,t),[s,[s]]},deserialize:e=>(e.start(),u(e))}],["throw",{canHandle:e=>o(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function p(e,t=self){t.addEventListener("message",(function s(i){if(!i||!i.data)return;const{id:n,type:o,path:l}=Object.assign({path:[]},i.data),u=(i.data.argumentList||[]).map(b);let h;try{const t=l.slice(0,-1).reduce(((e,t)=>e[t]),e),s=l.reduce(((e,t)=>e[t]),e);switch(o){case"GET":h=s;break;case"SET":t[l.slice(-1)[0]]=b(i.data.value),h=!0;break;case"APPLY":h=s.apply(t,u);break;case"CONSTRUCT":h=function(e){return Object.assign(e,{[a]:!0})}(new s(...u));break;case"ENDPOINT":{const{port1:t,port2:s}=new MessageChannel;p(e,s),h=function(e,t){return _.set(e,t),e}(t,[t])}break;case"RELEASE":h=void 0;break;default:return}}catch(e){h={value:e,[r]:0}}Promise.resolve(h).catch((e=>({value:e,[r]:0}))).then((e=>{const[a,i]=y(e);t.postMessage(Object.assign(Object.assign({},a),{id:n}),i),"RELEASE"===o&&(t.removeEventListener("message",s),c(t))}))})),t.start&&t.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e,t){return d(e,[],t)}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function d(e,t=[],s=function(){}){let a=!1;const r=new Proxy(s,{get(s,i){if(h(a),i===n)return()=>f(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{c(e),a=!0}));if("then"===i){if(0===t.length)return{then:()=>r};const s=f(e,{type:"GET",path:t.map((e=>e.toString()))}).then(b);return s.then.bind(s)}return d(e,[...t,i])},set(s,i,n){h(a);const[r,o]=y(n);return f(e,{type:"SET",path:[...t,i].map((e=>e.toString())),value:r},o).then(b)},apply(s,n,r){h(a);const o=t[t.length-1];if(o===i)return f(e,{type:"ENDPOINT"}).then(b);if("bind"===o)return d(e,t.slice(0,-1));const[l,p]=m(r);return f(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:l},p).then(b)},construct(s,i){h(a);const[n,r]=m(i);return f(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:n},r).then(b)}});return r}function m(e){const t=e.map(y);return[t.map((e=>e[0])),(s=t.map((e=>e[1])),Array.prototype.concat.apply([],s))];var s}const _=new WeakMap;function y(e){for(const[t,s]of l)if(s.canHandle(e)){const[a,i]=s.serialize(e);return[{type:"HANDLER",name:t,value:a},i]}return[{type:"RAW",value:e},_.get(e)||[]]}function b(e){switch(e.type){case"HANDLER":return l.get(e.name).deserialize(e.value);case"RAW":return e.value}}function f(e,t,s){return new Promise((a=>{const i=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(s){s.data&&s.data.id&&s.data.id===i&&(e.removeEventListener("message",t),a(s.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:i},t),s)}))}},56206:(e,t,s)=>{s.r(t),s.d(t,{PIPLITE_WHEEL:()=>_,PyoliteKernel:()=>g,PyoliteRemoteKernel:()=>k,allJSONUrl:()=>i,ipykernelWheelUrl:()=>r,pipliteWheelUrl:()=>l,pyoliteWheelUrl:()=>c,widgetsnbextensionWheelUrl:()=>h,widgetsnbextensionWheelUrl1:()=>m});const a=s.p+"all.json";var i=s.t(a);const n=s.p+"ipykernel-6.9.2-py3-none-any.whl";var r=s.t(n);const o=s.p+"piplite-0.1.0b18-py3-none-any.whl";var l=s.t(o);const p=s.p+"pyolite-0.1.0b18-py3-none-any.whl";var c=s.t(p);const u=s.p+"widgetsnbextension-3.6.0-py3-none-any.whl";var h=s.t(u);const d=s.p+"widgetsnbextension-4.0.2-py3-none-any.whl";var m=s.t(d);const _="piplite-0.1.0b18-py3-none-any.whl";var y=s(26169),b=s(96801),f=s(56255),w=s(84288);class g extends f.BaseKernel{constructor(e){super(e),this._ready=new y.PromiseDelegate,this._worker=this.initWorker(e),this._worker.onmessage=e=>this._processWorkerMessage(e.data),this._remoteKernel=(0,w.Ud)(this._worker),this.initRemote(e)}initWorker(e){return new Worker(new URL(s.p+s.u(6662),s.b),{type:void 0})}async initRemote(e){const t=this.initRemoteOptions(e);await this._remoteKernel.initialize(t),this._ready.resolve()}initRemoteOptions(e){const{pyodideUrl:t}=e,s=t.slice(0,t.lastIndexOf("/")+1),a=b.PageConfig.getBaseUrl(),i=b.URLExt.join(a,"build/pypi"),n=[...e.pipliteUrls||[],b.URLExt.join(i,"all.json")];return{baseUrl:a,pyodideUrl:t,indexUrl:s,pipliteWheelUrl:b.URLExt.join(i,_),pipliteUrls:n,disablePyPIFallback:!!e.disablePyPIFallback,location:this.location,mountDrive:e.mountDrive}}dispose(){this.isDisposed||(this._worker.terminate(),this._worker=null,super.dispose())}get ready(){return this._ready.promise}_processWorkerMessage(e){var t,s,a,i,n,r,o;if(e.type)switch(e.type){case"stream":{const s=null!==(t=e.bundle)&&void 0!==t?t:{name:"stdout",text:""};this.stream(s,e.parentHeader);break}case"input_request":{const t=null!==(s=e.content)&&void 0!==s?s:{prompt:"",password:!1};this.inputRequest(t,e.parentHeader);break}case"display_data":{const t=null!==(a=e.bundle)&&void 0!==a?a:{data:{},metadata:{},transient:{}};this.displayData(t,e.parentHeader);break}case"update_display_data":{const t=null!==(i=e.bundle)&&void 0!==i?i:{data:{},metadata:{},transient:{}};this.updateDisplayData(t,e.parentHeader);break}case"clear_output":{const t=null!==(n=e.bundle)&&void 0!==n?n:{wait:!1};this.clearOutput(t,e.parentHeader);break}case"execute_result":{const t=null!==(r=e.bundle)&&void 0!==r?r:{execution_count:0,data:{},metadata:{}};this.publishExecuteResult(t,e.parentHeader);break}case"execute_error":{const t=null!==(o=e.bundle)&&void 0!==o?o:{ename:"",evalue:"",traceback:[]};this.publishExecuteError(t,e.parentHeader);break}case"comm_msg":case"comm_open":case"comm_close":this.handleComm(e.type,e.content,e.metadata,e.buffers,e.parentHeader)}}async kernelInfoRequest(){return{implementation:"pyodide",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"python",version:3},file_extension:".py",mimetype:"text/x-python",name:"python",nbconvert_exporter:"python",pygments_lexer:"ipython3",version:"3.8"},protocol_version:"5.3",status:"ok",banner:"Pyolite: A WebAssembly-powered Python kernel backed by Pyodide",help_links:[{text:"Python (WASM) Kernel",url:"https://pyodide.org"}]}}async executeRequest(e){await this.ready;const t=await this._remoteKernel.execute(e,this.parent);return t.execution_count=this.executionCount,t}async completeRequest(e){return await this._remoteKernel.complete(e,this.parent)}async inspectRequest(e){return await this._remoteKernel.inspect(e,this.parent)}async isCompleteRequest(e){return await this._remoteKernel.isComplete(e,this.parent)}async commInfoRequest(e){return await this._remoteKernel.commInfo(e,this.parent)}async commOpen(e){return await this._remoteKernel.commOpen(e,this.parent)}async commMsg(e){return await this._remoteKernel.commMsg(e,this.parent)}async commClose(e){return await this._remoteKernel.commClose(e,this.parent)}async inputReply(e){return await this._remoteKernel.inputReply(e,this.parent)}}class k{constructor(){this._options=null,this._initializer=null,this._pyodide=null,this._localPath="",this._driveName="",this._driveFS=null,this._initialized=new Promise(((e,t)=>{this._initializer={resolve:e,reject:t}}))}async initialize(e){var t;if(this._options=e,e.location.includes(":")){const t=e.location.split(":");this._driveName=t[0],this._localPath=t[1]}else this._driveName="",this._localPath=e.location;await this.initRuntime(e),await this.initFilesystem(e),await this.initPackageManager(e),await this.initKernel(e),await this.initGlobals(e),null===(t=this._initializer)||void 0===t||t.resolve()}async initRuntime(e){const{pyodideUrl:t,indexUrl:s}=e;let a;t.endsWith(".mjs")?a=(await import(t)).loadPyodide:(importScripts(t),a=self.loadPyodide),this._pyodide=await a({indexURL:s})}async initPackageManager(e){if(!this._options)throw new Error("Uninitialized");const{pipliteWheelUrl:t,disablePyPIFallback:s,pipliteUrls:a}=this._options;await this._pyodide.loadPackage(["micropip"]),await this._pyodide.runPythonAsync(`\n      import micropip\n      await micropip.install('${t}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${s?"True":"False"}\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(a)}\n    `)}async initKernel(e){await this._pyodide.runPythonAsync("\n      await piplite.install(['sqlite3'], keep_going=True);\n      await piplite.install(['ipykernel'], keep_going=True);\n      await piplite.install(['pyolite'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyolite\n    "),e.mountDrive&&this._localPath&&await this._pyodide.runPythonAsync(`\n        import os;\n        os.chdir("${this._localPath}");\n      `)}async initGlobals(e){const{globals:t}=this._pyodide;this._kernel=t.get("pyolite").kernel_instance.copy(),this._stdout_stream=t.get("pyolite").stdout_stream.copy(),this._stderr_stream=t.get("pyolite").stderr_stream.copy(),this._interpreter=this._kernel.interpreter.copy(),this._interpreter.send_comm=this.sendComm.bind(this)}async initFilesystem(e){if(e.mountDrive){const t="/drive",{FS:a,PATH:i,ERRNO_CODES:n}=this._pyodide,{baseUrl:r}=e,{DriveFS:o}=await s.e(4281).then(s.t.bind(s,54281,23)),l=new o({FS:a,PATH:i,ERRNO_CODES:n,baseUrl:r,driveName:this._driveName,mountpoint:t});a.mkdir(t),a.mount(l,{},t),a.chdir(t),this._driveFS=l}}mapToObject(e){const t=e instanceof Array?[]:{};return e.forEach(((e,s)=>{t[s]=e instanceof Map||e instanceof Array?this.mapToObject(e):e})),t}formatResult(e){if(!this._pyodide.isPyProxy(e))return e;const t=e.toJs();return this.mapToObject(t)}async setup(e){await this._initialized,this._kernel._parent_header=this._pyodide.toPy(e)}async execute(e,t){await this.setup(t);const s=(e,t)=>{const s={name:this.formatResult(e),text:this.formatResult(t)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:s,type:"stream"})};this._stdout_stream.publish_stream_callback=s,this._stderr_stream.publish_stream_callback=s,this._interpreter.display_pub.clear_output_callback=e=>{const t={wait:this.formatResult(e)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:t,type:"clear_output"})},this._interpreter.display_pub.display_data_callback=(e,t,s)=>{const a={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"display_data"})},this._interpreter.display_pub.update_display_data_callback=(e,t,s)=>{const a={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"update_display_data"})},this._interpreter.displayhook.publish_execution_result=(e,t,s)=>{const a={execution_count:e,data:this.formatResult(t),metadata:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"execute_result"})},this._interpreter.input=this.input.bind(this),this._interpreter.getpass=this.getpass.bind(this);const a=await this._kernel.run(e.code),i=this.formatResult(a);return"error"===i.status&&((e,t,s)=>{const a={ename:e,evalue:t,traceback:s};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"execute_error"})})(i.ename,i.evalue,i.traceback),i}async complete(e,t){await this.setup(t);const s=this._kernel.complete(e.code,e.cursor_pos);return this.formatResult(s)}async inspect(e,t){await this.setup(t);const s=this._kernel.inspect(e.code,e.cursor_pos,e.detail_level);return this.formatResult(s)}async isComplete(e,t){await this.setup(t);const s=this._kernel.is_complete(e.code);return this.formatResult(s)}async commInfo(e,t){await this.setup(t);const s=this._kernel.comm_info(e.target_name);return this.formatResult(s)}async commOpen(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_open(this._pyodide.toPy(e));return this.formatResult(s)}async commMsg(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_msg(this._pyodide.toPy(e));return this.formatResult(s)}async commClose(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_close(this._pyodide.toPy(e));return this.formatResult(s)}async inputReply(e,t){await this.setup(t),this._resolveInputReply(e)}async sendInputRequest(e,t){const s={prompt:e,password:t};postMessage({type:"input_request",parentHeader:this.formatResult(this._kernel._parent_header).header,content:s})}async getpass(e){e=void 0===e?"":e,await this.sendInputRequest(e,!0);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async input(e){e=void 0===e?"":e,await this.sendInputRequest(e,!1);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async sendComm(e,t,s,a,i){postMessage({type:e,content:this.formatResult(t),metadata:this.formatResult(s),ident:this.formatResult(a),buffers:this.formatResult(i),parentHeader:this.formatResult(this._kernel._parent_header).header})}}}}]);
//# sourceMappingURL=9750.ce60457.js.map