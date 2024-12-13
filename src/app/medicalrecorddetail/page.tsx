export default function MedicalRecord() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-blue-900 mb-6">Medical Record Detail</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Record Information */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Record ID</label>
                        <p className="text-gray-900 bg-gray-100 p-2 rounded">#12345</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <p className="text-gray-900 bg-gray-100 p-2 rounded">2024-12-03</p>
                    </div>

                    {/* Patient Information */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                        <p className="text-gray-900 bg-gray-100 p-2 rounded">John Doe</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
                        <p className="text-gray-900 bg-gray-100 p-2 rounded">Dr. Smith</p>
                    </div>
                </div>

                {/* Symptoms and Diagnosis */}
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">Symptoms</label>
                    <p className="text-gray-900 bg-gray-100 p-2 rounded">Fever, Cough</p>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Disease</label>
                    <p className="text-gray-900 bg-gray-100 p-2 rounded">Common Cold</p>
                </div>

                {/* Medication */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">Medications</h2>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-blue-100 text-gray-800 font-medium">
                                <tr>
                                    <th className="px-4 py-2">Medicine</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Paracetamol</td>
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">$5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Cough Syrup</td>
                                    <td className="px-4 py-2">1</td>
                                    <td className="px-4 py-2">$10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Total Price */}
                <div className="mt-6 flex justify-end">
                    <p className="text-lg font-semibold text-gray-800">
                        Total: <span className="text-green-600">$15</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
