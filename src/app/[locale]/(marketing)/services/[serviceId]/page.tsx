type ServicePageProps = {
  params: { locale: string; serviceId: string };
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = params;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>
        Service Details for:
        {serviceId}
      </h1>
      {/* Add your service info here */}
    </div>
  );
}
