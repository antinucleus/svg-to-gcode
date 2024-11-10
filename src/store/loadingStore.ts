import { create } from 'zustand';

import { createSelectors } from './storeSelector';

type State = {
  loading: boolean;
};

type Action = {
  setLoading: (loading: boolean) => void;
};

const initialValues: State = {
  loading: false,
};

const useLoadingBase = create<State & Action>((set) => ({
  ...initialValues,
  setLoading: (loading: boolean) => set(() => ({ loading })),
}));

export const useLoadingStore = createSelectors(useLoadingBase);
