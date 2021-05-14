import DetailProduct from "../../components/detail";
import Layout from "../../layout/Layout";
import useSWR from 'swr'

export default function Index() {
  return(
    <Layout>
        <DetailProduct/>
    </Layout>
  );
}
