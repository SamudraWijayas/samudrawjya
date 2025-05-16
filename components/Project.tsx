export default function RecentProjects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Online store with advanced features",
      image: "/images/ecommerce.png",
    },
    {
      title: "Corporate Website",
      description: "Professional business presence",
      image: "/images/corporate.png",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application",
      image: "/images/mobile.png",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Recent Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}