import Image from "next/image";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-4 ">
      <div className="flex col-span-4 gap-4 p-4 border border-gray-200 shadow-lg md:col-span-2 rounded-xl">
        <Image
          src="/kiosma.jpeg"
          alt="logo"
          width={170}
          height={20}
          className="p-2rounded-s-lg grayscale rounded-xl"
        />
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <p className="mb-2 text-gray-600 font-roboto dark:text-gray-400">
            Desarrollador Frontend
          </p>
          <h1 className="font-semibold text-gray-800 md:text-xl dark:text-white">
            Especialista en React
            <br />y Experiencias UX
          </h1>
        </div>
      </div>
    </div>
  );
}
