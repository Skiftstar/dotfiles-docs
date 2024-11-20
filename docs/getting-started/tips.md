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

## Minecraft Pulseaudio crashes

If Minecraft modpacks don't work for no apparent reason, try:
either edit `~/.alsoftrc` to

```bash
[general]
drivers=pulse
hrtf=true
```

or if the file doesn't exist run

```bash
/bin/alsoft-config
```

Then `Backends -> Right Click Priority Backends -> Add PulseAudio`

## Blueooth Keyboards

Sometimes bluetooth keyboards can be weird...

Try the following steps:

- Turn keyboard to search mode
- Search for device and DO NOT connect
- Pair instead
- Wait until paired and Kb auto disconnects
- THEN connect
- should work now!

## Installing Rasa for Python

```bash
yay pyenv python-wheel python-fire
pyenv install 3.9.20
pyenv exec pip install --upgrade setuptools==70.0.0
pyenv exec pip install rasa
```

Should work now!
