export default function Header() {
    return (
        <div>
            <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <button className="text-gray-600"><img src="../Search.png"/>
                </button>
                <h1 className="text-xl font-semibold">Avion</h1>
                <div className="flex gap-4">
                    <button className="text-gray-600"><img src="../Shopping--cart.png"/></button>
                    <button className="text-gray-600"><img src="../User--avatar.png"/></button>
                </div>
            </header>
            <nav className="flex justify-center gap-4 text-gray-500 py-2 text-base font-normal">
                {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item) => (
                    <a key={item} href="#" className="hover:text-black">
                        {item}
                    </a>
                ))}
            </nav>
        </div>
    );
}
