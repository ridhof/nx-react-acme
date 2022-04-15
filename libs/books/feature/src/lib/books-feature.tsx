import { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getBooks } from '@acme/books/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Books } from '@acme/books/ui';

export const BooksFeature = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, [
    // This effect runs only once on first component render
    // so we declare it as having no dependent state
  ]);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={book => alert(`Added ${book.title}`)} />
    </>
  );
};

export default BooksFeature;
