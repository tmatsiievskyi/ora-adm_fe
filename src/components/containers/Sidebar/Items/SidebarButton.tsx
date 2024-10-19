import { FC } from 'react';
import { motion as m, Variants, useAnimationControls } from 'framer-motion';
import { WithIcon } from 'components/Icon';
import { TSidebarProps } from '@global/types';

type TProps = {} & Pick<TSidebarProps, 'handleOpen' | 'isOpen'>;

export const SidebarButton: FC<TProps> = ({ handleOpen, isOpen }) => {
  const controls = useAnimationControls();

  const arrowVar: Variants = {
    left: {
      rotate: 180,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: 'spring',
        stiffness: 60,
        bounce: 0.55,
      },
    },
    right: {
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: 'spring',
        stiffness: 60,
        bounce: 0.55,
      },
    },
  };

  const onArrowClick = () => {
    handleOpen();

    return isOpen ? controls.start('left') : controls.start('right');
  };

  return (
    <div
      className='h-[35px] border border-r-0 border-gray-100 cursor-pointer w-full flex justify-center items-center mt-auto mb-2'
      onClick={() => onArrowClick()}
    >
      <m.div animate={controls} initial='left' variants={arrowVar}>
        <WithIcon name='arrowLeft' />
      </m.div>
    </div>
  );
};
