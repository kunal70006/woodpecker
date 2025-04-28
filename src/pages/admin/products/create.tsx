import { createClient } from "@/utils/supabase/server-props";
import { GetServerSidePropsContext } from "next";
import { CreateProduct } from "@/components/CreateProduct";

export default function CreateProductPage() {
  return <CreateProduct />;
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
