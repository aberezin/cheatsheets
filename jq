# To pretty print the json:
jq "." < filename.json

# To access the value at key "foo":
jq '.foo'

# To access first list item:
jq '.[0]'

# to slice and dice:
jq '.[2:4]'
jq '.[:3]'
jq '.[-2:]'

# to extract all keys from json:
jq keys

# to sort by a key:
jq '.foo | sort_by(.bar)'

# to count elements:
jq '.foo | length'

# print only selected fields:
jq '.foo[] | {field_1,field_2}'

# print selected fields as text instead of json:
jq '.foo[] | {field_1,field_2} | join(" ")'

# only print records where given field matches a value
jq '.foo[] | select(.field_1 == "value_1")'

# ignore that which is more than 4 levels deep
jq  'del(.[]? | .[]? | .[]? | .[]?)'

#To pass a shell variable
#See this for why you want a ; after the FOO=b
#https://stackoverflow.com/questions/13998075/setting-environment-variable-for-one-program-call-in-bash-using-env
FOO=b; echo '{ "a":"1" , "b":"2" }'|jq --arg arf "$FOO" '.[$arf]'

#You cannot edit files in place. Instead use a tmp file or do this
#Thanks https://stackoverflow.com/a/61049639
contents="$(jq '.address = "abcde"' test.json)" && \
echo -E "${contents}" > test.json

#See Also
fx
