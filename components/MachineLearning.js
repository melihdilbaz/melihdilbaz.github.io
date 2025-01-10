export function MachineLearning() {
    return `
      <section id="machine-learning" class="container mx-auto px-8 py-16 bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl shadow-2xl">
        <h2 class="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Machine Learning Analysis
        </h2>
        <p class="text-center text-lg text-gray-700 mb-12">
          Leveraging machine learning models to predict economic periods based on spending behavior and other financial indicators.
        </p>
  
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Step 1: Baseline Decision Tree Model</h3>
          <p class="text-gray-700 mb-4">
            A Decision Tree Classifier was trained to predict economic periods using features like total spending, income, and discretionary share. The initial model achieved an accuracy of <strong>30%</strong> on the test set.
          </p>
          <img src="images/machinelarningimage1.png" alt="Baseline Decision Tree" class="rounded-lg shadow-md">
        </div>
  
        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Step 2: Optimized Decision Tree</h3>
          <p class="text-gray-700 mb-4">
            Using GridSearchCV for hyperparameter tuning, the decision tree model was optimized with the following best parameters:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>max_depth:</strong> None</li>
            <li><strong>min_samples_leaf:</strong> 2</li>
            <li><strong>min_samples_split:</strong> 10</li>
          </ul>
          <p class="text-gray-700 mb-4">
            The optimized model achieved a cross-validation score of <strong>42%</strong> and a test accuracy of <strong>33%</strong>.
          </p>
          <img src="images/machinelarningimage2.png" alt="Optimized Decision Tree" class="rounded-lg shadow-md">
        </div>
  
        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Step 3: Random Forest Model</h3>
          <p class="text-gray-700 mb-4">
            A Random Forest Classifier was trained and tuned using GridSearchCV. The best parameters were:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>n_estimators:</strong> 50</li>
            <li><strong>max_depth:</strong> 5</li>
            <li><strong>min_samples_split:</strong> 10</li>
            <li><strong>min_samples_leaf:</strong> 1</li>
            <li><strong>bootstrap:</strong> False</li>
          </ul>
          <p class="text-gray-700 mb-4">
            The Random Forest achieved a cross-validation score of <strong>45%</strong> and a test accuracy of <strong>39%</strong>.
          </p>
          <img src="images/machinelarningimage3.png" alt="Feature Importance Graph" class="rounded-lg shadow-md">
        </div>
  
        <!-- Conclusion -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Conclusion</h3>
          <p class="text-gray-700 mb-4">
            The machine learning models demonstrated the potential for predicting economic periods based on personal spending data. While accuracy remains modest, these insights can inform further exploration into economic and behavioral patterns.
          </p>
          <p class="text-gray-700">
            Future improvements might include incorporating additional features, exploring ensemble methods, or analyzing external economic indicators in conjunction with personal data.
          </p>
        </div>
      </section>
    `;
  }
  