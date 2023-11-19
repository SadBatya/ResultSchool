import './App.css';
import Products from './components/Products/Products';
import ControlPanel from './components/control-panel/control-panel';
import User from './components/user/user';

function App() {
  return (
    <>
      <User />
      <Products />
      <ControlPanel />
    </>
  );
}

export default App;
