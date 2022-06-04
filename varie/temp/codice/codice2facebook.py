import os
import sys

with open('2.py', 'r') as file :
    documento = file.read()

documento = documento.replace('\n', ' ↵ ')
documento = documento.replace('    ', ' ↹ ')

with open('1.txt', 'w') as file:
    file.write(documento)
