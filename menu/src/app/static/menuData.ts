import { MenuCategory, Restaurants, Restaurants2 } from './../models/models';
export const menu: Restaurants[] = [
  {
    name: 'Sirena',
    items: [
      {
        item: 'Chicken Sandwich',
        description:
          'Diced chicken breast,Fresh mozzarella, tomato sauce, basil',
        price: '180',
      },
      {
        item: 'Chicken Sandwich 2',
        description:
          'Diced chicken breast,Fresh mozzarella, tomato sauce, basil',
        price: '180',
      },
      {
        item: 'Chicken Sandwich 3',
        description:
          'Diced chicken breast,Fresh mozzarella, tomato sauce, basil',
        price: '180',
      },
      {
        item: 'Chicken Sandwich 4',
        description:
          'Diced chicken breast,Fresh mozzarella, tomato sauce, basil',
        price: '180',
      },
      // {
      //   item: 'Pesto Pasta',
      //   description: 'Fusilli, basil pesto, cherry tomatoes, Parmesan cheese',
      //   price: '10.99',
      // },
      // {
      //   item: 'Burger',
      //   description:
      //     'Beef patty, lettuce, tomato, onion, pickles, ketchup, mayo',
      //   price: '8.99',
      // },
    ],
  },
  {
    name: 'Fratelli',
    items: [
      {
        item: 'Fit Sandwich',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      // {
      //   item: 'Pesto Pasta',
      //   description: 'Fusilli, basil pesto, cherry tomatoes, Parmesan cheese',
      //   price: '10.99',
      // },
      // {
      //   item: 'Burger',
      //   description:
      //   'Beef patty, lettuce, tomato, onion, pickles, ketchup, mayo',
      //   price: '8.99',
      // },
    ],
  },
];

export const categories: MenuCategory[] = [
  {
    name: 'Breakfast',
    items: [
      {
        name: 'Fit Sandwich',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 2',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 3',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 4',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 5',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 6',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
    ],
  },
  {
    name: 'Pasta',
    items: [
      {
        name: 'Fit Sandwich',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 2',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 3',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 4',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 5',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
      {
        name: 'Fit Sandwich 6',
        description: 'Potato Wedgies, Ketchup, Tomato, Cucumber',
        price: '140',
      },
    ],
  },
];

export const menu2: Restaurants2 = {
  name: 'Sirena',
  categoriesWithItems: categories,
};
