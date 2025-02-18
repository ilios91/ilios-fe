"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "../dialog";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={() => router.back()}>
      <DialogContent className="max-w-[625px] border rounded-[20px] bg-[#EDF3FC] shadow-lg">
        {children}
      </DialogContent>
    </Dialog>
  );
}
