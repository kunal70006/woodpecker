import Head from "next/head";

export default function VerifyEmail() {
  return (
    <>
      <Head>
        <title>Verify Email | Woodpecker</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-dark-brown">
              Email Verification
            </h2>
            <p className="mt-2 text-sm text-light-brown">
              We&apos;ve sent you an email to verify your account. Please check
              your inbox.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
