import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";

const Cigales: VFC<{ name: any }> = ({ name }) => {
  if (!name || name.length === 0) return null;
  return (
    <span>
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.96 4.05411C16.2005 2.98172 16.3317 1.88789 16.3317 0.751159C16.3317 0.343652 15.9819 0.000488281 15.5665 0.000488281C13.7956 0.000488281 12.0902 0.300756 10.4942 0.836949C8.89824 0.300756 7.19293 0.000488281 5.40016 0.000488281C4.9629 0.000488281 4.63495 0.343652 4.63495 0.751159C4.63495 1.88789 4.76613 2.98172 5.00663 4.05411C1.92394 6.84231 0 10.8316 0 15.2498C0 15.4428 0.0874517 15.6359 0.21863 15.786C0.371671 15.9361 0.568438 16.0005 0.765205 16.0005C4.43819 16.0005 7.80509 14.7565 10.4724 12.6546C13.1397 14.7565 16.5066 16.0005 20.1577 16.0005C20.5949 16.0005 20.9229 15.6573 20.9229 15.2498C20.9448 10.8316 19.0208 6.84231 15.96 4.05411ZM14.7575 1.54472C14.7357 2.01657 14.6701 2.48842 14.6045 2.96027C14.0142 2.53132 13.3802 2.14526 12.7243 1.8021C13.3802 1.67341 14.0579 1.58762 14.7575 1.54472ZM6.73381 4.5903C7.84882 3.71094 9.11687 2.98172 10.4942 2.46698C11.8716 2.98172 13.1178 3.71094 14.2328 4.61175C13.5332 6.971 12.2214 9.05143 10.4724 10.7029C8.72334 9.02998 7.41156 6.9281 6.73381 4.5903ZM6.20909 1.54472C6.90871 1.58762 7.58646 1.67341 8.24235 1.8021C7.58646 2.14526 6.95243 2.53132 6.36213 2.96027C6.29654 2.48842 6.23096 2.01657 6.20909 1.54472ZM1.57414 14.4563C1.7709 11.0461 3.21386 7.97904 5.48761 5.70558C6.27468 7.97904 7.60832 9.99513 9.31364 11.6466C7.1492 13.2766 4.48192 14.3061 1.57414 14.4563ZM11.6311 11.6466C13.3364 9.99513 14.6701 7.97904 15.479 5.70558C17.7309 8.00049 19.1739 11.0675 19.3706 14.4563C16.4628 14.3061 13.7956 13.2766 11.6311 11.6466Z"
          fill="#74AA50"
        />
      </svg>
      {RichText.asText(name)}
      <style jsx>{`
        span {
          color: var(--color-secondary);
        }
        svg {
          display: inline-block;
          margin-right: 0.5rem;
          vertical-align: text-top;
        }
      `}</style>
    </span>
  );
};

export default Cigales;