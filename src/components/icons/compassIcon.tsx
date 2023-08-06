type CompassIconTypes = {
  className?: string;
};

export default function CompassIcon({ className, ...props }: CompassIconTypes) {
  return (
    <svg
      {...{ className }}
      {...props}
      aria-label="Ana Sayfa"
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
      <polygon
        fill-rule="evenodd"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      ></polygon>
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></circle>
    </svg>
  );
}
