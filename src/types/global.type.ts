export type TError = {
  data: {
    error: string;
    message: string;
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
  message: string;
  success: boolean;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
// export type TResponseRedux = TResponse & TMeta
export type TCar = {
  _id: string | undefined;
  name: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  carType: string;
  door: number;
  passengers: number;
  transmission: string;
  luggage: number;
  airCondition: boolean;
  seats: number;
  mileage: number;
  status: string;
  location: string;
  features: string[];
  pricePerHour: number;
  pricePerDay: number;
  imageUrl: string[];
  isDeleted: boolean;
  __v: number;
};

export type TBooking = {
  _id: string;
  date: string; // The date of the booking in YYYY-MM-DD format
  user: string; // Identifier for the user (reference to user model)
  car: string; // Identifier for the booked car (reference to car model)
  startTime: string; // The start time of the booking in 24hr format (HH:mm)
  endTime: string; // The end time of the booking in 24hr format (HH:mm)
  totalCost: number; // The total cost of the booking, default is 0
};
