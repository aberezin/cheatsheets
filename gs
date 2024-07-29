# To reduce the size of a pdf file:
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=output.pdf input.pdf

# To extract some pages
gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH  -dFirstPage=48 -dLastPage=48 -sOutputFile=foo.pdf my-input-file.pdf

# pdf to jpg. Note I have an alias for this: pdf2jpg
alias pdftojpg="gs -dNumRenderingThreads=4 -dNOPAUSE -sDEVICE=jpeg -dFirstPage=1 -dLastPage=1 -sOutputFile=athina%d.jpg -dJPEGQ=100 -r300 -q athina.pdf -c quit"

#Misc document conversions scripts. These are not useful as aliases but simply document stuff
#from http://bertanguven.com/faster-conversions-from-pdf-to-pngjpeg-imagemagick-vs-ghostscript/
#carve out only page 2 of a pdf
alias carvePdf="gs -sDEVICE=pdfwrite -dNOPAUSE -dBATCH -dFirstPage=2 -dLastPage=2 -sOutputFile=./athina.pdf 2014_11_30_11_08_58.pdf"

#See also
  pdf2jpg
