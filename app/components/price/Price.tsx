import { FC } from "react";
import { cn } from "@/app/lib/utils";
import { IPlan } from "@/app/interfaces";

export const Price: FC<IPlan> = ({ period, price, full_price }) => {
  const isOldPrice = full_price && full_price > 0;

  return (
    <div
      className={cn(
        "xs:h-[91px] flex h-[78px] shrink-0 flex-col justify-between md:items-center",
      )}
    >
      <h3 className="xs:text-[18px] text-[16px] leading-[1.2] font-medium md:text-[26px]">
        {period}
      </h3>
      <div className={cn("flex w-fit flex-col md:items-end")}>
        <span
          className={cn(
            "xs:text-[34px] text-[30px] leading-[1] font-semibold md:text-[50px]",
          )}
        >
          {price} ₽
        </span>

        {isOldPrice ? (
          <div className="flex justify-end">
            <span className="xs:text-[16px] text-[14px] leading-[1.2] font-normal text-[#919191] line-through md:text-[24px]">
              {full_price} ₽
            </span>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};
