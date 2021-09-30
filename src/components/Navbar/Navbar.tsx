import { SearchIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Logo, SunIcon, TwitterIcon, TelegramIcon, DiscordIcon, InstagramIcon } from 'assets';
import React, { FC, useEffect, useState } from 'react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import Link, { LinkType } from 'components/Link/Link';
import HamburgerMenu from './HamburgerMenu';

//TODO update links
const socialButtons = [
  {
    icon: TwitterIcon,
    link: 'Twitter',
  },
  {
    icon: InstagramIcon,
    link: 'Instagram',
  },
  {
    icon: TelegramIcon,
    link: 'Telegram',
  },
  {
    icon: DiscordIcon,
    link: 'Discord',
  },
];
const renderSocialButtons = () => (
  <div className="flex gap-x-1 lg:gap-x-2 xl:gap-x:4">
    {socialButtons.map(({ link, icon }) => (
      <Button key={link} type={ButtonType.Main} icon={icon} />
    ))}
  </div>
);

const Navbar: FC<unknown> = () => {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = hamburgerOpened ? 'hidden' : 'auto';
  }, [hamburgerOpened]);
  return (
    <nav>
      <div className="max-w-screen-2xl flex mx-auto px-2 sm:px-4 lg:px-8 h-16">
        <div className="flex items-center px-2 lg:px-0 w-full justify-between	">
          <div className="flex-shrink-0">
            <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Rarible" />
            <div className="flex items-center">
              <img className="hidden lg:block h-8 w-auto" src={Logo} alt="Rarible" />
              <span className="hidden lg:block h-8 text-xl h-auto flex align-center text-white font-bold pl-3">
                Rarible
              </span>
            </div>
          </div>
          {/* TODO move search to new compent */}
          <div className="flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <div className="hidden lg:block lg:ml-6 lg:mr-6">
            <div className="flex space-x-10 items-center">
              <Link type={LinkType.Main} title="Explore" to="#" />
              <Link type={LinkType.Secondary} title="How it works" to="#" />
            </div>
          </div>
          <div className="hidden lg:block lg:ml-4">
            <div className="flex items-center">{renderSocialButtons()} </div>
          </div>
          <div className="hidden lg:block lg:ml-6">
            <div className="flex space-x-4 lg:space-12 items-center">
              <Button type={ButtonType.Primary} title="Create" />
              <Button type={ButtonType.Secondary} title="Connect wallet" />
              <Button type={ButtonType.Main} icon={SunIcon} />
            </div>
          </div>
        </div>

        <div className="flex lg:hidden">
          {/* Mobile menu button */}
          <div
            onClick={() => setHamburgerOpened(!hamburgerOpened)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {hamburgerOpened ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
      {hamburgerOpened && <HamburgerMenu renderSocialButtons={renderSocialButtons} />}
    </nav>
  );
};

export default Navbar;