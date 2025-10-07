import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IPlan } from "../interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberWithSpaces(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const getSalePercent = (price?: number, full_price?: number) => {
  if (!price || !full_price) return 0;
  return 100 - Math.round((price / full_price) * 100);
};

export const sortPlans = (items: IPlan[], order: "asc" | "desc") => {
  const result = [...items].sort((a, b) => {
    const aValue = a["price"];
    const bValue = b["price"];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });
  return result;
};
