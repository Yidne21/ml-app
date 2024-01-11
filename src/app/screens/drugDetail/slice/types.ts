export interface IinitialDrugDetailState {
  isLoadingDrugDetail: boolean;
  isLoaded: boolean;
  drugDetail: Idrugs;
}

export interface IdrugDetailPayload {
  drugId: string;
}

export interface Idrugs {
  _id: string;
  drugPhoto: string[];
  ingredients: string[];
  needPrescription: boolean;
  name: string;
  category: string;
  price: number;
  stockLevel: number;
  recivedFrom: string;
  instruction: string;
  sideEffects: string;
  strengthAndDosage: string;
  manufacturedDate: string;
  expiredDate: string;
  receivedFrom: string;
}
