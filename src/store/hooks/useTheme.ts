import { useSelector } from 'react-redux';
import { RootState } from '../../store';

//Implement store hooks
export const useTheme = () => {
  return useSelector((state: RootState) => state.theme);
};