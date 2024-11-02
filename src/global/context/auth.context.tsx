import { TUser } from '@global/types';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type TAction = {
  type: 'signIn' | 'signOut';
  payload: TUser | null;
};
type TDispatch = (action: TAction) => void;
type TState = { isAuthenticated: boolean; user: TUser | null };

const AuthContext = createContext<
  { state: TState; dispatch: TDispatch } | undefined
>(undefined);

const authReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'signIn': {
      return { ...state, isAuthenticated: true, user: action.payload };
    }
    case 'signOut': {
      return { ...state, isAuthenticated: false, user: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

export const WithAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  return context;
};
