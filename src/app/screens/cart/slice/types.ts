export interface InitialCartState {
  isLoading: boolean;
  cartDetail: {
    totalDocuments: number;
    totalPages: number;
    data: IcartDetail[];
  };
  isCheckingOut: boolean;
  chapaCheckOutUrl: string;
  chapaError: string;
  isCheckOutSuccess: boolean;
  isOrderCreating: boolean;
  isOrderCreated: boolean;
}

export interface IcheckOutPayload {
  amount: number;
  email: string;
  cartId: string;
}

export interface IcreateOrderPayload {
  cartId: string;
  hasDelivery: boolean;
}

export interface IcartDetail {
  _id: string;
  userId: string;
  pharmacyId: string;
  pharmacyName: string;
  drugs: Idrugs[];
  totalPrice: number;
  totalQuantity: number;
  deliveryFee: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IaddToCartPayload {
  pharmacyId: string;
  drugId: string;
  stockId: string;
  quantity: number;
}

export interface Idrugs {
  quantity: number;
  _id: string;
  drugId: string;
  stockId: string;
  price: number;
  drugName: string;
}
