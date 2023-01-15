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
    image:
      "https://cdn.discordapp.com/attachments/1049370166049394829/1051980324340506705/IMG_5109.jpg",
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
    image:
      "https://thearcadestick.com/wp-content/uploads/2021/10/Crush-Counter-1024x572.jpg",
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
  {
    icon: "https://avatars.githubusercontent.com/u/32771064?v=4",
    author: "TheTrain",
    image:
      "https://cdn.discordapp.com/attachments/1064205043059933284/1064206629282783293/Pico_Arcade_Breakout_Board_-_Front_render.png",
    name: "Pico Arcade Breakout Board",
    href: "https://github.com/TheTrainGoes/GP2040-Projects/tree/main/Pico%20Arcade%20Breakout%20Board",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/32771064?v=4",
    author: "TheTrain",
    image:
      "https://cdn.discordapp.com/attachments/1064207862135525517/1064208490907828275/Pico_Mini_Fighter_-_Front_render.png",
    name: "Pico Mini Fighter",
    href: "https://github.com/TheTrainGoes/GP2040-Projects/tree/main/Pico%20Mini%20Fighter",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/32771064?v=4",
    author: "TheTrain",
    image:
      "https://cdn.discordapp.com/attachments/1064204964056027156/1064206283827318865/Pico_Advanced_Breakout_Board_-_Assembled.JPG",
    name: "Pico Advanced Breakout Board",
    href: "https://github.com/TheTrainGoes/GP2040-Projects/tree/main/Pico%20Advanced%20Breakout%20Board",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/32771064?v=4",
    author: "TheTrain",
    image:
      "https://cdn.discordapp.com/attachments/1064204904924712960/1064205659408695387/Pico_Basic_Breakout_Board_-_Front_render.png",
    name: "Pico Basic Breakout Board",
    href: "https://github.com/TheTrainGoes/GP2040-Projects/tree/main/Pico%20Basic%20Breakout%20Board",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/32771064?v=4",
    author: "TheTrain",
    image:
      "https://cdn.discordapp.com/attachments/1064204934398083235/1064207605637062747/Screen_Shot_2023-01-15_at_10.40.27_AM.png",
    name: "Pico EZ Connect",
    href: "https://github.com/TheTrainGoes/GP2040-Projects/",
  },
];
