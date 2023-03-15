import  ApolloClient from 'apollo-boost';
// import { gql } from 'graphql-tag';
import './App.css';
import Cars from './Cars'
import CarsTwo from './CarsTwo'
// import Provider from './Provider'
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
// client.query({
//   query: gql`
//   {vehicle(_id:"640b695d33944f59809add10") {
//     _id,
//     carname,
//     year,
//     transmission
//   }}
//   `
// }).then(data => console.log(data))

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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Cars/>
      <CarsTwo/>
    </ApolloProvider>
  )
}

export default App;
