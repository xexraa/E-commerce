import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Button size="lg" variant="default">
        Click ME
      </Button>
      <p className="m-10">Hello Admin Dashboard</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
};

export default SetupPage;
