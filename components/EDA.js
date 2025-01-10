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
          <h2 class="text-5xl font-extrabold text-center text-gray-800 mb-12">
            Explore Global Properties
          </h2>
          <p class="text-center text-lg text-gray-700 mb-12">
            Analyzing spending trends, distributions, and the relationship between total spending and discretionary shares across terms.
          </p>

          <!-- Chart: Semester-Based Relationship -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Semester-Based Spending Trends</h3>
            <p class="text-gray-700 mb-4">
              Using data from <strong>final_categorized_merged.csv</strong>, the chart below visualizes the relationship between total spending and discretionary share for all five semesters. Each day is represented by a colored circle, where:
            </p>
            <ul class="list-disc pl-6 text-gray-700 mb-4">
              <li>The size of the circle indicates the ratio of discretionary spending to the total spending for that day.</li>
              <li>The colors represent different semesters, highlighting patterns specific to each term.</li>
            </ul>
            <img src="./images/comp3img1.png" alt="Semester Spending Trends" class="rounded-lg shadow-md">
            <p class="text-gray-700 mt-4">
              <strong>Findings:</strong> Spending volumes increased over time, with the center of masses moving upward. Spring semesters (blue and yellow) show clustering at the bottom during April, likely due to lower personal spending during spring break.
            </p>
          </div>

          <!-- Histogram with Statistical Highlights -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Histogram with Statistical Highlights</h3>
            <p class="text-gray-700 mb-4">
              The histogram below shows the distribution of total spending across terms, highlighting statistical insights:
            </p>
            <img src="./images/comp3img2.png" alt="Histogram of Spending" class="rounded-lg shadow-md mb-4">
            <p class="text-gray-700 mb-4">
              The right-skewed distribution indicates occasional high-expenditure days (outliers), likely due to discretionary splurges or essential payments like tuition fees or travel.
            </p>
            <img src="./images/comp3img3.png" alt="Boxplot of Spending" class="rounded-lg shadow-md">
            <p class="text-gray-700 mt-4">
              <strong>Findings:</strong> 
              - The interquartile range is wide, suggesting moderate spending variability with some significant outliers. 
              - The median value of <strong>500.00</strong> is close to the mean, showing a balanced distribution despite a slight right skew. 
              - Standard deviation (<strong>420.56</strong>) indicates substantial variability in daily spending.
            </p>
          </div>

          <!-- Spending Variability -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Spending Variability Across Terms</h3>
            <img src="./images/comp3img4.png" alt="Spending Variability" class="rounded-lg shadow-md mb-4">
            <p class="text-gray-700 mb-4">
              <strong>Key Insights:</strong>
              - The interquartile range is the widest among analyzed terms, with whiskers extending further before reaching outliers. 
              - The growing variability suggests less predictable spending patterns over time.
            </p>
          </div>

          <!-- Heatmaps -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Heatmaps: Volume vs. Discretionary Share</h3>
            <img src="./images/comp3img6.png" alt="Heatmap 1" class="rounded-lg shadow-md mb-4">
            <img src="./images/comp3img7.png" alt="Heatmap 2" class="rounded-lg shadow-md mb-4">
            <img src="./images/comp3img8.png" alt="Heatmap 3" class="rounded-lg shadow-md">
            <p class="text-gray-700 mt-4">
              These heatmaps illustrate the relationship between total spending volume and discretionary share across terms. High spending days are primarily essential-heavy, while discretionary-heavy days remain limited in total spending.
            </p>
          </div>

          <!-- Spending Trends and Patterns -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Spending Trends and Patterns</h3>
            <p class="text-gray-700 mb-4">
              Total spending has progressively increased over terms, reflecting inflationary impacts and evolving financial behavior. Key trends include:
            </p>
            <ul class="list-disc pl-6 text-gray-700 mb-4">
              <li>Higher spending days are increasingly frequent, driven primarily by essential expenditures.</li>
              <li>Discretionary-heavy days are associated with smaller total spending amounts, suggesting careful budgeting.</li>
              <li>The increasing variability in spending highlights the influence of inflation and changing priorities.</li>
            </ul>
            <p class="text-gray-700">
              Despite the rise in total spending, a balance between discretionary and essential expenditures has been maintained, indicating adaptive financial management in response to economic challenges.
            </p>
          </div>
        </div>
        
        <!-- Component 4 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          
          <!-- Component 4: Explore Group Properties -->
        </div>
      </div>
    </section>
  `;
}
