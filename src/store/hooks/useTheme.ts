import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useTheme = () => {
  return useSelector((state: RootState) => state.theme);
};