// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ICart } from '@acme/shared-models';

export function cartDataAccess(): string {
  return 'cart-data-access';
}

export async function checkout(cart: ICart): Promise<{ items: ICart }> {
  const data = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  })
  return data.json();
}
