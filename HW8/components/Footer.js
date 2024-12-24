export default function Footer() {
    return (<footer className="px-6 py-12 bg-[#2A254B]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
                <h4 className="font-semibold mb-4">Menu</h4>
                <ul className="space-y-2 text-sm">
                    <li>New arrivals</li>
                    <li>Best sellers</li>
                    <li>Recently viewed</li>
                    <li>Popular this week</li>
                    <li>All products</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm">
                    <li>Crockery</li>
                    <li>Furniture</li>
                    <li>Homeware</li>
                    <li>Plant pots</li>
                    <li>Chairs</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Our company</h4>
                <ul className="space-y-2 text-sm">
                    <li>About us</li>
                    <li>Vacancies</li>
                    <li>Contact us</li>
                    <li>Privacy</li>
                    <li>Returns policy</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Join our mailing list</h4>
                <div className="flex space-x-2">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="px-4 py-2 rounded-l bg-white text-black w-full"
                    />
                    <button className="px-6 py-2 bg-gray-200 text-black rounded-r hover:bg-gray-300">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
        <div className="mt-8 text-center text-sm">
            Copyright © 2022 Avion LTD
        </div>
    </footer>)
}