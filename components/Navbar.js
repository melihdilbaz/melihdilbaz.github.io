export function Navbar() {
    return `
      <nav class="bg-white shadow">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-blue-600">DataSciencePro</a>
          <div>
            <a href="#introduction" class="text-gray-600 hover:text-blue-600 mx-2">Introduction</a>
            <a href="#hypothesis" class="text-gray-600 hover:text-blue-600 mx-2">Hypothesis Testing</a>
            <a href="#graphs" class="text-gray-600 hover:text-blue-600 mx-2">Interesting Graphs</a>
            <a href="#network" class="text-gray-600 hover:text-blue-600 mx-2">Network Graphs</a>
            <a href="#machine-learning" class="text-gray-600 hover:text-blue-600 mx-2">Machine Learning</a>
            <a href="#conclusion" class="text-gray-600 hover:text-blue-600 mx-2">Conclusion</a>
          </div>
        </div>
      </nav>
    `;
  }
  