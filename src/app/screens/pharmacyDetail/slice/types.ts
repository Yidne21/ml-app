export interface IinitialPharmacyDetailState {
  isLoadingPharmacy: boolean;
  isLoadedPharmacy: boolean;
  pharmacyDetail: Ipharmacy;
}

export interface IgetPharmacyDetailPayload {
  pharmacyId: string;
}

export interface Ipharmacy {
  _id: string;
  location: Ilocation;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  logo: string;
  socialMedia: IsocialMedia;
  reviews: Ireview[];
  avgRating: number;
}

export interface Ilocation {
  coordinates: number[];
}

export interface IsocialMedia {
  facebook: string;
  twitter: string;
}

export interface Ireview {
  _id: string;
  feedback: string;
  user: Iuser;
  rating: number;
}

export interface Iuser {
  _id: string;
  name: string;
  avatar: string;
}
