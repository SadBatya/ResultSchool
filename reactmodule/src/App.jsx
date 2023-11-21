import './App.css';
import Products from './components/Products/Products';
import ControlPanel from './components/control-panel/control-panel';
import User from './components/user/user';
import Number from './components/numbers/Number';

function App() {
  return (
    <>
      <User />
      <Products />
      <ControlPanel />
      <Number />
    </>
  );
}

export default App;
