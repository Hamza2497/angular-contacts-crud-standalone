# Angular Contacts CRUD (Standalone Components)

This is a modern Angular CRUD (Create, Read, Update, Delete) application for managing a list of contacts. It is built entirely using **standalone components**, following Angular’s latest best practices and avoiding the traditional `AppModule` structure.

## 🔧 Tech Stack

- **Angular (v19)**
- **Standalone Components**
- **Angular Forms** (Reactive Forms)
- **Angular Router**
- **TypeScript**
- **Bootstrap** (or your preferred CSS framework)

## 🚀 Features

- View a list of contacts
- Add new contact
- Edit existing contact
- Delete contact
- Form validation
- Routing and navigation
- Component-based architecture using standalone components

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Install and Run

```bash
gh repo clone Hamza2497/angular-contacts-crud-standalone
cd angular-contacts-crud-standalone
npm install
ng serve


## 📁 Folder Structure (please advise folder structure is being updated as the project heads towards completion)

```bash
src/
└── app/
    ├── AppConfig/                 # App-wide config components or setup
    ├── container/                # Possibly the root layout/shell
    ├── employee/                 # Feature module or page for employees
    ├── header/                   # Header component
    ├── navigation/              # Navigation or sidebar component
    ├── notfound/                # 404 page component
    ├── rooms/                   # Feature module or page for rooms
    ├── app.component.*          # Root Angular component (standalone)
    ├── app.config.ts            # Main application configuration
    ├── app.routes.ts            # App routing setup (standalone routes)
    ├── init.service.ts          # Initialization logic or app startup service
    ├── request.interceptor.ts   # HTTP request interceptor
    └── localstorage.token.ts    # Token handling for local storage



