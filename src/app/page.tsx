import { Container, Footer, Grid, Header, Hero, Teaser } from '@/app/components'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Container>
        <h1 className="headline-t1">Nagelstudio Anna Jarosch</h1>
        <Grid>
          <Teaser />
          <Teaser />
          <Teaser />
        </Grid>
      </Container>
      <Footer />
    </main>
  )
}
