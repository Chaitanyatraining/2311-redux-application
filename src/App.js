import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header';
import { Routing } from './components/Routing/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
