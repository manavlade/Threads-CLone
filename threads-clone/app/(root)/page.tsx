import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <>
      <SignedIn>
        <div className=" head-text text-left">
          HOME PAGE
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
  </>
  )
}