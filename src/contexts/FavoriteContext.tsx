import { createContext, useReducer, useEffect } from "react";

type FavoriteContextProviderProps = {
  children: React.ReactNode;
};

type FavortieListState = {
  favoriteList: {
    id: number;
    name: string;
  }[];
};

type FavortieListAction = {
  type: string;
  payload: {
    id: number;
    name: string;
  };
};
type FavoriteContext = {
  state: FavortieListState;
  dispatch: React.Dispatch<FavortieListAction>;
};

export const FavoriteContext = createContext<FavoriteContext>(
  {} as FavoriteContext
);

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
const FavoriteContextProvider = (props: FavoriteContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
