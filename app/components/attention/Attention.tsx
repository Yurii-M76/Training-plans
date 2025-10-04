import Image from "next/image";
import alert from "../../assets/icons/alert.svg";

export const Attention = () => {
  return (
    <div className="xs:rounded-[20px] xs:w-[343px] flex h-[76px] w-[288px] flex-row items-start gap-[6px] rounded-[16px] bg-[#2d3233] p-[14px_20px_14px_12px] md:h-[78px] md:w-[499px] md:gap-[8px] md:p-[18px_20px]">
      <Image
        src={alert}
        alt="alert"
        className="h-[24] w-[22] md:h-[26px] md:w-[24px]"
      />
      <p className="text-[12px] leading-[1.3] md:text-[16px]">
        Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
        результат, чем за 1 месяц
      </p>
    </div>
  );
};
