# BSale-backend

* **URL** : `/api/products`
 
* **Method** : `GET`

* **URL Params**
  * **Optional**: 
    * `name` : Name of the product you are looking for
    * `category` : Category of the product
    * `page` : Page of list of products

## Success response

**Code** : `200`

**Exmaple responses**

For a query wihtout params.
```json
{
  "done":true,
  "data":{
    "result":
      [
        {
        "id":5,
        "name":"ENERGETICA MR BIG",
        "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price":1490,
        "discount":20,
        "category":"bebida energetica"
        },
      ],
     "totalItems":1,
     "totalPages":1,
     "currentPage":1
    }
  }
```

For a query with `category: 1`
```json
{
   "done":true,
   "data":{
      "result":[
         {
            "id":23,
            "name":"RON BACARDI AÑEJO",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
            "price":4990,
            "discount":0,
            "category":"ron"
         },
         {
            "id":24,
            "name":"RON BACARDI 8 AÑOS",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
            "price":5990,
            "discount":0,
            "category":"ron"
         },
      ],
      "totalItems":2,
      "totalPages":1,
      "currentPage":1
   }
}
```

For a query with `name: pap` and `category: 5`

```json
{
   "done":true,
   "data":{
      "result":[
         {
            "id":54,
            "name":"Papas Fritas Lisas Bolsa Grande",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
            "price":1490,
            "discount":0,
            "category":"snack"
         },
         {
            "id":55,
            "name":"Papas Fritas Bolsa Pequeña",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
            "price":500,
            "discount":0,
            "category":"snack"
         },
         {
            "id":56,
            "name":"Papas Fritas Tarro",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
            "price":1990,
            "discount":0,
            "category":"snack"
         }
      ],
      "totalItems":3,
      "totalPages":1,
      "currentPage":1
   }
}
```

----

* **URL** : `/api/products/category/:idCategory `
* **URL Params**
  * **Required**:
    * `idCategory` : Id of the category of the product
    
## Success response

**Code** : `200`

**Exmaple responses**

For a query with `idCategory` : 6
```json
{
   "done":true,
   "data":{
      "result":[
         {
            "id":98,
            "name":"Cerveza Escudo Normal LATA 350CC",
            "url_image":"",
            "price":600,
            "discount":0,
            "category":6
         },
         {
            "id":99,
            "name":"Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image":"",
            "price":800,
            "discount":0,
            "category":6
         }
      ]
   }
}
```

----

* **URL** : `/api/products/name/:productName `
* **URL Params**
  * **Required**:
    * `productName` : Name of the product
    
## Success response

**Code** : `200`

**Exmaple responses**

For a query with `productName` : Red
```json
{
   "done":true,
   "data":{
      "result":[
         {
            "id":6,
            "name":"ENERGETICA RED BULL",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price":1490,
            "discount":0,
            "category":1
         }
      ]
   }
}
```

-----


* **URL** : `/api/categories `
    
## Success response

**Code** : `200`

**Exmaple responses**

Get all category list
```json
{
   "done":true,
   "data":[
      {
         "id":1,
         "name":"bebida energetica"
      },
      {
         "id":2,
         "name":"pisco"
      },
      {
         "id":3,
         "name":"ron"
      },
      {
         "id":4,
         "name":"bebida"
      },
   ]
}
```
