import{r as v,j as ze}from"./vendor-5kIBmhco.js";import{C as ee,D as Ce,R as Te,L as V,a as U,W as Fe,b as Ee,V as u,S as te,c as se,M as j,P as $,d as O,e as Ae,H as Re,F as ke,f as Le,B as Be,g as Ie,h as Ve,A as Ue}from"./vendor-3d-DZ5mBy2c.js";const Oe=["#5227FF","#FF9FFC","#B19EEF"];function We({mouseForce:b=20,cursorSize:S=100,isViscous:D=!1,viscous:M=30,iterationsViscous:z=32,iterationsPoisson:C=32,dt:T=.014,BFECC:F=!0,resolution:f=.5,isBounce:E=!1,colors:q=Oe,style:ie={},className:re="",autoDemo:A=!0,autoSpeed:R=.5,autoIntensity:k=2.2,takeoverDuration:L=.25,autoResumeDelay:B=1e3,autoRampDuration:I=.6}){const G=v.useRef(null),c=v.useRef(null),H=v.useRef(null),m=v.useRef(null),N=v.useRef(null),J=v.useRef(!0),W=v.useRef(null);return v.useEffect(()=>{if(!G.current)return;function l(r){let e;Array.isArray(r)&&r.length>0?e=r.length===1?[r[0],r[0]]:r:e=["#ffffff","#ffffff"];const t=e.length,s=new Uint8Array(t*4);for(let o=0;o<t;o++){const n=new ee(e[o]);s[o*4+0]=Math.round(n.r*255),s[o*4+1]=Math.round(n.g*255),s[o*4+2]=Math.round(n.b*255),s[o*4+3]=255}const i=new Ce(s,t,1,Te);return i.magFilter=V,i.minFilter=V,i.wrapS=U,i.wrapT=U,i.generateMipmaps=!1,i.needsUpdate=!0,i}const y=l(q),X=new Ae(0,0,0,0);class oe{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(e){this.container=e,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Fe({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new ee(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const t=this.renderer.domElement;t.style.width="100%",t.style.height="100%",t.style.display="block",this.clock=new Ee,this.clock.start()}resize(){if(!this.container)return;const e=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(e.width)),this.height=Math.max(1,Math.floor(e.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const a=new oe;class ne{mouseMoved=!1;coords=new u;coords_old=new u;diff=new u;timer=null;container=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new u;takeoverTo=new u;onInteract=null;_onMouseMove=this.onDocumentMouseMove.bind(this);_onTouchStart=this.onDocumentTouchStart.bind(this);_onTouchMove=this.onDocumentTouchMove.bind(this);_onMouseEnter=this.onMouseEnter.bind(this);_onMouseLeave=this.onMouseLeave.bind(this);_onTouchEnd=this.onTouchEnd.bind(this);init(e){this.container=e,e.addEventListener("mousemove",this._onMouseMove),e.addEventListener("touchstart",this._onTouchStart,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),e.addEventListener("mouseenter",this._onMouseEnter),e.addEventListener("mouseleave",this._onMouseLeave),e.addEventListener("touchend",this._onTouchEnd)}dispose(){const e=this.container;e&&(e.removeEventListener("mousemove",this._onMouseMove),e.removeEventListener("touchstart",this._onTouchStart),e.removeEventListener("touchmove",this._onTouchMove),e.removeEventListener("mouseenter",this._onMouseEnter),e.removeEventListener("mouseleave",this._onMouseLeave),e.removeEventListener("touchend",this._onTouchEnd))}setCoords(e,t){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const s=this.container.getBoundingClientRect(),i=(e-s.left)/s.width,o=(t-s.top)/s.height;this.coords.set(i*2-1,-(o*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(e,t){this.coords.set(e,t),this.mouseMoved=!0}onDocumentMouseMove(e){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const t=this.container.getBoundingClientRect(),s=(e.clientX-t.left)/t.width,i=(e.clientY-t.top)/t.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(s*2-1,-(i*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(e.clientX,e.clientY),this.hasUserControl=!0}onDocumentTouchStart(e){if(e.touches.length===1){const t=e.touches[0];this.onInteract&&this.onInteract(),this.setCoords(t.pageX,t.pageY),this.hasUserControl=!0}}onDocumentTouchMove(e){if(e.touches.length===1){const t=e.touches[0];this.onInteract&&this.onInteract(),this.setCoords(t.pageX,t.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const e=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(e>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const t=e*e*(3-2*e);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,t)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const h=new ne;class ae{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new u(0,0);target=new u;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new u;constructor(e,t,s){this.mouse=e,this.manager=t,this.enabled=s.enabled,this.speed=s.speed,this.resumeDelay=s.resumeDelay||3e3,this.rampDurationMs=(s.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const e=Math.random;this.target.set((e()*2-1)*(1-this.margin),(e()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const e=performance.now();if(e-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=e,this.activationTime=e),!this.active)return;this.mouse.isAutoActive=!0;let s=(e-this.lastTime)/1e3;this.lastTime=e,s>.2&&(s=.016);const i=this._tmpDir.subVectors(this.target,this.current),o=i.length();if(o<.01){this.pickNewTarget();return}i.normalize();let n=1;if(this.rampDurationMs>0){const w=Math.min(1,(e-this.activationTime)/this.rampDurationMs);n=w*w*(3-2*w)}const _=this.speed*s*n,d=Math.min(_,o);this.current.addScaledVector(i,d),this.mouse.setNormalized(this.current.x,this.current.y)}}const x=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ue=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ce=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,K=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,le=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,he=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,ve=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,de=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,pe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,fe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class g{props;uniforms;scene=null;camera=null;material=null;geometry=null;plane=null;constructor(e){this.props=e||{},this.uniforms=this.props.material?.uniforms}init(...e){this.scene=new te,this.camera=new se,this.uniforms&&(this.material=new O(this.props.material),this.geometry=new $(2,2),this.plane=new j(this.geometry,this.material),this.scene.add(this.plane))}update(...e){!a.renderer||!this.scene||!this.camera||(a.renderer.setRenderTarget(this.props.output||null),a.renderer.render(this.scene,this.camera),a.renderer.setRenderTarget(null))}}class me extends g{line;constructor(e){super({material:{vertexShader:x,fragmentShader:K,uniforms:{boundarySpace:{value:e.cellScale},px:{value:e.cellScale},fboSize:{value:e.fboSize},velocity:{value:e.src.texture},dt:{value:e.dt},isBFECC:{value:!0}}},output:e.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const e=new Be,t=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);e.setAttribute("position",new Ie(t,3));const s=new O({vertexShader:ue,fragmentShader:K,uniforms:this.uniforms});this.line=new Ve(e,s),this.scene.add(this.line)}update(...e){const{dt:t,isBounce:s,BFECC:i}=e[0]||{};this.uniforms&&(typeof t=="number"&&(this.uniforms.dt.value=t),typeof s=="boolean"&&(this.line.visible=s),typeof i=="boolean"&&(this.uniforms.isBFECC.value=i),super.update())}}class ye extends g{mouse;constructor(e){super({output:e.dst}),this.init(e)}init(e){super.init();const t=new $(1,1),s=new O({vertexShader:ce,fragmentShader:ve,blending:Ue,depthWrite:!1,uniforms:{px:{value:e.cellScale},force:{value:new u(0,0)},center:{value:new u(0,0)},scale:{value:new u(e.cursor_size,e.cursor_size)}}});this.mouse=new j(t,s),this.scene.add(this.mouse)}update(...e){const t=e[0]||{},s=h.diff.x/2*(t.mouse_force||0),i=h.diff.y/2*(t.mouse_force||0),o=t.cellScale||{x:1,y:1},n=t.cursor_size||0,_=n*o.x,d=n*o.y,w=Math.min(Math.max(h.coords.x,-1+_+o.x*2),1-_-o.x*2),Me=Math.min(Math.max(h.coords.y,-1+d+o.y*2),1-d-o.y*2),Y=this.mouse.material.uniforms;Y.force.value.set(s,i),Y.center.value.set(w,Me),Y.scale.value.set(n,n),super.update()}}class xe extends g{constructor(e){super({material:{vertexShader:x,fragmentShader:fe,uniforms:{boundarySpace:{value:e.boundarySpace},velocity:{value:e.src.texture},velocity_new:{value:e.dst_.texture},v:{value:e.viscous},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst,output0:e.dst_,output1:e.dst}),this.init()}update(...e){const{viscous:t,iterations:s,dt:i}=e[0]||{};if(!this.uniforms)return;let o,n;typeof t=="number"&&(this.uniforms.v.value=t);const _=s??0;for(let d=0;d<_;d++)d%2===0?(o=this.props.output0,n=this.props.output1):(o=this.props.output1,n=this.props.output0),this.uniforms.velocity_new.value=o.texture,this.props.output=n,typeof i=="number"&&(this.uniforms.dt.value=i),super.update();return n}}class ge extends g{constructor(e){super({material:{vertexShader:x,fragmentShader:he,uniforms:{boundarySpace:{value:e.boundarySpace},velocity:{value:e.src.texture},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst}),this.init()}update(...e){const{vel:t}=e[0]||{};this.uniforms&&t&&(this.uniforms.velocity.value=t.texture),super.update()}}class _e extends g{constructor(e){super({material:{vertexShader:x,fragmentShader:de,uniforms:{boundarySpace:{value:e.boundarySpace},pressure:{value:e.dst_.texture},divergence:{value:e.src.texture},px:{value:e.cellScale}}},output:e.dst,output0:e.dst_,output1:e.dst}),this.init()}update(...e){const{iterations:t}=e[0]||{};let s,i;const o=t??0;for(let n=0;n<o;n++)n%2===0?(s=this.props.output0,i=this.props.output1):(s=this.props.output1,i=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=s.texture),this.props.output=i,super.update();return i}}class we extends g{constructor(e){super({material:{vertexShader:x,fragmentShader:pe,uniforms:{boundarySpace:{value:e.boundarySpace},pressure:{value:e.src_p.texture},velocity:{value:e.src_v.texture},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst}),this.init()}update(...e){const{vel:t,pressure:s}=e[0]||{};this.uniforms&&t&&s&&(this.uniforms.velocity.value=t.texture,this.uniforms.pressure.value=s.texture),super.update()}}class be{options;fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null};fboSize=new u;cellScale=new u;boundarySpace=new u;advection;externalForce;viscous;divergence;poisson;pressure;constructor(e){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...e},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Re:ke}createAllFBO(){const t={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:V,magFilter:V,wrapS:U,wrapT:U};for(const s in this.fbos)this.fbos[s]=new Le(this.fboSize.x,this.fboSize.y,t)}createShaderPass(){this.advection=new me({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new ye({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new xe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new ge({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new _e({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new we({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const e=Math.max(1,Math.round(this.options.resolution*a.width)),t=Math.max(1,Math.round(this.options.resolution*a.height));this.cellScale.set(1/e,1/t),this.fboSize.set(e,t)}resize(){this.calcSize();for(const e in this.fbos)this.fbos[e].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let e=this.fbos.vel_1;this.options.isViscous&&(e=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:e});const t=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:e,pressure:t})}}class Se{simulation;scene;camera;output;constructor(){this.simulation=new be,this.scene=new te,this.camera=new se,this.output=new j(new $(2,2),new O({vertexShader:x,fragmentShader:le,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new u},palette:{value:y},bgColor:{value:X}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){a.renderer&&(a.renderer.setRenderTarget(null),a.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class De{props;output;autoDriver;lastUserInteraction=performance.now();running=!1;_loop=this.loop.bind(this);_resize=this.resize.bind(this);_onVisibility;constructor(e){this.props=e,a.init(e.$wrapper),h.init(e.$wrapper),h.autoIntensity=e.autoIntensity,h.takeoverDuration=e.takeoverDuration,h.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ae(h,this,{enabled:e.autoDemo,speed:e.autoSpeed,resumeDelay:e.autoResumeDelay,rampDuration:e.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():J.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){a.renderer&&(this.props.$wrapper.prepend(a.renderer.domElement),this.output=new Se)}resize(){a.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),h.update(),a.update(),this.output.update()}loop(){this.running&&(this.render(),m.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,m.current&&(cancelAnimationFrame(m.current),m.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),h.dispose(),a.renderer){const e=a.renderer.domElement;e&&e.parentNode&&e.parentNode.removeChild(e),a.renderer.dispose()}}catch{}}}const p=G.current;p.style.position=p.style.position||"relative",p.style.overflow=p.style.overflow||"hidden";const Q=new De({$wrapper:p,autoDemo:A,autoSpeed:R,autoIntensity:k,takeoverDuration:L,autoResumeDelay:B,autoRampDuration:I});c.current=Q,(()=>{if(!c.current)return;const r=c.current.output?.simulation;if(!r)return;const e=r.options.resolution;Object.assign(r.options,{mouse_force:b,cursor_size:S,isViscous:D,viscous:M,iterations_viscous:z,iterations_poisson:C,dt:T,BFECC:F,resolution:f,isBounce:E}),f!==e&&r.resize()})(),Q.start();const Z=new IntersectionObserver(r=>{const e=r[0],t=e.isIntersecting&&e.intersectionRatio>0;J.current=t,c.current&&(t&&!document.hidden?c.current.start():c.current.pause())},{threshold:[0,.01,.1]});Z.observe(p),N.current=Z;const P=new ResizeObserver(()=>{c.current&&(W.current&&cancelAnimationFrame(W.current),W.current=requestAnimationFrame(()=>{c.current&&c.current.resize()}))});return P.observe(p),H.current=P,()=>{if(m.current&&cancelAnimationFrame(m.current),H.current)try{H.current.disconnect()}catch{}if(N.current)try{N.current.disconnect()}catch{}c.current&&c.current.dispose(),c.current=null}},[F,S,T,E,D,C,z,b,f,M,q,A,R,k,L,B,I]),v.useEffect(()=>{const l=c.current;if(!l)return;const y=l.output?.simulation;if(!y)return;const X=y.options.resolution;Object.assign(y.options,{mouse_force:b,cursor_size:S,isViscous:D,viscous:M,iterations_viscous:z,iterations_poisson:C,dt:T,BFECC:F,resolution:f,isBounce:E}),l.autoDriver&&(l.autoDriver.enabled=A,l.autoDriver.speed=R,l.autoDriver.resumeDelay=B,l.autoDriver.rampDurationMs=I*1e3,l.autoDriver.mouse&&(l.autoDriver.mouse.autoIntensity=k,l.autoDriver.mouse.takeoverDuration=L)),f!==X&&y.resize()},[b,S,D,M,z,C,T,F,f,E,A,R,k,L,B,I]),ze.jsx("div",{ref:G,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${re||""}`,style:ie})}export{We as default};
