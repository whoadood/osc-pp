![Screenshot 2023-01-18 at 04-53-54 Welcome to the Open Stick Community!](https://user-images.githubusercontent.com/82413454/213140374-75a69fdc-9d6c-40d2-8f81-c15af169bd67.png)




# Open Stick Community - Product Page

This is a product landing page for the open stick community. It is meant to be a central location for all related links to the GP2040-CE firmware and partners.

## 🪄 Creators

For creators looking to be showcased as builders using GP2040-CE, you will need to create a fork of this repo. Once forked you will want to navigate to the [vendors.ts](/utils/vendors.ts) file.

```
/
|__utils/
   |__vendors.ts
```

From there you can click on the edit file icon in the upper right hand corner. Once editing follow vendor template to add your information to the hardware list.

If you wish to include an image of your project and its not hosted on a CDN, you will need to also include the image file in the [projects](/public/projects/) folder and update your hardware information with `/<YOUR_FILE_NAME>.<YOUR_FILE_EXTENSION>`.

```
/
|__public/
  |__projects/
     |__<YOUR_FILE_NAME>.<YOUR_FILE_EXTENSION>
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

<!-- ***************** STANDARD ASTRO README FOR REFERENCES *************** -->

<!-- # Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat). -->
