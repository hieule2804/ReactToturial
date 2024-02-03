import logo from './logo.svg';
import './App.scss';
import MyComponent from '../src/component/MyComponent';
import React from 'react';

//chuyển đổi function component thanh Class Component
class App extends React.Component {
  render() {
    return (
      <div >
        HelloWorld
        <MyComponent></MyComponent>
      </div>
    )
  }
}


// function App() {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
