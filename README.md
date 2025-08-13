# Lab: Form Storage

## Overview  
Now that we’ve covered the basics of creating custom hooks, let’s use our skills to implement a popular feature when it comes to user convenience. You are working with a repair company and you want the user to be able to keep the inputted form data between refreshes. They don’t want to store it within a `db.json` file as that is less secure, however, we can use the user's local storage to store the data and create a custom hook in order to manipulate the local storage.

## Task 1: Define the Problem  
As a user, one should be able to:
- Input data in the form.
- Refresh the page.
- See the form store the data.

## Task 2: Determine the Design  
- Build a custom hook that will manipulate local storage.

## Task 3: Develop the Code  
- Create a custom hook, `useLocalStorage`, to manipulate the local storage of the user.
- Connect the custom hook to the form to persist user data upon refresh.

## Task 4: Test and Refine  
- Debug and test during development using the provided test suite and React DevTools in Chrome.

## Task 5: Document and Maintain  
- Commit as you go, writing meaningful commit messages.
- Push commit history to GitHub periodically and when the lab is complete.

---

## Tools and Resources  
- **React Custom Hooks:** [React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks)  
- **localStorage:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)  

---

## Instructions  

### Set Up  
Before we begin coding, let's complete the initial setup for this lesson:

#### Fork and Clone  
1. Go to the provided GitHub repository link.
2. Fork the repository to your GitHub account.
3. Clone the forked repository to your local machine.
4. Open the project in VSCode.
5. Run `npm install` to install all necessary dependencies.

### Task 1: Define the Problem  
As a user, one should be able to:
- Input data in the form.
- Refresh the page.
- See the form store the data.

### Task 2: Determine the Design  
- Build a custom hook that will manipulate local storage.

### Task 3: Develop, Test, and Refine the Code  

#### Open React application in the browser  
```sh
npm run dev
```

#### Run test suite  
```sh
npm run test
```

#### Create feature branch  
- **Create custom hook, `useLocalStorage`**
  - `useLocalStorage` function will have **2 inputs**:
    - `key`: The name of the input.
    - `initialValue`: The initial value of the input.
  - **Create a state** to represent input data:
    - The initial value of the state is either the localStorage data or `initialValue`.
    - **Hint:** Use `localStorage.getItem`.
  - **Return state and setter function.**
  - **Build `useEffect`** that will update the localStorage of the user:
    - The dependency array includes both `key` and `state`.
    - **Hint:** Use `localStorage.setItem` to set values in the local storage.
- **Connect custom hook to form:**
  - Connect to the `name` and `serviceNumber` fields of the form.
  - Ensure the key of each is `"name"` and `"serviceNumber"` respectively.
- **Push feature branch and open a PR on GitHub.**
- **Merge to main.**

### Task 4: Document and Maintain  

#### Best Practice Documentation Steps:
- Add comments to the code to explain purpose and logic.
- Clarify intent/functionality of code to other developers.
- Add a screenshot of the completed work in Markdown in `README.md`.
- Update `README.md` to reflect the functionality of the application following [this guide](https://makeareadme.com).
- Delete any stale branches on GitHub.
- Remove unnecessary/commented-out code.
- If needed, update `.gitignore` to remove sensitive data.

---

## Submission  
Once all tests are passing and working code is pushed to the GitHub `main` branch, submit your GitHub repo through Canvas using CodeGrade.

## Implementation Summary

- Created a **custom hook** `useLocalStorage(key, initialValue)` to store and retrieve form data from browser `localStorage`.
- Updated `Form.jsx` to use **controlled inputs** for `name` and `serviceNumber` fields.
- Keys used for persistence: `"name"` and `"serviceNumber"`.
- Values are stored as **plain strings** (no JSON serialization), matching test expectations.
- Verified that:
  - Form values remain after refreshing the page.
  - All 6 tests pass via `npm run test`.

### Demo Screenshot

![Form persists values](screenshot.png)

## Grading Criteria  
The application passes all test suites.

Ensure the application:
- **Persists user data between refreshes.**
- **Has a functional custom hook (`useLocalStorage`).**
