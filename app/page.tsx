import { Plans } from "./components";

export default function Home() {
  return (
    <section className="flex flex-col gap-[20px] md:gap-[108px]">
      <h1 className="xs:text-[22px] xs:leading-[1.2] text-[22px] leading-[1.1] font-bold tracking-[0.01em] md:text-[40px]">
        Выбери подходящий для себя{" "}
        <span className="text-[var(--accent)]">тариф</span>
      </h1>

      <section className="flex h-full w-full flex-col items-center md:flex-row md:items-center md:justify-between">
        <div className="xs:h-[248px] xs:w-[124px] relative h-[204px] w-[99px] bg-[url(/images/man.png)] bg-contain bg-center bg-no-repeat md:h-[767px] md:w-[381px]">
          <div className="absolute bottom-0 left-0 h-[80px] w-full bg-linear-to-t from-[var(--background)]" />
        </div>

        <Plans />
      </section>
    </section>
  );
}
