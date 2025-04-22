import { SignupForm } from "./SignupForm";

const SignupPage = () => {
  return (
    <main className="overflow-hidden py-20 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="w-[42%] max-md:ml-0 max-md:w-full">
          <SignupForm />
        </section>

        <section className="ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9ace4a18f3cdcdc10a4128fcc71ddfc39a532ea?placeholderIfAbsent=true"
            alt="Signup illustration"
            className="object-contain self-stretch my-auto w-full aspect-[1.25] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
          />
        </section>
      </div>
    </main>
  );
};

export default SignupPage;
