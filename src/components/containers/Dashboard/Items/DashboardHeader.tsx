import { FC } from 'react';
import { Button } from 'tm-ui';

export const DashboardHeader: FC<{ action?: string }> = ({ action }) => {
  let buttonText;

  if (!action) {
    buttonText = 'Create';
  } else if (action === 'view') {
    buttonText = 'Edit';
  } else if (action === 'edit') {
    buttonText = 'Save';
  }

  return (
    <div>
      <Button className='ml-auto' label={buttonText} size='small' />
    </div>
  );
};
