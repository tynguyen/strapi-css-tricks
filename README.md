# CSS-Trick Website

# Usage

## Create Project

```
cd strapi-css-tricks
npx create-strapi-app strapi-api --quickstart
```

The command above will scaffold a new strapi project in the directory you specified and launch a tab with admin logging in on your web browser.

## Build Strapi Project

```
cd strapi-api
yarn build
```

## Launch Strapi Project

Run `yarn develop` to run the new project if it doesn't start automatically.

## Stop Strapi Project

Assume that the current one was created using the default port - 1337.

```
sudo fuser -k 1337/tcp
```

## Strapi Admin Login

User

```
tynguyen.develop@gmail.com
```

Password:

```
!!LoginDemo_2023
```

## Create a Nextjs Project

```
npx create-next-app nextjs-crypto-stats-app --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```
