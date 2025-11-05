import Article from "./Article";
import "./MainSection.css";

function MainSection() {
  return (
    <main>
      <section id="articles">
        <h2>Latest Articles</h2>

        <Article>
          <h3 className="text-primary">Why Semantic HTML Matters</h3>
          <p>
            Semantic tags improve accessibility, SEO, and developer understanding.
            Use tags like &lt;section&gt; and &lt;article&gt; wisely.
          </p>
        </Article>

        <Article>
          <h3 className="text-secondary">Getting Started with Web Design</h3>
          <p>
            Learn how to structure your page properly using semantic HTML and CSS
            to build beautiful layouts.
          </p>
        </Article>

        <Article>
          <h3 className="text-success">Advanced CSS Techniques</h3>
          <p>
            Explore CSS Grid, Flexbox, and animations for modern layouts.
          </p>
        </Article>
      </section>

      <section id="tutorials">
        <h2 className="text-info">Web Design Tutorials</h2>

        <Article>
          <h3>HTML Basics</h3>
          <p>
            This tutorial covers the building blocks of HTML, including elements, tags, and structure.
          </p>
        </Article>

        <Article>
          <h3 className="text-warning">CSS Box Model Explained</h3>
          <p>
            Understand how padding, border, and margin interact in the CSS box model.
          </p>
        </Article>
      </section>
    </main>
  );
}

export default MainSection;
