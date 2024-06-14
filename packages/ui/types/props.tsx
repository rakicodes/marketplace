import { ReactNode } from "react";

export type IPropsWithOnlyChildren = {
  children: ReactNode;
};

export type ISignupForm = {
  name: string;
  email: string;
  password: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export type IUnderlineInput = {
  name: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type IUnderlineInputWithLabel = IUnderlineInput & { label: string };

export type IButton = IPropsWithOnlyChildren & {
  onClick: () => void;
};

export type ILoginForm = {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ICardContent = {
  listingId: string;
  name: string;
  location: string;
  price: number;
};

export type ICardImage = {
  src: string;
  alt: string;
};

export type IImageArray = {
  images: ICardImage[];
};

export type ICard = { content: ICardContent } & IImageArray;

export type ICardsContainer = {
  items: ICard[];
};

export type ISlider = {
    total: number,
    curr: number,
    handleSlider: (i: number) => void
}

export type IProfileTemplate = ICardsContainer & {
  onClick: () => void
}

export type ISwitchWithLabel = {
  label: string
}

export type IDropdown = {
  options: string[]
}

export type ISelectMenu = IPropsWithOnlyChildren & {
  label: string
}

export type IImageSlide = IImageArray & {
  curr: number,
  handleCurr: (i: number) => void
}

export type IParamsId = {
  params: {
    id: string
  }
} 

export type IListingHeader = {
  category: string,
  price: number,
  name: string
}

export type IListingSummary = {
  listingId: string,
  make: string,
  serialNumber: string,
  numOfUnits: number,
  packageType: string,
  year: number,
}

export type IHeader = {
  toProfile: () => void,
  toSignup: () => void,
  toLogin: () => void
}

export type ILoginTemplate = ILoginForm & {
  error: Error | null,
  open: boolean,
  handleOpen: (open: boolean) => void
}

export type IErrorPopup = IPropsWithOnlyChildren & {
  open: boolean,
  handleOpen: (open: boolean) => void
}

export type ISignupTemplate = ISignupForm & {
  error: Error | null,
  open: boolean,
  handleOpen: (open: boolean) => void
}