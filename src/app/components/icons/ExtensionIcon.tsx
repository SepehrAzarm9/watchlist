import { TSVGProps } from "../../types/icons/type";

const ExtensionIcon: React.FC<TSVGProps> = (svgProps) => {
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
        id="mask0_382_438"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_382_438)">
        <path
          d="M8.877 20.5H5C4.58467 20.5 4.23083 20.3538 3.9385 20.0615C3.64617 19.7692 3.5 19.4153 3.5 19V15.123C4.18467 15.0397 4.7725 14.7551 5.2635 14.2692C5.7545 13.7832 6 13.1935 6 12.5C6 11.8065 5.7545 11.2167 5.2635 10.7307C4.7725 10.2449 4.18467 9.96032 3.5 9.87699V5.99999C3.5 5.58466 3.64617 5.23082 3.9385 4.93849C4.23083 4.64616 4.58467 4.49999 5 4.49999H9C9.08983 3.86416 9.36833 3.33982 9.8355 2.92699C10.3028 2.51416 10.8577 2.30774 11.5 2.30774C12.1423 2.30774 12.6972 2.51416 13.1645 2.92699C13.6317 3.33982 13.9102 3.86416 14 4.49999H18C18.4153 4.49999 18.7692 4.64616 19.0615 4.93849C19.3538 5.23082 19.5 5.58466 19.5 5.99999V9.99999C20.1358 10.0898 20.6602 10.3683 21.073 10.8355C21.4858 11.3028 21.6923 11.8577 21.6923 12.5C21.6923 13.1423 21.4858 13.6972 21.073 14.1645C20.6602 14.6317 20.1358 14.9102 19.5 15V19C19.5 19.4153 19.3538 19.7692 19.0615 20.0615C18.7692 20.3538 18.4153 20.5 18 20.5H14.123C14.0333 19.782 13.7404 19.1858 13.2443 18.7115C12.7481 18.2372 12.1667 18 11.5 18C10.8333 18 10.2519 18.2372 9.75575 18.7115C9.25958 19.1858 8.96667 19.782 8.877 20.5Z"
          fill="#98A2B3"
        />
      </g>
    </svg>
  );
};

export default ExtensionIcon;
