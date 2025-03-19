# React JS

## Key Terms

- **Components**: Functional and Class components.
- **JSX**: JavaScript XML, a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript.
- **DOM / Virtual DOM / Keys**: The Document Object Model (DOM) represents the page's structure. The Virtual DOM is a lightweight, in-memory copy of the real DOM, used to optimize performance by reducing the number of direct DOM manipulations.
- **State**: A React component's internal data that can change over time.
- **Hooks**: Functions that let you "hook into" React state and lifecycle features from functional components.
- **Renders**: React components re-render when their state or props change.
- **Strict Mode**: A built-in tool that helps ensure application reliability by highlighting potential issues during development.

## Useful Resources

- **PwMosh’s Beginner Tutorial**: A great starting point for beginners (watched), or his money-back guaranteed course.
- **My own GitHub projects**: A collection of practical React projects to learn from.

## Notes

React was created by Meta in 2011 to simplify the process of building front-end UIs. React components are the building blocks of your UI, and they are created using JSX.

You can initiate projects with `create vite@latest` or another framework. By default, it will be configured with React DOM for web, but you can also use React Native for mobile development.

## How it Works Technically

When updates occur (e.g., values in state), components re-render in the Virtual DOM based on keys. The Virtual DOM is in-memory, and each node represents a component and its properties. When state changes, components and their children rerender.

Components are typically written as functions in JSX/TSX files that return markup. These functions get compiled into JavaScript (you can see this with tools like Babel). JavaScript can be embedded within JSX using curly braces `{}`.

Strict Mode is a built-in tool that helps ensure application reliability by highlighting potential issues during development.

## Advantages of React

- **UI Building**: React is great for building UIs by minimizing the code required to keep the view in sync with state.
- **Compatibility**: React has wide compatibility with the JavaScript/TypeScript ecosystem and other technologies.

## Project Structure

Typical React project structures include the following folders:

- `./components`: Contains your reusable components.
- `./public`: Static assets, including index.html and images.
- `./types`: TypeScript interfaces and types.
- `./utils`: Utility functions.

If you only have one file in a folder (e.g., `types` or `utils`), you can name the file `index.ts` (or `.js`), and it will be imported by default when referencing the folder.

**Naming convention**: React components should be named in **PascalCase**.

## Commonly Used With React

- **Frameworks**: Next.js (for server-side rendering)
- **Styling Libraries**:
  - Tailwind CSS: Predefined classes for specific style properties.
  - Bootstrap: Predefined classes for UI elements.
- **HTTP Libraries**: Axios for making HTTP requests.
- **State Management**: Redux, Context API.
- **Testing Libraries**: Playwright, React Testing Library, Cypress (for E2E testing).
- **Internationalization**: Libraries for localization and i18n support.
- **UUIDs**: For generating unique IDs.
- **Form Libraries**: React Hook Form, Textarea Autosize.
- **VSCode Extensions**:
  - Prettier: Automatically formats code.
  - ES7 React Snippets: Provides shortcuts for React code.
  - Emmet: Fast HTML and JSX coding.
- **Chrome Extensions**:
  - React DevTools: Inspect your component tree in the browser.

## Legacy Code and Class vs Functional Components

Legacy code often uses **Class components**, which are now considered outdated. You may encounter terms like `componentDidMount`, `React.Fragment`, and “Render-X.” Functional components are the newer standard, requiring less code to achieve the same functionality.

### Comparison Between Class and Functional Components

- **Class Components**: Use lifecycle methods like `componentDidMount`.
- **Functional Components**: Use **Hooks**, like `useEffect` to manage lifecycle events.

### Clean Components

Conditionals, props, and state help make components reusable and clean in React. For example, instead of having separate states like `pass` and `studentFeedback`, conditional variables can be used:

```javascript
const [score, setScore] = useState(0);
const pass = score > passMark;
const studentFeedback = pass ? "Nice work!" : "See me after class.";
```

You can also conditionally return early, for instance:

javascript
Copy
if (unauthorised) return <SignInForm />;
JSX Conditional Rendering
Ternary Operator: { condition ? trueValue : falseValue }
Logical AND: { condition && trueValue }
Props
Props are used to pass data from a parent component to a child component. For example:

jsx
Copy
className={'color-' + color}
Destructure props to avoid accessing them as props.item, props.name, etc.

The children prop is special in React and allows you to pass components or HTML elements as children:

jsx
Copy
<MyComponent>Some children content</MyComponent>
Conditional Rendering and State
You can conditionally apply classes using the ternary operator or logical && operator in JSX. State is used to track dynamic values over time, and useState is the hook that allows React to remember data.

javascript
Copy
const [isActive, setIsActive] = useState(false);
Mapping and Keys
In JSX, use map() to iterate over lists. Each child in a list needs a unique key to help React identify changes efficiently:

javascript
Copy
items.map(item => <div key={item.id}>{item.name}</div>);
Event Handling
React uses Synthetic Events, which are normalized across browsers. When handling events like onClick, you can pass functions without invoking them (i.e., onClick={handleClick} instead of onClick={handleClick()}).

TypeScript and Interfaces
Interfaces help define the structure of your props. For example:

typescript
Copy
interface Props {
item: string;
name: string;
onSelectItem: (item: string) => void;
}
Props should generally not be mutated, but they can be optional or have specific default values. For optional props, add a ? to the interface:

typescript
Copy
interface Props {
color?: string;
}
You can also specify exact values for props:

typescript
Copy
color: 'blue' | 'green' | 'red';
Default Values on Props
To assign default values to props, you can set them in the component's destructure:

jsx
Copy
const MyComponent = ({ color = 'primary' }: Props) => { ... }

# React Resources Used

- **React Official Docs**: [React Official Documentation](https://react.dev/learn)

## Key Terms and Concepts

### General:

- **Concatenation**: Adding two variables together, e.g., `{ 'Photo of ' + username }`.
- **Conditional Rendering**: Displaying content based on conditions. This can be achieved with:
  - `if(conditions)`
  - Ternary `condition ? trueValue : falseValue`
  - Logical AND `condition && trueValue`

### React:

- **Components**: Reusable UI blocks with their own logic.
- **Nesting Components**: Placing components inside another component's return block.
- **Attributes**: React modifies HTML attribute names (e.g., `class` becomes `className`).
- **Escaping into JavaScript**: Use curly braces `{}` to inject JavaScript into JSX.

### Event Handling:

- React uses **Synthetic Events**, providing a wrapper around native browser events.
- To annotate events in TypeScript, use `MouseEvent`, e.g., `onClick={(e: MouseEvent) => handleClick(e)}`.

### Hooks:

- **useState**: A hook to manage state within a component.
- **useEffect**: A hook to manage side effects (similar to lifecycle methods in class components).
- **useContext**: A hook for sharing state across deeply nested components.

---

This structure provides an organized, easy-to-follow guide on React, from basic concepts to more advanced topics.
