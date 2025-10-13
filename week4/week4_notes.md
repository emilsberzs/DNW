# Building web apps with Node.js and Express, part 3.
## Routing
- See index.js lines 11-12 in ./Routes
```
app.get("/contact", (request, response) => response.send("text"))
```

## Seperation of concerns (SoC)
> 'SoC is the idea that each module or layer in an application should only be responsible for one thing and should not contain code that deals with other things.'

> 'In computer science, SoC is a design principle for separating a computer program into distinct sections, such that each section addresses separate consern.'

> 'A concern in this context is a set of information that affects the code of a computer program.'

### How to achieve SoC
- Create modules for construction of application and use information hididng in them, aka Encapsulation
- Layer the functionality in application (3 tier architecture, MVC etc)
- Plan logical layers, and design in a way that they are loosely coupled with other layers
- SoC can be expressed in different levels as:
    - functions
    - modules
    - controls
    - widgets
    - tiers
    - services
    - etc
    
- Benefits of SoC:
    - Reduces complexity
    - Helps DRY strategy
    - Improves portability
    - Improves maintainability and testability