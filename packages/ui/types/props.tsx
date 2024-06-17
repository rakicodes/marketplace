import { ReactNode } from "react";

export type IPropsWithOnlyChildren = {
  children: ReactNode;
};

export type IPropsReactNode = {
  elem: ReactNode
}

export enum IBool {
  true = 1,
  false = 0,

}

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
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type IUnderlineInputWithLabel = IUnderlineInput & { label: string };

export type IButtonType = "submit" | "button"

export type IButton = IPropsWithOnlyChildren & {
  onClick?: () => void | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  type?: IButtonType
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
  category: string;
  price: number;
};

export type ICardImage = {
  src: string;
  alt: string;
};

export type IImageArray = {
  images: ICardImage[];
};

export type ICard = { content: ICardContent, id: string, handleClick: (id: string) => void } & IImageArray;

export type ICardsContainer = {
  items: ICard[];
};

export type ISlider = {
    total: number,
    curr: number,
    handleSlider: (id: number) => void
}

export type IProfileTemplate = ICardsContainer & {
  onClick: () => void
}

export type ISwitchWithLabel = ISwitch & {
  label: string
}

export type ISwitch = {
  value: IBool
  handleClick: () => void
}

export type IDropdown = {
  options: string[]
  handleClick: (c: string) => void
}

export type ISelectMenu = IPropsWithOnlyChildren & {
  label: string,
  category: string
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
  toLogin: () => void,
  toHome: () => void
}

export type IError = {
  error: Error | null | string,
  open: boolean,
  handleOpen: (open: boolean) => void
}

export type ILoginTemplate = ILoginForm & IError

export type IErrorPopup = IPropsWithOnlyChildren & {
  open: boolean,
  handleOpen: (open: boolean) => void
}

export type ISignupTemplate = ISignupForm & IError

export type IAddListingTemplate = IListingForm & IError

export type IListingForm = IListing & {
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeMake: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeSerialNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangePackage: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleClickIsUsed: () => void,
  handleClickIsCertified: () => void,
  handleClickWarranty: () => void,
  handleClickCategory: (c: string) => void,
  handleChangeImages: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeYear: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeNumOfUnits: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

export type IListing = {
  name: string,
  images: FileList,
  price: string,
  warranty: IBool,
  category: string,
  serialNumber: string,
  numOfUnits: number,
  packageType: string,
  make: string,
  year: string,
  isUsed: IBool,
  isCertified: IBool,
}

export type IImageInput = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type IErrorPage = {
  link: () => void,
  message?: string
}