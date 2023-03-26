import { Link, Outlet } from "react-router-dom";

const MainHeaderWithAllPages = () => {
    return (
        <div className="w-screen h-screen box-border">
            <header className="w-full pl-60 pr-60 bg-zinc-900 h-16">
                <div className="flex h-full justify-between w-full">
                    <img
                        className="h-full min-w-fit hover:brightness-150"
                        src="https://cdn-icons-png.flaticon.com/512/6533/6533185.png" alt="" />
                    <div className="flex w-3/5 min-w-fit justify-between items-center font-mono text-xl font-bold">
                        <Link to="/" className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-yellow-600 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">Store</Link>
                        <Link to="/add" className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-green-600 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">ItemAddPage</Link>
                        <Link to="/delete" className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-blue-600 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">ItemDeletePage</Link>
                        <Link to="/sale" className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-red-600 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">ItemSalePage</Link>
                        <Link to="/history" className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-orange-600 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">HistoryPage</Link>
                    </div>
                </div>
            </header>
            <div className="height-90 w-full pl-60 pr-60">
                <Outlet />
            </div>
        </div>
    )
}

export default MainHeaderWithAllPages