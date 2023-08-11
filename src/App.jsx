import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './components/Counter';
import SideNavbar from './components/ui/SideNavbar';
import StockRelease from './pages/StockRelease';

function App() {
  const [count, setCount] = useState(0);

  // return <Counter />;
  return (
    <div className="App">
      <div class="flex flex-row">
        <div class="basis-1/5 glass">
          <SideNavbar />
        </div>
        <div class="basis-4/5 glass">
          <StockRelease />
        </div>
      </div>
    </div>
  );
}

export default App;
