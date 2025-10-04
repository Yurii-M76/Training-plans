import { FC } from "react";
import { IPlan } from "@/app/interfaces";
import { numberWithSpaces } from "@/app/lib/utils";
import { Sale } from "../../sale/Sale";

export const PlanBestCard: FC<IPlan> = ({
  period,
  price = 0,
  full_price = 0,
  sale = 0,
  text,
}) => {
  return (
    <div className="xs:h-[131px] xs:p-[18px_31px_20px_28px] xs:w-[343px] relative flex h-[118px] w-[288px] rounded-[20px] border-[2px] border-[var(--accent)] bg-[var(--bg-card)] p-[18px_9px_20px_18px] md:h-[190px] md:w-full md:rounded-[34px] md:p-[34px_80px_30px_122px]">
      <div className="xs:right-[62px] absolute -top-[2px] right-[50px] md:left-[49px]">
        <Sale value={sale} />
      </div>

      <span className="xs:text-[16px] absolute top-[6px] right-[14px] text-[13px] leading-[1.3] font-medium tracking-[0.03em] text-[var(--accent)] md:top-[10px] md:right-[20px] md:text-[22px]">
        хит!
      </span>

      <div className="flex h-full w-full items-center justify-between gap-[30px] md:gap-[40px]">
        <div className="xs:h-[91px] flex h-[78px] shrink-0 flex-col justify-between md:h-[126px] md:items-center">
          <span className="xs:text-[18px] text-[16px] leading-[1.2] font-medium md:text-[26px]">
            {period}
          </span>

          <div className="flex w-fit flex-col">
            <span className="xs:text-[34px] inline-flex justify-center text-[30px] leading-[1] font-semibold text-[var(--accent)] md:text-[50px]">
              {price} ₽
            </span>
            <div className="flex justify-end">
              <span className="xs:text-[16px] text-[14px] leading-[1.2] text-[#919191] line-through md:text-[24px]">
                {numberWithSpaces(full_price)} ₽
              </span>
            </div>
          </div>
        </div>

        <div className="xs:w-[111px] flex w-[120px] items-center overflow-hidden md:h-[62px] md:w-[328px]">
          <p className="text-[14px] leading-[1.3] not-md:hidden md:text-[16px]">
            {text}
          </p>
          <p className="text-[14px] leading-[1.3] md:hidden md:text-[16px]">
            Всегда быть в форме
          </p>
        </div>
      </div>
    </div>
  );
};
