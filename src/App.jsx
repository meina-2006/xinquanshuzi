 import { useState } from 'react';
 import Header from './components/Header';
 import InputSection from './components/InputSection';
 import TabBar from './components/TabBar';
 import CalcTab from './tabs/CalcTab';
 import FlowTab from './tabs/FlowTab';
 import FlightTab from './tabs/FlightTab';
 import InterpTab from './tabs/InterpTab';
 import SummaryTab from './tabs/SummaryTab';
 import { calcAll } from './utils/calculator';
 import { defaultCity } from './utils/cities';
 import './styles/theme.css';
 
export default function App() {
   const now = new Date();
   const [year, setYear] = useState(now.getFullYear());
   const [month, setMonth] = useState(now.getMonth() + 1);
   const [day, setDay] = useState(now.getDate());
   const [currentData, setCurrentData] = useState(null);
   const [activeTab, setActiveTab] = useState('calc');
   const [selectedCity, setSelectedCity] = useState(defaultCity);
 
   const handleCalculate = () => {
     if (!year || !month || !day) return;
     const data = calcAll(Number(year), month, day);
     setCurrentData(data);
     setActiveTab('calc');
   };
 
   const renderTabContent = () => {
     if (!currentData) {
       return (
         <div style={{
           textAlign: 'center', padding: '60px 20px',
           color: '#A8969A', fontSize: '14px'
         }}>
           <p style={{ fontSize: '32px', marginBottom: '12px' }}>🌊</p>
           <p>请输入阳历生日</p>
           <p style={{ fontSize: '12px', marginTop: '6px', color: '#D0C0C4' }}>
             点击「开始解析」查看你的数字心理学报告
           </p>
         </div>
       );
     }
 
     switch (activeTab) {
       case 'calc':
         return <CalcTab data={currentData} />;
       case 'flow':
         return <FlowTab data={currentData} />;
       case 'flight':
         return (
           <FlightTab
             data={currentData}
             selectedCity={selectedCity}
             onCityChange={setSelectedCity}
           />
         );
       case 'interp':
         return <InterpTab data={currentData} />;
       case 'summary':
         return <SummaryTab data={currentData} />;
       default:
         return null;
     }
   };
 
   return (
     <div className="app-container">
       <Header />
       <InputSection
         year={year}
         month={month}
         day={day}
         onYearChange={setYear}
         onMonthChange={setMonth}
         onDayChange={setDay}
         onCalculate={handleCalculate}
       />
       <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
       <div className="content-area">
         {renderTabContent()}
       </div>
       <div className="app-footer">
         生命蜕变 · 幸福重生
       </div>
     </div>
   );
 }
