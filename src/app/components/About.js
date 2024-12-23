export default function About() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          I am a mobile developer specializing in Flutter and cross-platform
          apps. Passionate about creating intuitive and efficient solutions for
          real-world problems.
        </p>
        <div className="flex justify-center gap-6">
          <div className="p-4 bg-white shadow-md rounded">
            <img
              src="/flutter.svg"
              alt="Flutter"
              className="h-16 w-16 mx-auto"
            />
            <p className="mt-2 font-medium">Flutter</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded">
            <img
              src="/nextjs.svg"
              alt="Next.js"
              className="h-16 w-16 mx-auto"
            />
            <p className="mt-2 font-medium">Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
