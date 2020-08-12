//Employee interface prototype
export interface Employee {
    id : number;
    name: string;
    gender: string;
    age: number;
    address:{
        state: string;
        city: string;
    }
}