export function sharedModels(): string {
  return 'shared-models';
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}
