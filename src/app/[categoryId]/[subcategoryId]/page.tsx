import SubcategoryPageClientComponent from '@ui-kit/service-page-component/subcategory/subcategory-page-client-component';

export default async function SubcategoryPage({
  params
}: {
  params: Promise<{ subcategoryId: string }>
}) {
  const subcategoryId = (await params).subcategoryId;
  return <SubcategoryPageClientComponent subcategoryId={subcategoryId} />
}

export async function generateStaticParams() {
  return [
    { categoryId: '1', subcategoryId: '1' },
    { categoryId: '1', subcategoryId: '2' },
    { categoryId: '1', subcategoryId: '3' },
    { categoryId: '1', subcategoryId: '4' },
    { categoryId: '1', subcategoryId: '5' },
    { categoryId: '1', subcategoryId: '6' },
  ];
}