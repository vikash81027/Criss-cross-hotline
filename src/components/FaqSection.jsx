import Faq from "./Faq";
import styles from "./FaqSection.module.css";

const content = [
  { question: "odio quo inventore aliquam vero saepe reiciendis?" },
  { question: "odio quo inventore aliquam vero saepe reiciendis?" },
  { question: "odio quo inventore aliquam vero saepe reiciendis?" },
  { question: "odio quo inventore aliquam vero saepe reiciendis?" },
];
function FaqSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <h1>Frequently asked questions</h1> */}
        <h1>FAQs</h1>
        <ul>
          {content.map((item) => (
            <Faq item={item} key={item.question} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FaqSection;
