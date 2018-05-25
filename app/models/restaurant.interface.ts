import { RestaurantType } from "./restaurant-type.interface";

export interface Restaurant {
  name: string;
  type: RestaurantType;
  minutesWalking: number;
}
