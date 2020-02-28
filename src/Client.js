// => step 1: import apollo-boost
import ApolloClient from "apollo-boost" ;

// => step 2: connect to the backend
const currencyClient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
})

export default {
  currencyClient
}