import {Route, Routes } from 'react-router-dom';
import DashboardAnuncios from './components/PanelAds/DashboardAnuncios';

function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<DashboardAnuncios/>}/>
    
    </Routes>
  );

}

export default App;
