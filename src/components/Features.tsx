import { Check } from "lucide-react";

const features = [
  {
    title: "Advanced Detection",
    description: "State-of-the-art algorithms to detect even the most subtle similarities",
  },
  {
    title: "Multiple Languages",
    description: "Support for over 100+ languages and various document formats",
  },
  {
    title: "Real-time Results",
    description: "Get instant feedback on your document's originality",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose PlagiarismGuard?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;