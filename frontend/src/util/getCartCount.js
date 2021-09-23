import { useSelector } from 'react-redux';

export const GetCartCountHook = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return [cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)];
};
