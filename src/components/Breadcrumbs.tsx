import Link from "next/link";
import React from "react";
import { TbSlash } from "react-icons/tb";

interface BreadcrumbsProps {
  currentPage: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage }) => {
  return (
    <div className="relative pt-[120px]">
      <img
        src="/images/breadcrumb.jpg"
        alt="eclat-banner"
        className="h-[270px] w-full object-cover"
      />
      <div className="flex absolute items-center top-[60%] text-white left-[10%] md:left-[30%] xl:left-[46%] gap-2">
        <Link href="/" className="font-medium text-[18px]">
          Home
        </Link>
        <TbSlash size={30} />
        <h1 className="font-medium text-[18px] text-blue-400">{currentPage}</h1>
      </div>
    </div>
  );
};

export default Breadcrumbs;
