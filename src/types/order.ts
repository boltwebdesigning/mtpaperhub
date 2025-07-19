export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  alternatePhone?: string;
  cnic?: string;
}

export interface DeliveryAddress {
  address: string;
  area: string;
  city: string;
  postalCode?: string;
  landmark?: string;
  deliveryInstructions?: string;
}

export interface PaymentMethod {
  type: 'cod' | 'jazzcash' | 'easypaisa' | 'bank' | 'online';
  details?: {
    accountNumber?: string;
    transactionId?: string;
    bankName?: string;
  };
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'product' | 'custom';
  details?: any;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: CustomerInfo;
  delivery: DeliveryAddress;
  payment: PaymentMethod;
  items: OrderItem[];
  subtotal: number;
  deliveryCharges: number;
  codCharges: number;
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'cod_pending' | 'failed';
  createdAt: string;
  estimatedDelivery: string;
  notes?: string;
  promoCode?: string;
  promoDiscount?: number;
}

export interface City {
  name: string;
  deliveryCharges: number;
  codAvailable: boolean;
  estimatedDays: string;
  areas: string[];
}