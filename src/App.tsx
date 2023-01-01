import './App.css';
import Auth from 'auth';
import Layout from 'common/layout';
import { useAuth } from 'common/context/auth';

function App() {
  const { authorized } = useAuth();

  return (
    <div className="App">
      <Layout>
        {authorized ? (
          <>
            <header className="font-bold text-xl">
              마태지파 문화부 인재모집
            </header>
            <div>컨텐츠</div>
          </>
        ) : (
          <Auth />
        )}
      </Layout>
    </div>
  );
}

export default App;
