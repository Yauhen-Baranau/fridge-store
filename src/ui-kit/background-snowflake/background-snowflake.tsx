import Image from "@ui-kit/static-image/static-image";
import styles from "./background-snowflake.module.scss";
import composeClassName from "@helpers/compose-class-name";
import { colorToCssFilterMap } from "./constants/color-to-css-filter-map";
import { BackgroundSnowflakeParams } from "./interfaces/background-snowflake-params";

export default function BackgroundSnowflake({
  width,
  height,
  rotation,
  top,
  right,
  bottom,
  left,
  color,
  opacity,
  zIndex,
  customClass,
}: BackgroundSnowflakeParams) {
  return (
    <Image
      className={composeClassName(styles.snowflake, customClass)}
      src="/snowflake.webp"
      width={width}
      height={height}
      alt="Снежинка"
      style={{
        top:
          top !== undefined && !isNaN(top) ? `${top - height / 2}px` : "unset",
        right:
          right !== undefined && !isNaN(right)
            ? `${right - width / 2}px`
            : "unset",
        bottom:
          bottom !== undefined && !isNaN(bottom)
            ? `${bottom - height / 2}px`
            : "unset",
        left:
          left !== undefined && !isNaN(left)
            ? `${left - width / 2}px`
            : "unset",
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        filter: color && colorToCssFilterMap.get(color),
        opacity,
        zIndex,
      }}
    />
  );
}
