import { useTranslate } from '@global/hooks';
import { TTranslateProps } from '@global/types/components';
import { cnm } from '@global/utils';

export const Translate = ({
  i18nKey,
  as: Tag = 'span',
  className,
}: TTranslateProps) => {
  const { hasI18Key, text } = useTranslate(i18nKey);

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
