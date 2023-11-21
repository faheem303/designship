import React from "react";

function SalaryCard({ cardClass, src, amount, icon,imgClass }) {
  return (
    <div className={cardClass}>
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-[25px] justify-between">
        <img
          className={imgClass}
          src={src}
          alt=""
        />
        <div className="flex items-center gap-[5px]">
          <span className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px]">{amount}</span>
          <i className="text-[20px]">{icon}</i>
        </div>
      </div>
    </div>
  );
}

export default SalaryCard;
