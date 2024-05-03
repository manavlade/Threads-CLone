import { OrganizationSwitcher } from "@clerk/nextjs";

export default function OrganizationSwitcherPage() {
    return (
        <div>
            <OrganizationSwitcher 
            appearance={{
                elements: {
                    organizationSwitcherTrigger: "py-2 px-2"
                }
            }}
            />
        </div>
    );
}