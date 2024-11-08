import { Spinner } from './Spinner.container';

export enum ESpinnerType {
  FULL_SCREEN = 'full',
  BASE = 'base',
}

export const WithSpinner = ({ type }: { type: ESpinnerType }) => {
  if (type === ESpinnerType.FULL_SCREEN) {
    return (
      <div className=' fixed w-full h-full bg-dark/60  z-50'>
        <Spinner />
      </div>
    );
  }

  return <Spinner />;
};
