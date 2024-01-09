import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
function App() {
  return (
    <Fragment style={{position:"absolute"}}>
      <div style={{display: "flex", flexDirection:"row", minHeight:"100vh"}}>
      <Sidebar/>
      <section>
        <h1>ola mundo</h1>
      </section>
      </div>
    </Fragment>
  );
}
export default App;
