import { useTheme } from 'junoblocks'
import { SVGProps } from 'react'

export const LogoText = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  if (theme.name == 'light')
    return (<h4 style={{ margin: '0', fontSize: '20px' }}>furyswap</h4>)
  else
    return (<h4 style={{ margin: '0', fontSize: '20px', color: 'white' }}>furyswap</h4>)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={438.559}
      height={121.4}
      viewBox="30.721 14.3 438.559 121.4"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="b" x1={-0.414} x2={1.414} y1={0.093} y2={0.907}>
          <stop offset={0} stopColor="#ee4208" />
          <stop offset={1} stopColor="#4139ff" />
        </linearGradient>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius={1}
            result="outline"
          />
          <feComposite operator="out" in="outline" in2="SourceAlpha" />
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M47.17 1.28q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L31.17 0 18.69 1.28l3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L12.1 0-.51 1.28l6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.8 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28Zm33.41-3.97Q77.5 1.28 69.89 1.28q-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.26 1.41-.26 2.24 0 3.72 2.24 3.72 2.5 0 4.29-3.4.58-1.08.83-2.49l4.55-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.57 2.15.58 1.12 2.44 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88Zm47.16 3.97q-7.74 0-7.74-6.02.06-1.66.58-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.18-3.71-3.65 0-5.57 9.53L111.94 0 99.07 1.28l6.66-33.98 10.49-1.22-1.02 6.27q3.01-6.27 12.22-6.27 4.48 0 6.37 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.87 2.46.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28Zm32.2-23.74q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7Zm59.71 11.77q-4.23 5.83-8.29 8.9-4.06 3.07-8.26 3.07-4.19 0-5.66-.83v-14.08q-3.65 9.73-10.18 13.5-2.36 1.41-4.6 1.41-4.29 0-6.15-.83-.45-14.66-.83-18.72-.38-4.07-.7-6.56-.64-4.99-2.82-7.04 2.75-2.05 6.59-2.05 7.43 0 8.45 9.22.26 2.17.26 4.48 0 3.45-.77 15.48 1.53-.7 3.17-3.23 1.63-2.53 2.97-5.98 3.01-8 3.01-14.91 0-1.09-.29-2.24-.29-1.16-.61-1.48 2.24-1.34 5.67-1.34 3.42 0 5.05 2.34 1.64 2.33 2.08 6.62.52 5.44.52 8.7 0 4.55-.45 11.27 3.2-2.31 5.82-9.86 2.63-7.55 2.63-12.93 0-2.36-.39-3.77 2.11-2.37 5.76-2.37 2.24 0 3.87 1.22 1.64 1.21 1.64 3.48 0 2.28-.68 4.71-.67 2.43-1.76 4.93-2.11 4.99-5.05 8.89Zm12 8.77q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.51-5.89 14.59-5.89 3.27 0 5.64 1.09l10.94-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43Zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.49.51q-.93.51-1.67 1.67Zm53.73 23.52q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47-3.64 0-4.92-.64l-1.99 10.88-12.99 1.28 8.83-45.44 10.43-1.09-.83 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54q-1.47 3.97-4.16 6.69Zm-14.46-17.96-3.4 18.76q1.35 1.15 3.01 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.44-3.08.44-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61Z"
          fill="url(#b)"
          transform="translate(97.744 98.36)"
        />
      </g>
    </svg>
  )
}
