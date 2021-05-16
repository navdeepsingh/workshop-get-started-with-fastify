# Testing the API

When you have completed building the application and have it running,
you can test it by making requests to it.

## Example cURL requests

You can run the following [cURL](https://curl.se/) commands in your terminal.

### Create recipe (valid)

```bash
curl --verbose \
  --request POST \
  --url http://localhost:3000/recipes \
  --header 'Content-Type: application/json' \
  --data '{
		"name": "Tabbouleh",
		"ingredients": [
			"parsley",
			"2 lemons",
			"cucumber",
			"bulgur"
		],
		"time": 15
	}'
```

### Create recipe (invalid)

```bash
curl  --verbose \
  --request POST \
  --url http://localhost:3000/recipes \
  --header 'Content-Type: application/json' \
  --data '{
		"name": "Tabbouleh",
		"ingredients": "parsley, 2 lemons, cucumber, bulgur"
	}'
```

## Insomnia collection with example requests

There is an Insomnia collection in this project
([insomnia-collection.json](./insomnia-collection.json))
which contains example requests that you can use to test your API.

To use this collection you will need to install the tool
[Insomnia](https://insomnia.rest/download) and then import the collection.
