import { useRouter } from 'next/dist/client/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>POST PAGE with ID: {id}</h1>;
}
