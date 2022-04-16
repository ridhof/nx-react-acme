import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { BooksFeature } from '@acme/books/feature';

import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@acme/ui';

import { CartFeature } from '@acme/cart/feature';

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/cart">Cart</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </Router>
  );
};

export default App;
