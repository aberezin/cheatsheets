# To reduce the size of a pdf file:
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=output.pdf input.pdf

# To extract some pages
gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH  -dFirstPage=48 -dLastPage=48 -sOutputFile=foo.pdf my-input-file.pdf

