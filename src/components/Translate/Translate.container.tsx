import { useTranslate } from '@global/hooks';
import { TTranslateProps } from '@global/types/components';
import { cnm } from '@global/utils';

export const Translate = ({
  i18nKey,
  as: Tag = 'p',
  className,
}: TTranslateProps) => {
  const { hasI18Key, text } = useTranslate(i18nKey);

  console.log(hasI18Key);

  return (
    <Tag
      className={cnm(
        `${!hasI18Key && 'text-destructive animate-pulse duration-300'}`,
        className,
      )}
    >
      {text}
    </Tag>
  );
};
