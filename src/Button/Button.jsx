import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;

//External which is great for global styling small projects
//Modules prefered for individual component styling
//Inline good for small components with minimal styling.
