<div align='center'>
    <h2 align='center'>Quizzy</h2>
    <img src='logo.png' alt='Quizzy Logo' height='100px' width='100px'>
    <p align='center'>
        The best mikroskil's students creation of quiz-platform!
    </p>
</div>


## About Quizzy

Quizzy is a quiz app to learn interactively for students,
but open-source which is very important if it is a product for educational
purposes.
You can create quizzes and play them remotely with other people.
It is mainly made for teachers who create a
quiz, so students can compete with their knowledge against each other.

### Things to know about the structure

Since this repo is a monorepo, the frontend is located in
the [`frontend/`](https://github.com/giovannyhalimko/Quizzy/tree/master/frontend)-directory.
The backend-project (Pipfile) is in the root, but all the code is located in
the [`classquiz/`](https://github.com/giovannyhalimkoQuizzy/tree/master/frontend)-folder.

#### Tech-Stack

##### Backend

The backend is made with [FastAPI](https://fastapi.tiangolo.com/) (web-framework)
, [ormar](https://github.com/collerek/ormar/) (ORM)
, [python-socketio](https://python-socketio.readthedocs.io/en/latest/) (realtime-communication between server and
client)

##### Frontend

The frontend is made with [SvelteKit](https://kit.svelte.dev/) (web-framework)
and [TailwindCSS](https://tailwindcss.com/) (Css-Framework).

##### External Dependencies

Selfhostable:

- [Meilisearch](https://www.meilisearch.com/) (Search-Server)
- [Caddy](https://caddyserver.com/) (Reverse Proxy)
- [Postgres](https://www.postgresql.org/) (Database)
- [Redis](https://redis.io/) (Cache)

Closed-Source 3rd parties:

- [Mapbox](https://www.mapbox.com/) (maps)
- [hCaptcha](https://www.hcaptcha.com/) (captcha)

---