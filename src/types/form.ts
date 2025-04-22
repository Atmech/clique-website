export type FormField = {
  label: string;
  name: string;
  type: 'text' | 'email' | 'phone' | 'textarea';
  placeholder: string;
  required: boolean;
};

export type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  socialHandle: string;
  userType: 'business' | 'influencer';
}; 