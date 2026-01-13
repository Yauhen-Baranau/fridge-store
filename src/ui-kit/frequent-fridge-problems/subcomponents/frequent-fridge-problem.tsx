import { Routes } from "@constants/routes";
import styles from './frequent-fridge-problem.module.scss';
import Link from "next/link";
import Button from "@ui-kit/button/button";
import { useHrefHelper } from "@contexts/href/href-context";

export default function FrequentFridgeProblem({
  label,
  redirectTo,
}: {
  label: string,
  redirectTo: Routes,
}) {
  const { getPageHref } = useHrefHelper();

  return <div className={styles["frequent-problem"]}>
    <span className={styles["frequent-problem-label"]}>{label}</span>
    <Link href={getPageHref(redirectTo)}>
      <Button
        customClass={styles["frequent-problem-button"]}
        icon={{
          path: "/icons/thick-arrow-up.svg",
          width: 24,
          height: 24,
        }}
      />
    </Link>
  </div>
}