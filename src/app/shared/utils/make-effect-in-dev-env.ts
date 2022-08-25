type MakeEffectInDevEnvFunction = (callback: Function) => void;

export const makeEffectInDevEnv: MakeEffectInDevEnvFunction = (callback) => {
  if (process.env.NODE_ENV === 'development') {
    callback();
  }
};
