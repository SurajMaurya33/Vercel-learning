
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Shared/Layout';
import Error from './components/Shared/Error';
import CompanyList from './components/Company/CompanyList';
import BranchList from './components/Branch/BranchList';
import CompanyDetail from './components/Company/CompanyDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="company-list" element={<CompanyList />} />
        <Route path="company-detail" element={<CompanyDetail />} />
        <Route path="branch-list" element={<BranchList />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
