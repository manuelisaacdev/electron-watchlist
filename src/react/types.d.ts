interface Window {
    electron: {
        // CRUD operations
        persons: {
            findAll: () => Promise<Person[]>;
        },
        
        // Window controls
        mainWindow: {
            minimizeWindow: () => Promise<void>;
            closeWindow: () => Promise<void>;
        };
    };
}