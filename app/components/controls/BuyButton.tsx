export const BuyButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="submit"
      className="xs:h-[63px] flex h-[55px] w-full cursor-pointer items-center justify-center rounded-[20px] bg-[var(--accent)] text-[18px] leading-[1.3] font-bold text-[#191e1f] not-hover:animate-pulse md:h-[66px] md:w-[352px] md:text-[20px]"
      onClick={onClick}
    >
      Купить
    </button>
  );
};
