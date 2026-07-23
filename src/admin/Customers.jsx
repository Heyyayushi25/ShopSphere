function Customers() {
  const customers = [
    {
      id: 1,
      name: "Ayushi Srivastava",
      email: "ayushi@gmail.com",
      orders: 5,
      spent: "₹18,500",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      orders: 2,
      spent: "₹82,000",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya@gmail.com",
      orders: 1,
      spent: "₹24,999",
      status: "Inactive",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Customers</h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Orders</th>
              <th className="p-4">Total Spent</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b text-center hover:bg-gray-50"
              >
                <td className="p-4">{customer.id}</td>
                <td className="p-4 font-semibold">{customer.name}</td>
                <td className="p-4">{customer.email}</td>
                <td className="p-4">{customer.orders}</td>
                <td className="p-4 font-semibold">{customer.spent}</td>

                <td className="p-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
