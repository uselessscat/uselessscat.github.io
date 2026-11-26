/** Tones available for event thumbnails. */
export const eventTones = {
  violet: "from-[#4a3670] to-[#1b1330]",
  blue: "from-[#2f4a72] to-[#141a2e]",
  rose: "from-[#6a3448] to-[#241222]",
} as const;

export type EventTone = keyof typeof eventTones;
