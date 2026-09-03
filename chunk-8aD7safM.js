import{$ as Gl,$n as zp,An as qI,At as V,B as $f,Bn as ur$1,Bt as _,C as ey,Cn as nh,Dn as pE,Dt as U,E as hr$1,En as or$1,Et as Th,Fn as su,G as BI,Gn as we,Gt as cp,H as Ae,Hn as vp,Ht as ac,I as yc,In as tE,It as Yf,Jn as xh,Jt as di$1,Kn as xI,Kt as dc,L as yf,Ln as uI,Lt as Z,M as vp$1,Mt as Vi,N as wn,Nn as rh,O as io$1,On as pn,P as xf,Pn as rp,Pt as Wl,Q as Fi,Qn as zf$1,Qt as fc,R as zf,Rn as uc,Rt as Ze$1,S as eo$1,Sn as ne,St as SI,T as hi$1,Tn as oo$1,U as Ah,Un as w,Ut as bP,V as $o$1,Vn as vl,W as An,Wt as cc,X as EE,Xn as yh,Y as De,Yt as em,Zt as fI,_ as bc,_n as ll,_t as Qf,a as Js,an as ha,at as L,b as cw,bn as mg,bt as Rh,c as Qs,cn as ie,ct as MP,d as Xc,dn as jI,dt as NP,en as fh,et as H,f as Zs,fn as jf,ft as Oh,g as bE,gt as Ps,h as aw,hn as lc,ht as Pf,i as Gs,it as Kf,j as rt$1,jn as qf,jt as VI,k as ou,kt as Uf,l as Sf,ln as ir$1,m as au,mn as kE,mt as PI,nn as gh,nt as Jf,o as Nf,on as hh,ot as Lg,p as _E,pn as jy,pt as Oi$1,q as Cn,qn as xP,qt as de,r as Ef,rn as gt,rt as Jo$1,s as Ot$1,sn as hy,t as $w,tn as gI,tt as IP,u as Sw,un as iu,ut as Mo,vn as lp,vt as Qp,w as gc,wn as oh,wt as Sh,x as du,xn as mh,xt as S,y as ct$1,yn as lr$1,yt as RI,z as $I,zn as ui$1,zt as Zn$1}from"./main-RNIBVBZG.js";import{S as yn,_ as rt$2,a as Ke$1,b as tr$1,c as Qe,d as er$1,f as fe,g as nr$1,h as na,i as Ji,l as Te,m as lt$1,n as Gt$1,o as Ki,p as ia$1,r as Je,s as Pe,t as Cn$1,u as Ye,v as st$1,x as ui$2,y as ti}from"./chunk-BrBEo5X3.js";var Jo=[`*`];var Pn=(()=>{class o{labelPosition=`after`;static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(t,i){t&2&&rp(`mdc-form-field--align-end`,i.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:Jo,decls:1,vars:0,template:function(t,i){t&1&&(jI(),VI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return o})();var ea=[`input`];var ta=[`*`];var ni={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var ia=new S(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>ni});var Q=(function(o){return o[o.Init=0]=`Init`,o[o.Checked=1]=`Checked`,o[o.Unchecked=2]=`Unchecked`,o[o.Indeterminate=3]=`Indeterminate`,o})(Q||{});var oi=class{source;checked};var ai=(()=>{class o{_elementRef=w(ur$1);_changeDetectorRef=w(bP);_ngZone=w(we);_animationsDisabled=wn();_options=w(ia,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new oi;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Ae;indeterminateChange=new Ae;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=Q.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){w(hi$1).load(au);let e=w(new vp(`tabindex`),{optional:!0});this._options=this._options||ni,this.color=this._options.color||ni.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=w(eo$1).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Q.Indeterminate):this._transitionCheckState(this.checked?Q.Checked:Q.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Mo(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Q.Checked:Q.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case Q.Init:if(t===Q.Checked)return this._animationClasses.uncheckedToChecked;if(t==Q.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Q.Unchecked:return t===Q.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Q.Checked:return t===Q.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Q.Indeterminate:return t===Q.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&Jf(ea,5),t&2){let a;BI(a=$I())&&(i._inputElement=a.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(Qf(`id`,i.id),$f(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),tE(i.color?`mat-`+i.color:`mat-accent`),rp(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,MP],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,MP],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,MP],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:NP(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,MP],checked:[2,`checked`,`checked`,MP],disabled:[2,`disabled`,`disabled`,MP],indeterminate:[2,`indeterminate`,`indeterminate`,MP]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[EE([{provide:ui$2,useExisting:oo$1(()=>o),multi:!0},{provide:rt$2,useExisting:o,multi:!0}]),Lg],ngContentSelectors:ta,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(jI(),Jo$1(0,`label`,3),Yf(`click`,function(r){return i._preventBubblingFromLabel(r)}),Jo$1(1,`span`,4,0),qf(3,`span`,5),Jo$1(4,`input`,6,1),Yf(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(r){return i._onInteractionEvent(r)}),ac(),qf(6,`span`,7),Jo$1(7,`span`,8),iu(),Jo$1(8,`svg`,9),qf(9,`path`,10),ac(),su(),qf(10,`span`,11),ac(),qf(11,`span`,12),ac(),Jo$1(12,`span`,13,2),VI(14),ac()()),t&2){let a=qI(2);Uf(`labelPosition`,i.labelPosition)(`for`,i.inputId),jy(4),rp(`mdc-checkbox--selected`,i.checked),Uf(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),$f(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),jy(7),Uf(`matRippleTrigger`,a)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[$w,Pn],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})();var Vn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[ai,hr$1]})}return o})();var oa=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var aa=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function ra(o,n){o&1&&(Jo$1(0,`span`,3),VI(1,1),ac())}function sa(o,n){o&1&&(Jo$1(0,`span`,6),VI(1,2),ac())}var ca=[`*`];var la=new S(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Bn=new S(`MatChipAvatar`);var Ln=new S(`MatChipTrailingIcon`);var zn=new S(`MatChipEdit`);var Hn=new S(`MatChipRemove`);var jn=new S(`MatChip`);var Wn=(()=>{class o{_elementRef=w(ur$1);_parentChip=w(jn);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){w(hi$1).load(au),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,i){t&2&&($f(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i.disabled),rp(`mdc-evolution-chip__action--primary`,i._isPrimary)(`mdc-evolution-chip__action--secondary`,!i._isPrimary)(`mdc-evolution-chip__action--trailing`,!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,MP],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:NP(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return o})();var da=(()=>{class o extends Wn{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,i){t&1&&Yf(`click`,function(r){return i._handleClick(r)})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&($f(`tabindex`,i._getTabindex()),rp(`mdc-evolution-chip__action--presentational`,!1))},features:[Pf]})}return o})();var ri=(()=>{class o{_changeDetectorRef=w(bP);_elementRef=w(ur$1);_tagName=w(IP);_ngZone=w(we);_focusMonitor=w(Zs);_globalRippleOptions=w(io$1,{optional:!0});_document=w(Zn$1);_onFocus=new Z;_onBlur=new Z;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=wn();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=w(eo$1).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Ae;destroyed=new Ae;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=w(ou);_injector=w(de);constructor(){let e=w(hi$1);e.load(au),e.load(Sf),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=mh(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,i,a){if(t&1&&Kf(a,Bn,5)(a,zn,5)(a,Ln,5)(a,Hn,5)(a,Bn,5)(a,Ln,5)(a,zn,5)(a,Hn,5),t&2){let r;BI(r=$I())&&(i.leadingIcon=r.first),BI(r=$I())&&(i.editIcon=r.first),BI(r=$I())&&(i.trailingIcon=r.first),BI(r=$I())&&(i.removeIcon=r.first),BI(r=$I())&&(i._allLeadingIcons=r),BI(r=$I())&&(i._allTrailingIcons=r),BI(r=$I())&&(i._allEditIcons=r),BI(r=$I())&&(i._allRemoveIcons=r)}},viewQuery:function(t,i){if(t&1&&Jf(da,5),t&2){let a;BI(a=$I())&&(i.primaryAction=a.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,i){t&1&&Yf(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(Qf(`id`,i.id),$f(`role`,i.role)(`aria-label`,i.ariaLabel),tE(`mat-`+(i.color||`primary`)),rp(`mdc-evolution-chip`,!i._isBasicChip)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-basic-chip`,i._isBasicChip)(`mat-mdc-standard-chip`,!i._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon())(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,MP],highlighted:[2,`highlighted`,`highlighted`,MP],disableRipple:[2,`disableRipple`,`disableRipple`,MP],disabled:[2,`disabled`,`disabled`,MP]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[EE([{provide:jn,useExisting:o}])],ngContentSelectors:aa,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,i){t&1&&(jI(oa),qf(0,`span`,0),Jo$1(1,`span`,1)(2,`span`,2),SI(3,ra,2,0,`span`,3),Jo$1(4,`span`,4),VI(5),qf(6,`span`,5),ac()()(),SI(7,sa,2,0,`span`,6)),t&2&&(jy(3),xI(i.leadingIcon?3:-1),jy(4),xI(i._hasTrailingIcon()?7:-1))},dependencies:[Wn],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return o})();var qn=(()=>{class o{_elementRef=w(ur$1);_changeDetectorRef=w(bP);_dir=w(zf,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new Z;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new $o$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Sh(null),xh(()=>mh(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Sh(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Qs(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Ah(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(Ah(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Sh(null),Ah(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Ah(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=a||r;this._isValidIndex(i)&&s&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-chip-set`]],contentQueries:function(t,i,a){if(t&1&&Kf(a,ri,5),t&2){let r;BI(r=$I())&&(i._chips=r)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,i){t&1&&Yf(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&$f(`role`,i.role)},inputs:{disabled:[2,`disabled`,`disabled`,MP],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:NP(e)]},ngContentSelectors:ca,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(jI(),cc(0,`div`,0),VI(1),lc())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return o})();var Un=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({providers:[Cn$1,{provide:la,useValue:{separatorKeyCodes:[13]}}],imports:[du,hr$1]})}return o})();var Yn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[hr$1]})}return o})();function Xn(o){return Error(`Unable to find icon with the name "${o}"`)}function ma(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Gn(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function Qn(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var be=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}};var $n=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(e,t,i,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace(``,e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace(``,e,t,i)}addSvgIconInNamespace(e,t,i,a){return this._addSvgIconConfig(e,t,new be(i,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,a){let r=this._sanitizer.sanitize(U.HTML,i);if(!r)throw Qn(i);let s=xf(r);return this._addSvgIconConfig(e,t,new be(``,s,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace(``,e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace(``,e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new be(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let a=this._sanitizer.sanitize(U.HTML,t);if(!a)throw Qn(t);let r=xf(a);return this._addSvgIconSetConfig(e,new be(``,r,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(U.RESOURCE_URL,e);if(!t)throw Gn(e);let i=this._cachedIconsByUrl.get(t);return i?nh(Ot(i)):this._loadSvgIconFromConfig(new be(e,null)).pipe(Rh(a=>this._cachedIconsByUrl.set(t,a)),gt(a=>Ot(a)))}getNamedSvgIcon(e,t=``){let i=Kn(t,e),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):rh(Xn(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?nh(Ot(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(gt(t=>Ot(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return nh(i);return gh(t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(ll(s=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(U.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(h)),nh(null)})))).pipe(gt(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw Xn(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let a=t[i];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(a),s=this._extractSvgIconFromSet(r,e,a.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Rh(t=>e.svgText=t),gt(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?nh(null):this._fetchIcon(e).pipe(Rh(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let r=a.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,i);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),i);let s=this._svgElementFromString(xf(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,i)}_svgElementFromString(e){let t=this._document.createElement(`DIV`);t.innerHTML=e;let i=t.querySelector(`svg`);if(!i)throw Error(`<svg> tag not found`);return i}_toSvgElement(e){let t=this._svgElementFromString(xf(`<svg></svg>`)),i=e.attributes;for(let a=0;a<i.length;a++){let{name:r,value:s}=i[a];r!==`id`&&t.setAttribute(r,s)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),t&&t.viewBox&&e.setAttribute(`viewBox`,t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,a=i?.withCredentials??!1;if(!this._httpClient)throw ma();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(U.RESOURCE_URL,t);if(!r)throw Gn(t);let s=this._inProgressUrlFetches.get(r);if(s)return s;let l=this._httpClient.get(r,{responseType:`text`,withCredentials:a}).pipe(gt(h=>xf(h)),Th(()=>this._inProgressUrlFetches.delete(r)),Vi());return this._inProgressUrlFetches.set(r,l),l}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Kn(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](t,e);if(a)return pa(a)?new be(a.url,null,a.options):new be(a,null)}}static ɵfac=function(t){return new(t||o)(De(yf,8),De(Gs),De(Zn$1,8),De(Ze$1))};static ɵprov=ne({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();function Ot(o){return o.cloneNode(!0)}function Kn(o,n){return o+`:`+n}function pa(o){return!!(o.url&&o.options)}var ua=[`*`];var fa=new S(`MAT_ICON_DEFAULT_OPTIONS`);var _a=new S(`mat-icon-location`,{providedIn:`root`,factory:()=>{let o=w(Zn$1),n=o?o.location:null;return{getPathname:()=>n?n.pathname+n.search:``}}});var Zn=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ga=Zn.map(o=>`[${o}]`).join(`, `);var va=/^url\(['"]?#(.*?)['"]?\)$/;var Jn=(()=>{class o{_elementRef=w(ur$1);_iconRegistry=w($n);_location=w(_a);_errorHandler=w(Ze$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=L.EMPTY;constructor(){let e=w(new vp(`aria-hidden`),{optional:!0}),t=w(fa,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let t=e.split(`:`);switch(t.length){case 1:return[``,t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()===`svg`)&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,a)=>{i.forEach(r=>{a.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ga),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Zn.forEach(r=>{let s=t[a],l=s.getAttribute(r),h=l?l.match(va):null;if(h){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:r,value:h[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(Fi(1)).subscribe(a=>this._setSvgElement(a),a=>{let r=`Error retrieving icon ${t}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(t,i){t&2&&($f(`data-mat-icon-type`,i._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,i._svgName||i.fontIcon)(`data-mat-icon-namespace`,i._svgNamespace||i.fontSet)(`fontIcon`,i._usingFontIcon()?i.fontIcon:null),tE(i.color?`mat-`+i.color:``),rp(`mat-icon-inline`,i.inline)(`mat-icon-no-color`,i.color!==`primary`&&i.color!==`accent`&&i.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,MP],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:ua,decls:1,vars:0,template:function(t,i){t&1&&(jI(),VI(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return o})();var eo=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[hr$1]})}return o})();var ot=class{};function at(o){return o&&typeof o.connect==`function`&&!(o instanceof Oi$1)}var ce=(function(o){return o[o.REPLACED=0]=`REPLACED`,o[o.INSERTED=1]=`INSERTED`,o[o.MOVED=2]=`MOVED`,o[o.REMOVED=3]=`REMOVED`,o})(ce||{});var It=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,i,a){n.forEachOperation((r,s,l)=>{let h,d;if(r.previousIndex==null){let u=()=>t(r,s,l);h=this._insertView(u,l,e,i(r)),d=h?ce.INSERTED:ce.REPLACED}else l==null?(this._detachAndCacheView(s,e),d=ce.REMOVED):(h=this._moveView(s,l,e,i(r)),d=ce.MOVED);a&&a({context:h?.context,operation:d,record:r})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,i){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=i;return}let r=n();return t.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,i){let a=t.get(n);return t.move(a,e),a.context.$implicit=i,a}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var rt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Ft=class{applyChanges(n,e,t,i,a){n.forEachOperation((r,s,l)=>{let h,d;if(r.previousIndex==null){let u=t(r,s,l);h=e.createEmbeddedView(u.templateRef,u.context,u.index),d=ce.INSERTED}else l==null?(e.remove(s),d=ce.REMOVED):(h=e.get(s),e.move(h,l),d=ce.MOVED);a&&a({context:h?.context,operation:d,record:r})})}detach(){}};var ba=20;var si=(()=>{class o{_ngZone=w(we);_platform=w(ct$1);_renderer=w(ir$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Z;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ba){return this._platform.isBrowser?new _(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(yh(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):nh()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(An(a=>!a||i.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let i=Ot$1(t),a=e.getElementRef().nativeElement;do if(i==a)return!0;while(i=i.parentElement);return!1}static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var ka=20;var ke=(()=>{class o{_platform=w(ct$1);_listeners;_viewportSize=null;_change=new Z;_document=w(Zn$1);constructor(){let e=w(we),t=w(ir$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=a=>this._change.next(a);this._listeners=[t.listen(`window`,`resize`,i),t.listen(`window`,`orientationchange`,i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,a=i.getBoundingClientRect();return{top:-a.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,left:-a.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=ka){return e>0?this._change.pipe(yh(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var io=new S(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Tt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({})}return o})();var st=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[hr$1,Tt,hr$1,Tt]})}return o})();var ct=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var ci=class extends ct{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,i,a,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=a||null,this.directives=r||null}};var lt=class extends ct{templateRef;viewContainerRef;context;injector;constructor(n,e,t,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var li=class extends ct{element;constructor(n){super(),this.element=n instanceof ur$1?n.nativeElement:n}};var di=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ci)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof lt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof li)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var At=class extends di{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,i=t.get(pn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=n.injector||this._defaultInjector||de.NULL,a=i.get(ie,t.injector);e=xP(n.component,{elementInjector:i,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var no=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({})}return o})();var oo=aw();function po(o){return new Pt(o.get(ke),o.get(Zn$1))}var Pt=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=Sw(-this._previousScrollPosition.left),n.style.top=Sw(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,i=e.style,a=t.scrollBehavior||``,r=i.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),oo&&(t.scrollBehavior=i.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),oo&&(t.scrollBehavior=a,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function uo(o,n){return new Vt(o.get(si),o.get(we),o.get(ke),n)}var Vt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(An(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var dt=class{enable(){}disable(){}attach(){}};function hi(o,n){return n.some(e=>{let t=o.bottom<e.top,i=o.top>e.bottom,a=o.right<e.left,r=o.left>e.right;return t||i||a||r})}function ao(o,n){return n.some(e=>{let t=o.top<e.top,i=o.bottom>e.bottom,a=o.left<e.left,r=o.right>e.right;return t||i||a||r})}function mt(o,n){return new Bt(o.get(si),o.get(ke),o.get(we),n)}var Bt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();hi(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var fo=(()=>{class o{_injector=w(de);noop=()=>new dt;close=e=>uo(this._injector,e);block=()=>po(this._injector);reposition=e=>mt(this._injector,e);static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var ht=class{positionStrategy;scrollStrategy=new dt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Lt=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var _o=(()=>{class o{_attachedOverlays=[];_document=w(Zn$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var go=(()=>{class o extends _o{_ngZone=w(we);_renderer=w(ir$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let a=t[i];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var vo=(()=>{class o extends _o{_platform=w(ct$1);_ngZone=w(we);_renderer=w(ir$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,`pointerdown`,this._pointerDownListener,i),a.listen(t,`click`,this._clickListener,i),a.listen(t,`auxclick`,this._clickListener,i),a.listen(t,`contextmenu`,this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=rt$1(e)};_clickListener=e=>{let t=rt$1(e),i=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let s=a[r],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(ro(s.overlayElement,t)||ro(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();function ro(o,n){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=n;for(;t;){if(t===o)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var yo=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var bo=(()=>{class o{_platform=w(ct$1);_containerElement;_document=w(Zn$1);_styleLoader=w(hi$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||cw()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<i.length;a++)i[a].remove()}let t=this._document.createElement(`div`);t.classList.add(e),cw()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(yo)}static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var mi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,i){this._renderer=e,this._ngZone=t,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function pi(o){return o&&o.nodeType===1}var zt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges=L.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(n,e,t,i,a,r,s,l,h,d=!1,u,v){this._portalOutlet=n,this._host=e,this._pane=t,this._config=i,this._ngZone=a,this._keyboardDispatcher=r,this._document=s,this._location=l,this._outsideClickDispatcher=h,this._animationsDisabled=d,this._injector=u,this._renderer=v,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=hy(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=V(V({},this._config),n),this._updateElementSize()}setDirection(n){this._config=H(V({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Sw(this._config.width),n.height=Sw(this._config.height),n.minWidth=Sw(this._config.minWidth),n.minHeight=Sw(this._config.minHeight),n.maxWidth=Sw(this._config.maxWidth),n.maxHeight=Sw(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;pi(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new mi(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let i=ey(e||[]).filter(a=>!!a);i.length&&(t?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=hy(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var so=`cdk-overlay-connected-position-bounding-box`;var Ca=/([A-Za-z%]+)$/;function ui(o,n){return new Ht(n,o.get(ke),o.get(Zn$1),o.get(ct$1),o.get(bo))}var Ht=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Z;_resizeSubscription=L.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,i,a){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(so),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,a=[],r;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,i,s),h=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(h,e,t,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,h,t)){a.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:h,originPoint:l,position:s,overlayRect:e})}if(a.length){let s=null,l=-1;for(let h of a){let d=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);d>l&&(l=d,s=h)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Be(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(so),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof ur$1?this._origin.nativeElement:pi(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let i;if(t.originX==`center`)i=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;i=t.originX==`start`?r:s}e.left<0&&(i-=e.left);let a;return t.originY==`center`?a=n.top+n.height/2:a=t.originY==`top`?n.top:n.bottom,e.top<0&&(a-=e.top),{x:i,y:a}}_getOverlayPoint(n,e,t){let i;t.overlayX==`center`?i=-e.width/2:t.overlayX===`start`?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let a;return t.overlayY==`center`?a=-e.height/2:a=t.overlayY==`top`?0:-e.height,{x:n.x+i,y:n.y+a}}_getOverlayFit(n,e,t,i){let a=lo(e),{x:r,y:s}=n,l=this._getOffset(i,`x`),h=this._getOffset(i,`y`);l&&(r+=l),h&&(s+=h);let d=0-r,u=r+a.width-t.width,v=0-s,C=s+a.height-t.height,U=this._subtractOverflows(a.width,d,u),te=this._subtractOverflows(a.height,v,C),$=U*te;return{visibleArea:$,isCompletelyWithinViewport:a.width*a.height===$,fitsInViewportVertically:te===a.height,fitsInViewportHorizontally:U==a.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,a=t.right-e.x,r=co(this._overlayRef.getConfig().minHeight),s=co(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||r!=null&&r<=i,h=n.fitsInViewportHorizontally||s!=null&&s<=a;return l&&h}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=lo(e),a=this._viewportRect,r=Math.max(n.x+i.width-a.width,0),s=Math.max(n.y+i.height-a.height,0),l=Math.max(a.top-t.top-n.y,0),h=Math.max(a.left-t.left-n.x,0),d=0,u=0;return i.width<=a.width?d=h||-r:d=n.x<this._getViewportMarginStart()?a.left-t.left-n.x:0,i.height<=a.height?u=l||-s:u=n.y<this._getViewportMarginTop()?a.top-t.top-n.y:0,this._previousPushAmount={x:d,y:u},{x:n.x+d,y:n.y+u}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!wa(this._lastScrollVisibility,t)){let i=new Lt(n,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=n.overlayY;n.overlayX===`center`?t=`center`:this._isRtl()?t=n.overlayX===`start`?`right`:`left`:t=n.overlayX===`start`?`left`:`right`;for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,i=this._isRtl(),a,r,s;if(e.overlayY===`top`)r=n.y,a=t.height-r+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-s+this._getViewportMarginTop();else{let C=Math.min(t.bottom-n.y+t.top,n.y),U=this._lastBoundingBoxSize.height;a=C*2,r=n.y-C,a>U&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-U/2)}let l=e.overlayX===`start`&&!i||e.overlayX===`end`&&i,h=e.overlayX===`end`&&!i||e.overlayX===`start`&&i,d,u,v;if(h)v=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)u=n.x,d=t.right-n.x-this._getViewportMarginEnd();else{let C=Math.min(t.right-n.x+t.left,n.x),U=this._lastBoundingBoxSize.width;d=C*2,u=n.x-C,d>U&&!this._isInitialRender&&!this._growAfterOpen&&(u=n.x-U/2)}return{top:r,left:u,bottom:s,right:v,width:d,height:a}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left=`0`,i.bottom=i.right=`auto`,i.maxHeight=i.maxWidth=``,i.width=i.height=`100%`;else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=Sw(t.width),i.height=Sw(t.height),i.top=Sw(t.top)||`auto`,i.bottom=Sw(t.bottom)||`auto`,i.left=Sw(t.left)||`auto`,i.right=Sw(t.right)||`auto`,e.overlayX===`center`?i.alignItems=`center`:i.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?i.justifyContent=`center`:i.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,a&&(i.maxHeight=Sw(a)),r&&(i.maxWidth=Sw(r))}this._lastBoundingBoxSize=t,Be(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Be(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Be(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,e){let t={},i=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Be(t,this._getExactOverlayY(e,n,d)),Be(t,this._getExactOverlayX(e,n,d))}else t.position=`static`;let s=``,l=this._getOffset(e,`x`),h=this._getOffset(e,`y`);l&&(s+=`translateX(${l}px) `),h&&(s+=`translateY(${h}px)`),t.transform=s.trim(),r.maxHeight&&(i?t.maxHeight=Sw(r.maxHeight):a&&(t.maxHeight=``)),r.maxWidth&&(i?t.maxWidth=Sw(r.maxWidth):a&&(t.maxWidth=``)),Be(this._pane.style,t)}_getExactOverlayY(n,e,t){let i={top:``,bottom:``},a=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),n.overlayY===`bottom`)i.bottom=`${this._document.documentElement.clientHeight-(a.y+this._overlayRect.height)}px`;else i.top=Sw(a.y);return i}_getExactOverlayX(n,e,t){let i={left:``,right:``},a=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX===`end`?`left`:`right`:r=n.overlayX===`end`?`right`:`left`,r===`right`)i.right=`${this._document.documentElement.clientWidth-(a.x+this._overlayRect.width)}px`;else i.left=Sw(a.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ao(n,t),isOriginOutsideView:hi(n,t),isOverlayClipped:ao(e,t),isOverlayOutsideView:hi(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,i)=>t-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ey(n).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof ur$1)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();n&&(e.style.display=`block`);let t=e.getBoundingClientRect();return n&&(e.style.display=``),t}};function Be(o,n){for(let e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o}function co(o){if(typeof o!=`number`&&o!=null){let[n,e]=o.split(Ca);return!e||e===`px`?parseFloat(n):null}return o||null}function lo(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function wa(o,n){return o===n?!0:o.isOriginClipped===n.isOriginClipped&&o.isOriginOutsideView===n.isOriginOutsideView&&o.isOverlayClipped===n.isOverlayClipped&&o.isOverlayOutsideView===n.isOverlayOutsideView}var ho=`cdk-global-overlay-wrapper`;function ko(o){return new jt}var jt=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(ho),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:i,height:a,maxWidth:r,maxHeight:s}=this._overlayRef.getConfig(),l=(i===`100%`||i===`100vw`)&&(!r||r===`100%`||r===`100vw`),h=(a===`100%`||a===`100vh`)&&(!s||s===`100%`||s===`100vh`),d=this._xPosition,u=this._xOffset,v=this._overlayRef.getConfig().direction===`rtl`,C=``,U=``,te=``;l?te=`flex-start`:d===`center`?(te=`center`,v?U=u:C=u):v?d===`left`||d===`end`?(te=`flex-end`,C=u):(d===`right`||d===`start`)&&(te=`flex-start`,U=u):d===`left`||d===`start`?(te=`flex-start`,C=u):(d===`right`||d===`end`)&&(te=`flex-end`,U=u),n.position=this._cssPosition,n.marginLeft=l?`0`:C,n.marginTop=h?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?`0`:U,e.justifyContent=te,e.alignItems=h?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ho),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var Co=(()=>{class o{_injector=w(de);global(){return ko()}flexibleConnectedTo(e){return ui(this._injector,e)}static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var pt=new S(`OVERLAY_DEFAULT_CONFIG`);function fi(o,n){o.get(hi$1).load(yo);let e=o.get(bo),t=o.get(Zn$1),i=o.get(eo$1),a=o.get(di$1),r=o.get(zf),s=o.get(ha,null,{optional:!0})||o.get(ir$1).createRenderer(null,null),l=new ht(n),h=o.get(pt,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||r.value,!t.body||!(`showPopover`in t.body)?l.usePopover=!1:l.usePopover=n?.usePopover??h;let d=t.createElement(`div`),u=t.createElement(`div`);d.id=i.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),u.appendChild(d),l.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let v=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return pi(v)?v.after(u):v?.type===`parent`?v.element.appendChild(u):e.getContainerElement().appendChild(u),new zt(new At(d,a,o),u,d,l,o.get(we),o.get(go),t,o.get(gc),o.get(vo),n?.disableAnimations??o.get(mg,null,{optional:!0})===`NoopAnimations`,o.get(ie),s)}var wo=(()=>{class o{scrollStrategies=w(fo);_positionBuilder=w(Co);_injector=w(de);create(e){return fi(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||o)};static ɵprov=lr$1({token:o,factory:o.ɵfac})}return o})();var Sa=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var xa=new S(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=w(de);return()=>mt(o)}});var Ke=(()=>{class o{elementRef=w(ur$1);static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return o})();var So=new S(`cdk-connected-overlay-default-config`);var Wt=(()=>{class o{_dir=w(zf,{optional:!0});_injector=w(de);_overlayRef;_templatePortal;_backdropSubscription=L.EMPTY;_attachSubscription=L.EMPTY;_detachSubscription=L.EMPTY;_positionSubscription=L.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=w(xa);_ngZone=w(we);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new Ae;positionChange=new Ae;attach=new Ae;detach=new Ae;overlayKeydown=new Ae;overlayOutsideClick=new Ae;constructor(){let e=w(or$1),t=w(ui$1),i=w(So,{optional:!0}),a=w(pt,{optional:!0});this.usePopover=a?.usePopover===!1?null:`global`,this._templatePortal=new lt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Sa);let e=this._overlayRef=fi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Xc(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),a=rt$1(t);(!i||i!==a&&!i.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new ht({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=ui(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ke?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ke?this.origin.elementRef.nativeElement:this.origin instanceof ur$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Oh(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,MP],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,MP],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,MP],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,MP],push:[2,`cdkConnectedOverlayPush`,`push`,MP],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,MP],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,MP],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Lg]})}return o})();var _i=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({providers:[wo],imports:[hr$1,no,st,st]})}return o})();var xo=(()=>{class o{_animationsDisabled=wn();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&rp(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return o})();var Da=[`text`];var Ra=[[[`mat-icon`]],`*`];var Ea=[`mat-icon`,`*`];function Na(o,n){if(o&1&&qf(0,`mat-pseudo-checkbox`,1),o&2){let e=PI();Uf(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function Ma(o,n){if(o&1&&qf(0,`mat-pseudo-checkbox`,3),o&2)Uf(`disabled`,PI().disabled)}function Oa(o,n){if(o&1&&(Jo$1(0,`span`,4),pE(1),ac()),o&2){let e=PI();jy(),fc(`(`,e.group.label,`)`)}}var vi=new S(`MAT_OPTION_PARENT_COMPONENT`);var yi=new S(`MatOptgroup`);var gi=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var $e=(()=>{class o{_element=w(ur$1);_changeDetectorRef=w(bP);_parent=w(vi,{optional:!0});group=w(yi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=w(eo$1).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Mo(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ae;_text;_stateChanges=new Z;constructor(){let e=w(hi$1);e.load(au),e.load(Sf),this._signalDisableRipple=!!this._parent&&Ps(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Xc(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new gi(this,e))}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&Jf(Da,7),t&2){let a;BI(a=$I())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&Yf(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(Qf(`id`,i.id),$f(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),rp(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,MP]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:Ea,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(jI(Ra),SI(0,Na,1,2,`mat-pseudo-checkbox`,1),VI(1),Jo$1(2,`span`,2,0),VI(4,1),ac(),SI(5,Ma,1,1,`mat-pseudo-checkbox`,3),SI(6,Oa,2,1,`span`,4),qf(7,`div`,5)),t&2&&(xI(i.multiple?0:-1),jy(5),xI(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),jy(),xI(i.group&&i.group._inert?6:-1),jy(),Uf(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[xo,$w],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})();function Do(o,n,e){if(e.length){let t=n.toArray(),i=e.toArray(),a=0;for(let r=0;r<o+1;r++)t[r].group&&t[r].group===i[a]&&a++;return a}return 0}function Ro(o,n,e,t){return o<e?o:o+n>e+t?Math.max(0,o-t+n):e}var Eo=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[hr$1]})}return o})();var bi=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[du,Eo,$e,hr$1]})}return o})();var Aa=[`trigger`];var Pa=[`panel`];var Va=[[[`mat-select-trigger`]],`*`];var Ba=[`mat-select-trigger`,`*`];function La(o,n){if(o&1&&(Jo$1(0,`span`,4),pE(1),ac()),o&2){let e=PI();jy(),cp(e.placeholder)}}function za(o,n){o&1&&VI(0)}function Ha(o,n){if(o&1&&(Jo$1(0,`span`,11),pE(1),ac()),o&2){let e=PI(2);jy(),cp(e.triggerValue)}}function ja(o,n){if(o&1&&(Jo$1(0,`span`,5),SI(1,za,1,0)(2,Ha,2,1,`span`,11),ac()),o&2){let e=PI();jy(),xI(e.customTrigger?1:2)}}function Wa(o,n){if(o&1){let e=RI();Jo$1(0,`div`,12,1),Yf(`keydown`,function(i){Wl(e);return Gl(PI()._handleKeydown(i))}),VI(2,1),ac()}if(o&2){let e=PI();tE(e.panelClass),rp(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),$f(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var qa=new S(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=w(de);return()=>mt(o)}});var Ua=new S(`MAT_SELECT_CONFIG`);var Ya=new S(`MatSelectTrigger`);var ki=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Oo=(()=>{class o{_viewportRuler=w(ke);_changeDetectorRef=w(bP);_elementRef=w(ur$1);_dir=w(zf,{optional:!0});_idGenerator=w(eo$1);_renderer=w(ha);_parentFormField=w(Ke$1,{optional:!0});ngControl=w(Te,{self:!0,optional:!0});_liveAnnouncer=w(Nf);_defaultOptions=w(Ua,{optional:!0});_animationsDisabled=wn();_popoverLocation;_initialized=new Z;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Do(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Ro(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ki(this,e)}_scrollStrategyFactory=w(qa);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Z;_errorStateTracker;stateChanges=new Z;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Mo(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(fe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=hh(()=>{let e=this.options;return e?e.changes.pipe(Sh(e),xh(()=>mh(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xh(()=>this.optionSelectionChanges))});openedChange=new Ae;_openedStream=this.openedChange.pipe(An(e=>e),gt(()=>{}));_closedStream=this.openedChange.pipe(An(e=>!e),gt(()=>{}));selectionChange=new Ae;valueChange=new Ae;constructor(){let e=w(Cn$1),t=w(st$1,{optional:!0}),i=w(lt$1,{optional:!0}),a=w(new vp(`tabindex`),{optional:!0}),r=w(pt,{optional:!0}),s=w(yn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Pe(e,s||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new rt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ah(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ah(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Sh(null),Ah(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Fi(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!Xc(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;r.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!Xc(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Xc(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Ke?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Js(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=mh(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ah(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),mh(...this.options.map(t=>t._stateChanges)).pipe(Ah(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=rt$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&Kf(a,Ya,5)(a,$e,5)(a,yi,5),t&2){let r;BI(r=$I())&&(i.customTrigger=r.first),BI(r=$I())&&(i.options=r),BI(r=$I())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&Jf(Aa,5)(Pa,5)(Wt,5),t&2){let a;BI(a=$I())&&(i.trigger=a.first),BI(a=$I())&&(i.panel=a.first),BI(a=$I())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&Yf(`keydown`,function(r){return i._handleKeydown(r)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&($f(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),rp(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,MP],disableRipple:[2,`disableRipple`,`disableRipple`,MP],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:NP(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,MP],placeholder:`placeholder`,required:[2,`required`,`required`,MP],multiple:[2,`multiple`,`multiple`,MP],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,MP],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,NP],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,MP]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[EE([{provide:Ye,useExisting:o},{provide:vi,useExisting:o}]),Lg],ngContentSelectors:Ba,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(jI(Va),Jo$1(0,`div`,2,0),Yf(`click`,function(){return i.open()}),Jo$1(3,`div`,3),SI(4,La,2,1,`span`,4)(5,ja,3,1,`span`,5),ac(),Jo$1(6,`div`,6)(7,`div`,7),iu(),Jo$1(8,`svg`,8),qf(9,`path`,9),ac()()()(),jf(10,Wa,3,16,`ng-template`,10),Yf(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(r){return i._handleOverlayKeydown(r)})),t&2){let a=qI(1);jy(3),$f(`id`,i._valueId),jy(),xI(i.empty?4:5),jy(6),Uf(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[Ke,Wt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return o})();var Io=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[_i,bi,hr$1,Tt,Je,bi]})}return o})();var Ga=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Qa=[`caption`,`colgroup, col`,`*`];function Ka(o,n){o&1&&VI(0,2)}function $a(o,n){o&1&&(Jo$1(0,`thead`,0),zf$1(1,1),ac(),Jo$1(2,`tbody`,0),zf$1(3,2)(4,3),ac(),Jo$1(5,`tfoot`,0),zf$1(6,4),ac())}function Za(o,n){o&1&&zf$1(0,1)(1,2)(2,3)(3,4)}var le=new S(`CDK_TABLE`);var Yt=(()=>{class o{template=w(or$1);static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdkCellDef`,``]]})}return o})();var Xt=(()=>{class o{template=w(or$1);static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdkHeaderCellDef`,``]]})}return o})();var Po=(()=>{class o{template=w(or$1);static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdkFooterCellDef`,``]]})}return o})();var Ze=(()=>{class o{_table=w(le,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,a){if(t&1&&Kf(a,Yt,5)(a,Xt,5)(a,Po,5),t&2){let r;BI(r=$I())&&(i.cell=r.first),BI(r=$I())&&(i.headerCell=r.first),BI(r=$I())&&(i.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,MP],stickyEnd:[2,`stickyEnd`,`stickyEnd`,MP]}})}return o})();var Ut=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}};var Vo=(()=>{class o extends Ut{constructor(){super(w(Ze),w(ur$1))}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Pf]})}return o})();var Bo=(()=>{class o extends Ut{constructor(){let e=w(Ze),t=w(ur$1);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Pf]})}return o})();var wi=(()=>{class o{template=w(or$1);_differs=w(kE);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ft?e.headerCell.template:this instanceof Si?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,features:[Lg]})}return o})();var ft=(()=>{class o extends wi{_table=w(le,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,MP]},features:[Pf,Lg]})}return o})();var Si=(()=>{class o extends wi{_table=w(le,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,MP]},features:[Pf,Lg]})}return o})();var Gt=(()=>{class o extends wi{_table=w(le,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Pf]})}return o})();var Le=(()=>{class o{_viewContainer=w(ui$1);cells;context;static mostRecentCellOutlet=null;constructor(){o.mostRecentCellOutlet=this}ngOnDestroy(){o.mostRecentCellOutlet===this&&(o.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`cdkCellOutlet`,``]]})}return o})();var xi=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&zf$1(0,0)},dependencies:[Le],encapsulation:2,changeDetection:1})}return o})();var Di=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&zf$1(0,0)},dependencies:[Le],encapsulation:2,changeDetection:1})}return o})();var Lo=(()=>{class o{templateRef=w(or$1);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return o})();var Fo=[`top`,`bottom`,`left`,`right`];var Ci=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,i=!0,a,r,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=a,this._positionListener=r,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let i of n)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));hy({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,i=!0,a=!0){if(!n.length||!this._isBrowser||!(e.some($=>$)||t.some($=>$))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=n[0],s=r.children.length,l=this.direction===`rtl`,h=l?`right`:`left`,d=l?`left`:`right`,u=e.lastIndexOf(!0),v=t.indexOf(!0),C,U,te;a&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),hy({earlyRead:()=>{C=this._getCellWidths(r,i),U=this._getStickyStartColumnPositions(C,e),te=this._getStickyEndColumnPositions(C,t)},write:()=>{for(let $ of n)for(let ie=0;ie<s;ie++){let Ii=$.children[ie];e[ie]&&this._addStickyStyle(Ii,h,U[ie],ie===u),t[ie]&&this._addStickyStyle(Ii,d,te[ie],ie===v)}this._positionListener&&C.some($=>!!$)&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:C.slice(0,u+1).map(($,ie)=>e[ie]?$:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:v===-1?[]:C.slice(v).map(($,ie)=>t[ie+v]?$:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let i=t===`bottom`?n.slice().reverse():n,a=t===`bottom`?e.slice().reverse():e,r=[],s=[],l=[];hy({earlyRead:()=>{for(let h=0,d=0;h<i.length;h++){if(!a[h])continue;r[h]=d;let u=i[h];l[h]=this._isNativeHtmlTable?Array.from(u.children):[u];let v=this._retrieveElementSize(u).height;d+=v,s[h]=v}},write:()=>{let h=a.lastIndexOf(!0);for(let d=0;d<i.length;d++){if(!a[d])continue;let u=r[d],v=d===h;for(let C of l[d])this._addStickyStyle(C,t,u,v)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:r,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:r,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&hy({write:()=>{let t=n.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let i of e)n.style[i]=``,n.classList.remove(this._borderCellCss[i]);Fo.some(i=>e.indexOf(i)===-1&&n.style[i])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex=``,this._needsPositionStickyOnElement&&(n.style.position=``),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,i){n.classList.add(this._stickCellCss),i&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Fo)n.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=n.children;for(let a=0;a<i.length;a++){let r=i[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],i=0;for(let a=0;a<n.length;a++)e[a]&&(t[a]=i,i+=n[a]);return t}_getStickyEndColumnPositions(n,e){let t=[],i=0;for(let a=n.length;a>0;a--)e[a]&&(t[a]=i,i+=n[a]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,i),this._resizeObserver.observe(n,{box:`border-box`})),i}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Ja(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Ja(o){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(n=>o.classList.contains(n))}function To(o){return Error(`Could not find column with id "${o}".`)}var ut=new S(`STICKY_POSITIONING_LISTENER`);var Ri=(()=>{class o{viewContainer=w(ui$1);elementRef=w(ur$1);constructor(){let e=w(le);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`rowOutlet`,``]]})}return o})();var Ei=(()=>{class o{viewContainer=w(ui$1);elementRef=w(ur$1);constructor(){let e=w(le);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`headerRowOutlet`,``]]})}return o})();var Ni=(()=>{class o{viewContainer=w(ui$1);elementRef=w(ur$1);constructor(){let e=w(le);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`footerRowOutlet`,``]]})}return o})();var Mi=(()=>{class o{viewContainer=w(ui$1);elementRef=w(ur$1);constructor(){let e=w(le);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||o)};static ɵdir=gI({type:o,selectors:[[``,`noDataRowOutlet`,``]]})}return o})();var Oi=(()=>{class o{_differs=w(kE);_changeDetectorRef=w(bP);_elementRef=w(ur$1);_dir=w(zf,{optional:!0});_platform=w(ct$1);_viewRepeater;_viewportRuler=w(ke);_injector=w(de);_virtualScrollViewport=w(io,{optional:!0,host:!0});_positionListener=w(ut,{optional:!0})||w(ut,{optional:!0,skipSelf:!0});_document=w(Zn$1);_data;_renderedRange;_onDestroy=new Z;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Z;_footerRowStickyUpdates=new Z;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Z;_dataStream=new Z;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ae;viewChange=new Cn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){w(new vp(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ah(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new It:new Ft,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),at(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,a,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===ce.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let a=t.get(i.currentIndex);a.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Ao(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Ao(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===a&&r.push(t[s]);this._addStickyColumnStyles(r,a)}),i.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],s=this._getRenderRowsForData(r,a,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<s.length;l++){let h=s[l],d=this._cachedRenderRowsMap.get(h.data);d.has(h.rowDef)?d.get(h.rowDef).push(h):d.set(h.rowDef,[h]),e.push(h)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let s=i&&i.has(r)?i.get(r):[];if(s.length){let l=s.shift();return l.dataIndex=t,l}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),qt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=qt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=qt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=qt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,s)=>{let l=!!s.getColumnsDiff();return r||l},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||i||a}_switchDataSource(e){this._data=[],at(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;at(this.dataSource)?e=this.dataSource.connect(this):oh(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=nh(this.dataSource)),this._renderChangeSubscription=fh([e,this.viewChange]).pipe(Ah(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);if(!l)throw To(s);return l}),a=i.map(s=>s.sticky),r=i.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let a=e.viewContainer.get(i);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&i.push(a)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,a={$implicit:e.data};return{templateRef:i.template,context:a,index:t}}_renderRow(e,t,i,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,i);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))Le.mostRecentCellOutlet&&Le.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);if(!i)throw To(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new Ci(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:nh()).pipe(Ah(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?Qp:zp;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(yh(0,t),Ah(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,a)=>this._measureRangeSize(i,a)}),fh([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ah(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let s=a.elements[r];if(s){let l=a.offsets[r],h=i!==0?Math.max(i-l,l):-l;for(let d of s)d.style.top=`${-h}px`}}}),fh([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ah(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let s=a.elements[r];if(s)for(let l of s)l.style.bottom=`${i+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let a=i.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let s=r.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let r=e.start-i.start,s=e.end-e.start,l,h;for(let v=0;v<s;v++){let C=a.get(v+r);if(C&&C.rootNodes.length){l=h=C.rootNodes[0];break}}for(let v=s-1;v>-1;v--){let C=a.get(v+r);if(C&&C.rootNodes.length){h=C.rootNodes[C.rootNodes.length-1];break}}let d=l?.getBoundingClientRect?.(),u=h?.getBoundingClientRect?.();return d&&u?u.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||o)};static ɵcmp=uI({type:o,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,i,a){if(t&1&&Kf(a,Lo,5)(a,Ze,5)(a,Gt,5)(a,ft,5)(a,Si,5),t&2){let r;BI(r=$I())&&(i._noDataRow=r.first),BI(r=$I())&&(i._contentColumnDefs=r),BI(r=$I())&&(i._contentRowDefs=r),BI(r=$I())&&(i._contentHeaderRowDefs=r),BI(r=$I())&&(i._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,i){t&2&&rp(`cdk-table-fixed-layout`,i.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,MP],fixedLayout:[2,`fixedLayout`,`fixedLayout`,MP],recycleRows:[2,`recycleRows`,`recycleRows`,MP]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[EE([{provide:le,useExisting:o},{provide:ut,useValue:null}])],ngContentSelectors:Qa,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(jI(Ga),VI(0),VI(1,1),SI(2,Ka,1,0),SI(3,$a,7,0)(4,Za,4,0)),t&2&&(jy(2),xI(i._isServer?2:-1),jy(),xI(i._isNativeHtmlTable?3:4))},dependencies:[Ei,Ri,Mi,Ni],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return o})();function qt(o,n){return o.concat(Array.from(n))}function Ao(o,n){let e=n.toUpperCase(),t=o.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var zo=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[st]})}return o})();var er=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var tr=[`caption`,`colgroup, col`,`*`];function ir(o,n){o&1&&VI(0,2)}function nr(o,n){o&1&&(Jo$1(0,`thead`,0),zf$1(1,1),ac(),Jo$1(2,`tbody`,2),zf$1(3,3)(4,4),ac(),Jo$1(5,`tfoot`,0),zf$1(6,5),ac())}function or(o,n){o&1&&zf$1(0,1)(1,3)(2,4)(3,5)}var Ho=(()=>{class o extends Oi{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵcmp=uI({type:o,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,i){t&2&&rp(`mat-table-fixed-layout`,i.fixedLayout)},exportAs:[`matTable`],features:[EE([{provide:Oi,useExisting:o},{provide:le,useExisting:o},{provide:ut,useValue:null}]),Pf],ngContentSelectors:tr,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(jI(er),VI(0),VI(1,1),SI(2,ir,1,0),SI(3,nr,7,0)(4,or,4,0)),t&2&&(jy(2),xI(i._isServer?2:-1),jy(),xI(i._isNativeHtmlTable?3:4))},dependencies:[Ei,Ri,Mi,Ni],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return o})();var jo=(()=>{class o extends Yt{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`matCellDef`,``]],features:[EE([{provide:Yt,useExisting:o}]),Pf]})}return o})();var Wo=(()=>{class o extends Xt{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`matHeaderCellDef`,``]],features:[EE([{provide:Xt,useExisting:o}]),Pf]})}return o})();var qo=(()=>{class o extends Ze{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[EE([{provide:Ze,useExisting:o}]),Pf]})}return o})();var Uo=(()=>{class o extends Vo{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Pf]})}return o})();var Yo=(()=>{class o extends Bo{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Pf]})}return o})();var Xo=(()=>{class o extends ft{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,MP]},features:[EE([{provide:ft,useExisting:o}]),Pf]})}return o})();var Go=(()=>{class o extends Gt{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵdir=gI({type:o,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[EE([{provide:Gt,useExisting:o}]),Pf]})}return o})();var Qo=(()=>{class o extends xi{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵcmp=uI({type:o,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[EE([{provide:xi,useExisting:o}]),Pf],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&zf$1(0,0)},dependencies:[Le],encapsulation:2,changeDetection:1})}return o})();var Ko=(()=>{class o extends Di{static ɵfac=(()=>{let e;return function(i){return(e||(e=em(o)))(i||o)}})();static ɵcmp=uI({type:o,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[EE([{provide:Di,useExisting:o}]),Pf],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&zf$1(0,0)},dependencies:[Le],encapsulation:2,changeDetection:1})}return o})();var $o=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=fI({type:o});static ɵinj=vl({imports:[zo,hr$1]})}return o})();var ar=9007199254740991;var Qt=class extends ot{_data;_renderData=new Cn([]);_filter=new Cn(``);_internalPageChanges=new Z;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let t=n[e];if(Ef(t)){let i=Number(t);return i<ar?i:t}return t};sortData=(n,e)=>{let t=e.active,i=e.direction;return!t||i==``?n:n.sort((a,r)=>{let s=this.sortingDataAccessor(a,t),l=this.sortingDataAccessor(r,t),h=typeof s,d=typeof l;h!==d&&(h===`number`&&(s+=``),d===`number`&&(l+=``));let u=0;return s!=null&&l!=null?s>l?u=1:s<l&&(u=-1):s!=null?u=1:l!=null&&(u=-1),u*(i==`asc`?1:-1)})};filterPredicate=(n,e)=>{let t=e.trim().toLowerCase();return Object.values(n).some(i=>`${i}`.toLowerCase().includes(t))};constructor(n=[]){super(),this._data=new Cn(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?mh(this._sort.sortChange,this._sort.initialized):nh(null),e=this._paginator?mh(this._paginator.page,this._internalPageChanges,this._paginator.initialized):nh(null),t=this._data,r=fh([fh([fh([t,this._filter]).pipe(gt(([s])=>this._filterData(s))),n]).pipe(gt(([s])=>this._orderData(s))),e]).pipe(gt(([s])=>this._pageData(s)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(s=>this._renderData.next(s))}_filterData(n){return this.filteredData=this.filter==null||this.filter===``?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Kt=[{id:`1`,nome:`Carlos Mendes`,vaga:`Soldador (TIG/MIG)`,experienciaAnos:5,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Até 15/03/2028`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`NR-35`,isValido:!0,valorVisual:`Válido`},{nome:`Inglês`,isValido:!0,valorVisual:`Básico`}]},{id:`2`,nome:`Mariana Souza`,vaga:`Engenheira de Petróleo`,experienciaAnos:8,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Até 20/11/2027`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`NR-35`,isValido:!0,valorVisual:`Válido`},{nome:`Inglês`,isValido:!0,valorVisual:`Fluente`}]},{id:`3`,nome:`Roberto Alves`,vaga:`Taifeiro`,experienciaAnos:2,requisitos:[{nome:`CBSP`,isValido:!1,valorVisual:`Expirado`},{nome:`HUET`,isValido:!1,valorVisual:`Expirado`},{nome:`NR-35`,isValido:!0,valorVisual:`Válido`},{nome:`Inglês`,isValido:!0,valorVisual:`Básico`}]},{id:`4`,nome:`Fernanda Lima`,vaga:`Rádio Operadora`,experienciaAnos:12,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Até 10/05/2027`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`NR-35`,isValido:!1,valorVisual:`Expirado`},{nome:`Inglês`,isValido:!0,valorVisual:`Avançado`}]},{id:`5`,nome:`João Pedro Silva`,vaga:`Pintor Escalador`,experienciaAnos:4,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Até 10/01/2029`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`NR-35`,isValido:!0,valorVisual:`Válido`},{nome:`Inglês`,isValido:!0,valorVisual:`Intermediário`}]},{id:`6`,nome:`Lucas Martins`,vaga:`Técnico em Segurança do Trabalho`,experienciaAnos:7,requisitos:[{nome:`CBSP`,isValido:!1,valorVisual:`Expirado`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`NR-35`,isValido:!0,valorVisual:`Válido`},{nome:`Inglês`,isValido:!0,valorVisual:`Intermediário`}]},{id:`7`,nome:`Juliana Costa`,vaga:`Enfermeira Marítima`,experienciaAnos:3,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Até 22/08/2027`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`NR-35`,isValido:!1,valorVisual:`Expirado`},{nome:`Inglês`,isValido:!0,valorVisual:`Fluente`}]},{id:`8`,nome:`Marcos Paulo`,vaga:`Taifeiro`,experienciaAnos:0,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Até 05/12/2028`},{nome:`HUET`,isValido:!1,valorVisual:`Expirado`},{nome:`NR-35`,isValido:!1,valorVisual:`Expirado`},{nome:`Inglês`,isValido:!0,valorVisual:`Básico`}]},{id:`9`,nome:`Ana Beatriz Rocha`,vaga:`Motorista de Ônibus`,experienciaAnos:6,requisitos:[{nome:`CNH Categoria D`,isValido:!0,valorVisual:`Até 08/2030`},{nome:`MOPP`,isValido:!0,valorVisual:`Concluído`},{nome:`Direção Defensiva`,isValido:!0,valorVisual:`Atualizado`}]},{id:`10`,nome:`Camila Peixoto`,vaga:`Assistente de Vendas`,experienciaAnos:3,requisitos:[{nome:`CRM Salesforce`,isValido:!0,valorVisual:`Certificado`},{nome:`Inglês`,isValido:!0,valorVisual:`Avançado`},{nome:`Negociação B2B`,isValido:!0,valorVisual:`Comprovada`},{nome:`Pacote Office`,isValido:!0,valorVisual:`Avançado`}]},{id:`11`,nome:`Rafael Linhares`,vaga:`Técnico de Desenvolvimento de MRO`,experienciaAnos:8,requisitos:[{nome:`ERP SAP (Módulo MM)`,isValido:!0,valorVisual:`Especialista`},{nome:`Leitura de Desenho Técnico`,isValido:!0,valorVisual:`Avançado`},{nome:`Inglês Técnico`,isValido:!0,valorVisual:`Intermediário`},{nome:`CBSP`,isValido:!1,valorVisual:`Expirado`}]},{id:`FAM-19831011`,nome:`Francisco Augusto Manhães`,vaga:`PLATAFORMISTA`,experienciaAnos:9,requisitos:[{nome:`CBSP`,isValido:!0,valorVisual:`Válido`},{nome:`HUET`,isValido:!0,valorVisual:`Válido`},{nome:`WELL CONTROL`,isValido:!0,valorVisual:`Válido`},{nome:`Informática Avançada`,isValido:!0,valorVisual:`Válido`},{nome:`NR-11`,isValido:!0,valorVisual:`Válido`}]}];function sr(o,n){if(o&1){let e=RI();Jo$1(0,`mat-checkbox`,18),Yf(`change`,function(i){let a=Wl(e).$implicit;return Gl(PI().onRequisitoToggle(a,i.checked))}),pE(1),ac()}if(o&2){let e=n.$implicit;jy(),fc(` Exige `,e,` `)}}function cr(o,n){o&1&&(Jo$1(0,`th`,19),pE(1,`Nome`),ac())}function lr(o,n){if(o&1&&(Jo$1(0,`td`,20),pE(1),ac()),o&2){let e=n.$implicit;jy(),cp(e.nome)}}function dr(o,n){o&1&&(Jo$1(0,`th`,19),pE(1,`Vaga Desejada`),ac())}function hr(o,n){if(o&1&&(Jo$1(0,`td`,20),pE(1),ac()),o&2){let e=n.$implicit;jy(),cp(e.vaga)}}function mr(o,n){o&1&&(Jo$1(0,`th`,19),pE(1,`Experiência`),ac())}function pr(o,n){if(o&1&&(Jo$1(0,`td`,20),pE(1),ac()),o&2){let e=n.$implicit;jy(),fc(` `,e.experienciaAnos===0?`Sem experiência`:e.experienciaAnos+` anos`,` `)}}function ur(o,n){o&1&&(Jo$1(0,`th`,19),pE(1,`Requisitos e Certificações`),ac())}function fr(o,n){if(o&1&&(Jo$1(0,`mat-chip`),pE(1),ac()),o&2){let e=n.$implicit;rp(`chip-valido`,e.isValido)(`chip-invalido`,!e.isValido),jy(),lp(` `,e.nome,`: `,e.valorVisual,` `)}}function _r(o,n){if(o&1&&(Jo$1(0,`td`,20)(1,`mat-chip-set`,21),jf(2,fr,2,6,`mat-chip`,22),ac()()),o&2){let e=n.$implicit;jy(2),Uf(`ngForOf`,e.requisitos)}}function gr(o,n){o&1&&(Jo$1(0,`th`,19),pE(1,`Ações`),ac())}function vr(o,n){if(o&1){let e=RI();Jo$1(0,`td`,20)(1,`div`,23)(2,`button`,24),Yf(`click`,function(){let i=Wl(e).$implicit;return Gl(PI().baixarCv(i))}),Jo$1(3,`div`,25)(4,`mat-icon`),pE(5,`download`),ac(),pE(6,`cv-pdf`),ac()(),Jo$1(7,`button`,26),Yf(`click`,function(){let i=Wl(e).$implicit;return Gl(PI().aprovarParaEntrevista(i))}),pE(8,`Aprovar para Entrevista`),ac()()()}}function yr(o,n){o&1&&qf(0,`tr`,27)}function br(o,n){o&1&&qf(0,`tr`,28)}var Zo=class o{posthogService=w(vp$1);dataSource=new Qt(Kt);colunas=[`nome`,`vaga`,`experiencia`,`requisitos`,`acoes`];requisitosDisponiveis=Array.from(new Set(Kt.flatMap(n=>n.requisitos.map(e=>e.nome)))).sort((n,e)=>n.localeCompare(e,`pt-BR`));termoBusca=``;experienciaMinima=0;requisitosSelecionados=new Set;constructor(){this.dataSource.filterPredicate=(n,e)=>{let t=this.parseFiltro(e),i=n.nome.toLowerCase().includes(t.termo)||n.vaga.toLowerCase().includes(t.termo),a=n.experienciaAnos>=t.experienciaMinima,r=new Set(n.requisitos.filter(l=>l.isValido).map(l=>l.nome)),s=t.requisitos.every(l=>r.has(l));return i&&a&&s},this.atualizarFiltroTabela()}ngOnInit(){console.log(`[DashboardComponent] ngOnInit chamado`),this.posthogService.posthog.capture(`pagina_dashboard_visualizada`,{total_candidatos:Kt.length})}applyFilter(n){this.termoBusca=n.target.value.trim().toLowerCase(),this.atualizarFiltroTabela(),this.termoBusca.length>2&&(console.log(`[DashboardComponent] Filtro de busca aplicado`,{termo:this.termoBusca}),this.posthogService.posthog.capture(`busca_candidatos`,{termo_tamanho:this.termoBusca.length}))}onExperienciaChange(n){this.experienciaMinima=n,this.atualizarFiltroTabela(),console.log(`[DashboardComponent] Filtro de experiência aplicado`,{experiencia_minima_anos:n}),this.posthogService.posthog.capture(`filtro_experiencia_aplicado`,{experiencia_minima_anos:n})}onRequisitoToggle(n,e){e?this.requisitosSelecionados.add(n):this.requisitosSelecionados.delete(n),this.atualizarFiltroTabela(),console.log(`[DashboardComponent] Filtro de requisito aplicado`,{requisito:n,ativo:e,total_requisitos_ativos:this.requisitosSelecionados.size}),this.posthogService.posthog.capture(`filtro_requisito_aplicado`,{requisito:n,ativo:e,total_requisitos_ativos:this.requisitosSelecionados.size})}aprovarParaEntrevista(n){console.log(`[DashboardComponent] Candidato aprovado para entrevista`,{candidato_id:n.id}),this.posthogService.posthog.capture(`candidato_aprovado_entrevista`,{candidato_id:n.id,vaga:n.vaga,experiencia_anos:n.experienciaAnos,requisitos_validos:n.requisitos.filter(e=>e.isValido).length,total_requisitos:n.requisitos.length})}baixarCv(n){console.log(`[DashboardComponent] Download de CV iniciado`,{candidato_id:n.id}),this.posthogService.posthog.capture(`cv_download_iniciado`,{candidato_id:n.id,vaga:n.vaga})}atualizarFiltroTabela(){this.dataSource.filter=JSON.stringify({termo:this.termoBusca,requisitos:Array.from(this.requisitosSelecionados),experienciaMinima:this.experienciaMinima})}parseFiltro(n){try{let e=JSON.parse(n);return{termo:(e.termo??``).toLowerCase(),requisitos:Array.isArray(e.requisitos)?e.requisitos:[],experienciaMinima:typeof e.experienciaMinima==`number`?e.experienciaMinima:0}}catch{return{termo:``,requisitos:[],experienciaMinima:0}}}static ɵfac=function(e){return new(e||o)};static ɵcmp=uI({type:o,selectors:[[`app-dashboard`]],decls:50,vars:10,consts:[[1,`dashboard-grid`],[1,`filtros-lista`],[3,`change`,4,`ngFor`,`ngForOf`],[`appearance`,`outline`,1,`full-width`],[3,`selectionChange`,`value`],[3,`value`],[`matPrefix`,``],[`matInput`,``,`placeholder`,`Buscar candidato, certificação ou palavra-chave...`,3,`input`],[`mat-table`,``,1,`mat-elevation-z1`,`full-width`,3,`dataSource`],[`matColumnDef`,`nome`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`vaga`],[`matColumnDef`,`experiencia`],[`matColumnDef`,`requisitos`],[`matColumnDef`,`acoes`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[3,`change`],[`mat-header-cell`,``],[`mat-cell`,``],[1,`requisitos-chips`],[3,`chip-valido`,`chip-invalido`,4,`ngFor`,`ngForOf`],[1,`acoes-botoes`],[`mat-button`,``,3,`click`],[1,`icone-texto`],[`mat-flat-button`,``,`color`,`primary`,3,`click`],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,t){e&1&&(Jo$1(0,`section`,0)(1,`mat-card`)(2,`mat-card-header`)(3,`mat-card-title`),pE(4,`Filtros`),ac()(),Jo$1(5,`mat-card-content`,1),jf(6,sr,2,1,`mat-checkbox`,2),Jo$1(7,`mat-form-field`,3)(8,`mat-label`),pE(9,`Tempo de Experiência Offshore`),ac(),Jo$1(10,`mat-select`,4),Yf(`selectionChange`,function(a){return t.onExperienciaChange(a.value)}),Jo$1(11,`mat-option`,5),pE(12,`Qualquer tempo`),ac(),Jo$1(13,`mat-option`,5),pE(14,`1+ anos`),ac(),Jo$1(15,`mat-option`,5),pE(16,`3+ anos`),ac(),Jo$1(17,`mat-option`,5),pE(18,`5+ anos`),ac(),Jo$1(19,`mat-option`,5),pE(20,`10+ anos`),ac()()()()(),Jo$1(21,`mat-card`)(22,`mat-card-header`)(23,`mat-card-title`),pE(24,`Painel do Gestor de RH`),ac()(),Jo$1(25,`mat-card-content`)(26,`mat-form-field`,3)(27,`mat-label`),pE(28,`Buscar`),ac(),Jo$1(29,`mat-icon`,6),pE(30,`search`),ac(),Jo$1(31,`input`,7),Yf(`input`,function(a){return t.applyFilter(a)}),ac()(),Jo$1(32,`table`,8),uc(33,9),jf(34,cr,2,0,`th`,10)(35,lr,2,1,`td`,11),dc(),uc(36,12),jf(37,dr,2,0,`th`,10)(38,hr,2,1,`td`,11),dc(),uc(39,13),jf(40,mr,2,0,`th`,10)(41,pr,2,1,`td`,11),dc(),uc(42,14),jf(43,ur,2,0,`th`,10)(44,_r,3,1,`td`,11),dc(),uc(45,15),jf(46,gr,2,0,`th`,10)(47,vr,9,0,`td`,11),dc(),jf(48,yr,1,0,`tr`,16)(49,br,1,0,`tr`,17),ac()()()()),e&2&&(jy(6),Uf(`ngForOf`,t.requisitosDisponiveis),jy(4),Uf(`value`,t.experienciaMinima),jy(),Uf(`value`,0),jy(2),Uf(`value`,1),jy(2),Uf(`value`,3),jy(2),Uf(`value`,5),jy(2),Uf(`value`,10),jy(13),Uf(`dataSource`,t.dataSource),jy(16),Uf(`matHeaderRowDef`,t.colunas),jy(),Uf(`matRowDefColumns`,t.colunas))},dependencies:[yc,bc,bE,_E,nr$1,Ki,er$1,tr$1,Ji,Vn,ai,Un,ri,qn,Yn,Je,Gt$1,Qe,ti,eo,Jn,ia$1,na,Io,Oo,$e,$o,Ho,Wo,Xo,qo,jo,Go,Uo,Yo,Qo,Ko],styles:[`.dashboard-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:280px 1fr;gap:16px;align-items:start}.full-width[_ngcontent-%COMP%]{width:100%}.filtros-lista[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}td[_ngcontent-%COMP%]{padding:.7rem}.requisitos-chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.chip-valido[_ngcontent-%COMP%]{background-color:#dcfce7!important;color:#166534!important}.chip-invalido[_ngcontent-%COMP%]{background-color:#fee2e2!important;color:#991b1b!important}@media(max-width:1024px){.dashboard-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.icone-texto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.acoes-botoes[_ngcontent-%COMP%]{display:flex;gap:4px;flex-direction:column;align-items:center}`]})};export{Zo as DashboardComponent};