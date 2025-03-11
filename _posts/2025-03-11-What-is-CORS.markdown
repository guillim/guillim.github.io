---
layout: blog
title: "What is CORS ?"
date: 2025-03-11 03:22:48 +0100
categories: security
comments: true
thumbnail: /assets/img/cors.png
---

# Understanding the Importance of CORS in Web Application Development

In the realm of web development, ensuring the security of user data is paramount. One critical mechanism that aids in this endeavor is **Cross-Origin Resource Sharing (CORS)**. To grasp its significance, let's delve into a practical scenario.

## The Cross-Origin Request Vulnerability

Consider a user who is authenticated on `yourcrm.com`, a CRM platform. If this user visits a malicious site, say `evil-site.com`, that site could execute the following script:

```javascript
fetch("https://api.yourcrm.com/delete-all-customers", {
    method: "POST",
    credentials: "include"
});
```

Here, the browser, adhering to standard behavior, attaches the user’s credentials (like cookies or JWTs) associated with api.yourcrm.com to the request. Consequently, api.yourcrm.com might process this unauthorized request, leading to potential data breaches or loss.

## The Role of CORS in Mitigation

CORS serves as a safeguard against such vulnerabilities. By configuring the server at api.yourcrm.com to allow requests only from trusted origins, the malicious request from evil-site.com would be blocked by the browser, preventing unauthorized actions.

### Implementing Effective CORS Policies

To enhance security:
-	Specify Allowed Origins: Configure the server to permit requests solely from trusted domains, such as:
 ```http
Access-Control-Allow-Origin: https://yourcrm.com
Access-Control-Allow-Credentials: true
```

- Restrict Methods and Headers: Limit the HTTP methods and headers to those necessary for legitimate operations.
- Utilize SameSite Cookies: Set cookies with the SameSite attribute to Lax or Strict, ensuring they aren’t sent with cross-origin requests.

## Conclusion

Proper implementation of CORS is vital in web application development. It acts as a defense mechanism, preventing unauthorized websites from exploiting user credentials and interacting with your application’s API. By meticulously configuring CORS policies, developers can uphold the security and integrity of user data.

### Resources

- 📕 article from [basecamp](https://basecamp.com/shapeup/1.1-chapter-02#wireframes-are-too-concrete)
