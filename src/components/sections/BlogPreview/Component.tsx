import { Button } from "@/components/ui/Button";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Media } from "@/components/ui/Media";
import type { BlogPreviewData } from "./schema";
import styles from "./styles.module.css";

export function BlogPreview({ title, mark, lead, cta, articles }: BlogPreviewData) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.intro}>
          <div className={styles.brand}>
            <h2 className="h1">{title}</h2>
            <Media media={mark} width={72} height={72} radius="50%" borderColor="#939393" />
          </div>
          <p className="lead muted">{lead}</p>
        </div>
        <Button className={styles.all} href={cta.href} variant={cta.variant ?? "outline"} size={cta.size ?? "lg"}>
          {cta.label}
        </Button>
      </div>
      <Grid>
        {articles.map((article, index) => (
          <GridItem key={article.title} span={4} spanTablet={index === 2 ? 12 : 6} spanMobile={12}>
            <article className={styles.card}>
              <h3 className="h3-alt">{article.title}</h3>
              <ul className={styles.meta}>
                <li>{article.category}</li>
                <li className={styles.date}>•&nbsp;&nbsp;{article.date}</li>
              </ul>
              <Media className={styles.cover} media={article.cover} radius={16} borderColor="#e3e3e3" width="100%" height={180} />
            </article>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
