import { Checkbox } from "../checkbox/checkbox";

export const PrivacyPolicy = () => {
  return (
    <Checkbox id="confirm" isNotConfirmed={false}>
      <p className="xs:leading-[1.2] text-[12px] leading-[1.1] text-[#cdcdcd] md:text-[16px] md:leading-[1.1]">
        Я согласен с{" "}
        <span className="underline">офертой рекуррентных платежей</span> и{" "}
        <span className="underline">Политикой конфиденциальности</span>
      </p>
    </Checkbox>
  );
};
