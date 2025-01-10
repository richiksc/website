const projects = [

  {
    name: 'Efficiently Managing Exploration and Gradient Stability in Deep RL Methods',
    // url: 'https://mercantile.richiksc.me',
    repo: 'richiksc/cs5180-final-project',
    labels: ['reinforcement learning', 'python', 'pytorch'],
    desc: 'Explored low-computation approaches in deep policy gradient algorithms ' +
          'such as gradient-based entropy scheduling and gradient signal processing ' +
          'to accelerate learning and maintain long-term training stability.',
  },
  {
    name: 'CNN Image Classifier From Scratch',
    // url: 'https://mercantile.richiksc.me',
    // repo: 'richiksc/Mercantile',
    labels: ['computer vision', 'machine learning', 'python', 'pytorch'],
    desc: `A CIFAR-10 image classification model implemented using only elementary matrix/tensor operations.
Implemented modular 2D convolution, max-pooling and spatial batch normalization layers with composable backpropagation.
Achieved 67.1% classification accuracy on test dataset after only 10 seconds of training.`
  },
  {
    name: 'Spotify Streams Predictor',
    // url: 'https://mercantile.richiksc.me',
    // repo: 'richiksc/Mercantile',
    labels: ['machine learning', 'data science', 'python', 'tensorflow', 'pandas'],
    desc: `Developed and trained a neural-network based model to predict the number
of Spotify streams of a song based on track attributes. Used Pandas to load, clean, and preprocess training data,
using Tensorflow and Keras to develop the model. Evaluated various loss functions and tuned hyperparameters
to improve model performance.
`
  },
  {
    name: 'Simple RPC Protocol',
    repo: 'richiksc/p8-rpc',
    labels: ['distributed systems', 'c', 'linux'],
    desc: 'A low-level implementation of an RPC client library and server in C using TCP sockets. '
          + 'Multi-threaded implementation handles up to 100 concurrent clients accessing a shared datastore.'
  },
  {
    name: 'Mercantile: Small Business Inventory Management',
    url: 'https://mercantile.richiksc.me',
    repo: 'richiksc/Mercantile',
    labels: ['vuejs', 'spring boot', 'java', 'javascript', 'webapp', 'cloud'],
    desc: 'Mercantile is a product inventory management system built using '
          + 'Spring Boot and Java for the backend, and a VueJS frontend. '
          + 'Deployed to Google Compute Engine.',
  },
  // {
  //   name: 'atom-live-server-plus',
  //   url: 'https://atom.io/packages/atom-live-server-plus',
  //   repo: 'richiksc/atom-live-server-plus',
  //   labels: ['atom', 'atom-package', 'javascript', 'live-reload'],
  //   desc: 'atom-live-server-plus is an enhanced fork of '
  //         + 'atom-live-server with support for the tool-bar and atom-ide-ui '
  //         + 'packages as well as easier configuration for a seamless web '
  //         + 'development experience.',
  // },
]

export default projects
