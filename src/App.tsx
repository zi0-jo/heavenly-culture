import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from 'auth';
import Layout from 'common/layout';
import { useAuth } from 'common/context/auth';
import Content from 'content/container';
import DataProvider from 'common/context/data';
// import { encriptData } from './data';
// encriptData();

function App() {
  const { authorized } = useAuth();

  return (
    <DataProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/:id"
            element={<Layout>{authorized ? <Content /> : <Auth />}</Layout>}
          />
          <Route
            path="*"
            element={<Layout>{authorized ? <Content /> : <Auth />}</Layout>}
          />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
