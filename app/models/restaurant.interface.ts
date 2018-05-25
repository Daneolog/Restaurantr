import { RestaurantType } from "./restaurant-type.interface";

export interface Restaurant {
  id: number;
  name: string;
  typeId: number;
  minutesWalking: number;
  lastVisited: Date;
}
