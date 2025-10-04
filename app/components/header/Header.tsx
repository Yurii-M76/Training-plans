import { SaleTimer } from "../sale-timer/SaleTimer";

export const Header = () => {
  return (
    <header className="xs:h-[85px] mb-[20px] flex h-[74px] flex-col items-center gap-0 bg-[var(--bg-header)] pt-[8px] pb-[54px] md:mb-[48px] md:h-[103px] md:pb-[64px]">
      <p className="xs:text-[18px] text-[14px] leading-[1.3] font-semibold md:text-[24px]">
        Успейте открыть пробную неделю
      </p>
      <SaleTimer />
    </header>
  );
};
