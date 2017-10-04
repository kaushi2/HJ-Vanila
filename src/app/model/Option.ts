import { Room } from "./Room";

export class Option {
    OptionId: number;
    OnRequest: number;
    BoardType: string;
    TotalPrice: number;
    DealName: string;
    Rooms: Array<Room>;
    Discount: string;
    Checked: boolean;
}