import React from 'react';

export const Divider = ({ styles }: { styles?: string }) => {
   return (
      <div
         id='divider'
         className={` ${styles} sm:h-[7rem] lg:h-[9rem] h-[2.5rem] w-full`}
      />
   );
};
