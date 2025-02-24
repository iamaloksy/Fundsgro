import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="animate-spin">
        <Loader2 className="h-8 w-8 text-primary" />
      </div>
    </div>
  );
};