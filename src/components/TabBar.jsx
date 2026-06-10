 import '../styles/theme.css';
 
 const tabs = [
   { id: 'calc', label: '数字计算' },
   { id: 'flow', label: '流年心图' },
   { id: 'flight', label: '飞行图' },
   { id: 'interp', label: '深度解析' },
   { id: 'summary', label: '总结' },
 ];
 
 export default function TabBar({ activeTab, onTabChange }) {
   return (
     <nav className="tab-bar">
       {tabs.map(tab => (
         <div
           key={tab.id}
           className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
           onClick={() => onTabChange(tab.id)}
         >
           {tab.label}
         </div>
       ))}
     </nav>
   );
 }
