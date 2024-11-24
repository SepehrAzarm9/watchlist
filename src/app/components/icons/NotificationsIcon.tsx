import { TSVGProps } from "../../types/icons/type";

const NotificationsIcon: React.FC<TSVGProps> = (svgProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <mask
        id="mask0_382_618"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_382_618)">
        <path
          d="M4.16673 15.7211C3.98964 15.7211 3.84121 15.6612 3.72144 15.5414C3.60164 15.4215 3.54175 15.273 3.54175 15.0959C3.54175 14.9187 3.60164 14.7703 3.72144 14.6507C3.84121 14.531 3.98964 14.4712 4.16673 14.4712H5.20841V8.4295C5.20841 7.31946 5.55564 6.32454 6.25008 5.44473C6.94453 4.56492 7.8473 4.00216 8.95841 3.75644V3.17311C8.95841 2.8793 9.05857 2.63224 9.25889 2.43192C9.4592 2.2316 9.70625 2.13144 10.0001 2.13144C10.2939 2.13144 10.5409 2.2316 10.7412 2.43192C10.9415 2.63224 11.0417 2.8793 11.0417 3.17311V3.75644C12.1528 4.00216 13.0556 4.56492 13.75 5.44473C14.4445 6.32454 14.7917 7.31946 14.7917 8.4295V14.4712H15.8334C16.0105 14.4712 16.1589 14.5311 16.2787 14.6509C16.3985 14.7708 16.4584 14.9193 16.4584 15.0964C16.4584 15.2736 16.3985 15.422 16.2787 15.5417C16.1589 15.6613 16.0105 15.7211 15.8334 15.7211H4.16673ZM10.0001 18.1731C9.58981 18.1731 9.23618 18.0272 8.93916 17.7356C8.64216 17.4439 8.49366 17.0876 8.49366 16.6667H11.5065C11.5065 17.0876 11.3606 17.4439 11.069 17.7356C10.7773 18.0272 10.421 18.1731 10.0001 18.1731ZM6.45837 14.4712H13.5417V8.4295C13.5417 7.45553 13.1948 6.62176 12.5009 5.92819C11.807 5.23461 10.9729 4.88781 9.9985 4.88781C9.02411 4.88781 8.19049 5.23461 7.49764 5.92819C6.8048 6.62176 6.45837 7.45553 6.45837 8.4295V14.4712Z"
          fill="#667085"
        />
      </g>
    </svg>
  );
};

export default NotificationsIcon;
