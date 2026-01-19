'use client';

import useResponsive from "@hooks/use-responsive";
import BackgroundSnowflake from "@ui-kit/background-snowflake/background-snowflake";
import { BackgroundSnowflakeParams } from "@ui-kit/background-snowflake/interfaces/background-snowflake-params";

export default function BackgroundSnowflakes({
  snowflakes
}: {
  snowflakes: Array<{
    snowflakeParams: BackgroundSnowflakeParams,
    desktop?: boolean,
    ipad?: boolean,
    mobile?: boolean,
  }>
}) {
  const { isDesktop, isIpad, isMobile } = useResponsive();

  return snowflakes.map(({ snowflakeParams, desktop, ipad, mobile }, index) => {
    const isRendered = desktop && isDesktop
      || ipad && isIpad
      || mobile && isMobile;
    return isRendered && <BackgroundSnowflake key={index} {...snowflakeParams} />;
  });
}