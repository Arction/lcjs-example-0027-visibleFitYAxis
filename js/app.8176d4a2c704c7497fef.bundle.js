(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),r=a(863),{lightningChart:n,AxisScrollStrategies:i,Themes:o}=s,{createProgressiveTraceGenerator:l}=r,c=n().ChartXY({theme:o[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Axis Y Fitting to visible data").setMouseInteractions(!1),h=c.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}),d=(c.getDefaultAxisX().setScrollStrategy(i.progressive).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-500,stopAxisAfter:!1}))).setMouseInteractions(!1),c.getDefaultAxisY().setMouseInteractions(!1)),m=[];let f=0;l().setNumberOfPoints(1e4).generate().setStreamInterval(1e3/60).setStreamBatchSize(1).setStreamRepeat(!0).toStream().forEach((e=>{h.add(e),m.length>=500&&m.shift(),m.push(e.y);const t=window.performance.now();if(t-f>=100){f=t;let e=Number.MAX_SAFE_INTEGER,a=-Number.MAX_SAFE_INTEGER;for(const t of m)e=Math.min(e,t),a=Math.max(a,t);d.setInterval({start:e,end:a})}}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);