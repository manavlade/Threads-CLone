import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className=" items-center p-5">
            <SignIn />;
        </div>
    )
}