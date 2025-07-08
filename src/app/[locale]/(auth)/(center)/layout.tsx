// Removed next-intl imports and usage for single-language setup

export default async function CenteredLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}
