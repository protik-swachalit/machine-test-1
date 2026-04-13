Since you are in a **45-minute machine test**, you need to be fast and precise. Below is the updated `README.md` content, specifically tailored to what you have already built (Models, pagination, DB connection). 

I've updated the **API Documentation** to match the search and pagination features you implemented, which actually goes slightly above the basic requirements—great for showing off those MERN skills.

---

##  README Update (Your Submission)

###  Status: Backend Core Completed
I have successfully set up the backend architecture, database integration, and the primary Note/User management system.

###  Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <your-fork-url>
    cd <project-folder>/server
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the `/server` directory:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_connection_string
    ```

###  How to Run

**Backend:**
```bash
# From the /server directory
npm run dev
```

**Frontend:**
*(Pending implementation)*

---

### 📑 API Documentation

The backend is configured with **CORS** and **JSON parsing** middleware. The notes list endpoint is optimized with pagination.

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/notes` | Create a new note | `title`, `content`, `userId` |
| **GET** | `/api/notes` | Get notes with search & pagination | `search`, `page`, `limit` |
| **PUT** | `/api/notes/:id` | Update an existing note | `title`, `content` |
| **DELETE**| `/api/notes/:id` | *(In Progress)* | `id` |

**Example Search/Pagination Request:**
`GET /api/notes?search=interview&page=1&limit=5`

---

###  Progress Checklist

* [x] **Database:** MongoDB Cluster created and connected via Mongoose.
* [x] **Models:** * `User`: To track ownership of notes.
    * `Note`: Stores `title`, `content`, and timestamps.
* [x] **Backend Config:** Initialized `cors`, `dotenv`, and `express.json`.
* [x] **Endpoints:** * `POST` (Create)
    * `GET` (List with query, pagination, and limit)
    * `PUT` (Update)

---

###  Pull Request Details

#### Summary of Solution
I have implemented a structured MERN backend. Instead of a basic array-fetch, I implemented **Pagination and Query filtering** on the `GET` endpoint to ensure the application remains performant as the database grows.

#### Features Implemented
* Relational Data Modeling (User <-> Notes).
* Advanced List Filtering (Search + Pagination).
* Secure Environment Variable management.
* Express server with standard middleware (CORS, Body-parser).

#### Assumptions or Limitations
* **Assumption:** The `userId` is currently passed in the jwt/cookie header for note creation.
* **Limitation:** Delete functionality and Frontend integration are the next priority items.
* **Limitation:** Authentication (JWT) is not implemented as per the 45-min test scope; using a raw `User` model for tracking instead.