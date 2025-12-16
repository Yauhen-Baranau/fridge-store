import ServicePageClientComponent from "@ui-kit/service-page-component/service/service-page-client-component";

export default async function ServicePage({
  params
}: {
  params: Promise<{ serviceId: string }>
}) {
  const serviceId = (await params).serviceId;
  return <ServicePageClientComponent serviceId={serviceId} />
}

export async function generateStaticParams() {
  return [
    { categoryId: '1', subcategoryId: '1', serviceId: '1', },
  ];
}