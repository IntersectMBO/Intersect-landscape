import{c as T,a as Ut,b as ot,o as _t,u as xt,i as m,d as F,e as w,t as j,f as Dt,g as N,h as v,s as st,S as I,L as Pt,N as Qt,j as ct,k as at,F as Vt,l as Bt,m as Gt,n as Ht,I as Jt,p as Kt,q as Xt,r as Yt}from"./index-Dxq0jQDA.js";let o;const At=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&At.decode();let X=null;function et(){return(X===null||X.byteLength===0)&&(X=new Uint8Array(o.memory.buffer)),X}function R(n,t){return n=n>>>0,At.decode(et().subarray(n,n+t))}const A=new Array(128).fill(void 0);A.push(void 0,null,!0,!1);let Z=A.length;function s(n){Z===A.length&&A.push(A.length+1);const t=Z;return Z=A[t],A[t]=n,t}function _(n){return A[n]}function Zt(n){n<132||(A[n]=Z,Z=n)}function P(n){const t=_(n);return Zt(n),t}let D=0;const nt=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},te=typeof nt.encodeInto=="function"?function(n,t){return nt.encodeInto(n,t)}:function(n,t){const e=nt.encode(n);return t.set(e),{read:n.length,written:e.length}};function Y(n,t,e){if(e===void 0){const f=nt.encode(n),$=t(f.length,1)>>>0;return et().subarray($,$+f.length).set(f),D=f.length,$}let i=n.length,r=t(i,1)>>>0;const c=et();let a=0;for(;a<i;a++){const f=n.charCodeAt(a);if(f>127)break;c[r+a]=f}if(a!==i){a!==0&&(n=n.slice(a)),r=e(r,i,i=a+n.length*3,1)>>>0;const f=et().subarray(r+a,r+i),$=te(n,f);a+=$.written,r=e(r,i,a,1)>>>0}return D=a,r}function Ot(n){return n==null}let U=null;function b(){return(U===null||U.buffer.detached===!0||U.buffer.detached===void 0&&U.buffer!==o.memory.buffer)&&(U=new DataView(o.memory.buffer)),U}function ut(n){const t=typeof n;if(t=="number"||t=="boolean"||n==null)return`${n}`;if(t=="string")return`"${n}"`;if(t=="symbol"){const r=n.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=n.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(n)){const r=n.length;let c="[";r>0&&(c+=ut(n[0]));for(let a=1;a<r;a++)c+=", "+ut(n[a]);return c+="]",c}const e=/\[object ([^\]]+)\]/.exec(toString.call(n));let i;if(e.length>1)i=e[1];else return toString.call(n);if(i=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:i}const qt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>{o.__wbindgen_export_2.get(n.dtor)(n.a,n.b)});function ee(n,t,e,i){const r={a:n,b:t,cnt:1,dtor:e},c=(...a)=>{r.cnt++;const f=r.a;r.a=0;try{return i(f,r.b,...a)}finally{--r.cnt===0?(o.__wbindgen_export_2.get(r.dtor)(f,r.b),qt.unregister(r)):r.a=f}};return c.original=r,qt.register(c,r,r),c}function ne(n,t,e){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h028c5b4ef9eb10af(n,t,s(e))}function re(n,t){if(!(n instanceof t))throw new Error(`expected instance of ${t.name}`);return n.ptr}function Wt(n,t){n=n>>>0;const e=b(),i=[];for(let r=n;r<n+4*t;r+=4)i.push(P(e.getUint32(r,!0)));return i}function x(n,t){try{return n.apply(this,t)}catch(e){o.__wbindgen_exn_store(s(e))}}function ie(n,t,e,i){o.wasm_bindgen__convert__closures__invoke2_mut__h6a2ee430a1040049(n,t,s(e),s(i))}const $t=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_currentquestion_free(n>>>0,1));class gt{static __wrap(t){t=t>>>0;const e=Object.create(gt.prototype);return e.__wbg_ptr=t,$t.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,$t.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_currentquestion_free(t,0)}get answered(){return o.__wbg_get_currentquestion_answered(this.__wbg_ptr)!==0}get index(){return o.__wbg_get_currentquestion_index(this.__wbg_ptr)>>>0}get is_last(){return o.__wbg_get_currentquestion_is_last(this.__wbg_ptr)!==0}}const zt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_question_free(n>>>0,1));class lt{static __wrap(t){t=t>>>0;const e=Object.create(lt.prototype);return e.__wbg_ptr=t,zt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,zt.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_question_free(t,0)}get title(){let t,e;try{const c=o.__wbindgen_add_to_stack_pointer(-16);o.__wbg_get_question_title(c,this.__wbg_ptr);var i=b().getInt32(c+4*0,!0),r=b().getInt32(c+4*1,!0);return t=i,e=r,R(i,r)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(t,e,1)}}get options(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.__wbg_get_question_options(r,this.__wbg_ptr);var t=b().getInt32(r+4*0,!0),e=b().getInt32(r+4*1,!0),i=Wt(t,e).slice();return o.__wbindgen_free(t,e*4,4),i}finally{o.__wbindgen_add_to_stack_pointer(16)}}}const St=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_questionoption_free(n>>>0,1));class bt{static __wrap(t){t=t>>>0;const e=Object.create(bt.prototype);return e.__wbg_ptr=t,St.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,St.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_questionoption_free(t,0)}get item(){let t,e;try{const c=o.__wbindgen_add_to_stack_pointer(-16);o.__wbg_get_question_title(c,this.__wbg_ptr);var i=b().getInt32(c+4*0,!0),r=b().getInt32(c+4*1,!0);return t=i,e=r,R(i,r)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(t,e,1)}}get category(){try{const i=o.__wbindgen_add_to_stack_pointer(-16);o.__wbg_get_questionoption_category(i,this.__wbg_ptr);var t=b().getInt32(i+4*0,!0),e=b().getInt32(i+4*1,!0);let r;return t!==0&&(r=R(t,e).slice(),o.__wbindgen_free(t,e*1,1)),r}finally{o.__wbindgen_add_to_stack_pointer(16)}}get subcategory(){try{const i=o.__wbindgen_add_to_stack_pointer(-16);o.__wbg_get_questionoption_subcategory(i,this.__wbg_ptr);var t=b().getInt32(i+4*0,!0),e=b().getInt32(i+4*1,!0);let r;return t!==0&&(r=R(t,e).slice(),o.__wbindgen_free(t,e*1,1)),r}finally{o.__wbindgen_add_to_stack_pointer(16)}}get correct(){return o.__wbg_get_questionoption_correct(this.__wbg_ptr)!==0}}const kt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_quiz_free(n>>>0,1));class rt{static __wrap(t){t=t>>>0;const e=Object.create(rt.prototype);return e.__wbg_ptr=t,kt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,kt.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_quiz_free(t,0)}constructor(t){let e=0;Ot(t)||(re(t,Lt),e=t.__destroy_into_raw());const i=o.quiz_new(e);return P(i)}check_player_guess(t){try{const c=o.__wbindgen_add_to_stack_pointer(-16);o.quiz_check_player_guess(c,this.__wbg_ptr,t);var e=b().getInt32(c+4*0,!0),i=b().getInt32(c+4*1,!0),r=b().getInt32(c+4*2,!0);if(r)throw P(i);return tt.__wrap(e)}finally{o.__wbindgen_add_to_stack_pointer(16)}}next_question(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.quiz_next_question(r,this.__wbg_ptr);var t=b().getInt32(r+4*0,!0),e=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw P(e);return tt.__wrap(t)}finally{o.__wbindgen_add_to_stack_pointer(16)}}questions(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.quiz_questions(r,this.__wbg_ptr);var t=b().getInt32(r+4*0,!0),e=b().getInt32(r+4*1,!0),i=Wt(t,e).slice();return o.__wbindgen_free(t,e*4,4),i}finally{o.__wbindgen_add_to_stack_pointer(16)}}state(){const t=o.quiz_state(this.__wbg_ptr);return tt.__wrap(t)}}const Rt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_quizoptions_free(n>>>0,1));class Lt{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Rt.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_quizoptions_free(t,0)}constructor(t){const e=Y(t,o.__wbindgen_malloc,o.__wbindgen_realloc),i=D,r=o.quizoptions_new(e,i);return this.__wbg_ptr=r>>>0,Rt.register(this,this.__wbg_ptr,this),this}}const jt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_score_free(n>>>0,1));class dt{static __wrap(t){t=t>>>0;const e=Object.create(dt.prototype);return e.__wbg_ptr=t,jt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,jt.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_score_free(t,0)}get correct(){return o.__wbg_get_currentquestion_index(this.__wbg_ptr)>>>0}get wrong(){return o.__wbg_get_score_wrong(this.__wbg_ptr)>>>0}}const Ct=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_state_free(n>>>0,1));class tt{static __wrap(t){t=t>>>0;const e=Object.create(tt.prototype);return e.__wbg_ptr=t,Ct.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Ct.unregister(this),t}free(){const t=this.__destroy_into_raw();o.__wbg_state_free(t,0)}get current_question(){const t=o.__wbg_get_state_current_question(this.__wbg_ptr);return gt.__wrap(t)}get game_over(){return o.__wbg_get_state_game_over(this.__wbg_ptr)!==0}get score(){const t=o.__wbg_get_state_score(this.__wbg_ptr);return dt.__wrap(t)}}async function oe(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(i){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const e=await n.arrayBuffer();return await WebAssembly.instantiate(e,t)}else{const e=await WebAssembly.instantiate(n,t);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}}function _e(){const n={};return n.wbg={},n.wbg.__wbg_new_b85e72ed1bfd57f9=function(t,e){try{var i={a:t,b:e},r=(a,f)=>{const $=i.a;i.a=0;try{return ie($,i.b,a,f)}finally{i.a=$}};const c=new Promise(r);return s(c)}finally{i.a=i.b=0}},n.wbg.__wbindgen_string_new=function(t,e){const i=R(t,e);return s(i)},n.wbg.__wbg_question_new=function(t){const e=lt.__wrap(t);return s(e)},n.wbg.__wbindgen_object_clone_ref=function(t){const e=_(t);return s(e)},n.wbg.__wbg_crypto_1d1f22824a6a080c=function(t){const e=_(t).crypto;return s(e)},n.wbg.__wbindgen_is_object=function(t){const e=_(t);return typeof e=="object"&&e!==null},n.wbg.__wbg_process_4a72847cc503995b=function(t){const e=_(t).process;return s(e)},n.wbg.__wbg_versions_f686565e586dd935=function(t){const e=_(t).versions;return s(e)},n.wbg.__wbg_node_104a2ff8d6ea03a2=function(t){const e=_(t).node;return s(e)},n.wbg.__wbindgen_is_string=function(t){return typeof _(t)=="string"},n.wbg.__wbindgen_object_drop_ref=function(t){P(t)},n.wbg.__wbg_require_cca90b1a94a0255b=function(){return x(function(){const t=module.require;return s(t)},arguments)},n.wbg.__wbindgen_is_function=function(t){return typeof _(t)=="function"},n.wbg.__wbg_msCrypto_eb05e62b530a1508=function(t){const e=_(t).msCrypto;return s(e)},n.wbg.__wbg_newwithlength_ec548f448387c968=function(t){const e=new Uint8Array(t>>>0);return s(e)},n.wbg.__wbg_instanceof_Error_69bde193b0cc95e3=function(t){let e;try{e=_(t)instanceof Error}catch{e=!1}return e},n.wbg.__wbg_name_ac78212e803c7941=function(t){const e=_(t).name;return s(e)},n.wbg.__wbindgen_string_get=function(t,e){const i=_(e),r=typeof i=="string"?i:void 0;var c=Ot(r)?0:Y(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=D;b().setInt32(t+4*1,a,!0),b().setInt32(t+4*0,c,!0)},n.wbg.__wbg_message_e18bae0a0e2c097a=function(t){const e=_(t).message;return s(e)},n.wbg.__wbg_toString_9d18e102ca933e68=function(t){const e=_(t).toString();return s(e)},n.wbg.__wbg_toString_e17a6671146f47c1=function(t){const e=_(t).toString();return s(e)},n.wbg.__wbg_call_89af060b4e1523f2=function(){return x(function(t,e,i){const r=_(t).call(_(e),_(i));return s(r)},arguments)},n.wbg.__wbg_self_3093d5d1f7bcb682=function(){return x(function(){const t=self.self;return s(t)},arguments)},n.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return x(function(){const t=window.window;return s(t)},arguments)},n.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return x(function(){const t=globalThis.globalThis;return s(t)},arguments)},n.wbg.__wbg_global_e5a3fe56f8be9485=function(){return x(function(){const t=global.global;return s(t)},arguments)},n.wbg.__wbindgen_is_undefined=function(t){return _(t)===void 0},n.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(t,e){const i=new Function(R(t,e));return s(i)},n.wbg.__wbg_call_1084a111329e68ce=function(){return x(function(t,e){const i=_(t).call(_(e));return s(i)},arguments)},n.wbg.__wbg_questionoption_new=function(t){const e=bt.__wrap(t);return s(e)},n.wbg.__wbg_new_525245e2b9901204=function(){const t=new Object;return s(t)},n.wbg.__wbg_new_ab6fd82b10560829=function(){return x(function(){const t=new Headers;return s(t)},arguments)},n.wbg.__wbg_new_4c501d7c115d20a6=function(){return x(function(){const t=new URLSearchParams;return s(t)},arguments)},n.wbg.__wbg_set_eacc7d73fefaafdf=function(){return x(function(t,e,i){return Reflect.set(_(t),_(e),_(i))},arguments)},n.wbg.__wbg_newwithstr_36b0b3f97efe096f=function(){return x(function(t,e){const i=new Request(R(t,e));return s(i)},arguments)},n.wbg.__wbg_url_7807f6a1fddc3e23=function(t,e){const i=_(e).url,r=Y(i,o.__wbindgen_malloc,o.__wbindgen_realloc),c=D;b().setInt32(t+4*1,c,!0),b().setInt32(t+4*0,r,!0)},n.wbg.__wbg_new_67853c351755d2cf=function(){return x(function(t,e){const i=new URL(R(t,e));return s(i)},arguments)},n.wbg.__wbg_search_c68f506c44be6d1e=function(t,e){const i=_(e).search,r=Y(i,o.__wbindgen_malloc,o.__wbindgen_realloc),c=D;b().setInt32(t+4*1,c,!0),b().setInt32(t+4*0,r,!0)},n.wbg.__wbg_setsearch_fd62f4de409a2bb3=function(t,e,i){_(t).search=R(e,i)},n.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0=function(){return x(function(t,e,i){const r=new Request(R(t,e),_(i));return s(r)},arguments)},n.wbg.__wbg_fetch_eeae7120f2a07ede=function(t){const e=fetch(_(t));return s(e)},n.wbg.__wbg_instanceof_Response_849eb93e75734b6e=function(t){let e;try{e=_(t)instanceof Response}catch{e=!1}return e},n.wbg.__wbg_status_61a01141acd3cf74=function(t){return _(t).status},n.wbg.__wbg_text_450a059667fd91fd=function(){return x(function(t){const e=_(t).text();return s(e)},arguments)},n.wbg.__wbg_quiz_new=function(t){const e=rt.__wrap(t);return s(e)},n.wbg.__wbindgen_memory=function(){const t=o.memory;return s(t)},n.wbg.__wbg_buffer_b7b08af79b0b0974=function(t){const e=_(t).buffer;return s(e)},n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9=function(t,e,i){const r=new Uint8Array(_(t),e>>>0,i>>>0);return s(r)},n.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return x(function(t,e){_(t).randomFillSync(P(e))},arguments)},n.wbg.__wbg_subarray_7c2e3576afe181d1=function(t,e,i){const r=_(t).subarray(e>>>0,i>>>0);return s(r)},n.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return x(function(t,e){_(t).getRandomValues(_(e))},arguments)},n.wbg.__wbg_new_ea1883e1e5e86686=function(t){const e=new Uint8Array(_(t));return s(e)},n.wbg.__wbg_set_d1e79e2388520f18=function(t,e,i){_(t).set(_(e),i>>>0)},n.wbg.__wbindgen_throw=function(t,e){throw new Error(R(t,e))},n.wbg.__wbindgen_debug_string=function(t,e){const i=ut(_(e)),r=Y(i,o.__wbindgen_malloc,o.__wbindgen_realloc),c=D;b().setInt32(t+4*1,c,!0),b().setInt32(t+4*0,r,!0)},n.wbg.__wbindgen_cb_drop=function(t){const e=P(t).original;return e.cnt--==1?(e.a=0,!0):!1},n.wbg.__wbg_then_876bb3c633745cc6=function(t,e,i){const r=_(t).then(_(e),_(i));return s(r)},n.wbg.__wbg_queueMicrotask_48421b3cc9052b68=function(t){const e=_(t).queueMicrotask;return s(e)},n.wbg.__wbg_resolve_570458cb99d56a43=function(t){const e=Promise.resolve(_(t));return s(e)},n.wbg.__wbg_then_95e6edc0f89b73b1=function(t,e){const i=_(t).then(_(e));return s(i)},n.wbg.__wbg_queueMicrotask_12a30234db4045d3=function(t){queueMicrotask(_(t))},n.wbg.__wbindgen_closure_wrapper870=function(t,e,i){const r=ee(t,e,51,ne);return s(r)},n}function se(n,t){return o=n.exports,Et.__wbindgen_wasm_module=t,U=null,X=null,o}async function Et(n){if(o!==void 0)return o;typeof n<"u"&&Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead"),typeof n>"u"&&(n=new URL(""+new URL("landscape2_quiz_bg-op0fk5Bx.wasm",import.meta.url).href,import.meta.url));const t=_e();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:e,module:i}=await oe(await n,t);return se(e,i)}const It=""+new URL("pattern_quiz-IlvSA3ko.png",import.meta.url).href,ce="_wrapper_oi1xy_1",ae="_startBtn_oi1xy_6",ue="_header_oi1xy_11",ge="_dot_oi1xy_16",le="_dotCorrect_oi1xy_23",be="_dotWrong_oi1xy_27",de="_game_oi1xy_31",we="_quizContent_oi1xy_39",fe="_title_oi1xy_43",ye="_btn_oi1xy_53",pe="_option_oi1xy_57",me="_selected_oi1xy_65",he="_answered_oi1xy_69",ve="_logoContent_oi1xy_73",xe="_logoWrapper_oi1xy_77",qe="_logo_oi1xy_73",$e="_item_oi1xy_87",ze="_itemName_oi1xy_92",Se="_correct_oi1xy_96",ke="_wrong_oi1xy_100",Re="_questionLabel_oi1xy_104",je="_buttons_oi1xy_108",u={wrapper:ce,startBtn:ae,header:ue,dot:ge,dotCorrect:le,dotWrong:be,game:de,quizContent:we,title:fe,btn:ye,option:pe,selected:me,answered:he,logoContent:ve,logoWrapper:xe,logo:qe,item:$e,itemName:ze,correct:Se,wrong:ke,questionLabel:Re,buttons:je},Ce="_container_n6oll_1",Ie="_text_n6oll_6",Ft={container:Ce,text:Ie};var Fe=j("<div><div>");const Ae=n=>{const t=()=>n.content,[e,i]=T(),[r,c]=T(),[a,f]=T(100),$=Ut(),it=()=>$.width,Q=()=>{r()&&e()&&r().offsetHeight>e().offsetHeight&&f(a()-5)};return ot(_t(a,()=>{Q()})),ot(_t(it,()=>{Q()})),ot(_t(t,()=>{f(100),Q()})),(()=>{var O=Fe(),M=O.firstChild;return xt(i,O),xt(c,M),m(M,t),F(z=>{var S=`position-relative w-100 h-100 ${Ft.container}`,W=`position-absolute w-100 text-center ${Ft.text}`,V=`${a()}%`;return S!==z.e&&w(O,z.e=S),W!==z.t&&w(M,z.t=W),V!==z.a&&((z.a=V)!=null?M.style.setProperty("font-size",V):M.style.removeProperty("font-size")),z},{e:void 0,t:void 0,a:void 0}),O})()};var Oe=j('<div class="d-flex flex-row justify-content-between justify-content-xl-start text-light"><div class=fw-semibold> / </div><div class="d-flex flex-row align-items-center ms-4 ms-xl-5"><div></div><div></div><div></div><div>'),We=j('<button aria-label="Start new game">New game'),Le=j('<div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center h-100 w-100">'),Ee=j('<div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center h-100 w-100"><button aria-label="Start game">New game'),Ne=j('<div class="d-block d-xl-none"><button aria-label="Start new game">New game'),Te=j('<div class="w-100 text-center"><button aria-label="Play again">Play again'),Me=j('<div class=ms-auto><button aria-label="Next question">Next'),Ue=j('<div class="d-flex flex-column h-100"><div><div></div><div class="d-flex flex-column flex-lg-row flex-wrap justify-content-center mt-0 mt-lg-3"></div></div><div>'),De=j('<div aria-relevant=all aria-live=assertive><div><div><div class="fw-semibold text-light text-uppercase">Landscape Quiz</div></div><div><div class=col></div><div class="col d-none d-xl-block text-center"><div class="fw-semibold text-light text-uppercase">Landscape Quiz</div></div><div class="d-none d-xl-block col text-end">'),Pe=j("<div role=button><div><div></div></div><div><div>");const Ve=()=>{const[n,t]=T(!1),[e,i]=T(null),[r,c]=T(),[a,f]=T(null),[$,it]=T(),Q=async z=>{const S=new Lt(location.origin),W=await new rt(S);i(W),z&&c(W.state())},O=()=>{c(void 0),f(null),Q(!0)},M=async()=>{if(Yt())await Et(),t(!0),Q();else return it("This game requires WebAssembly, but your browser doesn't seem to support it"),t(!0),Promise.reject("WebAssembly is not supported in this browser")};return Dt(()=>{N(window.baseDS.games_available)||M()}),(()=>{var z=De(),S=z.firstChild,W=S.firstChild,V=W.nextSibling,wt=V.firstChild,Nt=wt.nextSibling,Tt=Nt.nextSibling;return`url(${It})`!=null?S.style.setProperty("background-image",`url(${It})`):S.style.removeProperty("background-image"),m(wt,v(I,{get when(){return!N(r())},get children(){var d=Oe(),q=d.firstChild,L=q.firstChild,B=q.nextSibling,C=B.firstChild,g=C.nextSibling,p=g.nextSibling,y=p.nextSibling;return m(q,()=>r().current_question.index+1,L),m(q,()=>e().questions().length,null),m(g,()=>r().score.correct),m(y,()=>r().score.wrong),F(l=>{var k=`question ${r().current_question.index+1} of ${e().questions().length}`,E=`border border-2 border-light ${u.dot} ${u.dotCorrect}`,G=`ms-2 fw-semibold ${u.score}`,J=`${r().score.correct} correct guesses`,H=`ms-3 ms-xl-4 border border-2 border-light ${u.dot} ${u.dotWrong}`,K=`ms-2 fw-semibold ${u.score}`,h=`${r().score.correct} wrong guesses`;return k!==l.e&&st(q,"aria-label",l.e=k),E!==l.t&&w(C,l.t=E),G!==l.a&&w(g,l.a=G),J!==l.o&&st(g,"aria-label",l.o=J),H!==l.i&&w(p,l.i=H),K!==l.n&&w(y,l.n=K),h!==l.s&&st(y,"aria-label",l.s=h),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),d}})),m(Tt,v(I,{get when(){return!N(r())},get children(){var d=We();return d.$$click=O,F(()=>w(d,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${u.btn}`)),d}})),m(S,v(I,{get when(){return!n()},get children(){return v(Pt,{})}}),null),m(S,v(I,{get when(){return!N($())},get children(){var d=Le();return m(d,v(Qt,{class:"bg-light fs-5",get children(){return $()}})),d}}),null),m(S,v(I,{get when(){return ct(()=>!at(e()))()&&N(r())},get children(){var d=Ee(),q=d.firstChild;return q.$$click=()=>c(e().state()),F(()=>w(q,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${u.btn}`)),d}}),null),m(S,v(I,{get when(){return ct(()=>!N(r()))()&&!at(r())},get children(){var d=Ue(),q=d.firstChild,L=q.firstChild,B=L.nextSibling,C=q.nextSibling;return m(L,v(Ae,{get content(){return e().questions()[r().current_question.index].title}})),m(B,v(Vt,{get each(){return e().questions()[r().current_question.index].options},children:(g,p)=>{const y=Bt.getLogoItem(g.item,g.category,g.subcategory);if(at(y))return null;const l=()=>r().current_question.answered&&g.correct,k=()=>r().current_question.answered&&!g.correct&&a()===p();return(()=>{var E=Pe(),G=E.firstChild,J=G.firstChild,H=G.nextSibling,K=H.firstChild;return E.$$click=()=>{r().current_question.answered||(f(p()),c(e().check_player_guess(p())))},m(J,v(I,{get when(){return!N(y)},get fallback(){return v(Gt,{get kind(){return Ht.NotImage},get class(){return`opacity-25 m-auto w-100 ${u.logo}`}})},get children(){return v(Jt,{logo:y,get class(){return`m-auto w-100 ${u.logo}`},ariaHidden:!0})}})),m(K,()=>g.item),F(h=>{var ft=`d-flex flex-row flex-lg-column border border-4 border-dark bg-white mx-auto mx-lg-4 my-2 my-md-3 ${u.option}`,Mt={[u.answered]:r().current_question.answered,[u.selected]:a()===p(),[u.correct]:l(),[u.wrong]:k()},yt=`d-flex align-items-center ${u.logoContent}`,pt=`position-relative d-flex align-items-center m-auto p-1 p-xl-3 ${u.logoWrapper}`,mt=`d-flex align-items-center justify-content-start justify-content-lg-center fw-semibold px-3 px-lg-2 py-2 py-md-3 py-lg-2 ${u.item}`,ht=!!(l()||k()),vt=`w-100 text-lg-center text-truncate ${u.itemName}`;return ft!==h.e&&w(E,h.e=ft),h.t=Kt(E,Mt,h.t),yt!==h.a&&w(G,h.a=yt),pt!==h.o&&w(J,h.o=pt),mt!==h.i&&w(H,h.i=mt),ht!==h.n&&H.classList.toggle("text-white",h.n=ht),vt!==h.s&&w(K,h.s=vt),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),E})()}})),m(C,v(I,{get when(){return ct(()=>!N(r()))()&&!r().current_question.is_last},get children(){var g=Ne(),p=g.firstChild;return p.$$click=O,F(()=>w(p,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${u.btn}`)),g}}),null),m(C,v(I,{get when(){return r().game_over},get children(){var g=Te(),p=g.firstChild;return p.$$click=O,F(y=>{var l=`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${u.btn}`,k=!r().current_question.answered;return l!==y.e&&w(p,y.e=l),k!==y.t&&(p.disabled=y.t=k),y},{e:void 0,t:void 0}),g}}),null),m(C,v(I,{get when(){return!r().current_question.is_last},get children(){var g=Me(),p=g.firstChild;return p.$$click=()=>{f(null),c(e().next_question())},F(y=>{var l=`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${u.btn}`,k=!r().current_question.answered;return l!==y.e&&w(p,y.e=l),k!==y.t&&(p.disabled=y.t=k),y},{e:void 0,t:void 0}),g}}),null),F(g=>{var p=`flex-grow-1 d-flex flex-column mx-auto py-4 ${u.quizContent}`,y=`d-flex align-items-center justify-content-center border border-4 border-dark text-center mb-3 mb-xl-5 bg-white ${u.title}`,l=`position-relative d-flex flex-row justify-content-between mt-auto py-2 py-xl-4 ${u.buttons}`;return p!==g.e&&w(q,g.e=p),y!==g.t&&w(L,g.t=y),l!==g.a&&w(C,g.a=l),g},{e:void 0,t:void 0,a:void 0}),d}}),null),F(d=>{var q=`d-flex flex-column h-100 ${u.wrapper}`,L=`d-flex flex-column border flex-grow-1 mt-3 ${u.game}`,B=`d-block d-xl-none text-center ${u.header}`,C=`row mt-2 mt-lg-0 mb-0 mb-xl-5 ${u.header}`;return q!==d.e&&w(z,d.e=q),L!==d.t&&w(S,d.t=L),B!==d.a&&w(W,d.a=B),C!==d.o&&w(V,d.o=C),d},{e:void 0,t:void 0,a:void 0,o:void 0}),z})()};Xt(["click"]);export{Ve as default};