import React from "react";
import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and accessToken must be defined in your environment variables."
  );
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
};

export async function getContentfulData() {
  // the function expects a parameter
  const { items } = await client.getEntries({
    content_type: "recipe",
    // "fields.slug": param.slug,            ### Probably problem is here. Need to check
  });

  return {
    props: { recipe: items[0] },
  };
}

export default async function Recipe(recipe) {
  let items = await getContentfulData();
  let storedRecipes = items.props.recipe;

  // const { title, cookingTime, ingredients, description } =
  //   items.props.recipe.fields;

  console.log("######", recipe);
  // console.log("@@@@@", storedRecipes);

  return <>{/* <div className="banner">{title}</div> */}</>;
}
