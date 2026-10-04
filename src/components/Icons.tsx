import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const base = (size?: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
});

export function StarIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M9.749 15.477l5.13 3.155a.75.75 0 001.174-.86l-1.395-5.886 4.565-3.938a.75.75 0 00-.449-1.385l-5.991-.488-2.308-5.587a.75.75 0 00-1.452 0L6.715 6.075l-5.991.488A.75.75 0 00.275 7.953l4.565 3.937-1.395 5.882a.75.75 0 001.174.86z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeartIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M9.75 16.5S0 11.25 0 5.063A5.063 5.063 0 019.75 3a5.063 5.063 0 019.75 2.063C19.5 11.25 9.75 16.5 9.75 16.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2.25 4.5)"
      />
    </svg>
  );
}

export function ShareIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M4.493 16.79a9 9 0 0011.872-14.154A9 9 0 001.211 13.508L.04 17.01a.75.75 0 00.948.949z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      />
      <circle cx="12" cy="12" r="1.125" fill="currentColor" />
      <circle cx="7.875" cy="12" r="1.125" fill="currentColor" />
      <circle cx="16.125" cy="12" r="1.125" fill="currentColor" />
    </svg>
  );
}

export function CursorIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M11.462 9.215a.75.75 0 01.231-.534l4.351-1.67a.375.375 0 00-.067-.71L.97.032A.375.375 0 00.033.97l4.898 15.01a.375.375 0 00.71.067l1.671-4.351a.75.75 0 01.534-.531l.67-.207 4.811 4.81a.75.75 0 001.06 0l1.19-1.186a.75.75 0 000-1.06z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.75 3.75)"
      />
    </svg>
  );
}

export function UserIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <circle
        cx="7.875"
        cy="7.5"
        r="4.875"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M15 18.75c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle
        cx="18.375"
        cy="8.25"
        r="4.875"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M23.04 18.75a6.72 6.72 0 00-4.665-6.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrendUpIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M6.75 6.75L18 18M18 18v-9.75M18 18H8.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M10.5 0C3 0 0 6.75 0 6.75S3 13.5 10.5 13.5 21 6.75 21 6.75 18 0 10.5 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1.5 5.25)"
      />
      <circle
        cx="12"
        cy="12"
        r="3.75"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M0 7L14 7M7 0L14 7L7 14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      />
    </svg>
  );
}

export function CheckIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect
        x="2.25"
        y="3.75"
        width="19.5"
        height="16.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M6 12l3.75 3.75L21.75 3.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M18 12H6M12 6v12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LocationIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M12 0a9 9 0 00-9 9c0 6.75 9 15 9 15s9-8.25 9-15a9 9 0 00-9-9z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export function MailIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect
        x="3"
        y="5.25"
        width="18"
        height="13.5"
        rx="2.25"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M3.75 6l8.25 6.75L20.25 6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path
        d="M5.25 0A5.25 5.25 0 000 5.25v13.5A5.25 5.25 0 005.25 24h13.5A5.25 5.25 0 0024 18.75V5.25A5.25 5.25 0 0018.75 0H5.25zM7 7.5c0-1.243 1.007-2.25 2.25-2.25h.75a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.5 1.5H9a6.75 6.75 0 006 4.5 1.5 1.5 0 011.5-1.5h2.25a1.5 1.5 0 011.5 1.5v.75c0 1.243-1.007 2.25-2.25 2.25C10.745 18 6 13.255 6 7.5H7z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M6.75 3.75l13.5 8.25-13.5 8.25z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

export function PauseIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="6" y="3.75" width="5.25" height="16.5" rx="0.75" stroke="currentColor" strokeWidth={1.5} />
      <rect x="12.75" y="3.75" width="5.25" height="16.5" rx="0.75" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export function InstagramIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LogoMark({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.253 14.188a7.99 7.99 0 01-5.112-1.594l2.112-3.656h4.225C11.784 5.138 9.663 1.557 6.183 0c-1.209.144-2.376.533-3.43 1.144l2.388 4.138C1.697 6.917-.344 10.544.048 14.336a7.999 7.999 0 002.705 2.396 7.996 7.996 0 0012.774-4.25 7.994 7.994 0 01-5.274 1.706z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
      <path d="M7.5 4.206L12 12l4.5-7.794M7.5 12H21" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GridIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="4.5" y="4.5" width="6" height="6" rx=".75" stroke="currentColor" strokeWidth={1.5} />
      <rect x="13.5" y="4.5" width="6" height="6" rx=".75" stroke="currentColor" strokeWidth={1.5} />
      <rect x="4.5" y="13.5" width="6" height="6" rx=".75" stroke="currentColor" strokeWidth={1.5} />
      <rect x="13.5" y="13.5" width="6" height="6" rx=".75" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}
