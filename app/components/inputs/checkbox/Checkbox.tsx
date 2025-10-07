import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface ICheckbox {
  id: string;
  children: ReactNode;
  isNotConfirmed?: boolean;
}

export const Checkbox = ({
  id,
  children,
  isNotConfirmed,
  ...props
}: ICheckbox) => {
  return (
    <div className="mt-[5px] flex w-fit items-start justify-center gap-[12px]">
      <input
        id={id}
        type="checkbox"
        className={cn(
          "disabled: relative size-[30px] shrink-0 appearance-none rounded-[4px] border-2 border-[#606566] bg-size-[22px_16px] bg-center bg-no-repeat checked:bg-[url(/icons/check.svg)] md:size-[32px]",
          isNotConfirmed && "border-red-600",
        )}
        {...props}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
