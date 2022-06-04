## !pip install pandoc

import pandoc

input = pandoc.read(file='codice.md')
output = pandoc.write(input, file="output.html", options=["--template=modello.html"])
