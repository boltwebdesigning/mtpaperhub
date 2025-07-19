import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '../types/order';

interface OrderStore {
  orders: Order[];
  currentOrder: Order | null;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updatePaymentStatus: (orderId: string, status: Order['paymentStatus']) => void;
  removeOrder: (orderId: string) => void;
  clearAllOrders: () => void;
  getOrderById: (orderId: string) => Order | undefined;
  getOrdersByStatus: (status: Order['status']) => Order[];
  clearCurrentOrder: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      currentOrder: null,

      addOrder: (order) => {
        set((state) => ({
          orders: [order, ...state.orders],
          currentOrder: order
        }));
      },

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map(order =>
            order.id === orderId ? { ...order, status } : order
          )
        }));
      },

      updatePaymentStatus: (orderId, paymentStatus) => {
        set((state) => ({
          orders: state.orders.map(order =>
            order.id === orderId ? { ...order, paymentStatus } : order
          )
        }));
      },

      removeOrder: (orderId) => {
        set((state) => ({
          orders: state.orders.filter(order => order.id !== orderId)
        }));
      },

      clearAllOrders: () => {
        set({
          orders: [],
          currentOrder: null
        });
      },

      getOrderById: (orderId) => {
        return get().orders.find(order => order.id === orderId);
      },

      getOrdersByStatus: (status) => {
        return get().orders.filter(order => order.status === status);
      },

      clearCurrentOrder: () => {
        set({ currentOrder: null });
      }
    }),
    {
      name: 'order-storage'
    }
  )
);