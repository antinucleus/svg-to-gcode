import { create } from 'zustand';

import { createSelectors } from '@/store/storeSelector';

import { IUnit } from '../types';

type GcodeSettingsState = {
  centerX: number;
  centerY: number;
  height: number;
  sampleCount: number;
  width: number;
  fill: boolean;
  lineNumbering: boolean;
  unit: IUnit;
};

type GcodeSettingsAction = {
  setGcodeSettings: (value: Partial<GcodeSettingsState>) => void;
};

const initialValues: GcodeSettingsState = {
  centerX: 0,
  centerY: 0,
  height: 0,
  sampleCount: 0,
  width: 0,
  fill: false,
  lineNumbering: false,
  unit: 'mm',
};

const useGcodeSettingsBase = create<GcodeSettingsState & GcodeSettingsAction>((set) => ({
  ...initialValues,
  setGcodeSettings: (value: Partial<GcodeSettingsState>) => set(() => ({ ...value })),
}));

export const useGcodeSettingsStore = createSelectors(useGcodeSettingsBase);
