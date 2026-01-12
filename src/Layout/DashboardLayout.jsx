import { Link, Outlet, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FiHome, FiMenu } from "react-icons/fi";
import { FaBook, FaHeartPulse, FaJediOrder, FaRegCircleUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { SiWikibooks } from "react-icons/si";
import { BsBorderStyle } from "react-icons/bs";
import UseAuth from "../components/Hooks/UseAuth";
import useRole from "../components/Hooks/useRole";

const DashboardLayout = () => {
    const { pathname } = useLocation();
    const { logoutUserFunc, loading } = UseAuth();
    const navigate = useNavigate();
    const [role, isRoleLoading] = useRole();

    const isActive = (path) =>
        pathname === path
            ? "bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white font-semibold"
            : "hover:bg-purple-100 dark:hover:bg-gray-700";

    const handleLogout = async () => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
        });
        if (!confirm.isConfirmed) return;
        try {
            await logoutUserFunc();
            Swal.fire({
                title: "Logout Successful",
                text: "You have been logged out",
                icon: "success",
                confirmButtonColor: "#22c55e",
            });
            navigate("/");
        } catch (error) {
            Swal.fire({
                title: "Logout Failed",
                text: error.message || "Something went wrong",
                icon: "error",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    if (loading || isRoleLoading) {
        // return <div className="flex justify-center items-center min-h-screen font-bold">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-purple-50 dark:bg-gray-900 dark:text-white">
            <div className="drawer lg:drawer-open">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col">
                    <nav className="navbar shadow-md px-4 flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white ">
                        <label htmlFor="drawer-toggle" className="btn btn-ghost lg:hidden">
                            <FiMenu className="text-xl" />
                        </label>
                        <h2 className="text-2xl font-bold text-purple-600">
                            <Link to="/">Book Courier</Link>
                        </h2>
                    </nav>
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side">
                    <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
                    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md min-h-full p-4 flex flex-col">
                        <ul className="menu text-base flex-1 dark:text-gray-200">
                            <div className="min-h-[85vh]">
                                <li>
                                    <Link to="/" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/")}`}>
                                        <FiHome className="text-lg" />
                                        <span>Home</span>
                                    </Link>
                                </li>

                                {role === "customer" && (
                                    <>
                                        <li>
                                            <Link to="/dashboard/my-orders" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/my-orders")}`}>
                                                <FaJediOrder className="text-lg" />
                                                <span>My Orders</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/invoices" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/invoices")}`}>
                                                <LiaFileInvoiceSolid className="text-lg" />
                                                <span>Invoices</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/wish-list" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/wish-list")}`}>
                                                <FaHeartPulse className="text-lg" />
                                                <span>Wish List</span>
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {role === "librarian" && (
                                    <>
                                        <li>
                                            <Link to="/dashboard/add-books" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/add-books")}`}>
                                                <FaBook className="text-lg" />
                                                <span>Add Book</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/my-books" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/my-books")}`}>
                                                <SiWikibooks className="text-lg" />
                                                <span>My Books</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/orders" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/orders")}`}>
                                                <BsBorderStyle className="text-lg" />
                                                <span>Orders</span>
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {role === "admin" && (
                                    <>
                                        <li>
                                            <Link to="/dashboard/all-user" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/all-user")}`}>
                                                <GrUserManager className="text-lg" />
                                                <span>All User</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/manage-book" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/manage-book")}`}>
                                                <FaBook className="text-lg" />
                                                <span>Manage Book</span>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </div>
r
                            <li>
                                <Link to="/dashboard/profile" className={`flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive("/dashboard/profile")}`}>
                                    <FaRegCircleUser className="text-lg" />
                                    <span>Profile</span>
                                </Link>
                            </li>

                            <li>
                                <button onClick={handleLogout} className="flex items-center text-purple-600 gap-3 py-2 px-3 rounded-lg hover:bg-purple-200 dark:hover:bg-red-600 dark:text-white transition">
                                    <IoMdLogOut className="text-lg" />
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;