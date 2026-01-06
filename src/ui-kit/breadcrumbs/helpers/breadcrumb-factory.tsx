import composeClassName from "@helpers/compose-class-name";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "../interfaces/breadcrumb-interface";

export const breadcrumbFactory = ({
  breadcrumb,
  isFirst = false,
  isLast = false,
}: {
  breadcrumb: Breadcrumb;
  isFirst?: boolean;
  isLast?: boolean;
}) => {
  return (
    <Link
      className={composeClassName("breadcrumb", isLast && "disabled")}
      href={breadcrumb.redirectTo}
      aria-disabled={isLast}
    >
      {isFirst && (
        <Image
          className="breadcrumb-arrow-icon"
          src="/icons/home.svg"
          width={16}
          height={16}
          alt="Дом"
        />
      )}
      <span className="breadcrumb-label">{breadcrumb.label}</span>
      {!isLast && (
        <Image
          className="breadcrumb-arrow-icon"
          src="/icons/narrow-arrow-right.svg"
          width={24}
          height={24}
          alt="Стрелка"
        />
      )}
    </Link>
  );
};
