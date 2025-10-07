import { FC } from "react";
import { IPlan } from "@/app/interfaces";
import { Sale } from "../../sale/Sale";
import { cn, numberWithSpaces } from "@/app/lib/utils";

export const PlanCard: FC<{
  values: IPlan;
  sale: number;
  isSale: boolean;
  isSelected: boolean;
}> = ({ values, sale, isSale, isSelected, ...props }) => {
  const { period, price, full_price, text } = values;
  const fullPriceFormat = numberWithSpaces(full_price);

  return (
    <>
      <input
        type="radio"
        id={values.id}
        value={values.id}
        className="hidden"
        {...props}
      />
      <label
        htmlFor={values.id}
        className={cn(
          "xs:h-[131px] xs:p-[18px_31px_20px_28px] xs:w-[343px] relative flex h-[118px] w-[288px] cursor-pointer overflow-hidden rounded-[20px] border-[2px] border-[var(--outline)] bg-[var(--bg-card)] p-[18px_9px_20px_18px] shadow-amber-400 hover:shadow-2xs md:h-[335px] md:w-[240px] md:rounded-[40px] md:p-[68px_18px_23px_16px]",
          isSelected ? "border-[var(--accent)]" : "border-[var(--outline)]",
        )}
      >
        <div
          className={cn(
            "absolute -top-[2px] right-[26px] md:left-[50px]",
            !isSale &&
              "-translate-y-10 opacity-0 transition-all duration-350 ease-linear",
          )}
        >
          <Sale value={sale} />
        </div>

        <div className="flex h-full w-full justify-between gap-[30px] md:flex-col md:gap-[50px]">
          <div className="xs:h-[91px] flex h-[78px] shrink-0 flex-col justify-between md:h-[140px] md:items-center">
            <span className="xs:text-[18px] text-[16px] leading-[1.2] font-medium md:text-[26px]">
              {period}
            </span>

            <div className="flex w-fit flex-col">
              <span
                className={cn(
                  "xs:text-[34px] inline-flex justify-center text-[30px] leading-[1] font-semibold md:text-[50px]",
                )}
              >
                {isSale ? price : fullPriceFormat} ₽
              </span>
              <div className="flex justify-end">
                <span
                  className={cn(
                    "xs:text-[16px] text-[14px] leading-[1.2] text-[#919191] line-through md:text-[24px]",
                    !isSale &&
                      "opacity-0 transition-opacity duration-350 ease-linear",
                  )}
                >
                  {fullPriceFormat} ₽
                </span>
              </div>
            </div>
          </div>

          <div className="xs:w-[111px] flex w-[120px] items-center overflow-hidden md:h-[62px] md:w-full md:items-start">
            <p className="text-[14px] leading-[1.3] md:text-[16px]">{text}</p>
          </div>
        </div>
      </label>
    </>
  );
};
