# image_api_project

Repository for image processing API project:

-   Example URL: http://localhost:3000/api?width=150&height=250&filename=icelandwaterfall
-   API will take parse input taken from a query string, validate the parsed input against desired keywords.
-   With the validated input, it will check the cache for an existing image with the desired specifications and display that cached image, if extent.
-   If the desired image does not exist in cache, it will generate the image based on validated query string input; cache and display the image.
