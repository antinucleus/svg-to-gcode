import { create } from 'zustand';

import { createSelectors } from '@/store/storeSelector';

import { IUnit } from '../types';

type GcodeSettingsState = {
  centerX: string;
  centerY: string;
  height: string;
  width: string;
  sampleCount: number;
  fill: boolean;
  lineNumbering: boolean;
  unit: IUnit;
};

type GcodeSettingsAction = {
  setGcodeSettings: (value: Partial<GcodeSettingsState>) => void;
};

const initialValues: GcodeSettingsState = {
  centerX: '',
  centerY: '',
  height: '',
  width: '',
  sampleCount: 0,
  fill: false,
  lineNumbering: false,
  unit: 'mm',
};

const useGcodeSettingsBase = create<GcodeSettingsState & GcodeSettingsAction>((set) => ({
  ...initialValues,
  setGcodeSettings: (value: Partial<GcodeSettingsState>) => set(() => ({ ...value })),
}));

export const useGcodeSettingsStore = createSelectors(useGcodeSettingsBase);
