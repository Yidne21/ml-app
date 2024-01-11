export interface IinitialDrugSearchState {
  isSearching: boolean;
  searchResult?: IdrugSearchResult;
  isSuccessful: boolean;
  errorMsg: string;
}

export interface IgetDrugSearchPayload {
  pageState: {
    page: number;
    limit: number;
    serchQuery?: string;
  };
}

export interface IdrugSearchResult {
  totalDocuments: number;
  totalPages: number;
  drugs: Idrug[];
}

export interface Idrug {
  _id: string;
  name: string;
  category: string;
  price: number;
  expiredDate: string;
  pharmacy: {
    _id: string;
    location: number[];
    name: string;
    distance: number;
  };
  drugPhoto: string[];
}
