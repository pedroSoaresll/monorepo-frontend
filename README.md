# Example monorepo

A monorepo where apps share components might look like this:

```
monorepo
  |--apps
    |--app1
    |--app2
  |--components
    |--component1
    |--component2
    |--component3
```

### Setup Info

- this monorepo uses lerna w/ yarn workspaces
- this repo currently uses an alpha release of react-scripts

# How create a new app

Go to `./apps` directory and run:

```sh
create-react-app my-app --template typescript
```

probably you are get an error like this:

```
There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "babel-jest": "^24.9.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of babel-jest was detected higher up in the tree:

  /home/oliveira/Projects/stone/cra-monorepo-examples/node_modules/babel-jest (version: 23.6.0)

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.
```

> For now, let's do the react recomendation to pass this warning, nothing will happen.

Execute this command:

```
echo SKIP_PREFLIGHT_CHECK=true > .env
```

In this point our application already is working!! But it's far from working with monorepo. To make it work with monorepo lets do some more configs.

In `my-app/package.json` put the code below

```json
"sourceWorkspaces": [
  "components/*"
]
```

and add a devDependencies [react-scripts](https://www.npmjs.com/package/@bradfordlemley/react-scripts) by @bradfordlemley. This dependency make the magic happen

```json
"devDependencies": {
  "@bradfordlemley/react-scripts": "^2.0.402",
}
```

In `my-app/tsconfig.json` put the code below

```json
"include": [
  "src",
  "../../components/**/*"
]
```

In the end your `my-app/package.json` must be like this:

below, `@project-ui/button` is a shared component o/

```json
{
  "name": "ts-project1",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.3.0",
    "@project-ui/button": "0.1.0"
  },
  "devDependencies": {
    "@bradfordlemley/react-scripts": "^2.0.402",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0",
    "typescript": "~3.7.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "sourceWorkspaces": ["components/*"]
}
```

and your `my-app/tsconfig.json` must be like this:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src", "../../components/**/*"]
}
```

# Using your first shared component inside your react-app (CRA)

You can import a shared component by the name defined in your `shared-components/package.json` respected. You can copy it name and put in the `my-app/package.json` of your react app as **dependencies**

```json
{
  "dependencies": {
    "@project-ui/button": "0.1.0"
  }
}
```

Then, import this dependency in your react-app component and use them

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@project-ui/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button>Ola mundo</Button>
      </header>
    </div>
  );
};

export default App;
```

# How create a shared component

Go to `./components/` and and create new folder representing your new shared component

```
components
  | --new-shared-component
    | --src
      | --index.tsx
      | --index.story.tsx
      | --styles.ts
    | --package.json
```

you can create a `package.json` using

```sh
$ npm init -y
```

and define a `main` to you entripoint, for example:

```json
"main": "src/index.tsx"
```

### index.tsx file example

```js
import React from "react";

import { Button as SButton } from "./styles";

export default function Button({ children }: { children: string }) {
  return <SButton>{children}</SButton>;
}
```

### storybook file example

```js
import React from "react";
import { storiesOf } from "@storybook/react";

import Button from ".";

storiesOf("Button", module).add("default", () => <Button>Ola mundo</Button>);
```

### styles.ts file example with styled component

```js
import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #eee;
`;
```

### unit test file example

```js
import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

test("renders 'Ola mundo'", () => {
  const { getByText } = render(<Button>Ola mundo</Button>);
  const linkElement = getByText(/Ola mundo/i);
  expect(linkElement).toBeInTheDocument();
});
```
