import { createContext, FC, useReducer } from "react";

interface FavoriteContextProviderProps {
  children: React.ReactNode;
}

interface FavortieListState {
  favoriteList: {
    id: number;
  }[];
}

interface FavortieListAction {
  type: string;
  payload: {
    id: number;
  };
}
interface FavoriteContext {
  state: FavortieListState;
  dispatch: React.Dispatch<FavortieListAction>;
}

export const FavoriteContext = createContext({} as FavoriteContext);

const initialState = {
  favoriteList: [],
};

const reducer = (state: FavortieListState, action: FavortieListAction) => {
  switch (action.type) {
    case "ADD":
      if (!state.favoriteList.find((item) => item.id === action.payload.id)) {
        state.favoriteList.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        favoriteList: [...state.favoriteList],
      };
    case "REMOVE":
      const removed = state.favoriteList.filter(
        (product) => product.id != action.payload.id
      );
      return {
        ...state,
        favoriteList: [...removed],
      };

    default:
      return state;
  }
};
const FavoriteContextProvider: FC<FavoriteContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
