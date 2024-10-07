$(document).ready(function() {
    const configForms = {
        nfsServer: [
            { name: 'mountPoint', label: 'Mount Point', type: 'text', placeholder: '/export' },
            { name: 'serverLocation', label: 'Server Location', type: 'text', placeholder: 'localhost' },
            { name: 'portNumber', label: 'Port Number', type: 'number', placeholder: '2049' },
            { name: 'timeout', label: 'Timeout (seconds)', type: 'number', placeholder: '60' },
            { name: 'enableCaching', label: 'Enable Read/Write Caching', type: 'checkbox' },
            { name: 'quotaLimit', label: 'Quota Limit (MB, 0 for no limit)', type: 'number', placeholder: '0' },
            { name: 'fileHierarchy', label: 'File Hierarchy', type: 'text', placeholder: 'flat' },
            { name: 'aclRules', label: 'ACL Rules', type: 'text' },
            { name: 'enableEncryption', label: 'Enable Encryption', type: 'checkbox' },
            { name: 'networkInterface', label: 'Network Interface', type: 'text', placeholder: 'lo' },
            { name: 'netmask', label: 'Netmask', type: 'text', placeholder: '0.0.0.0' },
            { name: 'ipAddress', label: 'IP Address', type: 'text', placeholder: '127.0.0.1' }
        ],
        nfsClient: [
            { name: 'mountPoint', label: 'Mount Point', type: 'text', placeholder: '/mnt' },
            { name: 'serverLocation', label: 'Server Location', type: 'text', placeholder: 'localhost' },
            { name: 'portNumber', label: 'Port Number', type: 'number', placeholder: '2049' },
            { name: 'timeout', label: 'Timeout (seconds)', type: 'number', placeholder: '60' },
            { name: 'enableCaching', label: 'Enable Read/Write Caching', type: 'checkbox' },
            { name: 'quotaLimit', label: 'Quota Limit (MB, 0 for no limit)', type: 'number', placeholder: '0' },
            { name: 'fileHierarchy', label: 'File Hierarchy', type: 'text', placeholder: 'flat' },
            { name: 'aclRules', label: 'ACL Rules', type: 'text' },
            { name: 'enableEncryption', label: 'Enable Encryption', type: 'checkbox' },
            { name: 'networkInterface', label: 'Network Interface', type: 'text', placeholder: 'lo' },
            { name: 'netmask', label: 'Netmask', type: 'text', placeholder: '0.0.0.0' },
            { name: 'ipAddress', label: 'IP Address', type: 'text', placeholder: '127.0.0.1' }
        ],
        smbServer: [
            { name: 'shareDirectory', label: 'Share Directory', type: 'text', placeholder: '/mnt' },
            { name: 'serverLocation', label: 'Server Location', type: 'text', placeholder: 'localhost' },
            { name: 'portNumber', label: 'Port Number', type: 'number', placeholder: '445' },
            { name: 'maxConnections', label: 'Max Connections', type: 'number', placeholder: '0' },
            { name: 'maxFilesPerShare', label: 'Max Files per Share', type: 'number', placeholder: '0' },
            { name: 'maxFileSize', label: 'Max File Size (bytes)', type: 'number', placeholder: '0' },
            { name: 'fileSystemType', label: 'File System Type', type: 'text', placeholder: 'auto' },
            { name: 'enableCaching', label: 'Enable Read/Write Caching', type: 'checkbox' },
            { name: 'aclRules', label: 'ACL Rules', type: 'text' },
            { name: 'enableEncryption', label: 'Enable Encryption', type: 'checkbox' },
            { name: 'networkInterface', label: 'Network Interface', type: 'text', placeholder: 'lo' },
            { name: 'ipAddress', label: 'IP Address', type: 'text', placeholder: '127.0.0.1' }
        ],
        smbClient: [
            { name: 'shareDirectory', label: 'Share Directory', type: 'text', placeholder: '/mnt' },
            { name: 'serverLocation', label: 'Server Location', type: 'text', placeholder: 'localhost' },
            { name: 'portNumber', label: 'Port Number', type: 'number', placeholder: '445' },
            { name: 'maxConnections', label: 'Max Connections', type: 'number', placeholder: '0' },
            { name: 'maxFileSize', label: 'Max File Size (bytes)', type: 'number', placeholder: '0' },
            { name: 'enableCaching', label: 'Enable Read/Write Caching', type: 'checkbox' },
            { name: 'aclRules', label: 'ACL Rules', type: 'text' },
            { name: 'enableEncryption', label: 'Enable Encryption', type: 'checkbox' },
            { name: 'networkInterface', label: 'Network Interface', type: 'text', placeholder: 'lo' },
            { name: 'netmask', label: 'Netmask', type: 'text', placeholder: '0.0.0.0' },
            { name: 'ipAddress', label: 'IP Address', type: 'text', placeholder: '127.0.0.1' },
            { name: 'leaseTimeout', label: 'Lease Timeout (seconds)', type: 'number', placeholder: '60' }
        ],
        sshfsClient: [
            { name: 'remoteHost', label: 'Remote Host', type: 'text' },
            { name: 'remotePath', label: 'Remote Path', type: 'text' },
            { name: 'mountPoint', label: 'Mount Point', type: 'text' },
            { name: 'user', label: 'User', type: 'text' },
            { name: 'port', label: 'Port', type: 'number', placeholder: '22' },
            { name: 'identityFile', label: 'Identity File (optional)', type: 'text' },
            { name: 'otherOptions', label: 'Other Options', type: 'text', placeholder: '-o allow_other,reconnect' }
        ]
    };

    function showInstructions() {
        alert("This application allows you to configure NFS and SMB servers and clients, as well as SSHFS clients.\n\nSelect a configuration option from the sidebar, fill out the form, and submit to generate the configuration.");
    }

    function showConfigurationForm(formType) {
        $('#formTitle').text(`Configure ${formType}`);
        const form = $('#configForm');
        form.empty();

        configForms[formType].forEach(field => {
            const fieldHtml = `
                <div>
                    <label class="block text-sm font-medium text-gray-700">${field.label}</label>
                    <input type="${field.type}" name="${field.name}"
                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           ${field.placeholder ? `placeholder="${field.placeholder}"` : ''}>
                </div>
            `;
            form.append(fieldHtml);
        });

        $('#configurationForm').removeClass('hidden');
        $('#result').addClass('hidden');
    }

    function handleFormSubmit(formType) {
        const formData = $('#configForm').serializeArray();
        let result = `${formType} Configuration:\n\n`;

        formData.forEach(field => {
            result += `${field.name}: ${field.value}\n`;
        });

        if (formType === 'sshfsClient') {
            const mountCommand = generateSSHFSMountCommand(formData);
            result += `\nMount Command:\n${mountCommand}\n`;
            result += `\nUnmount Command:\nfusermount -u [mount_point]`;
        }

        $('#resultContent').text(result);
        $('#result').removeClass('hidden');
    }

    function generateSSHFSMountCommand(formData) {
        const data = {};
        formData.forEach(field => {
            data[field.name] = field.value;
        });

        let command = `sshfs `;
        if (data.user) command += `${data.user}@`;
        command += `${data.remoteHost}:${data.remotePath} ${data.mountPoint}`;
        if (data.identityFile) command += ` -o IdentityFile=${data.identityFile}`;
        if (data.port && data.port !== '22') command += ` -o port=${data.port}`;
        if (data.otherOptions) command += ` ${data.otherOptions}`;

        return command;
    }

    $('#instructionsBtn').click(showInstructions);
    $('#nfsServerBtn').click(() => showConfigurationForm('nfsServer'));
    $('#nfsClientBtn').click(() => showConfigurationForm('nfsClient'));
    $('#smbServerBtn').click(() => showConfigurationForm('smbServer'));
    $('#smbClientBtn').click(() => showConfigurationForm('smbClient'));
    $('#sshfsClientBtn').click(() => showConfigurationForm('sshfsClient'));

    $('#submitBtn').click(() => {
        const formType = $('#formTitle').text().replace('Configure ', '').toLowerCase();
        handleFormSubmit(formType);
    });
});