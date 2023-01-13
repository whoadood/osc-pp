export type Vendor = {
  icon: string | null; // **OPTIONAL** 'https://www.my-icon.com/project' your creator icon url - use null if n/a
  author: string | null; // **OPTIONAL** your name/handle - use null if n/a
  image: string | null; // **OPTIONAL** 'https://YOUR_CDN.com/YOUR_IMAGE' | alt: /<YOUR_FILE_NAME>.<YOUR_FILE_EXTENSION> your project image - should be located in the public/projects directory - use null if n/a
  name: string; // name of project
  href: string; // link to project website
};
export const vendors: Vendor[] = [
  {
    icon: "https://cdn.shopify.com/s/files/1/0612/9211/8210/files/ScrubTier_Hor_Logo_White_220x.png?v=1647889827",
    author: "SCRUBTIER",
    image:
      "https://cdn.shopify.com/s/files/1/0612/9211/8210/products/imageshru016.jpg?v=1667149831&width=1100",

    name: "BentoBox",
    href: "https://scrubtier.co.uk/products/bentobox",
  },
  {
    icon: null,
    author: "jfedor2",
    image:
      "https://raw.githubusercontent.com/jfedor2/flatbox/master/hardware-rev2/images/Flatbox-rev2b-finished-product.jpg",

    name: "Flatbox",
    href: "https://github.com/jfedor2/flatbox",
  },
  {
    icon: null,
    author: "Sharqo78",
    image:
      "https://raw.githubusercontent.com/Sharqo78/Zandatsu/master/Assets/zandatsu_image0.png",

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
    image:
      "https://raw.githubusercontent.com/UMS-Ultra/BubbleBox/main/Images/BubbleBox%20Black%20and%20Light%20Grey%20Hex%20Keycaps.jpg",
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
    image:
      "https://i.etsystatic.com/31891698/r/il/9fc21d/3629429007/il_794xN.3629429007_1sxc.jpg",

    name: "Mavercade",
    href: "https://www.etsy.com/shop/Mavercade",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0578/5770/3983/files/suble.png?v=1660245244&width=500",
    author: "Ultra-Arcade",
    image:
      "https://cdn.shopify.com/s/files/1/0578/5770/3983/products/Hitbox_Mod5_main.png?v=1661192291",

    name: "Ultra-Arcade",
    href: "https://shop.ultraarcadebh.com.br/",
  },
  {
    icon: "https://i.etsystatic.com/isla/4b663e/37496037/isla_500x500.37496037_lgwwegbr.jpg?version=0",
    author: "thnikk",
    image:
      "https://i.etsystatic.com/10408775/r/il/09b343/4181633957/il_794xN.4181633957_trxq.jpg",

    name: "Fightboard",
    href: "https://www.etsy.com/shop/thnikk?ref=seller-platform-mcnav&section_id=41068960",
  },
  {
    icon: "https://cdn.shopify.com/s/files/1/0374/7499/2261/files/New-MA-Logo_Tiny_180x.png?v=1644347668",
    author: "Mister-Addon",
    image:
      "https://cdn.shopify.com/s/files/1/0374/7499/2261/products/ReflexFightingBoard_1024x1024@2x.jpg?v=1673333907",
    name: "Mister-Addon",
    href: "https://misteraddons.com/collections/parts/products/reflex-encode-fighting-board",
  },
];
