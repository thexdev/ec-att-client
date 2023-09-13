import { Outlet } from "react-router-dom";

function Layout() {
    return <div className="bg-slate-200 min-h-screen flex flex-row justify-center items-center">
        <div className="mx-auto max-w-4xl">
            <Outlet />
        </div>
    </div>
}

export default Layout;