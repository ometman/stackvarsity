// dashboard/stackoffice.tsx

export function AdminDashboard() {
  return (
    <section>
      <h3 className="text-2xl text-gray-700 font-bold mb-4">Admin Controls</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Manage Courses</h4>
          <p className="text-gray-500">Add, update, or remove courses from the platform.</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Manage Students</h4>
          <p className="text-gray-500">View and manage registered students.</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h4 className="text-lg font-semibold">View Reports</h4>
          <p className="text-gray-500">Generate detailed performance and activity reports.</p>
        </div>
      </div>
    </section>
  );
}
