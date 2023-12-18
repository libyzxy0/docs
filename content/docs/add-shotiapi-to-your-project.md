---
title: How to use Shoti API on my Project
description: Read the documentation on how to integrate shoti-api to your project.
image: { src: "/path/to/image.jpg", alt: "Image Alt Text" }
---

# Shoti API
A powerful api that sends random tiktok beautiful girl videos.

## Installation 
Add this script to your project:
```js
<script src="https://unpkg.com/shoti-api@3.0.3/src/shoti.js"></script>
```
or install package 
```sh
npm install shoti-api
```

## Usage 

### Getting Videos

```js 
const { Shoti } = require('shoti-api');
const shoti = new Shoti('YOUR_API_KEY'); //$shoti-xxxxx... 
  
const data = shoti.getShoti();
console.log(data);
```
 Returns this
 
```json 
{
  "code": Number,
  "message": String,
  "errID": ObjectID, //false
  "data": {
    "_shoti_rank": Number,
    "region": String,
    "url": URL,
    "cover": URL,
    "title": String,
    "duration": String,
    "user": {
      "username": String,
      "nickname": String,
      "userID": String
    }
  }
}
```

### Getting Top 10 users

```js 
const { Shoti } = require('shoti-api');
const shoti = new Shoti();
  
const data = shoti.getTopUsers();
console.log(data);
```

 Returns an **Array(10)**
 
 ```js
[
  {
    username: String, 
    requests: String
  }, 
  //...
]
 ```
 Note: Remove this line if you are using vanillajs. 
 ```js
 const { Shoti } = require('shoti-api');
 ```
 
## Get Apikey
* Get your apikey [here](https://shoti-api.libyzxy0.xyz). It starts with $shoti-
## LICENSE
* [MIT License](https://github.com/libyzxy0/shoti#MIT-1-ov-file)