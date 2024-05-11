export interface IinitialDrugDetailState {
  isLoadingDrugDetail: boolean;
  isLoaded: boolean;
  drugDetail: Idrugs;
}

export interface IdrugDetailPayload {
  drugId: string;
  stockId: string;
}

export interface Idrugs {
  _id: string;
  drugPhoto: string[];
  needPrescription: boolean;
  name: string;
  category: string;
  price: number;
  stockLevel: number;
  recivedFrom: string;
  instruction: string;
  sideEffects: string;
  strength: string;
  dosage: string;
  stock: Istock;
  pharmacy: Ipharmacy;
}

export interface Istock {
  _id: string;
  quantity: string;
  currentQuantity: string;
  status: string;
  price: number;
  cost: number;
  recievedFrom: string;
  batchNumber: string;
  expiredDate: Date;
}

export interface Ipharmacy {
  _id: string;
  location: {
    coordinates: [number, number];
    type: string;
  };
  name: string;
}
