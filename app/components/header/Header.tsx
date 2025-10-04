import Image from "next/image";
import star from "../../assets/icons/star.svg";

export const Header = () => {
  const icon = <Image src={star} alt="star" />;

  return (
    <header className="xs:h-[85px] mb-[20px] flex h-[74px] flex-col items-center gap-0 bg-[var(--bg-header)] pt-[8px] pb-[54px] md:mb-[48px] md:h-[103px] md:pb-[64px]">
      <p className="xs:text-[18px] text-[14px] leading-[1.3] font-semibold md:text-[24px]">
        Успейте открыть пробную неделю
      </p>
      <div className="font-second-family flex gap-[8px] text-[32px] leading-[1.1] font-bold text-[var(--yellow)] uppercase md:text-[40px]">
        {icon}
        15:59
        {icon}
      </div>
    </header>
  );
};
