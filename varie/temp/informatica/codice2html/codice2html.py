## 

import os
import subprocess
import sys

comando1 = 'mkdir ' + sys.argv[1]

comando2 = 'pandoc --template modello.html' + ' ' + sys.argv[2] + ' -o' + ' ' + sys.argv[3]

subprocess.run(comando1, shell=True)

subprocess.run(comando2, shell=True)
