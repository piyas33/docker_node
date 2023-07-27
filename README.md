# docker_node

1. Clone project:
   ```
   git clone https://github.com/piyas33/docker_node
   ```
2. Install Dependency:
   ```
   npm install
   ```
3. Build the Docker image:
   ```
   docker build -t docker_node:app .
   ```
   show all images:
   ```
   docker images -a
   ```
4.  Run a Container:
    ```
     docker run -d -p 49160:8002 docker_node:app
    ```

Browse:  http://localhost:8002
