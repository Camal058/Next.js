export default function JoinClub() {
    return (<section className="px-6 py-16 bg-[url('../public/Join.png')] bg-cover bg-center from-orange-500 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl text-white font-light">Join the club and get the benefits</h2>
            <p className="text-sm md:text-base text-white">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
              stores and more
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg"><img src="../Checkmark--filled.png"/></span>
                <span className="text-white">Exclusive offers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg"><img src="../Checkmark--filled.png"/></span>
                <span className="text-white">Free events</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg"><img src="../Checkmark--filled.png"/></span>
                <span className="text-white">Large discounts</span>
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-8 py-3 bg-white text-black w-full max-w-md"
              />
              <button className="px-8 bg-[#2A254B] text-white hover:bg-purple-700">
                Sign up
              </button>
            </div>
          </div>
        </section>)
}