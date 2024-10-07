# NFS Config Tool

NFS Config Tool is a web-based application that helps you configure NFS and SMB servers and clients, as well as SSHFS clients. This tool is containerized using Docker for easy deployment and use.

![netfs-tools](https://github.com/user-attachments/assets/2e03bda2-f824-4eb0-b72b-7ec144386eb4)

## Prerequisites

- Docker
- Docker Compose

## Getting Started

Follow these steps to get the NFS Config Tool running on your system:

1. Clone the repository:
   ```
   git clone https://git.blakbox.vip/baxterblk/NetFS-Tools.git
   ```

2. Navigate to the Docker directory:
   ```
   cd NetFS-Tools/Docker
   ```

3. Build and start the Docker container:
   ```
   docker-compose up --build
   ```

4. Once the container is running, open a web browser and go to:
   ```
   http://localhost:8080
   ```

You should now see the NFS Config Tool interface.

## Using the NFS Config Tool

1. When you first open the application, you'll see the Instructions page. This page provides a comprehensive guide on how to use the tool.

2. Use the sidebar to navigate between different configuration options:
   - NFS Server
   - NFS Client
   - SMB Server
   - SMB Client
   - SSHFS Client

3. Click on a configuration option to display its form.

4. Fill out the form with your desired configuration settings.

5. Click the "Submit Configuration" button to generate the configuration.

6. Review the generated configuration in the "Configuration Result" section.

## Project Structure

- `Docker/`: Contains all Docker-related files
  - `docker-compose.yml`: Defines the Docker service
  - `Dockerfile`: Instructions for building the Docker image
  - `src/`: Source files for the web application
    - `index.html`: Main HTML file
    - `app.js`: JavaScript file containing the application logic

## Customization

If you need to modify the application:

1. Edit the files in the `src/` directory as needed.
2. Rebuild and restart the Docker container:
   ```
   docker-compose down
   docker-compose up --build
   ```

## Troubleshooting

If you encounter any issues:

1. Ensure Docker and Docker Compose are correctly installed and up to date.
2. Check the Docker logs for any error messages:
   ```
   docker-compose logs
   ```
3. Verify that port 8080 is not being used by another application on your system.
