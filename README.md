
Submission for codedamn's frontend assignment

Built in 
- Next js
- Typescript
- Redux

the project contains 2 pages the default page and "/user" page 
the home page 
contains 4  tabs which collects user specific information such as 
- name
- education details
- work exp
- gender, etc

with complete form validation in all the tabs 
in the socials tab link validation has also been added for example a github url looks like => https://github.com/govind783
but if the user enters " https://github.com/user/govind783" or " https://gtihuh.com/govind783" then an error toast is triggered.
the same validation has also been added for all other social links be it github, linkedin, behance, etc.

when the user finally goes to the "Portfolio" tab and clicks on the save changes button he gets redirected to the "/user" page with all the data the user had entered in the form.
on the "/user" page the user sees hard coded data of certificates, playgrounds, etc where he is given the option to add a new certificate, a new playground, etc.


live link has been attached and project images have also been attached

HomePage profile tab =>

![Homepage Profile tab](https://live.staticflickr.com/65535/52738525061_58951f1d2c_z.jpg)


HomePage portfolio tab =>

![Homepage portfolio tab](https://live.staticflickr.com/65535/52738776454_fe22558e43_z.jpg)


HomePage portfolio tab =>

![Homepage portfolio tab](https://live.staticflickr.com/65535/52738936140_4ba50fbf1e_z.jpg)


User page =>

![user page](https://live.staticflickr.com/65535/52738776514_e691e313df_z.jpg)


user Page =>

![user page](https://live.staticflickr.com/65535/52738937500_fd6642b717_z.jpg)


User page =>

![user page](https://live.staticflickr.com/65535/52738936200_bcef8556ac_z.jpg)



User page =>

![user page](https://live.staticflickr.com/65535/52738936235_8a31c29207_z.jpg)


User page =>

![user page](https://live.staticflickr.com/65535/52738936230_54cbf0b5f6_z.jpg)


User page =>

![user page](https://live.staticflickr.com/65535/52738776589_c422bec3c6_z.jpg)



User page => 

![user page](https://live.staticflickr.com/65535/52739009343_2ca3e7a423_z.jpg)



User page =>

![user page](https://live.staticflickr.com/65535/52738936345_7f3a0e0e7d_z.jpg)






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
