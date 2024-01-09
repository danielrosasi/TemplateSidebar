import Sidebar from './layout/Sidebar';

import './App.css';

function App() {
  return (
    <div className="App" style={{position:"absolute"}}>
      <div style={{display: "flex", flexDirection:"row", minHeight:"100vh"}}>
      <Sidebar/>
      <section>
        <h1>Dashboard</h1>
      </section>
      </div>
      
    </div>
  );
}

export default App;
