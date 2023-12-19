import { CustomIcoButton } from '../../components/IcoButton';
import { types } from '../../shared/iconsTypes/icons';

interface Props {
  disabled?: boolean;
  handleAdd?: () => void;
  icon: types;
}

export const ExampleIcoButton = (props: Props) => {
  const { icon, disabled } = props;

  return <CustomIcoButton icon={icon} disabled={disabled}></CustomIcoButton>;
};
