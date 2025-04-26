import { createClient } from "@/utils/supabase/server-props";
import { GetServerSidePropsContext } from "next";
import { CreateCategory } from "@/components/CreateCategory";

export default function CreateCategoryPage() {
  return <CreateCategory />;
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
    props: {
      user: data.user,
    },
  };
}
