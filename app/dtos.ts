export interface MapCordsObj {
  lat: number;
  lng: number;
}

export type SignInInputData = {
  username: string;
  password: string;
};

export type SignUpInputData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface PetProps {
  id: number;
  petName: string;
  petColor: string;
  petPictures: string[];
  petOwner: string;
  lgt: string;
  ltd: string;
  petBreed: string;
  petDescription: string;
}
