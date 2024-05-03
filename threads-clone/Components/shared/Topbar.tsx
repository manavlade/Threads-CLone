import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { OrganizationSwitcher } from "@clerk/nextjs";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/logo.svg";
import Logout from "@/assets/logout.svg"
import OrganizationSwitcherPage from '@/app/organization-switcher/[[...organization-switcher]]/page';
function Topbar() {
  return (
    <>
      {/* top bar used in global css  */}
      <nav className=' topbar' >
        <Link href="/" className=' flex items-center gap-4'>
          <Image src={Logo} alt='logo' width={28} height={28} />
          <p className=' text-heading3-bold text-light-1 max-xs:hidden' >
            Threads
          </p>
        </Link>

        <div className=' flex items-center gap-1' >
          <div className=' block md:hidden' >
            <SignedIn>
              <SignOutButton>
                <div className=' flex cursor-pointer' >
                  <Image
                    src={Logout}
                  alt='signout'
                  width={24}
                  height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
          {/* <OrganizationSwitcherPage /> */}
          <div>
            {/* <OrganizationSwitcher /> */}
            <UserButton
             />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Topbar