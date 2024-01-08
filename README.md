## Twitter Electron App

A simple Twitter app built with Electron.
I have given 3 files in releases (AppImage, .desktop, icon)

### Can open directly by double clicking the .AppImage file (Note: It should be executable)

### To make the app appear in app menu:
Move the AppImage to /opt
```bash
sudo mkdir /opt/Twitter-electron
sudo cp Twitter.AppImage /opt/Twitter-electron/
```
Move the icon.png to icons folder
```bash
sudo mkdir /usr/share/icons/Twitter-logo
sudo cp icon.png /usr/share/icons/Twitter-logo
```
Move the .desktop file to applications folder
```bash
sudo cp Twitter-Electron.desktop /usr/share/applications/
```
SHA256sum:
dd01cbee267520e8f02048330e29d6d35d6f57b52e74eb5087de7a7a35d104c3
