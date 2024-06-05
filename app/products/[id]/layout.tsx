"use client";
function gatrandom(count: number) {
  return Math.floor(Math.random() * count);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = gatrandom(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <>
      {children}
      <h1>Features products</h1>
    </>
  );
}
