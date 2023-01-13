export type Hardware = {
  icon: string | null; // 'https://www.my-icon.com/project' your creator icon url - use null if n/a
  author: string | null; // your name/handle - use null if n/a
  image: {
    light: string | null; // /<YOUR_FILE_NAME>.<YOUR_FILE_EXTENSION> your project image - should be located in the public/projects directory - use null if n/a
    dark: string | null;
  } | null;
  name: string; // name of project
  href: string; // link to project website
};
export const hardware: Hardware[] = [
  {
    icon: "https://cdn.shopify.com/s/files/1/0612/9211/8210/files/ScrubTier_Hor_Logo_White_220x.png?v=1647889827",
    author: "SCRUBTIER",
    image: {
      light:
        "https://cdn.shopify.com/s/files/1/0612/9211/8210/products/imageshru016.jpg?v=1667149831&width=1100",
      dark: "https://cdn.shopify.com/s/files/1/0612/9211/8210/products/imageshru004.jpg?v=1667149831&width=1100",
    },
    name: "BentoBox",
    href: "https://scrubtier.co.uk/products/bentobox",
  },
  {
    icon: null,
    author: "jfedor2",
    image: {
      light:
        "https://raw.githubusercontent.com/jfedor2/flatbox/master/hardware-rev2/images/Flatbox-rev2b-finished-product.jpg",
      dark: null,
    },
    name: "Flatbox",
    href: "https://github.com/jfedor2/flatbox",
  },
  {
    icon: null,
    author: "Sharqo78",
    image: {
      light:
        "https://raw.githubusercontent.com/Sharqo78/Zandatsu/master/Assets/zandatsu_image0.png",
      dark: null,
    },
    name: "Zandatsu",
    href: "https://github.com/Sharqo78/Zandatsu",
  },
  {
    icon: null,
    author: "Chastetiddy",
    image: null,
    name: "Chastetiddy",
    href: "https://github.com/chastetiddy/chastity_device",
  },
  {
    icon: null,
    author: "UMS-Ultra",
    image: {
      light:
        "https://raw.githubusercontent.com/UMS-Ultra/BubbleBox/main/Images/BubbleBox%20Black%20and%20Light%20Grey%20Hex%20Keycaps.jpg",
      dark: null,
    },
    name: "BubbleBox",
    href: "https://github.com/UMS-Ultra/BubbleBox",
  },
  {
    icon: null,
    author: "SleepUnit",
    image: null,
    name: "CrushCounter",
    href: "https://github.com/SleepUnit/CrushCounter",
  },
  {
    icon: "https://i.etsystatic.com/isla/eeaa8c/51715873/isla_500x500.51715873_rahh64eq.jpg?version=0",
    author: "Mavercade",
    image: {
      light:
        "https://i.etsystatic.com/31891698/r/il/9fc21d/3629429007/il_794xN.3629429007_1sxc.jpg",
      dark: null,
    },
    name: "Mavercade",
    href: "https://www.etsy.com/shop/Mavercade",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0578/5770/3983/files/suble.png?v=1660245244&width=500",
    author: "Ultra-Arcade",
    image: {
      light:
        "https://cdn.shopify.com/s/files/1/0578/5770/3983/products/Hitbox_Mod5_main.png?v=1661192291",
      dark: null,
    },
    name: "Ultra-Arcade",
    href: "https://shop.ultraarcadebh.com.br/",
  },
];
