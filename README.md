# 2018_MailAplikacija

# Folder structure: 
client/src/api.js - You’ll probably need to make calls to a backend API at some point. Put all that code here. If it gets too unwieldy in one file, make a client/src/api directory and put the area-specific API files under there – like userApi.js, productApi.js, etc.

client/src/components - All your Presentational (aka Dumb) components go here. These are the simple stateless ones that just take props.

client/src/containers - The Container components go here. These are the stateful ones, and the ones that make the API calls. If you’re using Redux, these are the ones that are connected to the store. Notice that CSS and tests are in the same folder as their respective components.

client/src/images - Put the images in one place to start with.

client/src/index.js - This is where you initialize the app and call ReactDOM.render, so it makes sense to keep this at the top level.

client/src/utils - You’ll probably end up with miscellaneous utility functions – error handlers, formatters, and the like. I usually put them in a file inside utils so I can access them easily.


