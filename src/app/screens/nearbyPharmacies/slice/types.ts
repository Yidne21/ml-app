export interface IinitialNearbyPharmaciesState {
  isLoadingNearbyPharmacies: boolean;
  nearbyPharmacies: InearbyPharmacies;
}
export interface IgetNearbyPharmaciesPayload {
  pageState: {
    page: number;
    limit: number;
    searchQuery?: string;
  };
}

export interface InearbyPharmacies {
  totalDocuments: number;
  totalPages: number;
  pharmacies: Ipharmacies[];
}

export interface Idrugs {
  _id: string;
  name: string;
  price: number;
  stockLevel: number;
}

export interface Ipharmacies {
  _id: string;
  logo: string;
  distance: number;
  name: string;
  location: [number, number];
  drug?: Idrugs[];
}
