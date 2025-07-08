// Removed next-intl imports and usage for single-language setup

export async function generateMetadata() {
  // Removed next-intl imports and usage for single-language setup

  return {
    title: 'Dashboard',
  };
}

export default function DashboardPage() {
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}
