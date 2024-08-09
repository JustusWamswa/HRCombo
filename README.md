# HRCombo

This project aims to build a talent scouting web application enabled by AI.

The different components are placed in their specific directories, i.e, backend, frontend and the model.

Pre-requisites:
- have python installed
- install docker desktop in order to use docker run backend (optional)
- create '.env' files in backend and frontend and fill in the keys as given in 'env.example' files

To run the backend: 
- change directory to '/backend' 
- create a python environment using 'python -m venv env'
- run 'pip install -r requirements.txt'
- then run 'python manage.py runserver'

        OR

- use docker in the root directory
- run 'docker compose build'
- run 'docker compose up'

To run the frontend: 
- change directory to '/frontend' 
- run 'npm i'
- then run 'npm run dev'

To run the frontend and backend at once: 
- change directory to '/frontend' 
- run 'npm i'
- then run 'npm start-servers'