export function Conclusion() {
    return `
      <section id="conclusion" class="container mx-auto px-8 py-16 bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl shadow-2xl">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Conclusion: Hypothesis Testing</h3>
        <p class="text-gray-700 mb-4">
            To provide a statistical foundation for hypothesis testing, the dataset (<strong>final_categorized_merged.csv</strong>) was refined, transitioning from monthly-based to semester-based data. Two lists of data were formed:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Monthly discretionary rates</strong></li>
            <li><strong>Semester-based discretionary rates</strong></li>
        </ul>
        <p class="text-gray-700 mb-4">
            The relation between data points in both charts below is approximately linear, allowing the use of the Pearson correlation coefficient, which evaluates linear relationships:
        </p>
        <img src="./images/concImg1.png" alt="Monthly Discretionary Rates" class="rounded-lg shadow-md w-1/2 h-auto mb-4">
        <img src="./images/concImg2.png" alt="Semester-Based Discretionary Rates" class="rounded-lg shadow-md w-1/2 h-auto mb-4">
        <p class="text-gray-700 mb-4">
            <strong>Findings:</strong>
            <ul class="list-disc pl-6 text-gray-700">
            <li>The first chart (monthly discretionary rates) shows a weak linear relationship.</li>
            <li>The second chart (semester-based rates) has fewer data points but still suggests a linear relation.</li>
            <li>In both cases, total spending over the time period does not significantly influence the discretionary share attribute.</li>
            </ul>
        </p>
        <p class="text-gray-700 mb-4">
            The Pearson test results are as follows:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Monthly Spending:</strong>
            <ul class="list-disc pl-6">
                <li>Correlation coefficient: <strong>0.1174261645459552</strong></li>
                <li>P-value: <strong>0.6122084602151447</strong></li>
            </ul>
            </li>
            <li><strong>Semester Spending:</strong>
            <ul class="list-disc pl-6">
                <li>Correlation coefficient: <strong>-0.5689070256803843</strong></li>
                <li>P-value: <strong>0.31687742685132503</strong></li>
            </ul>
            </li>
        </ul>
        <p class="text-gray-700 mb-4">
            Both p-values exceed the significance level of 0.05, which prevents rejecting the Null Hypothesis. This indicates that there is no statistically significant evidence to support the claim of the alternative hypothesis.
        </p>
        <p class="text-gray-800 font-bold text-lg mt-4">
            As a student at Sabancı University, in high-inflation conditions, there is no significant shift in my spending habits from discretionary to essential categories.
        </p>
        </div>
      </section>
    `;
}