import os
import sys

with open(sys.argv[1], 'r') as file :
    documento = file.read()

documento = documento.replace('\n', ' ↵ ')
documento = documento.replace('    ', ' ↹ ')

with open(sys.argv[2], 'w') as file:
    file.write(documento)
