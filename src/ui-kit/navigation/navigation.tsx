"use client";

import composeClassName from "@src/helpers/compose-class-name";
import "./navigation.scss";
import List from "@ui-kit/list/list";
import Link from "@ui-kit/static-link/static-link";
import { useHrefHelper } from "@contexts/href/href-context";
import useResponsive from "@hooks/use-responsive";
import { useCallback, useMemo } from "react";
import { NavigationConfig } from "./types/navigation-config";
import { ListItem } from "@ui-kit/list/list-item-interface";
import { navigationConfig } from "./constants/navigation-config";

export default function Navigation({
  customClass,
  withContacts = true,
}: {
  customClass?: string;
  withContacts?: boolean;
}) {
  const { getPageHref, getCategoryHref, getSubcategoryHref } = useHrefHelper();
  const { isDesktop } = useResponsive();

  const getListItemsFromNavigationConfig = useCallback((navigationConfig: NavigationConfig): Array<ListItem> => {
    return navigationConfig.map(item => {
      const listItem: ListItem = {
        content: <></>,
        icon: undefined,
      }

      if (!!item.route) {
        listItem.content = <Link href={getPageHref(item.route)}>{item.label}</Link>
      } else if (!!item.categoryId) {
        listItem.content = <Link href={getCategoryHref(item.categoryId)} onClick={e => e.stopPropagation()}>{item.label}</Link>;
        listItem.icon = {
          path: "/icons/chevron-down.svg",
          width: 10,
          height: 7,
          position: "after",
        };
      } else if (!!item.subcategoryId) {
        listItem.content = <Link href={getSubcategoryHref(item.subcategoryId)}>{item.label}</Link>;
        listItem.icon = {
          path: "/icons/square-small.svg",
          width: 14,
          height: 14,
        };
      }

      if (item.subItems) {
        listItem.subItems = getListItemsFromNavigationConfig(item.subItems);
      }

      return listItem;
    });
  }, [getPageHref, getCategoryHref, getSubcategoryHref]);

  const navConfig = useMemo(() => {
    const config = navigationConfig.slice();
    if (!withContacts) {
      config.pop();
    }
    return config;
  }, [withContacts]);

  return (
    <nav className={composeClassName("nav", customClass)}>
      <List
        customClass="nav-list"
        direction={isDesktop ? "horizontal" : "vertical"}
        nestedItemsStyle={isDesktop ? "popup" : "accordion"}
        items={getListItemsFromNavigationConfig(navConfig)}
      />
    </nav>
  );
}
