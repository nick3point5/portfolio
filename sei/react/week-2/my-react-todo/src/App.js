import routes from './config/routes';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header/>
      { routes }
    </div>
  );
}

export default App;
