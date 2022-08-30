# Synacy-Employee-Leave-Project-FrontEnd
This project is the Front End part for the [Leave-Management-Project](https://github.com/UTBox/Synacy-Employee-Leave-Project.git), and is part of the final project of the **Synacy Graduate Program 2022**.
>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Project Requirements:

-

## Business Rules:

- Only admin can approve the leave request of a manager.
- Employee details are not updatable/editable once saved.
- **Admin** cannot file for a leave.
- Admin can view all and approve leave requests from manager and member.
- Manager can only view and approve leave request of members under his/her jurisdiction.
- Member cannot can only view their own leave application, and it’s corresponding status.
- Only admin can create employee and assign an employee as manager 
- Only admin can set total number of leave for employees.
- Once leaves are *accepted* or *rejected*, it cannot be changed, and
- Once the employee uses up all their leave days, they can no longer file for leave. *(SHOULD also not be able to file for leave if the applied leave exceeds their balance. (e.g. 3 days of leave left, but they file for a 4-day leave, thus leave cannot be filed))*
- Accessing a user’s POV will only be using a dropdown list.
- Only admin can view the list of all employees.
- Pending leaves can be cancelled.
- Employees can only view their own leave requests and history.
- Everytime a leave is requested, it must deduct to the total number of annual leaves and when it is cancelled and rejected it must return the deducted value.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.



