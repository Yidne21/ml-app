export interface IinitialOrdersState {
  isLoadingOrders: boolean;
  isLoadedOrders: boolean;
  isConfirmingOrder: boolean;
  isExtendingOrder: boolean;
  isRequestingRefund: boolean;
  orders: Iorders;
  getingOrdersError: string;
  confirmingOrderError: string;
  extendingOrderError: string;
  requestingRefundError: string;
  isConfirmingSucces: boolean;
  isExtendingSucces: boolean;
  isRequestingRefundSucces: boolean;
}
export interface IgetOrdersPayload {
  pageState: {
    page: number;
    limit: number;
    customerId: string;
  };
}

export interface Iorders {
  totalDocuments: number;
  totalPages: number;
  data: Iorder[];
}

export interface Iorder {
  _id: string;
  pharmacy: {
    name: string;
    email: string;
  };
  deliveryAddress: string;
  deliveryExpireDate: Date;
  status: string;
  hasDelivery: boolean;
  totalAmount: number;
  quantity: number;
  deliveryFee: number;
}
