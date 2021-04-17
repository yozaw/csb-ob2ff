(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"mainFeature":[{"title":"Basemap layers","descriptions":"Add location to your application with <a href=\'https://developers.arcgis.com/features/maps-and-data/\' target=\'_blank\' rel=\'noopener noreferrer\'>basemap layers</a>, such as streets, satellite imagery, and others. Usage is billed per tile request.","subFeature":[{"title":"Basemaps","unit":"Tile","priceDescriptions":"2,000,000 free then $0.15 per 1,000 Tiles","maxValue":15000000,"freeValue":20000,"featurePrice":0.00015,"stepValue":1000}]},{"title":"Geocode and search","descriptions":"<a href=\'https://developers.arcgis.com/features/geocoding/\' target=\'_blank\' rel=\'noopener noreferrer\'>Search and find</a> addresses, businesses, and points of interest around the world.","subFeature":[{"title":"Geocode (non-stored)","unit":"Geocode","priceDescriptions":"20,000 free then $0.5 per 1,000 Geocodes","maxValue":4000000,"freeValue":20000,"featurePrice":0.0005,"stepValue":1000},{"title":"Geocode","unit":"Geocode","priceDescriptions":"0 free then $4 per 1,000 Geocodes","maxValue":1000000,"freeValue":0,"featurePrice":0.004,"stepValue":1000}]},{"title":"Route and directions","descriptions":"Find the quickest or shortest route based on time and distance, generate turn-by-turn directions, and perform intelligent network analysis with ready-to-use <a href=\'https://developers.arcgis.com/features/directions/\' target=\'_blank\' rel=\'noopener noreferrer\'> routing and directions services</a>.","subFeature":[{"title":"Simple Routes","unit":"Route","priceDescriptions":"20,000 free then $0.5 per 1,000 Routes","maxValue":4000000,"freeValue":20000,"featurePrice":0.0005,"stepValue":1000},{"title":"Optimized Routes","unit":"Route","priceDescriptions":"0 free then $50 per 1,000 Routes","maxValue":1000000,"freeValue":0,"featurePrice":0.05,"stepValue":1000},{"title":"Drive Time (service area)","unit":"Service Area","priceDescriptions":"5,000 free then $50 per 1,000 Service Areas","maxValue":4000000,"freeValue":5000,"featurePrice":0.05,"stepValue":1000},{"title":"Multi-Vehicle Routes","unit":"Route","priceDescriptions":"0 free then $100 per 1,000 Routes","maxValue":999999,"freeValue":0,"featurePrice":0.1,"stepValue":1000},{"title":"Closest Facilities","unit":"Route","priceDescriptions":"0 free then $50 per 1,000 Routes","maxValue":999999,"freeValue":0,"featurePrice":0.05,"stepValue":1000},{"title":"Location Allocation","unit":"Demand Point","priceDescriptions":"0 free then $10 per 1,000 allocated Demand Points","maxValue":999999,"freeValue":0,"featurePrice":0.01,"stepValue":1000},{"title":"OD Matrix","unit":"Origin Destination Pair","priceDescriptions":"0 free then $0.05 per 1,000 input Origin Destination Pairs","maxValue":4000000,"freeValue":0,"featurePrice":0.00005,"stepValue":1000}]},{"title":"Demographic data","descriptions":"<a href=\'https://developers.arcgis.com/features/demographics/\' target=\'_blank\' rel=\'noopener noreferrer\'>Get facts</a> about the people, places, and businesses in a specific location. Join your existing datasets with Esri\'s extensive portfolio of global location data that is easily accessible for data enrichment.","subFeature":[{"title":"Geographic Data Enrichment (enrich)","unit":"Variable","priceDescriptions":"0 free then $1 per 1,000 Variables","maxValue":999999,"freeValue":0,"featurePrice":0.001,"stepValue":1000},{"title":"Demographic Reports (export)","unit":"Export","priceDescriptions":"0 free then $1 each","maxValue":1000,"freeValue":0,"featurePrice":1,"stepValue":10}]},{"title":"Tile generation","descriptions":"Publish tiles from your <a href=\'https://developers.arcgis.com/features/hosted-data/\' target=\'_blank\' rel=\'noopener noreferrer\'>hosted feature layers</a>.","subFeature":[{"title":"Map Tile Generation","unit":"Tile","priceDescriptions":"0 free then $0.1 per 1,000 Tiles","maxValue":999999,"freeValue":0,"featurePrice":0.0001,"stepValue":1000}]},{"title":"Storage","descriptions":"Securely <a href=\'https://developers.arcgis.com/features/hosted-data/\' target=\'_blank\' rel=\'noopener noreferrer\'>store and host your data</a>in the cloud.","subFeature":[{"title":"Tile and Data Storage (map tiles, feature attachments, scene layer packages, and documents)","unit":"GB","priceDescriptions":"5 free then $0.12 per GB","maxValue":100,"freeValue":5,"featurePrice":0.12,"stepValue":5},{"title":"Feature Service Storage (import and create, excludes feature attachments)","unit":"MB","priceDescriptions":"100 free then $2.40 per 100 MBs","maxValue":1000000,"freeValue":100,"featurePrice":0.024,"stepValue":10}]}]}')},38:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r(13),s=r.n(i),n=r(45),c=r(37),u=(r(38),r(40)),l=r(92),o=r(10),p=r(93),d=r(99),m=r(97),f=r(96),h=r(95),b=r(94),x=r(44),j=r.n(x),g=r(3),V=function(e){var t=e.subFeatureTotalPrice,r=e.featureValues,a=e.valueChange,i=e.valueBlur;return Object(g.jsx)(g.Fragment,{children:o.mainFeature.map((function(e,s){return Object(g.jsxs)(f.a,{children:[Object(g.jsx)(h.a,{expandIcon:Object(g.jsx)(j.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(g.jsxs)(l.a,{container:!0,spacing:3,alignItems:"center",children:[Object(g.jsx)(l.a,{item:!0,xs:12,sm:6,className:"main-feature",children:e.title},"grid1"+s),Object(g.jsx)(l.a,{item:!0,xs:12,sm:3},"grid2"+s),Object(g.jsx)(l.a,{item:!0,xs:12,sm:3,className:"sub-feature-price",children:t(s)},"grid3"+s),Object(g.jsx)(l.a,{item:!0,xs:12,sm:9,className:"main-feature-description",children:Object(g.jsx)(p.a,{dangerouslySetInnerHTML:{__html:o.mainFeature[s].descriptions}},s)},"grid4"+s)]},s)},s),r[s].map((function(e,t){return Object(g.jsx)(b.a,{children:Object(g.jsxs)(l.a,{container:!0,spacing:3,alignItems:"center",children:[Object(g.jsx)(l.a,{item:!0,xs:12,className:"sub-feature",children:o.mainFeature[s].subFeature[t].title},"grid1"+t),Object(g.jsx)(l.a,{item:!0,xs:12,sm:9,children:Object(g.jsx)(d.a,{max:o.mainFeature[s].subFeature[t].maxValue,step:o.mainFeature[s].subFeature[t].stepValue,value:e,onChange:function(e,r){return a(r,s,t)},"aria-labelledby":"input-slider"},t)},"grid2"+t),Object(g.jsx)(l.a,{item:!0,xs:12,sm:1,children:Object(g.jsx)(m.a,{value:e,type:"number",margin:"dense",onChange:function(e){return a(e.target.value,s,t)},onBlur:function(e){return i(e,t,s)},inputProps:{step:o.mainFeature[s].subFeature[t].stepValue,min:0,max:o.mainFeature[s].subFeature[t].maxValue,type:"number","aria-labelledby":"input-slider"}},t)},"grid3"+t),Object(g.jsx)(l.a,{item:!0,xs:12,sm:2,className:"sub-feature-unit",children:o.mainFeature[s].subFeature[t].unit},"grid4"+t),Object(g.jsx)(l.a,{item:!0,xs:12,className:"feature-price-description",children:o.mainFeature[s].subFeature[t].priceDescriptions},"grid5"+t)]},t)},t)}))]},s)}))})},O=function(){var e=Object(a.useState)("100.00"),t=Object(c.a)(e,2),r=t[0],i=t[1],s=Object(a.useState)([[0],[0,0],[0,0,0,0,0,0,0],[0,0],[0],[0,0]]),p=Object(c.a)(s,2),d=p[0],m=p[1],f=function(){var e=0;for(var t in d)for(var r in d[t])e+=d[t][r]*o.mainFeature[t].subFeature[r].featurePrice;return e=Math.round(e),e};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{children:Object(g.jsx)("title",{children:"Pricing"})}),Object(g.jsxs)("div",{className:"main-area",children:[Object(g.jsx)("p",{className:"main-title",children:"Location services pricing"}),Object(g.jsxs)(l.a,{container:!0,spacing:3,alignItems:"center",children:[Object(g.jsx)(l.a,{item:!0,xs:12,sm:7,children:Object(g.jsx)("ul",{children:["Access ArcGIS Platform location services with your free developer subscription.","Estimate your costs for location services with the pricing calculator.","Free tiers of basemaps, geocodes, and other services are included in estimated cost.","<a href='https://www.esri.com/en-us/contact' target='_blank' rel='noopener noreferrer'>Contact us for high volume pricing</a>."].map((function(e,t){return Object(g.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)}))})}),Object(g.jsxs)(l.a,{item:!0,xs:12,sm:5,className:"total-price",children:["Rete: $1= \xa5",Object(g.jsx)("input",{className:"rate-input",placeholder:"Rate",type:"number",step:"0.01",value:r,onChange:function(e){return i(e.target.value)}})," ",Object(g.jsx)("br",{}),"$ ",f()," / month",Object(g.jsx)("br",{}),"\xa5 ",r*f()," / month"]})]})]}),Object(g.jsxs)("div",{className:"service-area",children:[Object(g.jsx)("p",{className:"service-title",children:"Services"}),Object(g.jsx)(V,{subFeatureTotalPrice:function(e){var t=!1,r=!1,a=0;for(var i in d[e]){var s=o.mainFeature[e].subFeature[i].freeValue,n=o.mainFeature[e].subFeature[i].maxValue;d[e][i]>0&&(t=!0,d[e][i]>=s&&(a+=d[e][i]*o.mainFeature[e].subFeature[i].featurePrice,d[e][i]===n&&(r=!0)))}return 0===a&&t?"Free":0!==a||t?r?"Contact Us":"$ ".concat(Math.round(a)," total approx"):"Not Selected"},featureValues:d,valueChange:function(e,t,r){m((function(a){var i=Object(n.a)(a);return i[t][r]=e,i}))},valueBlur:function(e,t,r){e.target.value<0?m(0):e.target.value>o.mainFeature[r].subFeature[t].maxValue&&m(o.mainFeature[r].subFeature[t].maxValue)}})]})]})};s.a.render(Object(g.jsx)(O,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.5ae6af80.chunk.js.map