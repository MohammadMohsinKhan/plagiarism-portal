import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useRouter } from "next/router";

const AnalyzeLoadingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-6">
        <Loader className="animate-spin text-primary h-16 w-16" />
        <p className="text-muted-foreground text-center">
          Analyzing dataset. This might take a few hours. Results will be emailed to you.
        </p>
        <Button onClick={() => router.push("/")}>Analyze Another Dataset</Button>
      </div>
    </div>
  );
};

export default AnalyzeLoadingPage;
