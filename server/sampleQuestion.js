let sampleQuestions = [
  {
    description:
      "Describe the concept of object-oriented programming (OOP) and explain its advantages.",
    chapterName: ["Programming Paradigms", "Object-Oriented Programming"],
    topicTag: ["OOP", "Advantages"],
    ans: "Object-oriented programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and code. It allows for encapsulation, inheritance, and polymorphism, leading to better organization, reusability, and maintainability of code.",
    optionA :  "OOP: Only for beginners / No real-world applications",
    optionB : "OOP: Static code / No code reusability",
    optionC : " OOP: Limited code organization / No improvement in scalability",
    optionD : " OOP allows for modularity, code reusability, and easier maintenance through the use of objects and classes.",
    correctOption : 'd',
  },
  {
    description:
      "What is a binary search tree (BST)? Explain its operations and complexity.",
    chapterName: ["Data Structures", "Trees"],
    topicTag: ["Binary Search Tree", "Operations", "Complexity"],

    ans: "A binary search tree (BST) is a binary tree in which each node has at most two children, with the left child containing values less than the parent node and the right child containing values greater than the parent node. Operations include insertion, deletion, and search, with time complexity of O(log n) for balanced trees.",
    optionA: " BST: Linear structure, inefficient for searches",
    optionB : "BST: Hierarchical structure, O(log n) complexity for balanced trees",
    optionC : "BST: O(n) complexity for all operations",
    optionD : "BST: Array-based, unsuitable for insertion/deletion",
    correctOption : 'b',
  },

  {
    description: "Discuss the difference between TCP and UDP protocols.",
    chapterName: ["Computer Networks", "Protocols"],
    topicTag: ["TCP", "UDP", "Protocols"],
    ans: "Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) are both transport layer protocols used for communication over networks. TCP provides reliable, connection-oriented communication with error-checking and retransmission mechanisms, while UDP provides unreliable, connectionless communication without error-checking or retransmission.",
    optionA : " TCP: Error-checked",
    optionB : "TCP: Connectionless ",
    optionC : "TCP: Reliable, Ordered",
    optionD : " TCP: Slow ",
    correctOption : 'c',
  },

  {
    description:
      "Explain the working principle of Dijkstra's algorithm with an example.",
    chapterName: ["Algorithms", "Graph Algorithms"],
    topicTag: ["Dijkstra's Algorithm", "Shortest Path"],
    ans: "Dijkstra's algorithm is a greedy algorithm used to find the shortest path between nodes in a graph. It maintains a set of vertices whose shortest distance from the source node is already known. At each step, it selects the vertex with the smallest known distance and updates the distances of its adjacent vertices. This process continues until all vertices have been visited.",
    optionA : " Utilizes depth-first search.",
    optionB : "Always selects the shortest edge.",
    optionC : " Limited to acyclic graphs.",
    optionD : "Chooses nodes with the smallest tentative distance, updates distances, and marks them as visited until completion.",
    correctOption: 'd',
  },

  {
    description:
      "What is the role of a compiler in programming?",
    chapterName: ["Compiler Design", "Programming Languages"],
    topicTag: ["Compiler", "Compilation Process"],
    ans: "A compiler is a software tool that translates high-level programming language code into machine code or intermediate code. The compilation process consists of several phases, including lexical analysis, syntax analysis, semantic analysis, code generation, and optimization. Lexical analysis involves tokenizing the input code, syntax analysis checks the syntax of the code for correctness, semantic analysis checks the meaning of the code, code generation produces machine code, and optimization improves the efficiency of the generated code.",
    optionA : "Compiler: Converts machine code to high-level code.",
    optionB : "Compiler: Checks code for errors but doesn't translate it.",
    optionC : "Compiler: Translates high-level code to machine code. Compilation process involves lexical analysis, syntax analysis, code generation, and optimization.",
    optionD : "Compiler: Executes code directly on hardware.",
    correctOption: 'c',
  },

  {
    description:
      "Discuss the importance of data structures in computer science and provide examples of commonly used data structures.",
    chapterName: ["Data Structures", "Computer Science Fundamentals"],
    topicTag: ["Data Structures", "Importance", "Examples"],
    ans: "Data structures are fundamental concepts in computer science that allow for efficient organization, storage, and manipulation of data. Commonly used data structures include arrays, linked lists, stacks, queues, trees, graphs, and hash tables. Each data structure has its own advantages and use cases, and understanding them is essential for designing efficient algorithms and programs.",
    optionA : "Data visualization techniques in computer graphics.",
    optionB : "Hardware components in computer systems.",
    optionC : "Efficient data storage and manipulation. Examples: Arrays, linked lists, stacks, queues, trees, graphs.",
    optionD : "Error handling mechanisms in programming languages.",
    correctOption: 'c',
  },

  {
    description:
      "Describe the concept of inheritance in object-oriented programming and provide an example.",
    chapterName: ["Programming Paradigms", "Object-Oriented Programming"],
    topicTag: ["Inheritance", "OOP"],
    ans: "Inheritance is a key concept in object-oriented programming (OOP) that allows a class (subclass) to inherit properties and methods from another class (superclass). This enables code reuse and promotes the creation of hierarchical relationships between classes. For example, a 'Vehicle' class can be a superclass with properties like 'color' and 'speed', and subclasses like 'Car' and 'Bike' can inherit these properties while adding their own specific features.",
    optionA : "Inheritance: Allows a class to inherit properties and methods from another class. Example: Animal class inheriting from Mammal class.",
    optionB : "Inheritance: Facilitates code reuse by allowing subclasses to inherit properties and methods from a superclass, promoting modular design and reducing redundancy.",
    optionC : " Inheritance: Doesn't restrict access but rather promotes code organization by establishing hierarchical relationships between classes, enhancing code maintainability and readability.",
    optionD : "Inheritance: Involves extending existing classes to create specialized subclasses, promoting scalability and adaptability in object-oriented design.",
    correctOption: 'a',
  },

  {
    description:
      "What is the purpose of an operating system? Explain the functions of an operating system.",
    chapterName: ["Operating Systems", "Computer Science Fundamentals"],
    topicTag: ["Operating System", "Functions"],
    ans: "An operating system (OS) is a software system that manages computer hardware and software resources and provides services for computer programs. The functions of an operating system include process management, memory management, file system management, device management, security, and user interface. It acts as an intermediary between users and hardware, allowing users to interact with the computer system efficiently.",
    optionA : "OS: Manages hardware, provides interface. Functions: process, memory, file, device management.",
    optionB : "OS: Enhances security for user data.",
    optionC : "OS: Optimizes hardware for performance.",
    optionD : "OS: Provides GUI for applications.",
    correctOption: 'a',
  },

  {
    description:
      "Discuss the concept of virtual memory and explain its benefits in computer systems.",
    chapterName: ["Operating Systems", "Memory Management"],
    topicTag: ["Virtual Memory", "Benefits"],
    ans: "Virtual memory is a memory management technique that uses disk space to simulate additional RAM (random-access memory) when the physical memory (RAM) is full. It allows programs to use more memory than is physically available, enabling multitasking and efficient memory utilization. Virtual memory provides benefits such as increased system performance, better system reliability, and improved memory management.",
    optionA : "Virtual memory: Hardware storage for faster access, like CPU cache memory.",
    optionB : "Virtual memory: Expands RAM with disk space, improves system responsiveness, enables multitasking.",
    optionC : "Virtual memory: Cloud-based storage, like Dropbox.",
    optionD : "Virtual memory: Memory segmentation for processes, like in operating systems.",
    correctOption: 'b',
  },

  {
    description:
      "Explain the difference between synchronous and asynchronous programming paradigms, and provide examples of their usage.",
    chapterName: ["Programming Paradigms", "Concurrency"],
    topicTag: ["Synchronous", "Asynchronous", "Concurrency"],
    ans: "Synchronous programming is a programming paradigm in which operations are performed one after another, blocking the execution until each operation completes. Asynchronous programming, on the other hand, allows operations to be performed concurrently, without blocking the execution. Asynchronous programming is commonly used in scenarios such as I/O operations, network communication, and event-driven programming, where it improves responsiveness and efficiency by allowing non-blocking execution of tasks.",
    optionA : "Synchronous programming executes tasks sequentially, blocking further execution until the current task completes. Example: Traditional function calls in JavaScript.",
    optionB : " Synchronous programming executes tasks concurrently, allowing multiple tasks to run simultaneously. Example: Asynchronous AJAX requests in JavaScript.",
    optionC : "Asynchronous programming executes tasks sequentially, blocking further execution until the current task completes. Example: Promises in JavaScript.",
    optionD : "Asynchronous programming executes tasks concurrently, allowing multiple tasks to run simultaneously. Example: Synchronous file I/O operations in Node.js.",
    correctOption: 'd',
  },
];

module.exports = sampleQuestions;
