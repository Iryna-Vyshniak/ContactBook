import { useSelector } from 'react-redux';
import {
  selectToken,
  selectName,
  selectEmail,
  selectIsLogin,
  selectFilter,
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

export const useAuth = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLogin);
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    token,
    isLoggedIn,
    userName,
    userEmail,
    filter,
    contacts,
    filteredContacts,
    isLoading,
    error,
  };
};
