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

export type IFilledButton = IPropsWithOnlyChildren & {
  onClick: () => void;
};

export type ILoginForm = {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
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