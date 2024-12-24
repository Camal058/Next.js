export default function ProductGallery() {
  const products = [
    { name: 'The Dandy chair', price: '£250', image: '../Parent3.png' },
    { name: 'Rustic Vase Set', price: '£155', image: '../Parent2.png' },
    { name: 'The Silky Vase', price: '£125', image: '../SkillyWaze.png' },
    { name: 'The Lucy Lamp', price: '£399', image: '../Parent.png' },
  ];

  return (
    <section className="px-6 py-12 m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(({ name, price, image }) => (
          <div key={name} className="text-center text-left">
            <img src={image} alt={name} className="w-full mb-4" />
            <h3 className="text-lg font-medium text-left">{name}</h3>
            <p className="text-sm text-gray-600 text-left">{price}</p>
          </div>
        ))}
      </div>

      <button className="mt-14 mx-auto block px-6 py-2 bg-gray-100 font-normal text-violette hover:bg-gray-200">
        View Collection
      </button>
    </section>

  );
}
