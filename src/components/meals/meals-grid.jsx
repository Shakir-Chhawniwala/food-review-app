import MealItem from "./meal-item";
import styles from "./meals-gid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={styles.meals}>
        {meals.map((meal) => (
          <li key={meals.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
