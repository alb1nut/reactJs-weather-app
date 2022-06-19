import './App.css';

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemparatureAndDetails from './components/TemparatureAndDetails';
import Forcast from './components/Forcast';

function App() {
  return (
 
 <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
<TopButtons />
<Inputs />
<TimeAndLocation />
<TemparatureAndDetails />
<Forcast  title='hourly forcast'/>
<Forcast  title='daily forcast'/>
 </div>

  );
}

export default App;
