const {app, BrowserWindow, ipcMain} = require("electron")

const path = require("path")

const window = {
    window: null,
    get getWindow() {return this.window},
    set setWindow(win) {this.window = win}
}
exports.window = window

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: "limeDS",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, "preload.js")
        }
    })
    window.setWindow = win
    win.loadFile(path.join(__dirname, "index.html"))
}

ipcMain.on("getWASM", (event) => {
    return path.join(__dirname, "dist/desmond.wasm")
})

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })