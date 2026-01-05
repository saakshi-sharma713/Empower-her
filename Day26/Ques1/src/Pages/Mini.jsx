const Mini = () => {
  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="bg-teal-800 text-white flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold">Logo</h1>
        <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-0">
          <a className="hover:text-teal-200">Home</a>
          <a className="hover:text-teal-200">Features</a>
          <a className="hover:text-teal-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 p-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">Welcome to Our Site</h2>
          <p className="text-gray-600">
            Simple responsive layout using Tailwind CSS.
          </p>
        </div>
        <img
          className="md:w-1/2 rounded-xl"
         src="https://th.bing.com/th/id/OIP.B48GIfsNVKZyQrnMorCipwHaFj?w=210&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt="hero"
        />
      </section>

      {/* Features Section */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-5 rounded-xl shadow">Feature 1</div>
          <div className="bg-gray-100 p-5 rounded-xl shadow">Feature 2</div>
          <div className="bg-gray-100 p-5 rounded-xl shadow">Feature 3</div>
        </div>
      </section>

      {/* Table Section */}
      <section className="p-8 overflow-x-auto">
        <table className="border w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-100 hover:bg-blue-100">
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">A</td>
              <td className="border px-3 py-2">Done</td>
            </tr>
            <tr className="odd:bg-gray-100 hover:bg-blue-100">
              <td className="border px-3 py-2">2</td>
              <td className="border px-3 py-2">B</td>
              <td className="border px-3 py-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Form */}
      <section className="p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <input
          className="w-full mb-3 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500"
          placeholder="Name"
        />
        <input
          className="w-full mb-3 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500"
          placeholder="Email"
        />
        <button className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700">
          Submit
        </button>
      </section>

    </div>
  );
};

export default Mini;
