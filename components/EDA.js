export function EDA() {
  return `
    <section id="eda" class="container mx-auto px-8 py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl">
      <h2 class="text-5xl font-extrabold text-center text-gray-800 mb-12">
        Exploratory Data Analysis
      </h2>
      <p class="text-center text-lg text-gray-700 mb-12">
        Delve into the data to uncover trends, patterns, and insights through these visualizations.
      </p>
      
      <!-- EDA Components Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Component 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Building the DataFrame</h3>
          <p class="text-gray-700 mb-4">
            Motivated by the desire to analyze my spending during active school terms 
            (Fall 2022 to Fall 2024), I collected transaction data from my bank account 
            and organized it into the following fields:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Tarih</strong>: Transaction date</li>
            <li><strong>Tutar</strong>: Transaction amount</li>
            <li><strong>Bakiye</strong>: Account balance after the transaction</li>
            <li><strong>Açıklama</strong>: Description of the transaction</li>
          </ul>
          <p class="text-gray-700 mb-4">
            Each transaction was categorized into essential and discretionary subcategories to explore relationships between them. These subcategories include:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li>Cafeteria food</li>
            <li>Market – grocery</li>
            <li>Education</li>
            <li>Savings</li>
            <li>Entertainment</li>
            <li>Dining out - food</li>
            <li>Dining out - coffee</li>
            <li>Fashion</li>
            <li>Transportation</li>
            <li>Others</li>
          </ul>
          <p class="text-gray-700 mb-4">
            Irregular income was also categorized into:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li>Allowance</li>
            <li>Grant</li>
          </ul>
          <p class="text-gray-700 mb-4">
            Transactions were categorized using keywords in the <strong>Açıklama</strong> 
            column, ensuring accurate classifications. Additionally, cafeteria charge-ups 
            were allocated daily from the transaction date until the next charge-up or until 
            a "Dining out - food" transaction occurred. Realistic spending values were assigned 
            when shares fell short, based on first-hand experience and historical prices.
          </p>
          <p class="text-gray-700">
            Python automation handled most of the categorization, while 10% of the data 
            was manually corrected for accuracy.
          </p>
        </div>

                
      <!-- Component 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Cleaning and Enriching the DataFrame</h3>
          <p class="text-gray-700 mb-4">
            After constructing the initial dataset, the focus shifted to cleaning and enriching the data to extract meaningful insights. This process included categorization, aggregation, and preparation for deeper analysis. Below are the steps and corresponding datasets:
          </p>
          
          <!-- Image 1 -->
          <img src="images/component2Image1.png" alt="Categorized Transactions" class="mb-4 rounded-lg shadow-md">
          <p class="text-gray-700 mb-4">
            <strong>Above:</strong> <em>final_categorized_transactions.csv</em><br>
            • All data points were merged into the respective days they belong to.
          </p>
          
          <!-- Image 2 -->
          <img src="images/component2Image2.png" alt="Categorized by Day of Week" class="mb-4 rounded-lg shadow-md">
          <p class="text-gray-700 mb-4">
            <strong>Above:</strong> <em>final_categorized_dayOfWeek.csv</em><br>
            • A new field mapped each day to its corresponding day of the week.<br>
            • Each day now contains:
            <ul class="list-disc pl-6">
              <li>Total <strong>Tutar</strong> (total spending) for all transactions that day.</li>
              <li>Discretionary share, representing the proportion of discretionary spending over total spending.</li>
            </ul>
          </p>
          
          <!-- Image 3 -->
          <img src="images/component2Image3.png" alt="Merged Dataset" class="mb-4 rounded-lg shadow-md">
          <p class="text-gray-700 mb-4">
            <strong>Above:</strong> <em>final_categorized_merged.csv</em><br>
            This dataset merges all enriched information and forms the basis for further analysis.
          </p>
          
          <p class="text-gray-700 mb-4">
            The final datasets revealed intriguing relationships in my spending history and raised important questions:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li>Can inflation affect the volume of my spending or cause monthly variations?</li>
            <li>How does my spending behavior align with official inflation statistics from TÜİK?</li>
          </ul>
          <p class="text-gray-700 mb-4">
            Using data scraping, I collected annual and monthly inflation rates (TÜFE) from TÜİK's website. By combining this data with my spending history, I aimed to analyze cumulative and monthly inflation trends alongside my financial behavior.
          </p>
          <p class="text-gray-700">
            This project serves as a lens to examine the relationship between economic factors and personal finances, exploring how young individuals adapt—or resist adapting—to economic challenges. Ultimately, I aim to assess whether grants help mitigate the effects of hyper-inflation and enable stability.
          </p>
        </div>



        <!-- Component 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">

          <!-- Component 3: Explore Global Properties -->
        </div>
        
        <!-- Component 4 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          
          <!-- Component 4: Explore Group Properties -->
        </div>
      </div>
    </section>
  `;
}
