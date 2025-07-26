import { twMerge } from "tailwind-merge";
import TimeAgo from 'javascript-time-ago';
import { clsx, type ClassValue } from "clsx";
import pt from 'javascript-time-ago/locale/pt';

TimeAgo.addDefaultLocale(pt)

const timeAgo = new TimeAgo('pt-BR')

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeAgo(date: Date) {
  return timeAgo.format(date)
}
