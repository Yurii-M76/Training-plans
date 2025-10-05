"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  getIsSale,
  getPlans,
  getPlansLoading,
} from "@/app/services/plans/plansSlice";
import { findPlans } from "@/app/services/plans/actions";
import { Attention } from "../attention/Attention";
import { PrivacyPolicy } from "../privacy-policy/PrivacyPolicy";
import { BuyButton } from "../controls";
import { PlanBestCard, PlanCard } from "../plan-cards";
import { IPlan } from "@/app/interfaces";

export const Plans = () => {
  const dispatch = useAppDispatch();
  const plans = useAppSelector(getPlans);
  const plansLoading = useAppSelector(getPlansLoading);
  const isSale = useAppSelector(getIsSale);

  const getSalePercent = (data: IPlan) => {
    return Math.round((data.price / data.full_price) * 100);
  };

  useEffect(() => {
    dispatch(findPlans());
  }, [dispatch]);

  const cardBest = plans.map((card) => {
    if (card.is_best) {
      return (
        <PlanBestCard
          key={card.id}
          id={card.id}
          period={card.period}
          sale={isSale ? getSalePercent(card) : 0}
          price={card.price}
          full_price={card.full_price}
          text={card.text}
        />
      );
    }
  });

  const cards = plans
    .map((card) => {
      if (!card.is_best) {
        return (
          <PlanCard
            key={card.id}
            id={card.id}
            period={card.period}
            sale={isSale ? getSalePercent(card) : 0}
            price={card.price}
            full_price={card.full_price}
            text={card.text}
          />
        );
      }
    })
    .reverse();

  return (
    <section className="xs:gap-[8px] xs:w-[343px] flex w-[288px] flex-col gap-[6px] md:w-[748px] md:gap-[14px]">
      {plansLoading && (
        <div className="flex w-full items-center justify-center">
          Загрузка...
        </div>
      )}

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
