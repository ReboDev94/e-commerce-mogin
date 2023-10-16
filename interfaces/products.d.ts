export interface IProductCart {
  type: 'table' | 'list';
}

export interface IOrder {
  orderNo: string;
  date: string;
  products: IProductOrder[];
  subtotal: number;
  shipping: number;
  total: number;
  status: IStatusOrder;
}

export interface IStatusOrder {
  ordered: boolean;
  confirmed: boolean;
  outDelivery: boolean;
  delivered: boolean;
}
export interface IProductOrder {
  img: string;
  name: string;
  price: number;
}
