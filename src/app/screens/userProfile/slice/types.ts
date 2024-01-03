export interface IinitialUserProfileState {
  isLoadingUserProfile: boolean;
  user: IUser;
}

export interface IgetUserProfilePayload {
  userId: string;
}

export interface IUser {
  name: string;
  phoneNumber: string;
  email?: string;
  address?: string;
  avatar: string;
  coverPhoto: string;
  location?: {
    type: string;
    coordinates: number[];
  };
}
