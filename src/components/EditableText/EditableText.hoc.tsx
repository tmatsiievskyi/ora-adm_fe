import { TEditableProps } from '@global/types';
import { EditableText } from './EditableText.component';

export const WithEditableText = (props: TEditableProps) => {
  return <EditableText {...props} />;
};
