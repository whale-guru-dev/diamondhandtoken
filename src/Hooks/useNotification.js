import { Store } from 'react-notifications-component';

export default function useNotification() {
  const addNotification = ({ title, message, type }) => {
    Store.addNotification({
      title,
      message,
      type,
      insert: 'top',
      container: 'bottom-left',
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return { addNotification };
}
