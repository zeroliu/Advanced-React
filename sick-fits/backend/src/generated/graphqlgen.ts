// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo, GraphQLIsTypeOfFn } from "graphql";
import { Item, User } from "./prisma-client";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type ItemsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item[] | Promise<Item[]>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item[] | Promise<Item[]>;
      };

  export interface Type {
    items:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item[] | Promise<Item[]>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item[] | Promise<Item[]>;
        };
  }
}

export namespace ItemResolvers {
  export const defaultResolvers = {
    id: (parent: Item) => parent.id,
    title: (parent: Item) => parent.title,
    description: (parent: Item) => parent.description,
    image: (parent: Item) => (parent.image === undefined ? null : parent.image),
    largeImage: (parent: Item) =>
      parent.largeImage === undefined ? null : parent.largeImage,
    price: (parent: Item) => parent.price,
    createdAt: (parent: Item) => parent.createdAt,
    updatedAt: (parent: Item) => parent.updatedAt
  };

  export type IdResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type TitleResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type DescriptionResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type ImageResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type LargeImageResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type PriceResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => number | Promise<number>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type UpdatedAtResolver =
    | ((
        parent: Item,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    title:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    description:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    image:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    largeImage:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    price:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => number | Promise<number>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => number | Promise<number>;
        };

    createdAt:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    updatedAt:
      | ((
          parent: Item,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Item,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    __isTypeOf?: GraphQLIsTypeOfFn<Item | User, Context>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsCreateItem {
    title: string;
    description: string;
    price: number;
    image?: string | null;
    largeImage?: string | null;
  }

  export type CreateItemResolver =
    | ((
        parent: undefined,
        args: ArgsCreateItem,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Item | Promise<Item>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>;
      };

  export interface Type {
    createItem:
      | ((
          parent: undefined,
          args: ArgsCreateItem,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Item | Promise<Item>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateItem,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Item | Promise<Item>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
    email: (parent: User) => parent.email
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type EmailResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    email:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    __isTypeOf?: GraphQLIsTypeOfFn<Item | User, Context>;
  }
}

export namespace NodeResolvers {
  export interface Type {
    __resolveType: (
      value: Item | User,
      context: Context,
      info: GraphQLResolveInfo
    ) => "Item" | "User" | Promise<"Item" | "User">;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Item: ItemResolvers.Type;
  Mutation: MutationResolvers.Type;
  User: UserResolvers.Type;
  Node?: NodeResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}
