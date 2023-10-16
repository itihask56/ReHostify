// import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";
 
// declare module 'next-auth'{
//     interface User{
//         id:number
        
//     }
// }
// declare module 'next-auth/next'{
//     interface Session{
//         user:{
//             id:String
//         }& DefaultSession['user']
//     }
// }
 

 
declare module 'next-auth'{
    interface User{
        id:number,
    }
}
declare module 'next-auth'{
    interface Session{
        user:{
            id:string
        }& DefaultSession['user']
    }
}
