import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './styles/index.css';
//import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache()
});

const GET_PART_LIST = gql`
      query{ 
          Part{
            id
            name    
          }
      }
    `


function AllParts() {
  const { loading, error, data } = useQuery(GET_PART_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.Part.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <AllParts />
      </div>
    </ApolloProvider>
  );
}

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>				
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route exact path="/" component={App} />
			</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
