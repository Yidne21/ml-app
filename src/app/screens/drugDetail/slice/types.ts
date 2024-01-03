export interface IinitialDrugDetailState {
  isLoadingDrugDetail: boolean;
  drugDetail?: Idrugs | undefined;
}

export interface IdrugDetailPayload {
  drugId: string;
}

export interface Idrugs {
  _id: string;
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
}
