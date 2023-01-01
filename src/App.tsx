import './App.css';
import Auth from 'auth';
import Layout from 'common/layout';
import { useAuth } from 'common/context/auth';

function App() {
  const { authorized } = useAuth();

  return <Layout>{authorized ? <div>컨텐츠</div> : <Auth />}</Layout>;
}

export default App;
