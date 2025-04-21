import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="flex flex-row justify-between items-start mx-auto w-full max-w-none h-screen max-md:flex-col max-md:items-center max-md:max-w-[991px] max-sm:p-5 max-sm:max-w-screen-sm">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <LoginForm />

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2428a95d4ad7399d7083063076cdf0634d9728ec?placeholderIfAbsent=true"
        className="mx-0 mt-48 mr-32 mb-0 ml-auto shadow-sm h-[597px] w-[747px] max-md:mx-0 max-md:my-5 max-sm:mx-0 max-sm:my-5 max-sm:w-[90%]"
        alt="Illustration"
      />
    </main>
  );
};

export default LoginPage;
