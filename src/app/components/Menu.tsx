import React from 'react';
import { menuItems } from '../utils/constant';
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((element) => (
        <div className="flex flex-col gap-2" key={element.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {element.title}
          </span>
          {element.items.map((item) => (
            <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-0.5'>
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className='hidden lg:block'>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
