import HomeIndex from "../components/home/index";
import Layout from "../layout/Layout";
import useSWR from 'swr'
import AddProduct from "../components/add";

export default function Index() {
  return(
    <Layout>
      <AddProduct/>
    </Layout>
  );
}

