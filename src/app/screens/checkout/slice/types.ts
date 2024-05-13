export interface InitialCartState {
  isLoading: boolean;
  cartDetail: {
    totalDocuments: number;
    totalPages: number;
    data: IcartDetail[];
  };
}

export interface IcartDetail {
  _id: string;
  userId: string;
  pharmacyId: string;
  pharmacyName: string;
  drugs: Idrugs[];
  totalPrice: number;
  totalQuantity: number;
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
