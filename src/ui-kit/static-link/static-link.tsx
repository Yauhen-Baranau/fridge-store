import { Children, isValidElement, type AnchorHTMLAttributes, type ReactNode } from "react";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

const normalizeInternalHref = (href: string) => {
  if (!href.startsWith("/")) {
    return href;
  }

  return href.replace(/\/{2,}/g, "/");
};

const getNodeText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join(" ").trim();
  }

  if (isValidElement(node)) {
    const props = (node.props ?? {}) as { children?: ReactNode; text?: string };
    const childrenText = getNodeText(props.children ?? "");
    return [props.text, childrenText].filter(Boolean).join(" ").trim();
  }

  return "";
};

export default function StaticLink({ href, children, title, ...props }: StaticLinkProps) {
  const normalizedHref = normalizeInternalHref(href);
  const textFromChildren = getNodeText(Children.toArray(children));
  const resolvedTitle = title ?? (textFromChildren || (typeof props["aria-label"] === "string" ? props["aria-label"] : normalizedHref));

  return (
    <a href={normalizedHref} title={resolvedTitle} {...props}>
      {children}
    </a>
  );
}
