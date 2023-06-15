import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import SearchInput from './SearchInput'

// images
import Logo from '@/public/Logo.svg'
import LogoSmall from '@/public/LogoSmall.svg'

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setQuery }: Props) => {
  return (
    <div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
      <div className='flex justofy-between w-full h-full max-w-7xl m-auto px-4'>
        <Link className='flex' href={'/'}>
          <div className='flex items-center cursor-pointer'>
            <div className='invisible md:visible'>
              <Image priority src={Logo} alt="rmdb-logo" />
            </div>
            <div className='absolute md:invisible pt-2'>
              <Image priority src={LogoSmall} alt="rmdb logo small" />
            </div>
          </div>
        </Link>
        {setQuery ? (
          <div className='relative flex items-center'>
            <SearchInput setQuery={setQuery} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header;