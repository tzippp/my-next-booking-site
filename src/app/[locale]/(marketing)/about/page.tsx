import Image from 'next/image';

export async function generateMetadata() {
  return {
    title: 'About',
    description: 'About page description',
  };
}

export default async function About() {
  return (
    <>
      <p>About paragraph content</p>

      <div className="mt-2 text-center text-sm">
        {`Translation powered by `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://l.crowdin.com/next-js"
        >
          Crowdin
        </a>
      </div>

      <a href="https://l.crowdin.com/next-js">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/crowdin-dark.png"
          alt="Crowdin Translation Management System"
          width={128}
          height={26}
        />
      </a>
    </>
  );
};
