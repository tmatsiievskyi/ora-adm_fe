import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='flex justify-between'>
      <p>header</p>
      <Link to='/signOut'>Sign Out</Link>
    </div>
  );
};
