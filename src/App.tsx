import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from 'auth/container';
import Layout from 'common/layout';
import { useAuth } from 'common/context/auth';
import Content from 'content/container';
import DataProvider from 'common/context/data';
import Home from 'home/container';
// import { encriptData } from './data';
// encriptData();

function App() {
  const { authorized } = useAuth();

  return (
    <DataProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={authorized ? <Home /> : <Auth />} />
            <Route path="/:id" element={authorized ? <Content /> : <Auth />} />
          </Routes>
        </Layout>
      </Router>
    </DataProvider>
  );
}

export default App;
