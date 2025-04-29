import { GetServerSidePropsContext } from "next";
import { createClient } from "@/utils/supabase/server-props";
import { Product } from "@/components/Product";

export default function ProductPage() {
  return <Product />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context);

  const { data, error } = await supabase.auth.getUser();

  if (error || !data) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
