import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface ICheckbox {
  id: string;
  children: ReactNode;
  isNotConfirmed?: boolean;
}

export const Checkbox = ({ id, children, isNotConfirmed }: ICheckbox) => {
  return (
    <div className="mt-[5px] flex w-fit items-center justify-center gap-[12px]">
      <input
        className={cn(
          "disabled: relative size-[30px] shrink-0 appearance-none rounded-[4px] border-2 border-[#606566] bg-size-[22px_16px] bg-center bg-no-repeat checked:bg-[url(/icons/check.svg)] md:size-[32px]",
          isNotConfirmed && "border-red-600",
        )}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
