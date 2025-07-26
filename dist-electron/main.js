import path from 'path';
import "reflect-metadata";
import { app, BrowserWindow, ipcMain } from 'electron';
import { getPreloadPath, isDev } from './libs/util.js';
import DatabaseManager from './config/DatabaseManager.js';
import PersonService from './service/PersonService.js';
export default class ElectronApp {
    constructor() {
        this.mainWindow = null;
        this.database = new DatabaseManager();
        this.database.initializeDatabase().then(async () => {
            console.log("Database initialized successfully.");
            this.setupIPC();
            console.log("IPC handlers set up successfully.");
            // const personService = new PersonService(this.database.getDataSource());
            // const person = new Person();
            // person.name = "John Doe";
            // person.phone = "+244 912345678";
            // const personSaved = await personService.save(person);
            // console.log("Person saved to database: ", personSaved);
            // const persons = await personService.findAll();
            // console.log("Persons fetched from database: ", persons);
            this.setupApp();
        }).catch(error => {
            console.error("Error initializing database:", error);
        });
    }
    setupApp() {
        app.whenReady().then(() => {
            this.createMainWindow();
        });
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createMainWindow();
            }
        });
    }
    createMainWindow() {
        this.mainWindow = new BrowserWindow({
            width: 1280,
            height: 720,
            minWidth: 1080,
            minHeight: 720,
            fullscreenable: true,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: getPreloadPath(),
            },
            // titleBarStyle: 'hiddenInset',
            // frame: false
        });
        if (isDev()) {
            this.mainWindow.maximize();
            this.mainWindow.loadURL("http://localhost:25991");
            this.mainWindow.setIcon(path.join(app.getAppPath(), '/desktopIcon.png'));
        }
        else {
            this.mainWindow.maximize();
            this.mainWindow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"));
        }
    }
    setupIPC() {
        new PersonService(this.database.getDataSource()).setupIPC();
        // Window Controls
        ipcMain.handle('minimize-window', async () => {
            this.mainWindow?.minimize();
        });
        ipcMain.handle('close-window', async () => {
            this.mainWindow?.close();
        });
        ipcMain.handle('maximize-window', async () => {
            if (this.mainWindow?.isMaximized()) {
                this.mainWindow.unmaximize();
            }
            else {
                this.mainWindow?.maximize();
            }
        });
    }
}
new ElectronApp();
