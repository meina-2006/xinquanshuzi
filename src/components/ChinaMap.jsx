 import { useEffect, useRef, useState } from 'react';
 import { MapContainer, TileLayer, useMap, Circle } from 'react-leaflet';
 import L from 'leaflet';
 import 'leaflet/dist/leaflet.css';
 import { cities, defaultCity, directions } from '../utils/cities';
 import '../styles/theme.css';
 
 // 修复 Leaflet 默认图标
 delete L.Icon.Default.prototype._getIconUrl;
 L.Icon.Default.mergeOptions({
   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
 });
 
 function getDestLatLng(center, angleDeg, distM) {
   const R = 6371000;
   const lat1 = center.lat * Math.PI / 180;
   const lng1 = center.lng * Math.PI / 180;
   const bearing = angleDeg * Math.PI / 180;
   const lat2 = Math.asin(Math.sin(lat1) * Math.cos(distM / R) +
     Math.cos(lat1) * Math.sin(distM / R) * Math.cos(bearing));
   const lng2 = lng1 + Math.atan2(
     Math.sin(bearing) * Math.sin(distM / R) * Math.cos(lat1),
     Math.cos(distM / R) - Math.sin(lat1) * Math.sin(lat2)
   );
   return [lat2 * 180 / Math.PI, lng2 * 180 / Math.PI];
 }
 
 function CompassLayer({ center, data }) {
   const map = useMap();
   const layerRef = useRef(null);
 
   useEffect(() => {
     if (!center || !data) return;
     const lines = [];
     const markers = [];
     const circles = [];
 
     // 同心圆
     const ringDists = [35000, 70000, 105000];
     ringDists.forEach(dist => {
       const circle = L.circle(center, {
         radius: dist,
         color: '#F0E4E8',
         weight: 0.5,
         fill: false,
         dashArray: '4,6',
       }).addTo(map);
       circles.push(circle);
     });
 
     // 12条方向线
     const lineDist = 140000;
     for (let i = 0; i < 12; i++) {
       const angle = i * 30;
       const endPt = getDestLatLng(center, angle, lineDist);
       const val = data.finDir[i];
       let color, weight, dash;
       if (val === '避') {
         color = '#D8A0AD'; weight = 1.8; dash = '5,4';
       } else if (typeof val === 'number' && val > 0 || String(val).startsWith('+')) {
         color = '#E6212A'; weight = 2.2; dash = '';
       } else {
         color = '#BBBBBB'; weight = 1; dash = '4,4';
       }
       const polyline = L.polyline([center, endPt], {
         color, weight, dashArray: dash || undefined,
         opacity: 0.7,
       }).addTo(map);
       lines.push(polyline);
 
       // 方向文字标签
       const labelPt = getDestLatLng(center, angle, lineDist + 15000);
       const dirIcon = L.divIcon({
         className: '',
         html: `<div style="
           font-family: 'Noto Sans SC', 'PingFang SC', sans-serif;
           font-weight: 700; text-align: center; line-height: 1.2;
         ">
           <div style="font-size:9px;color:#D96B86;letter-spacing:1px">${directions[i]}</div>
           <div style="font-size:12px;color:${
             val === '避' ? '#D8A0AD' :
             (typeof val === 'number' && val > 0) ? '#E6212A' : '#BBBBBB'
           }">${typeof val === 'number' && val > 0 ? '+' + val : val}</div>
         </div>`,
         iconSize: [40, 28],
         iconAnchor: [20, 14],
       });
       const m = L.marker(labelPt, { icon: dirIcon }).addTo(map);
       markers.push(m);
     }
 
     // 中心标记 - 圆形
     const centerCircle = L.circle(center, {
       radius: 6000,
       color: '#D96B86',
       fillColor: '#D96B86',
       fillOpacity: 0.3,
       weight: 2,
     }).addTo(map);
     circles.push(centerCircle);
 
     const centerDot = L.circle(center, {
       radius: 2000,
       color: '#C9A96E',
       fillColor: '#C9A96E',
       fillOpacity: 0.8,
       weight: 1,
     }).addTo(map);
     circles.push(centerDot);
 
     // 城市名
     const cityIcon = L.divIcon({
       className: '',
       html: `<div style="
         font-family: 'Noto Sans SC', 'PingFang SC', sans-serif;
         font-weight: 700; font-size: 12px;
         color: #C75A74; text-align: center;
         text-shadow: 0 0 4px #fff, 0 0 4px #fff;
       ">${center.name || '深圳'}</div>`,
       iconSize: [60, 20],
       iconAnchor: [30, 10],
     });
     const cityLabel = L.marker(getDestLatLng(center, 270, 22000), { icon: cityIcon }).addTo(map);
     markers.push(cityLabel);
 
     layerRef.current = { lines, markers, circles };
 
     return () => {
       lines.forEach(l => map.removeLayer(l));
       markers.forEach(m => map.removeLayer(m));
       circles.forEach(c => map.removeLayer(c));
     };
   }, [center, data, map]);
 
   return null;
 }
 
 function MapController({ center, data }) {
   const map = useMap();
   useEffect(() => {
     if (center) {
       map.flyTo([center.lat, center.lng], 8, { duration: 1 });
     }
   }, [center, map]);
   return <CompassLayer center={center} data={data} />;
 }
 
 export default function ChinaMap({ selectedCity, data, onCityChange }) {
   const currentCity = selectedCity || defaultCity;
 
   return (
     <div>
       <div className="city-selector">
         <label>📍 所在地</label>
         <select
           value={currentCity.name}
           onChange={e => {
             const city = cities.find(c => c.name === e.target.value) || defaultCity;
             onCityChange(city);
           }}
         >
           {cities.map(c => (
             <option key={c.name} value={c.name}>{c.name}</option>
           ))}
         </select>
       </div>
       <div className="map-legend">
         <span><span className="legend-dot positive" /> 吉位 +</span>
         <span><span className="legend-dot negative" /> 平位</span>
         <span><span className="legend-dot avoid" /> 避用</span>
       </div>
       <div className="map-container">
         <MapContainer
           center={[currentCity.lat, currentCity.lng]}
           zoom={8}
           scrollWheelZoom={true}
           style={{ height: '420px', width: '100%', borderRadius: '12px' }}
           key={`${currentCity.lat}-${currentCity.lng}`}
         >
           <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
           <MapController center={currentCity} data={data} />
         </MapContainer>
       </div>
       {data && (
         <p style={{
           textAlign: 'center', fontSize: '10px',
           color: '#A8969A', marginTop: '6px'
         }}>
           {data.y}年{data.m}月{data.d}日 · 属{data.zodiac} · 原点{currentCity.name}
         </p>
       )}
     </div>
   );
 }
