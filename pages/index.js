import Head from "next/head";

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg-h-auto">
        <img
          className="rounded-tr-xl rounded-tl-xl h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-xl lg:rounded-tr-none"
          src="/images/drawers.jpg"
          alt="green drawers"
        />
        <div className="bg-white p-8 rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-tr-xl">
          <h2 className="text-gray-700 text-2xl font-semibold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="mt-4 text-gray-500">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <img
                className="rounded-full h-10 w-10 mr-4"
                src="/images/avatar-michelle.jpg"
                alt="michelle"
              />
              <div>
                <p className="text-gray-700 font-semibold">Michelle Appleton</p>
                <p className="text-gray-500">28 Jun 2020</p>
              </div>
            </div>

            <div className="ml-auto">
              <img
                className="object-none object-center bg-gray-200 w-10 h-10 rounded-full cursor-pointer"
                src="/images/icon-share.svg"
                alt="share"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
