Creating an OS self

1. do `npm outdated` and/or `npm update` every time you update the project
2. red up next-pwa
3. Jest checking
   1. npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
   2. npm init jest@latest
4. `processDirectory`: You can use processDirectory.HelloWorld.Component to render the HelloWorld app/component dynamically in your UI, such as in a window manager or app launcher. This pattern is common in desktop-like web apps to manage and load apps on demand.
5. createContext is a state management tool, like zustand, recoil, redux
6. `npm run prettier` every time before pushing the code.
7.  file process.tsx defines two things:
    1.  `processContext`
         This is a React context created with createContext({}). It can be used to provide and consume shared state or functions related to "processes" (apps/components) throughout your component tree.
         Currently, it's just an empty context and not used further in this file.

    2. `ProcessLoader`
         This is a React functional component (FC).

         It imports the processDirectory object, which contains all your available "processes" (apps/components), each with a Component property.
         It loops over each entry in processDirectory and renders the corresponding component using <Component key={id} />.
         The result is that all processes in processDirectory are rendered when you use <ProcessLoader /> in your app.
