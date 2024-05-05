import AccountProfile from "@/Components/forms/AccountProfile";

async function Page() {
    return (
        <main className=" mx-auto flex flex-col max-w-3xl justify-start px-10 py-20 " >
            <h1 className=" head-text" >
                Onboarding
            </h1>
            <p className=" mt-3 text-base-regular text-light-2" >
                Complete your profile now itself to use threads by MANAV LADE
            </p>

            <section className=" mt-9 bg-dark-2 p-10" >
                <AccountProfile />
            </section>
        </main>
    )
}
export default Page;