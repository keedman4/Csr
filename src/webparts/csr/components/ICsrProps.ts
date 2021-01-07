export interface ICsrProps {
  description: string;
  investments: number;
  insurance: number;
  health: number;
  newCustomerCount: number;
  selectdate: IDateTimeFieldValue;
 
}


export interface IDateTimeFieldValue{
  value: Date;
  displayValue: string;
}