
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import _Layout from './components/Shared/_Layout';
import _Error from './components/Shared/_Error';
import CompanyList from './components/Company/CompanyList';
import BranchList from './components/Branch/BranchList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<_Layout />}>
        <Route index element={<Home />} />
        <Route path="company-list" element={<CompanyList />} />
        <Route path="branch-list" element={<BranchList />} />
        <Route path="*" element={<_Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
