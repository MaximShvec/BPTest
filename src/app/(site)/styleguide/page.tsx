import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Field } from "@/components/ui/Field";
import { Grid, GridItem } from "@/components/ui/Grid";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Tabs } from "@/components/ui/Tabs";
import { renderSections } from "@/components/sections/renderSections";
import { getCommon } from "@/lib/content";
import styles from "./page.module.css";

const buttonVariants = ["primary", "dark", "outline", "outline-dark", "outline-ink", "ghost"] as const;
const buttonSizes = ["xl", "xl-text", "lg", "md"] as const;

export const metadata: Metadata = {
  title: "Style guide — Balance Pay",
};

export default function StyleGuidePage() {
  const common = getCommon();

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.block}>
          <p className="caption">UI kit</p>
          <h1 className="h1">{common.brand.name}</h1>
          <p className={`lead muted ${styles.tagline}`}>{common.brand.tagline}</p>
          <p className="body">
            <span className="h3">H3 </span>
            <span className="h3-alt">H3 alt </span>
            <span className="h4">H4 </span>
            <span className="small">small </span>
            <span className="muted-300">muted</span>
          </p>
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Кнопки</h2>
          {buttonSizes.map((size) => (
            <div className={styles.row} key={size}>
              {buttonVariants.map((variant) => (
                <Button
                  key={`${size}-${variant}`}
                  size={size}
                  variant={variant}
                  ring={variant === "outline-dark" ? "#939393" : undefined}
                >
                  {variant}
                </Button>
              ))}
            </div>
          ))}
          <Button href="/" variant="primary" size="lg">
            {common.cta.signup}
          </Button>
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Карточки</h2>
          <Grid>
            {(["white", "light", "dark", "black", "lime", "blue"] as const).map((theme) => (
              <GridItem key={theme} span={4} spanTablet={6} spanMobile={12}>
                <Card theme={theme}>
                  <p className="h4">{theme}</p>
                  <p className="body muted">Текст карточки</p>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Медиа</h2>
          <div className={styles.media}>
            <Media media={{ placeholder: "ФОТО 16:9 — пример", ratio: "16/9" }} />
          </div>
          <div className={styles.media}>
            <Media media={{ src: "/img/hero-globe.webp", alt: "Глобус", width: 480, height: 320 }} />
          </div>
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Иконки</h2>
          <div className={styles.icons}>
            <Icon name="arrow-right" />
            <Icon name="plus" />
            <Icon name="minus" />
            <Icon name="chevron-down" />
            <Icon name="globe" />
            <Icon name="mail" />
            <Icon name="lock" />
            <Icon name="chevron-small" />
          </div>
          <div className={styles.row}>
            <Chip>BTC</Chip>
            <Chip href="/">USDT</Chip>
          </div>
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Аккордеон</h2>
          <Accordion
            items={[
              { title: "Первый вопрос", content: "Ответ на первый вопрос." },
              { title: "Второй вопрос", content: "Ответ на второй вопрос." },
            ]}
          />
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Табы</h2>
          <Tabs
            items={[
              { id: "usd", label: "USD", content: <p className="body">Содержимое USD</p> },
              { id: "eur", label: "EUR", content: <p className="body">Содержимое EUR</p> },
            ]}
          />
        </div>
      </Container>

      <Container>
        <div className={styles.block}>
          <h2 className="h2">Поля</h2>
          <Field label="Email" name="email" placeholder="name@balancepay.org" />
          <Field
            as="select"
            label="Валюта"
            name="currency"
            options={[
              { value: "usd", label: "USD" },
              { value: "eur", label: "EUR" },
            ]}
          />
          <Field as="textarea" label="Сообщение" name="message" placeholder="Текст" />
          <Checkbox name="agree" label="Согласен с условиями" />
        </div>
      </Container>

      <Container>
        {renderSections([{ type: "placeholder", title: "Секция placeholder" }])}
      </Container>
    </div>
  );
}
