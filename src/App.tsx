import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch({ type: 'INIT_THEME' }); 
  }, [])

  return (
    <Router>
      <Layout>
        <Routes>
            <Route index element={<Home />} />          
        </Routes>
      </Layout>      
    </Router>    
  );
}

export default App;
