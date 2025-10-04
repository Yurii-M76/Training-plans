export const Sale = ({ value }: { value: number }) => {
  return (
    <div className="xs:h-[27px] xs:w-[51px] xs:rounded-b-[8px] flex h-[23px] w-[43px] items-center justify-center rounded-b-[6px] bg-[var(--sale)] md:h-[39px] md:w-[68px] md:p-[5px_8px]">
      <span className="font-third-family xs:text-[16px] text-[13px] leading-[1.3] font-medium md:text-[22px]">
        -{value}%
      </span>
    </div>
  );
};
