# python3 blog.py cartella-da-creare documento-da-convertire documento-da-creare

import sys
import subprocess

comando1 = 'mkdir ' + sys.argv[1]

comando2 = 'pandoc -f markdown -t html --mathjax --template modello.html' + ' ' + sys.argv[2] + ' -o' + ' ' + sys.argv[3]

subprocess.run(comando1, shell=True)

subprocess.run(comando2, shell=True)
