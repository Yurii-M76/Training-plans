"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  getIsSale,
  getPlans,
  getPlansLoading,
} from "@/app/services/plans/plansSlice";
import { findPlans } from "@/app/services/plans/actions";
import { Attention } from "../attention/Attention";
import { BuyButton } from "../controls";
import { PlanBestCard, PlanCard } from "../plan-cards";
import { Checkbox } from "../inputs";
import { getSalePercent } from "@/app/lib/utils";

interface IForm {
  id: string;
  confirm: boolean;
}

export const Plans = () => {
  const dispatch = useAppDispatch();
  const plans = useAppSelector(getPlans);
  const plansLoading = useAppSelector(getPlansLoading);
  const isSale = useAppSelector(getIsSale);

  const defaultValues: IForm = {
    id: "",
    confirm: false,
  };

  const form = useForm<IForm>({ defaultValues });
  const { register, handleSubmit, watch, getValues, formState } = form;
  const { errors } = formState;

  const cardBest = plans.map((card) => {
    const sale = getSalePercent(card.price, card.full_price);

    if (card.is_best) {
      return (
        <PlanBestCard
          key={card.id}
          values={card}
          sale={sale}
          isSale={isSale}
          isSelected={card.id === watch("id")}
          {...register("id", { required: true })}
        />
      );
    }
  });

  const cards = plans.map((card) => {
    const sale = getSalePercent(card.price, card.full_price);

    if (!card.is_best) {
      return (
        <PlanCard
          key={card.id}
          values={card}
          sale={sale}
          isSale={isSale}
          isSelected={card.id === watch("id")}
          {...register("id", { required: true })}
        />
      );
    }
  });

  const onSubmit = () => {
    const selectedPlan = plans.find((plan) => plan.id === getValues("id"));
    console.log({
      id: selectedPlan?.id,
      period: selectedPlan?.period,
      text: selectedPlan?.text,
      isBest: selectedPlan?.is_best,
      price: isSale ? selectedPlan?.price : selectedPlan?.full_price,
      sale: isSale
        ? getSalePercent(selectedPlan?.price, selectedPlan?.full_price) + "%"
        : "0",
    });
  };

  useEffect(() => {
    dispatch(findPlans());
  }, [dispatch]);

  return (
    <form
      className="xs:gap-[8px] xs:w-[343px] flex w-[288px] flex-col gap-[6px] md:w-[748px] md:gap-[14px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {plansLoading && (
        <div className="flex w-full items-center justify-center">
          Загрузка...
        </div>
      )}

      <section className="grid grid-cols-1 gap-[14px]">{cardBest}</section>

      <section className="xs:gap-[8px] grid grid-cols-1 gap-[6px] md:grid-cols-3 md:gap-[14px]">
        {cards}
      </section>

      {errors.id && (
        <p className="pt-2 pb-2 text-red-500">Выберите тарифный план</p>
      )}

      <div className="mt-[2px]">
        <Attention />
      </div>

      <div className="xs:mt-[12px] mt-[8px] md:mt-[16px] md:w-[649px]">
        <Checkbox
          id="confirm"
          isNotConfirmed={errors.confirm && true}
          {...register("confirm", { required: "Согласние обязательно" })}
        >
          <p className="xs:leading-[1.2] text-[12px] leading-[1.1] text-[#cdcdcd] md:text-[16px] md:leading-[1.1]">
            Я согласен с{" "}
            <span className="underline">офертой рекуррентных платежей</span> и{" "}
            <span className="underline">Политикой конфиденциальности</span>
          </p>
        </Checkbox>
        {errors.confirm && (
          <p className="pt-2 pb-2 text-red-500">{errors.confirm?.message}</p>
        )}
      </div>

      <div className="xs:mt-[12px] xs:gap-[20px] mt-[12px] flex flex-col gap-[10px] md:mt-[2px] md:gap-[14px]">
        <BuyButton onClick={() => ""} />
        <p className="text-[10px] leading-[1.2] text-[#9b9b9b] md:text-[14px]">
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </form>
  );
};
