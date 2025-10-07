export interface IPlan {
  id: string;
  period: string;
  price: number;
  full_price: number;
  text: string;
  is_best?: boolean;
  sale?: string;
}
