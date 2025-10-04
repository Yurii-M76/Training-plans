export const Footer = () => {
  return (
    <footer className="flex flex-col gap-[10px] rounded-[20px] border-[1.5px] border-[var(--outline)] p-[12px_12px_10px] md:gap-[30px] md:rounded-[30px] md:p-[20px_20px_30px]">
      <div className="xs:w-[294px] xs:h-[44px] flex h-[41px] w-full items-center justify-center rounded-[30px] border border-[var(--green)] md:h-[68px] md:w-[461px]">
        <p className="xs:text-[18px] text-[16px] leading-[1.2] font-medium text-[var(--green)] md:text-[28px]">
          гарантия возврата 30 дней
        </p>
      </div>
      <p className="xs:text-[14px] text-[13px] leading-[1.3] font-normal text-[#dcdcdc] md:text-[24px]">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </footer>
  );
};
