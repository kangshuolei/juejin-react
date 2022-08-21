import React from 'react';
import { Frame } from './compoents/components';
import { Routes, Route } from 'react-router-dom'
import { ROUTE_LIST } from './route';
import './app.css'

function App() {
  return (
     <Frame>
       <Routes>
          {
            ROUTE_LIST.map(item => 
              <Route 
                key={item.path} 
                path={item.path} 
                element={<item.component />}
               />
            )
          }
       </Routes>
     </Frame>
  );
}

export default App;
