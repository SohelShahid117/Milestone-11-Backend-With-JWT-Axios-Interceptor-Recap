/*
1.install JWT--->https://github.com/auth0/node-jsonwebtoken
2.jwt.sign(payload,secret,{expiresIn:})
3.token send to client
*/

/*
generate token in your terminal is:
    require('crypto').randomBytes(64).toString('hex')

    give token is : '1d72dfbee5d590771f933bfc39ded26878891095fc76d84919be0e5c3b83da308a3a749f2eb2f85ec4947e56d0c900612b75d0a91864b0553e7d6da870af3278'

save this value in your .env file without quotation as like as 
    ACCESS_TOKEN_SECRET = 5b1a8c81b633c31bcc6eb2fbf849cc5b7568fbafeda304930627b5e44fae045568867a02d27e93124dadc8b6a92e858db200fd20ac7a1033226fd2887d42acf2
*/

/*
how to store token in the client side 
1.memory -- ok type
2.local storage -- ok type(XSS)
3.cookies : http only
*/

/*
1.set cookies with http only.for development secure:false
2.cors--->
    app.use(cors(
        {
            origin:['http://localhost:5173'],
            credentials:true
        }
    ));
3.client side axios setting
    in client side--->axios set withCredentials:true
*/

/*
1.to send cookies from the client make sure,you added withCredentials:true for the API call using axios
2.use cookie parser in server side as a middleware
*/
