import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='flex h-[50px] justify-between bg-bkg-sec-frg text-bkg-sec'>
      <p>header</p>
      <Link to='/signOut'>Sign Out</Link>
    </div>
  );
};
