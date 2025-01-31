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

## Minecraft Audio (OpenAL) crashes on Launch

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

## Minecraft OpenAL wrong Backend

If you have weird Audio behaviour (like random crashes) when playing Minecraft, maybe your OpenAL backend isn't properly set

Launch the Game with the following env

```bash
ALSOFT_DRIVERS=pulse
```

or in prism set it as Wrapper Command

replace "pulse" with your Audio Backend if need be (pulse is also used if you're on pirewire btw!)

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

## Manually connect to VPN (PureVPN) via Ike

Install strongswan

```bash
sudo pacman -S strongswan
```

Grab your **username** and **pasword** from your dashboard

edit `/etc/ipsec.secrets` and add the following line

```bash
"YOUR_USERNAME" : EAP "YOUR_PASSWORD"
```

Grab the **server hostname** from your dashboard config (select Ike as protocol)

edit `/etc/ipsec.conf` and add the following stuff

```bash
conn ike
	keyexchange=ikev2
	ike=3des-sha1-modp1024
	esp=3des-sha1
	dpdaction=clear
	dpddelay=300s
	keyingtries=1
	eap_identity="YOUR_USERNAME"
	leftauth=eap-mschapv2
	left=%defaultroute
	leftsourceip=%config
	right=SERVER_HOSTNAME
	rightauth=pubkey
	rightsubnet=0.0.0.0/0
	rightid=pointtoserver.com
	rightsendcert=never
	type=tunnel
	auto=add
```

Copy the CA Certificate file

```bash
cp /etc/ssl/certs/USERTrust_RSA_Certification_Authority.pem /etc/ipsec.d/cacerts/USERTrust_RSA_Certification_Authority.pem
```

Restart ipsec

```bash
sudo ipsec restart
```

Connect to VPN

```bash
sudo ipsec up ike
```

Disconnect from VPN

```bash
ipsec down ike
```
