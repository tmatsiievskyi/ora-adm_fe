import { Link } from 'react-router-dom';
import { Text } from 'tm-ui';

export const Header = () => {
  return (
    <div className='flex h-[50px] justify-between items-center bg-bkg-sec-frg text-bkg-sec'>
      <Text className='text-bkg' size='xl'>
        ORA
      </Text>
      <Link to='/signOut'>Sign Out</Link>
    </div>
  );
};
