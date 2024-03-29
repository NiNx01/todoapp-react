# React To-Do List App with Vite

This is a simple To-Do List application built using React.js with the Vite framework. The application allows users to create, update, and delete tasks.

## Features

- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks

## Technologies Used

- React.js
- Vite
- Context API

## Usage of Context API

This To-Do List App utilizes React's Context API for managing application-wide state related to tasks. The Context API is particularly useful for providing state and actions to multiple components without having to pass props down through each level of the component tree.

The `TaskContext` provides the following functionality:
- `tasks` state: Array of tasks.
- `addTask(task)`: Method to add a new task to the list.
- `updateTask(taskId, updatedTask)`: Method to update an existing task.
- `deleteTask(taskId)`: Method to delete a task.
- `toggleTaskStatus(taskId)`: Method to toggle the status (completed or active) of a task.

