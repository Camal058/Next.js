export default function SmallIdea() {
    return (<section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-12 text-white m-12">
        <div className="flex flex-col justify-center items-start space-y-4 pl-12 pr-12 bg-[#2A254B]">
            <h2 className="text-2xl md:text-4xl font-semibold text-white">It started with a small idea</h2>
            <p className="text-sm md:text-base text-white">
                A global brand with local beginnings, our story began in a small studio in South London
                in early 2014.
            </p>
            <button className="px-6 py-2 bg-gray-500 text-white mt-12 bg-[#F9F9F926] hover:bg-[#F9F9F934]">
                View collection
            </button>
        </div>
        <div>
            <img
                src="../Image Block.png"
                alt="Decorative"
                className="w-full h-full object-cover rounded"
            />
        </div>
    </section>)
}