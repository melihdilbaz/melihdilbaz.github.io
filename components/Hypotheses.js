export function Hypotheses() {
    return `
      <section id="hypotheses" class="container mx-auto px-6 py-16 bg-gradient-to-r from-indigo-50 to-purple-100 rounded-lg shadow-xl">
        <h2 class="text-5xl font-extrabold text-center text-purple-700 mb-10">
          Hypothesis
        </h2>
        
        <div class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <!-- Null Hypothesis -->
          <div class="mb-8">
            <h3 class="text-3xl font-bold text-indigo-600 mb-4">
              Null Hypothesis (H₀)
            </h3>
            <p class="text-lg text-gray-700 leading-relaxed">
              As a student at Sabancı University, in high-inflation conditions, there is <span class="font-semibold text-indigo-600">no significant shift</span> in my spending habits from discretionary to essential categories.
            </p>
          </div>
  
          <!-- Alternative Hypothesis -->
          <div>
            <h3 class="text-3xl font-bold text-purple-600 mb-4">
              Alternative Hypothesis (H₁)
            </h3>
            <p class="text-lg text-gray-700 leading-relaxed">
              As a student at Sabancı University, in high-inflation conditions, there is a <span class="font-semibold text-purple-600">significant shift</span> in my spending habits from discretionary to essential categories.
            </p>
          </div>
        </div>
  
        <!-- Decorative Design Elements -->
        <div class="mt-12 flex justify-center">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full animate-bounce"></div>
          <div class="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full animate-bounce mx-4"></div>
          <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full animate-bounce"></div>
        </div>
      </section>
    `;
  }
  