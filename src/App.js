import React from 'react'


import {ApolloProvider} from 'react-apollo';
import Course from './Course';
import CurrencyClient from './Client'


const App = () => {
  return (
    // => tep 3: setup the apollo client
    <ApolloProvider client={CurrencyClient}>
        <Course/>
    </ApolloProvider>
  )
}

export default App
