import HomeIndex from "../components/home/index";
import Layout from "../layout/Layout";
import useSWR from "swr";

export default function Home() {
  return (
    <Layout>
      <HomeIndex />;
    </Layout>
  );
}
