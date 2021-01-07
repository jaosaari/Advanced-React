import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p>Hey!</p>
      <Link href="/sell">
        <a>sell"</a>
      </Link>
    </div>
  );
};

export default Home;
