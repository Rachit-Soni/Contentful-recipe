import React from "react";
import { createClient } from "contentful";
import RecipeCards from "../components/RecipeCards";
import styles from "./Recipes.module.css";

export async function getContentfulData() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error(
      "Contentful spaceId and accessToken must be defined in your environment variables."
    );
  }

  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
  };
}
export default async function Recipes() {
  let items = await getContentfulData();
  let storedRecipes = items.props.recipes;

  console.log("********************");
  //   console.log(items);
  console.log(items.props.recipes);
  return (
    <>
      <h2 className={styles.heading}>Recipes List:</h2>
      <div className={styles.recipeContainer}>
        {storedRecipes.map((recipe) => (
          <RecipeCards key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
