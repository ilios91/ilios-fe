"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "../dialog";
import Logo from "@/components/icons/Logo";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={() => router.back()}>
      <DialogContent className="[&>button]:hidden max-w-[625px] border rounded-[20px] bg-[#EDF3FC] shadow-lg">
        <DialogTitle className="hidden"></DialogTitle>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col items-center w-[55.52px] h-[55.52px] gap-y-1">
            <Logo variant="blue" className="w-full h-full" />
            <p className="font-bold text-blue-normal text-sm leading-[18px]">
              ILIOS
            </p>
          </div>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
}
