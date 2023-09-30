import React from "react";


// function App() {
//   return (
//     <>
//       <div className="pane top-pane"></div>
//       <div className="pane">
//         <iframe
//           title="output"
//           sandbox="allow-scripts"
//           frameBorder="0"
//           width="100%"
//           height="100%"
//         />
//       </div>
//     </>
//   );
// }

// export default App;

//components

import Home from "./Home";
import DataProvider from "../context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
