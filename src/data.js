// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/feature-1.jpg';
import Features2Img from './assets/img/feature-2.jpg';
import New1 from './assets/img/new-1.jpeg';
import New2 from './assets/img/new-2.jpeg';
import New3 from './assets/img/new-3.jpeg';
import New4 from './assets/img/new-4.jpeg';
import Product1Img from './assets/img/products/product-1.jpeg';
import Product2Img from './assets/img/products/product-2.jpeg';
import Product3Img from './assets/img/products/product-3.jpeg';
import Product4Img from './assets/img/products/product-4.jpeg';
import Product5Img from './assets/img/products/product-5.jpeg';
import Product6Img from './assets/img/products/product-6.jpeg';
import Product7Img from './assets/img/products/product-7.jpeg';
import Product8Img from './assets/img/products/product-8.jpeg';
import Product9Img from './assets/img/products/product-9.jpeg';
import Product10Img from './assets/img/products/product-10.jpeg';
import TestimonialImg from './assets/img/testimonial.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'features',
    href: 'features',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

export const hero = {
  title: 'Awesome Streetwear From THREADS',
  subtitle:
    'Innovative & creative shop for streetwear',
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '2',
    text: 'Year Of Experience',
  },
  {
    value: '2',
    text: 'New Design/Month',
  },
  {
    value: '100k+',
    text: 'Hoodies sold',
  },
  {
    value: '15+',
    text: 'Creative Styles',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'All material is made of 100% cotton',
  subtitle:
    '100% cotton for comfortable wear experience',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Development of Hoodies',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Create your own Design',
    subtitle:
      'Submit your design and we will make it for you.',
  },
};

export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Introducing Anime Hoodies',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'Hoodie',
      image: <New1 />,
    },
    {
      name: 'Hoodie',
      image: <New2 />,
    },
    {
      name: 'Hoodie',
      image: <New3 />,
    },
    {
      name: 'Hoodie',
      image: <New4 />,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'Check all the products available',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Plain Black T-shirt',
          price: 20,
          oldPrice: 35,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Plain Red T-Shirt',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Cap',
          price: 15,
          oldPrice: 30,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Blue Hoodie',
          price: 75,
          oldPrice: 100,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Light Blue Hoodie',
          price: 95,
          oldPrice: 115,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Beige Hoodie',
          price: 85,
          oldPrice: 110,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Olive Pants',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Hoodies and Pants COMBO',
          price: 185,
          oldPrice: 190,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Hoodies and Pants COMBO',
          price: 155,
          oldPrice: 180,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Brown Jackets',
          price: 175,
          oldPrice: 200,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Plain Black T-shirt',
          price: 20,
          oldPrice: 35,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Plain Red T-Shirt',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Cap',
          price: 15,
          oldPrice: 30,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Blue Hoodie',
          price: 75,
          oldPrice: 100,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Light Blue Hoodie',
          price: 95,
          oldPrice: 115,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Beige Hoodie',
          price: 85,
          oldPrice: 110,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Olive Pants',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Hoodies and Pants COMBO',
          price: 185,
          oldPrice: 190,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Hoodies and Pants COMBO',
          price: 155,
          oldPrice: 180,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Brown Jackets',
          price: 175,
          oldPrice: 200,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Some Reviews By Our Customers',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: '',
      message:
        '“THEY ARE AWESOME”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: '',
      message:
      '“Loved The products and Quality”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula',
      occupation: 'Fashion Influencer',
      message:
      '“Must Have in your Wardrobe”',
    },
  ],
};

export const newsletter = {
  title: 'Get your hands on new launches before anybody else',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};
