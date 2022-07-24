
# Api MyShoes

Welcome to my project, this is the api that feeds the myshoes frontend

URL: https://apimyshoes.herokuapp.com/
## API Reference

#### Get all products

```http
  GET /products
```

#### Get product by id

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |


#### Post product

```http
  POST /products
```
By body should be sent (**All Required**):

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | name of the product |
| `description`      | `string` | description of the product |
| `price`      | `number` | price of the product |
| `image_url`      | `string[]` | array with the urls of the images |
| `brand`      | `string` | the name of the product brand |
| `logo_url`      | `string` | brand image url |

```http
  DELETE /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to delete |

## Tech Stack

**Server:** Node, Express,Typescript

**Libraries:** JWT,bcrypt


## Run Locally

Clone the project

```bash
  git clone https://github.com/nicoamicone1/ApiMyShoes.git
```

Go to the project directory

```bash
  cd api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

