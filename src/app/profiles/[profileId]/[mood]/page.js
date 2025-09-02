async function Mood({ params, searchParams }) {
  console.log({ searchParams });
  const resolvedParams = await params;
  return JSON.stringify(searchParams);
}

export default Mood;
