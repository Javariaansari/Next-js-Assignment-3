const HeroSection = () => {
    return (
      <section className="bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-pixel-rain-background_23-2148384633.jpg?t=st=1729879320~exp=1729882920~hmac=4fd6cbe5ffbd3cb2e024faeeb708b6d560d4ca852665d05e831ac3ef6d9b7518&w=1060')" }}>

        <div className="text-center">
          <h1 className="text-5xl font-sans mb-4">I'm Javaria</h1>
          <h1 className="text-5xl font-sans mb-4">Full Stack Developer</h1>
          <a
          href="#projects"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 mt-8 inline-block"
        >
          See My Work
        </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;