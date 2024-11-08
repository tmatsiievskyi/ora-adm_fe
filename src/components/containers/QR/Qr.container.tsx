import { useGenerateQR } from '@global/api/hooks/mutation';
import { TGenerateQRSchema } from '@global/types/schema/qr.schema';
import { RHFInput } from 'components/rhf';
import { ESpinnerType, WithSpinner } from 'components/Spinner';
import { useFormContext } from 'react-hook-form';
import { Button, Text } from 'tm-ui';

export const QrContainer = () => {
  const { mutationFn, data: respData, isPending } = useGenerateQR();
  const { handleSubmit } = useFormContext<TGenerateQRSchema>();
  const qrImg = respData && respData.data;

  const onSubmit = handleSubmit((data) => {
    mutationFn(data);
  });

  return (
    <div className='flex flex-col justify-center items-center '>
      <Text className='mb-4 text-bkg-frg'>Generate QR Code</Text>
      <form className='flex mb-6' onSubmit={onSubmit}>
        <RHFInput<TGenerateQRSchema>
          compType='anim'
          inputClassName='w-full text-bkg-sec-frg bg-bkg-sec inputDarkModeOverride'
          label='Посилання сюди'
          name='url'
          placeholder=' '
          wrapperClassName='max-w-full mr-2'
        />

        <Button
          buttonType='base'
          className=' text-bkg'
          color='primary'
          label='Згенерувати'
        />
      </form>
      {isPending && <WithSpinner type={ESpinnerType.BASE} />}

      {qrImg && (
        <img
          alt='QR Code'
          height='200'
          src={`data:image/png;base64,${qrImg}`}
          width='200'
        />
      )}
    </div>
  );
};
