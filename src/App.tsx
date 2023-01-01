import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from 'auth';
import Layout from 'common/layout';
import { useAuth } from 'common/context/auth';
import Content from 'content/container';
// import { encriptData } from './data';
// encriptData();

function App() {
  const { authorized } = useAuth();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/:id" element={authorized ? <Content /> : <Auth />} />
          <Route path="*" element={authorized ? <Content /> : <Auth />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
