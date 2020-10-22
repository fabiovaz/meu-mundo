import React, { useCallback, useState } from 'react';
import HeaderLab from '../../components/HeaderLab';
import apiRandomMeal from '../../services/apiRandomMeal';
import { MealDTO } from './mealDTO';
import { Conteiner, ItemIngredients, ListIngredients, MealButton, MealContent, MealImg, MealInformation, MealIngredients, MealInstructions, MealText, MealTypes, MealTypesItem, MealTypesText, MealView } from './styles';


const RandomMeal: React.FC = () => {
  const [meal, setmeal] = useState<MealDTO | null>(null);

  const hadleMealGet = useCallback(async () => {
    const response = await apiRandomMeal.get('/random.php');
    const newMeal: MealDTO = response.data.meals[0];
    setmeal(newMeal);
  }, [setmeal])

  const ingredients = (Item: any) => {

    let Listingredients = []
    for (let i = 1; i < 20; i++) {

      if (Item[`strIngredient${i}`]) {
        Listingredients.push(
          <ItemIngredients>
            {Item[`strIngredient${i}`]} - {Item[`strMeasure${i}`]}
          </ItemIngredients>
        )
      }
      else {
        break;
      }
    }

    return Listingredients;
  }

  return (
    <Conteiner  >
      <HeaderLab title="Random Meal Generator" />

      <MealView>
        <MealButton onClick={hadleMealGet} >
          🍽 Gerar Receita 🍽
        </MealButton>
        {meal &&
          <MealContent>
            <MealText>{meal.strMeal}</MealText>
            <MealInformation>
              <MealImg src={meal.strMealThumb} />
              <MealInstructions>
                {meal.strInstructions}
              </MealInstructions>
            </MealInformation>
            <MealTypes>
              <MealTypesItem>Category: <MealTypesText>{meal.strCategory}</MealTypesText> </MealTypesItem>
              <MealTypesItem>Country: <MealTypesText>{meal.strArea}</MealTypesText> </MealTypesItem>
              <MealTypesItem>Tags: <MealTypesText>{meal.strTags}</MealTypesText> </MealTypesItem>
            </MealTypes>

            <MealIngredients>
              <h3>Ingredients:</h3>
              <ListIngredients>
                {ingredients(meal)}
              </ListIngredients>
            </MealIngredients>
          </MealContent>
        }
      </MealView>
    </Conteiner >
  );
}

export default RandomMeal;
