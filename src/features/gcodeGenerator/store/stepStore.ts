import { create } from 'zustand';

import { createSelectors } from '@/store/storeSelector';

// eslint-disable-next-line no-unused-vars
type Step = { [K in number]: boolean };

interface StepState {
  activeStep: number;
  steps: Step;
}

type StepAction = {
  setActiveStep: (activeStep: number) => void;
  setSteps: (steps: Step) => void;
};

const initialValues: StepState = {
  steps: { 0: false, 1: false, 2: false },
  activeStep: 0,
};

const useStepBase = create<StepState & StepAction>((set) => ({
  ...initialValues,
  setActiveStep: (activeStep: number) => set(() => ({ activeStep })),
  setSteps: (step: Step) => set(({ steps }) => ({ steps: { ...steps, ...step } })),
}));

export const useStepStore = createSelectors(useStepBase);
