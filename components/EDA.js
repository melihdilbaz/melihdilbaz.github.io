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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style="grid-auto-flow: dense;">
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
          <img src="images/component2Image1.png" alt="Categorized Transactions" class="mb-4 w-64 h-auto rounded-lg shadow-md">
          <p class="text-gray-700 mb-4">
            <strong>Above:</strong> <em>final_categorized_transactions.csv</em><br>
            • All data points were merged into the respective days they belong to.
          </p>
          
          <!-- Image 2 -->
          <img src="images/component2Image2.png" alt="Categorized by Day of Week" class="mb-4 w-64 h-auto rounded-lg shadow-md">
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
            <img src="./images/comp3img4.png" alt="Spending Variability" class="rounded-lg shadow-md mb-4">
            <p class="text-gray-700 mb-4">
              <strong>Key Insights:</strong>
              - The median value of 500.00 is closer to the mean, suggesting a more balanced distribution but still slightly skewed to the right.
              - The standard deviation (420.56) is the highest so far, indicating substantial variability.
              - The interquartile range has grown considerably compared to previous terms, implying a larger spread of typical spending days.
            </p>
            <img src="./images/comp3img3.png" alt="Boxplot of Spending" class="rounded-lg shadow-md">
            <p class="text-gray-700 mt-4">
              <strong>Findings:</strong> 
              The presence of outliers confirms occasional days with extremely high spending compared to the typical pattern.
              - The range between Q1 and Q3 suggests moderate spending variability mostly, but the extended whiskers shows some days significantly deviate from this pattern
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

          <!-- 30-Day Cumulative Spending Histogram -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">30-Day Cumulative Spending Histogram</h3>
            <p class="text-gray-700 mb-4">
              The chart below aggregates spending over 30-day cumulative periods, offering a broader perspective on spending behavior. Key observations include:
            </p>
            <ul class="list-disc pl-6 text-gray-700 mb-4">
              <li>Total spending progressively increases over time, especially in later school terms, reflecting the compounding impact of inflation and changing spending habits.</li>
              <li>Discretionary spending shows substantial variability, while essential spending grows more steadily.</li>
              <li>Peaks in discretionary spending suggest that non-essential purchases are influenced by income timing or other financial factors.</li>
            </ul>
            <img src="./images/comp3img9.png" alt="30-Day Cumulative Spending Histogram" class="rounded-lg shadow-md">
          </div>

          <!-- Inflation Analysis -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Inflation Analysis</h3>
            <p class="text-gray-700 mb-4">
              The first chart below shows the inflation trends in Turkey from 2022 to 2024, based on data scraped from TÜIK’s official website. Two variables are overlaid:
            </p>
            <img src="./images/comp3img10.png" alt="Turkey Inflation" class="rounded-lg shadow-md">
            <ul class="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Red:</strong> Annual inflation rate, calculated based on prices from the same date of the previous year.</li>
              <li><strong>Blue:</strong> Monthly inflation rate, calculated based on price changes from the previous month.</li>
            </ul>
            <p class="text-gray-700 mb-4">
              The second chart shows the cumulative 30-day spending histogram. Changes in spending volume are computed monthly, similar to the logic of inflation rate calculations. Positive or negative lines indicate the type of change.
            </p>
            <img src="./images/comp3img11.png" alt="Cumulative Spending Chagnes" class="rounded-lg shadow-md mb-4">
            <p class="text-gray-700 mt-4">
              <strong>Key Findings:</strong>
              <ul class="list-disc pl-6 text-gray-700 mb-4">
                <li>Spending volumes closely track inflation rates, particularly during peaks in January 2023, July 2023, and January 2024.</li>
                <li>High inflation periods caused noticeable shifts in spending, with essentials dominating during peaks and discretionary spending returning as inflation stabilized.</li>
                <li>Inflation seems to have significantly influenced total spending volumes and monthly changes, likely due to parallel increases in income.</li>
                <li>There is no concrete evidence of a drastic change in the share of discretionary spending, which challenges the hypothesis.</li>
                <li>Spending peaks tied to specific dates (e.g., school start/end, holidays) suggest independent factors influencing discretionary spending.</li>
              </ul>
            </p>
          </div>
        </div>
        
        <!-- Component 4 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 class="text-5xl font-extrabold text-center text-gray-800 mb-12">
                Explore Group Properties
              </h2>
              <p class="text-center text-lg text-gray-700 mb-12">
                Analyzing relationships and distributions between discretionary spending patterns and subcategories.
              </p>

              <!-- Node and Edge Analysis -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Node and Edge Analysis</h3>
                <p class="text-gray-700 mb-4">
                  The chart below visualizes nodes and edges representing relationships in discretionary spending patterns across semesters:
                </p>
                <ul class="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Node Sizes:</strong> Larger nodes indicate higher average discretionary spending ratios.</li>
                  <li><strong>Node Colors:</strong> Represent semesters, showing variations in spending behavior across terms and specific days of the week.</li>
                  <li><strong>Edge Weights:</strong> Represent relationships based on:
                    <ul class="list-disc pl-6">
                      <li>Similarity in discretionary spending ratios.</li>
                      <li>Grouping by day of the week (e.g., weekday vs. weekend).</li>
                      <li>Semester effects (nodes from the same semester).</li>
                    </ul>
                  </li>
                </ul>
                <img src="./images/comp4img1.png" alt="Node and Edge Analysis" class="rounded-lg shadow-md mb-4">
                <p class="text-gray-700">
                  <strong>Findings:</strong>
                  <ul class="list-disc pl-6 text-gray-700">
                    <li>Weekends (Friday to Sunday) show consistently higher discretionary spending, with larger nodes and closer groupings.</li>
                    <li>Weekdays (Monday to Thursday) have smaller nodes, indicating lower discretionary spending proportions.</li>
                    <li>Semesters 2 (orange) and 3 (green) form clusters with higher discretionary shares on weekends, while semesters 1 (blue) and 4 (red) diverge significantly.</li>
                    <li>5th semester (purple) shows no notable discretionary pattern except for Thursday, which aligns with no classes in the schedule.</li>
                  </ul>
                </p>
              </div>

              <!-- Subcategory Spending Histograms -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Proportional Percentage Chart of Subcategories</h3>
                <p class="text-gray-700 mb-4">
                  The chart below highlights shifts in relative importance of spending subcategories over time:
                </p>
                <img src="./images/comp4img2.png" alt="Subcategory Spending Histograms" class="rounded-lg shadow-md w-64 h-auto mb-4">
                <p class="text-gray-700">
                  <strong>Findings:</strong>
                  <ul class="list-disc pl-6 text-gray-700 mb-4">
                    <li>Grants dominate spending proportions at the start of terms, emphasizing the role of essential income in financial stability.</li>
                    <li>Allowances contribute significantly in the middle of terms, supporting both essential and discretionary expenditures.</li>
                    <li>Dining out (red and orange) sees larger proportions near the end of terms, reflecting social and discretionary spending habits.</li>
                    <li>Entertainment spending fluctuates but retains a steady proportion overall.</li>
                  </ul>
                  <strong>Note:</strong> Essential inflows (grants and allowances) form the foundation of spending, with discretionary expenditures layered on top, reflecting financial stability from predictable income sources.
                </p>
              </div>

              <!-- Proportional Percentage Chart -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Subcategory Spending Histograms</h3>
                <p class="text-gray-700 mb-4">
                  The chart below shows the proportions of subcategories, focusing on spendings alone:
                </p>
                <img src="./images/comp4img3.png" alt="Proportional Percentage Chart" class="rounded-lg shadow-md mb-4">
                <p class="text-gray-700">
                  <strong>Findings:</strong>
                  <ul class="list-disc pl-6 text-gray-700 mb-4">
                    <li>Cafeteria food (essential) dominates spending proportions, reflecting its central role in essential spending.</li>
                    <li>Fashion spending remains steady across semesters, showing consistent contributions to discretionary spending.</li>
                    <li>Dining out - food and coffee form the largest part of discretionary spending, while entertainment consistently holds the smallest share.</li>
                  </ul>
                  <strong>Note:</strong> The steady discretionary spending rate is supported by stable income, even in challenging economic conditions. Dining out and coffee shops serve as primary venues for student socialization, which may explain their dominant role in discretionary spending.
                </p>
              </div>
        

          <!-- Component 4: Explore Group Properties -->
        </div>
      </div>
    </section>
  `;
}
