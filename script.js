  /* ── CURSOR ── */
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '50px'; cursor.style.height = '50px';
      cursor.style.background = 'rgba(255,112,166,0.15)';
      cursor.style.borderColor = '#FF70A6';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '24px'; cursor.style.height = '24px';
      cursor.style.background = 'rgba(255,255,255,0.15)';
      cursor.style.borderColor = '#33FF57';
    });
  });

  /* ── WORD BANKS ── */
  const WORDS = {
      datascience: [
      { word: 'NEURAL NETWORK',       hint: 'Inspired by the human brain, used in deep learning' },
      { word: 'GRADIENT DESCENT',     hint: 'Optimization algorithm that minimizes loss functions' },
      { word: 'OVERFITTING',          hint: 'Model memorizes training data, fails on new data' },
      { word: 'BACKPROPAGATION',      hint: 'Algorithm to train neural networks by adjusting weights' },
      { word: 'CLUSTERING',           hint: 'Unsupervised grouping of similar data points' },
      { word: 'REGRESSION',           hint: 'Predicting continuous numerical output values' },
      { word: 'RANDOM FOREST',        hint: 'Ensemble of decision trees for classification' },
      { word: 'TENSORFLOW',           hint: 'Google open-source deep learning framework' },
      { word: 'DATAFRAME',            hint: 'Core Pandas data structure like a 2D table' },
      { word: 'CONFUSION MATRIX',     hint: 'Table showing true vs predicted classifications' },
      { word: 'HYPERPARAMETER',       hint: 'Settings tuned before training a ML model' },
      { word: 'DIMENSIONALITY',       hint: 'Curse of blank — too many features problem' },
      { word: 'SCIKIT LEARN',         hint: 'Popular Python machine learning library' },
      { word: 'TOKENIZATION',         hint: 'Splitting text into smaller units for NLP' },
      { word: 'VECTORIZATION',        hint: 'Converting data into numeric vectors for ML' },
      { word: 'CONVOLUTIONAL',        hint: 'Type of neural network layer for image processing' },
      { word: 'DROPOUT',              hint: 'Regularization technique that randomly disables neurons' },
      { word: 'EPOCH',                hint: 'One complete pass through the training dataset' },
      { word: 'BATCH SIZE',           hint: 'Number of samples processed before updating model weights' },
      { word: 'LEARNING RATE',        hint: 'Controls how much weights are updated during training' },
      { word: 'PRECISION',            hint: 'Ratio of true positives to all predicted positives' },
      { word: 'RECALL',               hint: 'Ratio of true positives to all actual positives' },
      { word: 'F1 SCORE',             hint: 'Harmonic mean of precision and recall' },
      { word: 'CROSS VALIDATION',     hint: 'Technique to evaluate model using multiple data splits' },
      { word: 'FEATURE ENGINEERING',  hint: 'Creating new input variables from raw data' },
      { word: 'NORMALIZATION',        hint: 'Scaling data to a standard range like 0 to 1' },
      { word: 'STANDARDIZATION',      hint: 'Transforming data to have zero mean and unit variance' },
      { word: 'PRINCIPAL COMPONENT',  hint: 'PCA reduces dimensionality using these axes' },
      { word: 'SUPPORT VECTOR',       hint: 'SVM blank machine for classification tasks' },
      { word: 'DECISION TREE',        hint: 'Tree-shaped model that splits data by features' },
      { word: 'NAIVE BAYES',          hint: 'Probabilistic classifier based on Bayes theorem' },
      { word: 'LOGISTIC REGRESSION',  hint: 'Classification algorithm using sigmoid function' },
      { word: 'ENSEMBLE METHOD',      hint: 'Combining multiple models for better performance' },
      { word: 'BOOSTING',             hint: 'Training models sequentially to fix previous errors' },
      { word: 'BAGGING',              hint: 'Training models on random subsets of data in parallel' },
      { word: 'XGBOOST',              hint: 'Extreme gradient boosting, popular in competitions' },
      { word: 'TRANSFER LEARNING',    hint: 'Reusing a pretrained model on a new task' },
      { word: 'FINE TUNING',          hint: 'Updating a pretrained model on new specific data' },
      { word: 'ATTENTION MECHANISM',  hint: 'Allows model to focus on relevant parts of input' },
      { word: 'TRANSFORMER',          hint: 'Architecture behind modern language models like GPT' },
      { word: 'EMBEDDING',            hint: 'Dense vector representation of words or items' },
      { word: 'LATENT SPACE',         hint: 'Compressed internal representation learned by a model' },
      { word: 'AUTOENCODER',          hint: 'Neural network that compresses then reconstructs input' },
      { word: 'GENERATIVE MODEL',     hint: 'Learns to create new data similar to training data' },
      { word: 'DISCRIMINATOR',        hint: 'GAN component that distinguishes real from fake data' },
      { word: 'ACTIVATION FUNCTION',  hint: 'Introduces non-linearity into neural networks' },
      { word: 'SIGMOID',              hint: 'S-shaped activation function outputting values 0 to 1' },
      { word: 'RELU',                 hint: 'Activation function: max of zero and input value' },
      { word: 'SOFTMAX',              hint: 'Converts scores to probabilities summing to one' },
      { word: 'MEAN SQUARED ERROR',   hint: 'Common regression loss function using squared differences' },
      { word: 'CROSS ENTROPY',        hint: 'Loss function commonly used for classification tasks' },
      { word: 'REGULARIZATION',       hint: 'Penalty added to loss to reduce model complexity' },
      { word: 'LASSO',                hint: 'L1 regularization that can shrink weights to zero' },
      { word: 'RIDGE',                hint: 'L2 regularization that penalizes large weight values' },
      { word: 'BIAS VARIANCE',        hint: 'Tradeoff between underfitting and overfitting in ML' },
      { word: 'IMBALANCED DATA',      hint: 'Dataset where one class vastly outnumbers another' },
      { word: 'SMOTE',                hint: 'Technique to oversample minority class synthetically' },
      { word: 'FEATURE SELECTION',    hint: 'Choosing the most relevant input variables for a model' },
      { word: 'MISSING VALUES',       hint: 'Null entries in a dataset requiring imputation' },
      { word: 'IMPUTATION',           hint: 'Filling in missing data with estimated values' },
      { word: 'OUTLIER',              hint: 'Data point that differs significantly from others' },
      { word: 'CORRELATION',          hint: 'Statistical measure of linear relationship between variables' },
      { word: 'HEATMAP',              hint: 'Grid visualization using color to represent values' },
      { word: 'BOXPLOT',              hint: 'Chart showing median, quartiles, and outliers' },
      { word: 'HISTOGRAM',            hint: 'Bar chart showing frequency distribution of a variable' },
      { word: 'SCATTER PLOT',         hint: 'Points plotted on two axes to show relationships' },
      { word: 'TIME SERIES',          hint: 'Data collected sequentially at equally spaced intervals' },
      { word: 'SEASONALITY',          hint: 'Repeating pattern in time series data at fixed intervals' },
      { word: 'FORECASTING',          hint: 'Predicting future values based on historical data' },
      { word: 'ARIMA',                hint: 'Model for forecasting stationary time series data' },
      { word: 'REINFORCEMENT',        hint: 'Learning by reward and punishment from environment' },
      { word: 'REWARD FUNCTION',      hint: 'Signal that tells an RL agent how well it is doing' },
      { word: 'MARKOV CHAIN',         hint: 'Sequence of states where future depends only on present' },
      { word: 'MONTE CARLO',          hint: 'Method using random sampling to estimate outcomes' },
      { word: 'BAYESIAN',             hint: 'Probabilistic approach updating beliefs with new evidence' },
      { word: 'PRIOR',                hint: 'Initial probability before observing data in Bayesian stats' },
      { word: 'POSTERIOR',            hint: 'Updated probability after seeing data in Bayesian stats' },
      { word: 'LIKELIHOOD',           hint: 'Probability of observing data given model parameters' },
      { word: 'HYPOTHESIS TEST',      hint: 'Statistical method to determine if results are significant' },
      { word: 'P VALUE',              hint: 'Probability that results occurred by chance alone' },
      { word: 'NULL HYPOTHESIS',      hint: 'Default assumption of no effect or relationship' },
      { word: 'CONFIDENCE INTERVAL',  hint: 'Range likely to contain the true population parameter' },
      { word: 'CENTRAL TENDENCY',     hint: 'Mean median and mode all measure this' },
      { word: 'VARIANCE',             hint: 'Average squared deviation from the mean' },
      { word: 'STANDARD DEVIATION',   hint: 'Square root of variance measuring spread of data' },
      { word: 'SKEWNESS',             hint: 'Measure of asymmetry in a probability distribution' },
      { word: 'KURTOSIS',             hint: 'Measure of the tailedness of a distribution' },
      { word: 'PIPELINE',             hint: 'Chained sequence of data processing and ML steps' },
      { word: 'DATA LAKE',            hint: 'Repository storing raw data in native format at scale' },
      { word: 'DATA WAREHOUSE',       hint: 'Structured storage optimized for analytical queries' },
      { word: 'ETL',                  hint: 'Extract Transform Load process for data pipelines' },
      { word: 'HADOOP',               hint: 'Framework for distributed storage and processing of big data' },
      { word: 'SPARK',                hint: 'Fast distributed computing engine for large-scale data' },
      { word: 'NATURAL LANGUAGE',     hint: 'NLP field enabling computers to understand human text' },
      { word: 'SENTIMENT ANALYSIS',   hint: 'Determining positive or negative tone from text' },
      { word: 'NAMED ENTITY',         hint: 'NER identifies names places and organizations in text' },
      { word: 'WORD EMBEDDING',       hint: 'Word2Vec and GloVe represent words as dense vectors' },
      { word: 'BERT',                 hint: 'Bidirectional transformer model pretrained by Google' },
    ],

    programming: [
      { word: 'RECURSION',            hint: 'A function that calls itself' },
      { word: 'POLYMORPHISM',         hint: 'OOP concept: one interface, many implementations' },
      { word: 'ABSTRACTION',          hint: 'Hiding complex details behind a simple interface' },
      { word: 'ENCAPSULATION',        hint: 'Bundling data and methods in one unit' },
      { word: 'INHERITANCE',          hint: 'Child class acquiring properties of parent class' },
      { word: 'ALGORITHM',            hint: 'Step-by-step procedure to solve a problem' },
      { word: 'BINARY SEARCH',        hint: 'O(log n) search on a sorted array' },
      { word: 'LINKED LIST',          hint: 'Data structure where nodes point to the next' },
      { word: 'STACK OVERFLOW',       hint: 'Famous dev Q&A site, also a runtime error' },
      { word: 'GARBAGE COLLECTOR',    hint: 'Automatic memory management system' },
      { word: 'ASYNCHRONOUS',         hint: 'Non-blocking code execution pattern' },
      { word: 'INTERFACE',            hint: 'Contract defining what methods a class must have' },
      { word: 'REFACTORING',          hint: 'Improving code structure without changing behavior' },
      { word: 'DEBUGGING',            hint: 'Finding and fixing errors in code' },
      { word: 'HASH TABLE',           hint: 'Data structure mapping keys to values using a hash function' },
      { word: 'BINARY TREE',          hint: 'Tree where each node has at most two children' },
      { word: 'BREADTH FIRST',        hint: 'Graph traversal exploring neighbors level by level' },
      { word: 'DEPTH FIRST',          hint: 'Graph traversal going as deep as possible first' },
      { word: 'DYNAMIC PROGRAMMING',  hint: 'Solving complex problems by breaking into subproblems' },
      { word: 'MEMOIZATION',          hint: 'Caching results of expensive function calls' },
      { word: 'BIG O NOTATION',       hint: 'Way to describe algorithm time and space complexity' },
      { word: 'QUEUE',                hint: 'First-in first-out linear data structure' },
      { word: 'STACK',                hint: 'Last-in first-out linear data structure' },
      { word: 'HEAP',                 hint: 'Tree-based data structure satisfying heap property' },
      { word: 'GRAPH',                hint: 'Collection of nodes connected by edges' },
      { word: 'SORTING ALGORITHM',    hint: 'Procedure to arrange elements in a particular order' },
      { word: 'MERGE SORT',           hint: 'Divide and conquer sorting with O(n log n) complexity' },
      { word: 'QUICK SORT',           hint: 'Fast average-case sort using a pivot element' },
      { word: 'BUBBLE SORT',          hint: 'Simple sort repeatedly swapping adjacent elements' },
      { word: 'INSERTION SORT',       hint: 'Builds sorted array one element at a time' },
      { word: 'LAMBDA FUNCTION',      hint: 'Small anonymous function defined inline' },
      { word: 'CLOSURE',              hint: 'Function retaining access to its outer scope variables' },
      { word: 'HIGHER ORDER',         hint: 'Function that takes or returns another function' },
      { word: 'FUNCTIONAL',           hint: 'Programming paradigm treating computation as functions' },
      { word: 'OBJECT ORIENTED',      hint: 'Paradigm organizing code around objects and classes' },
      { word: 'DESIGN PATTERN',       hint: 'Reusable solution to a commonly occurring problem' },
      { word: 'SINGLETON',            hint: 'Design pattern ensuring only one instance of a class' },
      { word: 'FACTORY METHOD',       hint: 'Pattern for creating objects without specifying class' },
      { word: 'OBSERVER PATTERN',     hint: 'Object notifies dependents when its state changes' },
      { word: 'DECORATOR',            hint: 'Adds behavior to objects without modifying their class' },
      { word: 'ITERATOR',             hint: 'Object that traverses a collection element by element' },
      { word: 'GENERATOR',            hint: 'Function that yields values one at a time lazily' },
      { word: 'COROUTINE',            hint: 'Cooperative multitasking using async and await' },
      { word: 'MULTITHREADING',       hint: 'Running multiple threads of execution concurrently' },
      { word: 'DEADLOCK',             hint: 'Two threads waiting on each other forever' },
      { word: 'MUTEX',                hint: 'Lock ensuring only one thread accesses a resource' },
      { word: 'SEMAPHORE',            hint: 'Signaling mechanism controlling access to resources' },
      { word: 'POINTER',              hint: 'Variable storing memory address of another variable' },
      { word: 'MEMORY LEAK',          hint: 'Allocated memory that is never released back' },
      { word: 'BUFFER OVERFLOW',      hint: 'Writing beyond allocated memory boundary causing errors' },
      { word: 'COMPILE TIME',         hint: 'Phase when source code is converted to machine code' },
      { word: 'RUNTIME',              hint: 'Phase when compiled program is actually executing' },
      { word: 'INTERPRETER',          hint: 'Executes code line by line without compiling first' },
      { word: 'COMPILER',             hint: 'Translates entire source code to machine code' },
      { word: 'VIRTUAL MACHINE',      hint: 'Software emulation of a computer system' },
      { word: 'BYTECODE',             hint: 'Intermediate code executed by a virtual machine' },
      { word: 'EXCEPTION HANDLING',   hint: 'Try catch blocks managing runtime errors gracefully' },
      { word: 'TYPE CASTING',         hint: 'Converting a variable from one data type to another' },
      { word: 'GENERICS',             hint: 'Writing code that works with any data type' },
      { word: 'OVERLOADING',          hint: 'Multiple methods with same name but different parameters' },
      { word: 'OVERRIDING',           hint: 'Subclass redefining a method from its parent class' },
      { word: 'CONSTRUCTOR',          hint: 'Special method called when a new object is created' },
      { word: 'DESTRUCTOR',           hint: 'Called when an object is destroyed or goes out of scope' },
      { word: 'STATIC METHOD',        hint: 'Belongs to class not to an instance of the class' },
      { word: 'ABSTRACT CLASS',       hint: 'Cannot be instantiated, meant to be subclassed' },
      { word: 'DEPENDENCY',           hint: 'Code that relies on another module or library' },
      { word: 'NAMESPACE',            hint: 'Container that groups identifiers to avoid conflicts' },
      { word: 'SCOPE',                hint: 'Region of code where a variable is accessible' },
      { word: 'GLOBAL VARIABLE',      hint: 'Accessible from any part of the program' },
      { word: 'LOCAL VARIABLE',       hint: 'Only accessible within the function it is declared' },
      { word: 'BOOLEAN',              hint: 'Data type with only two values: true or false' },
      { word: 'INTEGER',              hint: 'Whole number data type without decimal point' },
      { word: 'FLOAT',                hint: 'Data type representing numbers with decimal points' },
      { word: 'STRING',               hint: 'Sequence of characters representing text' },
      { word: 'ARRAY',                hint: 'Collection of elements stored at contiguous memory' },
      { word: 'DICTIONARY',           hint: 'Key-value pair data structure in Python' },
      { word: 'TUPLE',                hint: 'Immutable ordered sequence in Python' },
      { word: 'SET',                  hint: 'Collection of unique unordered elements' },
      { word: 'CONDITIONAL',          hint: 'If-else statement controlling execution flow' },
      { word: 'LOOP',                 hint: 'Repeating a block of code multiple times' },
      { word: 'BREAK STATEMENT',      hint: 'Exits a loop or switch statement immediately' },
      { word: 'CONTINUE',             hint: 'Skips remaining loop body and goes to next iteration' },
      { word: 'RETURN',               hint: 'Sends a value back from a function to its caller' },
      { word: 'IMPORT',               hint: 'Brings external modules into current file scope' },
      { word: 'LIBRARY',              hint: 'Collection of prewritten code for common tasks' },
      { word: 'FRAMEWORK',            hint: 'Opinionated structure providing tools to build apps' },
      { word: 'API',                  hint: 'Interface defining how software components interact' },
      { word: 'REST',                 hint: 'Architectural style for web APIs using HTTP methods' },
      { word: 'JSON',                 hint: 'Lightweight data interchange format using key-value pairs' },
      { word: 'XML',                  hint: 'Markup language for structuring and storing data' },
      { word: 'REGEX',                hint: 'Pattern for searching and matching strings' },
      { word: 'UNIT TEST',            hint: 'Testing individual functions or components in isolation' },
      { word: 'INTEGRATION TEST',     hint: 'Testing how multiple components work together' },
      { word: 'TEST DRIVEN',          hint: 'TDD: write tests before writing the actual code' },
      { word: 'VERSION CONTROL',      hint: 'Tracking changes to code over time using Git' },
      { word: 'BRANCH',               hint: 'Separate line of development in a repository' },
      { word: 'MERGE CONFLICT',       hint: 'When two branches change the same lines differently' },
      { word: 'CODE REVIEW',          hint: 'Peer examination of code before it is merged' },
      { word: 'DOCUMENTATION',        hint: 'Written explanation of what code does and how to use it' },
    ],
     tech: [
      { word: 'KUBERNETES',           hint: 'Container orchestration platform by Google' },
      { word: 'BLOCKCHAIN',           hint: 'Distributed ledger technology behind crypto' },
      { word: 'MICROSERVICES',        hint: 'Architecture of small independent services' },
      { word: 'REPOSITORY',           hint: 'Storage location for code, like on GitHub' },
      { word: 'OPEN SOURCE',          hint: 'Software with publicly available source code' },
      { word: 'API GATEWAY',          hint: 'Entry point managing API traffic and routing' },
      { word: 'DOCKER',               hint: 'Platform for containerizing applications' },
      { word: 'LOAD BALANCER',        hint: 'Distributes network traffic across servers' },
      { word: 'LATENCY',              hint: 'Delay between request and response in ms' },
      { word: 'FIREWALL',             hint: 'Network security system filtering traffic' },
      { word: 'BANDWIDTH',            hint: 'Maximum data transfer rate of a network' },
      { word: 'ENCRYPTION',           hint: 'Converting data into unreadable cipher text' },
      { word: 'CLOUD COMPUTING',      hint: 'Delivering IT resources over the internet on demand' },
      { word: 'SERVERLESS',           hint: 'Cloud model where provider manages server infrastructure' },
      { word: 'CONTINUOUS INTEGRATION', hint: 'CI: automatically building and testing code on push' },
      { word: 'CONTINUOUS DEPLOYMENT', hint: 'CD: automatically releasing code to production' },
      { word: 'DEVOPS',               hint: 'Culture uniting software development and IT operations' },
      { word: 'AGILE',                hint: 'Iterative software development methodology' },
      { word: 'SCRUM',                hint: 'Agile framework using sprints and daily standups' },
      { word: 'SPRINT',               hint: 'Short fixed-length development cycle in Scrum' },
      { word: 'VIRTUAL PRIVATE',      hint: 'VPN encrypts internet connection for privacy' },
      { word: 'DNS',                  hint: 'Domain Name System translates URLs to IP addresses' },
      { word: 'TCP IP',               hint: 'Fundamental protocols for internet communication' },
      { word: 'HTTP',                 hint: 'Protocol for transferring web pages over internet' },
      { word: 'HTTPS',                hint: 'Secure version of HTTP using TLS encryption' },
      { word: 'SSL CERTIFICATE',      hint: 'Digital certificate enabling secure web connections' },
      { word: 'PUBLIC KEY',           hint: 'Asymmetric cryptography uses this to encrypt data' },
      { word: 'PRIVATE KEY',          hint: 'Secret key used to decrypt data in asymmetric crypto' },
      { word: 'HASH FUNCTION',        hint: 'Converts data to fixed-size digest irreversibly' },
      { word: 'TOKEN',                hint: 'Authentication credential sent with API requests' },
      { word: 'OAUTH',                hint: 'Open standard for secure authorization delegation' },
      { word: 'JSON WEB TOKEN',       hint: 'JWT: compact token for transmitting user claims' },
      { word: 'WEBSOCKET',            hint: 'Full-duplex communication channel over single connection' },
      { word: 'GRAPHQL',              hint: 'Query language for APIs developed by Facebook' },
      { word: 'WEBHOOK',              hint: 'HTTP callback triggered by a specific event' },
      { word: 'CACHE',                hint: 'Temporary storage for frequently accessed data' },
      { word: 'REDIS',                hint: 'In-memory data store used as cache and message broker' },
      { word: 'KAFKA',                hint: 'Distributed event streaming platform by LinkedIn' },
      { word: 'ELASTICSEARCH',        hint: 'Distributed search and analytics engine' },
      { word: 'NGINX',                hint: 'High-performance web server and reverse proxy' },
      { word: 'REVERSE PROXY',        hint: 'Server sitting in front of web servers handling requests' },
      { word: 'CDN',                  hint: 'Content Delivery Network caches content globally' },
      { word: 'MONOLITH',             hint: 'Single unified application with all functionality combined' },
      { word: 'SERVICE MESH',         hint: 'Infrastructure layer for service-to-service communication' },
      { word: 'ISTIO',                hint: 'Open source service mesh for Kubernetes' },
      { word: 'ANSIBLE',              hint: 'Agentless IT automation tool using YAML playbooks' },
      { word: 'TERRAFORM',            hint: 'Infrastructure as code tool for cloud provisioning' },
      { word: 'INFRASTRUCTURE CODE',  hint: 'Managing servers and networks using configuration files' },
      { word: 'MONITORING',           hint: 'Observing system health and performance in real time' },
      { word: 'LOGGING',              hint: 'Recording events and errors for debugging and audit' },
      { word: 'PROMETHEUS',           hint: 'Open-source monitoring and alerting toolkit' },
      { word: 'GRAFANA',              hint: 'Dashboard tool for visualizing metrics and logs' },
      { word: 'SITE RELIABILITY',     hint: 'SRE applies software engineering to operations problems' },
      { word: 'UPTIME',               hint: 'Percentage of time a system is operational and available' },
      { word: 'FAULT TOLERANCE',      hint: 'System continues working despite component failures' },
      { word: 'REDUNDANCY',           hint: 'Duplicate components to prevent single points of failure' },
      { word: 'DISASTER RECOVERY',    hint: 'Plan to restore systems after catastrophic failure' },
      { word: 'BACKUP',               hint: 'Copy of data stored separately to prevent data loss' },
      { word: 'ZERO DOWNTIME',        hint: 'Deployment strategy with no service interruption' },
      { word: 'BLUE GREEN',           hint: 'Deployment using two identical production environments' },
      { word: 'CANARY RELEASE',       hint: 'Rolling out changes to a small user subset first' },
      { word: 'FEATURE FLAG',         hint: 'Toggle to enable or disable features without deploying' },
      { word: 'RATE LIMITING',        hint: 'Controlling how many requests a client can make' },
      { word: 'THROTTLING',           hint: 'Reducing processing rate to prevent system overload' },
      { word: 'SHARDING',             hint: 'Splitting database into smaller distributed pieces' },
      { word: 'REPLICATION',          hint: 'Copying database across multiple servers for availability' },
      { word: 'ACID',                 hint: 'Atomicity Consistency Isolation Durability in databases' },
      { word: 'BASE',                 hint: 'Basically Available Soft state Eventual consistency' },
      { word: 'CAP THEOREM',          hint: 'Distributed systems cannot guarantee all three properties' },
      { word: 'EVENTUAL CONSISTENCY', hint: 'Distributed data becomes consistent after some time' },
      { word: 'IDEMPOTENT',           hint: 'Operation producing same result no matter how many times called' },
      { word: 'STATELESS',            hint: 'Server stores no client session state between requests' },
      { word: 'STATEFUL',             hint: 'Server retains information about client sessions' },
      { word: 'MESSAGE QUEUE',        hint: 'Asynchronous communication buffer between services' },
      { word: 'PUBLISH SUBSCRIBE',    hint: 'Messaging pattern where publishers send to topics' },
      { word: 'EVENT DRIVEN',         hint: 'Architecture where services react to events' },
      { word: 'SAGA PATTERN',         hint: 'Managing distributed transactions across microservices' },
      { word: 'CIRCUIT BREAKER',      hint: 'Stops calls to failing service to prevent cascade failure' },
      { word: 'RETRY LOGIC',          hint: 'Automatically reattempting failed operations' },
      { word: 'PENETRATION TEST',     hint: 'Simulated cyberattack to find security vulnerabilities' },
      { word: 'ZERO TRUST',           hint: 'Security model assuming no user or device is trusted' },
      { word: 'MULTI FACTOR',         hint: 'MFA requires two or more verification methods to login' },
      { word: 'SINGLE SIGN ON',       hint: 'SSO lets users access multiple apps with one login' },
      { word: 'LDAP',                 hint: 'Protocol for accessing directory services like Active Directory' },
      { word: 'ACTIVE DIRECTORY',     hint: 'Microsoft directory service managing users and computers' },
      { word: 'CONTAINER',            hint: 'Lightweight isolated runtime environment for applications' },
      { word: 'ORCHESTRATION',        hint: 'Automated management of containers at scale' },
      { word: 'NODE',                 hint: 'Individual machine in a Kubernetes cluster' },
      { word: 'POD',                  hint: 'Smallest deployable unit in Kubernetes' },
      { word: 'CLUSTER',              hint: 'Group of servers working together as a single system' },
      { word: 'HORIZONTAL SCALING',   hint: 'Adding more machines to handle increased load' },
      { word: 'VERTICAL SCALING',     hint: 'Adding more CPU or RAM to an existing machine' },
      { word: 'AUTOSCALING',          hint: 'Automatically adjusting resources based on demand' },
      { word: 'OBJECT STORAGE',       hint: 'Stores data as objects, like AWS S3' },
      { word: 'BLOCK STORAGE',        hint: 'Low-level storage used for databases and virtual machines' },
      { word: 'SOLID STATE',          hint: 'SSD storage with no moving parts, faster than HDD' },
      { word: 'EDGE COMPUTING',       hint: 'Processing data near its source rather than in cloud' },
      { word: 'IOT',                  hint: 'Internet of Things: network of connected physical devices' },
    ],
    datamining: [
      { word: 'ASSOCIATION RULE',     hint: 'Finding interesting relations between variables in databases' },
      { word: 'APRIORI',              hint: 'Algorithm for frequent itemset mining and association rules' },
      { word: 'FP GROWTH',            hint: 'Faster alternative to Apriori using FP-tree structure' },
      { word: 'SUPPORT',              hint: 'Frequency of an itemset appearing in the dataset' },
      { word: 'CONFIDENCE',           hint: 'Probability that rule consequent occurs given antecedent' },
      { word: 'LIFT',                 hint: 'Ratio of observed to expected support in association rules' },
      { word: 'FREQUENT ITEMSET',     hint: 'Set of items appearing together above minimum support' },
      { word: 'MARKET BASKET',        hint: 'Analysis finding products frequently bought together' },
      { word: 'SEQUENTIAL PATTERN',   hint: 'Mining ordered patterns in transaction sequences' },
      { word: 'CLASSIFICATION',       hint: 'Assigning data to predefined categories or classes' },
      { word: 'ATTRIBUTE',            hint: 'Individual measurable property of a data object' },
      { word: 'INSTANCE',             hint: 'Single data point or record in a dataset' },
      { word: 'TRAINING SET',         hint: 'Data used to build and teach the model' },
      { word: 'TEST SET',             hint: 'Data used to evaluate final model performance' },
      { word: 'VALIDATION SET',       hint: 'Data used to tune model during development' },
      { word: 'KNOWLEDGE DISCOVERY',  hint: 'KDD: overall process of extracting knowledge from data' },
      { word: 'PREPROCESSING',        hint: 'Cleaning and transforming data before mining' },
      { word: 'DATA CLEANING',        hint: 'Removing noise and inconsistencies from raw data' },
      { word: 'DATA INTEGRATION',     hint: 'Combining data from multiple heterogeneous sources' },
      { word: 'DATA REDUCTION',       hint: 'Reducing data volume while maintaining analytical results' },
      { word: 'DATA TRANSFORMATION',  hint: 'Converting data into appropriate forms for mining' },
      { word: 'DISCRETIZATION',       hint: 'Converting continuous attributes into discrete intervals' },
      { word: 'BINNING',              hint: 'Grouping continuous values into discrete buckets' },
      { word: 'SAMPLING',             hint: 'Selecting a subset of data to represent the whole' },
      { word: 'STRATIFIED SAMPLING',  hint: 'Sampling ensuring proportional representation of groups' },
      { word: 'NOISE',                hint: 'Random error or variance in measured variables' },
      { word: 'CONCEPT DRIFT',        hint: 'Statistical properties of target variable change over time' },
      { word: 'SUBGROUP DISCOVERY',   hint: 'Finding interesting subsets of a population' },
      { word: 'ANOMALY DETECTION',    hint: 'Identifying unusual patterns that do not conform to expected behavior' },
      { word: 'DENSITY ESTIMATION',   hint: 'Estimating probability distribution of a dataset' },
      { word: 'DBSCAN',               hint: 'Density-based clustering algorithm handling noise points' },
      { word: 'HIERARCHICAL',         hint: 'Clustering building tree of clusters from data' },
      { word: 'CENTROID',             hint: 'Center point of a cluster in k-means algorithm' },
      { word: 'INERTIA',              hint: 'Sum of squared distances of samples to their cluster center' },
      { word: 'DENDROGRAM',           hint: 'Tree diagram showing hierarchical cluster relationships' },
      { word: 'ELBOW METHOD',         hint: 'Technique to find optimal number of clusters' },
      { word: 'CANOPY CLUSTERING',    hint: 'Approximate clustering algorithm for large datasets' },
      { word: 'EXPECTATION MAXIMIZATION', hint: 'EM algorithm for finding maximum likelihood in latent models' },
      { word: 'GAUSSIAN MIXTURE',     hint: 'Probabilistic model assuming data from multiple Gaussian distributions' },
      { word: 'TOPIC MODELING',       hint: 'Discovering abstract topics in text document collections' },
      { word: 'LATENT DIRICHLET',     hint: 'LDA: generative probabilistic model for topic discovery' },
      { word: 'TEXT MINING',          hint: 'Extracting high-quality information from text' },
      { word: 'WEB SCRAPING',         hint: 'Automated extraction of data from websites' },
      { word: 'CRAWLING',             hint: 'Systematically browsing web to collect data' },
      { word: 'GRAPH MINING',         hint: 'Discovering patterns in graph-structured data' },
      { word: 'SOCIAL NETWORK',       hint: 'Analysis of relationships and flows between people' },
      { word: 'PAGERANK',             hint: 'Google algorithm ranking web pages by link importance' },
      { word: 'COMMUNITY DETECTION',  hint: 'Finding groups of densely connected nodes in graphs' },
      { word: 'LINK PREDICTION',      hint: 'Predicting which pairs of nodes will form connections' },
      { word: 'COLLABORATIVE FILTER', hint: 'Recommendation based on similar user preferences' },
      { word: 'CONTENT BASED',        hint: 'Recommendation based on item features and user history' },
      { word: 'MATRIX FACTORIZATION', hint: 'Decomposing user-item matrix for recommendations' },
      { word: 'COLD START',           hint: 'Problem of recommending for new users or items' },
      { word: 'INFORMATION GAIN',     hint: 'Reduction in entropy from splitting on an attribute' },
      { word: 'ENTROPY',              hint: 'Measure of impurity or randomness in a dataset' },
      { word: 'GINI INDEX',           hint: 'Measure of impurity used in decision tree splitting' },
      { word: 'PRUNING',              hint: 'Removing branches from decision tree to prevent overfitting' },
      { word: 'RULE INDUCTION',       hint: 'Extracting if-then rules from data automatically' },
      { word: 'ROUGH SET',            hint: 'Approach for handling uncertainty and incomplete data' },
      { word: 'FUZZY SET',            hint: 'Set with degrees of membership rather than crisp boundaries' },
      { word: 'GENETIC ALGORITHM',    hint: 'Optimization inspired by natural selection process' },
      { word: 'SWARM INTELLIGENCE',   hint: 'Collective behavior of decentralized self-organized systems' },
      { word: 'ANT COLONY',           hint: 'Optimization algorithm mimicking ant foraging behavior' },
      { word: 'PARTICLE SWARM',       hint: 'Optimization inspired by movement of bird flocking' },
      { word: 'SPATIAL DATA MINING',  hint: 'Extracting patterns from geographically referenced data' },
      { word: 'TEMPORAL MINING',      hint: 'Discovering patterns in time-stamped data' },
      { word: 'STREAM MINING',        hint: 'Extracting knowledge from continuous data streams' },
      { word: 'ONLINE LEARNING',      hint: 'Model updates incrementally as new data arrives' },
      { word: 'CONCEPT LEARNING',     hint: 'Inferring a function from training examples' },
      { word: 'INDUCTIVE LOGIC',      hint: 'ILP combines machine learning with logic programming' },
      { word: 'PREDICTION',           hint: 'Estimating unknown or future values of attributes' },
      { word: 'INTERESTINGNESS',      hint: 'Measure evaluating usefulness of discovered patterns' },
      { word: 'COMPLETENESS',         hint: 'Degree to which all patterns are found by mining' },
      { word: 'CORRECTNESS',          hint: 'Degree to which discovered patterns are accurate' },
      { word: 'SCALABILITY',          hint: 'Ability to handle growing amounts of data efficiently' },
      { word: 'CURSE OF DIMENSIONALITY', hint: 'Problems arising from analyzing high-dimensional spaces' },
      { word: 'MANIFOLD LEARNING',    hint: 'Nonlinear dimensionality reduction discovering data structure' },
      { word: 'ISOMAP',               hint: 'Nonlinear dimensionality reduction using geodesic distances' },
      { word: 'T-SNE',                hint: 'Technique for visualizing high-dimensional data in 2D' },
      { word: 'UMAP',                 hint: 'Uniform Manifold Approximation for dimension reduction' },
      { word: 'FEATURE EXTRACTION',   hint: 'Deriving new features from raw data automatically' },
      { word: 'WRAPPER METHOD',       hint: 'Feature selection using model performance as criterion' },
      { word: 'FILTER METHOD',        hint: 'Feature selection based on statistical tests alone' },
      { word: 'EMBEDDED METHOD',      hint: 'Feature selection built into model training process' },
      { word: 'RESAMPLING',           hint: 'Repeatedly drawing samples to estimate statistics' },
      { word: 'BOOTSTRAP',            hint: 'Sampling with replacement to estimate distribution' },
      { word: 'JACKKNIFE',            hint: 'Resampling leaving one observation out at a time' },
      { word: 'ROC CURVE',            hint: 'Plot of true positive rate vs false positive rate' },
      { word: 'AUC',                  hint: 'Area Under ROC Curve measuring classifier performance' },
      { word: 'LIFT CURVE',           hint: 'Shows improvement of model over random selection' },
      { word: 'GAIN CHART',           hint: 'Cumulative percentage of positive cases captured' },
      { word: 'CALIBRATION',          hint: 'Ensuring predicted probabilities match actual frequencies' },
      { word: 'HOLDOUT METHOD',       hint: 'Splitting data into separate training and test portions' },
      { word: 'PRIVACY PRESERVING',   hint: 'Mining data while protecting sensitive individual information' },
      { word: 'DIFFERENTIAL PRIVACY', hint: 'Mathematical framework guaranteeing individual privacy' },
      { word: 'DATA PROVENANCE',      hint: 'Tracking origin and history of data through transformations' },
      { word: 'METADATA',             hint: 'Data describing the structure and content of other data' },
      { word: 'ONTOLOGY',             hint: 'Formal representation of knowledge as concepts and relations' },
    ],

    dbms: [
      { word: 'RELATIONAL MODEL',     hint: 'Organizes data into tables with rows and columns' },
      { word: 'PRIMARY KEY',          hint: 'Unique identifier for each record in a table' },
      { word: 'FOREIGN KEY',          hint: 'Column referencing primary key of another table' },
      { word: 'NORMALIZATION',        hint: 'Organizing database to reduce redundancy and improve integrity' },
      { word: 'FIRST NORMAL FORM',    hint: '1NF: eliminate repeating groups, ensure atomic values' },
      { word: 'SECOND NORMAL FORM',   hint: '2NF: remove partial dependencies on composite key' },
      { word: 'THIRD NORMAL FORM',    hint: '3NF: remove transitive dependencies in table' },
      { word: 'BCNF',                 hint: 'Boyce-Codd Normal Form, stronger version of 3NF' },
      { word: 'DENORMALIZATION',      hint: 'Adding redundancy for better query performance' },
      { word: 'ENTITY RELATIONSHIP',  hint: 'ER diagram modeling data entities and their relationships' },
      { word: 'SCHEMA',               hint: 'Blueprint defining structure of a database' },
      { word: 'QUERY',                hint: 'Request for data from a database using SQL' },
      { word: 'SELECT',               hint: 'SQL command to retrieve data from tables' },
      { word: 'INSERT',               hint: 'SQL command to add new records into a table' },
      { word: 'UPDATE',               hint: 'SQL command to modify existing records in a table' },
      { word: 'DELETE',               hint: 'SQL command to remove records from a table' },
      { word: 'WHERE CLAUSE',         hint: 'SQL filter condition applied to query results' },
      { word: 'GROUP BY',             hint: 'SQL clause aggregating rows sharing a common field' },
      { word: 'HAVING CLAUSE',        hint: 'Filters groups created by GROUP BY in SQL' },
      { word: 'ORDER BY',             hint: 'SQL clause sorting query results in a specified order' },
      { word: 'JOIN',                 hint: 'Combining rows from two or more tables on related column' },
      { word: 'INNER JOIN',           hint: 'Returns records with matching values in both tables' },
      { word: 'LEFT JOIN',            hint: 'Returns all records from left table and matched from right' },
      { word: 'RIGHT JOIN',           hint: 'Returns all records from right table and matched from left' },
      { word: 'FULL OUTER JOIN',      hint: 'Returns all records when there is match in either table' },
      { word: 'CROSS JOIN',           hint: 'Cartesian product of all rows from both tables' },
      { word: 'SELF JOIN',            hint: 'Joining a table with itself using aliases' },
      { word: 'SUBQUERY',             hint: 'Query nested inside another SQL query' },
      { word: 'CORRELATED SUBQUERY',  hint: 'Subquery referencing column from the outer query' },
      { word: 'VIEW',                 hint: 'Virtual table based on result of a SQL query' },
      { word: 'MATERIALIZED VIEW',    hint: 'View storing its result set physically on disk' },
      { word: 'STORED PROCEDURE',     hint: 'Precompiled SQL code stored and reused in database' },
      { word: 'TRIGGER',              hint: 'Automatic action fired on insert update or delete event' },
      { word: 'FUNCTION',             hint: 'Reusable SQL code block that returns a value' },
      { word: 'INDEX',                hint: 'Data structure speeding up database retrieval operations' },
      { word: 'CLUSTERED INDEX',      hint: 'Physically reorders table data to match index order' },
      { word: 'NON CLUSTERED INDEX',  hint: 'Separate structure pointing to data without reordering' },
      { word: 'COMPOSITE INDEX',      hint: 'Index built on more than one column of a table' },
      { word: 'FULL TEXT INDEX',      hint: 'Index enabling fast text search within string columns' },
      { word: 'TRANSACTION',          hint: 'Unit of work that must complete fully or not at all' },
      { word: 'COMMIT',               hint: 'Saving all changes made in current transaction permanently' },
      { word: 'ROLLBACK',             hint: 'Undoing all changes made since last commit' },
      { word: 'SAVEPOINT',            hint: 'Point within transaction to which you can rollback' },
      { word: 'ATOMICITY',            hint: 'ACID property: transaction is all-or-nothing' },
      { word: 'CONSISTENCY',          hint: 'ACID property: transaction brings database to valid state' },
      { word: 'ISOLATION',            hint: 'ACID property: concurrent transactions do not interfere' },
      { word: 'DURABILITY',           hint: 'ACID property: committed data persists despite failures' },
      { word: 'CONCURRENCY CONTROL',  hint: 'Managing simultaneous database operations correctly' },
      { word: 'LOCKING',              hint: 'Preventing conflicting access to data during transaction' },
      { word: 'DEADLOCK',             hint: 'Two transactions waiting for each other to release locks' },
      { word: 'SERIALIZABILITY',      hint: 'Transactions appear to execute one at a time serially' },
      { word: 'TWO PHASE LOCKING',    hint: '2PL protocol ensuring serializability in transactions' },
      { word: 'MVCC',                 hint: 'Multi-Version Concurrency Control allows non-blocking reads' },
      { word: 'DIRTY READ',           hint: 'Reading uncommitted data changed by another transaction' },
      { word: 'PHANTOM READ',         hint: 'New rows appearing in repeated query within transaction' },
      { word: 'LOST UPDATE',          hint: 'One transaction overwriting another committed change' },
      { word: 'RECOVERY',             hint: 'Restoring database to consistent state after failure' },
      { word: 'WRITE AHEAD LOG',      hint: 'WAL: changes logged before applied to ensure recovery' },
      { word: 'CHECKPOINT',           hint: 'Point where dirty pages are flushed to ensure recovery' },
      { word: 'BUFFER POOL',          hint: 'Memory area caching frequently accessed database pages' },
      { word: 'QUERY OPTIMIZER',      hint: 'Determines most efficient way to execute a SQL query' },
      { word: 'EXECUTION PLAN',       hint: 'Step-by-step strategy database uses to run a query' },
      { word: 'COST BASED',           hint: 'Optimizer choosing plan with lowest estimated resource cost' },
      { word: 'HEURISTIC BASED',      hint: 'Optimizer applying rules of thumb to improve queries' },
      { word: 'PARTITIONING',         hint: 'Dividing large table into smaller manageable pieces' },
      { word: 'HORIZONTAL PARTITION', hint: 'Splitting table rows across multiple partitions' },
      { word: 'VERTICAL PARTITION',   hint: 'Splitting table columns across multiple partitions' },
      { word: 'DISTRIBUTED DATABASE', hint: 'Data spread across multiple physically separate systems' },
      { word: 'FEDERATED DATABASE',   hint: 'Virtual database composed of multiple autonomous databases' },
      { word: 'NOSQL',                hint: 'Non-relational database handling unstructured data' },
      { word: 'DOCUMENT STORE',       hint: 'Database storing data as JSON-like documents' },
      { word: 'COLUMN FAMILY',        hint: 'Wide-column store like Cassandra organizing data in columns' },
      { word: 'GRAPH DATABASE',       hint: 'Database storing entities as nodes and relationships as edges' },
      { word: 'KEY VALUE STORE',      hint: 'Simplest NoSQL database pairing keys with values' },
      { word: 'CASSANDRA',            hint: 'Distributed wide-column store designed for high availability' },
      { word: 'MONGODB',              hint: 'Popular document-oriented NoSQL database' },
      { word: 'NEO4J',                hint: 'Leading graph database management system' },
      { word: 'HBASE',                hint: 'Column-family store built on top of Hadoop HDFS' },
      { word: 'COUCHDB',              hint: 'Document database using HTTP API and JSON storage' },
      { word: 'DATA DICTIONARY',      hint: 'Metadata repository describing database objects and their properties' },
      { word: 'CATALOG',              hint: 'System tables storing metadata about database objects' },
      { word: 'INTEGRITY CONSTRAINT', hint: 'Rule ensuring accuracy and consistency of database data' },
      { word: 'CHECK CONSTRAINT',     hint: 'Limits values allowed in a column based on condition' },
      { word: 'NOT NULL',             hint: 'Constraint ensuring a column cannot have empty value' },
      { word: 'UNIQUE CONSTRAINT',    hint: 'Ensures all values in a column are different' },
      { word: 'REFERENTIAL INTEGRITY', hint: 'Foreign key always points to existing primary key' },
      { word: 'CASCADE DELETE',       hint: 'Automatically deletes related records in child table' },
      { word: 'CASCADE UPDATE',       hint: 'Automatically updates related foreign key values' },
      { word: 'AGGREGATE FUNCTION',   hint: 'SQL function like SUM AVG COUNT operating on groups' },
      { word: 'WINDOW FUNCTION',      hint: 'Performs calculation across set of related rows' },
      { word: 'RANK',                 hint: 'Window function assigning rank to each row in partition' },
      { word: 'DENSE RANK',           hint: 'Rank without gaps when there are ties in ordering' },
      { word: 'PARTITION BY',         hint: 'Divides result set into partitions for window functions' },
      { word: 'COMMON TABLE',         hint: 'CTE: named temporary result set defined within query' },
      { word: 'RECURSIVE CTE',        hint: 'CTE referencing itself to process hierarchical data' },
      { word: 'PIVOT',                hint: 'Rotating rows into columns to summarize data' },
      { word: 'UNPIVOT',              hint: 'Rotating columns into rows expanding narrow tables' },
      { word: 'UNION',                hint: 'Combines result sets of two queries removing duplicates' },
      { word: 'INTERSECT',            hint: 'Returns rows present in results of both queries' },
      { word: 'EXCEPT',               hint: 'Returns rows in first query not found in second' },
      { word: 'SEQUENCE',             hint: 'Database object generating unique numeric values automatically' },
      { word: 'SYNONYM',              hint: 'Alias for another database object for convenience' },
    ],
    random: [],
  };
  // Build random from all categories
  Object.keys(WORDS).forEach(cat => {
    if (cat !== 'random') WORDS.random.push(...WORDS[cat]);
  });

  /* ── HANGMAN PARTS ── */
  const PARTS = ['h-head','h-body','h-larm','h-rarm','h-lleg','h-rleg'];

  /* ── STATE ── */
  let currentWord, currentHint, guessed, wrongLetters, maxLives, livesLeft;
  let wins = 0, losses = 0, streak = 0;
  let selectedCat = 'datascience', selectedLives = 8;
  let hintUsed = false;
  let gameOver = false;
  let usedWords = [];

  /* ── ENTRY SCREEN ── */
  function selectCat(btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCat = btn.dataset.cat;
  }
  function selectDiff(btn) {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedLives = parseInt(btn.dataset.lives);
  }

  document.getElementById('entry-btn').addEventListener('click', () => {
    const es = document.getElementById('entry-screen');
    es.classList.add('hide');
    setTimeout(() => es.style.display = 'none', 650);
    maxLives = selectedLives;
    usedWords = [];
    wins = losses = streak = 0;
    updateStats();
    newGame();
  });

  function goToEntry() {
    const es = document.getElementById('entry-screen');
    es.style.display = 'flex';
    setTimeout(() => es.classList.remove('hide'), 10);
  }

  /* ── BUILD KEYBOARD ── */
  const KB_ROWS = ['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];
  const kbEl = document.getElementById('keyboard');
  KB_ROWS.forEach(row => {
    const div = document.createElement('div');
    div.className = 'kb-row';
    row.split('').forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'kb-key';
      btn.textContent = ch;
      btn.dataset.letter = ch;
      btn.addEventListener('click', () => guess(ch));
      div.appendChild(btn);
    });
    kbEl.appendChild(div);
  });

  /* ── NEW GAME ── */
  function newGame() {
    document.getElementById('result-overlay').classList.remove('show');
    hintUsed = false;
    gameOver = false;

    // Pick word from category
    const pool = WORDS[selectedCat] || WORDS.random;
    const available = pool.filter(w => !usedWords.includes(w.word));
    const wordObj = available.length
      ? available[Math.floor(Math.random() * available.length)]
      : pool[Math.floor(Math.random() * pool.length)];

    currentWord = wordObj.word.toUpperCase();
    currentHint = wordObj.hint;
    usedWords.push(currentWord);

    guessed = new Set();
    wrongLetters = [];
    maxLives = selectedLives;
    livesLeft = maxLives;

    // Update category tag
    const catNames = {
      datascience:'Data Science', programming:'Programming',
      tech:'Tech & Tools', datamining:'Data Mining',
      dbms:'DBMS', random:'Random Mix'
    };
    document.getElementById('cat-tag').textContent =
      '>_ Category: ' + catNames[selectedCat];

    renderLives();
    renderHangman();
    renderWord();
    renderWrong();
    resetKeyboard();
    document.getElementById('hint-text').textContent = currentHint;
    document.getElementById('wrong-badge').textContent = '0 / ' + maxLives + ' wrong';
  }

  /* ── GUESS ── */
  function guess(letter) {
    if (gameOver || guessed.has(letter)) return;
    guessed.add(letter);

    const btn = document.querySelector(`.kb-key[data-letter="${letter}"]`);

    if (currentWord.includes(letter)) {
      btn.classList.add('correct', 'used');
      renderWord();
      if (checkWin()) { showResult(true); return; }
    } else {
      wrongLetters.push(letter);
      livesLeft--;
      btn.classList.add('wrong', 'used');
      renderWrong();
      renderHangman();
      renderLives();
      document.getElementById('wrong-badge').textContent =
        wrongLetters.length + ' / ' + maxLives + ' wrong';
      if (livesLeft <= 0) { showResult(false); return; }
    }
  }

  /* ── HINT ── */
  function useHint() {
    if (gameOver || hintUsed) return;
    // Reveal one random unguessed letter
    const unguessed = [...currentWord].filter(c => c !== ' ' && !guessed.has(c));
    if (!unguessed.length) return;
    const letter = unguessed[Math.floor(Math.random() * unguessed.length)];
    hintUsed = true;
    guess(letter);
  }

  /* ── CHECK WIN ── */
  function checkWin() {
    return [...currentWord].every(c => c === ' ' || guessed.has(c));
  }

  /* ── SHOW RESULT ── */
  function showResult(won) {
    gameOver = true;
    const overlay = document.getElementById('result-overlay');
    const title   = document.getElementById('overlay-title');
    const wordEl  = document.getElementById('overlay-word');
    const subEl   = document.getElementById('overlay-sub');

    if (won) {
      wins++; streak++;
      title.className = 'overlay-title win';
      title.textContent = '✅ CRACKED IT!';
      subEl.textContent = 'The word was guessed with ' + livesLeft + ' lives remaining.';
    } else {
      losses++; streak = 0;
      title.className = 'overlay-title lose';
      title.textContent = '💀 EXECUTED';
      subEl.textContent = 'Better luck next time, soldier.';
      // Show face on loss
      ['h-eye1','h-eye2','h-mouth'].forEach(id => {
        document.getElementById(id).style.opacity = '1';
      });
    }
    wordEl.textContent = currentWord;
    overlay.classList.add('show');
    updateStats();
  }

  function updateStats() {
    document.getElementById('wins-val').textContent   = wins;
    document.getElementById('losses-val').textContent = losses;
    document.getElementById('streak-val').textContent = streak;
  }

  /* ── RENDER FUNCTIONS ── */
  function renderWord() {
    const el = document.getElementById('word-display');
    el.innerHTML = '';
    [...currentWord].forEach(ch => {
      const tile = document.createElement('div');
      tile.className = 'letter-tile' + (ch === ' ' ? ' space' : '');
      const char = document.createElement('div');
      char.className = 'letter-char' + (ch === ' ' ? ' space' : '');
      if (ch === ' ') {
        char.textContent = '';
      } else if (guessed.has(ch)) {
        char.textContent = ch;
        char.classList.add('revealed');
      } else {
        char.textContent = '';
      }
      tile.appendChild(char);
      if (ch !== ' ') {
        const line = document.createElement('div');
        line.className = 'letter-line';
        tile.appendChild(line);
      }
      el.appendChild(tile);
    });
  }

  function renderWrong() {
    const el = document.getElementById('wrong-chips');
    el.innerHTML = '';
    wrongLetters.forEach(l => {
      const chip = document.createElement('span');
      chip.className = 'wrong-chip';
      chip.textContent = l;
      el.appendChild(chip);
    });
  }

  function renderHangman() {
    PARTS.forEach((id, i) => {
      const el = document.getElementById(id);
      el.style.opacity = (maxLives - livesLeft) > i ? '1' : '0';
    });
    // Hide face unless lost
    ['h-eye1','h-eye2','h-mouth'].forEach(id => {
      document.getElementById(id).style.opacity = '0';
    });
    // Stroke color changes as lives decrease
    const ratio = wrongLetters.length / maxLives;
    const color = ratio < 0.4 ? '#FF70A6' : ratio < 0.7 ? '#FF9F1C' : '#FF2A2A';
    PARTS.forEach(id => document.getElementById(id).setAttribute('stroke', color));
  }

  function renderLives() {
    const el = document.getElementById('lives-dots');
    el.innerHTML = '';
    for (let i = 0; i < maxLives; i++) {
      const dot = document.createElement('div');
      dot.className = 'life-dot' + (i >= livesLeft ? ' lost' : '');
      el.appendChild(dot);
    }
  }

  function resetKeyboard() {
    document.querySelectorAll('.kb-key').forEach(btn => {
      btn.className = 'kb-key';
    });
  }

  /* ── PHYSICAL KEYBOARD ── */
  document.addEventListener('keydown', e => {
    const letter = e.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) guess(letter);
  });
