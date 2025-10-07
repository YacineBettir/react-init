export interface User  {
  username: string;
  email: string;
  // first_name: string;
  // last_name: string;
  // phone_number: string | null;
  // role: "admin" | "collector" | "driver" | "driverAdmin" ;
  // is_active?: boolean; 
  // address: string;
  // is_admin:boolean//this refer to is driver admin or not 
};



export interface LoginCredentials {
    username: string;
    password: string;
}

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  // first_name: string;
  // last_name: string;
  // identification_number: string;
  // address: string;
}

export interface ResetPasswordParams {
  otp: string;
  new_password: string;
  confirm_password: string;
}

export interface ChangePasswordParams {
  current_password: string;
  new_password: string;
  confirm_new_password: string;
}

