import { Link, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import { BooksFeature } from '@acme/books/feature';

import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
} from '@acme/ui';

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
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </Router>  
  );
};

export default App;
