import { RestaurantType } from "./restaurant-type.interface";

export interface Restaurant {
  id: number;
  name: string;
  type: RestaurantType;
  minutesWalking: number;
}
