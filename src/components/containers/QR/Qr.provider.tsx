import { FormProvider, useForm } from 'react-hook-form';
import {
  TGenerateQRSchema,
  generateQRSchema,
  generateQRDefaultValues,
} from '@global/types/schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { QrContainer } from './Qr.container';

export const WithQrContainer = () => {
  const methods = useForm<TGenerateQRSchema>({
    mode: 'all',
    resolver: zodResolver(generateQRSchema),
    defaultValues: generateQRDefaultValues,
  });

  return (
    <FormProvider {...methods}>
      <QrContainer />
    </FormProvider>
  );
};
