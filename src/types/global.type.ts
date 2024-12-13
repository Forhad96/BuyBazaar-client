import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};


export type TUserResponseData = {
  id: string;
  email: string;
  password: string;
  needPasswordChange: boolean;
  lastPasswordChange: Date;
  passwordAttempts: number;
  isLocked: boolean;
  lockoutEnd: Date | null;
  role: string;
  name: string;
  profilePicture: string | null;
  phoneNumber: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  country: string | null;
  status: string;
  suspensionReason: string | null;
  suspendedAt: Date | null;
  deletedAt: Date | null;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
}