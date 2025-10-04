import { IPlan } from "@/app/interfaces";
import { numberWithSpaces } from "@/app/lib/utils";
import { Attention } from "../attention/Attention";
import { PrivacyPolicy } from "../privacy-policy/PrivacyPolicy";
import { BuyButton } from "../controls";
import { PlanBestCard, PlanCard } from "../plan-cards";

const mock: IPlan[] = [
  {
    id: "f347d050-073c-4969-ae91-7346f935cf70",
    period: "1 неделя",
    price: 690,
    full_price: 999,
    sale: 30,
    is_best: false,
    text: "Чтобы просто начать",
  },
  {
    id: "f347d050-073c-4969-ae91-7346f935cf71",
    period: "1 месяц",
    price: 990,
    full_price: 1690,
    sale: 40,
    is_best: false,
    text: "Чтобы получить первые результаты",
  },
  {
    id: "f347d050-073c-4969-ae91-7346f935cf72",
    period: "3 месяца",
    price: 1990,
    full_price: 3990,
    sale: 50,
    is_best: false,
    text: "Привести тело в порядок",
  },
  {
    id: "f347d050-073c-4969-ae91-7346f935cf73",
    period: "Навсегда",
    price: 5990,
    full_price: 18990,
    sale: 70,
    is_best: true,
    text: "Для тех, кто хочет всегда быть в форме и поддерживать здоровье",
  },
];

export const Plans = () => {
  const cardBest = mock
    .map((card) => {
      if (card.is_best) {
        return (
          <PlanBestCard
            key={card.id}
            period={card.period}
            sale={card.sale}
            price={card.price}
            full_price={card.full_price}
            text={card.text}
          />
        );
      }
    })
    .reverse();

  const cards = mock
    .map((card) => {
      if (!card.is_best) {
        return (
          <PlanCard
            key={card.id}
            period={card.period}
            sale={card.sale}
            price={card.price}
            full_price={card.full_price}
            text={card.text}
          />
        );
      }
    })
    .reverse();

  console.log(numberWithSpaces(18990));

  return (
    <section className="xs:gap-[8px] xs:w-[343px] flex w-[288px] flex-col gap-[6px] md:w-[748px] md:gap-[14px]">
      <section className="grid grid-cols-1 gap-[14px]">{cardBest}</section>

      <section className="xs:gap-[8px] grid grid-cols-1 gap-[6px] md:grid-cols-3 md:gap-[14px]">
        {cards}
      </section>

      <div className="mt-[4px]">
        <Attention />
      </div>

      <div className="mt-[16px] md:w-[649px]">
        <PrivacyPolicy />
      </div>

      <div className="xs:mt-[10px] xs:gap-[20px] mt-[12px] flex flex-col gap-[10px] md:mt-[4px] md:gap-[14px]">
        <BuyButton />
        <p className="text-[10px] leading-[1.2] text-[#9b9b9b] md:text-[14px]">
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </section>
  );
};
