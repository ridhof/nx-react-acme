// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IBook } from '@acme/shared-models';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getBooks } from '@acme/books/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Books } from '@acme/books/ui';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { cartActions } from '@acme/cart/data-access';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then(setBooks);
  }, [
    // This effect runs only once on first component render
    // so we declare it as having no dependent state
  ]);

  return (
    <>
      <h2>Books</h2>
      <Books 
        books={books} 
        onAdd={book => 
          // Using add action from cart slice
          dispatch(
            cartActions.add({
              id: book.id,
              description: book.title,
              cost: book.price
            })
          )
        } 
      />
    </>
  );
};

export default BooksFeature;
