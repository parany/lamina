export enum PhoneNumberType {
    Personal,
    Business
}

export class PhoneNumber {
    id: string;
	operator: string;
	num: string;
	type: PhoneNumberType
}