import {Address} from "./address"

export interface Customer {
    id : string
    firstName : string
    lastName : string
    email : string
    phoneNumber : string
    address : Address
}

export interface CustomerPayload {
    firstName : string
    lastName : string
    email : string
    phoneNumber : string
    address : Address
}