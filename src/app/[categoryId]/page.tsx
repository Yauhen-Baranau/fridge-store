import CategoryPageClientComponent from "@ui-kit/service-page-component/category/category-page-client-component";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categoryId: 'string' }>
}) {
  const categoryId = (await params).categoryId;
  return <CategoryPageClientComponent categoryId={categoryId} />
}

export async function generateStaticParams() {
  return [
    { categoryId: '1' },
  ];
}