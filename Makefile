copy-id-pub:
	pbcopy < ~/.ssh/id_rsa.pub

copy-id:
	pbcopy < ~/.ssh/id_rsa

serve:
	doppler run --config dev -- ng serve
