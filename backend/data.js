import bcrypt from 'bcryptjs';

const data = {
    users: [
      {
        name: 'Basir',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
        isSeller: true,
        seller: {
          name: 'Puma',
          logo: '/images/logo1.png',
          description: 'best seller',
          rating: 4.5,
          numReviews: 120,
        },
      },
      {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],
    products: [
      {
        image: "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRt5KRJXezCzqTgYG1G7vAVw",
        name: "Богиня Селена",
        price: 7200, countInStock: 10,
        category: 'People',
        rating: 4.5,
        type: 'Набор для вышивки бисером',
        numReviews: 10,
        description: 'Богиня Селена – это олицетворение Луны как невесты и любовницы.'
      },
      {
        image: "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxREGGpFMqprc_Guw8YtIgJKw",
        name: "Лунная фантазия",
        price: 6900, countInStock: 8,
        category: 'Animals',
        rating: 4.0,
        type: 'Схема для вышивки бисером',
        numReviews: 8,
        description: 'Отлично подойдёт для создания часов своими руками'
      },
      {
      image: "https://daloka.ru/wp-content/uploads/2019/10/IMG_1431.jpg",
      name: "Нить для вышивки бисером",
      price: 320,  countInStock: 67,
      category: 'Other',
      rating: 4.5,
      type: 'Нить для вышивки бисером',
      numReviews: 9,
      description: 'Лучший выбоор для вышивки бисером'
    },
    {
      image: "https://cdn.pethardware.com/media/product_images/glovers-needles-10-pk-2500-category-sqr.jpg",
      name: "Игла для вышивки бисером",
      price: 40,  countInStock: 542,
      category: 'Other',
      rating: 4,
      type: 'Игла для вышивки бисером',
      numReviews: 8,
      description: 'Лучший выбоор для вышивки бисером'
    },
    {
      image: "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRu7KHvMMQ8x4o1zwxFy7ZvA",
      name: "Осенний мосточек",
      price: 5100,  countInStock: 2,
      category: 'Scenery',
      rating: 3.5,
      type: 'Набор для вышивки бисером',
      numReviews: 7,
      description: 'Осенний пейзаж'
    },
  ],
};

export default data;