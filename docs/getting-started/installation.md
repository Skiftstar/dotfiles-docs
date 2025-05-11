<div align="center">
<a href="#"><img src="../media/dotfiles-setup.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

> [!WARNING]
> The installation guide is under construction, try it at your own risk!
>
> It is also ment only for Arch based systems. All other distros are not supported and I will not be helping with issues related to them.

## 📁 Cloning the dotfiles

```bash
sudo pacman -S git
git clone https://github.com/Skiftstar/dotfiles.git
cp -r dotfiles/* ~/
```

---

> [!NOTE]
> The names of the packages are from the AUR and Arch Repos; adapt them to your system. Most of the packages are available on other distros official repos (most of the time out-to-date).

> [!WARNING]
> Make sure to enable `multilib` in pacman first!
> edit `/etc/pacman.conf` and uncomment multilib block so it looks like this:
>
> ```bash
> [multilib]
> Include = /etc/pacman.d/mirrorlist
> ```

## 💿 Install yay

```bash
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## 📦 Base Packages

```bash
yay -Sy hyprland hyprlock hypridle xdg-desktop-portal-hyprland hyprpicker \
        swww rofi-wayland swaync wl-clipboard cliphist \
        swayosd-git gnome-disk-utility devify polkit-gnome playerctl \
        grim slurp imagemagick cargo bluez blueman unzip \
        kitty aylurs-gtk-shell pavucontrol nemo mirage zathura-pdf-mupdf \
        mpv fastfetch fzf nano lite-xl obsidian
```

> [!NOTE]
> If hyprland is installed via archinstall, you might need to remove dunst as notification manager
>
> ```bash
> sudo pacman -R dunst
> ```

## 🌐 Browser

```bash
yay -Sy zen-browser-bin
```

Change Default Browser:

```bash
unset BROWSER
xdg-settings set default-web-browser zen-alpha.desktop
```

Extensions see [here](/app-confs/browser)

## 🎮 Gaming (and Discord, etc)

> [!NOTE]
> Steam option: `lib32-vulkan-radeon`

```bash
yay -Sy discord discord-canary steam gamescope \
    wine spotify spicetify-cli telegram-desktop \
    modrinth-app youtube-music-bin heroic-games-launcher-bin
```

## 🔧 Development

```bash
yay -Sy neovim code python \
    nodejs python-ipykernel python-pip \
    ctags nvm teams-for-linux ripgrep \
    pyenv docker bruno
```

## 🔊 Audio Service

Firstly, install these dependencies:

```bash
yay -Sy pipewire pipewire-alsa pipewire-pulse pipewire-jack wireplumber alsa-utils
```

Now enable pipewire and wireplumber systemd services:

```bash
systemctl --user enable --now pipewire wireplumber
```

> [!NOTE]
> If Audio is not working but pipewire is running, maybe restart the whole Audio stack
>
> ```bash
> systemctl --user restart wireplumber pipewire pipewire-pulse
> ```

## 🎨 Color Theme

To install the color theme for GTK and QT apps use the following command:

```bash
yay -Sy catppuccin-gtk-theme-macchiato catppuccin-cursors-macchiato \
        qt5ct qt5-wayland qt6-wayland kvantum kvantum-qt5 nwg-look
```

## 📸 Icon Theme

First off, we have to download the icon package from the releases page of their repo. You can do it very easily by using curl.

```bash
curl -LJO https://github.com/ljmill/catppuccin-icons/releases/download/v0.2.0/Catppuccin-SE.tar.bz2
```

Once you have that, its time to extract the compressed package.

```bash
tar -xf Catppuccin-SE.tar.bz2
```

And finally, move them to the ~/.local/share/icons directory.

```bash
mv Catppuccin-SE ~/.local/share/icons/
```

## 🗛 Fonts

Install the following fonts:

```bash
yay -Sy ttf-jetbrains-mono-nerd ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-mono \
        ttf-nerd-fonts-symbols-common ttf-font-awesome noto-fonts-cjk ttf-ms-win11-auto
```

After that, be sure to refresh the font cache:

```bash
fc-cache -fv
```

## ➕ Post Installation

Post Installation make sure to run the post-install script:

```bash
chmod +x ~/.config/install-scripts/install.sh
~/.config/install-scripts/install.sh
```

This will handle:

- Enabling bluetooth
- Settings Git crednetials manager to "store"
- Running Spicetify setup
- Removing MiHoYo Telemetry
- Firefox themeing (to remove topbar, etc) (DISABLED RN)

## Reboot!
