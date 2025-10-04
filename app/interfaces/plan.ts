export interface IPlan {
  id?: string;
  period: string;
  price: number;
  full_price?: number;
  sale?: number;
  is_best?: boolean;
  text?: string;
}
