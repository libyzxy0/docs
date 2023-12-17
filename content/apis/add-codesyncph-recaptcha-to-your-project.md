---
title: Integrating CSPHRecaptcha to your project 
description: Read the documentation on how to integrate CSPHRecaptcha to your project.
---

<img style="height: 7rem; border-radius: 6px; border: 3px solid #34d399;" src="https://avatars.githubusercontent.com/u/149454716?s=200&v=4" alt="Thumbnail" />

# CSPHRecaptcha 

## Installation 
Add this script to your project <head> tag
```js
 <script src="https://recaptcha.codesync.ph/js/CSPHRecaptchaV1.js"></script>
```

## Displaying the CSPHRecaptchaV1
Add this div element to your html file
```js
 <div class="csph-recaptcha"></div>
```

## Verifying response 

```js
 async function verify(input) {
    console.log(this.apikey)
    try {
      const response = await fetch('https://recaptcha.codesync.ph', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${this.apikey}`
        },
        body: `CSPHrecaptcha=${encodeURIComponent(input)}`,
        });
      const data = await response.json();
       return {
         success: data.status == 'success' ? true : false, 
         token: data['ID']
       }
    } catch (err) {
      console.error(err);
      return {
         success: false, 
         token: null
      }
    }
  } 
    
    const data = await verify("Captcha String");
    console.log(data)
```
 This function returns this
```js
 {
   success: Boolean, 
   token: String
 }
```

### API Author 
* Albert Winkler