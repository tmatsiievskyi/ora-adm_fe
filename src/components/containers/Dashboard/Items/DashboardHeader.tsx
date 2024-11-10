import { TDashboardHeaderProps } from '@global/types';
import { Button, Text } from 'tm-ui';

export const DashboardHeader = ({
  titleText,
  buttonText,
  buttonFn,
}: TDashboardHeaderProps) => {
  return (
    <div className='py-8 flex  justify-between items-center mb-6'>
      <Text as='h3' className=' text-bkg-frg font-bold text-2xl' size='xl'>
        {titleText}
      </Text>
      <Button
        buttonType='base'
        className='bg-bkg-frg text-bkg'
        label={buttonText}
        onClick={buttonFn}
        size='small'
      />
    </div>
  );
};
