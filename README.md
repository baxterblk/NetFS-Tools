# NFS/SMB Interactive Manager

## Description

This bash script provides an interactive, menu-driven interface for configuring NFS (Network File System) and SMB (Server Message Block) servers and clients, as well as SSHFS (SSH Filesystem) clients. It uses the `dialog` utility to create a user-friendly interface for managing various network file system configurations.

![netfs-tools-dialog](https://github.com/user-attachments/assets/00ed8928-78d0-4cb3-915a-a4bfe92f8dc5)

## Features

- Interactive menu-driven interface
- Configuration options for:
  - NFS Server
  - NFS Client
  - SMB Server
  - SMB Client
  - SSHFS Client
- Detailed configuration options for each service, including:
  - Mount points
  - Server locations
  - Port numbers
  - Timeouts
  - Caching settings
  - Access Control Lists (ACLs)
  - Encryption settings
  - Network interface configurations
  - And more...

## Prerequisites

- Bash shell
- `dialog` utility (usually pre-installed on most Linux distributions)

## Usage

1. Clone the repository:
   ```
   git clone https://git.blakbox.vip/baxterblk/nfs-smb-interactive-manager.git
   ```

2. Navigate to the script directory:
   ```
   cd nfs-smb-interactive-manager
   ```

3. Make the script executable:
   ```
   chmod +x network-fs-setup.sh
   ```

4. Run the script:
   ```
   ./network-fs-setup.sh
   ```

5. Use the arrow keys to navigate the menu, Enter to select an option, and Tab to move between fields in forms.

## Menu Options

1. **Instructions**: Displays usage instructions for the script.
2. **Configure NFS Server**: Set up various NFS server parameters.
3. **Configure NFS Client**: Configure NFS client settings.
4. **Configure SMB Server**: Set up Samba server parameters.
5. **Configure SMB Client**: Configure Samba client settings.
6. **Configure SSHFS Client**: Set up SSHFS client parameters.
7. **Exit**: Quit the script.

## Configuration Options

Each service (NFS Server/Client, SMB Server/Client, SSHFS Client) has its own set of configuration options. These include:

- Mount point configuration
- Server location settings
- Port number configuration
- Timeout settings
- Caching options
- Quota configurations
- File hierarchy settings
- Access Control List (ACL) configurations
- Encryption settings
- Network interface and IP address configurations

For SSHFS, additional options include:
- Remote host and path settings
- User authentication options
- SSH key configurations
- Mount and unmount command generation

## Note

This script is designed for configuration purposes and does not actually implement the changes. It provides a way to interactively set various parameters and generate configuration commands. You may need to manually apply these configurations or integrate them into your system's configuration files.
