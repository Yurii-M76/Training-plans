"use client";

import Image from "next/image";
import star from "../../assets/icons/star.svg";
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

export const SaleTimer = () => {
  const icon = <Image src={star} alt="star" className="h-[12px] w-[13px]" />;
  const [timeLeft, setTimeLeft] = useState(120); // 2 минуты в секундах
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const updateTimerDisplay = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      setTimer(
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      );
    };

    updateTimerDisplay();

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          const newTime = prevTime - 1;
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;
          setTimer(
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
          );
          return newTime;
        } else {
          clearInterval(timerInterval);
          return prevTime;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Очистка таймера при размонтировании
    };
  }, [timeLeft]);

  return (
    <div
      className={cn(
        "font-second-family flex items-center justify-between gap-[8px] text-[32px] leading-[1.2] font-bold text-[var(--yellow)] uppercase md:text-[40px]",
        timeLeft <= 30 && timeLeft
          ? "animate-pulse text-red-600"
          : "text-[var(--yellow)]",
        timeLeft === 0 && "text-red-600",
      )}
    >
      {icon}
      {timer}
      {icon}
    </div>
  );
};
