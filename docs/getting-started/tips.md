<div align="center">
<a href="#"><img src="../media/dotfiles-tips.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

There are things that you may want to add or change. Here are some:

## Bluetooth: Disable handsfree mode

To prevent your bluetooth speaker from going into handsfree mode, you have to edit the wireplumber config:
```bash
sudo nano /usr/share/wireplumber/wireplumber.conf
```

look for the Line `bluetooth.autoswitch` and change `default` from true to `false`:
```bash
bluetooth.autoswitch-to-headset-profile = {
    description = "Whether to autoswitch to BT headset profile or not"
    type = "bool"
    default = false
}
```

Restart your audio stack
```bash
systemctl --user restart wireplumber
systemctl --user restart pipewire
```
