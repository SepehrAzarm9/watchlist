import { TSVGProps } from "../../types/icons/type";

const IntegrationIcon: React.FC<TSVGProps> = (svgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <mask
        id="mask0_382_640"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_382_640)">
        <path
          d="M17.6538 19.6538C16.7169 19.6538 15.925 19.3303 15.278 18.6835C14.6312 18.0365 14.3077 17.2446 14.3077 16.3078C14.3077 15.3708 14.6312 14.5788 15.278 13.932C15.925 13.285 16.7169 12.9615 17.6538 12.9615C18.5908 12.9615 19.3827 13.285 20.0295 13.932C20.6765 14.5788 21 15.3708 21 16.3078C21 17.2446 20.6765 18.0365 20.0295 18.6835C19.3827 19.3303 18.5908 19.6538 17.6538 19.6538ZM11.3655 17.0578H5.25C5.0375 17.0578 4.85942 16.9858 4.71575 16.842C4.57192 16.6982 4.5 16.5199 4.5 16.3073C4.5 16.0948 4.57192 15.9167 4.71575 15.773C4.85942 15.6295 5.0375 15.5578 5.25 15.5578H11.3655C11.578 15.5578 11.7561 15.6297 11.8997 15.7735C12.0436 15.9173 12.1155 16.0955 12.1155 16.308C12.1155 16.5207 12.0436 16.6988 11.8997 16.8423C11.7561 16.9859 11.578 17.0578 11.3655 17.0578ZM6.34625 11.0385C5.40925 11.0385 4.61733 10.715 3.9705 10.068C3.3235 9.42117 3 8.62925 3 7.69225C3 6.75542 3.3235 5.9635 3.9705 5.3165C4.61733 4.66967 5.40925 4.34625 6.34625 4.34625C7.28308 4.34625 8.075 4.66967 8.722 5.3165C9.36883 5.9635 9.69225 6.75542 9.69225 7.69225C9.69225 8.62925 9.36883 9.42117 8.722 10.068C8.075 10.715 7.28308 11.0385 6.34625 11.0385ZM18.75 8.44225H12.6345C12.422 8.44225 12.2439 8.37034 12.1003 8.2265C11.9564 8.08267 11.8845 7.9045 11.8845 7.692C11.8845 7.47934 11.9564 7.30125 12.1003 7.15775C12.2439 7.01409 12.422 6.94225 12.6345 6.94225H18.75C18.9625 6.94225 19.1406 7.01417 19.2843 7.158C19.4281 7.30184 19.5 7.48009 19.5 7.69275C19.5 7.90525 19.4281 8.08334 19.2843 8.227C19.1406 8.3705 18.9625 8.44225 18.75 8.44225Z"
          fill="#98A2B3"
        />
      </g>
    </svg>
  );
};

export default IntegrationIcon;