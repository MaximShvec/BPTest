import { RichText } from "@/components/rich/RichText";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Placeholder } from "@/components/ui/Placeholder";
import type { CardsRowData } from "./schema";
import styles from "./styles.module.css";

export function CardsRow({ items }: CardsRowData) {
  return (
    <Grid>
      {items.map((item, index) => (
        <GridItem
          key={item.title}
          span={item.span ?? 4}
          spanTablet={item.spanTablet ?? (index === 2 ? 12 : 6)}
          spanMobile={item.spanMobile ?? 12}
        >
          <Card theme={item.theme ?? "white"} className={styles.card}>
            <RichText as="h3" className="h3" value={item.title} />
            {item.text && !item.avatars ? <p className="body muted">{item.text}</p> : null}
            {item.badges ? (
              <div className={styles.badges}>
                {item.badges.map((badge) => (
                  <Placeholder key={badge} label={badge} width={56} height={56} radius={12} borderColor="#646464" />
                ))}
              </div>
            ) : null}
            {item.avatars ? (
              <div className={styles.avatars}>
                {item.avatars.map((color, avatarIndex) => (
                  <span key={`${color}-${avatarIndex}`} className={styles.avatar} style={{ background: color }} />
                ))}
              </div>
            ) : null}
            {item.avatars && item.text ? <p className={`body muted ${styles.bottom}`}>{item.text}</p> : null}
            {item.links ? (
              <div className={styles.links}>
                {item.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
            {item.cta ? (
              <Button className={styles.cta} href={item.cta.href} variant={item.cta.variant ?? "outline-dark"} size={item.cta.size ?? "lg"}>
                {item.cta.label}
              </Button>
            ) : null}
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
}
