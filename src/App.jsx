// // // // import Card from "./card";
// // // import Chat from "./chat/chat";
// // // // //import afaf from "./logo192.png";
// // // // import { users } from "./data";
// // // // import "./App.css";
// // // // import React {useState} from "react";
// // // import Cofee from "./cofee/cofee";
// // // // import Shopping from "./shopingCard/shoping";
// // // import React, { useState } from "react";

// import Coffee from "./cofee/cofee";

// // // import Banque from "./banque/banque";
// // // // import Cardsho from "./shopingCard/cardshoping";
// function App() {
//   // //   //   const handleDeposer = () => {};

//   // //   //   const handleRetrait = () => {};

//   // //   //   const handleFlixy = () => {};

//   // //   // const [message1, setMessag1] = useState("");
//   // //   // const [message2, setMessage2] = useState("");

//   // //   //   //   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* {users.map((item) => (
// // // //         <Card key={item.id} name={item.name} email={item.email} />
// // // //       ))} */}
//       {/* <h1>counter</h1>
// // // //       <h2>{count}</h2>
// // // //       <button onClick={() => setCount(count + 1)}>plus</button>
// // // //       <button onClick={() => setCount(count - 1)}>moins</button>
// // // //       <button onClick={() => setCount(0)}>reset</button> */}
//       {/* <div className="chatContainer">
// // //         <Chat
// // //           name="mohamed"
// // //           submitedMsg={message2}
// // //           sendsubmitedmessage={(msg) => {
// // //             setMessag1(msg);
// // //           }}
// // //         />
// // //         <Chat
// // //           name="ahmed"
// // //           submitedMsg={message1}
// // //           sendsubmitedmessage={(msg) => {
// // //             setMessage2(msg);
// // //           }}
// // //         />
// // //       </div> */}
//       {/* // <Shopping /> */}
//       {/* <Banque
// // // //         submitedMsg={count2}
// // // //         sendsubmitedmessage={(submit) => {
// // // //           setcount1(count2);
// // // //         }}
// // // //       />
// // // //       <Banque
// // // //         submitedMsg={count1}
// // // //         sendsubmitedmessage={(submit) => {
// // // //           setcount2(count2);
// // // //         }}
// // // //       />
// // // //       <Banque />

// // // //       {/* <Shopping /> */}
//       {/* // //       <Banque name="Deposer" onClick={handleDeposer} />
// // //       <Banque name="Retrait" onClick={handleRetrait} />
// // //       <Banque name="flixy" onClick={handleFlixy} /> */}
//      <Coffee>
//     </>
//   );
// }
// // // // export default App;
// import React, { useState } from "react";
// import Banque from "./banque/banque";
// import "./App.css";
// import dollar from "./banque/Dollar_symbol_gold.svg.png";

// export default function App() {
//   const [compte, setCompte] = useState(20000);
//   const handleOperation = (operation, amount) => {
//     if (operation === "Deposer") {
//       setCompte(compte + amount);
//     } else if (operation === "Retrait" || operation === "flixy") {
//       setCompte(compte - amount);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="sold">
//         <p>SOLD</p>
//         <p>{compte}DA</p>
//       </div>

//       <div className="boxes">
//         <p id="dollar">DZD</p>
//         <Banque name="Deposer" onClick={handleOperation} />
//         <Banque name="Retrait" onClick={handleOperation} />
//         <Banque name="flixy" onClick={handleOperation} />
//         <p id="da">DZD</p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Coffee from "./cofee/cofee";
import "./App.css";

function App() {
  return (
    <div className="menu">
      <h1 id="menu">menu :</h1>
      <Coffee />
    </div>
  );
}

export default App;
// import React from "react";
// import Cardsho from "./shopingCard/cardshoping";
// import Shopping from "./shopingCard/shoping";

// export default function App() {
//   return (
//     <div>
//       <Cardsho />
//       <Shopping />
//     </div>
//   );
// }
