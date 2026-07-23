import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">ShopSphere Admin</h1>

        <nav className="space-y-4">
          <Link to="/admin" className="block hover:text-blue-400">
            Dashboard
          </Link>

          <Link to="/admin/products" className="block hover:text-blue-400">
            Products
          </Link>

          <Link to="/admin/orders" className="block hover:text-blue-400">
            Orders
          </Link>

          <Link to="/admin/customers" className="block hover:text-blue-400">
            Customers
          </Link>

          <Link to="/admin/add-product" className="block hover:text-blue-400">
            Add Product
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
