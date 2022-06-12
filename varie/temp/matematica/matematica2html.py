## 

import os

os.system('pdflatex 1.tex')

os.system('convert -density 300 -background white -alpha remove -alpha off 1.pdf 1.png')

os.system('pandoc -f latex -t html --mathjax --template modello.html 1.tex -o 1.html')
 




