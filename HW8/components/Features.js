export default function Features() {
  const features = [
    {
      icon: <img src="../Delivery.png"/>,
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard',
    },
    {
      icon: <img src="../Checkmark--outline.png"/>,
      title: 'Made by true artisans',
      description: 'Handmade crafted goods made with real passion and craftmanship',
    },
    {
      icon: <img src="../Purchase.png"/>,
      title: 'Unbeatable prices',
      description: 'For our materials and quality you won’t find better prices anywhere',
    },
    {
      icon: <img src="../Sprout.png"/>,
      title: 'Recycled packaging',
      description: 'We use 100% recycled to ensure our footprint is more manageable',
    },
  ];

  return (
    <section className="px-6 py-12 m-12">
      <h2 className="text-2xl font-normal text-center mb-8">What makes our brand different</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="p-12 bg-gray-50 text-left"
          >
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-lg font-normal mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
