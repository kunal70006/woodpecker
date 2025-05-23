import { Dashboard } from "@/components/dashboard";
import { createClient } from "@/utils/supabase/server-props";
import { GetServerSidePropsContext } from "next";

export default function Admin() {
  return <Dashboard />;
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
