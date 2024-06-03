import base64

# Read the TTF file
with open("./NotoColorEmoji-Regular.ttf", "rb") as font_file:
    encoded_string = base64.b64encode(font_file.read()).decode('utf-8')

# Print the base64 string
print(encoded_string)
