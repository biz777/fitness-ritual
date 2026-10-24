import type { CSSProperties } from "react";

export type SocialIconsVariant = "A" | "B" | "C";

type Network = {
  name: string;
  href: string;
  color: string;
  dark: string;
  paths: string[];
};

const NETWORKS: Network[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/FitnessRitualHealing",
    color: "#1877F2",
    dark: "#0F57B8",
    paths: [
      "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3",
    ],
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fitness__ritual",
    color: "#E1306C",
    dark: "#A8204F",
    paths: [
      "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10",
      "M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0",
      "M17 7v.01",
    ],
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/Fitness_ritual",
    color: "#E60023",
    dark: "#A8001A",
    paths: [
      "M8 20l4 -9",
      "M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7",
    ],
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Fitness-ritual",
    color: "#FF0000",
    dark: "#B30000",
    paths: [
      "M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8",
      "M10 9l5 3l-5 3l0 -6",
    ],
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@fitness_ritual",
    color: "#161823",
    dark: "#000000",
    paths: [
      "M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917",
    ],
  },
];

const BASE =
  "inline-flex h-12 w-12 items-center justify-center transition duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E07A3A] " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const VARIANTS: Record<SocialIconsVariant, string> = {
  A: "rounded-full bg-[var(--c)] text-white hover:-translate-y-1",
  B:
    "rounded-2xl bg-[var(--c)] text-white border-b-[5px] border-[color:var(--d)] " +
    "hover:translate-y-[3px] hover:border-b-2",
  C:
    "rounded-full border-[1.5px] border-[#2D6A4F] text-[#2D6A4F] " +
    "hover:border-[#E07A3A] hover:bg-[#E07A3A] hover:text-white",
};

type Props = {
  variant?: SocialIconsVariant;
  className?: string;
};

export default function SocialIcons({ variant = "A", className = "" }: Props) {
  return (
    <nav aria-label="Social media">
      <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
        {NETWORKS.map((n) => (
          <li key={n.name}>
            <a
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Fitness Ritual on ${n.name}`}
              title={n.name}
              className={`${BASE} ${VARIANTS[variant]}`}
              style={{ "--c": n.color, "--d": n.dark } as CSSProperties}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6"
              >
                {n.paths.map((d) => (
                  <path key={d} d={d} />
                ))}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
