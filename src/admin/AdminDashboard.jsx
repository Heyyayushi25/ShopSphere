function AdminDashboard() {
  const cards = [
    {
      title: "Total Products",
      value: "120",
    },
    {
      title: "Total Orders",
      value: "45",
    },
    {
      title: "Customers",
      value: "80",
    },
    {
      title: "Revenue",
      value: "₹1,25,000",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">{card.title}</h2>

            <p className="text-3xl font-bold mt-3">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
