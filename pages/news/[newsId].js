import { useRouter } from 'next/router';

export default function SingleNews() {
  const router = useRouter();

  console.log('router object', router.query.newsId);

  // send a request to the backend API
  // to fetch the news item here

  return <div>single news</div>;
}
