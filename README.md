# Week 7: JavaScript Best Practices

## Overview
This repository demonstrates the application of professional JavaScript practices, focusing on state management, data persistence, and clean code principles.

The project includes a refactored To-Do List with persistent storage, modular architecture, and improved code readability, aligning with real-world frontend development standards.

---

## Live Demo
https://Solfegesam.github.io/iyf-s10-week-07-Solfegesam/blob/main

---

## Screenshots
![App Preview](assets/screenshots/preview.png)

---

## Core Features
- Persistent data using localStorage and sessionStorage
- Refactored To-Do List with saved state across reloads
- Centralized state management approach
- Modular code structure (separation of concerns)
- Clean and maintainable code practices

---

## Projects

### Persistent To-Do List
- Add, delete, and toggle tasks
- Task completion state is saved
- Data persists after page reload
- Filter state is maintained

### Storage Handling
- localStorage CRUD operations
- JSON serialization and parsing
- sessionStorage for temporary data

### State Management
- Centralized state object
- Controlled state updates
- Observer pattern implementation

---

## Before vs After Refactor

### Before
- Single large file with mixed responsibilities  
- Repetitive logic and poor naming  
- Difficult to maintain and debug  

### After
- Modular structure with separated concerns  
- Reusable functions and cleaner logic  
- Improved readability and scalability  

---

## Project Structure

```
iyf-s10-week-07-Solfegesam/
│
├── index.html
├── style.css
├── README.md
│
├── js/
│   ├── app.js        # Entry point (initialization)
│   ├── state.js      # State management logic
│   ├── storage.js    # localStorage & sessionStorage helpers
│   ├── ui.js         # DOM rendering & updates
│   └── utils.js      # Helper functions
│
├── assets/
│   ├── screenshots/  # UI images (for README)
│   └── icons/        # Optional UI icons
│
└── docs/
    └── notes.md      # Optional learning notes (not required)
```

---

## Technologies Used
- JavaScript (ES6+)
- HTML5
- CSS3
- Browser Storage APIs

---

## What I Learned
- Persisting data using browser storage  
- Structuring scalable JavaScript applications  
- Writing clean, maintainable, and reusable code  
- Managing application state effectively  
- Debugging using browser developer tools  

---

## Challenges & Solutions

### Data Persistence
- Issue: Data lost on refresh  
- Solution: Implemented localStorage with JSON handling  

### Code Organization
- Issue: Large, unstructured functions  
- Solution: Applied modular design and single responsibility principle  

### State Synchronization
- Issue: UI not updating correctly  
- Solution: Centralized state and controlled rendering  

---

## Code Quality Practices
- Meaningful variable and function names  
- No magic numbers  
- Single responsibility functions  
- Consistent formatting  
- Linting and formatting tools (ESLint & Prettier)  

---

## Time Spent
6–8 hours

---

## References
- Week 7 Task Instructions  
- Submission Guidelines  

---

## Status
Completed and ready for code review

---

## Future Improvements
- Add unit testing  
- Improve UI/UX design  
- Enhance error handling  
- Convert to a React-based application  
